# SCADA controls

The process-graphics controls that ship with mywebui: gauges, the PlantPAx symbol/faceplate library, pipes, and the alarm viewers.

Sources for everything below are the real `.control` files under `default-controls/controls/` and the readable runtime/designer modules under `www/dist/frontend/` (`common/IobrokerHandler.js`, `common/PlantPaxResolve.js`, `config/IobrokerWebuiScreenEditor.js`, `runtime/CustomControls.js`). `www/dist/frontend/bundle/` is obfuscated build output and is not used as a source here.

> **Reading a `.control` file.** The five keys (`html`, `style`, `script`, `settings`, `properties`) hold their content as JSON-escaped strings, so `grep` over the raw file finds almost nothing. Parse it instead:
>
> ```bash
> node -e "const c=require('fs').readFileSync('default-controls/controls/gauges/linear-gauge.control','utf8');console.log(Object.keys(JSON.parse(c).properties))"
> ```

## Element names

A control's tag is derived from its path by `getCustomControlName()` (`www/dist/frontend/runtime/CustomControls.js:193`): the leading `/` is dropped, `/` and spaces become `-`, `--` collapses, camelCase expands to dash-case, and the `webui-` prefix is added. **The folder name is part of the tag**:

| Control file | Element |
|---|---|
| `gauges/linear-gauge.control` | `<webui-gauges-linear-gauge>` |
| `gauges/gauge-table.control` | `<webui-gauges-gauge-table>` |
| `gauges/setpoint-gauge.control` | `<webui-gauges-setpoint-gauge>` |
| `alarms/alarm-viewer.control` | `<webui-alarms-alarm-viewer>` |
| `plantpax/ain-symbol.control` | `<webui-plantpax-ain-symbol>` |

In the designer you drag these from the control tree and never type the tag; the names matter when you write HTML by hand or bind from a script.

---

## 1. Gauges

Three controls under `default-controls/controls/gauges/`. All three are **display-only** — none of them writes a state (no `setState` or `secWriteState` appears in any of their scripts). You drive them by binding their properties to signals.

### `linear-gauge`

A horizontal or vertical bar gauge with coloured zones, an optional pointer, and a title/subtitle/value/unit readout.

Its full property list, from the file:

| Property | Type | Default | Notes |
|---|---|---|---|
| `value` | number | `42` | the displayed value |
| `min` | number | `0` | scale start |
| `max` | number | `100` | scale end |
| `zones` | string | see below | JSON array of coloured bands |
| `orientation` | enum | `horizontal` | `horizontal` \| `vertical` |
| `mode` | enum | `full` | `full` \| `bar` |
| `title` | string | `""` | hidden when empty |
| `subtitle` | string | `""` | hidden when empty |
| `unit` | string | `%` | |
| `decimals` | number | `1` | places for the numeric readout |
| `showValue` | boolean | `true` | in `bar` mode the readout is hidden regardless |
| `showPointer` | boolean | `true` | |
| `trackColor` | color | `""` | |
| `barThickness` | number | `18` | |

`zones` is a JSON string of `{ "to": <upper bound>, "color": "<css color>" }` objects, each band running up to its `to`:

```json
[{"to":65,"color":"#7c5ce0"},{"to":75,"color":"#c8551f"},{"to":100,"color":"#d63b45"}]
```

Usage — bind `value` to a state and leave the rest as designer-set properties:

```html
<webui-gauges-linear-gauge
    bind-prop:value="myadapter.0.tank1.level"
    title="Tank 1" unit="%" min="0" max="100" decimals="1">
</webui-gauges-linear-gauge>
```

### `gauge-table`

A list of tagged bars — one row per tag, each row with its own zones. Three properties only: `rows`, `unit`, `decimals`.

`rows` is a JSON string; each entry carries its own `zones` array, so different rows can have opposite colour logic (rising-bad vs falling-bad):

```json
[{"tag":"BF234239","value":86.7,"zones":[{"to":65,"color":"#7c5ce0"},{"to":100,"color":"#d63b45"}]}]
```

Because the whole table is one string property, driving it live means binding `rows` to a state that already contains this JSON (or building the string in a screen script) rather than binding each row.

### `setpoint-gauge`

