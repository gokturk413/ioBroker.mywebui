# Custom Controls Guide

How to build your own reusable control in the designer: the file format, how properties reach the property grid, the script hooks, where controls are stored, and a shipped control read end to end.

A **custom control** is authored inside mywebui (designer → control tab) and stored as a single `.control` JSON file. An **npm widget** is a normal npm package of custom elements installed into the project — see [npm-widgets.md](npm-widgets.md). Rule of thumb: a custom control needs no build step and no npm publish, and its source travels inside the project; a widget is code you compile and version outside mywebui.

## 1. The five parts of a `.control` file

A `.control` file is JSON with exactly these top-level fields:

```
properties   what the designer shows in the property grid, and what becomes an element property
settings     size + per-control switches (see §4)
html         the shadow-DOM template
style        the shadow-DOM CSS
script       an ES module with lifecycle hooks
```

A sixth field, `translations`, is added once the control has its own dictionary — see [translations.md](translations.md).

The whole file is one JSON object, so `html`, `style` and `script` are **JSON-escaped strings**. Grepping a `.control` file for raw HTML will usually find nothing; parse it instead:

```bash
node -e "const c=JSON.parse(require('fs').readFileSync('default-controls/controls/gauges/linear-gauge.control','utf8'));console.log(c.style)"
```

## 2. Declaring properties

`properties` maps a property name to `{ type, default }` (plus `values` for enums and an optional `internal` flag):

```json
"value":       { "type": "number",  "default": 42 },
"orientation": { "type": "enum",    "default": "horizontal", "values": ["horizontal","vertical"] },
"showValue":   { "type": "boolean", "default": true },
"trackColor":  { "type": "color",   "default": "" }
```

(from `default-controls/controls/gauges/linear-gauge.control`)

### Available types

The designer's type dropdown offers exactly these, from `_createPropRow` in
`www/dist/frontend/config/IobrokerWebuiControlPropertiesEditor.js`:

```js
for (const t of ['string', 'boolean', 'number', 'color', 'date', 'signal', 'screen', 'object']) {
```

plus `enum`, which is added by the separate **"add enum..."** button (it writes `{ type: 'enum', values: '["a", "b"]' }`) and is therefore not in the dropdown.

At runtime `generateCustomControl()` in `www/dist/frontend/runtime/CustomControls.js` maps each type to a JS constructor for attribute conversion: `string`/`color`/`enum`/`signal`/`screen` → `String`, `boolean` → `Boolean`, `number` → `Number`, `date` → `Date`, `object` → `Object`. Anything unrecognised falls through to `Object`.

`color` gives a colour picker, `signal` a signal/state picker, `screen` a screen picker — all three are strings on the element.

### `internal` properties

Ticking the **int** checkbox sets `internal: true`. Such a property still gets an instance accessor and still works in bindings, but it is skipped when the element's observed properties are built:

```js
for (let p in control.properties) {
    const prp = control.properties[p];
    if (prp.internal)
        continue;
```

Use it for state the control keeps for itself and does not want set from markup.

### Property grouping in the editor

The properties editor groups rows by the part of the name **before the first underscore**, and each group gets a collapsible header. So naming properties `axis_min`, `axis_max`, `axis_unit` produces a collapsible `axis` group. A name with no underscore (or a leading one) stays ungrouped.

Names are also sanitised on save: the characters in `notAllowedChars` are stripped and the first letter is lower-cased.

### The `-changed` event

Every property setter dispatches a `CustomEvent` named after the property in **dash-case**, with the new value in `detail`:

```js
instance.dispatchEvent(new CustomEvent(PropertiesHelper.camelToDashCase(p) + '-changed', { detail: { newValue } }));
```

So a property `label` fires `label-changed`, and `barThickness` fires `bar-thickness-changed`. This is how a script re-renders when a property is edited — `theme-selector` uses exactly that:

```js
try{instance._assignEvent('label-changed',()=>render(instance));}catch(e){}
```

## 3. The script: an ES module with hooks

The `script` field is loaded as a **real ES module** — `assignAllScripts` in
`www/libs/@gokturk413/web-component-designer-visualization-addons/dist/scripting/ScriptSystem.js` turns it into a blob URL and `import()`s it:

```js
const scriptUrl = URL.createObjectURL(new Blob([javascriptCode], { type: 'application/javascript' }));
jsObject = await import(scriptUrl);
```

