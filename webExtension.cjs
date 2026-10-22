'use strict';

const https = require('https');
const http  = require('http');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// ── The gateway: mywebui's server calls with the user of the web session ─────────────────────
// A browser's sendTo carries no session — socket-classes relays it with whatever user name the
// page typed. This route takes the user from the web session instead (req.user; with web
// authentication off, web.0's default user, as the socket does) and signs the message for
// mywebui.0 with a key only the two server processes can read. sendTo itself stays (history,
// other adapters' widgets); a fine-grained sendTo permission is future platform work —
// docs/superpowers/future/sendto-permission-model.md. docs/confirm-protect.md → "Who is asking".
const GATEWAY_COMMANDS = new Set(['renewToken', 'checkScreenAccess', 'checkVisibility', 'secWriteState', 'protectedWrite',
    'generateReport', 'listReports', 'getReportFile',
    // the journal: its user and the client's address are the session's and the request's
    'journalQuery', 'journalContext', 'journalComment', 'journalClients', 'journalStatus', 'journalReload', 'clientHello', 'clientBye',
    // server scripts (administrators only — mywebui.0 checks)
    'scriptList', 'scriptGet', 'scriptSave', 'scriptDelete', 'scriptModuleGet', 'scriptModuleSave', 'scriptModuleDelete', 'scriptControl', 'scriptLog', 'scriptReload', 'scriptLibAdd', 'scriptLibRemove']);
const TIMEOUT_MS = { generateReport: 180000, scriptLibAdd: 180000 };

function readJsonBody(req) {
    if (req.body && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) return Promise.resolve(req.body);
    return new Promise((resolve, reject) => {
        let size = 0; const chunks = [];
        req.on('data', (c) => { size += c.length; if (size > 1048576) { reject(new Error('body too large')); req.destroy(); } else chunks.push(c); });
        req.on('end', () => { try { resolve(chunks.length ? JSON.parse(Buffer.concat(chunks).toString('utf8')) : {}); } catch (e) { reject(e); } });
        req.on('error', reject);
    });
}

