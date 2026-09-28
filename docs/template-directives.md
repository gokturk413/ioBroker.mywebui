# mywebui Template Directives

> **Engine:** `@gokturk413/base-custom-webcomponent`  
> **File:** `www/libs/@gokturk413/base-custom-webcomponent/dist/BaseCustomWebComponent.js`  
> **Eval:** `eval()` → `new Function()` + cache (2000 entries)  

The directives work in the HTML template of a **custom control**, and — since v1.155.0 — also
directly on a **screen** or a **report** page (viewer and generated HTML / PDF / CSV).  
Any JavaScript expression can be written inside `[[...]]` — `this` refers to the custom control
instance, or to the screen / report whose page it is (its properties from CONTROL PROP.).

> **Tested:** every example on this page runs in `test/directives/directives.mjs` against a
> custom control (`tests/directives-all`), a screen (`tests/directives-screen`) and a report
> (`tests/directives-report`) — in the browser (57 checks each, clicks and property changes
> included) and in the generated report file (46 static checks each). How to run it:
> `test/directives/README.md`.

> A ready-made test report, **history-options-demo** (project `default`), shows the
> `history:` directive with every `getHistory` option, rendered with `[[…]]` and `repeat:`
> tables straight on the report page.

---

## 1. Text / Property Binding — `[[expr]]`

Renders a value into the element.

```html
<!-- textContent -->
<span>[[this.title]]</span>
<span>[[this.count + ' pcs']]</span>
<span>[[this.price.toFixed(2)]] €</span>

<!-- innerHTML (HTML string) — the tags are written as entities: a raw "<b>" inside the
     template would be read by the HTML parser as a real tag and break the [[…]] -->
<div>[[ '&lt;b&gt;' + this.name + '&lt;/b&gt;' ]]</div>
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

The class name is used as written: `class:has-error` toggles the class `has-error`.
(Before v1.156.0 a dashed name was camel-cased, `class:has-error` toggled `hasError`.)

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

> Fixed in v1.156.0: `[[3, 7]]` and `[[0, 100, 25]]` were read as the JavaScript comma
> operator (`3, 7` → `7`), so a range always ran 1…last. A `for:` of `<option>`s inside a
> `<select>` rendered nothing (`option.index` is read-only). Both work now, as do `if:`
> inside `for:`, `for:` inside `if:` and nested `for:` loops.

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

HTML lower-cases attribute names, so `ref:myCanvas` arrives as `ref:mycanvas`. Write the name
**dash-case** — `ref:my-canvas` is stored as `refs.myCanvas` (and as `refs['my-canvas']`).
(Fixed in v1.156.0: refs were never set before — the handler sat where only `[[…]]` values
were read, and a ref has no value.)

```html
<canvas ref:my-canvas width="400" height="300"></canvas>
<video ref:player autoplay></video>
<input ref:search-input type="text">
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

<!-- Double @ — camelCase event name. Written dash-case (HTML lower-cases attribute names):
     @@value-changed listens to the event "valueChanged" -->
<my-element @@value-changed="[[this.onValueChange(event.detail)]]"></my-element>

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

## 15. History — `history:` / `history-root:` / `history-var:` *(new)*

Reads the **history of one or more states** and puts the rows where the template can use
them. Unlike the directives above, it works **everywhere**:

| Where | Works |
|---|---|
| Screens (`.screen`) | ✅ |
| Reports (`.report`) — viewer **and** generated HTML / PDF / CSV | ✅ |
| Custom controls (their template) | ✅ |
| npm widgets — put it on the widget's element: `history:data` sets the widget's `data` property | ✅ |

The query is the history adapter's own **`sendTo(<instance>, 'getHistory', { id, options })`**
(socket-classes `sendTo`), the same message a generated report sends on the server.

### Three targets

```html
<!-- element property: sets el.rows (camelCase from the dash-case name) -->
<my-table history:rows="0_userdata.0.level"></my-table>

<!-- the screen's / report's / control's OWN property: ??json bindings see it -->
<i history-root:json='{"id":"0_userdata.0.level","last":"24h"}'></i>
<span bind-content:text="??json;__0.length + ' rows'"></span>

<!-- a local variable (local_levels): local_ bindings see it -->
<i history-var:levels='{"id":"0_userdata.0.level","last":"1h"}'></i>
<span bind-content:text="local_levels;__0.length"></span>
```

