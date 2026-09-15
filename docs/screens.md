# Screens — layout, transitions and multi-view

How a mywebui screen is stored, how its layout is described, how it animates in, and how a single element can appear on several screens.

Sources for everything below: the readable runtime/designer modules under `www/dist/frontend/` (`runtime/ScreenViewer.js`, `config/IobrokerWebuiScreenEditor.js`, `config/IobrokerWebuiAppShell.js`, `helper/LayoutHelper.js`), plus live project data. Note that `www/dist/frontend/bundle/` is obfuscated build output — the folders named above are not, and are the authority.

## The screen object

A screen is a JSON object stored at `<project>/data/screens/<name>.screen` and loaded by `IobrokerHandler.getScreen()` (`www/dist/frontend/common/IobrokerHandler.js:361`). It has exactly five keys:

```json
{ "html": "…", "style": "…", "script": "…", "settings": { }, "properties": { } }
```

The designer writes precisely this object on save:

```js
let screen = { html, style, script, settings: this._settings, properties: prp };
```
— `www/dist/frontend/config/IobrokerWebuiScreenEditor.js:867`

A custom control (`.control`) uses the **same five keys**, which is why controls and screens share the editor. Confirmed against a real file:

```
$ node -e "console.log(Object.keys(JSON.parse(require('fs').readFileSync('default-controls/controls/gauges/linear-gauge.control','utf8'))))"
[ 'properties', 'settings', 'html', 'style', 'script' ]
```

### `settings`

Observed on live screens (all five keys of the object present, `settings` shown in full):

```json
{
  "layout":     { "type": "tabs", "tabLabels": "Tab 1|Tab 2|Tab 3", "active": 0, "tabPosition": "top" },
  "navigation": { "show": true, "title": "Pumps", "order": 1, "image": "" },
  "transition": { "waitForReady": false },
  "accessibility": { "enabled": false, "groups": [], "action": "message", "redirectScreen": "" },
  "visibilityEnabled": false,
  "visibilityGroups": [],
  "width":  "1920px",
  "height": "1080px",
  "stretch": "uniformToFill"
}
```

`width` / `height` set the design surface (`IobrokerWebuiScreenEditor.js:1298`) and the reference size for `stretch`. `stretch` is applied by `ScreenViewer._stretchView()` and accepts `none`, `uniform` and `uniformToFill` (`ScreenViewer.js:488`+); `uniform` letterboxes to fit, `uniformToFill` scales to cover.

`accessibility` / `visibilityGroups` are the screen access-control fields — see **[permissions.md](permissions.md)**; they are not repeated here.

## Layout

`settings.layout` describes the screen's root layout **as metadata, not as an element**. There is no layout container in the saved `html` that you could select or delete. `www/dist/frontend/helper/LayoutHelper.js` is the single source of truth and is used by both the designer canvas and the runtime so the two cannot drift.

Edited from the designer's Settings tab → **▦ Layout** section (`IobrokerWebuiAppShell.renderLayoutPanel`, `IobrokerWebuiAppShell.js:1721`). Five types:

| `type` | Effect |
|---|---|
| `none` | no layout CSS applied (default) |
| `flex` | `display:flex` on the root |
| `grid` | `display:grid` on the root |
| `split` | generates a `webui-split-container` |
| `tabs` | generates a `webui-tab-container` |

### `flex` and `grid` — CSS-only

`layoutToStyle()` (`LayoutHelper.js:7`) maps the metadata to inline CSS on the root container. Nothing else changes; the screen's top-level children simply become flex/grid items.

```json
{ "type": "flex", "direction": "row", "wrap": "nowrap",
  "justifyContent": "flex-start", "alignItems": "stretch",
  "gap": "8px", "padding": "0" }
```

Defaults applied when a field is absent: `direction` → `row`, `wrap` → `nowrap`, `justifyContent` → `flex-start`, `alignItems` → `stretch`. `gap` and `padding` are only emitted when set.

```json
{ "type": "grid", "gridTemplateColumns": "1fr 1fr", "gridTemplateRows": "1fr 1fr",
  "gap": "8px", "padding": "0" }
```

A grid with **neither** `gridTemplateColumns` nor `gridTemplateRows` is deliberately treated as `none`, to avoid an invisible zero-track grid (`LayoutHelper.js:24`). Switching the type to `grid` in the Layout panel seeds both to `1fr 1fr` (`IobrokerWebuiAppShell.js:1787`). The panel offers a per-track editor with units `fr`, `px`, `%` and `auto`.

