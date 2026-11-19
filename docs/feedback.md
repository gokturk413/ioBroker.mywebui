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
| The element shakes with its vibration | on | The element shakes as long as its vibration — on a PC too, which cannot vibrate. An element's own rules and a refused write; not the tap on every button |

## An element's rules — the Feedback window

Select an element, open **Feedback** in the right-hand strip, **+ Add a rule**:

| Field | Values |
|---|---|
| When | click / tap, press, hover, focus, value entered, write confirmed by the driver, write refused / not confirmed, a state changes… (state id + condition `== true`, `> 80`, `!= 0`, `changes`) |
| Vibration | tap 40 ms, double 40-70-40, long 250 ms, warning 120-80-120, alarm 300-150-300-150-600, or custom `40,40,120` (ms on, off, on …) |
| Sound | click, tick, success, warning, alarm (made in the browser, no files) |
| Shake | on: the element shakes with the vibration |
| Volume | 0–100 % |

**▶ Test** plays it at once. **Apply**, then save the screen (Ctrl+S). The rules are the element's
`data-feedback` attribute.

A state rule fires when the condition *becomes* true (not for the value the screen starts with).

## Devices

- Android (Chrome, Edge, Firefox): vibration and sound. Chrome does not vibrate while the phone is set to **silent**, and the phone's own vibration setting has to be on.
- iPhone / iPad (Safari): there is no vibration API. iOS 18 and newer give a short haptic tick instead (one per vibration step); older iOS gives sound only.
- Every device: the element shakes with its vibration (unless the system asks for reduced motion).
- Browsers vibrate and play sound only after the first touch, click or key on the page; the viewer unlocks it then. A hover or state rule therefore comes after the first touch. A desktop PC never vibrates.
- Not vibrating? Turn on `localStorage['mywebui.feedback.debug'] = '1'` and reload: the console shows every feedback, and `vibrated: false` when the browser refused it.

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
