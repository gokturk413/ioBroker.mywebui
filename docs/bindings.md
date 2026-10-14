# iobroker.mywebui — Complete Binding System Guide

> Version 1.37.75 · gokturk413 custom edition

---

## Table of Contents

1. [Overview](#1-overview)
2. [Signal / Binding Prefix Types](#2-signal--binding-prefix-types)
3. [Binding Target Types (bind-* attributes)](#3-binding-target-types-bind--attributes)
4. [Properties Tab Bindings](#4-properties-tab-bindings)
5. [Attributes Tab Bindings](#5-attributes-tab-bindings)
6. [Animations Panel Bindings](#6-animations-panel-bindings)
7. [Effects Panel Bindings](#7-effects-panel-bindings)
8. [Visibility Panel Bindings](#8-visibility-panel-bindings)
9. [Custom Controls vs Screens](#9-custom-controls-vs-screens)
10. [Condition Operators](#10-condition-operators)
11. [Valid Combinations](#11-valid-combinations)
12. [Original vs Added Features](#12-original-vs-added-features)
13. [Quick Reference Card](#13-quick-reference-card)

---

## 1. Overview

The webui binding system connects any ioBroker state, object, local variable, or custom-control property to any visual element: its DOM properties, HTML attributes, CSS styles, animations, and effects. Bindings are **reactive** — when the source value changes, the UI updates automatically.

There are two core layers:

| Layer | Handles | File |
|---|---|---|
| **BindingsHelper** | Properties, Attributes, CSS, Classes, Visibility | `BindingsHelper.js` (web-component-designer) |
| **AnimationService** | Animations, Effects | `AnimationService.js` (custom, gokturk413) |

Both layers understand the **same set of signal prefix types**.

---

## 2. Signal / Binding Prefix Types

These prefixes apply everywhere a "signal" string is accepted — in Properties, Attributes, Animations, Effects, and Visibility bindings.

### 2.1 Plain OID (direct state value)

```
adapter.instance.stateName
```

Subscribes to the ioBroker state and delivers `state.val` to the binding.

**Example:** `webui.0.pump1.running`

---

### 2.2 `state:` — Full state object

```
state:adapter.instance.stateName
```

Delivers the **entire state object** `{ val, ts, ack, q, from }` instead of just the value. Useful when you need the timestamp or quality flag.

**Example:** `state:webui.0.temperature`  
→ you can use expression `__0.val + ' (q:' + __0.q + ')'`

---

### 2.3 `object:` — ioBroker object metadata

```
object:adapter.instance.stateName
```

Delivers the ioBroker **object definition** `{ common, native, type }`. Useful for displaying units, min/max, or description from the object's `common`.

**Example:** `object:webui.0.temperature`  
→ expression `__0.common.unit` gives you `"°C"`

> **Note:** `object:` is supported in BindingsHelper (Properties/Attributes). Not used in AnimationService.

---

### 2.4 `local_` — Browser-local state

```
local_variableName
```

A local variable that **lives only in the browser** — not synced to ioBroker. Persists across screen navigations within one session. All tabs/screens share the same local state.

**Example:** `local_selectedRoom`, `local_darkMode`, `local_language`

Use cases: current page selections, theme toggles, language choice.

**Set by mywebui itself:** `local_username` — the logged-in user (the user badge and the username control show it; bind `?local_username` anywhere); `local_language` — the current language. In a script: `IOB.userName`, or `await IOB.getCurrentUser()` → `{ id, groups }`. No Global Script or control needs to set them.

---

### 2.5 `??` — Direct property binding

```
??propertyName
```

Reads a **property of the host custom control** directly and re-fires when that property changes (via `propertyName-changed` event).

**Example:** `??myColor` → reads `hostElement.myColor`

Use this when you want an animation/effect parameter to follow a custom control property in real time.

---

### 2.6 `?` — Indirect / resolved property binding

```
?propertyName
```

Reads `hostElement.propertyName` and uses its **value as the OID** to subscribe to. When the property changes, the OID subscription is replaced.

**Example:** `?signalPath` → if `hostElement.signalPath = "webui.0.pump1.status"`, subscribes to that OID. When `signalPath` changes to `"webui.0.pump2.status"`, re-subscribes.

Use this when the OID itself should be configurable from outside the control.

---

### 2.7 `.` — Relative path

```
.subPath
```

Prepends the custom control's `_getRelativeSignalsPath()` value. Allows controls to be reused with different base OID prefixes.

**Example:** If the control's relative path is `webui.0.room1.`, then `.temperature` resolves to `webui.0.room1.temperature`.

---

### 2.8 `{placeholder}` — Template / Combined signal

```
prefix.{placeholderOid}.suffix
```

Constructs an OID dynamically by subscribing to each `{placeholderOid}` state and replacing the placeholder with its current value. When any placeholder changes, the result OID is rebuilt and re-subscribed.

**Example:**
```
webui.0.sensors.{webui.0.ui.selectedRoom}.temperature
```
If `webui.0.ui.selectedRoom` = `"living"`, subscribes to `webui.0.sensors.living.temperature`.  
When `selectedRoom` changes to `"kitchen"`, automatically re-subscribes to `webui.0.sensors.kitchen.temperature`.

Multiple placeholders in one signal are supported:
```
{local_building}.{local_floor}.temperature
```

---

### Summary Table

| Prefix | Delivers | Typical Use |
|---|---|---|
| `plain.oid` | `state.val` | Normal state value |
| `state:oid` | Full state object | Need ts/ack/q |
| `object:oid` | Object definition | Unit, min/max from common |
| `local_name` | Local variable value | Browser-local selections |
| `??prop` | Control property value | Dynamic param from host |
| `?prop` | Value of prop used as OID | Configurable OID from outside |
| `.subPath` | Relative OID value | Reusable controls |
| `prefix.{oid}.suffix` | Dynamic OID value | Selector-driven OID |

All these prefixes can be combined with template `{}`:

| Combined | Meaning |
|---|---|
| `?{webui.0.select}` | `select.val` → property name → that property → OID |
| `.{local_device}.status` | `local_device.val` → relative sub-path |
| `state:{webui.0.pick}.target` | `pick.val` → full state OID |

---

## 3. Binding Target Types (bind-* attributes)

These define **what** gets updated on the element.

### In HTML / Screen Templates

```html
<!-- Property (DOM property assignment) -->
<my-element bind-prop:value="webui.0.temperature"></my-element>

<!-- Attribute (setAttribute) -->
<my-element bind-attr:title="webui.0.label"></my-element>

<!-- CSS style property -->
<my-element bind-css:color="webui.0.alertColor"></my-element>

<!-- CSS custom property (variable) — write the name WITHOUT the leading `--`;
     BindingsHelper.parseBinding prepends it (`propname = '--' + propname`). -->
<my-element bind-cssvar:accent-color="webui.0.theme.accent"></my-element>

<!-- Toggle CSS class -->
<my-element bind-class:active="webui.0.pump.running"></my-element>

<!-- Text/HTML content -->
<my-element bind-content:text="webui.0.label"></my-element>

<!-- Visibility (visibility: collapse / '') -->
<my-element bind-visible:="webui.0.show"></my-element>
```

### Binding Modifiers

| Modifier | Syntax | Effect |
|---|---|---|
| Inverted | `!signal` | Negate boolean result |
| Two-way | `=signal` | Write back on element change |
| Expression | `sig1;sig2;__0 + __1` | Multiple signals + formula |
| JSON full form | `{"signal":"...","expression":"..."}` | All options |

### Expression Variables

When using `;`-separated multi-signal expressions, signals are referenced as `__0`, `__1`, `__2`, …

```html
bind-prop:text="webui.0.temp;webui.0.unit;__0 + ' ' + __1"
```

### `this` in a formula

In the binding editor's **formula**, `this` is the **screen / report / custom control** that
owns the element — the same object as `__ctx.root` — so a formula can set one of its
properties (the ones listed under CONTROL PROP.) and every `??name` binding follows:

```js
this.json = __0;                          // property `json` of the screen / control
return JSON.stringify(__0, null, 2);      // what this binding shows
```

`__ctx.element` is the bound element itself. (Before v1.154.0 `this` was `window`, so
`this.json = …` quietly set a global variable.) Generated reports behave the same: the
formula runs in the QuickJS sandbox with `this` = the report's / control's properties, and
what it sets is seen by the bindings after it.

Formulas with several statements need the editor's form (it saves JSON); in the short
attribute form `signal;expression` the last `;` separates the signals from the expression.

---

## 4. Properties Tab Bindings

**Where:** Designer → select element → Properties panel (right sidebar)

Each property row has an **orange binding square** (11×11 px) on the left.

| Square state | Meaning |
|---|---|
| Transparent border | No binding — static value |
| Orange fill | Binding active |

**Left-click** the square → opens Bindings Editor dialog.  
**Right-click** → context menu: Edit binding / Clear binding.

### Bindings Editor Options

| Field | Description |
|---|---|
| Signal | Any prefix type from §2 |
| Expression | JavaScript expression using `__0`, `__1`, … |
| Inverted | Negate the value (boolean) |
| Two-way | Write element changes back to ioBroker |
| Converter | Map values: `{ "high": ">50", "low": "<=50" }` |

### What can be bound

Any property that the element exposes — `value`, `text`, `color`, `opacity`, `disabled`, `hidden`, `src`, `href`, and any custom property defined by a web component.

---

## 5. Attributes Tab Bindings

**Where:** Designer → select element → Attributes panel

Works identically to Properties Tab but uses `setAttribute()` instead of direct property assignment. Useful for SVG attributes (`fill`, `stroke`, `d`, `viewBox`) and non-reflected HTML attributes.

```html
<!-- Result in HTML: -->
<circle bind-attr:fill="webui.0.alarm.color"></circle>
<rect bind-attr:width="webui.0.meter.value"></rect>
```

All signal prefix types from §2 work here.

---

## 6. Animations Panel Bindings

**Where:** Designer → select element → Animations tab  
**Runtime attribute:** `data-animation` (JSON object or array)

Powered by **GSAP 3** (loaded locally from `dist/vendor/gsap/`).

### 6.1 Animation Config Structure

```json
{
  "effect": "opacity",
  "duration": 1,
  "ease": "power1.inOut",
  "repeat": -1,
  "yoyo": true,
  "offset": 0.33,
  "valueTo": 1,
  "valueFrom": 0,

  "controls": {
    "play":    { "oid_bind": { "signal": "webui.0.pump.running" }, "condition": "equal", "value": "true" },
    "pause":   { "oid_bind": { "signal": "webui.0.pump.running" }, "condition": "equal", "value": "false" },
    "resume":  { "oid_bind": { "signal": "webui.0.pump.running" }, "condition": "equal", "value": "true" },
    "stop":    { "oid_bind": { "signal": "webui.0.reset" }, "condition": "equal", "value": "true" },
    "reverse": { "oid_bind": { "signal": "webui.0.reverse" }, "condition": "equal", "value": "true" }
  }
}
```

### 6.2 Available Effects

| Effect | Description | Key Params |
|---|---|---|
| `opacity` | Fade in/out | `valueFrom`, `valueTo` (0–1) |
| `scale` | Zoom | `valueFrom`, `valueTo` |
| `rotation` | Rotate | `valueTo` (degrees), `transformOriginX/Y/Z` |
| `translateX` | Move horizontally | `valueTo` (px) |
| `translateY` | Move vertically | `valueTo` (px) |
| `translate` | Move X and Y | `valueTo` as `"x,y"` (e.g. `"100,50"`) |
| `left` | Absolute left | `valueTo` (e.g. `"200px"`) |
| `top` | Absolute top | `valueTo` (e.g. `"100px"`) |
| `skew` | Skew | `valueTo` (degrees) |
| `fill` | SVG fill color | `fillColorFrom`, `fillColorTo` |
| `color` | HTML text color | `fillColorFrom`, `fillColorTo` |
| `backgroundColor` | HTML background color | `fillColorFrom`, `fillColorTo` |
| `transform` | Raw CSS transform | `valueTo` (CSS string) |
| `svg` | SVG attribute | `svgAttr`, `valueTo` |
| `motionPath` | Path animation | `pathId`, `valueFrom/To` (0–100%) |
| `morphSVG` | Shape morph | `valueTo` (target SVG path selector) |

### 6.3 Dynamic Property Bindings

Every animation property can be bound to a live ioBroker state via `propertyName_bind`:

```json
{
  "effect": "rotation",
  "duration_bind":   { "signal": "webui.0.speed" },
  "valueTo_bind":    { "signal": "webui.0.angle" },
  "ease_bind":       { "signal": "webui.0.easeMode" },
  "repeat_bind":     { "signal": "webui.0.repeatCount" },
  "effect_bind":     { "signal": "webui.0.animationType" }
}
```

| Bindable Property | What it controls |
|---|---|
| `effect_bind` | Which animation effect runs |
| `duration_bind` | Duration in seconds (uses `timeScale` — no restart) |
| `ease_bind` | GSAP ease string |
| `repeat_bind` | Repeat count (-1 = infinite) |

`offset` (0–1, *Start offset* in the window): where in its cycle the animation starts — several elements on one path (boxes on a conveyor) run evenly spaced. Not bindable.

| `yoyo_bind` | Yoyo toggle |
| `valueTo_bind` | Target value |
| `valueFrom_bind` | Start value |
| `fillColorTo_bind` | Target color (fill/color/backgroundColor) |
| `fillColorFrom_bind` | Start color |
| `transformOriginX/Y_bind` | Transform origin |
| `svgAttr_bind` | SVG attribute name |
| `pathId_bind` | Motion path element ID |

### 6.4 Control Triggers (play/pause/resume/stop/reverse)

Each control supports three binding fields:

```json
"controls": {
  "play": {
    "oid_bind":       { "signal": "webui.0.motor.run" },
    "condition_bind": { "signal": "webui.0.motor.condType" },
    "value_bind":     { "signal": "webui.0.motor.trigVal" },
    "condition": "equal",
    "value": "true"
  }
}
```

| Field | Static | Dynamic (_bind) |
|---|---|---|
| OID to watch | `"oid": "..."` | `"oid_bind": {"signal": "..."}` |
| Condition operator | `"condition": "equal"` | `"condition_bind": {"signal": "..."}` |
| Comparison value | `"value": "true"` | `"value_bind": {"signal": "..."}` |

### 6.5 Multiple Animations per Element

An element can have multiple independent animations (array format):

```json
[
  { "effect": "rotation", "duration": 2, "repeat": -1, "controls": { "play": {...} } },
  { "effect": "fill",     "fillColorTo": "#ff0000",     "controls": { "play": {...} } }
]
```

In the designer, each animation appears as a **collapsible block** (`▶ #1 — rotation`). They are collapsed by default and can be expanded individually.

### 6.6 All Signal Prefixes in Animations

All prefix types from §2 work in every `*_bind.signal` field:

```json
{ "oid_bind":      { "signal": "??mySignalProp" } }
{ "duration_bind": { "signal": "?speedProperty" } }
{ "valueTo_bind":  { "signal": ".temperature" } }
{ "oid_bind":      { "signal": "webui.0.{local_zone}.alarm" } }
```

---

## 7. Effects Panel Bindings

**Where:** Designer → select element → Effects tab  
**Runtime attribute:** `data-effects` (JSON object)

Preset one-shot or triggered animations with simpler configuration than full animations.

### 7.1 Effect Types

| Type | Description |
|---|---|
| `fadeIn` | Fade from transparent to visible |
| `fadeOut` | Fade to transparent |
| `slideInLeft` | Slide in from left |
| `slideInRight` | Slide in from right |
| `slideInTop` | Slide in from top |
| `slideInBottom` | Slide in from bottom |
| `bounce` | Bounce up/down |
| `pulse` | Scale pulse |
| `shake` | Horizontal shake |
| `glow` | Drop-shadow glow |
| `blur` | Apply blur filter |
| `spin` | Continuous rotation |
| `flip` | 360° Y rotation |

### 7.2 Trigger Types

| Trigger | Fires when |
|---|---|
| `load` | Element is connected to DOM |
| `hover` | Mouse enters element |
| `click` | Element is clicked |
| `oid` | ioBroker state meets condition |

### 7.3 Effect Config with OID Trigger

```json
{
  "type": "pulse",
  "trigger": "oid",
  "duration": 0.5,
  "delay": 0,
  "repeat": 3,

  "oid_bind":            { "signal": "webui.0.alarm.active" },
  "condition_bind":      { "signal": "webui.0.alarm.condType" },
  "conditionValue_bind": { "signal": "webui.0.alarm.threshold" },
  "condition":     "equal",
  "conditionValue": "true"
}
```

OID triggers support the same dynamic bindings as animation controls.  
All signal prefixes from §2 work in `oid_bind`, `condition_bind`, and `conditionValue_bind`.

---

## 8. Visibility Panel Bindings

**Where:** Designer → select element → Visibility tab

Two independent visibility systems coexist:

### 8.1 Signal-based Visibility (bind-prop)

Bind `hidden` or `disabled` to a live state:

```html
<my-element bind-prop:hidden="webui.0.hide.panel"></my-element>
<my-element bind-prop:hidden="!webui.0.show.panel"></my-element>
```

In the designer: signal binding square + action dropdown (hide / disable).

### 8.2 Group Access Control (data-visibility-*)

Restrict element visibility based on the logged-in user's ioBroker permission groups:

```html
<my-element
  data-visibility-enabled="true"
  data-visibility-groups="administrator,superuser"
  data-visibility-action="hide">
</my-element>
```

| Attribute | Values | Description |
|---|---|---|
| `data-visibility-enabled` | `"true"` / `"false"` | Enable group check |
| `data-visibility-groups` | Comma-separated group names | Allowed groups |
| `data-visibility-action` | `"hide"` / `"disable"` | What to do when not allowed |
| `data-visibility-redirect-screen` | Screen name | Redirect if not allowed |

Group access is evaluated once on connect and re-evaluated when the logged-in user changes.

### 8.3 Visibility in Custom Controls

Custom controls respect both visibility mechanisms. Visibility is applied inside the shadow DOM (`visibilityService.scanAndApply(this.shadowRoot)` is called in `connectedCallback`).

---

## 9. Custom Controls vs Screens

| Feature | Screen (Light DOM) | Custom Control (Shadow DOM) |
|---|---|---|
| **Binding scope** | Document | Shadow root |
| **Relative path** | Based on screen config | `_getRelativeSignalsPath()` per instance |
| **`??prop`** | N/A (no host) | Reads from the custom control's host element |
| **`?prop`** | N/A | Resolves property → OID on the host element |
| **`local_*`** | ✅ Shared globally | ✅ Shared globally (same store) |
| **Properties tab** | Any DOM property | Custom control `properties` config |
| **Attributes tab** | HTML attributes | Shadow DOM element attributes |
| **Animations** | ✅ Full support | ✅ Full support (scanned in `connectedCallback`) |
| **Effects** | ✅ Full support | ✅ Full support |
| **Visibility groups** | ✅ | ✅ |
| **Nested controls** | N/A | ✅ Relative path chains through parent hosts |

### How `?` and `??` bindings work in Custom Controls

```
Screen A
└── webui-my-pump-control  (host, has property: signalId = "webui.0.pump1")
    └── Shadow DOM
        └── <svg-circle data-animation='{"controls":{"play":{"oid_bind":{"signal":"?signalId"}}}}'>
```

When `?signalId` is resolved:
1. `element.getRootNode().host` → finds `webui-my-pump-control`
2. Reads `host.signalId` → `"webui.0.pump1"`
3. Subscribes to `webui.0.pump1`
4. When `host.signalId` changes → unsubscribes, re-subscribes to new OID

---

## 10. Condition Operators

Used in animation controls, effects, and visibility signal bindings.

| Operator | Symbol | Description |
|---|---|---|
| `equal` | `=` | Strict equality (auto-coerced: number vs string, bool) |
| `not_equal` | `≠` | Not equal |
| `less_than` | `<` | Numeric comparison |
| `less_equal` | `≤` | Numeric comparison |
| `greater_than` | `>` | Numeric comparison |
| `greater_equal` | `≥` | Numeric comparison |
| `exists` | — | Value is not null/undefined |

**Boolean coercion:** `"true"`, `"1"`, `1`, `true` all normalize to `true`.  
**Number coercion:** If both sides parse as numbers, numeric comparison is used automatically.

---

## 11. Valid Combinations

### Signal prefix + template

```
??myOid                         → property "myOid" on host element
?oidProp                        → oidProp's value used as OID
.sub.path                       → relative prefix + sub path
sensor.{local_room}.temp        → local variable in template
sensor.{webui.0.ui.pick}.temp   → ioBroker state in template
?{webui.0.ui.oidProp}           → state value → property name → OID
??{webui.0.ui.propKey}          → state value → direct property read
state:{webui.0.pick}.sub        → state value → full state OID prefix
local_{webui.0.ui.key}          → state value → local variable name
```

### Multi-signal expression

```
webui.0.temp;webui.0.unit;Math.round(__0) + ' ' + __1
```

### Two-way + inverted

```
=webui.0.light.on      → read + write back
!webui.0.alarm.clear   → inverted: show when NOT clear
```

**The value written back gets the state's type.** Inputs hand their value over as text: `<input type="number" bind-prop:value="=0_userdata.0.setpoint">` yields `"49"`, not `49`. Before a text value is written, the runtime reads the state's `common.type` once and converts the value to match:

| `common.type` | Conversion |
|---|---|
| `number` | `"49"` → `49`, `"12,5"` → `12.5` |
| `boolean` | `"true"`/`"1"` → `true`, `"false"`/`"0"` → `false` |

Text that does not fit the type is written unchanged, and other types (`string`, `mixed`) are never converted.

### Write feedback — did the driver confirm the write?

Every write an operator makes from a runtime screen is shown over the control that made it. The value is written with `ack: false`. The driver (OPC UA, Modbus, EtherNet/IP, MQTT …) writes it to the device and then confirms it with `ack: true`. mywebui waits for that confirmation and shows it:

| Frame | Badge | Meaning |
|---|---|---|
| yellow, dashed, pulsing | `⋯ 1.4 s` (counting) | sent, waiting for the confirmation |
| green | `✓ 180 ms` | the driver confirmed it; fades after 1.5 s |
| red, double | `✕ 5.0 s` / `✕ denied` | no confirmation in time, confirmed with bad quality, or the write was refused; stays until clicked |
| orange | `≠ 45` | confirmed, but with another value (the PLC clamped it) |
| grey, dotted | `= 49` | the value was already there; drivers do not confirm a non-change |

Time reads in ms below a second (`240 ms`) and in seconds with one decimal above (`2.4 s`). Hovering over the badge gives the reason, the exact time and the driver instance (`No confirmation · 5,005 ms · opcua.0`). The state id is not shown to the operator. A confirmation with a quality code names it (`Confirmed with bad quality: device not connected (q 0x42) · opcua.0`). A substitute value (`q` 0x10, 0x20, 0x40, 0x80) is no error: the write shows green or orange as usual, and the tooltip adds the code.

Details:

- **Frame shape and colour.** They differ in shape as well as colour, so the states can be told apart without colour. The colours come from the theme tokens `--ui-warn`, `--ui-ok`, `--ui-error`, `--ui-mismatch` and `--ui-dim`.
- **Which control.** A two-way binding names its element. A script (`IOB.setState(...)` behind a button) gets the control the user touched in the last 2 s. It can also name the element itself: `IOB.setState(id, value, undefined, { feedback: this })`.
- **The control is never changed.** The frame is drawn in a layer over the page, so buttons, inputs, checkboxes, selects, sliders, custom controls and npm components all work the same.
- **How long to wait.** The wait follows the driver's poll cycle, read from the instance's settings (`native.params.poll`, `pollInterval`, …): `max(3 s, 2 × poll + 1 s)`. For example, Modbus TCP polling every 0.5 s → 3 s; Modbus RTU polling every 2 s → 5 s; a slow serial line polling every 5 s → 11 s. A driver without a poll cycle gets the default (5 s).
- **Which states.** Only states a driver confirms are watched. `system.*`, `mywebui.*`, `admin.*`, `web.*`, `ws.*` and `local_*` never are. `0_userdata.*` is watched only when *0_userdata too* is on, for projects whose scripts confirm them.

Settings: **Designer → Settings → Write feedback** (saved in `config.writeFeedback`):

- on/off;
- show the time in the badge;
- how long green stays;
- red stays until clicked, or 10 s / 60 s;
- the default wait;
- `0_userdata too`;
- a table of this server's driver instances, with poll cycle, automatic wait and an own value in ms.

One control:

- `write-feedback-timeout="8000"`: its own wait;
- `write-feedback="off"`: no frame. Also works on a container, for everything inside it.

A control that draws its own indicator listens to the `write-feedback` event (bubbles, composed). Its `detail` is `{ status: 'pending'|'ok'|'error'|'mismatch'|'same', id, value, ackValue, ms, reason }`, where `reason` is `timeout`, `quality`, `denied` or `refused`.

What green means depends on the driver. EtherNet/IP (rockwell-enip) confirms as soon as the PLC accepts the write. OPC UA confirms when the server sends the new value back. Modbus confirms on its next read.

Where: `www/dist/frontend/common/WriteFeedback.js`, called from `IobrokerHandler.setState`; tests in `test/write-feedback.mjs`. Without the conversion, ioBroker stores `"49"` in a number state and logs *"has to be type number but received type string"* on every write. Where: `IobrokerHandler.setState` → `_typedValue`.

### Read quality — can the value be trusted?

Write feedback covers the way to the device. Read quality covers the way back: every control with a read binding shows when the value it reads cannot be trusted. It needs no change to the control and nothing in the binding. The badge sits on the control's top-left corner, and write feedback keeps the right edge.

| Frame | Badge | When | Value |
|---|---|---|---|
| blue, dashed | `S` | substitute value: `q` 0x10, 0x20, 0x40, 0x80 | shown |
| amber, dotted | `!` | a problem was reported: `q` 0x01, 0x11, 0x41, 0x81 (and any code ioBroker does not define) | shown |
| violet, dashed | clock | no update for longer than the driver's stale time | shown |
| grey, hatched | broken link | not connected: `q` 0x02, 0x12, 0x42, 0x82, or the driver instance is down | last value, hatched |
| red, hatched | `✕` | the device or sensor reports an error: `q` 0x44, 0x84 | last value, hatched |
| grey, dotted | `?` | the state does not exist, has no value yet, or the user may not read it | as the control shows it |

Hovering over the badge lists every problem and the driver instance, for example `Not connected — last value shown: device not connected (q 0x42)` and `opcua.0` below it. The codes are the ones Admin offers in *Write value → Quality code*.

Details:

- **Which controls.** Every element with a read binding, and every custom control whose property of type `signal` holds a state id (a control whose script subscribes to that id itself, like *input_with_button*). The mark goes on the whole control; an element inside it that reads the same state is not marked again.
- **The frame covers what is seen.** When a custom control's content is bigger than the control itself (overflow visible), the frame takes the content's box.
- **The driver is watched too.** Many drivers keep `q` at 0 when the link drops. So when the instance's `system.adapter.<instance>.alive` or `<instance>.info.connection` is `false`, every control reading one of its states shows *not connected*.
- **Several states in one control.** The worst one is drawn: error › not connected › not available › stale › problem › substitute.
- **A write does not hide it.** A write from the UI (`ack: false`) says nothing about the device, so the last confirmed quality stays. While a write is waiting, the write-feedback frame has the edge and the read-quality badge stays.
- **Stale is off by default.** Many drivers write only changed values, so a steady value would look stale. Turn it on for drivers that write every poll: *Stale after* 3 × or 10 × poll (at least 3 s), or an own time per driver instance.
- **Which states.** The same as write feedback: driver states and `alias.*`; `0_userdata.*` only with *0_userdata too*.

Settings: **Designer → Settings → Read quality** (saved in `config.readQuality`):

- on/off;
- show substitute values;
- hatch when not connected;
- watch driver alive / connection;
- stale after: never (default), 3 × poll, 10 × poll;
- `0_userdata too`;
- a table of this server's driver instances, with poll cycle, automatic stale time and an own value in ms.

One control: `read-quality="off"` (also on a container, for everything inside it).

A control that draws its own indicator listens to the `read-quality` event (bubbles, composed). Its `detail` is `{ kind: 'sub'|'warn'|'stale'|'off'|'bad'|'missing'|null, problems }`; `null` means the value is good again.

Where: `www/dist/frontend/common/ReadQuality.js` and `StateQuality.js` (the code list), called from `BindingsHelper.applyBinding` through `IobrokerHandler.watchReadQuality`. Runtime only; the designer shows nothing. Tests: `test/read-quality.mjs`.

### State details — for administrators

An administrator clicks a read-quality or write-feedback badge, or **Alt + clicks** any bound control (even one with nothing wrong), and gets a panel with every state the control is bound to:

- direction: **R** reads, **W** writes, **RW** both (a two-way binding, or a state the control wrote);
- the property it is bound to (`value1 ←`, `stateId ←`) and the full state id, with *Copy*;
- read status (the same texts as the badge), the driver instance and whether it is connected;
- the current value, its quality code, the last update (clock time and "38 minutes ago");
- the last write from this page: when, which value, the outcome, how many ms, by whom;
- *Copy all ids*, and *Clear write error* when a write frame is still shown.

Everyone else keeps the short tooltip; for them the panel is never built.

**Who is an administrator.** Whoever may open the designer: the built-in `admin` and members of ioBroker's `administrator` group, minus the users banned under *Permissions* (decided by the server, `checkScreenAccess` with `mode: 'write'`). In addition, when the project's security model (*Security* dock) has a `diagnostics` action, whoever that action allows (new models have it for codes E Engineering and G Admin). An action that is not in the model grants nothing here.

Settings: **Designer → Settings → Read quality → State details for administrators** (`config.readQuality.details`, on by default).

**Languages.** The panel, the badges' tooltips and the quality-code texts come in the five languages mywebui ships with (az, en, ru, de, tr; `common/BuiltinTranslations.js`). A project translation with the same key wins, so a plant can word them its own way — see [translations.md](translations.md) → *Built-in runtime texts*.

Where: `www/dist/frontend/common/StateDiagnostics.js`.

### Animation + template OID

```json
{
  "controls": {
    "play": {
      "oid_bind": { "signal": "webui.0.devices.{local_selectedDevice}.motor.run" },
      "condition": "equal",
      "value": "true"
    }
  }
}
```

### Animation + relative path

```json
{
  "duration_bind": { "signal": ".animSpeed" }
}
```

(Resolves to `hostRelativePath.animSpeed`)

### Animation + indirect property

```json
{
  "controls": {
    "play": { "oid_bind": { "signal": "?runSignal" } }
  }
}
```

The play trigger OID comes from the custom control's `runSignal` property.

---

## 12. Original vs Added Features

### Original (from web-component-designer / iobroker.webui upstream)

- `BindingsHelper`: all seven binding target types — `bind-prop:`, `bind-attr:`, `bind-css:`, `bind-cssvar:`, `bind-class:`, `bind-content:`, `bind-visible:`
- All signal prefix types: `??`, `?`, `state:`, `object:`, `local_*`, `.`, plain OID
- Template / combined signals: `prefix.{oid}.suffix`
- Multi-signal expressions with `__0`, `__1`, …
- Two-way binding (`=`), inversion (`!`), converter maps
- `IobrokerWebuiBindingsEditor` dialog
- Visibility via `bind-prop:hidden` / `bind-prop:disabled`

### Added (gokturk413 custom edition)

| Feature | File | Version |
|---|---|---|
| **AnimationService** — full GSAP animation engine | `AnimationService.js` | Added |
| **Animation panel** — multi-animation array with collapsible blocks | `IobrokerWebuiAppShell.js` | Added |
| **Binding squares in animation panel** — all `*_bind` fields | `IobrokerWebuiAppShell.js` | Added |
| **`resolveAnimBinding()`** — all prefix types in animations/effects | `AnimationService.js` | 1.37.75 |
| **Template OID `{}`** in animations/effects | `AnimationService.js` | 1.37.75 |
| **`??` / `?` bindings** in custom control animations | `AnimationService.js` | 1.37.75 |
| **Effects panel** — preset effects with OID triggers | `IobrokerWebuiAppShell.js` | Added |
| **Binding squares in effects panel** | `IobrokerWebuiAppShell.js` | Added |
| **Visibility panel** — signal + group access control | `IobrokerWebuiAppShell.js` | Added |
| **`VisibilityService`** — group evaluation, redirect | `VisibilityService.js` | Added |
| **Animations/Effects in custom controls** | `CustomControls.js` | Added |
| **`cleanupAnimations/Effects`** on disconnect | `CustomControls.js` | Added |
| **`duration_bind` uses `timeScale()`** — smooth speed change | `AnimationService.js` | Added |
| **Multiple animations per element** (array) | `AnimationService.js` | Added |
| **`color` / `backgroundColor` effects** for HTML elements | `AnimationService.js` | Added |
| **`translate` with X,Y** comma-separated | `AnimationService.js` | Added |
| **`left` / `top` absolute position** effects | `AnimationService.js` | Added |

---

## 13. Quick Reference Card

```
SIGNAL PREFIX TYPES
───────────────────────────────────────────────────────
plain.oid.path          → ioBroker state value (.val)
state:plain.oid         → full state object {val,ts,ack,q}
object:plain.oid        → ioBroker object {common,native}
local_varName           → browser-local variable
??propName              → host element property value
?propName               → host property value used as OID
.subPath                → relative base + subPath
{oid.placeholder}       → dynamic OID from state value

BINDING TARGETS (in HTML)
───────────────────────────────────────────────────────
bind-prop:name          → element.name = value
bind-attr:name          → element.setAttribute(name, value)
bind-css:name           → element.style.name = value
bind-cssvar:var         → element.style.setProperty(--var, value)  (no leading --)
bind-class:name         → element.classList.toggle(name, bool)
bind-content:text       → element text content
bind-visible:           → visibility: '' / 'collapse'

MODIFIERS
───────────────────────────────────────────────────────
!signal                 → inverted (negate boolean)
=signal                 → two-way (writes back on change)
sig1;sig2;__0+__1       → multi-signal expression

ANIMATION *_BIND FIELDS
───────────────────────────────────────────────────────
duration_bind           → live duration (smooth via timeScale)
effect_bind             → switch effect type live
valueTo_bind            → target value live
ease_bind               → easing function live
fillColorTo_bind        → target color live
controls.play.oid_bind  → state that triggers play
controls.*.condition_bind  → live condition operator
controls.*.value_bind   → live comparison value

CONDITION OPERATORS
───────────────────────────────────────────────────────
equal / not_equal / less_than / less_equal / greater_than / greater_equal / exists

TEMPLATE COMBINATIONS
───────────────────────────────────────────────────────
sensor.{local_room}.temp         → local var in OID
sensor.{webui.0.pick}.temp       → state val in OID
?{webui.0.oidKey}                → state val → prop name → OID
state:{webui.0.target}           → state val → full state OID

VISIBILITY
───────────────────────────────────────────────────────
bind-prop:hidden = signal        → signal-based hide
bind-prop:disabled = signal      → signal-based disable
data-visibility-groups="admin"   → group access control
data-visibility-action="hide"    → hide or disable
```

---

*Generated for iobroker.mywebui v1.37.75 · gokturk413 custom edition*