The nine CSS properties layout owns are cleared before each re-apply, so switching type never leaves residue (`ALL_KEYS`, `LayoutHelper.js:4`):
`display`, `flexDirection`, `flexWrap`, `justifyContent`, `alignItems`, `gap`, `padding`, `gridTemplateColumns`, `gridTemplateRows`.

### `split` and `tabs` — structural

These two are *structural*: `isStructuralLayout()` returns true for them (`LayoutHelper.js:54`). The container element is **generated** from the metadata and marked `class="__layout-generated"`; the saved `html` holds only the pane/tab contents as top-level children. So the container is never editable or deletable, and never grows nested wrappers across save/load cycles.

```json
{ "type": "split", "orientation": "horizontal", "splitPosition": 50 }
```

Generates (`wrapStructuralHtml`, `LayoutHelper.js:92`):

```html
<webui-split-container class="__layout-generated" orientation="horizontal" split-position="50">
  <div data-split-pane="1">…first top-level child…</div>
  <div data-split-handle=""></div>
  <div data-split-pane="2">…remaining children…</div>
</webui-split-container>
```

Defaults: `orientation` → `horizontal`, `splitPosition` → `50`. On save, `unwrapStructuralHtml()` reads `orientation` and `split-position` back off the container into `settings.layout`, so dragging the splitter in the designer persists.

```json
{ "type": "tabs", "tabLabels": "Tab 1|Tab 2|Tab 3", "active": 0, "tabPosition": "top" }
```

`tabLabels` is a single **pipe-separated** string, not an array — confirmed both in `LayoutHelper.js:94` and in live screen data. `active` is the zero-based index of the tab being edited/shown; `tabPosition` is one of `top`, `bottom`, `left`, `right` (`IobrokerWebuiAppShell.js:1766`). Switching type to `tabs` seeds `tabLabels` to `"Tab 1|Tab 2"`. One top-level child of the saved `html` becomes one tab panel; if there are fewer children than labels, empty `<div></div>` panels are padded in.

Adding, removing and renaming tabs goes through `addLayoutTab()` / `removeLayoutTab()` / `renameLayoutTab()` (`IobrokerWebuiScreenEditor.js:438`+), which keep `tabLabels` and the panel children in sync. The last tab cannot be removed.

If you switch away from `split`/`tabs`, `stripGeneratedContainer()` (`LayoutHelper.js:61`) pulls the panes back out as top-level children so a stale container is never saved.

## Transitions

`settings.transition` controls how a screen is revealed after navigation. It is **per screen** — each screen carries its own, and missing fields fall back to code defaults, so screens are independent (`ScreenViewer._transitionCfg`, `ScreenViewer.js:452`).

```json
{ "effect": "fade", "waitForReady": true, "duration": 150, "fallbackMs": 8000 }
```

| Field | Values | Default |
|---|---|---|
| `effect` | `none`, `fade`, `slideUp`, `zoom`, `blur` | `fade` |
| `waitForReady` | boolean | `true` (only an explicit `false` disables it) |
| `duration` | ms | `150` |
| `fallbackMs` | ms | `8000` |

Note the effect name is `slideUp`, not `slide`.

Edited from the designer's Settings tab → **Transition (this screen)** group (`IobrokerWebuiAppShell.js:2065`). The Effect dropdown offers `Fade (default)` (empty value), `None (instant)`, `Fade`, `Slide up`, `Zoom` and `Blur`.

### How it runs

`_beginTransition()` (`ScreenViewer.js:461`) hides the freshly-injected content, then `_finishTransition()` (`ScreenViewer.js:475`) reveals it. Each effect is plain CSS on the screen root:

| `effect` | Start state, animated back to neutral over `duration` |
|---|---|
| `none` | no animation — `opacity:1` immediately |
| `fade` | `opacity:0` |
| `slideUp` | `opacity:0` + `translateY(14px)` |
| `zoom` | `opacity:0` + `scale(.985)` |
| `blur` | `opacity:0` + `blur(6px)` |

### `waitForReady`

With `waitForReady` true (the default) and `effect` not `none`, the reveal is deferred until `whenScreenReady()` resolves (`ScreenViewer.js:382`). That helper (`ScreenViewer.js:391`) walks the screen's shadow tree including nested shadow roots, collects every custom element, waits on `customElements.whenDefined()` for undefined tags and on each element's `componentReady` promise, then waits two animation frames and re-checks — so elements created late by `repeat:`/`for:` directives or by screen script are caught too. The effect is that you see the finished design instead of a flash of half-built elements.

