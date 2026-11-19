# Feedback — vibration and sound

An element can make the phone vibrate and play a short sound when something happens to it. The
rules run next to the element's own events and scripts (Simple Script, Blockly, JavaScript):
they listen first, so a script that stops the event does not stop them.

## Project defaults — Settings → Feedback (vibration, sound)

| Setting | Default | Meaning |
|---|---|---|
| On | on | Feedback at all |
| Every button: tap + click | on | Every button-like element of a screen without a click rule of its own |
| Refused / unconfirmed write: warning | on | A write the driver refused or did not confirm, or a refused right |
| Confirmed write: double + success | off | The driver confirmed a write |
| Operator may turn it off | on | `IOB.feedback.mute()` / the **Feedback** command in this browser |
| Alarm patterns even when turned off | on | An *alarm* vibration still comes |
| At most one per (ms) | 250 | No buzzing on fast taps |
| Sound also without a touch screen | off | The defaults' sound on desktop browsers too (an element's own rules always sound) |

## An element's rules — the Feedback window

Select an element, open **Feedback** in the right-hand strip, **+ Add a rule**:

| Field | Values |
|---|---|
| When | click / tap, press, hover, focus, value entered, write confirmed by the driver, write refused / not confirmed, a state changes… (state id + condition `== true`, `> 80`, `!= 0`, `changes`) |
| Vibration | tap 15 ms, double 30-60-30, long 250 ms, warning 120-80-120, alarm 300-150-300-150-600, or custom `40,40,120` (ms on, off, on …) |
| Sound | click, tick, success, warning, alarm (made in the browser, no files) |
| Volume | 0–100 % |

**▶ Test** plays it at once. **Apply**, then save the screen (Ctrl+S). The rules are the element's
`data-feedback` attribute.

A state rule fires when the condition *becomes* true (not for the value the screen starts with).

## Devices

- Android (Chrome, Edge): vibration and sound.
- iPhone / iPad (Safari): there is no vibration API — sound and a short visual pulse on the element.
- Browsers play sound only after the first touch, click or key on the page; the viewer unlocks it then. A hover rule therefore sounds after the first click. A desktop PC never vibrates.

## From a script

Simple Script / Blockly: the command **Feedback** — action `play` (vibration, sound, volume),
`mute`, `unmute`, `toggleMute`. JavaScript: `IOB.feedback.play({ vib: 'double', snd: 'success' })`,
`IOB.feedback.mute()`; `IOB.feedback.prefs` holds the operator's choice in this browser.

## Files

| Part | File |
|---|---|
| Runtime | `www/dist/frontend/common/Feedback.js` |
| Designer window | `www/dist/frontend/config/FeedbackWindow.js` |
| Tests | `test/feedback.mjs` |