A thermostat-style track showing a process value against a setpoint and a comfort band. Properties: `value`, `setpoint`, `min`, `max`, `bandmin`, `bandmax`, `title`, `decimals`, `bandcolor`, `endcolor`, `valuecolor`.

`bandmin`/`bandmax` draw the band; `endcolor` paints the out-of-band ends; `valuecolor` is the value pointer. Its script is a single `_bindingsRefresh()` call — **it renders the setpoint, it does not let an operator drag one.** To write a setpoint you need your own input element plus a write path (see §5).

---

## 2. PlantPAx symbols and faceplates

`default-controls/controls/plantpax/` holds 23 type pairs — a `<type>-symbol.control` and a `<type>-faceplate.control` each — plus a `components/` folder of 11 shared building blocks (`level-bar`, `sparkline`, `status-lamp`, `command-button`, `std-slider`, `tank`, and so on) that the faceplates compose.

The 23 types are `ain`, `alarm`, `cmdsrc`, `dbc`, `din`, `dose`, `dout`, `gate`, `hilosel`, `intlk`, `logic`, `meta`, `motor`, `motor2spd`, `motorrev`, `npos`, `perm`, `pide`, `valvec`, `valvemo`, `valvemp`, `valveso`, `vsd`.

### The `root` + `type` pair

A symbol takes almost no properties. `ain-symbol` has exactly three — `root`, `type`, `unit` — and most others have just `root` and `type` (`motor-symbol`, `valvec-symbol`). You place the symbol and set:

- `root` — the ioBroker state-ID prefix of the instance, e.g. `rockwell_ethernetip.0.PLC1.FIC101`
- `type` — the AOI type name, e.g. `P_AIn`, `P_Motor`, `P_ValveC` (the property default)

Individual members are never addressed directly. Every read and write goes through a **canonical field name** resolved at runtime:

```js
window.IOB.resolvePlantPaxField(instance.type, instance.root, 'hiAlarm')
```

`resolvePlantPaxField` (`www/dist/frontend/common/IobrokerHandler.js:1001`) delegates to `resolveField()` in `www/dist/frontend/common/PlantPaxResolve.js:35`, which looks up `types[typeName].adapters[<first segment of root>][fieldKey]` and evaluates the stored JS template expression with `root` in scope. The adapter is taken from the state ID itself, which is why the same symbol works against `rockwell_ethernetip` and `opcua` without change — the mapping table holds a different expression per adapter. For `P_AIn`, `pv` is `` `${root}.Inp_PV` `` on Rockwell but `` `${root}.Val` `` on OPC UA (`PlantPaxResolve.js:106` and `:122`).

The default mapping ships in `DEFAULT_PLANTPAX_TYPES` (`PlantPaxResolve.js:324`) and is editable per project in the designer's PlantPAx Types tree; it is persisted as `plantpax-types.json`.

### How a symbol opens its faceplate

**Not through an event binding.** The click handler is attached imperatively in the symbol's own `init()`, and the file says why:

```js
// wire symbol click -> open faceplate (event bindings can't eval expressions here, so bind imperatively)
function ppWireSymbol(instance){
  const el=instance._getDomElement&&instance._getDomElement('sym'); if(!el) return;
  el.addEventListener('click',function(){ try{ window.IOB && window.IOB.openFaceplate && window.IOB.openFaceplate(instance.type,instance.root); }catch(e){} });
}
```
— `default-controls/controls/plantpax/ain-symbol.control`, in the `script` key; `ppWireSymbol(instance)` is then called at the end of `init()`.

The host is `IobrokerHandler.openFaceplate(type, root)` (`www/dist/frontend/common/IobrokerHandler.js:1024`). It does not toggle a hidden dialog — it **creates the faceplate element on open and removes it on close**, which is what tears down the nested controls' subscriptions:

```js
const el = document.createElement('webui-plantpax-' + typeToTag(type) + '-faceplate');
el.setAttribute('root', root);
el.setAttribute('type', type);
panel.appendChild(el);          // -> connectedCallback -> init() -> subscriptions start
```

`typeToTag()` (`PlantPaxResolve.js:21`) maps the AOI name to the folder slug — `P_AIn` → `ain`, `P_ValveC` → `valvec` — falling back to lower-casing and stripping a `P_` prefix for anything not in its table. So `openFaceplate('P_AIn', root)` mounts `<webui-plantpax-ain-faceplate>`.

