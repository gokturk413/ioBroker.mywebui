# Custom Control Theming Guide

How to make a custom control follow the runtime theme system (dark / light / purple / teal / contrast / glass + user themes from Global Style).

## How a theme is applied

A theme is nothing but a CSS rule keyed on a data attribute of `<html>`. From the header comment of `www/dist/frontend/runtime/RuntimeTheme.js`:

```
// Runtime theme system (CSS data-attribute model): a theme is a CSS rule
//   html[data-webui-theme="NAME"] { color-scheme:...; --ui-*:...; --ui-page:... }
```

`applyRuntimeTheme(name)` sets `document.documentElement.dataset.webuiTheme = name`, mirrors the resolved `--ui-page` onto the `<html>`/`<body>` background on the next frame, persists the choice under the `webui-theme` localStorage key, and fires the change event. Because the variables sit on `<html>`, they inherit into every shadow root — a control needs no wiring at all to receive them, only `var()` references.

The six built-in themes are `dark`, `light`, `purple`, `teal`, `contrast` (labelled "High Contrast") and `glass`. Their labels come from `BUILTIN_LABELS`; `dark` is the fallback when nothing is stored.

## The token set

Themes define these CSS custom properties on `<html>` (they inherit into every shadow root):

| Token | Use for |
|---|---|
| `--ui-page` | page background |
| `--ui-surface` | panel / card / header background |
| `--ui-surface-2` | secondary surface (track, raised element) |
| `--ui-input` | input / editable field background |
| `--ui-border` | borders, separators, tick marks |
| `--ui-text` | primary text |
| `--ui-dim` | secondary / muted text, small markings |
| `--accent` | selection, active item, links, focus |
| `--ui-ok` | good / running / connected (green family) |
| `--ui-warn` | warning / attention (amber family) |
| `--ui-error` | alarm / fault / stop (red family) |
| `--ui-info` | informational (blue family) |
| `--ui-backdrop` | frosted-glass filter for surfaces; only set by glass-style themes (e.g. `blur(18px) saturate(160%)`). Controls opt in with `backdrop-filter: var(--ui-backdrop, none)` — resolves to `none` in normal themes. |

Every one of these is defined by all six built-in themes, except `--ui-backdrop`, which **only the `glass` theme sets** — that is exactly why controls must reference it as `var(--ui-backdrop, none)`.

How often the shipped controls actually reach for each token (118 `.control` files):

| Token | Uses | | Token | Uses |
|---|--:|---|---|--:|
| `--ui-border` | 309 | | `--ui-dim` | 113 |
| `--ui-text` | 299 | | `--ui-surface` | 68 |
| `--ui-surface-2` | 199 | | `--ui-warn` | 55 |
| `--accent` | 174 | | `--ui-backdrop` | 30 |
| `--ui-error` | 174 | | `--ui-input` | 21 |
| `--ui-ok` | 149 | | `--ui-info` | 3 |

`--ui-page` appears only once in a control, which is correct: the page background is the runtime's job, not a control's.

### Reference values

The `dark` and `light` definitions, verbatim from `BUILTIN_CSS` — useful as the source of the fallback values you hardcode in `var(--token, <fallback>)`:

```css
html[data-webui-theme="dark"]{color-scheme:dark;--ui-page:#1a1f2b;--ui-text:#e2e6ec;--ui-dim:#9aa3b0;--ui-surface:#252b38;--ui-surface-2:#2f3545;--ui-input:#3a3f4b;--ui-border:#3b4250;--accent:#2680eb;--ui-ok:#37d67a;--ui-warn:#f6b73c;--ui-error:#ef4d5e;--ui-info:#2b8bff;}
html[data-webui-theme="light"]{color-scheme:light;--ui-page:#eef1f6;--ui-text:#1d2733;--ui-dim:#5a6675;--ui-surface:#f3f5f8;--ui-surface-2:#ffffff;--ui-input:#ffffff;--ui-border:#d4dae3;--accent:#2680eb;--ui-ok:#1a9e56;--ui-warn:#c77d0e;--ui-error:#d33241;--ui-info:#2680eb;}
```

## Light and dark

Light/dark is **not a separate axis** here: `light` is simply one of the themes, and each theme declares its own `color-scheme` (`light` for the light theme, `dark` for the other five) so native form controls, scrollbars and `<select>` popups render correctly.