So `export` is required, top-level `await` works, and the module is evaluated once per control **class**, not per instance — keep per-instance state on `instance`.

| Hook | Signature | When |
|---|---|---|
| `init` | `init(instance, shadowRoot)` | once, immediately after the module is imported, from `assignAllScripts` |
| `connectedCallback` | `connectedCallback(instance, shadowRoot)` | each time the element enters the DOM, called by `BaseCustomControl` |
| `disconnectedCallback` | `disconnectedCallback(instance, shadowRoot)` | on removal — **undo anything global you added** |

Across the 118 shipped controls, `init` is used 86 times, `disconnectedCallback` 79 times and `connectedCallback` 15 times.

Order matters: `BaseCustomControl.connectedCallback()` parses attributes, applies the layout, sets up dynamic properties, refreshes bindings and applies **all bindings** *before* it awaits `assignAllScripts`. By the time your `init` runs the template is bound and `instance` already carries the property values.

### Instance helpers

Available on `instance` inside a script (usage counts across the shipped controls):

| Helper | What it does |
|---|---|
| `instance._getDomElement(id)` | `getElementById` inside the control's shadow root (482 uses) |
| `instance._getDomElements(selector)` | `querySelectorAll` inside the shadow root (318 uses) |
| `instance._bindingsRefresh(name?)` | re-evaluate bindings, optionally just one property's (266 uses) |
| `instance._assignEvent(event, cb)` | add a listener on the host that is auto-removed on disconnect; returns `{ remove() }` (122 uses) |

`_getDomElement` and `_getDomElements` come from
`www/libs/@gokturk413/base-custom-webcomponent/dist/BaseCustomWebComponent.js`; `_assignEvent` is defined on `BaseCustomControl` itself and is the reason its listeners do not leak.

### Cleaning up

`_assignEvent` listeners and template bindings are torn down for you. Anything you attach to `window` or `document` is not — remove it yourself:

```js
export function disconnectedCallback(instance){ try{ window.removeEventListener('webui-theme-changed', instance.__onTheme); }catch(e){} }
```

(`default-controls/controls/theme/theme-selector.control`)

## 4. `settings`

`settings` always carries the design size and may carry per-control switches. Keys actually used by the shipped controls:

| Key | Count | Meaning |
|---|---|---|
| `width`, `height` | 81 | design-time size, e.g. `{"width":"360px","height":"150px"}` |
| `visibilityEnabled`, `visibilityGroups`, `visibilityAction`, `visibilityRedirectScreen` | 40 | per-group visibility, applied by `visibilityService` — see [permissions.md](permissions.md) |
| `useGlobalStyle` | 4 | adopt the project's Global Style stylesheet into this control's shadow root |
| `bindToSize` | 3 | install a `ResizeObserver` so `width`/`height` are usable as binding sources |

`settings.layout` is also read (`applyLayoutStyle(this, ...control.settings?.layout)`) to flow the control's own children as flex/grid, the same layout metadata screens use.

`useGlobalStyle` is guarded — the runtime only adopts the sheet if one exists, because a control with `useGlobalStyle:true` in a project with no Global Style would otherwise throw `"Failed to convert value to 'CSSStyleSheet'"`.

## 5. Bindings and directives inside a control

Both systems work inside a control template and are documented separately:

- **Bindings** (`bind-content:`, `bind-css:`, `bind-attr:`, `??property`) — [bindings.md](bindings.md).
- **Template directives** (`[[expr]]`, `for:`, `if:`, `switch:`, `ref:`) — [template-directives.md](template-directives.md). Note that directives are a **custom-control-only** feature; they do not run on screens.

Inside a control, `??name` reads one of the control's own properties. Signal paths resolve relative to `instance._getRelativeSignalsPath()`, which walks up through the shadow hosts — so a control nested inside another control inherits the outer control's signal prefix.

## 6. Worked example: `linear-gauge`

`default-controls/controls/gauges/linear-gauge.control` (5.5 KB) is small enough to read whole.

**properties** — 14 of them: `value`, `min`, `max`, `zones`, `orientation`, `mode`, `title`, `subtitle`, `unit`, `decimals`, `showValue`, `showPointer`, `trackColor`, `barThickness`. Note `zones` is a `string` holding JSON rather than an `object`, so it stays editable as text in the grid:

