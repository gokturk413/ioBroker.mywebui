# Guide — a tour of a screen and an instruction on each element

A screen can lead a new user through itself: one element after the other is lit up and a popup
explains it (Next / Back / Skip). Afterwards every element with an instruction keeps a small ⓘ
icon (in help mode); a click on it opens the same instruction again.

## In the designer — the Guide window

Open **Guide** in the right-hand strip.

**An element selected → its instruction**

| Field | Meaning |
|---|---|
| Enabled | Off keeps the text but shows nothing |
| Tour step | 1, 2, … — its place in the tour; 0 = only through its ⓘ icon |
| ⓘ icon | *in help mode* (F1 / a help button), *always*, *when the pointer is over it*, *none* (tour only) |
| Popup | small 300 px, medium 360 px, large 480 px |
| Text | A title and a text **per language** (AZ EN RU DE TR; the dot is green when that language has a text). A language without a text shows English, else the first language that has one, marked as not translated. A title or text `t:my.key` is a translation key (Translations dock). |
| Live values | `{{0_userdata.0.flow}}` in the text shows the state's current value, `{{report.0.volume|1}}` with one decimal |
| Screen | A screen shown inside the popup — design it like any screen (for example in a folder `help`): its buttons, custom controls, bindings and scripts work there |

**Apply** writes the instruction to the element (`data-guide`, undoable); save the screen with Ctrl+S.

**Nothing selected → the screen's tour** (*Screen tour…* from an element)

| Field | Meaning |
|---|---|
| When | *first visit of each user*; *first visit, and again when the tour changes* (a step or a text changed); *only on request*; *when a state becomes true* (e.g. a training mode) |
| For groups | Only these ioBroker groups get the tour by itself (empty: everyone) |
| Spotlight | Dims the rest of the screen around the step |
| Don't show again | Offers the checkbox in the tour |
| Welcome step | A first step that is not on an element (per language) |
| Steps | The elements in tour order; ↑ ↓ renumber them; a click selects the element |

*Test in the viewer* opens the screen in the runtime. A browser remembers that its user has seen a
tour; `IOB.guide.reset()` in the browser console forgets it.

## Reports and 3D screens

- **Reports** work like screens: select an element of the report (instruction) or nothing (the report's tour).
- **3D screens and 3D controls**: select an object in the 3D editor — the Guide window edits its
  instruction; with nothing selected, the scene's tour. They are saved with the scene
  (`sceneData.guide`). In the viewer the ⓘ icon, the spotlight and the popup follow the object as
  the camera moves; an object behind the camera or hidden has no icon.
- **Popup content** can be a screen, a 3D screen or a 3D control (the list in the window).

## In the viewer

- The tour starts by itself as set above, after the screen is ready. Esc or ✕ ends it.
- **F1** turns help mode on and off: the ⓘ icons of the elements. After a finished tour help mode is on.
- On a phone (narrower than 640 px) the popup is a sheet at the bottom.
- Colours follow the runtime theme (`--ui-*`), the texts of the buttons the language (5 built-in languages; a project translation `guide.next` … wins).

## From a button or a script

Simple Script / Blockly: the command **Guide** with an action:

| Action | Does |
|---|---|
| `start` | Runs the tour (target: a screen name; empty: the screen shown) |
| `help`, `helpOn`, `helpOff` | Toggles / turns on / off help mode |
| `show` | Opens one instruction (target: the element's id) |
| `close` | Closes the popup |
| `reset` | Forgets that this browser saw the tour (target: a screen; empty: all) |

JavaScript: `IOB.guide.start()`, `IOB.guide.help(true)`, `IOB.guide.show('btnReport')`,
`IOB.guide.close()`, `IOB.guide.reset()`; `IOB.guide.helpMode` tells the state, and the window
event `guide-help-changed` (`detail.on`) follows it — for a help button that shows it is pressed.

## Where it is stored

| What | Where |
|---|---|
| An element's instruction | its attribute `data-guide` (JSON) in the screen |
| The tour settings | the screen's `settings.guide` |
| Seen / "don't show again" | the browser (`localStorage` `mywebui.guide`, per user, project and screen) |

## Files

| Part | File |
|---|---|
| Runtime: tour, icons, popup | `www/dist/frontend/common/Guide.js` |
| Designer window | `www/dist/frontend/config/GuideWindow.js` |
| The script command | `www/dist/frontend/common/ScriptApi.js` (`guide`) |
| Tests | `test/guide.mjs` |
