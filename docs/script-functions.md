# Script functions

mywebui's features are offered to scripts as **functions**. One list feeds three places:

- **Simple Script** — *Add Command* lists them next to the built-in commands;
- **Blockly** — the **mywebui** category has one block per function;
- **JavaScript** — `await IOB.api.<name>({ … })`, or `await IOB.api.run('<name>', { … })`.

Azərbaycanca: [script-functions.az.md](script-functions.az.md)

## Every call is checked first

A script may do only what its user may do by hand. Before a function or a Simple Script command runs:

1. **Security model** (Security dock) — when the element that raised the event has a `data-action` (Area dock), `secCan(action, element)` must allow it for the user's role and the element's area.
2. **Screen Access** — *Open screen*, *Open dialog*, *Open screen in viewer* and the report functions ask the server whether the user may open that screen or report.
3. **ioBroker rights** — reading and writing states go through `IOB.getState` / `IOB.setState`: the user group's rights and the data point's access rights; Confirm & Protect still asks before a write.

A refused step **does nothing**, shows a notice in the user's language (az, en, ru, de, tr) and **ends the script**. A JavaScript call returns `{ denied: true, reason }`.

The browser check guides the user; the walls stay on the server: ioBroker's session rights for states, `checkScreenAccess` for screens and reports, `secWriteState` for protected writes ([permissions.md](permissions.md)).

## The functions

| Function | Simple Script command | Blockly | What it does | Checked |
|---|---|---|---|---|
| `setState({ id, value })` | *Set signal value* (built-in) | set state | writes a state | ioBroker rights, Confirm & Protect |
| `getState({ id })` | — | get state (value) | reads a state's value | read right |
| `toggleState({ id })` | *Toggle signal value* (built-in) | toggle state | inverts a boolean state | read + write right |
| `openScreen({ screen, noHistory?, relativeSignalsPath? })` | *Open screen* (built-in) | open screen | opens a screen — or a report (`report:name`) or a 3D screen (`3dscreen:name`) | Screen Access |
| `open3DScreen({ screen })` | Open 3D screen | open 3D screen | opens a 3D screen | Screen Access (3D screen) |
| `openDialog({ screen, title?, width?, height? })` | *Open dialog* (built-in) | open dialog | opens a screen in a dialog | Screen Access |
| `navigateBack()` | Navigate back | navigate back | the previous screen | — |
| `openFaceplate({ type, root })` | Open faceplate | open faceplate | opens the faceplate of a UDT instance (`P_AIn`, root of its states) | its states' read rights |
| `closeFaceplate()` | Close faceplate | close faceplate | closes it | — |
| `openReport({ report })` | Open report | open report | opens a report in the report viewer | Screen Access (report) |
| `generateReport({ report, format })` | Generate report | generate report | generates html / pdf / csv and downloads it | Screen Access (report), the server's report rules |
| `setTheme({ theme })` | Set theme | set theme | dark, light, purple, teal, contrast or a Global Style theme | — |
| `showNotice({ title, text?, kind? })` | Show notice | show notice | a notice in the corner (info, ok, warn, error) | — |
| `controlAnimation({ target?, action, index? })` | Control animation | control animation | play, pause, resume, stop, restart or reverse an element's animations (Animations dock) | — |
| `animate({ target?, effect, from?, to?, duration?, repeat?, yoyo?, ease? })` | Animate | animate | gives an element an animation and starts it — e.g. `rotateAxisY` for an agitator | — |
| `controlEffects({ target?, action })` | Control effects | control effects | plays an element's effects again, or stops them (Effects dock) | — |
| `can({ action })` | — | can (value) | may the user do this action here? (a question, not checked itself) | — |

In Simple Script, *Open screen* lists screens, reports and 3D screens in one list; *Open dialog* lists screens; *Open report* / *Generate report* list reports; *Open 3D screen* lists 3D screens. In Blockly these inputs come with the same list as a dropdown, which any text block can replace.

`target` is a CSS selector (e.g. `#agitator1`), looked up in the screen of the element that raised the event; empty means that element itself.

Every function also passes the security model check of step 1.

## Examples

JavaScript in a screen script:

```js
export async function openDetails(event) {
    const r = await IOB.api.openScreen({ screen: 'pumps/detail' });
    if (r?.denied) console.log('not allowed:', r.reason);
}
```

Only when the role may do it:

```js
if (await IOB.api.can({ action: 'setpointOverride' }))
    await IOB.api.setState({ id: '0_userdata.0.sp', value: 55 });
```

## Adding a function (for developers)

`www/dist/frontend/common/ScriptApi.js`:

```js
scriptApi.define({
    name: 'myThing', group: 'View', command: 'MyThing',        // command: also a Simple Script command
    description: 'What it does',
    params: { screen: { type: 'string', format: 'screen', required: true } },
    check: ({ screen }, ctx, api) => api.screenCheck(screen),  // optional
    run: ({ screen }, ctx) => { /* … */ },
});
```

The Simple Script command, the Blockly block and `IOB.api.myThing()` follow from that entry. A new feature adds its entry in the same change.
