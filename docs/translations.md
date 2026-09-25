# Translation System Guide

How multi-language texts work in mywebui: where they are stored, how to use them in HTML (`<t-t>`), in JavaScript (`IOB.t()`), in bindings, and how the language is switched.

## Scoped resolution (v1.91+)

`<t-t>` and `IOB.t(key, element)` resolve a key through a **scope chain**, nearest first:

1. **Custom control's OWN translations** — stored in the control's `.control` JSON (`translations` field; travels with export/zip/import). New controls are seeded with `az/en/ru/de/tr`.
2. **npm widget's OWN translations** — the package's `webui-translations.json` (+ per-project override layer `data/widget-translations.json`), matched by the host element's tag (`tags`/`prefix`). See [NPM-WIDGETS.md](npm-widgets.md) §5.
3. **Project (global) translations** — `data/translations.json`; this is what a `<t-t>` placed directly on a screen uses (no shadow host above it).
4. Fallback inside each scope: current language → `en` → any language → next scope; final fallback = the raw key.

**Force global from a scoped context** with the `global:` prefix:

```html
<!-- inside a custom control template: -->
<t-t>title</t-t>                <!-- control-own 'title', else widget, else global -->
<t-t>global:alarm.ackbtn</t-t> <!-- always the project dictionary -->
```

**Editor scoping:** the Translations dock follows the active document — open a custom control tab and the dock automatically edits THAT control's translations; switch back to a screen and it shows the project dictionary. A scope dropdown (🌐 Project / 🧩 active control / 📦 widget packages) lets you pick manually, including adding languages per scope.

## Storage

Per project, one file: `mywebui.0.projects/<project>/data/translations.json`

```json
{
  "az": { "alarm": { "ackbtn": "Təsdiqlə", "yes": "Bəli" }, "logout": { "button": "Çıxış" } },
  "en": { "alarm": { "ackbtn": "Acknowledge", "yes": "Yes" }, "logout": { "button": "Logout" } },
  "ru": { "alarm": { "ackbtn": "Квит.", "yes": "Да" } }
}
```

- Top level = language codes (`az`, `en`, `ru`, `de`, `tr`, …).
- Inside each language: **nested groups** — a key is a dot-path like `alarm.ackbtn`, `logout.button`. Any nesting depth works.
- Loaded once at startup (`iobrokerHandler.loadTranslations()`) into `iobrokerHandler.translations`.

## Editing translations

**Designer → "Translations" dock tab** (next to Properties): add languages, groups and keys, edit texts per language, save. Saving writes `translations.json` and fires `translationsChanged` — every visible `<t-t>` re-renders immediately.

Programmatically:
```js
IOB.translations.az.mygroup = { hello: 'Salam' };
await IOB.saveTranslations();   // persists + refreshes all <t-t> live
```

## Usage in HTML — `<t-t>`

Put the **key as the element's text content**:

```html
<button>
  <t-t>logout.button</t-t>
</button>

<span class="title"><t-t>alarm.tagname</t-t></span>
```

- Works in screens AND inside custom-control templates (it is a custom element, shadow-DOM safe).
- Re-translates **live** on both language change and translation edits (subscribes to `languageChanged` + `translationsChanged`).
- **Fallback chain:** current language → `en` → any language that has the key → the raw key itself. So an untranslated key shows as `logout.button` — a visual hint that the entry is missing.
- The key must be the whole text content — `<t-t>` cannot mix static text and keys. Compose in HTML instead: `<span><t-t>alarm.time</t-t>: 12:30</span>`.

## Usage in JavaScript — `IOB.t()`

`window.IOB` is the global `iobrokerHandler`; available in Global Script, screen scripts and custom-control scripts:

```js
const label = IOB.t('alarm.ackbtn');       // global (project) dictionary
const own   = IOB.t('title', instance);    // SCOPED: control-own → widget → global
const glob  = IOB.t('global:alarm.ackbtn');// force global from anywhere

// react to language switches:
window.addEventListener('languageChanged', e => {
    console.log('new language:', e.detail);  // e.g. 'az'
    render();                                 // re-read IOB.t(...) values
});

// current language / switch language:
IOB.language;             // 'az'
IOB.setLanguage('en');    // switches + persists to localStorage('webui-language')
```

Inside a control script you may also use the handler passed by the script system, or the internal events:
```js
iobrokerHandler.languageChanged.on(lang => { ... });       // TypedEvent
iobrokerHandler.translationsChanged.on(dict => { ... });
```

## Usage in bindings (declarative, reactive)

`local_language` is a **local state** that always mirrors the current language (two-way: language selectors write it, `setLanguage` updates it). Bind to it to make any expression re-evaluate on language change:

```html
<!-- translated text via binding: local_language gives reactivity, IOB.t gives the text -->
<span bind-content:text="local_language;window.IOB.t('alarm.ackbtn')"></span>

<!-- language-dependent expression -->
<span bind-content:text="local_language;__0==='az'?'Xətt 1':'Line 1'"></span>
```

(`__0` = value of `local_language`. The expression re-runs whenever the state changes.)

## Language selection

- **Language selector controls** (`Language/LanguageSelector`, `Language/LanguageSelector2` — flag buttons AZ/RU/DE/EN/TR) write `local_language`; the handler picks it up and calls `setLanguage`.
- Initial language: `localStorage['webui-language']` → else ioBroker `system.config.common.language` → else `en`.
- `setLanguage(lang)` also: fires the `languageChanged` window event, syncs `local_language`, and (if enabled) POSTs `/mywebui-grafana-lang` so embedded Grafana panels switch language too.
- Per-browser persistence (localStorage) — like the theme system.

## Checklist for a new translated control

1. Add keys in the Translations dock for every language (at least `en`).
2. In the template use `<t-t>group.key</t-t>` for static texts.
3. For script-generated text use `IOB.t('group.key')` and re-render on the `languageChanged` window event.
4. For bound text use the `local_language;window.IOB.t('...')` binding pattern.
5. Test: switch languages with a language-selector control — texts must flip live, no reload.

## Related

- [translations-api.md](translations-api.md) — the full API reference (scope chain, widget dictionaries, implementation map).
- [theming.md](theming.md) — the theme system follows the same "per-browser + live event" model (`webui-theme-changed` ↔ `languageChanged`), though note the event payload shapes differ.
- Implementation: `www/dist/frontend/runtime/TranslateableText.js` (`<t-t>`), `IobrokerHandler.js` (`t()`, `setLanguage`, `loadTranslations`/`saveTranslations`), `config/IobrokerWebuiTranslationEditor.js` (dock editor).
