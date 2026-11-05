# Developer bridge (VS Code)

The mywebui VS Code extension shows the designer in a webview and drives it: it opens and
reloads controls and screens, selects elements, tries an npm widget from your workspace, and
hears what you select and save. This page is for people who write such a tool, or who switch the
bridge on for one.

## Switching it on

Admin → mywebui instance → **Developer** → **Developer bridge**. It is off by default. Leave it
off on production servers.

**Allowed framing pages** lists the pages that may frame the designer, comma separated. Each
entry is either a whole origin, compared exactly (`http://localhost:55600`), or a bare scheme
(`vscode-webview://`: every VS Code webview gets its own random id). VS Code needs
`vscode-webview://`, which is the default.

The designer talks over the bridge only when all five hold:

1. the designer is framed (`window.parent !== window`);
2. the iframe was opened with a token in the URL fragment: `…/index.html#mywebui-dev=<token>`,
   where the token is 32–128 characters of base64url. A fragment never reaches a server. The
   designer removes it from the address and keeps it in `sessionStorage`, so a login redirect or
   a reload keeps the bridge;
3. the framing page's origin (`location.ancestorOrigins[0]`) is allowed;
4. **Developer bridge** is on;
5. the user allows the pairing. The token is chosen by the framing page, so it cannot prove who
   frames the designer. On the first `welcome` in a tab, the designer asks
   ("VS Code wants to drive this designer … Allow?"). A reload in the same tab does not ask
   again. If the user refuses, the answer is `error {code: 'refused'}` and the bridge ends.

If any of them fails, the designer sends nothing and listens to nothing.

A paired tool acts as the user. It can edit a control's style and script (the script runs in the
designer) and save through the designer's own save. The same rights and licence checks apply as
when the user presses Save. That is why the user has to allow the pairing. Other files are
written by the tool over its own ioBroker login, followed by the usual `objectChanged` command.

## Messages

Every message is an object `{ns: 'mywebui-dev', v: 1, type, id, replyTo?, token, payload}`. The
designer accepts a message only when all of these match: it comes from `window.parent`, it comes
from the allowed origin, and `ns`, `v` and `token` are right. Anything else is dropped without an
answer.

1. When the designer starts, it sends `hello` with
   `{designerVersion, project, user, readOnly, capabilities[]}`.
2. The tool answers with `welcome` (`replyTo` = the hello's id), optionally with
   `{layout: 'control' | 'widget' | 'full'}`. Nothing else is accepted before `welcome`. The
   designer answers `result {layout}` once the user has allowed the pairing (see 5. above), or
   `error {code: 'refused'}`.
3. After that, each request gets `result` (`replyTo` = its id) or
   `error {code, message}`.

| Request (tool → designer) | Payload | Result |
|---|---|---|
| `openControl` | `{name, scope: 'project'\|'global', kind: 'control'\|'3dcontrol', project?}` | `{readOnly}` |
| `reloadControl` | same + `force?` | `{reloaded}`; `kept: true` when the user kept their unsaved changes |
| `openScreen` | `{name, kind?: 'screen'\|'3dscreen'\|'report', project?}` | `{}` |
| `selectElement` | `{elementId?}` or `{path?}`, where `path` is like `"0/3/1"` (child indices from the root) | `{found}` |
| `openWidget` | `{module, element, customElements?, designerConfig?, translations?, importMap?}` | `{}`; `translations` is the widget's `webui-translations.json`, registered as package `dev:<element>`: the Translations dock shows it and edits it; Save sends the event `widgetTranslationsChanged` instead of storing anything |
| `setLayout` | `{profile: 'control'\|'widget'\|'full'}` | `{}` |
| `getControlSource` | `{name, scope, kind?, project?}` | `{html, style, script, properties, settings, translations, dirty}`: the designer's copy, unsaved changes included (the control is opened if it is not); `translations` is the control's own dictionary (`{lang: {key: text}}`, or null) |
| `updateControlSource` | `{name, scope, kind?, style?, script?}` (each at most 1 MB) | `{dirty}`. The style applies at once; the script runs again in the designer, and its error comes back as `script-error` with `line`/`column` when known |
| `saveDocument` | `{}` (the active document) or `{name, kind, scope}` | `{}`: the designer's own save |
| `listDocuments` | `{kind: 'control'\|'3dcontrol'\|'screen'\|'3dscreen'\|'report', scope?, project?}` | `{items: [{name, scope, kind}]}`, all at once; without `scope` controls come from the project and the global store, the others from the project |
| `listProjects` | `{}` | `{items: [names], current}` |
| `listThemes` | `{}` | `{items: [{name, label, builtin, css, clean, editable, skipped}], current}`: the built-in themes and the theme rules of the project's Global Style. `css` is the stored text; `clean` the rule written anew from its safe tokens (comments dropped; it passes `saveTheme`); `editable` is false when something besides comments had to be left out, listed in `skipped` (`[{decl, reason}]`: a `url()`, a non-token declaration such as `font-family`) |
| `previewTheme` | `{name}` or `{css}`; `{}` ends the preview | `{}`: the theme's tokens go onto every open canvas (inline custom properties, which reach into the shadow roots; the designer's own UI and the saved html are not touched). `{css}` is checked strictly; a stored theme by `{name}` is read leniently (its `clean` tokens) |
| `saveTheme` | `{name, css, overwrite?}` | `{}`: written into the Global Style through the designer's own save, then `uiRefresh`. `exists` without `overwrite`, `builtin` for a built-in name |
| `deleteTheme` | `{name}` | `{}`: removes that theme's rule from the Global Style |
| `createControl` | `{name, scope, kind?: 'control', project?, source: {html, style, script, properties, settings}}` | `{}`: written by the designer's own save (folders such as `pumps/` are created, `controls-all.dat` follows), then opened. `exists` when the name is taken |
| `ping` | `{}` | `{}` |
| `reload` | `{}` | `{}`, then the page reloads and a new `hello` follows |
| `disconnect` | `{}` | no answer; the bridge ends and the token is forgotten |

