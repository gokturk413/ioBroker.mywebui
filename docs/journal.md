# Journal, Messages, Find, State usage, online clients

[Azərbaycan dilində](journal.az.md)

mywebui keeps a history of what happened to the plant through it: who asked for which value, from where, which driver accepted it and how long that took — or that no driver did. Next to it are the live view of the page's traffic (Messages), a search over the plant's elements (Find), the list of every state the project uses (State usage) and the browsers online right now.

| Tool | Where | What it answers |
|---|---|---|
| **Journal** | runtime: app-bar button `navigation/journal-button`, or `IOB.openJournal()` | What happened, by whom, from where, with which outcome — from the server's history. |
| **Messages** | runtime: `navigation/messages-button`, or `IOB.openMessages()` | What this page receives and sends right now. |
| **Find** | runtime: Ctrl+Shift+F, `navigation/find-button`, or `IOB.openFind('P-101')` | Where is this element — on this screen or another? |
| **State usage** | designer: Refactor → State usage | Which states does the project use, where and how? |
| **Online clients** | Journal → Clients | Who is connected, from which IP and device, on which screen? |

---

## 1. Journal

### What is recorded

| Kind | When | What is kept |
|---|---|---|
| **Command** ↑ | any write (`ack: false`) to a state mywebui uses — from a screen, a script, Admin or another adapter | time (ms), state, value before → after, **user** (ioBroker's `user` on the state), **through what** (`web.0`, `javascript.0` …); from a mywebui page also the **IP, device, screen, element** and the Confirm answer; then the driver's answer: **who accepted it** (the ack's `from`), **how long it took**, with which value — or *no confirmation* after the wait |
| **Value** ↓ | a change of the states listed in Settings → Journal | value before → after, how long the one before stood, the driver |
| **System** ⚙ | a driver of a followed state connected / disconnected / started / stopped; a write refused for lack of rights | the instance, the state, the user |
| **Log** ! | a log line of `web.N` or `mywebui.N` at the levels chosen | source, level, text (as the adapter wrote it) |
| **Client** ◉ | a browser connected, opened a screen, opened the designer, left, lost its signal | user, IP, device, page, screen |
| **Note** ✎ | an operator's comment on an entry | user, text |

*States mywebui uses* are found by the same scanner as State usage (§4) — every screen, report, control and the Global Script of every project — plus the ids each open page reports (ids built at runtime, `{relativeSignalsPath}`, `{##i}`). Only those are followed, never all of ioBroker. `local_*` states, the UI's own `mywebui.N.control.*` states and the patterns in *Leave out* are not recorded.

The outcome of a command:

| Shown | Meaning |
|---|---|
| `✓ modbus.0 · 180 ms` | the driver confirmed it |
| `≠ 45 · opcua.0` | confirmed with another value (the PLC clamped it) |
| `✕ No confirmation · 5.0 s` | no ack within the wait — `max(3 s, 2 × poll + 1 s)` of the driver, else 5 s |
| `✕ Bad quality` | the driver answered with a bad quality code |
| `— no driver confirms it` | `0_userdata`, `javascript`, `system` … — nothing to wait for |
| `↷ replaced by the next write` | a newer write came before the ack |

### Where it is kept

In a **history instance** of this server — `influxdb.N`, `sql.N` or `history.N`, chosen in Settings → Journal. Its own connection, password and retention are used; the journal keeps none of its own. Each kind is one state of mywebui (`mywebui.0.journal.command`, `.update`, `.system`, `.log`, `.client`, `.note`) whose history the instance stores; the journal writes there in batches (`storeState`) every 2 s.

While the instance is stopped or unreachable nothing is lost: the entries wait in a local queue, kept on disk (`iobroker-data/mywebui.0/journal-queue.jsonl`), and go when it is back. *Local queue at most* limits it (the oldest go first when it is full). The journal's footer and Settings show how many entries wait.

### Using it

1. Put **`navigation/journal-button`** in the app bar (Designer → Settings → Application Bar → ✎ Edit App Bar content → drag it from Global controls → navigation), or call `IOB.openJournal()` from a button script.
2. **History / Live** — History reads the chosen range from the instance; Live adds new entries every 2 s.
3. **Range** — last hour, shift (8 h), 24 h, 7 days (never further back than the user's rule allows).
4. **Kinds** — All, Commands, Values, System, Logs, Clients (only the kinds the user may see are offered).
5. **Search** — words in the element, screen, user, state, IP or text — only in the fields the user's rule allows. **◎** picks an element on the screen: its states are searched (the click does nothing else).
6. **A row** opens its details: the full state id, element, screen, value, who and from where, Confirm, driver, outcome, its comments. **Show on screen** points at the element (the Find arrow); **All of this state** / **All of user** search for them.
7. **Comment** — write a note on an entry (who may: the rule's *Comment*). It is kept as an entry of its own and shown with the entry.
8. **Export CSV** — the rows shown, in the viewer's language (when the rule allows *Export*).
9. **Clients** tab — §5.

### Who may see what

Settings → Journal → *Who may see what*: one row per ioBroker group, plus exceptions per user (**+ Exception for a user**).

| Column | Values | Meaning |
|---|---|---|
| Commands, Values, System, Logs, Clients | `all` · `area` · `own` · `—` | `all`: every entry of that kind · `area`: entries on the states of the screens the user may open (Screen Access), and the user's own · `own`: only what the user did · `—`: not shown, not searchable |
| IP | ✓ / – | IP addresses shown and searchable |
| Ids | ✓ / – | state ids shown (otherwise the element's name, or the id's last part) |
| Back h | hours, `0` = no limit | how far back the user may look |
| Export | ✓ / – | Export CSV |
| Comment | `all` · `own` · `—` | whose entries the user may comment on |

- **Administrators** (the `admin` user, the ioBroker `administrator` group) see everything.
- A group **without a row** sees its own commands of the last 24 h, without IPs and state ids.
- A user in several groups gets the **widest** of their groups' rules; a **user row** replaces the groups'.
- It is enforced **on the server**: every query is filtered there before anything is sent (kind, area, own, time back), IPs and state ids are taken out there, and a search runs only over the allowed fields. A browser never receives what its user may not see. A user whose rule is restricted sees a line above the list naming what they see.

### Settings → Journal (designer)

| Setting | Default | |
|---|---|---|
| On (record) | on | |
| Kept in | `influxdb.0` | the history instance; its state (running / stopped) is shown |
| Commands · System events · Clients · Logs of web.0 / mywebui.0 | on | |
| Log levels | error, warn | info too, if wanted |
| Value changes of these states | none | one state id per line |
| Leave out | `system.*` | patterns, `*` as wildcard, comma-separated |
| Client signal every / offline after | 20 s / 60 s | |
| Trusted reverse proxy | — | behind nginx & co.: the proxy's IP; only then `X-Forwarded-For` is believed |
| Local queue at most | 50 000 | |
| Who may see what | — | above |

Saved with the project's config (`config.journal` of the `default` project); the server reads it again at once.

### Language

Entries are stored as data (`{ k: 'command', st: 'error', r: 'timeout', ms: 5000, … }`), never as sentences. The panel words them in the **viewer's language**: the five built-in languages (az, en, ru, de, tr) and any language the project adds — Translations dock → *Built-in (runtime)*: add a language, fill the `journal.*` keys (empty ones fall back to English); a project text wins over the built-in one. Element names come from the project's translations or the object's `common.name`. Not translated: log texts of web.0 / mywebui.0 (the adapter's own English) and comments (as written).

### For scripts and integrators

- `IOB.openJournal()`, `IOB.toggleJournal()`.
- `IOB.serverCall('journalQuery', { from, to, kinds, text, limit })` → `{ entries, more, rule, status }` — the same filter as the panel.
- `IOB.serverCall('journalClients', {})` → the clients online (as the user may see them).
- The states `mywebui.0.journal.*` have the history; `mywebui.0.info.clients` the number of clients online.
- All journal calls go through the **gateway** (`POST /mywebui-api/…` of web.0): the user is the web session's, the IP the request's. Without the gateway the journal stays empty.

---

## 2. Messages — the page's live traffic

The traffic of *this page* since it opened, without the server: every update (↓) and command (↑) of the states the page uses, with who asked (user · through what), who accepted it (the driver), how long it took and the outcome; how long each value stood, and how long the newest stands (counting). **Ping the changes** flashes elements whose value changes, **Gray what shows no state** fades the rest, holding **Alt** labels every bound element, **◎** filters on one element. Button: `navigation/messages-button` (its badge counts commands not confirmed since it was last opened). Who: administrators, or the project's `messages` security action. Details: [bindings.md](bindings.md) → *Messages*.

## 3. Find — where is it?

Ctrl+Shift+F, `navigation/find-button` or `IOB.openFind('P-101')`. Searches every element with an id, every custom control and everything bound to a state — on this screen and on all other screens — by id, name (`FT 01` from the control's `pointName`), kind (`pumps/pump1`) and, for administrators, the state id. Moving over a row points at the element with a violet arrow; an element on another screen opens that screen and is pointed at there. `IOB.pointAt(element)` for scripts. Details: [screens.md](screens.md) → *Find*.

## 4. State usage — which states, where, how

Designer → Refactor → **State usage**: every state of the project with R / W, count, files, ⚠ *no object* for ids without an ioBroker object, *runtime* for templates; per use the file, the element (id, else its control), how it is bound and the line; **Go** opens the file and selects the element, or the script at its line. Live while you edit. The *Selection* tab keeps the old search / replace. Details: [screens.md](screens.md) → *State usage*.

## 5. Online clients

Journal → **Clients**: who is connected now — user, IP, device and browser (`Galaxy A52 · Chrome`), runtime or designer, the screen now, connected since, last signal. Every page says it is there every 20 s (and when it leaves); one that is silent for 60 s is *disconnected*. The user comes from the web session (never from the browser); the IP is the request's, behind a reverse proxy the `X-Forwarded-For` of the **trusted** proxy only. Who may see it, and whether with IPs: the rule's *Clients* and *IP*. Connected / left / screen events go into the journal as *Client* entries.

---

## 6. Sessions — one user, one place

Settings → **Sessions** (off by default): a user signed in in one browser cannot sign in in another at the same time.

- **Limit** — how many places at once (default 1). The tabs of one browser count as one place; designer and runtime count together.
- **Exempt** — groups and users not limited (default: group `administrator`, user `admin`).
- **The second sign-in is refused.** Its page is covered with *"operator is already signed in here: 192.168.1.20 · Windows · Chrome · since 09:14"* and a *Back to sign in* button. Its web session is ended and mywebui answers none of its calls. There is **no** "close the other one" button on purpose: someone who knows the password must not be able to push the operator out.
- **The first place is told** (with its next signal, within ~20 s): *"Someone tried to sign in as you"* with the IP, device and time. *OK, stay signed in* closes the note; *Log out* signs out here, of the user's own will — then the other place may come in.
- **Journal:** every refused sign-in is a *Client* entry `Sign-in refused` (user, IP, device, and where the user already was), once per browser per 5 minutes; a logout from the note is `Logged out (after a sign-in attempt)`. Sign-in, logout, connected and left are recorded as before.
- A place is a **browser's web session** (its sign-in cookie), told by the server — not an id the page names; copying another browser's ids does not get in. A place counts while its page gives a signal (60 s); a browser that was closed frees its place after that. A restart of mywebui keeps the places.
- Limit: the check is made by mywebui's server calls and the page. Plain state reads and writes over web.0's socket are web.0's own sign-in; a blocked page closes its connection.

---

## Under the hood

| Part | File |
|---|---|
| Journal (server): following, pairing commands with acks, queue, storeState, queries, rules | `src-original/backend/journal.js` |
| Gateway commands `journalQuery`, `journalContext`, `journalComment`, `journalClients`, `journalStatus`, `journalReload`, `clientHello`, `clientBye` | `webExtension.cjs`, `main.js` → `onMessage` |
| Browser: presence, write context | `www/dist/frontend/common/JournalClient.js` |
| Journal panel | `www/dist/frontend/common/JournalPanel.js` |
| Messages | `common/MessageLog.js`, `common/MessagesPanel.js` |
| Find | `common/FindPanel.js` |
| State usage scanner (browser and server) | `common/StateUsage.js`, `config/StateUsageView.js` |
| Texts (5 languages) | `common/BuiltinTranslations.js` (`journal.*`, `msgs.*`, `find.*`) |
| Tests | `test/journal.mjs`, `test/messages.mjs`, `test/find.mjs`, `test/state-usage.mjs` |

The adapter declares `logTransporter` (io-package) to receive the web / mywebui log lines.
