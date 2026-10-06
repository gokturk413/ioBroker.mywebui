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