`fallbackMs` is the safety net, used twice: as the `whenScreenReady` timeout, and as a `setTimeout` in `_beginTransition` that forces the reveal even if something never becomes ready. A screen therefore cannot stay invisible.

When the wait completes, a `screen-ready` event is dispatched — `bubbles: true, composed: true`, with `detail: { screenName, ready }`, where `ready` is `false` if the wait timed out (`ScreenViewer.js:376`). The same promise is exposed as the viewer's `screenReady` property.

## Multi-view

Multi-view makes **one element appear on several screens at the same absolute position**, with the same properties, bindings and size. The element is edited only on its *home* screen — the screen it was created on — and copies are injected into the target screens at runtime.

### Authoring

Select a single element on a screen and use the designer's **🔗 Multi-View** dock panel (`IobrokerWebuiAppShell._updateMultiViewPanel`, `IobrokerWebuiAppShell.js:1872`). It lists every other screen with a checkbox. Ticking screens sets a `multi-views` attribute on the element — a comma-separated list of target screen names:

```html
<my-widget id="mv-k3f9a2b" multi-views="Alarms,Overview" style="position:absolute;left:120px;top:80px;">
```

The panel also ensures the element has an `id` (generating `mv-<random>` if absent) and forces `position:absolute` when the computed position is `static`. Both the attribute and the style are written through the designer's DesignItem model rather than the raw DOM element, because the screen is serialized from that model — a raw `setAttribute` would silently vanish on save.

Selecting an injected copy on a target screen shows a read-only notice naming the home screen instead of the checkbox list; injected copies carry `data-mv-injected="<home screen>"`.

### The index — `config.multiViews`

On save, `_updateMultiViewIndex()` (`IobrokerWebuiScreenEditor.js:532`) scans the screen's html for `[multi-views]` elements and rebuilds the entries owned by this home screen in the **project-global** `config.multiViews` array (top-level key of `<project>/data/config.json`, verified present in live project data). Each entry:

```json
{ "id": "mv-k3f9a2b", "home": "Overview", "screens": ["Alarms", "Trends"], "html": "<my-widget …>…</my-widget>" }
```

- `id` — the element's `id` attribute; entries without an `id` or without any target screen are skipped.
- `home` — the screen the element lives on.
- `screens` — the parsed `multi-views` list.
- `html` — a snapshot of the element's `outerHTML`, including its absolute position, so the runtime can inject it verbatim.

Entries are replaced wholesale per home screen (`cfg.multiViews.filter(e => e.home !== this._name).concat(found)`), so removing the attribute removes the entry. When the index actually changed, the editor calls `saveConfig()` and broadcasts a `uiRefresh` command so open runtime clients pick it up live (`IobrokerWebuiScreenEditor.js:872`).

Because the snapshot is taken at save time, editing the element on its home screen and saving is what propagates the change; the Multi-View panel says as much ("Press Ctrl+S to apply at runtime").

### Runtime injection

`_injectMultiViewElements()` (`ScreenViewer.js:431`) runs when a screen renders. For each entry it skips the entry when the current screen *is* the home (the home screen renders its own copy natively), when the current screen is not in `screens`, and when an element with that `id` already exists. Otherwise it parses `entry.html`, tags the copy `data-mv-injected="<home>"`, defaults `position` to `absolute`, and appends it to the screen root.

Injection happens **before** the group-visibility pass, bindings, dynamic properties and animations, so injected copies go through every subsequent pass exactly like native elements (`ScreenViewer.js:297`).

### Designer ghosts

On a target screen the designer also shows the foreign elements as non-editable ghosts: dimmed to 55% opacity, a dashed blue outline and a `⧉ <home>` badge, in a non-serialized overlay inside the canvas root shadow (`_renderMultiViewGhosts`, `IobrokerWebuiScreenEditor.js:477`). They are never part of the saved document.

## Screen access

Screen-level access control lives in `settings.accessibility` and the `visibility*` fields shown above. It is documented in **[permissions.md](permissions.md)**.

## Not covered here

- The `webui-split-container` and `webui-tab-container` components themselves — only the metadata that generates them is described above.
- `settings.navigation` (per-screen navigation entry) and the project-global `config.navigation` / `config.appBar`.
- The project-global `config.transition` key, which exists alongside `config.multiViews` in `config.json`; the transition logic documented above reads the **per-screen** `settings.transition`.
