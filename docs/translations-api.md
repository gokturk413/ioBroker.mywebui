# Translation API Reference

API of the scoped translation system (v1.91+). Usage guide: [translations.md](translations.md) · widget packaging: [npm-widgets.md](npm-widgets.md) · control authoring: [custom-controls.md](custom-controls.md).

## Scope chain

Every lookup resolves **nearest scope first**; inside each scope the language fallback is `current lang → en → any language`; if nothing matches, the next scope is tried; the final fallback is the raw key.

```
custom control's own translations   (.control JSON, "translations" field)
        ↓ not found
npm widget's translations           (webui-translations.json + project override)
        ↓ not found
project translations                (data/translations.json)
        ↓ not found
the key itself                      (visual hint that the entry is missing)
```

`global:` prefix skips the chain and reads the project dictionary directly.

---

## `<t-t>` element (HTML)

```html
<t-t>title</t-t>                 <!-- scoped: control-own → widget → project -->
<t-t>alarm.ackbtn</t-t>          <!-- dot-path = nested groups -->
<t-t>global:alarm.ackbtn</t-t>   <!-- force the project dictionary -->
```

- Key = the element's **text content** (whole content, no mixing with static text).
- Scope = where the element physically lives: inside a custom control's shadow DOM → that control's dictionary first; directly on a screen → project dictionary.
- Re-renders live on `languageChanged` and `translationsChanged`.
- Implementation: `www/dist/frontend/runtime/TranslateableText.js` (delegates to `iobrokerHandler.t(key, this)`).

## `IOB.t()` (JavaScript)

`window.IOB` = the global `iobrokerHandler`. Also exposed as `window.t`.

```js
IOB.t(key)                    // project (global) dictionary only
IOB.t(key, element)           // SCOPED: walks the element's shadow-host chain
IOB.t('global:' + key)        // force project dictionary (element arg ignored)
```

| Param | Type | Meaning |
|---|---|---|
| `key` | string | dot-path (`alarm.ackbtn`); optional `global:` prefix |
| `element` | Element? | scope anchor — pass `this`/`instance` inside a control/widget |

Returns the translated string, or the key when untranslated. Never throws.

### Language

```js
IOB.language                  // current code, e.g. 'az'
IOB.setLanguage('en')         // switch: persists localStorage['webui-language'],
                              // sets <html lang> (third-party i18n bridge),
                              // fires events, syncs the local_language state
```

Initial language: `localStorage['webui-language']` → `system.config.common.language` → `'en'`.

### Events

```js
// window-level (any script):
window.addEventListener('languageChanged', e => { /* e.detail = 'az' */ });

// TypedEvents on the handler:
IOB.languageChanged.on(lang => {});
IOB.translationsChanged.on(dict => {});   // fired on every save (project, control, widget)
```

`local_language` is a local state mirroring the language — bind to it for reactive expressions:

```html
<span bind-content:text="local_language;window.IOB.t('alarm.ackbtn')"></span>
```

### Dictionaries (read/write)

```js
IOB.translations                          // project dict: { az: {...}, en: {...} }
await IOB.saveTranslations()              // persist project dict + refresh all <t-t>

IOB.widgetTranslations                    // { packages: {pkg:{tags,prefix,translations}},
                                          //   byTag: {tag:dict}, byPrefix: [[pre,dict]] }
IOB.getWidgetTranslationsForTag('my-x')   // dict for a tag (exact, then prefix match)
await IOB.loadWidgetTranslations()        // re-scan packages + override layer
await IOB.saveWidgetTranslationsOverride(overrides)  // write data/widget-translations.json
```

A custom control's dictionary lives in its `.control` object (`translations` field) — edit via the Translations dock or `getWebuiObject/saveObject('control', name, obj)`.

---

## Storage formats

**Project** — `mywebui.0.projects/<project>/data/translations.json`:
```json
{ "az": { "alarm": { "ackbtn": "Təsdiqlə" } }, "en": { "alarm": { "ackbtn": "ACK" } } }
```

**Custom control** — field inside the `.control` JSON (travels with export/zip/import; new controls are seeded with `az/en/ru/de/tr`):
```json
{ "html": "...", "style": "...", "script": "...", "properties": {},
  "translations": { "az": { "title": "Səviyyə" }, "en": { "title": "Level" } } }
```

**npm widget** — `webui-translations.json` at the package root:
```json
{ "tags": ["my-gauge", "my-tank"], "prefix": "my-",
  "translations": { "az": { "title": "Səviyyə" }, "en": { "title": "Level" } } }
```
`tags`/`prefix` map custom-element tag names to the dictionary. Project-level extensions/overrides: `data/widget-translations.json` = `{ "<packageName>": { "az": {...} } }`, deep-merged over the package defaults.

---

## Designer (Translations dock)

- Follows the **active document**: a control tab → edits that control's dictionary (saved into the .control JSON immediately AND round-tripped by the editor's own save); a screen tab → project dictionary.
- Scope dropdown: `🌐 Project` / `🧩 control: <name>` (auto) / `📦 <package>` per installed widget package (saves to the override layer).
- `+ Lang` / `- Lang` add/remove languages per scope; every save fires `translationsChanged` → all visible `<t-t>` refresh.

## Implementation map

| Piece | File |
|---|---|
| `<t-t>` element | `www/dist/frontend/runtime/TranslateableText.js` |
| `t()`, scope walk, widget registry, `setLanguage` | `www/dist/frontend/common/IobrokerHandler.js` |
| control host detection (`__webuiControlInfo`) | `www/dist/frontend/runtime/CustomControls.js` |
| control `translations` round-trip + 5-lang seed | `config/IobrokerWebuiScreenEditor.js` |
| dock editor + scoping | `config/IobrokerWebuiTranslationEditor.js` (wired in `IobrokerWebuiAppShell.js`) |
