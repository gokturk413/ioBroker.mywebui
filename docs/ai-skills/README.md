# mywebui skills for AI coding agents

Skills that teach an AI coding agent (Claude Code, Gemini CLI, OpenAI Codex, and others that read
the [Agent Skills](https://agentskills.io) format) how to build for mywebui: custom controls,
template directives, bindings, npm widgets, translations, theming, screens, scripts, server
scripts, reports, security, marketplace packages and the developer bridge.

Each folder is one skill: a `SKILL.md` with a short description that tells the agent when to load
it, plus reference files the agent opens only when needed. Start with `mywebui-development`. It
routes to the others.

| Skill | For |
|---|---|
| [mywebui-development](mywebui-development/SKILL.md) | overview, storage, names, rules, which skill to use |
| [mywebui-custom-controls](mywebui-custom-controls/SKILL.md) | `.control` files ([example](mywebui-custom-controls/example-tank-level.control)) |
| [mywebui-template-directives](mywebui-template-directives/SKILL.md) | `[[…]]`, `if`, `switch`, `repeat:`, `for:`, `ref:`, `history:` |
| [mywebui-bindings](mywebui-bindings/SKILL.md) | `bind-*`, sources, two-way, animations, effects, write feedback |
| [mywebui-npm-widgets](mywebui-npm-widgets/SKILL.md) | npm packages of web components (Lit, BaseCustomWebComponent) |
| [mywebui-translations](mywebui-translations/SKILL.md) | `<t-t>`, `IOB.t`, dictionaries, language switching |
| [mywebui-theming](mywebui-theming/SKILL.md) | `--ui-*` tokens, themes |
| [mywebui-screens](mywebui-screens/SKILL.md) | screens, layout, transitions, navigation, multi-view |
| [mywebui-scripting](mywebui-scripting/SKILL.md) | Simple Script, `IOB.api`, the browser `IOB` API |
| [mywebui-server-scripts](mywebui-server-scripts/SKILL.md) | JavaScript on the server |
| [mywebui-reports](mywebui-reports/SKILL.md) | reports, history, charts, generated files |
| [mywebui-security](mywebui-security/SKILL.md) | roles, areas, secure writes, Confirm & Protect |
| [mywebui-marketplace](mywebui-marketplace/SKILL.md) | `.mwpkg`, signing, publishing, licence keys |
| [mywebui-developer-bridge](mywebui-developer-bridge/SKILL.md) | tools that drive the designer |

## Install

Copy the skill folders (not this README) into the folder your agent reads. Project folders apply
to one repository. Personal folders apply to everything you open.

| Agent | Project folder | Personal folder |
|---|---|---|
| Claude Code | `.claude/skills/` | `~/.claude/skills/` |
| Gemini CLI | `.gemini/skills/` or `.agents/skills/` | `~/.gemini/skills/` or `~/.agents/skills/` |
| OpenAI Codex | `.agents/skills/` | `~/.codex/skills/` or `~/.agents/skills/` |

The skills ship with the adapter (`node_modules/iobroker.mywebui/docs/ai-skills/`) and are in the
public repository. From a project that has the adapter installed:

```bash
# Claude Code, this project
mkdir -p .claude/skills && cp -r node_modules/iobroker.mywebui/docs/ai-skills/mywebui-* .claude/skills/
# any agent that reads .agents/skills
mkdir -p .agents/skills && cp -r node_modules/iobroker.mywebui/docs/ai-skills/mywebui-* .agents/skills/
```

```powershell
# Windows, Claude Code, personal
Copy-Item -Recurse node_modules\iobroker.mywebui\docs\ai-skills\mywebui-* $HOME\.claude\skills\
```

Chat apps:

- **Claude apps:** zip one skill folder and upload it under Skills.
- **ChatGPT and other chats without skill support:** add the `SKILL.md` files and their reference
  files to the project or conversation as knowledge files.

## Keeping them true

The skills summarise the guides in [`docs/`](../README.md) for the version they ship with. When a
skill and a guide disagree, the guide wins, and the skill should be fixed in the same change.
`node test/ai-skills.mjs` checks the format: names, descriptions, and that every linked file exists.
