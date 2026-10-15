# Status indicators on controls — write feedback and read quality

[Azərbaycan dilində](status-indicators.az.md)

A control on a runtime screen can carry two kinds of marks:

- **Write feedback**, on the **right** edge: what happened to a value the operator wrote.
- **Read quality**, on the **top-left** corner: whether the value the control shows can be trusted.

They never cover each other. Both are drawn over the control, so the control itself never changes. Hover over (or tap) a badge to see the reason and the driver instance, for example `opcua.0`.

## Write feedback — right edge

An operator's write goes to the driver (OPC UA, Modbus, EtherNet/IP, MQTT …). The driver writes it to the device and then confirms it.

| Frame | Badge | Meaning | What to do |
|---|---|---|---|
| yellow, dashed, pulsing | `⋯ 1.4 s` (counting) | Sent, waiting for the driver to confirm. | Wait. A slow serial line can take several seconds. |
| green | `✓ 180 ms` | The driver confirmed the write. Fades after 1.5 s. | Nothing. |
| red, double | `✕ 5.0 s` | No confirmation in time. | Check that the driver and the device are connected, then write again. |
| red, double | `✕` + tooltip *Confirmed with bad quality* | The driver answered, but with a bad quality code, for example *device not connected (q 0x42)*. | Check the device link. |
| red, double | `✕ denied` | The user may not write this value. | Ask an administrator for the right. |
| orange | `≠ 45` | Confirmed, but with another value: the PLC clamped or rejected part of it. | Check the limits in the PLC. |
| grey, dotted | `= 49` | The value was already there. Drivers do not confirm a value that did not change. | Nothing. |

A red badge stays until it is clicked (or for 10 s / 60 s, if set so). Clicking it removes it.

If the driver answers with a **substitute value** (q 0x10, 0x20, 0x40, 0x80), that is not an error: the badge shows green or orange as usual, and the tooltip adds the code.

## Read quality — top-left corner

The mark comes from the state's quality code `q` (the same list as Admin's *Write value → Quality code*), from the driver instance's connection, and from how long the value has gone without an update.

| Frame | Badge | Meaning | Codes | Value |
|---|---|---|---|---|
| blue, dashed | `S` | Substitute value: not measured, set by the controller, the driver or as an initial value. | 0x10, 0x20, 0x40, 0x80 | shown |
| amber, dotted | `!` | A problem was reported; the value may be wrong. | 0x01, 0x11, 0x41, 0x81 | shown |
| violet, dashed | clock | No update for longer than the driver's stale time. Off unless set. | — | shown |
| grey, hatched | broken link | Not connected: the device, the sensor or the driver instance has no connection. The last value is shown. | 0x02, 0x12, 0x42, 0x82; or the driver's `alive` / `info.connection` is false | last value, hatched |
| red, hatched | `✕` | The device or sensor reports an error. The last value is shown. | 0x44, 0x84 | last value, hatched |
| grey, dotted | `?` | Not available: the state does not exist, has no value yet, or the user may not read it. | — | as the control shows it |

Controls whose state id is set as a *signal* property (for example *input_with_button*) are marked as a whole, the same as bound controls.

When one control reads several values, the worst state is drawn: error › not connected › not available › stale › problem › substitute. The tooltip lists each problem.

### All quality codes

| Code | Text | Drawn as |
|---|---|---|
| 0x00 | good | nothing |
| 0x01 | general problem | problem `!` |
| 0x02 | no connection problem | not connected |
| 0x10 | substitute value from controller | substitute `S` |
| 0x20 | substitute initial value | substitute `S` |
| 0x40 | substitute value from device or instance | substitute `S` |
| 0x80 | substitute value from sensor | substitute `S` |
| 0x11 | general problem by instance | problem `!` |
| 0x41 | general problem by device | problem `!` |
| 0x81 | general problem by sensor | problem `!` |
| 0x12 | instance not connected | not connected |
| 0x42 | device not connected | not connected |
| 0x82 | sensor not connected | not connected |
| 0x44 | device reports error | error `✕` |
| 0x84 | sensor reports error | error `✕` |

## For administrators: the state details panel

An administrator clicks a badge (or Alt + clicks any control) and sees every state the control is bound to: read/write direction, state id, value, quality code, driver connection, last update and last write, with the problem marked. Other users only see the short tooltip. See [bindings.md](bindings.md) → *State details*.

## Settings

Both are set in **Designer → Settings**:

- **Write feedback:** on/off, time in the badge, how long green and red stay, the default wait, a wait per driver instance.
- **Read quality:** on/off, substitute values, hatching, watching the driver's connection, stale time (off, 3 × or 10 × poll, or an own time per driver instance).

For one control or a whole container: `write-feedback="off"` and `read-quality="off"`.

Technical details: [bindings.md](bindings.md) → *Write feedback* and *Read quality*.