```json
"zones": { "type": "string", "default": "[{\"to\":65,\"color\":\"#7c5ce0\"},{\"to\":75,\"color\":\"#c8551f\"},{\"to\":100,\"color\":\"#d63b45\"}]" }
```

**settings** — `{"width":"360px","height":"150px"}`.

**html** — one wrapper whose data attributes are bound to two enum properties, so the CSS can switch layout entirely by attribute selector:

```html
<div id="wrap" class="lg-wrap" bind-attr:data-orient="??orientation" bind-attr:data-mode="??mode">
```

Inside it, the value readout formats itself in the binding expression (`__0` is the first listed source, `__1` the second):

```html
<span class="lg-num" bind-content:text="??value;??decimals;Number(__0).toFixed(Number(__1))"></span>
```

and the track colour falls back to a theme token when the `trackColor` property is empty:

```html
<div class="lg-track" bind-css:background-color="??trackColor;__0||'var(--ui-surface-2,#3a3f4b)'"></div>
```

**style** — the host takes its text colour from a token, and the layout branches on the bound data attribute:

```css
:host{display:block;width:100%;height:100%;color:var(--ui-text,#e2e6ec);font-family:'Segoe UI',Roboto,sans-serif;box-sizing:border-box;}
```

```css
[data-orient="horizontal"] .lg-gauge{height:18px;margin:16px 2px 22px;}
```

**script** — almost nothing, because the whole gauge is declarative:

```js
export function init(instance){ try{ instance._bindingsRefresh && instance._bindingsRefresh?.(); }catch(e){} }
export function connectedCallback(instance){}
```

That is the pattern to copy: put the logic in bindings, and keep the script for the parts bindings cannot express (imperative DOM, external APIs, event wiring).

For a script-driven counterpart, read `default-controls/controls/theme/theme-selector.control` — it builds its `<option>` list in JS, wires `label-changed`, subscribes to a window event in `init` and unsubscribes in `disconnectedCallback`.

## 7. Where controls live

**Platform defaults** ship in the npm package under `default-controls/controls/`. On first start `seedGlobalControls()` in `src-original/backend/main.js` copies them into the files DB and writes a `global/_seeded` marker so the copy happens exactly once and user edits are never overwritten:

```js
const ctlDir = path.join(base, 'controls');
```
→ uploaded to `mywebui.0.data` under `global/controls`.

**A project's own controls** are saved by `IobrokerHandler.saveObject()` into the `mywebui.0.projects` files object at:

```
<project>/data/controls/<name>.control
```

built from `configPath` (`<currentProject> + '/data/'`) plus `type + "s/"`. So the default project's controls are `default/data/controls/…`.

Because both live in the ioBroker **files DB**, not on raw disk, edit them with `iobroker file write` (or the designer) rather than copying files into the adapter folder.

## 8. The custom element tag

`getCustomControlName()` in `www/dist/frontend/runtime/CustomControls.js` derives the tag from the control's path: a leading `/` is dropped, slashes and spaces become dashes, `--` is collapsed, camelCase becomes dash-case, and the `webui-` prefix is added.

| Saved as | Tag |
|---|---|
| `logout` | `<webui-logout>` |
| `gauges/linearGauge` | `<webui-gauges-linear-gauge>` |
| `gauges/linear-gauge` | `<webui-gauges-linear-gauge>` |
| `theme/theme-selector` | `<webui-theme-theme-selector>` |

Note the folder name is kept verbatim, so `theme/theme-selector` doubles the word. Also note the `--` collapse happens *before* camelCase expansion, so a name containing a space next to a capital (`My Control`) yields `<webui-my--control>` — prefer lower-case, dash-free control names.

## 9. Live reload while editing

A control instance subscribes to `objectsChanged` and rebuilds itself in place when its own definition is saved — it runs `disconnectedCallback`, re-clones the template, re-parses bindings and runs `connectedCallback` again. That is why an edit in the designer shows up without a page reload, and why a leaky `disconnectedCallback` shows up as duplicated listeners after a few saves.

## 10. Making a control work in reports

Reports render **twice**: live in the browser, and again on the backend with no browser at
all, to produce an HTML (later PDF) file on a schedule. The browser path needs nothing from
you — it is the normal runtime. This section is about the backend path.

### How your control is rendered on the backend

