# Marketplace

Custom controls, npm widgets and themes from registries, shown in the designer's gallery:
**Gallery → Marketplace**. Free, private and commercial packages (with licence keys). Installing is
for administrators only.

## Using it

1. Open the designer, then **gallery → Marketplace**.
2. Pick a source, search, or filter by All, Free, Commercial, Private, Installed or Updates.
3. Click a card to see the package's details: preview, licence, signature, and what it touches
   (state writes, sendTo, network).
4. Choose **Install to**: **Global** (every project) or **this project**, then press
   **Install**.
5. Once a package is installed, drag its card onto the canvas, like any custom control. Its
   controls are stored as `market/<owner>/<name>/…` in the chosen store. They show in the
   gallery's **Global** / **Project** tabs and in the tree.

An update installs the new version over the old one and removes the controls it no longer
brings. Installed packages are listed in `market-installed.json`, in the global store or in the
project.

The **Project** and **Global** tabs show every custom control of that store, rendered live.

## What the server checks

mywebui.0 reads the registry and the packages. The browser never fetches them. The server checks
the following:

- **Sources.** These are the index URLs from Admin → mywebui → **Marketplace** → *Registries*.
  Only https is allowed (http only on localhost), and a URL with a user name or password in it
  is refused.
- **Where files come from.** The index, the previews and the downloads must come from the
  registry's own origin or from GitHub's release hosts (`github.com`,
  `objects.githubusercontent.com`, `release-assets.githubusercontent.com`,
  `raw.githubusercontent.com`). The same rule applies to redirects.
- **Size limits.** Index 4 MB, preview 200 KB, package 10 MB, unpacked 20 MB, at most 300 files.
- **SHA-256.** The download must have the hash the index lists.
- **Signature.** The package must be signed with its owner's Ed25519 key from the registry.
  *Allow packages without a signature* turns this off; use that only for your own registry.
- **Manifest.** The manifest must match the index entry (id, version, kind, licence type). It
  must list every file in the package with its SHA-256, and the package may hold no other file.
- **Controls.** They must be under `controls/`, contain only the control fields, and use known
  property types (an enum needs string values). A `debugger;` statement is refused.
- **Previews.** SVG or PNG (since 1.207.8), at most 200 KB. The designer shows them in an `<img>`, where no script runs; the registry also refuses SVGs with scripts, event attributes, animation, entities or links outside the file.

The designer then stores the controls through its own save, with the rights of the signed-in
administrator. The server writes nothing. An npm widget package installs its npm package with
the usual npm installer.

## Security scan

mywebui reads the code of every package (`src-original/backend/packageScan.js`): the controls'
html, style and script, theme files, and the JavaScript and markup inside an npm tarball. It looks
for code run from strings (`eval`, `new Function`, timers with a string), cookies and browser
storage, network use (`fetch`, `XMLHttpRequest`, `WebSocket`, `sendBeacon`, remote imports and
URLs), state writes and `sendTo`, Node.js APIs, obfuscation, `<script>` tags, install scripts and
bundled `node_modules`. What the package declares in `uses` silences the matching rule.

- The community registry runs the scan in its CI for every package and puts the result into the
  index (`scan: {level, findings, rules, at}`); the gallery shows it ("scanned ✓" or the level).
  A **high** finding keeps a package out of the index until a maintainer has looked at that exact
  file and set `"scanAccepted": "<sha256>"` in its entry.
- A scan is not a proof: a finding is a reason to look, and no findings does not make a package
  safe. The authors sign their packages and licences; the platform scans.

## Installing a package from a file

Gallery → Marketplace → **From file…** installs a `.mwpkg` that did not come through a registry
(administrators; Admin → Marketplace → **Allow packages from files**, off by default). mywebui.0
checks it like a registry package, scans it and shows the result, the SHA-256 and whether a
configured registry lists that exact file (signed or not). Nothing is installed until the
administrator ticks **"I take the responsibility"**: such a package is the responsibility of its
author and of the administrator who installs it (Kamran 2026-11-05). The install is logged and
recorded in the journal (`packageFromFile`, with the SHA-256 and the scan level).

## Commercial packages and licences

Anyone may sell a control, a widget or a theme; a commercial package is listed by default, like a
free one. Its entry names `license: {type: 'commercial', price, buyUrl (https), trialDays?, models?}`.

1. The buyer opens the card: price, buy link, and the **Installation ID** to send to the author.
2. The author signs a licence key with the owner key (VS Code: **Issue Licence…**) and sends it.
3. The buyer pastes the key and installs. mywebui.0 checks it against the owner's key in the
   registry: the package, the installation (and project), the version range, the end date.

| Licence (`scope`) | Valid for |
|---|---|
| `project` | one project on one installation |
| `installations` | any project on the listed installations |
| `developer` | anywhere, for that developer |

`versions` limits it to a version range (`"1"`, `"1.2"`), `expires` makes it a subscription; without
them it is perpetual. Key format: `mwl1.<base64url payload JSON>.<base64url Ed25519 signature of the
payload text>`.

