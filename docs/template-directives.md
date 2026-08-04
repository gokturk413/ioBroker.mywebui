# mywebui Template Directives

> **Engine:** `@gokturk413/base-custom-webcomponent`  
> **File:** `www/libs/@gokturk413/base-custom-webcomponent/dist/BaseCustomWebComponent.js`  
> **Eval:** `eval()` → `new Function()` + cache (2000 entries)  

All directives are used in the HTML template of a Custom Control.  
Any JavaScript expression can be written inside `[[...]]` — `this` refers to the custom control instance.

---

## 1. Text / Property Binding — `[[expr]]`

Renders a value into the element.

```html
<!-- textContent -->
<span>[[this.title]]</span>
<span>[[this.count + ' pcs']]</span>
<span>[[this.price.toFixed(2)]] €</span>

<!-- innerHTML (HTML string) -->
<div>[[ '<b>' + this.name + '</b>' ]]</div>
```

---

## 2. Property Binding — `propName="[[expr]]"`

Sets a JavaScript property on the element.

```html
<!-- JS property (dot notation) -->
<my-chart .data="[[this.chartData]]"></my-chart>
<input .value="[[this.inputVal]]">

<!-- HTML attribute ($) -->
<div $title="[[this.tooltip]]"></div>
<input $placeholder="[[this.hint]]">

<!-- Boolean attribute (?) -->
<button ?disabled="[[this.isLoading]]">Send</button>
<input ?checked="[[this.active]]" type="checkbox">

<!-- bind-prop: (ioBroker signal → property) -->
<my-pump bind-prop:start="0_userdata.0.pumpStatus"></my-pump>
```

---

## 3. Two-Way Binding — `=` prefix (`bind-prop:`)

> This system is handled by `BindingsHelper.applyAllBindings` —  
> it is **completely independent** of the `BaseCustomWebComponent` template system.

```html
<!-- Two-way to an ioBroker signal: the UI writes and reads back from ioBroker -->
<input bind-prop:value="=0_userdata.0.setpoint" type="number">
<input bind-prop:value="=0_userdata.0.pumpCount" type="range" min="0" max="10">

<!-- Two-way to a screen property (?? prefix) -->
<input bind-prop:value="=??screencount" type="range" min="0" max="10">

<!-- Two-way to an element property (## prefix) -->
<input bind-prop:value="=##myValue" type="number">
```

**One-way (read only)** — without the `=` prefix:
```html
<my-gauge bind-prop:value="0_userdata.0.sensor.temp"></my-gauge>
<div bind-prop:text-content="0_userdata.0.message"></div>
```

**Two-way with a custom event** — custom event name:
```html
<!-- Writes back on the value-changed event -->
<my-input bind-prop:value="=0_userdata.0.target::value-changed"></my-input>
```

---

## 4. CSS Binding — `css:prop="[[expr]]"`

```html
<div css:color="[[this.status === 'ok' ? 'green' : 'red']]"></div>
<div css:width="[[this.progress + '%']]"></div>
<div css:background-color="[[this.theme.bg]]"></div>
```

---

## 5. Class Binding — `class:name="[[expr]]"`

```html
<div class:active="[[this.selected]]"></div>
<div class:has-error="[[this.value < 0]]"></div>
<button class:loading="[[this.busy]]">Send</button>
```

---

## 6. Visibility — `show="[[expr]]"` *(new)* / `bcw:visible="[[expr]]"`

The equivalent of Vue's `v-show` — shows/hides via `display:none` without removing the element from the DOM.

```html
<!-- New — more readable syntax -->
<div show="[[this.count > 0]]">
  [[this.count]] elements found
</div>

<!-- Old syntax (still supported) -->
<div bcw:visible="[[this.isVisible]]">Content</div>
```

> **Difference from `if`:** `show` keeps the element in the DOM and only hides it.  
> `if` adds the element to the DOM or removes it.

---

## 7. Conditional Rendering — `if="[[expr]]"` *(extended)*

