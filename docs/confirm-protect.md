# Confirm & Protect

A control that writes (a button, an input, a valve, a set-point, a script command) can ask before the write goes out:

| Level | What the operator sees | Who decides |
|---|---|---|
| **Confirm** | yes / no, with the old → new value | the browser |
| **Choice** | a button per command (Open / Close / Stop …), each writing its own value | the browser |
| **Password** | the user's own password (and a reason, if the rule asks) | **the server** |

Cancelling writes nothing; an input or checkbox that already shows the new value goes back to the state's value.

## Put a rule on a control

Designer → select the element → right strip **Confirm** → *+ Add a confirm rule*.

- **Applies to** lists the states the element writes: two-way bindings, event commands (SetSignalValue, Toggle…, Increment…), and a custom control's state id property (`state-id`, `oid`, `signal`…). Tick the ones the rule covers; add a state id by hand when a control writes one the window cannot see.
- **When**: every write, or only when the value changes.
- **Dialog**: the custom control that draws it (default `dialog/confirm-dialog`), severity (info / warning / danger), title and message. Both take placeholders `{control} {stateId} {oldValue} {newValue} {oldText} {newText} {user}`; `t:my.key` uses a translation. `{oldText}` / `{newText}` use the state's own words (`common.states`, `0 → Closed`) and unit.
- **Auto-cancel**: the dialog cancels itself after N seconds.
- **Buttons** (choice): label + value per button; a *cancel* button is added when the list has none.
- **Protection** (password): ask once — then remembered — or every time; reason off / optional / required; the security action that must allow the user; lock after N wrong passwords for M minutes.

**Apply** writes the rule to the element (attribute `data-confirm`, saved with the screen — press Ctrl+S) and, for a password rule, to the project's `data/protected.json` at once. **Preview** shows the dialog. **Remove rule** takes it off both.

## Password: checked on the server only

The browser compares nothing and keeps no password. On *Confirm and write* it sends the state id, the value, the user name and the password to `mywebui.0` (`sendTo 'protectedWrite'`); the input is cleared at once. The server then:

1. reads the rule from `data/protected.json` — not from the browser — and refuses a state the rule does not cover;
2. checks the password with ioBroker (`checkPassword`) — a disabled user fails;
3. counts wrong passwords per user; past the limit the user is locked for the set minutes;
4. checks the rule's security action (Security dock) for the user;
5. writes the state **as the adapter**, with the audit in the state's `c` field: `{"u":"op1","via":"password","rule":"cw_…","reason":"…"}`, and logs `[Protect] id = value by user via password`. The password is never logged.

After a success the server gives the browser a token (8 h, memory only — a reload or logout asks again) so the password is not asked again; with *Ask password: every time* there is no token.

### Locked: a supervisor approves

After too many wrong passwords the dialog turns into **Supervisor approval**: a supervisor types their own name and password (and a reason). The server lets the write through when that user is a supervisor — the security model's action **`supervisorApprove`** (new models: codes B, D, F, G), or, when the model has no such action, a member of the ioBroker `administrator` group. The operator is unlocked; the audit records `approvedBy`. Nobody approves for themselves.

### A hard boundary: restrict writes in ioBroker

The dialog only guards this visualisation. Someone with ioBroker access could still write the state another way. To close that, use **Restrict writes in ioBroker (ACL)…** in the Confirm window: the states get owner `system.user.admin`, group `administrator`, state ACL `0x644` — everyone reads, only administrators write. Drivers and `mywebui.0` keep writing (the protected write runs as the adapter); other visualisations used by non-administrators can no longer write those states. Operators should not be administrators.

## Who is asking — the gateway

A browser's `sendTo` carries no session: the socket relays it with whatever user name the page typed. So mywebui's calls that depend on the user go through a gateway in web.0 (`webExtension.cjs`, `POST /mywebui-api/<command>`):

- the user comes from the web session (`req.user`); with web authentication off, web.0's default user — the same user the socket has;
- the message to `mywebui.0` is signed (HMAC); the key is a file in the instance's data directory (`iobroker-data/mywebui.0/gateway.key`), which no browser can read;
- only these commands pass: `checkScreenAccess`, `checkVisibility`, `secWriteState`, `protectedWrite`, `generateReport`, `listReports`, `getReportFile`.

`mywebui.0` refuses `secWriteState`, `listReports` and `getReportFile` when a browser-facing adapter (web, ws, admin, socketio, rest-api, simple-api, webapi…) relays them without the gateway's signature (`gateway-required`, logged as `[SecWrite] refused: unproven user`). Scripts and other server-side adapters keep calling them with `sendTo` as before. The page uses the gateway when it is there and falls back to `sendTo` otherwise (another web server, an older web.0). History reads (`getHistory`) stay on `sendTo`.

The ioBroker permission `sendto` itself is unchanged; a finer sendTo permission is future platform work (`docs/superpowers/future/sendto-permission-model.md`).

## The dialog control

`global/controls/dialog/confirm-dialog` is an ordinary custom control (seeded on start, also into installs older than this version). It has one property, `request` (JSON), and answers with the event `dialog-result`:

```text
request:  { mode: confirm | choice | password | supervisor, severity, title, message,
            showChange, oldText, newText, stateId, buttons: [{label, role, value, current}],
            username, reason: off | optional | required, timeout, busy, error, labels: {…} }
result:   { role: confirm | reject | value, value?, password?, reason?, supervisor?: {username, password} }
```

Copy it into the project (or make another one in the `dialog` folder) to change its look; keep that contract and pick it in the rule. Its colours come only from the `--ui-*` theme tokens, so it follows the runtime theme. If the control is missing, the runtime uses a built-in dialog with the same look.

The texts (buttons, errors, supervisor) are built in for az, en, ru, de, tr — key prefix `confirmWrite.*`, editable in Translations → **Built-in (runtime)**.

## Settings and files

| Where | What |
|---|---|
| element attribute `data-confirm` | the rule (JSON) |
| `<project>/data/protected.json` | password rules the server reads: `{ rules: { key: { states, reason, action, askAgain, lockout, screen, element } } }` |
| `config.confirmWrite.enabled = false` | turns the dialogs off for the whole project |
| `www/dist/frontend/common/ConfirmWrite.js` | runtime |
| `www/dist/frontend/config/ConfirmWindow.js` | designer window |
| `src-original/backend/protectedWrite.js` | server |

Limits: a protected write needs a logged-in user. The password travels to the server over the page's connection (use HTTPS) and through ioBroker's message bus for that one call. Lock counters live in the adapter's memory — a restart of `mywebui.0` clears them.
