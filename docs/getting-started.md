# Getting started

The shortest path from an installed adapter to a screen showing a live ioBroker value. Everything here is a step; the reference material lives in the documents linked at the end.

## Before you start

You need a running ioBroker with:

- the **`web`** adapter (mywebui is a web extension — `webExtension.cjs` in `io-package.json` — so `web.0` serves it),
- an instance of **`mywebui`**,
- at least one state you can watch change. If you have nothing handy, create one under `0_userdata.0` in the Objects tab and set a number on it.

## 1. Open the designer

mywebui is served by the `web` adapter under `/mywebui/`. The adapter declares its runtime link in `io-package.json` as:

```
%web_protocol%://%ip%:%web_port%/mywebui/runtime.html
```

Substituting your `web.0` settings gives the two entry points — `index.html` is the designer, `runtime.html` is the runtime:

| | URL |
|---|---|
| Designer | `http://<host>:<web_port>/mywebui/index.html` |
| Runtime | `http://<host>:<web_port>/mywebui/runtime.html` |

`<web_port>` is whatever your `web.0` instance is configured to use — read it from the instance settings rather than assuming. The protocol is `https` if `web.0` has SSL enabled.

The easiest way to get the exact URL is the ioBroker admin Instances tab: the link button on the `mywebui.0` row resolves that `localLink` for you.

## 2. Create a screen

In the designer, add a screen from the screens tree and give it a name. Screens are stored one file per screen at `<project>/data/screens/<name>.screen` (`IobrokerHandler.getScreen()`, `www/dist/frontend/common/IobrokerHandler.js:369`).

**Name your first screen `start`.** The runtime falls back to the screen named `start` when no screen is requested in the URL (`www/runtime.html:125`), so this is the one you get by simply opening `runtime.html`.

## 3. Drop a control on it

Drag a control from the tree onto the canvas. For a first live value a gauge is the clearest choice — `gauges/linear-gauge`, which becomes the element `<webui-gauges-linear-gauge>`.

Anything with a settable property works: a plain `<div>` bound to its text content is the minimal version.

## 4. Bind it to a state

Select the element and, in the Properties panel, bind the property to your state ID. That produces a `bind-prop:` attribute in the screen HTML:

```html
<webui-gauges-linear-gauge
    bind-prop:value="0_userdata.0.test.level"
    title="Level" unit="%" min="0" max="100">
</webui-gauges-linear-gauge>
```

A bare state ID subscribes to the state and delivers `state.val`. The binding is reactive — no polling, no refresh.

For a plain element, the same idea with text content:

```html
<div bind-prop:textContent="0_userdata.0.test.level"></div>
```

Bindings can also target attributes, CSS, classes and animations, take prefixes like `state:` for the whole state object, and combine several signals with an expression (`__0`, `__1`, …). That is all in **[bindings.md](bindings.md)** — don't guess the syntax, it is precise.

Save the screen.

## 5. Open the runtime and watch it update

Open `http://<host>:<web_port>/mywebui/runtime.html`.

If you named the screen `start` it loads directly. Otherwise select it by **hash** parameter — note it is `#`, not `?`:

```
http://<host>:<web_port>/mywebui/runtime.html#screenName=myscreen
```

The runtime reads `screenName` from `location.hash` (`www/runtime.html:102` and `:121`, inside `checkHash()`). A `?screenName=` query string will *not* work; the one query parameter the runtime does read is `?project=`, for selecting the project (`IobrokerHandler.js:77`).

Now change the state in ioBroker — admin's Objects tab, a script, or your device. The gauge should move without a page reload. If it does not, that is a binding or connection problem, and the fastest check is the browser console plus the WebSocket connection, before anything else.

## Where to go next

| If you want to… | Read |
|---|---|
| Understand binding syntax fully | [bindings.md](bindings.md) |
| Lay out, size or animate a screen | [screens.md](screens.md) |
| Build your own control | [custom-controls.md](custom-controls.md) |
| Use gauges, PlantPAx symbols, pipes, alarm viewers | [scada-controls.md](scada-controls.md) |
| Loop over data, or show/hide conditionally | [template-directives.md](template-directives.md) |
| Theme the UI, or support light/dark | [theming.md](theming.md) |
| Control who may see or write what | [permissions.md](permissions.md) |
| Translate a control or screen | [translations.md](translations.md) · [translations-api.md](translations-api.md) |
| Pull in a component from npm | [npm-widgets.md](npm-widgets.md) |

A few things worth knowing early, each covered in the document above:

- **Write states through `IOB.secWriteState`, not `setState`**, for anything security-relevant — it is re-checked in the backend. See [permissions.md](permissions.md).
- **Template directives (`for:`, `if:`, `repeat:`) work in custom controls, not screens.** See [template-directives.md](template-directives.md).
- A control's element name includes its folder: `gauges/linear-gauge` becomes `<webui-gauges-linear-gauge>`. See [custom-controls.md](custom-controls.md).
