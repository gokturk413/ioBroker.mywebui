# License Setup

mywebui runs in one of three editions. You do not need to do anything to start
using it — installing the adapter is enough.

| Edition | What you get | How to get it |
|---|---|---|
| **Trial** | Everything, for 30 days | Automatic on first start |
| **Free** | Up to 25 tags, 1 project, 3 screens and 2 custom controls | Automatic when the trial ends |
| **Licensed** | Everything, no limits | Enter a license key |

The trial starts by itself the first time the adapter runs. When it ends the
adapter keeps working — it simply moves to the Free edition and applies the
limits above. Nothing is deleted, and screens you already have stay viewable.

## Checking your edition

The adapter logs its edition on every start:

```
License: professional (trial 23d) — Trial: 23 day(s) left | HW whid2-...
License: free — Free edition | HW whid2-...
```

The designer also shows the current usage — how many tags, screens and controls
a project uses against its limits — in the browser console.

## Entering a license key

1. Open **Admin → Instances → mywebui → Settings**
2. Paste the key into the **License Key** field
3. Save; the adapter restarts and picks it up

A key is issued for a specific machine and carries that machine's **Hardware
ID**, which the adapter prints in its log and shows in the same settings page.
Send that ID when requesting a key.

If you move the installation to a different server, the old key will not
validate there — the hardware differs. Request a key for the new machine.

## If a project exceeds the Free limits

When an audit first finds a project over its limits you get a **2-day grace
period**: a warning in the log and in the designer, but nothing is blocked. That
window exists so a running plant is never cut off without notice.

If the overage is still there when the grace period ends, the adapter enters a
locked state: writes from the UI, widget deployment and screens beyond the limit
are refused. **Viewing already-allowed screens keeps working and nothing is ever
deleted.**

Bringing usage back within the limits *during* the grace period clears the
warning by itself. Once the period has ended, a valid license key is what
restores full use.

## Troubleshooting

**"License validation failed" / the key is not accepted**
Check that the key was issued for this machine's Hardware ID, and that it was
pasted in full — keys are long and easy to truncate.

**The Hardware ID changed after a hardware or OS change**
It is derived from stable machine characteristics, so replacing a network
adapter or migrating a VM can change it. Request a key for the new ID.

**The trial says it has ended sooner than expected**
The trial is bound to the machine and to real elapsed time. Moving the system
clock backwards does not extend it — the adapter treats that as the trial being
over.

## Questions

Open an issue at
<https://github.com/gokturk413/ioBroker.mywebui/issues>.