A **trial** (`trialDays`, themes only) starts once per package on an installation; starting again does
not renew it. A theme whose trial or subscription has ended is left out of the page, and a page
still using it goes back to the default theme. For a control or a widget the end date stops updates
and re-installs; what is installed keeps working.

The key is checked at install. The marketplace downloads from public GitHub releases, so the package
file itself is public: **the licence keeps honest customers honest, it is not DRM.**

## Making a package

A package is a zip file named `<name>-<version>.mwpkg` that contains `manifest.json` and the
files the manifest lists:

```
manifest.json
preview.svg
previews/running.svg      (optional: state previews)
controls/pump.control     (the custom control JSON, as the designer stores it)
README.md
LICENSE
```

`manifest.json` (schema 1):

```json
{
  "schema": 1,
  "id": "ahmadov/pump-isa",
  "name": "Pump symbol ISA",
  "version": "1.2.0",
  "kind": "control",
  "mywebui": ">=1.206",
  "author": { "name": "Ahmadov Automation", "github": "ahmadov" },
  "license": { "type": "free", "spdx": "MIT" },
  "files": [
    { "path": "controls/pump.control", "sha256": "…" },
    { "path": "preview.svg", "sha256": "…" }
  ],
  "preview": "preview.svg",
  "uses": { "writes": false, "sendTo": [], "network": false },
  "tags": ["pump", "isa"],
  "description": { "en": "ISA pump symbol", "az": "ISA nasos simvolu" }
}
```

The fields:

- `id` is `owner/name`, where the owner is the GitHub account whose key signs the package.
- `kind` is `control`, `npm-widget` or `theme`.
  - `control`: the controls under `controls/<path>.control`.
  - `npm-widget`: `"npm": {"package": "@scope/widgets", "version": "1.4.0"}`. Add
    `"tarball": "widgets-1.4.0.tgz"` (the output of `npm pack`, listed in `files` like any other
    file) and the widget needs no npm account: the signature of the package covers the tarball,
    and mywebui.0 installs that file into the project. Without `tarball`, npm downloads the
    version from the npm registry.
  - `theme`: one file per theme, `themes/<name>.css`, holding exactly one rule
    `html[data-webui-theme="<name>"]{…}` with only `color-scheme`, `--ui-*` and `--accent`
    (no comments, `url()`, `@` or `\`). VS Code's Theme Creator publishes one directly. Installed
    themes are kept in `market-themes.json`, apart from your Global Style; the designer and the
    runtime load them and the theme selector finds them. Built-in names (dark, light, …) are refused.
- Controls and themes are installed into Global (every project) or the open project; npm widgets
  into the open project.
- An npm widget can also be installed from a `.tgz` file without any registry: Packages →
  right click → **Add Package from .tgz file…** (administrators). The file is uploaded,
  installed by mywebui.0 and kept with the project (an adapter update and a project export
  keep it).
- `license.type` is `free` (with an SPDX id), `private`, or `commercial` (see above).
- `listed` (index entry, default `true`): `false` keeps the package out of every index (the author's choice; Kamran 2026-11-05: listed is the default). The registry's build-index leaves it out, and mywebui skips such an entry if an index has one.
- `uses` says what the controls touch. The registry's checks compare it with the scripts.

The mywebui VS Code extension creates, validates, builds and signs packages for you. It uses the
JSON Schema of the manifest.

## Signing

1. Make an Ed25519 key pair. Keep the private key out of every repository.
2. Put the public key, as base64 of its 32 raw bytes, in the registry under your owner name.
3. The signature is the Ed25519 signature of the 32 raw bytes of SHA-256(`.mwpkg`), written as
   base64.

With Node:

```js
const digest = crypto.createHash('sha256').update(fs.readFileSync(file)).digest();
const sig = crypto.sign(null, digest, privateKey).toString('base64');
```

## The registry index

The registry publishes one `index.json`:

```json
{
  "schema": 1,
  "name": "mywebui community",
  "keys": { "ahmadov": "ed25519:<base64 of the 32-byte public key>" },
  "packages": [{
    "id": "ahmadov/pump-isa", "name": "Pump symbol ISA", "version": "1.2.0", "kind": "control",
    "license": { "type": "free", "spdx": "MIT" },
    "author": { "name": "Ahmadov Automation", "github": "ahmadov" },
    "description": { "en": "ISA pump symbol" }, "tags": ["pump"],
    "uses": { "writes": false, "sendTo": [], "network": false },
    "preview": "previews/ahmadov/pump-isa.svg",
    "download": "https://github.com/ahmadov/pump-isa/releases/download/v1.2.0/pump-isa-1.2.0.mwpkg",
    "sha256": "…", "sig": "…", "size": 18342, "updated": "2026-11-04"
  }]
}
```

Previews are served by the registry itself, next to `index.json`. An entry that is not
well-formed is left out, and the adapter log says so.
