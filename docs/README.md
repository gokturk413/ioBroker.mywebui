# mywebui authoring documentation

These guides cover **authoring** in mywebui — building screens, binding them to
live ioBroker data, writing your own controls, and shipping them. They assume the
adapter is installed and running; they do not cover installing or licensing it
(see the [main README](../README.md) for that).

## Which document do I need?

| I want to… | Read |
|---|---|
| build my first screen | [getting-started.md](getting-started.md) |
| show a live value | [bindings.md](bindings.md) |
| read the marks on controls (write feedback, read quality) | [status-indicators.md](status-indicators.md) · [Azərbaycanca](status-indicators.az.md) |
| see who did what, from where, with which outcome; the page's live traffic; find an element; which states the project uses; who is online | [journal.md](journal.md) · [Azərbaycanca](journal.az.md) |
| repeat/branch in a template | [template-directives.md](template-directives.md) · [Azərbaycanca](template-directives.az.md) |
| make my own control | [custom-controls.md](custom-controls.md) · [Azərbaycanca](custom-controls.az.md) |
| keep a screen from leaking memory over days (what a control or widget must clean up) | [custom-controls.md §3 Memory](custom-controls.md#memory-what-must-end-with-the-control) · [npm-widgets.md §7b](npm-widgets.md#7b-memory--what-the-element-must-clean-up) |
| package a control as npm | [npm-widgets.md](npm-widgets.md) |
| lay out or transition screens | [screens.md](screens.md) |
| put controls / web components / another svg inside an svg (foreignObject) | [screens.md — HTML inside an SVG](screens.md#html-inside-an-svg--foreignobject) |
| match the theme | [theming.md](theming.md) |
| translate my control | [translations.md](translations.md) |
| look up a translation function | [translations-api.md](translations-api.md) |
| restrict who can see or write | [permissions.md](permissions.md) |
| run commands on a click or a value change without code (Simple Script) — every command | [simple-script.md](simple-script.md) · [Azərbaycanca](simple-script.az.md) |
| use mywebui functions in Simple Script, Blockly or JS — checked like the user | [script-functions.md](script-functions.md) · [Azərbaycanca](script-functions.az.md) |
| animate an element (rotate, agitator, flow along a pipe, effects) | [bindings.md §6–7](bindings.md#6-animations-panel-bindings) |
| ask before a write (yes / no, a choice, the user's password) | [confirm-protect.md](confirm-protect.md) |
| use gauges / PlantPAx | [scada-controls.md](scada-controls.md) |
| build a dashboard (cards, KPI, conveyor, boiler, sliders, logic gates, time pickers) | [scada-controls.md §6](scada-controls.md#6-dashboard-controls) |
| make a control work in reports | [custom-controls.md §10](custom-controls.md) |
| theme a report, pictures in report files, what report scripts can use | [reports.md](reports.md) |
| build a history query from menus (table / list / KPI / chart) | [reports.md §4](reports.md#4-history-query-builder) |
| draw a chart (ECharts) on a screen or report | [reports.md §6](reports.md#6-charts-echarts) |

## Suggested reading order

If you are new, read them in this order — each builds on the one before:

1. **[getting-started.md](getting-started.md)** — create a project, place your
   first element, bind it to a state, and open it in the runtime.
2. **[bindings.md](bindings.md)** — the full binding system: signals, states,
   objects and properties; one-way vs two-way; converters and JavaScript
   expressions; relative and indirect signal paths.
3. **[screens.md](screens.md)** — screen layout (Blank/Flex/Grid/Split/Tabs),
   transitions, screen-ready timing, and multi-view placement.
4. **[template-directives.md](template-directives.md)** — `for:`, `repeat:`,
   `if:`, `switch:` and `ref:` inside custom-control templates.
5. **[custom-controls.md](custom-controls.md)** — build a reusable control with
   its own template, properties and script.
6. **[theming.md](theming.md)** — the `--ui-*` token system, so your control
   follows the runtime theme instead of hardcoding colours.
7. **[translations.md](translations.md)** — scoped translations for your control,
   with [translations-api.md](translations-api.md) as the function-level reference.
8. **[npm-widgets.md](npm-widgets.md)** — package controls as an npm widget
   others can install.
9. **[permissions.md](permissions.md)** — codes, actions and areas; restricting
   who can view a screen or write a value.
10. **[scada-controls.md](scada-controls.md)** — the shipped gauge and PlantPAx
    control libraries.
11. **[reports.md](reports.md)** — report theme, pictures in files, the sandbox's web
    platform, and the History Query builder.

## Reference

- **[bindings.md](bindings.md)** doubles as the binding reference — every binding
  target and source form is tabulated there.
- **[translations-api.md](translations-api.md)** is a pure API reference
  (`IOB.t`, `t-t`, scope resolution); read [translations.md](translations.md)
  first for the concepts.

## Feedback

Corrections and gaps are welcome — open an issue on the repository linked from
the [main README](../README.md).
