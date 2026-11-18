# Redundancy (HA failover)

With the redundancy adapter, web.0 and mywebui.0 run on one server at a time (the primary). On a
switchover they stop there and start on the new primary: for a few seconds there is no server.
This page says what an open screen does then, and how to set the servers up for it.

## One address: a floating (virtual) IP

Give the primary an address that moves with it, for example `192.168.64.10`, and open the runtime
there: `https://192.168.64.10:8082/mywebui/runtime.html`. The browser keeps that one URL. On a
switchover the connection drops and the server comes back at the same address.
The redundancy watchdog moves this address itself when its config has a `vip` entry.

Use the same address for the TLS certificate (put the virtual IP or its DNS name in the
certificate), so the browser trusts every server under it.

A list of server addresses to try in turn is not supported. The login cookie and the certificate
belong to one address, so every switch to another address would mean logging in again.

## What an open screen does

- **Connection lost.** After one second without a connection a banner says *Connection to the
  server lost — reconnecting…*. The screen stays as it is, and the page is not reloaded.
- **Values are not live.** While the connection is lost, read quality marks every bound value
  grey with the link icon: *No connection to the server — last value shown*. This needs read
  quality to be on (Settings → Read quality). Project styles can use
  `html[data-iob-connection="lost"]` too.
- **Reconnecting.** The browser tries again after 0.5 s and then every 1 s, without giving up.
  On Windows a refused attempt itself takes about 2 s, so a server that is up again is reached
  within about 3 s.
- **Back again.** Every subscribed state is read again, so a value that changed during the outage
  is shown at once and not only at its next change. Alarms and other state-based views come back
  the same way. `history:` directives query their rows again. Only then does the banner go away,
  and the read-quality marks go with it.
- **Login.** ioBroker keeps web sessions and their tokens in the shared states database, so the
  login of the old primary is still valid on the new one. mywebui itself keeps no login in the
  memory of one server.

## Redundancy status on a screen

Two global controls under **Global → Controls → redundancy** show the redundancy adapter's states.
They find every `redundancy.N` instance by themselves (one per server). To limit them, list
instances in the `instances` property, for example `redundancy.0, redundancy.1`.

- **redundancy-status** is a panel. It shows which server is primary and since when, and every
  server's role, watchdog, peer, links, licence and maintenance lock. It also shows the cluster
  address (VIP) and which server holds it, which server this screen talks to, the last switchover
  or failover with its reason, and the latest events (`showEvents`, `eventCount`).
- **redundancy-badge** is a chip for the app bar. It shows the primary, and its tooltip lists
  every server. Set `screen` to open a screen on a click, for example one with the panel.

Both colour themselves by the worst thing they see:

- **red**: no server is primary; more than one is; the connection to the server is lost; or the
  screen is served by a standby (a session kept on a server that has become standby);
- **amber**: a server is down, fenced or without its watchdog; a peer is not `Ok`; a link is
  lost; a licence is not valid; a maintenance lock is set; or no server holds the VIP;
- **green**: anything else.

Which server serves the screen is said by web.0 itself, not by the page's address. A proxy on
every server may forward to the cluster address, so the address of a standby can still reach the
primary. Without that answer (an older mywebui on the server), the panel says only whether the
screen came through the cluster address, and never raises an alarm for it.

A server whose ioBroker is down keeps its last states, often `primary`. The controls therefore
count a server only while its instance is alive (`system.adapter.redundancy.N.alive`).

Each control puts the colour on itself as `data-tone` (`ok`, `warn`, `error`) and the primary as
`data-primary`. When either changes, it fires a `redundancy-change` event with
`{ primary, primaryHost, tone, problems, epoch }`.

The controls only read. A switchover is started in the redundancy adapter's admin tab.

## In your own controls and scripts

`IOB.online` is `false` while the connection is lost.

`IOB.onReconnected(cb)` calls `cb(outageMs)` once the connection is back and the values have been
read again. It returns a function that removes the callback. Use it for anything that queries
once and must query again, such as a history table filled by a script. Without IOB you can also
listen for the `iob-reconnected` event on `window` (`event.detail.outageMs`).

## Licence

Every server keeps its own copy of the mywebui licence ledger. The copies live in the objects
`mywebui.N.licenseTrial` and `mywebui.N.licenseGrace`, under `native.blobs[<hardware id>]`, so a
copy sealed on one server is never read on another. A cluster licence key lists the hardware ids
of every server.

## Per server, on purpose

- **The gateway key** (`iobroker-data/mywebui.N/gateway.key`) is a file on each server's own
  disk. web.0 and mywebui.0 always run on the same server, so each primary signs and checks with
  its own key.
- **The journal queue** (entries not yet written to the history database) stays on the server
  that recorded them. It is written when that server is primary again.

With hot instances (a copy of mywebui.0 on every server, only the primary's writes go through), the
copy on a standby records no journal entries, because the primary records the same events. It
stores none either: a held write would answer like a success and the entries would be lost.
When a server becomes primary, its queue is written at once.
