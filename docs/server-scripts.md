# Server Scripts

JavaScript that runs on the server (the `mywebui.0` adapter) all the time — whether or not any browser is open. A script reacts to state changes, reads and writes states and objects, runs on a schedule, sends messages to other adapters and generates reports.

## Who may write them

- Only **administrators** open Server Scripts and save them. Every call goes through the web gateway and is checked on the server; Server Scripts need web authentication switched on (web.0 → Authentication).
- A script acts with the **rights of the mywebui.0 adapter**. That is why the server runs only script files that an administrator wrote: a script (or shared module, or library) whose file a non-administrator could have written does not start, and its status says why (“save it again from the designer”).
- Every save, start, stop and error goes into the [Journal](journal.md).

## Where they run

Each script runs in its own sandbox (QuickJS in a worker thread). It has no access to Node, the disk, the network or other processes — only the API below. An endless loop or a memory blow-up stops that script only; the adapter keeps running.

## Create a script

1. Designer → Solution Explorer → **Server Scripts** (double-click).
2. **+ Script** → name, folders with `/` (for example `process/pump1`).
3. Write the code, tick **Enabled** (starts with the adapter), **Save**.
4. **Run / Stop / Restart** as needed. The **Log** tab shows the output, **Subscriptions & timers** what the script listens to, **API** the reference.

**Insert state id** opens the ioBroker object browser and puts the id at the cursor.

## API

| Call | Does |
|---|---|
| `on(id \| pattern \| {id, change, ack, val}, cb)` | Subscribe; `cb(state, id, old)`. `change`: `ne` (default, value changed), `any`, `gt`, `lt`, `eq`. Patterns with `*`. `subscribe` is the same. |
| `unsubscribe(handle)` | Stop one subscription |
| `getState(id)` | `{ val, ack, ts, lc, q, from, user }` or `null` |
| `getStates(pattern)` | `{ [id]: state }` |
| `setState(id, val, { ack })` | Write. `ack: false` (default) is a command the driver confirms |
| `setStateChanged(id, val, opts)` | Write only when the value differs |
| `getObject(id)`, `getObjects(pattern)` | Read objects |
| `createState(id, common, initial)` | Only under `0_userdata.0.` and `mywebui.0.scripts.<project>.` |
| `schedule(cron, cb)` | Cron `min hour day month weekday`, plant time zone |
| `setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`, `clearSchedule` | Timers — all removed when the script stops |
| `sendTo(instance, command, message)` | A message to another adapter (email, telegram, sql …); answer within 30 s |
| `http.get(url)`, `http.post(url, body)` | Only to hosts in Settings → Server Scripts → Allowed hosts (off when empty). 10 s, 1 MB, redirects not followed |
| `report.generate(name, { format })` | Run a project report to its Output path |
| `log.info / warn / error / debug` | The script's Log and the ioBroker log |
| `onStop(cb)` | Clean up before stop, save or restart (2 s at most) |

Top-level `await` works.

## Examples

```js
// Pump 1: start above 80 %, stop below 20 %
const LEVEL = 'modbus.0.holdingRegisters.40001_tank_level';
const PUMP = 'modbus.0.coils.1_pump1';
on({ id: LEVEL, ack: true }, async (st) => {
  const running = (await getState(PUMP))?.val;
  if (st.val > 80 && !running) await setState(PUMP, true);
  else if (st.val < 20 && running) await setState(PUMP, false);
});
```

```js
// Count active alarms for the dashboard bell
await createState('0_userdata.0.dashboard.alarmCount', { type: 'number' }, 0);
async function count() {
  const all = await getStates('alarm.0.*.active');
  await setStateChanged('0_userdata.0.dashboard.alarmCount', Object.values(all).filter(s => s?.val === true).length, { ack: true });
}
on({ id: 'alarm.0.*.active', change: 'any' }, count);
count();
```

```js
// Shift report at 06:00, 14:00 and 22:00
schedule('0 6,14,22 * * *', async () => {
  const r = await report.generate('reports/shift', { format: 'pdf' });
  log.info(r.ok ? `written: ${r.file}` : `failed: ${r.error}`);
});
```

```js
// E-mail through the email adapter
on({ id: 'opcua.0.boiler.alarm', val: true }, () =>
  sendTo('email.0', 'send', { subject: 'Boiler alarm', text: 'The boiler is in alarm.' }));
```

## Shared modules

**+ Module** creates `common/<name>.js`. Import it from any script of the project:

```js
import { limits } from 'common/limits.js';
```

Saving a shared module restarts the project's running scripts.

## Libraries

Under **Libraries** type an npm package (`dayjs`, `lodash-es@4`) and **Add**. The server downloads it, bundles it into one file and keeps it in the project — it works offline after that.

```js
import dayjs from 'dayjs';
log.info(dayjs().format('YYYY-MM-DD HH:mm'));
```

Only plain JavaScript packages work. A package that needs Node (`fs`, `net`, `http`, native modules) is refused with the reason — for those, use an ioBroker adapter through `sendTo` (mqtt, sql, email …) or `http.get`. Package install scripts never run; a bundle may be at most 2 MB.

## Limits and errors

Per script (Script panel), defaults in Settings → Server Scripts:

- **Handler time limit** (500 ms): one run of a handler, timer or the top level. Over it, that run is stopped and logged with the line; the script goes on.
- **Memory** (32 MB): over it, the script stops with “out of memory”.
- **Writes per minute** (600): more writes are refused and logged.
- **On error**: log and keep running (default), stop the script, or restart after 30 s (at most 5 times in 10 minutes).

A syntax error or an error at the top level stops the script; the line is marked in the editor.

## States

`mywebui.0.scripts.<project>.<folder>.<name>.status` (`running` / `stopped` / `error`), `.lastError`, `.since`, and `.control` — an administrator may write `start`, `stop` or `restart` to it.

## Journal

Writes are recorded as commands with the source `script:<project>/<name>` (switch off per script with *Record writes in the Journal*). Saves, starts, stops, errors and library changes are system entries.
