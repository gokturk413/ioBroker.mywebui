# ioBroker.mywebui

![Number of Installations](https://iobroker.live/badges/mywebui-installed.svg) 
![Stable version](https://iobroker.live/badges/mywebui-stable.svg) 
[![NPM version](https://img.shields.io/npm/v/iobroker.mywebui.svg)](https://www.npmjs.com/package/iobroker.mywebui)
[![Downloads](https://img.shields.io/npm/dm/iobroker.mywebui.svg)](https://www.npmjs.com/package/iobroker.mywebui)

[![NPM](https://nodei.co/npm/iobroker.mywebui.png?downloads=true)](https://nodei.co/npm/iobroker.mywebui/)

**Custom edited mywebui adapter by gokturk413** - Enhanced version with additional features and optimizations.

> **⚠️ IMPORTANT: This adapter requires a valid license key to operate.**  
> This is a hardware-bound licensed version. Contact **gokturk413** for licensing information.

mywebui for ioBroker

![image](https://raw.githubusercontent.com/iobroker-community-adapters/ioBroker.mywebui/master/screenshot.png)

## Documentation

Authoring guides — building screens, binding live data, writing your own
controls — live in **[docs/README.md](docs/README.md)**. Start with
[Getting started](docs/getting-started.md), then
[Bindings](docs/bindings.md).

## Description

This is a complete visualization system for ioBroker.

It includes features like:

  - simple scripting language
  - binding to ioBroker objects including converters & javascript expressions
  - pasting of images from clipboard
  - drag&drop of external images
  - drag&drop of ioBroker objects to automaticy create bindings
  - drag&drop of ioBroker objects to Properties to create Bindings to them
  - relative signal paths to ioBroker objects in screens (the full path can be handed over from outside into the screen)
  - split view editing of layout and html code
  - global stylesheet support
  - usage of npm packages containing webcomponents
  - screens inside of screens
  - use all icon packages from ioBroker
  - use charts from ioBroker
  - use combined signals object id's  e.g. "mywebui.0.test3.{mywebui.0.test3.select}" -> this will use the value from mywebui.0.test3.select for the signal name

There is more information about specific topics in the [wiki](https://github.com/iobroker-community-adapters/ioBroker.mywebui/wiki) (the German section has a few more articles than the English one).

## Installation

### Quick Install

```bash
iobroker install gokturk413/iobroker.mywebui
```

### Dependencies

  - You need the Web Adapter installed. It works with the following settings: ![image](https://raw.githubusercontent.com/iobroker-community-adapters/ioBroker.mywebui/master/web.png)

### License Setup

This adapter requires a license key to operate. After installation:

1. **First Start** - The adapter will fail (this is normal). Check logs for your Hardware ID:
   ```bash
   iobroker logs mywebui --lines 50
   ```

2. **Configure License** - Open Admin Panel → Instances → mywebui → Settings
   - Enter the license key provided by gokturk413
   - Save and restart

3. **Auto-Registration** - Your hardware will be automatically registered on first successful start

For detailed setup instructions, see [LICENSE_SETUP_PUBLIC.md](./LICENSE_SETUP_PUBLIC.md)

**Note:** This is a hardware-bound license. The adapter will only work on registered hardware. Contact **gokturk413** for licensing.

**How the machine is recognised.** The Hardware ID comes from the SMBIOS system UUID and the OS machine id: Windows MachineGuid, `/etc/machine-id` on Linux. USB devices, monitors and network adapters do not change it.

The ID is read again at every licence check, so a VM cloned or moved while it runs is noticed. On Windows it is read straight from the firmware table and the registry, with no helper process. If one of the IDs cannot be read for a moment, its last value is used for up to 24 hours, and a passing hiccup never changes the identity.

If the SMBIOS UUID stays unreadable, the licence enters a grace period (`identity-unreadable`) while the key still lists this machine. Editing stays possible during grace; the licence becomes *restricted* only when grace runs out.

### 🔧 SCADA Utility Functions (Auto-Installed)

This adapter includes powerful SCADA utility functions for value formatting, unit conversions, and more.

**Automatic Installation:** SCADA functions are automatically installed when you install this adapter via npm or GitHub. No manual setup required!

The setup runs automatically during `npm install` (postinstall hook) and copies utility files to your ioBroker data directory.

**Manual Setup (if needed):**
```bash
npm run setup-scada
```

For detailed usage instructions, see [SCADA_SETUP.md](./SCADA_SETUP.md)

**Features:**
- Value formatting with decimals, limits, scaling
- Temperature, pressure, flow conversions  
- Linear scaling for analog signals (4-20mA, 0-10V)
- Alarm checking with color coding
- Statistical functions (average, moving average)
- Time formatting and deadband/hysteresis functions
- Global access in all Custom Controls and Formulas

---

## Custom Edition Features (gokturk413)

This custom edition extends the original mywebui with a SCADA‑oriented feature set. The
items below are the major additions over upstream.

### 🧩 Multi‑project support
- Several independent projects in one adapter, each fully self‑contained under
  `mywebui.0.projects/<name>/{data,widgets}` (screens, 3D screens, custom controls,
  global style/script, installed npm widgets).
- Project selector in the designer toolbar with **create / rename / delete / export /
  import** per project. The runtime opens a project via `runtime.html?project=<name>`
  (parameter‑less `runtime.html` always shows `default`, kiosk‑safe).

### 🟦 3D Editor (Three.js)
- A full 3D screen editor and 3D custom controls alongside the classic 2D designer:
  `3D Screens` and `3D Custom Controls` (nested under `Controls`).
- Scene editing with assets, lights, camera, grid, signal bindings and drives; rendered
  in the runtime via the embedded 3D viewer.

### 📦 Global (platform‑default) custom controls
- A library of project‑independent default controls (2D + a sample 3D control) that ship
  with the platform and are seeded on install into `mywebui.0.data/global/`.
- Editable, usable in every project's screens, browsable under the `Global` tree node
  (`CustomControls`, `3D Custom Controls`). Project controls with the same name take
  precedence over a global one.

### 🔐 Group‑based access control (Screen Accessibility)
Server‑enforced (the adapter resolves ioBroker group membership from the DB — the
frontend is not trusted), runtime‑gated visualization access:
- **Runtime (read):** *blacklist* model — ticking a group **blocks** it from a screen at
  runtime; unticked groups are allowed; nothing ticked = open to all. Per‑screen
  (overrides global) **and** a project‑wide global default. When blocked, the screen shows
  an **“Access Denied” message** or **redirects** to another screen (configurable).
- **Editor (write):** the designer is **administrator‑group only**; the built‑in `admin`
  user always has editor access and can additionally forbid specific administrator users
  from the editor. The built‑in `admin` user can be blocked at *runtime* but never from
  the editor.
- Two toolbar panels: **🔐 Permissions** (project‑level groups + editor‑user control) and
  **🗂️ Screen Access** (per‑screen). Both mirror the Settings‑tab **Screen Accessibility
  Control** and sync on save.
- ioBroker's own file/object ACLs are left at their defaults — access control is purely
  app‑level so it does not conflict with the platform's permission system.

### 🎨 Theming & branding
- Light/dark/other theme adaptation via `color-scheme` + `light-dark()` + `--ui-*`
  design tokens across the whole designer.
- Neon‑glassmorphic solution explorer, branded tab title (**MYWEBUI DESIGNER** /
  **MYWEBUI**) and custom favicon.

### 🔒 License protection & code obfuscation
- Hardware‑bound license validation (Ed25519‑signed, validated by the obfuscated backend;
  the frontend shows a license overlay if invalid).
- **Hybrid build model:** you develop with **readable source** (git, local); the published
  npm package ships **obfuscated** backend + own frontend (vendored libraries untouched).
  Obfuscation runs in the CI publish workflow on a disposable runner — your source is never
  obfuscated in place. License parts are obfuscated locally (their secret keys never enter
  CI). Source maps and readable license source are excluded from the npm package.

### 🔗 Bindings (signals, states, objects, properties)
Bindings connect an element's attribute/property/content to a data source. In the
designer click the **□ button** next to a property in the property grid to open the
binding editor. A binding is written into the HTML as a `bind-…` attribute.

**Binding targets** (what is bound on the element):
| Attribute | Effect |
|---|---|
| `bind-prop:<property>` | a DOM/web‑component property (e.g. `bind-prop:hidden`, `bind-prop:disabled`, `bind-prop:value`, `bind-prop:text-content`, `bind-prop:inner-html`) |
| `bind-attr:<attribute>` | an HTML attribute |
| `bind-content:text` / `bind-content:html` | the element's text / HTML content |
| `bind-css:<class>` | toggles a CSS class |
| `bind-cssvar:<--var>` | sets a CSS custom property |
| `bind-style:<prop>` | a single inline style property |

**Source forms** (where the value comes from — the right‑hand side of the binding):
| Form | Meaning |
|---|---|
| `myAdapter.0.device.STATE` | plain object id → the state **value** (`state.val`); two‑way for inputs |
| `state:myAdapter.0.device.STATE` | the **whole state** object → use `.val`, `.ack`, `.ts`, `.lc`, `.q` (e.g. show quality/timestamp) |
| `object:myAdapter.0.device.STATE` | the ioBroker **object** (`common`, `native`, …) e.g. unit/min/max/role |
| `??propertyName` | a **screen/control property** (instance property declared on the screen or custom control) |
| `.suffix` | **relative** id — prefixed at runtime with the host control's `relativeSignalsPath` (reusable controls) |
| `local_<name>` | a **local** (browser‑only) state, not persisted to ioBroker |

Special read‑only values `width` / `height` expose the element's live size. Conversions,
format strings and a JavaScript multiplex expression are available in the binding editor
for value transformation.

### 🧬 Dynamic properties
Any element on a screen — including installed **npm / Lit package widgets** — can get extra
per‑instance properties without changing the widget's code:
- Select an element → **`dynamic` tab** in the property grid → add/remove a property
  (name, type `string|number|boolean|color|enum|signal`, default, optional enum values).
- Stored on the element as the `dynamic-property-defs` attribute (a JSON array).
- At runtime real accessors are created (with `…-changed` events), so dynamic properties
  are fully **bindable** (two‑way) and usable from scripts just like native ones.
- Lit/package widgets may also expose webui‑specific editors by declaring a
  `static webuiProperties = { name: { type:'signal'|'color'|'screen'|'enum', values? } }`.

### Notable fixes
- **OAuth token‑refresh under a subpath:** the socket client refreshed the auth token via a
  relative `./oauth/token`, which resolved to `/mywebui/oauth/token` (404) when served under
  `/mywebui/` and forced periodic full‑page reloads. It now uses the absolute `/oauth/token`
  endpoint, so the runtime/designer no longer auto‑refresh on token expiry.

## Concepts

### Description

The Designer uses Web Components, so the HTML you design is inside of a Shadowroot of a Webcomponent. This means, you cannot style <body> or <html> inside of the Stylesheet. To style the outer Layout, use the ":host" selector.
This also means, you cannot use "on..." eventhandlers. Use the "@..." event assignment.

### Custom Controls in mywebui

You can create your own reusable CustomControls in mywebui, each of which can have its own Javascript, Properties and a template.

You can use Double-Bracket Syntax and Double-Curly-Bracket Syntax of the "BaseCustomWebcomponent" to create bindings from the Template to the properties defined in the Designer. Curylbrackets create two way Bindings.
If you use the Bindings Dialog, you can Bind to a Property with ??Propertyname and to IoBroker Object in the Property via ?Propertyname.
In Scripts you can also write to Signals defined in Custom Properties.

You can include Javascript in your CustomControl or Screen.
In addition, you can export a function `init(instance)` wich will be called when your CustomControl will be instantiated.
Finally, `connected()` and `disconnected()` functions can be defined to be called when ...

## Sponsoring

If you want to help the development, sponsor this project at https://github.com/sponsors/jogibear9988

## Developing
  * Install Repository as Adapter in IOBroker
  * Download the Repository to an extra "dev" directory, do not develop inside the ioBroker Node_modules directory.
  * Do the following steps inside of the "dev" dirctory.

  * Install dependencies 
```
  $ npm install
```

  * Compile Typescript after doing changes (or press Ctrl + Shift + B in VsCode and select "tsc watch")
```
  $ npm run tsc
```

  * Adjust 'config.js' to match you ip-adress and port for your iobroker
   (The config.js in the repository root will be replaced with the one in '/config' when running 'npm build')
```
    window.iobrokerHost = '192.168.1.2';
    window.iobrokerPort = '8082';
    window.iobrokerSocketScriptUrl = 'http://' + window.iobrokerHost + ':' + window.iobrokerPort + '/lib/js/socket.io.js';
```

  * Run the app in a local server
```
  $ npm start
```

  * Navigate Chrome to [localhost:8000]() to see the app.

### More about Development

  - Run 
```
  $ npm run reflection
``` 
   to recreate reflection files for Scripting wich are used for the property grid

  - Run 
```
  $ npm run build
``` 
   to copy compiled files and node_modules to www folder so adapter is installable via github

  - Run 
```
  $ npm run release
  $ npm publish
``` 
   to create correct release commit for iobroker, Be carefull this also pushes to git repo.
   Be sure to edit "CHANGELOG.md" before, the text in "## **WORK IN PROGRESS**" in README.Md will be used for version info

## Info about the Adapter.

The Adapter is based on the following Designer component:
https://github.com/node-projects/web-component-designer

You need to create a screen "start", this is the first one called when you open runtime.html, 
but you can change this via query parameter:
runtime.html?screenName=screen2

## Changelog
<!--
	Placeholder for next versions:
	### __WORK IN PROGRESS__
-->
### 1.43.0 (2026-06-25)
* (gokturk413) fix: screen access control now syncs in **real time** across all surfaces — unchecking a group in the global Permissions dialog instantly clears "Access Denied" on open runtime windows (`uiRefresh` broadcast)
* (gokturk413) fix: backend honours `visibilityEnabled` / `accessibility.enabled` — a disabled restriction with a stale group list no longer keeps blocking
* (gokturk413) fix: the Settings‑tab "Screen Accessibility Control" and the Projects "Screen Access" dialog are now mirrored (single source of truth)
* (gokturk413) perf: 3D galleries no longer render whole folders live — 3D **screens** never preview, 3D **custom controls** preview one‑at‑a‑time on click (large memory saving); 2D controls/widgets unchanged
* (gokturk413) docs: README — bindings (signals/state/object/properties), dynamic properties, current changelog

### 1.42.99 (2026-06-24)
* (gokturk413) feat: group‑based access control (runtime + editor), hybrid readable‑source / obfuscated‑artifact build & packaging pipeline, branding
* (gokturk413) feat: global (platform‑default) custom controls — shipped under **Global > CustomControls / 3D Custom Controls**, pre‑seeded on install, editable, usable in every project

### 1.42.90 (2026-06)
* (gokturk413) feat: self‑contained multi‑project layout — each project under `mywebui.0.projects/<name>/{data,widgets}` with export/import

### 1.42.45 (2026-06)
* (gokturk413) design: neon glassmorphic theme for the solution explorer

### 1.42.44 (2026-06)
* (gokturk413) feat: multi‑project support — project selector with create/delete; runtime preview passes `?project=`, plain `runtime.html` always shows default (kiosk safe)

### 1.42.42 (2026-06)
* (gokturk413) feat: `dynamic` property tab for every element (works with npm manifest widgets too) — per‑instance dynamic properties with two‑way binding

### 1.40.0 (2026-06)
* (gokturk413) feat: 3D Editor (Three.js) — 3D screens & 3D custom controls, signal bindings, asset manager, layout planner

<!-- older custom‑edition versions: see the full per‑version "news" list in io‑package.json -->

### 1.37.0 (2025-10-15)
- fix bug in bundled code
- use minified code for config

### 1.36.0 (2025-10-15)
- fix some boxQuads edge cases

### 1.35.4 (2025-09-23)
- clear cache on reload

### 1.35.3 (2025-09-23)
- object changed to all clients

### 1.35.2 (2025-09-23)
- forgett to parse bindings

### 1.35.1 (2025-09-23)
- fix reload custom controls

### 1.35.0 (2025-09-23)
- better nameing
- changed object notification

### 1.34.2 (2025-09-21)
- anaother small fix in signal handling

### 1.34.1 (2025-09-20)
- script command wrong name fix

### 1.34.0 (2025-09-20)
- designer and script updates

### 1.33.0 (2025-08-26)
- fix NaN check

### 1.32.0 (2025-08-20)
- Support css prop suggestions

### 1.31.6 (2025-08-19)
- Test one more release

### 1.31.5 (2025-08-19)
- Fix setting Props with simple scripts

### 1.31.4 (2025-08-19)
- SimpleScripts should be able to set Properties

### 1.31.3 (2025-08-19)
- NaN not NaN

### 1.31.2 (2025-08-18)
- update npms

### 1.31.1 (2025-08-17)
- remove nod 18 from github actions

### 1.31.0 (2025-08-17)
- update packages
- script support for properties

### 1.30.0 (2025-05-25)
- starting indirect binding fix

### 1.29.0 (2025-05-25)
- complexer indirect bindings

### 1.28.0 (2025-05-03)
- update packages

### 1.27.1 (2025-03-30)
- fix xml import

### 1.27.0 (2025-03-30)
- edit string in visu property grid
- bindings to properties did not work (in designer)
- html setting did not work sometimes

### 1.26.0 (2025-03-04)
- fix error in screenviewer
- update npms
- rename global styles
- allow styling of dialog

### 1.25.2 (2025-02-05)
- fix null error on props

### 1.25.1 (2025-01-24)
- escape xml
- switch to official selector package

### 1.25.0 (2025-01-21)
- fix bindings in custom controls

### 1.24.4 (2025-01-20)
- switch again to old module shims (error in new one)

### 1.24.3 (2025-01-20)
- first load of css bindings
- fix get box quads with slots
- fix es module shims

### 1.24.2 (2025-01-19)
- revert back es module shims, leads to errors

### 1.24.1 (2025-01-19)
- hopefully fix package upload by changed name

### 1.24.0 (2025-01-19)
- cleanup www dir

### 1.23.2 (2025-01-19)
- one more fix in gulpfile

### 1.23.1 (2025-01-19)
- fix gulp should work again

### 1.23.0 (2025-01-19)
- fix paste in events assignment
- iobroker Signal Selector
- binding to width and height in custom controls

### 1.22.0 (2025-01-15)
- local signals browser
- style completition fixes
- special bindings for "ring" cameras

### 1.21.0 (2024-12-28)
- fix scripts with empty names on css
- css props with only bindings are not shown
- remove of css prop should remove binding?
- Open Screen in sub screen command

### 1.20.1 (2024-12-03)
- fix in designer with svgs

### 1.20.0 (2024-12-03)
- add a few packages
- run simple script cmd and update get parent screen
- update packages, downgrade monaco
- fix backup

### 1.19.4 (2024-11-03)
- copy & paste events

### 1.19.3 (2024-11-03)
- support null value

### 1.19.2 (2024-11-03)
- use name in classlist

### 1.19.1 (2024-11-02)
- copy path for screens/controls

### 1.19.0 (2024-11-02)
- fix error in script system

### 1.18.5 (2024-11-02)
- compile fix

### 1.18.4 (2024-11-02)
- fix wrong shadow root used

### 1.18.3 (2024-11-01)
- small typo fix

### 1.18.2 (2024-11-01)
- better refcatoring

### 1.18.1 (2024-11-01)
- fix screen settings

### 1.18.0 (2024-11-01)
- screens are now ex- & imported as xml

### 1.17.3 (2024-11-01)
- fix compilation

### 1.17.2 (2024-11-01)
- switch combo in complex prop editor

### 1.17.1 (2024-11-01)
- selector for properties

### 1.17.0 (2024-11-01)
- internal control properties
- internal screen properties

### 1.16.3 (2024-10-31)
- raise errors on unimplemented commands
- wrong script upgrade

### 1.16.2 (2024-10-31)
- wrong default in script

### 1.16.1 (2024-10-31)
- fix base custom webcomp bindings

### 1.16.0 (2024-10-30)
- fix errors with script system, wrong parent used

### 1.15.1 (2024-10-08)
- fix typo in screenviewer

### 1.15.0 (2024-10-08)
- fixes in margin & padding
- work on simpleScripts, add conditions
- fix _getDomElements in screen viewer

### 1.14.0 (2024-09-18)
- update npm packages

### 1.13.2 (2024-08-21)
- designer updates
- add find methods

### 1.13.1 (2024-08-18)
- small designer tweaks

### 1.13.0 (2024-08-18)
- update designer

### 1.12.4 (2024-07-25)
- one more designer update

### 1.12.3 (2024-07-25)
- update designer

### 1.12.2 (2024-07-24)
- fix offset finding in box drawing

### 1.12.1 (2024-07-24)
- update edit text in designer

### 1.12.0 (2024-07-24)
- update designer

### 1.11.3 (2024-06-02)
- fix load subfolders

### 1.11.2 (2024-06-01)
- screens grid view

### 1.11.1 (2024-05-31)
- fix icons view path

### 1.11.0 (2024-05-31)
- add a icons view

### 1.10.9 (2024-05-30)
- show undo count

### 1.10.8 (2024-05-30)
- better tooltip for multiplex
- remove unused solution entries

### 1.10.7 (2024-05-29)
- fix iframe d&d

### 1.10.6 (2024-05-29)
- better evt editor for new events

### 1.10.5 (2024-05-29)
- show events on mywebui controls

### 1.10.4 (2024-05-29)
- work on events

### 1.10.3 (2024-05-29)
- add events service for manifest

### 1.10.2 (2024-05-28)
- fix getDomelement

### 1.10.1 (2024-05-28)
- support classlist in setElementProperty

### 1.10.0 (2024-05-28)
- fix screen & parent screen access

### 1.9.10 (2024-05-28)
- fixes for blockly

### 1.9.9 (2024-05-28)
- fix firefox

### 1.9.8 (2024-05-27)
- try faster loading

### 1.9.7 (2024-05-27)
- fix change root style

### 1.9.6 (2024-05-27)
- fix null ref

### 1.9.5 (2024-05-27)
- few small changes

### 1.9.4 (2024-05-27)
- fix scripts not workin

### 1.9.3 (2024-05-27)
- update packages

### 1.9.2 (2024-05-27)
- fix screenviewer styles

### 1.9.1 (2024-05-27)
- fix first div styled from designer when zoom

### 1.9.0 (2024-05-27)
- fix zooming of child screens

### 1.8.9 (2024-05-26)
- one more spec. calculation fix

### 1.8.8 (2024-05-26)
- need to await stylesheet parse

### 1.8.7 (2024-05-26)
- fix specificity calculation

### 1.8.6 (2024-05-21)
- fix in designer property grid

### 1.8.5 (2024-05-21)
- stretch property for screenviewer
- screennames in property list (property services now async)

### 1.8.4 (2024-05-20)
- fix typo in bindingshelper

### 1.8.3 (2024-05-20)
- fix style parsing and style bindings at runtime

### 1.8.2 (2024-05-19)
- fix in manifest parser of designer

### 1.8.1 (2024-05-19)
- fix manifest parsing

### 1.8.0 (2024-05-19)
- bindings inside of css

### 1.7.8 (2024-05-19)
- fix remove of ctx menu

### 1.7.7 (2024-05-17)
- fix stylesheet matching

### 1.7.6 (2024-05-17)
- fix edit text in transformed surface

### 1.7.5 (2024-05-17)
- more fixes with transformed elements

### 1.7.4 (2024-05-16)
- designer transformation fixes

### 1.7.3 (2024-05-15)
- fix transform combinations in designer
- fix treeview jump to

### 1.7.2 (2024-05-15)
- few more small designer fixes

### 1.7.1 (2024-05-15)
- fix in designer

### 1.7.0 (2024-05-15)
- Add screen contextmenu
- support editing of repeat in grid colum/row templates
- designer updates
- force styles

### 1.6.5 (2024-05-07)
- designer update

### 1.6.4 (2024-05-05)
- expand/collapse of child nodes in tree
- undock all windows

### 1.6.3 (2024-05-05)
- jump to all css declarations

### 1.6.2 (2024-05-04)
- jump to styles

### 1.6.1 (2024-05-02)
- better icons

### 1.6.0 (2024-05-02)
- remove metro ui

### 1.5.4 (2024-05-02)
- fix delay command

### 1.5.3 (2024-05-02)
- fixes after package updates

### 1.5.2 (2024-05-02)
- removed missing prop

### 1.5.1 (2024-05-02)
- add delay in blockly & npm updates

### 1.5.0 (2024-04-28)
- nicer two way bindings

### 1.4.9 (2024-04-24)
- fix toastify

### 1.4.8 (2024-04-20)
- fix for controller v6

### 1.4.7 (2024-04-20)
- compact mode on controler 6 support

### 1.4.6 (2024-04-10)
- fix encoding for all files

### 1.4.5 (2024-04-10)
- fix gulp5 copy breaks fonts

### 1.4.4 (2024-04-10)
- fix compile error

### 1.4.3 (2024-04-10)
- fix copy of font

### 1.4.2 (2024-04-09)
- stretch support in screens

### 1.4.1 (2024-04-09)
- support relative signal paths in scripts

### 1.4.0 (2024-04-08)
- parameter support for scripts

### 1.3.2 (2024-04-02)
- designer upd

### 1.3.1 (2024-04-01)
- designer updates for toolbars

### 1.3.0 (2024-04-01)
- designer update

### 1.2.13 (2024-03-28)
- disabled control fix

### 1.2.12 (2024-03-28)
- add dayjs for date formating

### 1.2.11 (2024-03-28)
- add a indirection level in complex signal binding

### 1.2.10 (2024-03-28)
- package upgrades

### 1.2.9 (2024-03-26)
- try fix runtime once more

### 1.2.8 (2024-03-26)
- runtime should not load designer

### 1.2.7 (2024-03-26)
- fix used wrong script system

### 1.2.6 (2024-03-25)
- one more small runtime fix

### 1.2.5 (2024-03-25)
- fix runtime once more

### 1.2.4 (2024-03-25)
- fix runtime

### 1.2.3 (2024-03-24)
- designer upgrade for new features

### 1.2.2 (2024-03-11)
- fix broken signals selector in scripts

### 1.2.1 (2024-03-11)
- build broken after refactoring

### 1.2.0 (2024-03-11)
- extracted some code for usability
- better text edit
- better split view (selection matches now)
- round pixel values

### 1.1.4 (2024-03-02)
- designer-update: mathML support, svg foreignObject support
- better text edit support

### 1.1.3 (2024-02-29)
- text edit now workin
- package updates

### 1.1.2 (2024-02-27)
- fix broken designer package

### 1.1.1 (2024-02-27)
- designer and docking fixes

### 1.1.0 (2024-02-26)
- support undock to new browser window
- preview fixes for position: static in styles

### 1.0.56 (2024-02-26)
- screenviewer - add also nodes from domparser head

### 1.0.55 (2024-02-22)
- more designer fixes

### 1.0.54 (2024-02-22)
- multiple designer fixes

### 1.0.53 (2024-02-19)
- fix lazy bound lit event name

### 1.0.52 (2024-02-19)
- fix captured local

### 1.0.51 (2024-02-19)
- fix lazy loaded lit elments
- fix script url

### 1.0.50 (2024-02-18)
- again fix in class binding

### 1.0.49 (2024-02-18)
- class is attribute in bindings
- fix error logging

### 1.0.48 (2024-02-17)
- fix wunderbaum error

### 1.0.47 (2024-02-15)
- designer fixes with property grid

### 1.0.46 (2024-02-15)
- designer updates

### 1.0.45 (2024-02-12)
- update designer with bugfixes

### 1.0.44 (2024-02-11)
- fix bindings in designer

### 1.0.43 (2024-02-11)
- refresh tree when controls deleted

### 1.0.42 (2024-02-11)
- fix grid resize
- fix grid extension display

### 1.0.41 (2024-02-10)
- better element drawing (with undo)
- better title extension

### 1.0.40 (2024-02-10)
- dblclick in solution should not change tool
- designer update for performance fixes

### 1.0.39 (2024-02-09)
- upgrade designer package once more to fix some issues

### 1.0.38 (2024-02-09)
- fix blockly
- add blockly templated string
- work on adopted styles
- update designer to fix snaplines

### 1.0.37 (2024-01-31)
- designer fix for background

### 1.0.36 (2024-01-31)
- upgade to new designer for better style encapsulation

### 1.0.35 (2024-01-30)
- package upgrades (fix in designer for css patching)
- typos

### 1.0.34 (2024-01-28)
- indirect signal for $ access

### 1.0.33 (2024-01-24)
- one more designer update

### 1.0.32 (2024-01-24)
- fix for nested stylesheets

### 1.0.31 (2024-01-23)
- string could be null

### 1.0.30 (2024-01-22)
- better script errors

### 1.0.29 (2024-01-22)
- remove a few errors

### 1.0.28 (2024-01-22)
- npm upgrade for error of undoservice

### 1.0.27 (2024-01-22)
- toast message on errors

### 1.0.26 (2024-01-22)
- npm package upgrades

### 1.0.25 (2024-01-21)
- use appendChild

### 1.0.24 (2024-01-21)
- fix later loaded scripts

### 1.0.23 (2024-01-21)
- twoway should only set first value
- fix error with noParse

### 1.0.22 (2024-01-20)
- fix binding with unit
- fix refactor service missing command

### 1.0.21 (2024-01-19)
- fix designer grid overlay
- stecil ackage hacks

### 1.0.20 (2024-01-18)
- fix broken split view

### 1.0.19 (2024-01-17)
- simpler one way bindings with expressions

### 1.0.18 (2024-01-17)
- text selection selects in designer

### 1.0.17 (2024-01-16)
- fix opacity of D&D node

### 1.0.16 (2024-01-16)
- fix drag drop of tree nodes

### 1.0.15 (2024-01-14)
- support upper/lowercase and spaces in screens & controls

### 1.0.13 (2024-01-14)
- correct event name in lit bindings

### 1.0.12 (2024-01-14)
- upgrade baseCustomWebcomp for attribute binding

### 1.0.11 (2024-01-14)
- API for reading object lists

### 1.0.10 (2024-01-14)
- fix selected tool

### 1.0.9 (2024-01-14)
- bugfix controls editor

### 1.0.8 (2024-01-14)
- fix import/export

### 1.0.7 (2024-01-14)
- bigger formula editor when multiline

### 1.0.6 (2024-01-14)
- draw widgets when selected in tree

### 1.0.5 (2024-01-14)
- bind to iobroker objects (via $ prefix)

### 1.0.4 (2024-01-14)
- fix open screens in folders

### 1.0.3 (2024-01-14)
- only lowercase folders

### 1.0.2 (2024-01-14)
- variablen in convertern
- configurable meta tags

### 1.0.1 (2024-01-13)
- fix issue with npm

### 1.0.0 (2024-01-13)
- new script command: CalculateSignalValue
- javascript code completition
- better types in code completition
- fix writing of child nodes if content is bound at design time
- use monaco editor in expressions
- use custom var names in expressions
- Screens & Controls can have subfolders
- decl. shadow dom support in screen viewer
- allow 'local_' as tag prefix for local vars

### 0.23.3 (2024-01-04)
- add local valueAsNumber property

### 0.23.2 (2024-01-03)
- again fix runtime was not initialized

### 0.23.1 (2024-01-03)
- fix runtime was not initialized

### 0.23.0 (2024-01-03)
- todo, support 2way bindings too custom properties
- code completition for iobrokerHandler and runtime
- simple scripts, access value of event

### 0.22.7 (2023-12-25)
- and one more...

### 0.22.6 (2023-12-25)
- and one more fix on importmaps

### 0.22.5 (2023-12-25)
- more fixes with import map

### 0.22.4 (2023-12-25)
- work on export directive

### 0.22.3 (2023-12-25)
- fix missing .js extensions

### 0.22.2 (2023-12-25)
- fix scripts

### 0.22.1 (2023-12-25)
- add open screen in blockly

### 0.22.0 (2023-12-25)
- work on esbuild (but not yet ready, delayed till blockly is ESM)
- bugfixes with scripts
- remove typescript, use javascript directly
- typed value on SetValue function

### 0.21.3 (2023-12-20)
- fix set style

### 0.21.2 (2023-12-20)
- more commands in blockly

### 0.21.1 (2023-12-19)
- fixed paths

### 0.21.0 (2023-12-19)
- start of blockly support

### 0.20.7 (2023-12-15)
- fix importmap creation missed "/"

### 0.20.6 (2023-12-12)
- few wunderbaum fixes

### 0.20.5 (2023-12-11)
- better custom properties view

### 0.20.4 (2023-12-11)
- fix in css prop binding

### 0.20.3 (2023-12-11)
- update designer npm

### 0.20.2 (2023-12-11)
- fix for class binding

### 0.20.1 (2023-12-11)
- binding for classes

### 0.20.0 (2023-12-11)
- allow bindings to css vars

### 0.19.3 (2023-12-10)
- switch loglevel

### 0.19.2 (2023-12-10)
- package updates

### 0.19.1 (2023-12-07)
- fix load error

### 0.19.0 (2023-12-07)
- waitForReady needs to be awaited

### 0.18.15 (2023-12-06)
- fix missing null check

### 0.18.14 (2023-12-06)
- fix normal binding unsubscribe

### 0.18.13 (2023-12-06)
- fix historic binding unsubscribe

### 0.18.12 (2023-12-06)
- remove bindings in customcontrols

### 0.18.11 (2023-12-06)
- fix broken load historic

### 0.18.10 (2023-12-06)
- load historic only when previous load is finished

### 0.18.9 (2023-12-05)
- fix tooltips

### 0.18.8 (2023-12-05)
- lazy remove the title

### 0.18.7 (2023-12-05)
- better fix for monaco

### 0.18.6 (2023-12-05)
- fix for monaco bug
- title removed

### 0.18.5 (2023-12-05)
- code completition for base custom webcomponent
- object property type

### 0.18.4 (2023-12-03)
- better text for historic bindings cancel

### 0.18.3 (2023-12-03)
- fix reload in dynamics editor

### 0.18.2 (2023-12-03)
- ui for historic binding
- fixes in refactor view

### 0.18.1 (2023-12-03)
- fixes in refactor service

### 0.18.0 (2023-12-01)
- tooltip in solution explorer
- npm upgrade of designer
- refactor view for bindings and scripts

### 0.17.0 (2023-11-29)
- remove 2 uneeded files
- designer update

### 0.16.6 (2023-11-28)
- check for invalid propertynames
- move properties

### 0.16.5 (2023-11-27)
- copy screen and custom controls

### 0.16.4 (2023-11-27)
- fix usage of mywebui in windows

### 0.16.3 (2023-11-24)
- extra style for font declarations, they are not allowed in shadow dom

### 0.16.2 (2023-11-23)
- fix remove script command

### 0.16.1 (2023-11-23)
- additional file dnd

### 0.16.0 (2023-11-23)
- add additional files node and upload

### 0.15.1 (2023-11-22)
- export as xml (screens & controls)
- binding historic with reload
- fix dialog

### 0.15.0 (2023-11-19)
- uncloseable dialog 
- css properties for dialog
- binding to historic data

### 0.14.1 (2023-11-12)
- dialog centered

### 0.14.0 (2023-11-12)
- add simple dialog

### 0.13.1 (2023-11-11)
- two way bindings with expressions

### 0.13.0 (2023-11-09)
- fix upercase screen names in runtime
- raster in designer is now adjustable
- copy object nodes now copies complete string
- context menu to directly edit custom element
- fix handler path in script
- uiChangedView now workin
- error when importing invalid file (for example html instead of json)

### 0.12.3 (2023-09-20)
- after eval removal, functions need a return

### 0.12.2 (2023-09-20)
- events names for 2way bindings need a editor

### 0.12.1 (2023-09-20)
- two way for indirect bindings

### 0.12.0 (2023-09-20)
- support indirect bindings via {...} in signals (like in vis)

### 0.11.2 (2023-09-17)
- check npm package name

### 0.11.1 (2023-09-16)
- fix build on windows

### 0.11.0 (2023-09-11)
- dragdrop fixes
- screen/control size fixes
- connected/disconnected callbacks

### 0.10.0 (2023-09-10)
- new script commands
- bugfix with bindings and empty events
- select exported function in javascript
- bugfix in save of screens
- typescript in scripts
- started work on translateable runtime

### 0.9.0 (2023-09-06)
- signal selector in properties
- screen selector in properties
- new screen had style in scripts
- indirect value/property acces from scripts via editor
- list multiple undo entries (on hold of undo)

### 0.8.0 (2023-09-03)
- update designer to add and fix some commands
- move screen/control scripts out of html code
- add a javascript editor view
- bugfix when states where null after a fresh install
- designer addons do now work again
- docking framework updated, cause of bugs with undocking

### 0.7.0 (2023-09-01)
- screens and controls have now settings (width, height, useGlobalStyle)

### 0.6.0 (2023-09-01)
- removed many uneeded files from installation

### 0.5.1 (2023-09-01)
- show version in ui

### 0.5.0 (2023-09-01)
- signal as property type
- removed svg-image control
- shorter custom control tag name
- better dynamics editor
- dock ui fixes
- control ui from backend (switch view, reload)

### 0.4.0 (2023-08-30)
- remove uneeded files from upload
- remove icons into extra iobroker packages
- support icon adapters
- rename screens & controls

### 0.3.0 (2023-08-29)
- default value for custom properties
- open screens only once
- property bindings default one way

### 0.2.3 (2023-08-28)
- rework how custom controls are initalized

### 0.2.2 (2023-08-28)
- better support & fixes of custom elements
- enum properties in custom controls
- sample custom controls

### 0.2.1 (2023-08-28)
- null ref fix in bindings

### 0.2.0 (2023-08-28)
- Import/Export of Screens/Images/Controls
- Define your own Controls directly in mywebui
- Drag/Drop of Icons/Images to Properties
- Drag/Drop of objects to Bindings-Editor Signalname
- Basic functionality of CustomControls

### 0.1.0 (2023-08-27)
-   initial public release

## Credits

**Original Author:** jogibear9988 (Jochen Kühner)  
**Custom Edition:** gokturk413

This is a custom edited and enhanced version of the original ioBroker.mywebui adapter with additional features and hardware-bound licensing.

### Original Repository
https://github.com/iobroker-community-adapters/ioBroker.mywebui

---

## License

Creative Commons Attribution-NonCommercial 4.0 International (CC-BY-NC-4.0)

**Original Work:**  
Copyright (c) 2025 jogibear9988 <jochen.kuehner@gmx.de>

**Modified Work:**  
Copyright (c) 2026 gokturk413

See the [LICENSE](./LICENSE) file for the full legal text.

**Note:** This custom edition includes proprietary license validation and hardware binding features.
