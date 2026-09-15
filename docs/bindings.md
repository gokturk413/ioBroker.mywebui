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
