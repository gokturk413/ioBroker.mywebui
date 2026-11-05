# Permission System (PlantPAx-style)

mywebui's role/area/action security model, modeled on Rockwell PlantPAx 4.x Area-Based Security (7 role codes, per-action code matrix, per-object areas, Basic/Advanced area levels).

## Model — `data/security.json` (per project)

```json
{
  "codes":   { "A":"Operator", "B":"Operating Supervisor", "C":"Maintenance",
               "D":"Maintenance Supervisor", "E":"Engineering", "F":"Manager", "G":"Admin" },
  "actions": {
    "operate":          { "codes":"ABCDEFG", "level":"basic" },
    "setpointOverride": { "codes":"BDEFG",   "level":"basic" },
    "ackAlarm":         { "codes":"ABCDEFG", "level":"basic" },
    "disableAlarm":     { "codes":"EFG",     "level":"advanced" },
    "bypassInterlock":  { "codes":"EG",      "level":"advanced" },
    "maintenance":      { "codes":"CDEG",    "level":"advanced" },
    "tuning":           { "codes":"DEG",     "level":"advanced" },
    "configure":        { "codes":"EG",      "level":"advanced" },
    "shutdown":         { "codes":"BFG",     "level":"basic" },
    "admin":            { "codes":"G",       "level":"advanced" }
  },
  "areas": { "Area01": {}, "Area02": {} },
  "users": {
    "operator": { "code":"A", "areas": { "Area01":"basic" } },
    "admin":    { "code":"G", "areas": { "*":"advanced" } }
  },
  "defaultAllow": false
}
```

PlantPAx mapping: `codes` = HMI_* groups (one code per role, v4.0 style) · `actions` = the Security Tags matrix · element `data-area` = `Cfg_Area` · `areas` levels = `{Area}_Basic` / `{Area}_Advanced` groups · `secCan()` = `CurrentUserHasCode()`.

**`diagnostics` action.** New models include `diagnostics` (codes E, G): who may open the runtime's state details panel besides the designer's administrators. Add it in the Security dock to an older model to use it; a model without it grants the panel only to administrators. See [bindings.md](bindings.md) → *State details*.

**`supervisorApprove` action.** New models include `supervisorApprove` (codes B, D, F, G): who may approve a password-protected write for an operator locked out after too many wrong passwords. A model without it leaves that to the ioBroker `administrator` group. See [confirm-protect.md](confirm-protect.md).

## Runtime API (`window.IOB`)

```js
IOB.secCan('ackAlarm', element)        // CurrentUserHasCode equivalent: code ∈ action.codes
                                       // AND user has the element's area (data-area ancestor,
                                       // walks shadow hosts) at a sufficient level
IOB.secCan('configure', 'Area02')      // explicit area name instead of element
IOB.secCan('ackAlarm', el, 'user2')    // check for another user
IOB.secUser()                          // current user's record { code, areas }
IOB.secAreaOf(el)                      // resolve the Cfg_Area of an element
IOB.security / IOB.loadSecurity() / IOB.saveSecurity()   // model + persistence
IOB.securityChanged.on(cb)             // live refresh signal
```

Rules: no `security.json` → everything allowed (backward compatible). Unknown action → allowed. Unknown user → denied unless `defaultAllow:true`. `level:"advanced"` actions need the area at `advanced`. `"*"` area entry = all areas.

## Using in controls

- Assign areas in the designer by putting `data-area="Area01"` on any container (screen section) or element — descendants inherit it (nearest ancestor wins).
- Gate a button: `if (!IOB.secCan('setpointOverride', instance)) hide/disable;` and re-check on `IOB.securityChanged`. Exemplar: `alarms/alarm-viewer` hides its ACK buttons via the `ackAlarm` action.
- Declaratively: `css:display="[[window.IOB?.secCan?.('configure', this) ? '' : 'none']]"`.

## Enforcement layers (read this)

| Layer | What | Bypassable? |
|---|---|---|
| 1. UI gating (`secCan` in controls) | buttons hidden/disabled | **Yes** (devtools) — UX only |
| 2. ioBroker session ACL | js-controller checks every write against the LOGGED-IN user's group rights, server-side | **No** — use per-role login users + state ACLs |
| 3b. Confirm & Protect, password level | the server checks the user's own password, the rule from `data/protected.json` and the action, then writes as the adapter — see [confirm-protect.md](confirm-protect.md) | Identity: **no** (proven by the password). Combine with state ACLs (*Restrict writes in ioBroker*) so other paths cannot write |
| 3. Backend `secWriteState` | mywebui.0 re-evaluates the full matrix server-side, stamps identity into `c` AND `user` (via `options.user`), audit-logs denials | Matrix itself: **no**. Identity claim: not yet authenticated — swap for the SaaS token when it lands |

### Layer 3 — server-enforced writes