Consequences worth knowing:

- The faceplate control for the type **must exist**, or the created element stays an unknown tag. All 23 shipped types have one.
- `openFaceplate` returns early unless **both** `type` and `root` are non-empty, so a symbol with an unset `root` silently does nothing on click.
- `closeFaceplate()` (`:1037`) removes the element, firing `disconnectedCallback` → `ppCleanup()` → `unsubscribeState` for every field. The overlay also closes on backdrop `mousedown` and on `Escape` (`:1018`–`:1019`).
- Only one faceplate is open at a time; opening a second removes the first (`:1028`).

You can call `window.IOB.openFaceplate(type, root)` yourself from a screen script to open a faceplate from any element, not just a shipped symbol.

### Inside a faceplate

`ain-faceplate` carries the same three properties as its symbol (`root`, `type`, `unit`) and builds the rest from live data. It subscribes to 30 canonical fields and presents eight panes — `Home`, `Maintenance`, `Diagnostics`, `Alarms`, `Trend`, `Engineering`, `HMI`, `Faults` — split across two icon tab-strips. The `Main` group holds the operator tabs; the `Advanced` button switches to the engineering group (`Engineering`/`HMI`/`Faults`) and `Main` switches back, via the control's `_adv()` and `_main()` helpers. It gates its controls by permission — `secCan('configure')` enables the numeric inputs, `secCan('maintenance')` reveals the substitute-PV controls, `secCan('ackAlarm')` reveals the acknowledge buttons, re-running on `IOB.securityChanged`.

Every write from a faceplate goes through `secWriteState` with an explicit action (see §5).

---

## 3. Pipes

`default-controls/controls/pipes/` ships seven controls: `Short_Horizontal_Pipe`, `Short_Vertical_Pipe`, `pipe_90deg_curve1` through `pipe_90deg_curve4`, and `pipe_tee`.

### The square-tile model

Every pipe draws into the **same square viewBox, `0 0 112.5 112.5`**, with `preserveAspectRatio="none"`. Segments are therefore tiles: keep them square and equally sized and their openings line up mouth-to-mouth on a grid, the four curves supplying the four corner rotations and `pipe_tee` the branches (its `teeType` enum selects which of the four orientations, `1`–`4`).

Because `preserveAspectRatio` is `none`, a non-square tile stretches the artwork — the stroke gets thicker on one axis. Size runs of pipe uniformly.

Straight segments (`Short_Horizontal_Pipe`) expose:

`pipesize`, `strokewidth`, `strokecolor`, `strokedasharray`, `left`, `signalleft`, `conditionleft`, `conditionleftvalue`, `right`, `signalright`, `conditionright`, `conditionrightvalue`, `animationspeed`

The paired `left`/`right` (and `up`/`down` on the curves) sets are the flow-animation triggers: a `signal*` plus a `condition*` operator (`exist`, `equal`, `is not equal`, `less-than`, `less-than or equal`, `greater-than`, `greater-than or equal`) and a `condition*value` decide whether liquid animates in that direction. `pipe_tee` is simpler, with only `teeType` and `pipesize`.

Pipes are decorative: no pipe control writes a state.

### Designer magnet-snap

The screen editor snaps a dragged pipe to its neighbour. In `computePipeSnap()` (`www/dist/frontend/config/IobrokerWebuiScreenEditor.js:690`):

- It only engages when the dragged element **and** the candidate are pipes — the test is `/pipe/i.test(el.tagName)` (`:688`), so it keys off the tag name. A pipe you renamed out of that pattern will not snap.
- Only siblings are considered (`sel.parentNode.children`), so pipes in different containers do not snap to each other.
- Four pairings are evaluated — this right→that left, this left→that right, this bottom→that top, this top→that bottom — requiring edge distance under `EDGE = 22` px and perpendicular centre offset under `PERP = 0.9 ×` the smaller dimension (`:698`, `:709`).
- The best candidate draws a **green indicator bar** along the target edge; the move is committed on pointer-up as a single undoable `'pipe snap'` group, writing rounded `left`/`top` corrected for canvas zoom (`:716`–`:725`).

This is separate from the ordinary alignment guides, which run for every element type and only draw lines without moving anything.

---

## 4. Alarm viewers

