# Marketplace

Custom controls and npm widgets from registries, shown in the designer's gallery:
**Gallery → Marketplace**. This is phase 1: free and private packages. Commercial packages, with
licence keys, come in phase 2. Installing is for administrators only.

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
- **Previews.** They must be SVG. The designer shows them in an `<img>`, where no script runs.

The designer then stores the controls through its own save, with the rights of the signed-in
administrator. The server writes nothing. An npm widget package installs its npm package with
the usual npm installer.

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
- `kind` is `control` or `npm-widget`. An npm widget package also needs
  `"npm": {"package": "@scope/widgets", "version": "1.4.0"}`.
- `license.type` is `free` (with an SPDX id), `private`, or `commercial` (phase 2).
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