function setupGateway(app, adapter, config) {
    const instance = String(config?._id || 'system.adapter.mywebui.0').replace(/^system\.adapter\./, '');
    let key = null;
    const readKey = () => {
        try {
            const core = require('@iobroker/adapter-core');
            const file = path.join(core.getAbsoluteDefaultDataDir(), instance, 'gateway.key');
            const k = fs.readFileSync(file, 'utf8').trim();
            key = /^[0-9a-f]{64}$/.test(k) ? k : null;
        } catch (e) { key = null; }
        return key;
    };
    const send = (target, command, message, ms) => new Promise((resolve) => {
        const t = setTimeout(() => resolve({ error: 'no answer from ' + target }), ms);
        adapter.sendTo(target, command, message, (res) => { clearTimeout(t); resolve(res); });
    });

    app.post('/mywebui-api/:cmd', async (req, res, next) => {
        if (String(req.query?.ns || 'mywebui.0') !== instance) return next();   // another mywebui instance
        const cmd = String(req.params.cmd || '');
        let user = req.user || req.session?.passport?.user;
        if (!user) {
            if (adapter.config?.auth) { res.status(401).json({ error: 'not authenticated' }); return; }
            user = adapter.config?.defaultUser || 'admin';
        }
        user = String(user).replace(/^system\.user\./, '');
        let body;
        try { body = await readJsonBody(req); } catch (e) { res.status(400).json({ error: 'bad request' }); return; }
        if (!body || typeof body !== 'object' || Array.isArray(body)) body = {};
        delete body.__gw;
        // where the request came from — set here, never taken from the browser (mywebui.0 decides
        // whether X-Forwarded-For is believed: only behind its trusted proxy)
        body.__client = { ip: req.socket?.remoteAddress || req.ip || '', xff: req.headers?.['x-forwarded-for'] || '', ua: String(req.headers?.['user-agent'] || '').slice(0, 300) };

        if (!GATEWAY_COMMANDS.has(cmd)) { res.status(404).json({ error: 'unknown command' }); return; }
        // Cross-site requests (CSRF): only mywebui's own pages may call the gateway. A browser says
        // where a request comes from (Sec-Fetch-Site); a JSON body and the custom header cannot be
        // sent cross-site without a CORS preflight, which this route never answers. clientBye is
        // sent with sendBeacon (no custom header possible) and only ends the caller's own presence.
        const site = String(req.headers['sec-fetch-site'] || '');
        if (site && site !== 'same-origin' && site !== 'none') { res.status(403).json({ error: 'cross-site request refused' }); return; }
        if (!/^application\/json\b/i.test(String(req.headers['content-type'] || ''))) { res.status(415).json({ error: 'JSON only' }); return; }
        if (cmd !== 'clientBye' && req.headers['x-mywebui-gateway'] !== '1') { res.status(403).json({ error: 'missing gateway header - reload the page' }); return; }
        // A web session that is still valid (web.0 keeps it for its "login timeout", ttl) but whose
        // OAuth2 access token ran out (web.0 gives tokens 1 hour, whatever ttl says): hand the page
        // fresh tokens in web.0's own format, living as long as the session setting, instead of
        // sending it to /login — which, with a valid session, bounces to "/" and ignores ?href.
        if (cmd === 'renewToken') {
            // only from the server-side web session (never from a token: a token must not be able
            // to extend itself), only for an enabled user, and never past the session's own end
            const who = req.session?.passport?.user;
            if (!who) { res.status(401).json({ error: 'not authenticated' }); return; }
            const userId = 'system.user.' + String(who).replace(/^system\.user\./, '');
            let userObj = null;
            try { userObj = await adapter.getForeignObjectAsync(userId); } catch (e) { userObj = null; }
            if (!userObj || userObj.common?.enabled === false) { res.status(401).json({ error: 'not authenticated' }); return; }
            const now = Date.now();
            const sessionEnd = req.session?.cookie?.expires ? new Date(req.session.cookie.expires).getTime() : now + (Number(adapter.config?.ttl) || 3600) * 1000;
            const ttl = Math.floor((sessionEnd - now) / 1000);
            if (!(ttl > 60)) { res.status(401).json({ error: 'the session is about to end - log in again' }); return; }
            const tok = { aToken: crypto.randomBytes(32).toString('hex'), aExp: now + ttl * 1000, rToken: crypto.randomBytes(32).toString('hex'), rExp: now + ttl * 1000, user: String(who).replace(/^system\.user\./, '') };
            const put = (key) => new Promise((ok, bad) => adapter.setSession(key, ttl, tok, (err) => err ? bad(err) : ok()));
            try { await Promise.all([put('a:' + tok.aToken), put('r:' + tok.rToken)]); }
            catch (e) { res.status(500).json({ error: 'could not store the session' }); return; }
            res.cookie('access_token', tok.aToken, { httpOnly: true, secure: !!adapter.config?.secure, sameSite: 'strict', expires: new Date(tok.aExp) });
            res.json({ access_token: tok.aToken, refresh_token: tok.rToken, expires_in: ttl, refresh_token_expires_in: ttl, token_type: 'Bearer' });
            return;
        }
        // server scripts act with the adapter's rights: never without a signed-in administrator
        if (cmd.startsWith('script') && !adapter.config?.auth) { res.status(403).json({ error: 'Server Scripts need web authentication (web.0 -> Authentication)' }); return; }
        if (!key && !readKey()) { res.status(503).json({ error: 'gateway key not ready — is ' + instance + ' running on this host?' }); return; }
        // the browser, told by its web session (cookie) — not by anything the page says: its tabs
        // share it, another browser cannot name it (Settings → Sessions)
        const sessionId = req.sessionID || req.session?.id || '';
        if (sessionId) body.__client.sid = crypto.createHmac('sha256', key).update('sid|' + sessionId).digest('hex').slice(0, 32);
        const ts = Date.now();
        const sig = crypto.createHmac('sha256', key).update(`${cmd}|${user}|${ts}`).digest('hex');
        let out = await send(instance, cmd, { ...body, username: user, __gw: { user, ts, sig } }, TIMEOUT_MS[cmd] || 30000);
        // a restarted mywebui.0 may have made a new key: read it again once
        if (out && out.reason === 'gateway-required' && readKey()) {
            const ts2 = Date.now();
            const sig2 = crypto.createHmac('sha256', key).update(`${cmd}|${user}|${ts2}`).digest('hex');
            out = await send(instance, cmd, { ...body, username: user, __gw: { user, ts: ts2, sig: sig2 } }, TIMEOUT_MS[cmd] || 30000);
        }
        // Settings → Sessions: this user is signed in elsewhere — the sign-in here is ended (the web
        // session), after the page got the answer that says where the other one is
        if (out && (out.blocked === true || out.sessionBlocked === true)) {
            // passport's logout saves and regenerates the session itself: never destroy it beside
            // (a destroyed session under its regenerate took web.0 down with an uncaught exception)
            try { if (req.session && typeof req.logout === 'function') req.logout(() => { }); } catch (e) { /* older passport */ }
        }
        res.json(out ?? null);
    });
    adapter.log.info(`[mywebui/WebExt] gateway /mywebui-api for ${instance} (user from the web session)`);
}