`name` is the path below the controls or screens folder, without the extension
(`pumps/station`). A `project` other than the open one answers `other-project`.

`reloadControl` never discards unsaved designer changes silently. Without `force`, the designer
asks the user first.

Events (designer → tool), sent without an id to answer:

| Event | Payload |
|---|---|
| `documentChanged` | `{kind, name, scope, dirty}`, or `null` when no document is active |
| `selectionChanged` | `{doc, count, elementId, path, tag, props}` (string attributes, 4 KB at most; debounced by 100 ms) |
| `controlSaved` / `screenSaved` | `{name, scope, kind}` |
| `documentsChanged` | `{kind, scope}` when a document of that kind was created, removed or renamed (a save that changes no name sends nothing) |
| `controlSourceChanged` | `{name, scope, kind, html, properties}` when the canvas changes (debounced by 300 ms) |
| `widgetTranslationsChanged` | `{element, translations}` when the Translations dock saves the dev widget's translations (`{lang: {key: text \| {group}}}`, empty languages left out, checked like `createControl`'s). The tool writes them into the widget's `webui-translations.json` (keeping `tags` / `prefix`) and sends `openWidget` again |
| `documentChanged` with `externalChange: true` | the open document's file was written elsewhere (not by the designer's own save) |
| `error` | `{code, message}` |
| `bye` | `{}`, sent when the page goes away or the user chooses **Disconnect** in the status bar's **⇄ VS Code** menu |

Error codes:

| Code | Meaning |
|---|---|
| `refused` | the user did not allow the pairing |
| `exists` | `createControl`: a control of that name exists |
| `forbidden` / `license-restricted` | the server refused the write |
| `bad-payload` | the request's payload is invalid |
| `unknown-type` | the designer does not know the request |
| `not-found` | the control, screen or file does not exist |
| `other-project` | the request names a project that is not open |
| `unsupported` | the request does not apply here, e.g. `selectElement` on a 3D document |
| `reload-required` | see `openWidget` below |
| `already-defined` | see `openWidget` below |
| `import-failed` | importing the widget module failed |
| `script-error` | the control script failed to load or run in the designer |
| `not-defined` | the module did not define the element within 5 s |
| `failed` | any other failure |

## Layout profiles

| Profile | Shows |
|---|---|
| `control` (the default after `welcome`) | everything except the left side (project, outline, gallery) and the style / javascript windows below: the tool does the navigation and edits style and script |
| `widget` | Properties, with Settings (its Layout section), History Query, Report and Translations beside it; no other window |
| `full` | the normal designer |

`openControl` and `openScreen` switch to `control`, and `openWidget` switches to `widget`. When
the bridge ends, the designer returns to `full`.

## Trying an npm widget without publishing it

`openWidget` takes paths on the designer's own origin, for example
`/__mywebui-dev/widgets/<pkg>/dist/index.js`. The extension's proxy serves these from your
workspace. Full URLs and URLs on another origin are refused.

The designer then does the following:

1. It imports the module with `importShim`. Optionally, `importMap` first adds entries for the
   module's bare imports.
2. It waits for the element to be defined.
3. It registers the `customElements` manifest the way installed widgets are registered
   (elements, properties, events), and `designerConfig.services` if given.
4. It opens a **dev canvas** with one instance of the element and selects it. A dev canvas is
   never saved.

A new control's `source`: `properties` maps a name (letters, digits, `_`, `-`) to
`{type, default?}` with `type` one of `string`, `boolean`, `number`, `color`, `date`, `signal`,
`screen`, `object`, or `{type: 'enum', values: [strings], default?}`. `settings.width` and
`settings.height` are CSS sizes (`"320px"`). The script is an ES module with `export function
init(instance, shadowRoot)` (custom-controls.md, "Script lifecycle").

A theme's `css` is ONE rule `html[data-webui-theme="name"]{…}` with only `color-scheme`, `--ui-*`
and `--accent` (each value at most 2000 characters; no `<`, `\`, `@`, comments, `url()`,
`expression()` or `javascript:`). The designer writes the rule anew from the parsed declarations;
the name is lower case letters, digits and `-`. `createControl`'s `source` may bring
`translations: {lang: {key: text | {…}}}`; they are added to the default `az/en/ru/de/tr` set.

3D controls keep their style and script in their own editor: `getControlSource` and
`updateControlSource` answer `unsupported` for them.

A custom element cannot be defined twice in one page:

- `reload-required`: this page has already imported the element. Send `reload`, wait for the new
  `hello`, then send `openWidget` again.
- `already-defined`: an installed package uses the tag. Reloading does not help; rename the tag.

## For the tool's proxy

- The designer's socket uses the page's own host and port. Forward WebSocket upgrades to
  `/socket.io/` with the session cookie.
- Authentication has two parts: the `access_token` cookie, and the tokens socket-client keeps in
  `localStorage` (`iob_tokens`), which it renews with `./oauth/token`. Keep the `Set-Cookie`
  headers of every answer, including the ones from `/login`, `/oauth/token` and
  `/mywebui-api/renewToken`.
- Keep the proxy port fixed: `localStorage` belongs to one origin.
- Pass `X-Mywebui-Gateway`, `Content-Type` and `Sec-Fetch-*` through unchanged. Do not add
  `X-Forwarded-For`.
- On a redundant cluster, point the proxy at the cluster address. Logging in on a standby server
  fails by design.