### Simple if

```html
<template if="[[this.mode === 'advanced']]">
  <div>Advanced settings</div>
</template>
```

### if / else-if / else chain *(new)*

The equivalent of Vue's `v-if / v-else-if / v-else`.  
The `<template>` elements must be **consecutive siblings** — no other element may sit between them.

```html
<template if="[[this.status === 'running']]">
  <div class="badge green">Running</div>
</template>
<template else-if="[[this.status === 'stopped']]">
  <div class="badge red">Stopped</div>
</template>
<template else-if="[[this.status === 'fault']]">
  <div class="badge orange">Fault</div>
</template>
<template else>
  <div class="badge grey">Unknown</div>
</template>
```

```html
<!-- A more complex condition -->
<template if="[[this.temp > 80]]">
  <span style="color:red">⚠ High temperature: [[this.temp]]°C</span>
</template>
<template else-if="[[this.temp > 60]]">
  <span style="color:orange">[[this.temp]]°C</span>
</template>
<template else>
  <span style="color:green">[[this.temp]]°C</span>
</template>
```

---

## 8. Switch / Case *(new)*

The equivalent of React's `switch/case` and Lit's `choose()`.  
`<template case>` and `<template default>` are written inside the outer `<template switch:value>`.

```html
<template switch:v="[[this.pumpType]]">
  <template case="centrifugal">
    <img src="pump-centrifugal.svg"> Centrifugal
  </template>
  <template case="positive-displacement">
    <img src="pump-pd.svg"> Positive Displacement
  </template>
  <template case="submersible">
    <img src="pump-sub.svg"> Submersible
  </template>
  <template default>
    <span>Unknown type: [[this.pumpType]]</span>
  </template>
</template>
```

```html
<!-- Alarm level -->
<template switch:v="[[this.alarmLevel]]">
  <template case="0"><div class="ok">Normal</div></template>
  <template case="1"><div class="warn">Warning</div></template>
  <template case="2"><div class="crit">Critical</div></template>
  <template default><div>Level: [[this.alarmLevel]]</div></template>
</template>
```

> **Note:** in `switch:v`, the `v` is only the internal variable name — any name can be used (`switch:val`, `switch:x`, etc.)

---

## 9. List Rendering — `repeat:item="[[array]]"`

```html
<!-- Simple array -->
<template repeat:pump="[[this.pumps]]">
  <div>[[pump.name]] — [[pump.status]]</div>
</template>

<!-- With an index (repeat-index attribute) -->
<template repeat:item="[[this.items]]" repeat-index="i">
  <div>[[i + 1]]. [[item.label]]</div>
</template>

<!-- Inline filter + map -->
<template repeat:alarm="[[this.alarms.filter(a => a.active).slice(0, 5)]]">
  <div class="alarm">[[alarm.tag]]: [[alarm.message]]</div>
</template>

<!-- Object entries -->
<template repeat:entry="[[Object.entries(this.config)]]">
  <div>[[entry[0]]]: [[entry[1]]]</div>
</template>
```

---

## 10. Numeric Loop — `for:var="[[n]]"` *(new)*

The equivalent of React's `.map()` and Vue's `v-for="i in n"`. There is no need to write `Array.from`.

```html
<!-- From 1 to n (n included) -->
<template for:i="[[this.count]]">
  <div>Element [[i]]</div>
</template>

<!-- [start, end] — both ends included -->
<template for:i="[[3, 7]]">
  <div>Slot [[i]]</div>
</template>
<!-- i: 3, 4, 5, 6, 7 -->

<!-- [start, end, step] -->
<template for:pct="[[0, 100, 25]]">
  <option value="[[pct]]">[[pct]]%</option>
</template>
<!-- pct: 0, 25, 50, 75, 100 -->

<!-- Together with an ioBroker signal -->

<!-- Method 1: {##i} directly — for:i sets element.i on every element -->
<template for:i="[[this.pumpCount]]">
  <webui-controls-pumps-pump
    bind-prop:start="0_userdata.0.pump{##i}.running">
  </webui-controls-pumps-pump>
</template>

<!-- Method 2: explicit via .myidx — when you want to choose the name yourself -->
<template for:i="[[this.pumpCount]]">
  <webui-controls-pumps-pump
    .myidx="[[i]]"
    bind-prop:start="0_userdata.0.pump{##myidx}.running">
  </webui-controls-pumps-pump>
</template>
```