There is no browser on the SCADA host. Your control's template, bindings **and script** run in
a sandbox: a separate JavaScript engine (QuickJS) with a DOM inside it (linkedom) and the same
template-binding engine the browser uses (`[[…]]`, `css:`, `class:`, `repeat:`). The sandbox
cannot reach the host — no `process`, no `require`, no network — so a control can compute
anything but touch nothing.

Order: template → `bind-*` bindings → your script (`init`, then `connectedCallback`) → any
controls your template or script created, each rendered the same way.

### What your script can use

Everything a report needs, and nothing that would act on the plant:

| Available | Behaviour in a report |
|---|---|
| `instance._getDomElement(id)`, `_getDomElements(sel)`, `_bindingsRefresh()`, your properties | work as in the browser |
| `IOB.getState`, `IOB.subscribeState`, `IOB.getObject`, `IOB.resolvePlantPaxField` | answer from values collected for this report; `subscribeState` calls back once |
| `IOB.secWriteState`, `IOB.setState`, `IOB.openFaceplate`, … | do nothing — a report never writes |
| `setTimeout`, `setInterval`, `requestAnimationFrame` | run **once**, straight away — a report is a still |
| `location`, `navigator`, `matchMedia`, `localStorage`, `window.addEventListener`, `print` | exist, do nothing |

Tags are found by running your script: if it reads a state the report did not know about
(PlantPAx symbols resolve theirs at run time), the engine fetches it and renders again. You do
not declare them.

An API **not** in this list makes your control fail in a report and show as a labelled box —
deliberately loud, so a missing piece is seen rather than rendered quietly wrong.

### What gets a control refused

The sandbox DOM has **no layout**. These return `0` without an error, so a control that relies
on them would render wrong and nobody would know:

`getBoundingClientRect` · `offsetWidth/Height` · `clientWidth/Height` · `scrollWidth/Height` ·
`ResizeObserver` · `IntersectionObserver` · `requestAnimationFrame` · `<canvas>` · `<iframe>`

A script that **imports a package** is refused too — the sandbox has no module loader.

A refused control renders as a labelled placeholder box in the generated file. The designer
tells you when you **save** the report: a warning names each refused control, and it carries a
red dashed frame on the canvas. The same check runs again when the report is generated.

`<iframe>` (Grafana panels) works in the browser view and is a placeholder in the file.

### Report checklist

1. Size with CSS, percentages or `viewBox` — never with a measured pixel value.
2. Prefer SVG for anything graphical; it scales to any page size and serialises exactly.
3. Read values through `IOB` or bindings; do not open your own connections.
4. Do not rely on timers or animation to reach the final picture — they run once.
5. Keep everything in the control; do not import packages.
6. Put the control on a report and save it: a warning on save means it will be a placeholder.

Measured on the 118 controls shipped with mywebui: 100 render, 17 are placeholders (7 measure
layout, 6 load a package, 4 whose script fails in a report), 1 has an authoring error.

## 11. Checklist for a new control

1. Declare properties with real types and defaults — prefer `enum` over free strings.
2. Express as much as possible with bindings; reserve `script` for what bindings cannot do.
3. Use `_getDomElement` / `_assignEvent` rather than raw `querySelector` / `addEventListener`.
4. Remove every `window`/`document` listener in `disconnectedCallback`.
5. Use theme tokens instead of hardcoded colours — [theming.md](theming.md).
6. Add translation keys for every visible text — [translations.md](translations.md).
7. Set a sensible `settings.width`/`height` so the control drops onto a screen at a usable size.
8. If it should work in reports, follow §10.

## Implementation map

| Piece | File |
|---|---|
| control element generation, property accessors, lifecycle | `www/dist/frontend/runtime/CustomControls.js` |
| property grid editor (types, groups, `internal`) | `www/dist/frontend/config/IobrokerWebuiControlPropertiesEditor.js` |
| script module loading + `init` | `www/libs/@gokturk413/web-component-designer-visualization-addons/dist/scripting/ScriptSystem.js` |
| `_getDomElement`, `_getDomElements`, binding parse/refresh | `www/libs/@gokturk413/base-custom-webcomponent/dist/BaseCustomWebComponent.js` |
| load/save of `.control` files, project paths | `www/dist/frontend/common/IobrokerHandler.js` |
| seeding the platform defaults | `src-original/backend/main.js` (`seedGlobalControls`) |