Two controls under `default-controls/controls/alarms/`. Both are front-ends for a **separate `myalarm` adapter instance** — they do not read ioBroker states directly for their row data, and without that adapter they have nothing to show.

### `alarm-viewer`

Properties: `jsonsignal`, `acksignal`, `adapterinstance`, `mode`, `showfilter`, `soundenabled`, `soundurl`, `maxrows`.

| Property | Default | Notes |
|---|---|---|
| `jsonsignal` | `myalarm.0.info.AlarmJson` | state holding the alarm array as JSON |
| `acksignal` | `myalarm.0.info.AcknowledgeId` | written with the acknowledged row's id |
| `adapterinstance` | `myalarm.0` | `sendTo` target |
| `mode` | `live` | `live` \| `history` |
| `showfilter` | `true` | enum of `"true"`/`"false"` — strings, not booleans |
| `soundenabled` | `false` | likewise a string enum |
| `soundurl` | `""` | played while unacknowledged alarms exist |
| `maxrows` | `500` | rows kept after filtering |

Note that `showfilter` and `soundenabled` are declared `enum` with the string values `"true"`/`"false"`. The script compares `instance.soundenabled==='true'` — a real boolean will not enable the sound.

Acknowledging is permission-gated but **does not use `secWriteState`**. It calls `secCan('ackAlarm', instance)` and, if allowed, emits `sendTo(<adapterinstance>, 'ackAlarm', {alarmId})` and additionally sets `acksignal`. When denied, the wrapper gets the `av-noack` class and the buttons are suppressed; the check re-runs on `IOB.securityChanged`. Because the write is a `sendTo` to another adapter, the mywebui backend's server-side matrix is not in that path — the gate is client-side.

The control carries translations for `az`, `en`, `ru`, `de` and `tr` (see [translations.md](translations.md)).

### `alarm-history-viewer`

Properties: `adapterinstance`, `defaultdays`, `showfilter`, `maxrows` (default `1000`).

On init it prefills the range to the last `defaultdays` days (default `7`) and loads immediately, fetching through `sendTo(<adapterinstance>, 'getlog', {startdate, enddate})`. It is read-only — there is no acknowledge path.

---

## 5. Writes and permissions

A SCADA write should not be an ordinary `setState`. mywebui provides `IOB.secWriteState`, which re-evaluates the permission matrix **in the backend**:

```js
await window.IOB.secWriteState(id, val, { action: 'configure', element: instance });
```

`secWriteState` (`www/dist/frontend/common/IobrokerHandler.js:1055`) sends the write to the `mywebui.0` backend with the resolved `action`, the `area`, the username and the project. `area` is derived from the element when you pass `element` — `secAreaOf()` (`:1042`) walks up to the nearest `data-area` ancestor, crossing shadow-root hosts, which is the `Cfg_Area` equivalent.

Server-side (`src-original/backend/main.js:891`) the backend loads the project's `data/security.json` (cached 5 s), resolves the verdict, denies with a logged reason if the action is not permitted, stamps identity/audit into the state's `c` field, and performs the write **as the claimed user** so js-controller's own ACL checks it again. A licence-locked install refuses `secWriteState` before touching any state (`:898`).

Two limits worth stating plainly:

- `secCan()` on the client is an **affordance**, not the enforcement — it hides buttons. The backend check is the one that matters, which is why faceplate writes go through `secWriteState` rather than `setState`.
- Backend identity is not yet authenticated: `main.js:889` notes the payload `username` is taken as claimed, pending a verified token.

Of the shipped controls, the PlantPAx family is the only one that uses `secWriteState` — all 57 files that reference it are under `plantpax/`. The gauges, pipes and alarm viewers do not write states through this path.

Full model, action codes and area levels: **[permissions.md](permissions.md)**.

---

## See also

| Topic | Document |
|---|---|
| First screen, end to end | [getting-started.md](getting-started.md) |
| Binding syntax and prefixes | [bindings.md](bindings.md) |
| Authoring your own controls | [custom-controls.md](custom-controls.md) |
| Screen layout and transitions | [screens.md](screens.md) |
| Permission model | [permissions.md](permissions.md) |
| `--ui-*` tokens used by these controls | [theming.md](theming.md) |
| Loop and conditional directives | [template-directives.md](template-directives.md) |
