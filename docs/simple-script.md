# Simple Script

Simple Script is a list of commands that runs when an event fires — a click, a value
change, a screen opening. You build it from menus, without writing code. For logic with
blocks use Blockly, for anything else JavaScript; all three sit side by side on the same
event.

Azərbaycanca: [simple-script.az.md](simple-script.az.md)

## 1. Attach a script to an event

1. Select the element (or click the empty canvas for the screen itself).
2. Open the **Events** window. Each event has a small square in front of it:

   | Square | The event runs |
   |---|---|
   | green | a Simple Script |
   | yellow | a Blockly script |
   | purple | a JavaScript function of the screen script |
   | pink | nothing yet |

3. Click the event name → **Simple Script**. The editor opens.
4. Not in the list? Type the event name under *add event* (e.g. `dblclick`, `wheel`,
   `pointerdown`) and press Enter.

The row of an assigned event also has *relative signals path* (put in front of every
signal starting with `.`) and **p** (parameters handed to the script, read with the
*parameter* value source).

## 2. The editor

- **Add Command** — the command picker: every command, grouped, with a short description.
  Drag a command into the list, or double-click it.
- The list on the left runs **top to bottom**. Drag the handle to reorder, or drop a
  command in between.
- The grid on the right edits the selected command.
- **Code** shows the script as JSON (copy, paste, edit by hand); **Visual** goes back.
- **?** opens the help.

A command that is refused (no right, see §5) stops the script: the commands after it do
not run.

## 3. Values: fixed or taken from somewhere

Any field can hold a fixed value, or — through the **…** button in front of it, or the
right-click menu *edit complex value* — a value read when the command runs:

| Source | The value is |
|---|---|
| `signal` | the value of a state (`0_userdata.0.level`) |
| `property` | a property of the custom control the script belongs to (not in screens) |
| `elementProperty` | a property of the element that raised the event |
| `signalInProperty` | the value of the state whose name is stored in a property |
| `event` | a property of the event object (`detail.value`, `key`, `clientX`) |
| `parameter` | a parameter of the event row (**p**) |
| `context` | a value of the script's context |
| `complexString` | text with state values in braces: `Level {0_userdata.0.level} %` |
| `complexSignal` | a state whose name is built from other values: `pump{0_userdata.0.nr}.run` |
| `expression` | a JavaScript expression; `ctx` is the context object |

Signals starting with `.` are relative: the screen's or the event row's relative signals
path is put in front.

`signalTarget` (on the *signal* commands) chooses what is written: `signal` (a state, the
default), `property` (a property of the screen / control) or `elementProperty` (a property
of the element that raised the event).

## 4. The commands

### States

| Command | Does | Fields |
|---|---|---|
| Set signal value | writes a value | signal, value, target |
| Toggle signal value | true ↔ false | signal, target |
| Toggle signal value through list | the next value of a list (Off → Auto → On → Off) | signal, valueList, target |
| Increment signal value | adds a number | signal, value, target |
| Decrement signal value | subtracts a number | signal, value, target |
| Set bit in signal / Clear bit in signal / Toggle bit in signal | one bit of an integer (0 = lowest) | signal, bitNumber, target |
| Calculate signal value | writes the result of a formula: `{adapter.0.level} * 100 + 30` | formula, targetSignal, target |
| Subscribe signal / Unsubscribe signal | keeps a state subscribed (e.g. for an `oneTime` read) | signal, oneTime |
| Write signals in group / Clear signals in group | writes or discards the values held back in a group (edit several fields, then save them together) | group |
| Copy signal values from folder | copies all values of one folder into another (recipes) | sourceFolder, destinationFolder |
| Export signal values as JSON / Import signal values from JSON | saves the matching states into a file, or writes them back | regex, fileName, waitForUpdatedValues / data |

### Screens and windows

| Command | Does | Fields |
|---|---|---|
| Open screen | opens a screen — the list holds screens, **reports** and **3D screens** | screen, noHistory, relativeSignalsPath |
| Open dialog | opens a screen in a window | screen, title, width, height, left, top, moveable, closeable, cssClass, relativeSignalsPath |
| Close dialog | closes the window the element is in | — |
| Open screen in screen viewer | loads a screen into a screen viewer placed on the current screen | screen, targetSelector, relativeSignalsPath |
| Open 3D screen | opens a 3D screen | screen |
| Navigate back | the previous screen | — |
| Open URL | a web page, in a new tab or in a dialog | url, target, openInDialog |
| Show message box | a message with buttons; the number of the clicked button (from 1) goes to `resultSignal` | title, message, messageType, buttons, resultSignal, width, height |
| Show notice | a short notice in the corner (info, ok, warn, error) | title, text, kind |

In *Open screen* a report is stored as `report:name` and a 3D screen as `3dscreen:name`;
a plain name is a screen.

### Faceplates, reports, view

