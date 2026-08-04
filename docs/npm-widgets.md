# NPM Widgets Guide

How to build, publish and use your own npm widget packages in mywebui: package layout, how properties appear in the designer's property grid, events, translations, and how third-party packages (Shoelace, FAST, …) fit in.

## 1. How packages get into a project

- **Designer tree → Packages → Installed → right-click → "Add Package"** (or double-click an entry under **Suggestions**, list = `www/dist/frontend/npm/usable-packages.json`).
- This sends the `addNpm` command to the backend, which runs `npm install <pkg>` into the project's widget folder: `mywebui.0.projects/<project>/widgets/` (own `package.json` + `node_modules`), then rebuilds the **importmap** (`importmap.js`) and the widget loader (`configWidgets.js`).
- At designer/runtime start the importmap is injected, `configWidgets.js` imports every package's entry module — your custom elements register themselves via `customElements.define()`.

## 2. Minimal widget package

```
my-widgets/
├── package.json
├── dist/index.js          ← entry: imports/defines all elements
├── webui-translations.json  ← optional, see §5
└── src/...
```

`package.json` essentials:

```json
{
  "name": "@myscope/my-widgets",
  "version": "1.0.0",
  "type": "module",
  "main": "dist/index.js",
  "module": "dist/index.js",
  "exports": { ".": "./dist/index.js" }
}
```

The entry module must **define the elements on import** (side effect):

```js
import './my-gauge.js';
import './my-tank.js';
```

Publish to npm (`npm publish --access public`), then install by name via "Add Package".

## 3. Writing an element so the designer understands it

The designer discovers palette entries via `customElementsObserver` — every element defined while the page loads gets a palette entry automatically. **Properties** in the property grid come from property services (see `ConfigureWebcomponentDesigner.js`):

### Option A — Lit (recommended for npm widgets)

`IobrokerWebuiLitPropertiesService` reads Lit's `static properties`. Supported types: **String, Number, Boolean, Date, Object** (+ TS enums). `Array` or custom converters are NOT picked up.