```js
const res = await IOB.secWriteState('0_userdata.0.sp', 55,
    { action: 'setpointOverride', element: instance /* or area:'Area01' */, ack: false });
if (!res.ok) console.warn(res.reason);   // 'permission denied' | 'missing params' | ...
```

The backend (`mywebui.0` `secWriteState` command): loads the project `security.json` (5s cache) → evaluates code + area level → on allow, writes with `c = {"u":"operator","area":"Area01","action":"setpointOverride","via":"mywebui"}` and `options.user = system.user.<user>` so the state's **`user` field records the real person** (shadow-user pattern) and js-controller's ACL double-checks the write; on deny, logs `[SecWrite] DENY ...` and returns `{ok:false}`. Verified: allowed write lands with full identity/audit; denied writes never touch the state.

Client-side checks are convenience; give each role its own ioBroker login user and restrict state ACLs by group so layer 2 always backs layer 1. Do NOT trust a client-supplied username in sendTo payloads — identity must come from the authenticated session.

## ioBroker rights — what the user is told

ioBroker checks two separate things on the server, and mywebui now tells the user when either refuses (a notice in the screen corner, not a dialog; the texts are built-in runtime texts `access.*` in az/en/ru/de/tr, editable in Translations → *Built-in (runtime)*):

| | Set in | Checked by | Covers |
|---|---|---|---|
| **Group rights** | admin → Users → a group → *Permissions* | the web adapter, on every command | State read/write, Object, File, Other: **sendTo**, http, shell |
| **Object ACL** | admin → Objects → the access column (e.g. `664`) | js-controller, on getState/setState | one state: owner user, owner group; read/write for owner / group / everyone |

Rules mywebui mirrors exactly (`common/AccessRules.js`, `test/access-rights.mjs`):

- **First match.** The owner gets only the owner bits — even when *everyone* may write; a member of the owner group only the group bits; everyone else the everyone bits.
- Only the user **admin** skips both checks. Members of the administrator group are checked.
- An object without an ACL (or without state/object bits) is open.

What happens:

- **Write** (`IOB.setState`, bindings, controls): a write the server would refuse is not sent. The notice says why (group right or the data point's ACL, with its owner and group); the control's write-feedback frame shows *denied*. A refusal by the server itself is told the same way. `setState` then resolves `{ denied: true }` instead of throwing.
- **Read.** ioBroker sends **subscribed values without the object's read right** (only `getState` checks it). mywebui drops them — on every subscription, `IOB.connection.subscribeState` in user controls included — so the value is never shown, not even after a change. `getState` resolves `null`. The control is hatched with a 🔒 mark (read quality, kind *denied*), also for `0_userdata` states. No placeholder value is written into the binding: a text in a numeric control, or written back by a two-way binding, would do harm.
- **sendTo** without *Other → sendTo*: the server answers `'permissionError'` as the **result** (no error), so a call silently did nothing. mywebui tells the user, before the call when the right is known and when the server refuses; the call returns `'permissionError'` as before.
- **Scripts** can ask first or listen:

```js
const a = await IOB.access('0_userdata.0.sp');   // { read, write, reasonRead?, reasonWrite? }
if (!a.write) console.warn(a.reasonWrite);
IOB.accessDenied.on(e => console.log(e));        // { id?, op, kind, layer: 'group'|'object'|'server', … }
```

The server stays the authority: nothing here grants a right. The group rights are read once (`getUserPermissions`, refreshed every minute), object ACLs in bulk (`getObjects`), so a screen with many bindings costs one request; for the user **admin** nothing is checked.

**Replaces** the global control `check_write_permission` (a patch of the socket's `emit`, called from the Global Script): its rules differed from ioBroker's (it fell through owner → group → everyone, skipped the whole administrator group, blocked objects without an ACL), a blocked write never answered, and it used `alert()` and checked writes only. Remove its call from the Global Script `init()`.

**`secWriteState` and the ioBroker ACL.** It writes as the user (`options.user`). When ioBroker refuses that, it falls back to writing as the adapter **only when the project's security model granted the action** (the model is then the authority, as for Confirm & Protect's hardened states). Without a model it refuses (`reason: 'acl-denied'`) — before 1.180.0 any proven user could pass the ACL this way.

## Reports follow the same visibility

A generated report (HTML / PDF / CSV) is rendered **for a user**, exactly like a screen: element
Visibility (groups, *hide* / *disable*), a control's own Visibility settings and the report's own
access rule all apply.

| How the file is made | Rendered for |
|---|---|
| **Generate** (download) in the browser | the logged-in user — proven to the server with a one-time ticket (the browser writes the SHA-256 of a secret to `mywebui.0.reports.ticket`, which ioBroker stamps with the user, and sends the secret) |
| **Save on server** | the user who pressed it (the `trigger` state carries the user) |
| **Schedule / signal** | the report's **Output → Run as** user; empty = nobody, and every element limited to groups is left out |

In a PDF a *disabled* element is drawn in grey (a PDF cannot fade text the way the screen does).