| Command | Does | Fields |
|---|---|---|
| Open faceplate / Close faceplate | the faceplate of a UDT instance (`P_AIn` and the root of its states) | type, root |
| Open report | opens a report in the report viewer | report |
| Generate report | generates html / pdf / csv and downloads it | report, format |
| Set theme | dark, light, purple, teal, contrast or a Global Style theme | theme |
| Switch language | the runtime language (`az`, `en`, `ru`, `de`, `tr`) | language |

### Animations and effects

| Command | Does | Fields |
|---|---|---|
| Control animation | play, pause, resume, stop, restart or reverse an element's animations (Animations window) | target, action, index |
| Animate | gives an element an animation and starts it (e.g. `rotateAxisY` for an agitator) | target, effect, from, to, duration, repeat, yoyo, ease |
| Control effects | plays an element's effects again, or stops them (Effects window) | target, action |

`target` is a CSS selector (`#agitator1`, `.pump`) in the screen of the element that
raised the event; empty = that element. `index` picks one animation of the element
(0 = first); empty = all. See [bindings.md §6–7](bindings.md#6-animations-panel-bindings)
for the animation and effect types.

### Elements

| Command | Does | Fields |
|---|---|---|
| Set element property | sets a property, an attribute, a css value or a class on elements | target (property / attribute / css / class), name, value, mode (class: add / remove / toggle), targetSelector, targetSelectorTarget (element / container), parentIndex |

`targetSelector` is a CSS selector, searched from the element (or from the container —
the screen or control around it, `parentIndex` levels up); empty = the element itself.

### Users

| Command | Does | Fields |
|---|---|---|
| Login | signs in a user | username, password |
| Logout | signs out | — |

### Flow

| Command | Does | Fields |
|---|---|---|
| Condition | compares value1 with value2 (`==`, `!=`, `<`, `<=`, `>`, `>=`, `&&`, `\|\|`, `==true`, `==false`, `==null`, `!=null`); jumps to a label for true / false — no label = go on with the next command | value1, comparisonType, value2, trueGotoLabel, falseGotoLabel |
| Label | a place to jump to | label |
| Goto | jumps to a label | label |
| Exit | ends the script | — |
| Delay | waits (milliseconds) | value |
| Run script | *not implemented yet* — does nothing (the same holds for the true/false script fields of Condition) | name, scriptType |
| Javascript | a piece of JavaScript; `context.event`, `context.element`, `context.shadowRoot`, `context.instance` are there | script |
| Console | writes to the browser console (log, info, warn, error, debug) | message, target |
| Comment | does nothing — a note in the list | comment |

## 5. What a script may do

A script may do only what its user may do by hand. Before each command runs:

1. **Security model** (Security window) — when the element has a `data-action` (Area
   window), the user's role must allow that action in the element's area.
2. **Screen Access** — *Open screen*, *Open dialog*, *Open screen in screen viewer*,
   *Open 3D screen* and the report commands ask the server whether the user may open it.
3. **ioBroker rights** — writes and reads of states go through the user group's rights
   and the state's own rights; **Confirm & Protect** still asks before a protected write
   ([confirm-protect.md](confirm-protect.md)).

A refused command does nothing, shows a notice in the user's language and **ends the
script**. Details: [script-functions.md](script-functions.md) ·
[permissions.md](permissions.md).

## 6. Examples

Start a pump, wait, open its screen:

```json
{ "commands": [
  { "type": "SetSignalValue", "signal": "0_userdata.0.pump1.start", "value": true },
  { "type": "Delay", "value": 500 },
  { "type": "OpenScreen", "screen": "pumps/pump1" }
] }
```

Ask first, act only on "Yes" (button 1):

```json
{ "commands": [
  { "type": "ShowMessageBox", "title": "Stop", "message": "Stop the line?", "buttons": "yesNo", "resultSignal": "0_userdata.0.ui.answer" },
  { "type": "Condition", "value1": { "source": "signal", "name": "0_userdata.0.ui.answer" }, "comparisonType": "==", "value2": 1, "falseGotoLabel": "end" },
  { "type": "SetSignalValue", "signal": "0_userdata.0.line.stop", "value": true },
  { "type": "Label", "label": "end" }
] }
```

Agitator: start turning when the motor runs, stop otherwise (on the motor state's change):

```json
{ "commands": [
  { "type": "Condition", "value1": { "source": "signal", "name": "0_userdata.0.mixer.run" }, "comparisonType": "==true", "falseGotoLabel": "off" },
  { "type": "Animate", "target": "#agitator1", "effect": "rotateAxisY", "duration": 1.5 },
  { "type": "Exit" },
  { "type": "Label", "label": "off" },
  { "type": "ControlAnimation", "target": "#agitator1", "action": "stop" }
] }
```

Open the daily report:

```json
{ "commands": [ { "type": "OpenScreen", "screen": "report:demo_daily" } ] }
```

## 7. Blockly and JavaScript

The same mywebui commands are Blockly blocks (category **mywebui**) and JavaScript
functions (`await IOB.api.openScreen({ screen: 'report:demo_daily' })`), checked the same
way — [script-functions.md](script-functions.md).