```js
import { LitElement, html, css } from 'lit';

export class MyGauge extends LitElement {
  static properties = {
    value:  { type: Number },
    min:    { type: Number },
    max:    { type: Number },
    label:  { type: String },
    active: { type: Boolean },
  };
  static styles = css`
    :host { display:block; }
    /* theme-ready: use the --ui-* tokens (see theming.md) */
    .box { background: var(--ui-surface, #252b38); color: var(--ui-text, #e2e6ec); }
  `;
  render() { return html`<div class="box">${this.label}: ${this.value}</div>`; }
}
customElements.define('my-gauge', MyGauge);
```

Rules of thumb:
- **lowercase or dash-case property names** — bindings subscribe to `camelToDashCase(prop)+"-changed"`.
- fire `<dash-prop>-changed` events when a property changes if you want two-way bindings to write back.
- give the element a sensible default size via `:host { display:block; width:…; height:…; }`.

### Option B — BaseCustomWebComponent (full API below, §8)

Extend `BaseCustomWebComponentConstructorAppend` from `@gokturk413/base-custom-webcomponent` — same base the built-in controls use; its `@property` decorators are read by the standard properties service. Choose this when you want the exact behaviour of mywebui custom controls (bindings refresh, `_getDomElement`, …).

### What does NOT work

- Properties typed `Array` / custom converters (Lit) — invisible to the grid.
- Elements defined lazily (after load) may miss the palette scan.

## 4. Using widgets in screens

Drag from the palette; bind like any element: `bind-prop:value="opcua.0.some.state"`, `bind-css:...`, visibility (`data-visibility-*`), animations (`data-animation`) all work — these are attribute-level features, independent of how the element is implemented.

## 5. Widget translations — `webui-translations.json`

Ship a `webui-translations.json` at the **package root**:

```json
{
  "tags": ["my-gauge", "my-tank"],
  "prefix": "my-",
  "translations": {
    "az": { "title": "Səviyyə", "unit": "bar" },
    "en": { "title": "Level",   "unit": "bar" },
    "ru": { "title": "Уровень" }
  }
}
```

- `tags` / `prefix` map custom-element tag names to this dictionary (used by `<t-t>` scope resolution — a `<t-t>title</t-t>` inside your element's shadow DOM resolves here first).
- At project load mywebui reads this file for every installed package (`iobrokerHandler.loadWidgetTranslations()`).
- **Extending in a project** (add languages / override texts): Designer → Translations dock → scope dropdown → 📦 your package → edit → Save. Overrides are stored per project in `data/widget-translations.json` and deep-merged over the package defaults — package updates don't lose them.
- In widget code: `IOB.t('title', this)` resolves scoped (own dict → global); `IOB.t('global:alarm.ackbtn')` forces the project dictionary. Re-render on the `languageChanged` window event.

## 6. Third-party packages (Shoelace, FAST, …)

They have their own i18n — don't fight it:
- mywebui sets **`<html lang>`** on every language switch; Shoelace's localize reacts automatically (load its translation modules, e.g. `@shoelace-style/shoelace/dist/translations/de.js`, in your Global Script).
- For packages with no i18n, add texts via the Translations dock's widget scope (override layer works even when the package ships no `webui-translations.json` file).
- FAST design tokens / Shoelace CSS parts can be themed from Global Style using the `--ui-*` tokens as sources.

## 7. Checklist

1. `type:module`, entry defines elements on import.
2. Lit `static properties` with grid-supported types; dash-case-friendly names; `-changed` events.
3. `--ui-*` theme tokens in styles ([theming.md](theming.md)).
4. `webui-translations.json` with `tags`/`prefix` + at least `en` ([translations.md](translations.md)).
5. Publish → Add Package → drag from palette → bind.

---

## 8. BaseCustomWebComponent — full API

`@gokturk413/base-custom-webcomponent` is the base library the whole platform (and every built-in control) is built on. Import:

```js
import {
  BaseCustomWebComponentConstructorAppend,
  html, css, htmlFromString, cssFromString,
  customElement, property,
  DomHelper, TypedEvent, Debouncer, LazyLoader
} from '@gokturk413/base-custom-webcomponent';
```

### 8.1 Base classes (pick one)

| Class | Template attached | `ready()` called |
|---|---|---|
| `BaseCustomWebComponentConstructorAppend` | in the **constructor** | first `connectedCallback` (via queueMicrotask) |
| `BaseCustomWebComponentLazyAppend` | first `connectedCallback` | after attach |
| `BaseCustomWebComponentConnectedReady` | constructor | every `connectedCallback` until `_isReady` |
| `BaseCustomWebComponentConstructorAppendLazyReady` | constructor | lazily (idle) |
| `BaseCustomWebComponentNoAttachedTemplate` | never (you do it) | — |

**Default choice: `BaseCustomWebComponentConstructorAppend`.**

### 8.2 Statics: template & style

```js
@customElement('my-widget')                    // defines the element + sets Class.is
export class MyWidget extends BaseCustomWebComponentConstructorAppend {
  static template = html`
    <div id="root">
      <span id="label">[[this.label]]</span>
      <input id="inp" value="{{this.value::change}}">
    </div>`;
  static style = css`
    :host { display:block; }
    #root { background: var(--ui-surface, #252b38); color: var(--ui-text, #e2e6ec); }`;
}
```

`html\`\`` → `HTMLTemplateElement`, `css\`\`` → `CSSStyleSheet` (adopted). `htmlFromString/cssFromString` are the non-tagged variants.

### 8.3 Properties — `@property` decorator

```js
  @property(String)  label = 'Level';
  @property(Number)  value = 0;
  @property(Boolean) active = false;
  @property(Date)    since;
  @property(Object)  config = {};
  // complex definition — everything the property grid can show:
  @property({ type: Number, default: 50, group: 'Range', description: 'Upper limit', reflect: true })
  max = 100;
```

Complex definition fields: `type`, `default`, `group` (property-grid group), `description` (tooltip), `reflect` (write back to attribute), `attribute` (custom attribute name), `noattribute`, `readonly`. Decorated properties land in `Class.properties` — that is exactly what the designer's property services read, so **every `@property` appears in the property grid automatically**.

Attribute → property parsing: `_parseAttributesToProperties()` (called for you) converts attributes by type — Boolean beware: presence = `true` (use enum-like String `"true"/"false"` when a literal false must come from markup).

**Change events:** fire `dash-case-name-changed` so mywebui bindings (`bind-prop:` etc.) can react / write back:
```js
set value(v) { this._value = v; this.dispatchEvent(new CustomEvent('value-changed', { detail:{ newValue: v } })); }
```

### 8.4 Internal template bindings (Polymer-style)

Inside `static template` (this is the WIDGET's own binding system — independent of mywebui's `bind-*` attributes which users put on your element from outside):

| Syntax | Meaning |
|---|---|
| `[[this.expr]]` | one-way binding (any JS expression) |
| `{{this.prop::change;paste}}` | two-way — writes back on the listed events |
| `@click="handler"` / `@click="[[this.do(1)]]"` | event binding |
| `css:width="[[this.w + 'px']]"` | bind a CSS property |
| `class:active="[[this.isOn]]"` | toggle a CSS class |
| `repeat:item="[[this.rows]]"` on a `<template>` | repeat per array item (nestable) |

Bindings evaluate on `_bindingsRefresh()`:

```js
  ready() {                      // called once, template attached, attributes parsed
    this._parseAttributesToProperties();
    this._bindingsParse();       // activate [[...]] bindings
    this._bindingsRefresh();     // evaluate all
  }
  // re-evaluate when something changes:
  onValueChanged() { this._bindingsRefresh('value'); }   // arg = only bindings using it
```

### 8.5 Instance helpers

| API | Purpose |
|---|---|
| `this._getDomElement('id')` | element by id from the shadow root (typed) |
| `this._getDomElements('.sel')` | querySelectorAll → array |
| `this._bindingsRefresh(prop?)` | re-evaluate template bindings |
| `this._assignEvents()` | (re)wire `@event` attributes |
| `this._parseAttributesToProperties()` | attributes → typed properties |
| `this._restoreCachedInititalValues()` | re-apply property values set BEFORE upgrade (call in constructor) |
| `this._waitForChildrenReady()` | await nested base-components |
| `ready()` | your init hook (see table in 8.1) |

### 8.6 Utilities

- **`DomHelper`** — `removeAllChildnodes(node)`, node iteration helpers.
- **`TypedEvent`** — tiny typed pub/sub: `const ev = new TypedEvent(); const sub = ev.on(x => ...); ev.emit(val); sub.dispose();` (this is what `iobrokerHandler.languageChanged` etc. are).
- **`Debouncer`** — debounced calls; **`LazyLoader`** — `LoadJavascript(url)`, `LoadText(url)` …

### 8.7 Complete widget example (BaseCustomWebComponent + designer + theming)

```js
import { BaseCustomWebComponentConstructorAppend, html, css, customElement, property }
  from '@gokturk413/base-custom-webcomponent';

@customElement('acme-level-badge')
export class AcmeLevelBadge extends BaseCustomWebComponentConstructorAppend {
  static template = html`
    <div id="root" class:alarm="[[this.value > this.max]]">
      <span id="title"></span>
      <span>[[this.value.toFixed(1)]] [[this.unit]]</span>
    </div>`;
  static style = css`
    :host { display:inline-block; }
    #root { padding:6px 12px; border-radius:8px;
            background: var(--ui-surface, #252b38); color: var(--ui-text, #e2e6ec);
            border: 1px solid var(--ui-border, #3b4250); }
    #root.alarm { background: color-mix(in srgb, var(--ui-error,#ef4d5e) 25%, transparent); }`;

  @property({ type: Number, default: 0 })              value = 0;
  @property({ type: Number, default: 100, group: 'Range' }) max = 100;
  @property(String)                                     unit = '%';

  constructor() { super(); this._restoreCachedInititalValues(); }
  ready() {
    this._parseAttributesToProperties();
    this._bindingsParse();
    this._renderTexts();
    window.addEventListener('languageChanged', () => this._renderTexts());
  }
  _renderTexts() {   // translation-aware texts (see §9)
    this._getDomElement('title').textContent = window.IOB ? IOB.t('title', this) : 'Level';
    this._bindingsRefresh();
  }
}
```

---

## 9. Translations in a widget — complete recipe

Ship `webui-translations.json` at the package root (§5 format):

```json
{
  "tags": ["acme-level-badge"],
  "prefix": "acme-",
  "translations": {
    "az": { "title": "Səviyyə", "alarmmsg": "Limit aşıldı" },
    "en": { "title": "Level",   "alarmmsg": "Limit exceeded" },
    "ru": { "title": "Уровень" }
  }
}
```

Then use it three ways — all resolve **scoped**: your dict → project (global) dict → key (full API: [translations-api.md](translations-api.md)):

**a) `<t-t>` in your shadow DOM** — zero JS, live language switching:
```js
static template = html`<div><t-t>title</t-t>: [[this.value]]</div>`;
// force the PROJECT dictionary from inside the widget:
static template = html`<div><t-t>global:alarm.ackbtn</t-t></div>`;
```

**b) `IOB.t(key, this)` in code** — scoped lookup with the element as anchor:
```js
const title = IOB.t('title', this);          // 'Səviyyə' | 'Level' | ...
const ack   = IOB.t('global:alarm.ackbtn');  // project dictionary
window.addEventListener('languageChanged', () => this._renderTexts());
```

**c) mywebui binding on the element (screen author side)** — reactive via `local_language`:
```html
<acme-level-badge bind-prop:unit="local_language;window.IOB.t('unit', __ctx.element)"></acme-level-badge>
```

**Project-side extension:** users add languages / override your texts in Designer → Translations dock → 📦 your package. Overrides live in `data/widget-translations.json` and deep-merge over your defaults — publishing a new package version keeps them.
