'use strict';
// Loads the native mywebui_scada_engine addon. The napi-rs generated loader
// (native/index.js) resolves the correct binary per platform — locally the
// freshly built <name>.<triple>.node, and in a released install the matching
// optional platform package. This module is the ONLY place main.js loads the
// engine from, so the load path stays in one spot as distribution evolves.
// NOTE: consumers MUST require this with the explicit ".cjs" extension
// (require('.../lib/engineBridge.cjs')) — Node's CJS resolver never auto-appends .cjs.
//
// The npm package ships every platform's engine gzip-compressed
// (native/mywebui_scada_engine.<triple>.node.gz, ioBroker's rule: one compressed
// file per platform, ~11 MB uncompressed otherwise). Before native/index.js runs,
// the ONE file this host needs is expanded next to it (first load, and again when
// an update brings a different .gz). When the install is read-only it is expanded into
// a per-user temp cache instead and loaded from there.
const path = require('node:path');
const fs = require('node:fs');
const zlib = require('node:zlib');
const os = require('node:os');
const crypto = require('node:crypto');

const NATIVE = path.join(__dirname, '..', 'native');
const NAME = 'mywebui_scada_engine';

// the same musl test as native/index.js
function isMusl() {
    try {
        if (process.report && typeof process.report.getReport === 'function') return !process.report.getReport().header.glibcVersionRuntime;
        return fs.readFileSync(require('node:child_process').execFileSync('which', ['ldd']).toString().trim(), 'utf8').includes('musl');
    } catch (e) { return true; }
}

/** The napi triple of this host, as in native/index.js file names (null = not one we ship). */
function hostTriple(platform = process.platform, arch = process.arch) {
    if (platform === 'win32') return arch === 'x64' ? 'win32-x64-msvc' : null;
    if (platform === 'darwin') return arch === 'arm64' ? 'darwin-arm64' : arch === 'x64' ? 'darwin-x64' : null;
    if (platform === 'linux') {
        const musl = isMusl();
        if (arch === 'x64') return musl ? 'linux-x64-musl' : 'linux-x64-gnu';
        if (arch === 'arm64') return musl ? 'linux-arm64-musl' : 'linux-arm64-gnu';
        if (arch === 'arm') return musl ? 'linux-arm-musleabihf' : 'linux-arm-gnueabihf';
    }
    return null;
}

/**
 * Expand the host's .node.gz. Returns { inPlace: true } when the .node now sits in
 * native/ (native/index.js finds it), { file } when it went to the temp cache, or
 * null when there is nothing to expand (a dev build, or no binary for this host).
 */
function expand(triple) {
    const target = path.join(NATIVE, `${NAME}.${triple}.node`);
    const gz = target + '.gz';
    if (!fs.existsSync(gz)) return null;
    // Which .gz the expanded file came from: its hash, in a stamp beside it. Not the mtime —
    // npm gives every file in a tarball the same 1985 date, so after an update a stale
    // engine would look current.
    const packed = fs.readFileSync(gz);
    const stamp = crypto.createHash('sha256').update(packed).digest('hex');
    const stampFile = target + '.gz.sha256';
    // …and the size the gzip trailer records (last 4 bytes): a damaged or swapped .node is
    // expanded again instead of being loaded
    const size = packed.length >= 4 ? packed.readUInt32LE(packed.length - 4) : -1;
    try { if (fs.readFileSync(stampFile, 'utf8').trim() === stamp && fs.statSync(target).size === size) return { inPlace: true }; } catch (e) { /* no stamp or no file: expand */ }
    const buf = zlib.gunzipSync(packed);
    try {
        // write beside, then rename: a crash mid-write never leaves a half binary behind
        const tmp = `${target}.${process.pid}.tmp`;
        fs.writeFileSync(tmp, buf);
        fs.renameSync(tmp, target);
        fs.writeFileSync(stampFile, stamp);
        return { inPlace: true };
    } catch (e) {
        return { file: cached(triple, buf) };
    }
}

/**
 * Read-only install: the engine goes to a cache folder of THIS user and is loaded from
 * there. The temp folder is shared on Linux, so nothing found there is trusted: the
 * folder must be ours (owner, not a symlink, 0700) and a file in it is loaded only when
 * its whole content hashes to the engine just expanded — otherwise another local user
 * could plant a library under the expected name and have ioBroker load it.
 */
function cached(triple, buf) {
    const uid = typeof process.getuid === 'function' ? process.getuid() : null;
    const who = uid !== null ? String(uid) : String(os.userInfo().username).replace(/[^\w.-]/g, '_');
    const dir = path.join(os.tmpdir(), `iobroker.mywebui-engine-${who}`);
    fs.mkdirSync(dir, { recursive: true, mode: 0o700 });
    const st = fs.lstatSync(dir);
    if (!st.isDirectory() || st.isSymbolicLink()) throw new Error(`unsafe engine cache ${dir}: not a plain folder`);
    if (uid !== null && (st.uid !== uid || (st.mode & 0o077))) throw new Error(`unsafe engine cache ${dir}: not owned by this user with mode 0700`);
    const sha = crypto.createHash('sha256').update(buf).digest('hex');
    const file = path.join(dir, `${NAME}.${triple}-${sha.slice(0, 16)}.node`);
    try {
        const fst = fs.lstatSync(file);
        if (fst.isFile() && !fst.isSymbolicLink() && crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex') === sha) return file;
        fs.rmSync(file, { force: true });
    } catch (e) { /* not there yet */ }
    const tmp = `${file}.${process.pid}.tmp`;
    fs.writeFileSync(tmp, buf, { flag: 'wx', mode: 0o700 });
    fs.renameSync(tmp, file);
    return file;
}

function load() {
    const triple = hostTriple();
    if (triple) {
        let got = null;
        try { got = expand(triple); } catch (e) { /* fall through: native/index.js names what is missing */ }
        if (got && got.file) return require(got.file);
    }
    return require(path.join(NATIVE, 'index.js'));
}

module.exports = load();