Consequently a control adapts to light mode for free, provided it only ever reads tokens. Do **not** write a `prefers-color-scheme` media query in an ordinary control: none of the 118 shipped controls does, apart from `theme-toggle` and `WebuiConnectionMonitor1`, and in `theme-toggle` it is used in *script* to resolve the "Auto" mode, not in CSS to restyle. `light-dark()` is used by no shipped control at all.

Following the **OS** setting is therefore an opt-in behaviour supplied by the `theme-toggle` control (see below), not something the theme engine does on its own.

## Rules when writing a control

1. **Never hardcode a chrome colour.** Write `var(--ui-token, <fallback>)` where the fallback is the dark-theme value, so the control still looks right if the theme system is absent (e.g. in the designer canvas):
   ```css
   .panel { background: var(--ui-surface, #252b38); color: var(--ui-text, #e2e6ec); border: 1px solid var(--ui-border, #3b4250); }
   ```
2. **Status colours go through the semantic tokens** — `var(--ui-ok, #37d67a)` for running/OK, `var(--ui-error, #ef4d5e)` for alarm, etc. A theme may recolour them consistently.
3. **SVG:** `var()` does NOT work in XML presentation attributes (`fill="#fff"`). Use `style="fill:var(--ui-text,#fff)"` or a CSS class instead. Leave realistic device artwork (metallic gradients, photographic shading) hardcoded.
4. **Inline styles in the template HTML** support `var()` — same rule applies there.
5. **If the control has its own theme-preset table** (like `scada_point_panel`'s `default/dark/light/blue/...`), point the **`default` preset at the tokens** and keep named presets hardcoded — a named preset is an explicit user choice that must not drift with the runtime theme.
6. **Canvas / JS-computed colours** can't use `var()` directly. Read the resolved value and re-render on theme change:
   ```js
   const col = getComputedStyle(document.documentElement).getPropertyValue('--ui-text').trim() || '#e2e6ec';
   window.addEventListener('webui-theme-changed', () => render(instance));
   ```
7. **Active/hover tints:** derive from the tokens instead of new colours:
   ```css
   background: color-mix(in srgb, var(--accent, #2680eb) 22%, transparent);
   ```
8. **Glassmorphism support:** put `-webkit-backdrop-filter:var(--ui-backdrop,none);backdrop-filter:var(--ui-backdrop,none);` on the control's MAIN surface only (blur is expensive — not on every row/cell). The built-in `glass` theme sets translucent `rgba` surfaces + a vivid `--ui-page` gradient; the effect only shows where screen/panel backgrounds are `var(--ui-surface)` or transparent — an opaque screen background covers the gradient and kills the effect.
9. **No CSS `transition` on token-driven colour properties** (`color`, `background`, `border-color`). Chromium freezes such a transition when the change originates from an inherited custom-property flip (theme switch) inside a shadow root — the element gets stuck on the old/fallback colour until something else forces a style recalc. Transition `transform`/`box-shadow`/`opacity` instead if you need motion.

## Before / after: retrofitting a control

The mechanical part of the rules above is what `scripts/_theme_all.py` automated across the stock controls. Its transformation is exactly *"replace a known hex with `var(<token>, <that same hex>)`"* — the original colour becomes the fallback, so the control looks identical until a theme overrides it:

```python
return f'var({tok},{m.group(0)})'
```

Its colour→token map is the ground truth for which hex belongs to which token, e.g. `#ef4d5e`, `#e74c3c` and `#ff0000` all map to `--ui-error`.

So the retrofit of a button reads:

```css
/* before */
background: #252b38;  border: 1px solid #3b4250;  color: #e2e6ec;

/* after */
background: var(--ui-surface,#252b38);  border: 1px solid var(--ui-border,#3b4250);  color: var(--ui-text,#e2e6ec);
```

The `logout` control shows the finished form, including rule 7's `color-mix` tinting instead of new colours:

```css
.lo:hover{background:color-mix(in srgb,var(--ui-error,#ef4d5e) 18%,transparent);
```

and rule 8's opt-in glass on the one main surface:

```css
-webkit-backdrop-filter:var(--ui-backdrop,none);backdrop-filter:var(--ui-backdrop,none);
```

Two caveats the script encodes and you should keep in mind by hand:

- It **skips** `navigation/`, `gauges/` and `theme/`, because those controls either already use tokens or run their own colour system.
- In `html`/`script` fields it only rewrites hexes in a CSS declaration context, so SVG presentation attributes such as `fill="#fff"` are left alone — that is rule 3 above, enforced mechanically.

## The theme controls

Two shipped controls under `default-controls/controls/theme/` drive the system, and both are worth reading as examples.

### `theme-selector` — a dropdown of every theme

`properties`: just `label` (string, default `"Theme"`). Its script fills the `<select>` from the runtime API and applies the choice:

```js
sel.onchange=()=>{ try{ window.mywebuiTheme && window.mywebuiTheme.apply(sel.value); }catch(e){} };
```

It also demonstrates the full listen/unlisten pair — it subscribes in `init` so an external theme change re-syncs the dropdown, and removes the listener on disconnect:

```js
window.addEventListener('webui-theme-changed', instance.__onTheme);
```

Its own CSS is, as required, entirely token-driven:

```css
.ts-sel:focus{border-color:var(--accent,#2680eb);}
```

### `theme-toggle` — an Auto | Light | Dark pill

`properties`: `lighttheme` (default `"light"`) and `darktheme` (default `"dark"`), so the pill can map its two ends onto *any* two themes. It keeps its own mode under a **separate** localStorage key, `webui-theme-mode`, holding `auto` / `light` / `dark`, and it is the only place the OS preference is consulted:

```js
return window.matchMedia('(prefers-color-scheme: dark)').matches?(instance.darktheme||'dark'):(instance.lighttheme||'light');
```

Note the `owned()` guard: on load it only re-applies `auto` if the current theme is one of its own two, so it never stomps a `glass`/`purple`/custom theme picked from the selector. Copy that guard if you build your own switcher.

## The `window.mywebuiTheme` API

`initRuntimeTheme()` installs exactly three functions:

```js
window.mywebuiTheme = { apply: applyRuntimeTheme, current: getCurrentTheme, list: getThemes };
```

| Call | Returns / does |
|---|---|
| `apply(name)` | switch theme, persist, fire `webui-theme-changed` |
| `current()` | the stored theme name, or `'dark'` |
| `list()` | `[{name, label}, …]` — built-ins **plus every user theme discovered by scanning stylesheets** for a `[data-webui-theme="…"]` selector |

`list()` is why a theme added in Global Style shows up in the selector with no registration step.

### The change event

```js
window.addEventListener('webui-theme-changed', e => {
    const name = e.detail.name;   // detail is an OBJECT, not a bare string
});
```

The payload is `{ detail: { name } }`. (This differs from `languageChanged`, whose `detail` *is* the language string — see [translations.md](translations.md).) If you only need to re-render, ignore the payload entirely, as the shipped controls do.

## Testing

In the runtime open the console and switch themes:
```js
window.mywebuiTheme.apply('light');  // then 'dark', 'contrast', ...
window.mywebuiTheme.list();          // all themes incl. user ones
```
Every surface/text/border of the control must follow; device status colours must map to the theme's `--ui-ok/warn/error/info`.

## Creating themes (users)

Designer → **Global → Global Style**, add a rule (auto-appears in the theme-selector):
```css
html[data-webui-theme="mytheme"] {
  color-scheme: dark;
  --ui-page:#0b1e12; --ui-text:#e2f5e9; --ui-dim:#93b8a1;
  --ui-surface:#12301d; --ui-surface-2:#1a4029; --ui-input:#1f4c31; --ui-border:#2a5c3c;
  --accent:#34d399; --ui-ok:#34d399; --ui-warn:#e8c35a; --ui-error:#ff7a7a; --ui-info:#4cc3ff;
}
```

## Related pieces

- [custom-controls.md](custom-controls.md) — how to build the control you are theming.
- `www/dist/frontend/runtime/RuntimeTheme.js` — built-in theme CSS + `window.mywebuiTheme` API (bundled: rebuild with `scripts/build-runtime-bundle.mjs`).
- `theme/theme-selector` (dropdown) and `theme/theme-toggle` (Auto|Light|Dark icon pill) placeable controls.
- Navigation sidebar/app-bar: choose **Auto (runtime theme)** in Settings → Navigation → Theme to bind nav chrome to the tokens.
- `scripts/_theme_all.py` — the bulk mapper used to retrofit the stock controls (idempotent; safe re-run after adding colours to its map).