Attribute names reach the browser lower-case, so write properties dash-case:
`history:text-content` → `textContent`, `history-root:my-rows` → `myRows`.

### Value: a state id, or JSON options

A plain state id reads that state with the adapter's defaults. JSON gives full control:

| Key | Meaning |
|---|---|
| `id` | state id — or `"??prop"`: the id is read from a property of the screen / control (e.g. a control's `tag` property) |
| `ids` | several states at once: `["a.0.x", "b.0.y"]` — the value becomes `{ "a.0.x": rows, "b.0.y": rows }` (one `sendTo` per state, in parallel: `getHistory` takes one id) |
| `last` | window ending now: `"30m"`, `"24h"`, `"7d"`, `"2w"`, or ms |
| `start` / `end` | absolute window (ms or a date string) — wins over `last` |
| `instance` | `history.0`, `sql.0`, `influxdb.0` … — see *Which instance* below |
| `aggregate`, `step`, `count`, `limit`, `ignoreNull`, `round`, … | passed to the history adapter unchanged (ioBroker `GetHistoryOptions`) |
| `expression` | reshape the rows before they are set: `__0` = the rows (or the `{ id: rows }` object); `this` / `__ctx.root` = the screen / control |
| `reload` | re-read every N seconds (browser) |

```html
<!-- values only, last 7 days, hourly averages -->
<i history-root:levels='{"id":"0_userdata.0.level","last":"7d","aggregate":"average","step":3600000,
    "expression":"return __0.map(r => r.val)"}'></i>

<!-- a control whose `tag` property names the state -->
<span history:text-content='{"id":"??tag","last":"24h","expression":"return __0.length + \" rows\""}'></span>

<!-- two flows side by side -->
<i history-root:flows='{"ids":["opcua.0.flow1","opcua.0.flow2"],"last":"24h"}'></i>
```

In the designer's attribute editor, type the JSON as it is; saved into the HTML, its quotes
become `&quot;`, which is expected.

### Which instance

1. `instance` in the options, if given.
2. Otherwise the **system default history** (System settings) — **if it logs this state**.
3. Otherwise the first `history.N` / `sql.N` / `influxdb.N` whose custom settings log the state.

A stopped instance is reported at once ("history adapter influxdb.0 is not running"), never
waited for.

### The rows

`[{ val, ts, ack?, from?, q? }, …]` — exactly what ioBroker's `getHistory` returns.

### In reports

- The report's **time range** (range picker, or *Time range from states*) wins over the
  directive's own window, as for historic bindings.
- A generated file reads history on the server with the same query; `expression` runs in the
  QuickJS sandbox (never on Node). More than 10 000 rows, or an instance that does not answer,
  fails the run with the state named.
- Directives run **before** bindings in a generated file, so `??json` / `local_x` bindings see
  the data. In the browser the data arrives a moment later and the bindings update.
- A plain HTML element in a file shows only its text (`history:text-content`, set as JSON text for rows);
  an array set on any other property means something only to live code.

### Worked examples — from the directive to your template

Examples 1–5 were run on a live system (screen viewer, report viewer and a generated
report). The state `0_userdata.0.level` stands for any logged state.

**How the value travels.** The directive calls
`sendTo('<instance>', 'getHistory', { id, options })` and receives the rows
`[{ val, ts }, …]`. Optionally `expression` reshapes them. The result is then **assigned**:

| Directive | Assigned to | Read it in the template with |
|---|---|---|
| `history:rows` | `element.rows` | the element itself (a widget, a control instance) |
| `history-root:rows` | `this.rows` of the screen / report / control | `[[this.rows]]`, `repeat:x="[[this.rows]]"`, `bind-…="??rows"`, `this.rows` in scripts |
| `history-var:rows` | local variable `local_rows` | `bind-…="local_rows"` |

A property must exist to be bound: add it under **CONTROL PROP.** (type `object` or
`string` — the value is set as it is, an array or an object).

#### 1. Custom control: a history table

Properties: `tag` (string — the state id, set from outside), `rows` (object).

```html
<!-- 1. read the history of the state named by the `tag` property into this.rows -->
<i history-root:rows='{"id":"??tag","last":"7d","aggregate":"none",
                       "expression":"return __0.filter(r => r.val != null)"}'></i>

<!-- 2. use this.rows like any property -->
<div>[[(this.rows || []).length]] rows</div>
<table>
  <tbody>
    <template repeat:row="[[this.rows || []]]" repeat-index="i">
      <tr>
        <td>[[i + 1]]</td>
        <td>[[new Date(row.ts).toLocaleTimeString()]]</td>
        <td>[[row.val]]</td>
      </tr>
    </template>
  </tbody>
</table>
```

On a screen or a report: `<webui-my-history-table tag="0_userdata.0.level"></webui-my-history-table>`.
The same markup also works written **straight on the screen / report page** (with `"id"` set to
the state instead of `??tag`, and `rows` added as a property of the screen / report).
Give the `<table>` a position (`position:absolute; left:…; top:…`) like every other element on
the page, or it is drawn at the top of the page over the others.
When `this.rows` is set, the `[[…]]` bindings and the `repeat:` rows re-render by themselves.
In a generated report the same template is rendered on the server (no script needed).

#### 2. Screen or report: into a property, shown by bindings

Screen / report property: `levels` (object).

```html
<i history-root:levels='{"id":"0_userdata.0.level","last":"24h",
                         "expression":"return __0.map(r => r.val)"}'></i>

<span bind-content:text="??levels;Array.isArray(__0) ? 'max ' + Math.max(...__0) : '…'"></span>
<span bind-content:text="??levels;Array.isArray(__0) ? __0.length + ' values' : ''"></span>
```

#### 3. Into a local variable (no property needed)

```html
<i history-var:levels='{"id":"0_userdata.0.level","last":"1h"}'></i>
<span bind-content:text="local_levels;Array.isArray(__0) ? __0.length + ' rows' : '-'"></span>
```

#### 4. Straight into an npm widget's property

```html
<!-- the last value into a Shoelace progress ring -->
<sl-progress-ring history:value='{"id":"0_userdata.0.level","last":"1h",
                                  "expression":"return __0[__0.length - 1].val"}'></sl-progress-ring>

<!-- the rows as the data of a chart widget -->
<my-chart history:data='{"id":"0_userdata.0.level","last":"24h",
                         "expression":"return __0.map(r => ({ x: r.ts, y: r.val }))"}'></my-chart>
```

#### 5. Several states in one directive

```html
<i history-root:flows='{"ids":["opcua.0.flow1","opcua.0.flow2"],"last":"24h"}'></i>
<!-- this.flows = { "opcua.0.flow1": rows, "opcua.0.flow2": rows } -->
<span bind-content:text="??flows;__0 ? Object.entries(__0).map(([k, v]) => k + ': ' + v.length).join(' | ') : ''"></span>
```

#### 6. Setting other properties at the same time

`expression` runs with `this` = the screen / control, so it can fill several properties from one
read. The value it returns goes to the directive's own target:

```html
<i history-root:rows='{"id":"??tag","last":"24h",
   "expression":"const v = __0.map(r => r.val); this.minVal = Math.min(...v); this.maxVal = Math.max(...v); return __0"}'></i>
<span>[[this.minVal]] … [[this.maxVal]]</span>
```

The same works in a **binding formula** (binding editor → formula), where `this` is also the
screen / control:

```js
this.json = __0;                       // property json of the screen / control
return JSON.stringify(__0, null, 2);   // what this element shows
```

#### 7. In a control's script

```js
export function connectedCallback(instance, shadowRoot) {
    // after every read (and every `reload`)
    shadowRoot.addEventListener('history-loaded', e => {
        const { prop, value } = e.detail;        // prop === 'rows', value === instance.rows
        console.log(prop, value.length);
    }, true);
}
```

#### 8. Refreshing

`"reload": 60` re-reads every 60 s in the browser. A report's time range (range picker, or
*Time range from states*) replaces `last` / `start` / `end` for every directive in the report.

#### Writing the value in the designer

In the attribute editor type the JSON as shown (single-quoted attribute, double-quoted JSON).
Saved into the HTML its quotes become `&quot;` — that is expected and reads back the same.

### Events

After each read the element dispatches `history-loaded` with
`detail: { prop, target, value }`.

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
| `history:p="id \| {json}"` ⭐ | history→element prop | — | `sendTo(instance,'getHistory')` — screens, reports, controls, npm widgets |
| `history-root:p="…"` ⭐ | history→screen/control prop | — | `??p` bindings see it |
| `history-var:v="…"` ⭐ | history→local variable | — | `local_v` bindings see it |

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