function mapGrafanaLanguage(lang) {
    switch (lang) {
        case 'az': return 'az-AZ';
        case 'ru': return 'ru-RU';
        case 'en': return 'en-US';
        case 'de': return 'de-DE';
        case 'tr': return 'tr-TR';
        default:   return 'en-US';
    }
}

function httpPatch(urlStr, headers, body) {
    return new Promise((resolve, reject) => {
        const parsed = new URL(urlStr);
        const lib = parsed.protocol === 'https:' ? https : http;
        const req = lib.request(parsed, { method: 'PATCH', headers }, (res) => {
            let data = '';
            res.on('data', c => data += c);
            res.on('end', () => resolve({ status: res.statusCode, body: data }));
        });
        req.on('error', reject);
        req.setTimeout(3000, () => { req.destroy(); reject(new Error('timeout')); });
        req.write(body);
        req.end();
    });
}

class MywebuiWebExtension {
    /**
     * @param {import('http').Server} server
     * @param {{secure: boolean, port: number}} settings
     * @param {object} adapter  - iobroker.web adapter instance
     * @param {object} config   - system.adapter.mywebui.0 object
     * @param {import('express').Application} app
     */
    constructor(server, settings, adapter, config, app) {
        this._adapter = adapter;
        const native = config?.native || {};

        try { setupGateway(app, adapter, config); }
        catch (e) { adapter.log.warn('[mywebui/WebExt] gateway: ' + e.message); }

        if (!native.grafanaEnabled) {
            adapter.log.debug('[mywebui/WebExt] Grafana disabled — no endpoints registered');
            return;
        }

        const grafanaUrl = (native.grafanaUrl || 'http://localhost:3000').replace(/\/$/, '');

        // ── SSO auth check (nginx auth_request) ──────────────────────────────
        if (native.grafanaSsoEnabled) {
            app.get('/mywebui-auth-check', (req, res) => {
                // Method 1: passport session (v6 + v8 traditional login)
                const sessionUser = req.user || req.session?.passport?.user;
                if (sessionUser) {
                    res.setHeader('X-User', sessionUser);
                    res.status(200).end();
                    return;
                }

                // Method 2: OAuth2 access_token cookie (v8 OAuth2 login)
                const accessToken = req.cookies?.access_token;
                const store = adapter.store;
                if (accessToken && store) {
                    store.get(`a:${accessToken}`, (err, session) => {
                        if (!err && session && session.user) {
                            res.setHeader('X-User', session.user);
                            res.status(200).end();
                        } else {
                            res.status(401).end();
                        }
                    });
                    return;
                }

                res.status(401).end();
            });
            adapter.log.info('[mywebui/WebExt] /mywebui-auth-check registered for nginx SSO (v6+v8)');
        }

        // ── Language sync (session-verified, no username from frontend) ──────
        if (native.grafanaLangSyncEnabled) {
            app.post('/mywebui-grafana-lang', async (req, res) => {
                const username = req.user || req.session?.passport?.user;
                if (!username) { res.status(401).json({ error: 'not authenticated' }); return; }

                const lang = req.body?.lang;
                if (!lang) { res.status(400).json({ error: 'missing lang' }); return; }

                const grafanaLang = mapGrafanaLanguage(lang);
                const payload = JSON.stringify({ language: grafanaLang });
                try {
                    const r = await httpPatch(
                        grafanaUrl + '/api/user/preferences',
                        {
                            'Content-Type': 'application/json',
                            'Content-Length': Buffer.byteLength(payload),
                            'X-WEBAUTH-USER': username
                        },
                        payload
                    );
                    if (r.status === 200) {
                        adapter.log.debug(`[mywebui/WebExt] lang synced: ${username} → ${grafanaLang}`);
                        res.json({ success: true });
                    } else {
                        adapter.log.warn(`[mywebui/WebExt] Grafana ${r.status}: ${r.body}`);
                        res.status(502).json({ error: `Grafana HTTP ${r.status}` });
                    }
                } catch (e) {
                    adapter.log.warn(`[mywebui/WebExt] lang sync error: ${e.message}`);
                    res.status(500).json({ error: e.message });
                }
            });
            adapter.log.info('[mywebui/WebExt] /mywebui-grafana-lang registered (session-verified)');
        }
    }
}

module.exports = MywebuiWebExtension;
