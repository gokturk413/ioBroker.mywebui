# Reports

A report (`.report`) is a screen shaped as paper: the same HTML, style, script, properties and
bindings, plus a page size, header/footer bands and an output. It is shown in the **report
viewer** (the browser) and generated as a **file** — HTML, PDF or CSV — either downloaded from
the viewer or written on the server (Save on server, schedule, trigger state, signal).

The file is rendered on the server with no browser at all: templates and bindings run in the
report engine, and every piece of user JavaScript runs in a sandbox (QuickJS), never on Node.
How a custom control behaves there: [custom-controls.md §10](custom-controls.md).

This guide covers the report features added in 1.159–1.162:

| Section | What |
|---|---|
| [1. Theme](#1-theme) | which theme a report is drawn in, on screen and in files |
| [2. Pictures](#2-pictures) | SVG / PNG / JPG in generated files |
| [3. The sandbox — what scripts can use](#3-the-sandbox--what-scripts-can-use) | Intl, TextEncoder, URL, … in report scripts and binding formulas |
| [4. History Query builder](#4-history-query-builder) | build a history query from menus and put it on the page |
| [5. The Report toolbox](#5-the-report-toolbox) | the "Report" folder in the designer's left toolbox |
| [6. Charts (ECharts)](#6-charts-echarts) | one chart element: live in the viewer, the same chart in HTML / PDF |

---

## 1. Theme

**Report window → Page → Theme.** Three kinds of value:

| Theme | In the viewer | In a file |
|---|---|---|
| **Paper** (default) | a white sheet in the **light** theme's tokens, whatever the application shows | the same |
| **Follow runtime theme** | follows the theme selector, **live** — switching the theme repaints the sheet and its controls | a download: the viewer's theme; a server run (nobody's screen): light |
| **a theme name** (`dark`, `purple`, … or one of your own) | always that theme | always that theme |

- "Paper" fixes a real problem: in a dark application the controls used to take the dark theme's
  light text colour and draw it on the white sheet — nearly invisible.
- Your own themes (defined in the **Global Style** as `html[data-webui-theme="name"]{ … }`, see
  [theming.md](theming.md)) appear in the list and work in files too, PDF included.
- A themed sheet takes the theme's page colour (`--ui-page`); Paper stays white.
- Controls read the theme as always, through `--ui-*` tokens. In a generated file a script can
  also read them: `getComputedStyle(el).getPropertyValue('--ui-text')` answers from the report's theme.

Stored as `settings.theme`: absent/`"paper"`, `"runtime"`, or a theme name.

## 2. Pictures

Pictures appear in generated files the way they appear in the viewer:

- **An `<img>` built by a script** — for example an SVG turned into a `data:image/svg+xml;base64,…`
  URI with `btoa(unescape(encodeURIComponent(svg)))` — works: `btoa` / `atob` exist in the sandbox.
- **A control whose DOM is built entirely by its script** (an empty template) renders.
- **An `<img src>` naming a file** in the ioBroker file store is embedded into the file:
  - `/<namespace>/<path>` (for example `/mywebui.0.projects/default/data/images/logo.png`), or
  - a relative path, read under `/mywebui/`.
  - Pictures only (png, jpg, gif, webp, svg, bmp, ico), up to 5 MB each.
  - `http(s)://` addresses stay links; `..` is never followed.
  - A picture that cannot be read stays as it was and is named in the run's notes.
- **PDF**: control tags with `_` in the name (`webui-svg_base64_viewer`) are drawn correctly, and an
  attribute holding markup (an SVG in a `svg_content` property) no longer prints as text on the page.

## 3. The sandbox — what scripts can use

Report scripts, control scripts and binding formulas run in QuickJS on the server. Besides the
DOM and `IOB` ([custom-controls.md §10](custom-controls.md)), these browser APIs exist:

| API | Notes |
|---|---|
| `Intl.NumberFormat`, `DateTimeFormat`, `PluralRules`, `RelativeTimeFormat`, `Collator`, `ListFormat`, `DisplayNames` | full ICU data (formatted by the host from plain data: a locale, options, a number or a date — no code crosses) |
| `Number/BigInt/Date.prototype.toLocaleString`, `toLocaleDateString`, `toLocaleTimeString`, `String.prototype.localeCompare` | honour the locale; **no locale given = the report's language** |
| `TextEncoder`, `TextDecoder` | UTF-8 |
| `URL`, `URLSearchParams` | |
| `structuredClone` | Date, RegExp, Map, Set, typed arrays, cycles |
| `crypto.getRandomValues`, `crypto.randomUUID` | |
| `performance.now`, `queueMicrotask` | |
| `EventTarget`, `Event`, `CustomEvent`, `AbortController`, `AbortSignal` | |
| `atob`, `btoa` | |
| *controls only:* `getComputedStyle` | inline styles up the tree, then the report theme's `--ui-*` tokens; no layout values |
| *controls only:* `ResizeObserver`, `IntersectionObserver` | call back **once** — the size from the element's style (else the control's), "visible"; a report is a still |
| *controls only:* `MutationObserver`, `DOMParser`, `Image`, `CSS.escape`, `requestIdleCallback`, `cancelAnimationFrame` | |

Not available, on purpose: `fetch`, `XMLHttpRequest`, `WebSocket`, `Worker`, `WebAssembly` — a
report script computes from the values the engine gathered; it never calls out.

Example — a binding formula that formats in the report's language:

```js
return Number(__0).toLocaleString(undefined, { minimumFractionDigits: 1 })   // az: 1 234,5
```

## 4. History Query builder

**The "History Query" window** (right tool-window strip) builds a query on ioBroker history from
menus, runs it on live data, and writes it into the open **report, screen or custom control**.
What it writes is an ordinary [`history:` directive](template-directives.md#15-history--history--history-root--history-var-new)
whose `expression` is generated JavaScript — so it works wherever the directive works: the
viewer, screens, controls, and generated HTML / PDF / CSV.

### The window

1. **Source — states.** One or more state ids (**…** opens the object browser) and a **name** per
   state — the column it becomes (`temp`, `flow1`). **Instance**: *auto* (the one that logs the
   state) or a named `history.N` / `sql.N` / `influxdb.N`. **Window**: *Last* (`24h`, `7d`, …) or
   *From–to*. In a report the range picker / *Time range from states* replaces this window.
2. **getHistory options** — passed to the history adapter as they are: `aggregate`, `step`,
   `count`, `limit`, `ignoreNull`; under *more*: `round`, `percentile`, `quantile`, and `q`, `ack`,
   `from` (ask for the quality / acknowledged flag / source with each row).
3. **Several states.**
   - *Join by time*: one record per time stamp, one column per state — `{ ts, flow1, flow2 }`.
     **bucket** (exact time, minute, 5/15 min, hour, day, week, month — calendar units in local
     time), **combine** within a bucket (last, first, avg, sum, min, max), **gaps** (leave empty or
     the previous value).
   - *Separate lists*: `{ flow1: rows, flow2: rows }`; steps do not apply.
4. **Steps — LINQ-like, top to bottom** (drag ⋮⋮ to reorder):

   | Step | Does |
   |---|---|
   | **Where** | conditions on a field — `=` `!=` `>` `>=` `<` `<=` `between` `contains` `startsWith` `in` `isNull` `notNull` — joined by AND / OR. Time parts: `ts:hour`, `ts:weekday` (0 = Sunday), `ts:day`, `ts:month`, `ts:year`, `ts:date` (`2026-09-28`) |
   | **Select** | pick / rename fields, or a computed column (JavaScript on `x`: `x.flow1 + x.flow2`); *keep the others* adds instead of replacing |
   | **Group by** | `ts` per minute / 5 / 15 min / hour / day / week / month / year (local time), or any field — then aggregates: `count` `sum` `avg` `min` `max` `first` `last` `range` (last − first, for counters) `median` `countDistinct` |
   | **Order by** | several keys, asc / desc (empty values last) |
   | **Distinct** | by one field or the whole record |
   | **Skip / Take / Take last** | |
   | **Delta** | difference to the previous record (counters, totalisers) |
   | **Running Σ** | running total |
   | **Round** | one field or all numbers, to N decimals |
   | **Aggregate → 1 value** | the whole result becomes one number — for a KPI |

5. **Put into** — `history-root` (a property of the report / screen / control, added
   automatically, read as `this.rows`), `history-var` (a local variable `local_rows`, for
   `bind-…="local_rows"`), or `element prop` (the element's own property, e.g. a widget's `data`).

**▶ Run** reads live history exactly as the page will (same instance choice, same adapter call)
and shows the result as **Table**, **JSON**, a quick **Chart** preview, or the generated **Code**.
The status line says how many rows came back raw, how many are left, from which instance, in how long.

### Insert and edit

**Insert ▾**:

| Choice | Puts on the page |
|---|---|
| Directive only | a hidden `<i history-root:rows="…">` + the property |
| + Table | the directive + a positioned `<table>`: a header from the fields, `repeat:` rows, a number/date format per column (*Table columns* below the buttons: header text and format per field) |
| + List | label – value per row |
| + KPI value | one number: the query's *Aggregate*, or the last record's first value field |
| + Chart — Trend / Area / Bar / Gauge / Pie | an [ECharts chart](#6-charts-echarts) reading the query (`source="rows"`) |
| Copy HTML | to the clipboard instead |

The views use the theme tokens, so a report's Theme reaches them. The formats follow the
report's language (`az`: `1 234,5`, `28.09.2026`).

**Editing later**: select the table, list, KPI — or the hidden directive — and the window reloads
that query (the builder's model is stored in the directive as `query`; the history adapter never
sees it). Change it, then **Apply to selected**. Headers and formats you edited by hand in the
table stay as they are.

### What gets generated

```html
<i history-root:rows="{&quot;id&quot;:&quot;0_userdata.0.reportTest&quot;,&quot;last&quot;:&quot;30d&quot;,
   &quot;q&quot;:true,&quot;expression&quot;:&quot;…&quot;,&quot;query&quot;:{…}}" style="display:none"></i>
```

```js
// expression — one line per step; runs in the browser and, for files, in the sandbox
let r = (Array.isArray(__0) ? __0 : []).map(x => ({ ts: x.ts, temp: x.val, q: x.q }));
r = r.filter(x => x.q == 0);
{ const g = new Map(); for (const x of r) { const k = __start(x.ts, "hour"); … }
  r = [...g].map(([k, a]) => ({ hour: k, avgTemp: __agg(a, "avg", "temp") })).sort(…); }
r = r.map(x => ({ ...x, avgTemp: typeof x["avgTemp"] === 'number' ? Math.round(x["avgTemp"] * 10) / 10 : x["avgTemp"] }));
return r;
```

Typed values are always literals in the generated code (never code); only a *Select* computed
column is JavaScript by design, like a binding formula.

### Good to know

- The history rows are `{ val, ts, q, ack }` — `ts` in ms, sorted ascending, `val` a number or
  `null`. A row with `q` ≠ 0 is bad quality (an OPC UA link down logs `val: null, q: 64`): add
  **q** under *more* and a **Where q = 0** step to drop them.
- The adapter's own `aggregate` + `step` can come back sparse (seen on `history.0`: 32 rows for 60
  days of hourly averages). The builder's **Group by** computes the same buckets itself from the
  raw rows and is the safer choice for tables.
- Group by day/week/month uses local time — the browser's in the viewer, the server's in a file.

## 5. The Report toolbox

The designer's left toolbox has a **Report** folder (screens, reports and controls alike):
**History Table**, **History List**, **KPI value**, **History Chart**, **Query only**. Pick one,
click on the page: it is placed there and the History Query window opens for it — the element
uses the query currently in the window (a new one if none).

*History Chart* places a trend chart ([§6](#6-charts-echarts)). The window's **Chart** tab shows the same
chart on the query's live result, with the kinds to switch between (trend, area, bar, gauge, pie).

## 6. Charts (ECharts)

**One element for every ECharts chart**: `<iobroker-webui-echart>`. It is not a set of separate
controls — ECharts draws any chart from one *option* object, so line, bar, gauge, pie … are
option templates on the same element. It works on screens, reports and inside custom controls.

- **Viewer, screens, designer** — live ECharts (tooltip, legend, resize). The library (ECharts
  6.1, `www/node_modules/echarts`) loads only when a chart is on the page.
- **Generated files** — the engine draws the same option with ECharts' own server-side renderer,
  in the sandbox (never on Node), and embeds it as an **SVG picture**: crisp in HTML and in PDF.
- **`file-mode="live"`** — an HTML file also carries the library (about 1 MB) and draws the
  live chart when opened, offline; the SVG stays as the fallback and is what the PDF shows.

| Attribute | Meaning |
|---|---|
| `source` | where the data comes from: a property of the screen / report (`rows` — what `history-root:rows` fills) or a local variable (`local_levels`). The chart redraws whenever the query reads again (range picker, `reload`) |
| `data` (property) | the data set directly: `history:data="…"` or `bind-prop:data="??rows"` on the chart, or `chart.data = …` from a script |
| `kind` | a template when there is no `option`: `trend` (default — a line per numeric field over `ts`), `area`, `bar`, `gauge` (the last value; also the default for a one-value query), `pie` (the share per field) |
| `option` | your own ECharts option: JSON, or JavaScript returning it — formatters are functions (`data` and `theme` are in scope). It wins over `kind` |
| `theme` | `auto` (default: the `--ui-*` tokens where the chart sits — the report's theme, the runtime theme; a theme switch repaints it) `light`, `dark` |
| `renderer` | `svg` (default — prints well) or `canvas` |
| `preset` | an **iobroker.echarts** preset (`echarts.0.preset_1`): the viewer shows the adapter's own page; a file gets the adapter's own server-side SVG (`sendTo('echarts.0', 'send', …)`) |
| `file-mode` | `svg` (default) or `live` |

The data the builder and `getHistory` produce fits ECharts as it is: rows `{ ts, val }` or
`{ ts, flow1, flow2 }` become `dataset: { source: rows }` with `encode: { x: 'ts', y: … }` on
a time axis; `null` values are gaps. Separate lists (`{ name: rows }`) become one line each.

```html
<!-- from the History Query builder: Insert → Chart -->
<iobroker-webui-echart source="rows" kind="trend" style="position:absolute;left:60px;top:330px;width:480px;height:240px"></iobroker-webui-echart>

<!-- your own option, with a formatter -->
<iobroker-webui-echart source="rows" option="return {
    xAxis: { type: 'time' },
    yAxis: { axisLabel: { formatter: v => v.toLocaleString() + ' t' } },
    series: [{ type: 'bar', encode: { x: 'ts', y: 'flow1' } }]
}"></iobroker-webui-echart>
```

**In the designer** the chart draws live on the canvas too: the designer does not run `history:` directives, so the chart finds the directive that fills its `source` and reads it itself — the same getHistory call and expression the page runs. A chart with no query yet shows a sample, marked *sample data*. In the **Properties** panel `source` (the report's own properties), `kind`, `theme`, `renderer` and `fileMode` are dropdowns; `option` and `preset` are text; `data` can be bound.

In a script: `el.chart` is the ECharts instance; a click on the chart dispatches `chart-click`
(`detail: { name, value, seriesName, dataIndex }`).

**PDF fix (1.162):** a table placed lower on the page no longer pushes the whole sheet onto a
blank second page.

## Files

| Piece | File |
|---|---|
| query model + compiler | `www/dist/frontend/common/HistoryQuery.js` |
| Table / List / KPI views | `www/dist/frontend/common/HistoryQueryViews.js` |
| the window | `www/dist/frontend/config/HistoryQueryWindow.js` |
| the toolbox folder | `www/dist/frontend/widgets/ReportToolbox.js` |
| the chart element | `www/dist/frontend/runtime/EChart.js` |
| chart option / theme (browser and sandbox) | `www/dist/frontend/common/EChartsOption.js` |
| charts in files | `src-original/backend/reportRenderer.js` (`renderCharts`), `reportSandboxWorker.js` (`renderChart`), `reportGenerate.js` (presets, live mode) |
| report theme resolution | `www/dist/frontend/common/ReportTheme.js` |
| sandbox web platform | `src-original/backend/report-dom/web.js` (built into `dist/backend/vendor/report-web.iife.js`) |
| tests | `test/report/history-query.mjs`, `sandbox-web.mjs`, `generate.mjs` (charts: 7 checks), `pdf.mjs` |