---

## 11. DOM Reference — `ref:name` *(new)*

The equivalent of React's `useRef()` and Vue's `v-ref`.  
The element becomes reachable as `this.refs.name` after `connectedCallback`.

```html
<canvas ref:myCanvas width="400" height="300"></canvas>
<video ref:player autoplay></video>
<input ref:searchInput type="text">
```

**Use in script:**
```javascript
// In the Custom Control script
function connectedCallback(host, shadow) {
  const ctx = host.refs.myCanvas.getContext('2d');
  ctx.fillRect(0, 0, 100, 100);

  host.refs.searchInput.focus();
}
```

---

## 12. Event Binding — `@event="[[expr]]"`

```html
<!-- Simple event -->
<button @click="[[this.handleClick(event)]]">Click</button>

<!-- Arrow function -->
<input @input="[[this.value = event.target.value]]">

<!-- Double @ — camelCase event name -->
<my-element @@valueChanged="[[this.onValueChange(event.detail)]]"></my-element>

<!-- Touch context menu -->
<div @touch:contextmenu="[[this.showMenu(event)]]"></div>
```

---

## 13. IndirectSignal — Dynamic Signal Path

Used to insert a property value into an ioBroker signal path.  
This is part of the `BindingsHelper` system — independent of `BaseCustomWebComponent`.

**What is `root`?**  
- When used on elements placed directly on a screen: `root` = the **ScreenViewer instance**  
- When used on elements inside a Custom Control's shadow root: `root` = the **custom control instance** (`this`)

| Prefix | Meaning | Reactive? |
|---|---|---|
| `??propName` | `root[propName]` — a property of root | ✅ yes |
| `##propName` | `element[propName]` — the element's own property | ✅ yes |
| `?propName` | `root[propName]` — read once | ❌ no |
| `#propName` | `element[propName]` — read once | ❌ no |

```html
<!-- ── Most common use: the signal PATH segment ─────────────────────── -->

<!-- ??valveId: read from the custom control's valveId property (reactive) -->
<!-- result e.g.: "0_userdata.0.valve_3.pressure" -->
<my-gauge bind-prop:value="0_userdata.0.valve_{??valveId}.pressure"></my-gauge>

<!-- ??basePath + ??deviceId: two dynamic segments -->
<my-sensor bind-prop:value="??basePath{??deviceId}.temp"></my-sensor>

<!-- ── Dynamic path inside for: / repeat: ───────────────────────────── -->
<!-- for:i sets the loop variable as element.i → {##i} works directly -->
<template for:i="[[this.pumpCount]]">
  <webui-controls-pumps-pump
    bind-prop:start="0_userdata.0.pump{##i}.running">
  </webui-controls-pumps-pump>
</template>

<!-- For repeat:, element.pump = item and element.idx = index -->
<template repeat:pump="[[this.pumps]]" repeat-index="idx">
  <webui-pump
    bind-prop:name="0_userdata.0.{##pump}.label"
    bind-prop:pos="0_userdata.0.pump{##idx}.position">
  </webui-pump>
</template>

<!-- ── Screen property (ScreenViewer.screencount) ───────────────────── -->
<!-- root = ScreenViewer, screencount is its property -->
<webui-test bind-prop:count="??screencount"></webui-test>

<!-- Two-way + screen property -->
<input bind-prop:value="=??screencount" type="range" min="0" max="10">

<!-- ── Complex example ───────────────────────────────────────────────── -->
<my-valve bind-prop:state="=??basePath{??deviceId}.valve{##portNum}.open">
</my-valve>
```

---

## 14. bind-css: / bind-class: / bind-content:

```html
<!-- ioBroker signal → CSS property -->
<div bind-css:background-color="0_userdata.0.statusColor"></div>

<!-- ioBroker signal → CSS class toggle -->
<div bind-class:running="0_userdata.0.motorRunning"></div>

<!-- ioBroker signal → element text content -->
<div bind-content:text="0_userdata.0.statusText"></div>
```

The complete set of binding prefixes is defined in
`www/libs/@gokturk413/web-component-designer-visualization-addons/dist/helpers/BindingsHelper.js`
(lines 4-10): `bind-prop:`, `bind-attr:`, `bind-class:`, `bind-css:`,
`bind-cssvar:`, `bind-content:`, `bind-visible:`. There is no `bind-signal:`
prefix — to react to a signal in code, subscribe with
`window.IOB.subscribeState(id, cb)` from the control's `script`.

---

## Directive Table

| Directive | Type | Framework equivalent | Note |
|---|---|---|---|
| `[[expr]]` | Text binding | React `{expr}` | Any JS expression |
| `prop="[[expr]]"` | Property | Vue `:prop` | Sets a JS property |
| `$attr="[[expr]]"` | Attribute | Vue `v-bind:attr` | `setAttribute` |
| `?attr="[[expr]]"` | Bool attribute | Vue `v-bind:attr` | presence toggle |
| `="signal"` prefix | Two-way | Vue `v-model` | ioBroker ↔ UI |
| `css:prop="[[]]"` | CSS | Vue `:style` | inline CSS |
| `class:name="[[]]"` | CSS class | Vue `:class` | toggle class |
| `show="[[]]"` ⭐ | Visibility | Vue `v-show` | display:none |
| `bcw:visible="[[]]"` | Visibility | Vue `v-show` | old syntax |
| `if="[[]]"` | Conditional | Vue `v-if` | adds/removes DOM |
| `else-if="[[]]"` ⭐ | Conditional | Vue `v-else-if` | after `if` |
| `else` ⭐ | Conditional | Vue `v-else` | after `if`/`else-if` |
| `switch:v="[[]]"` ⭐ | Switch | Lit `choose()` | `case`/`default` |
| `repeat:x="[[arr]]"` | Loop | Vue `v-for` | array loop |
| `for:i="[[n]]"` ⭐ | Numeric loop | Vue `v-for="i in n"` | range generator |
| `ref:name` ⭐ | DOM ref | React `useRef` | `this.refs.name` |
| `@event="[[]]"` | Event | Vue `@event` | addEventListener |
| `@@event="[[]]"` | Event (camel) | — | camelCase event |
| `bind-prop:p="signal"` | ioBroker→prop | — | signal subscription |
| `bind-attr:a="signal"` | ioBroker→attribute | — | `setAttribute` |
| `bind-css:p="signal"` | ioBroker→CSS | — | CSS from signal |
| `bind-cssvar:v="signal"` | ioBroker→CSS var | — | `setProperty('--v')`, no leading `--` |
| `bind-class:c="signal"` | ioBroker→class | — | class from signal |
| `bind-content:text="signal"` | ioBroker→content | — | text content |
| `bind-visible:="signal"` | ioBroker→visibility | — | `visibility: collapse` |

> ⭐ = directives newly added in this version

---

## The eval() → new Function() Change

| | Old (`eval`) | New (`new Function`) |
|---|---|---|
| Scope | access to the local scope | isolated |
| Performance | interpreted every time | compiled + cached |
| CSP | needs `unsafe-eval` | needs `unsafe-eval` |
| Debugging | difficult | clearer stack trace |
| Cache | none | 2000 entries |

For full CSP safety, integrating `@nyariv/sandboxjs` is planned for the future  
(it uses no eval/Function; it is a whitelist-based JS interpreter).
