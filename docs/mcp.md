# AI agents (MCP)

AI coding agents (Claude Code, Gemini CLI, OpenAI Codex, …) work on mywebui through the MCP server
**`@gokturk413/mywebui-mcp`**. It lists, reads, checks, creates and updates screens, controls and
reports, and (when allowed) creates projects. It also gives the agent the mywebui skills
([ai-skills/README.md](ai-skills/README.md)).

## Switch it on

Admin → mywebui instance → **AI agents (MCP)**:

| Setting | Default | |
|---|---|---|
| Allow AI agents (MCP) | off | without it every MCP call answers `disabled` |
| Dev projects (AI agents may write) | empty | e.g. `dev, agent-test`; every other project is read-only |
| Allow AI agents to create projects | off | a project an agent creates becomes writable for agents |

The agent signs in as an ioBroker **administrator**, through web.0 (the gateway `POST /mywebui-api`),
so the user comes from the web session. Use a separate administrator user for agents.

**web.0 authentication is required**: without it (web.0 → Authentication) web.0 answers HTTP 403 to
every MCP call.

**Behind a proxy**, allow request bodies of 6 MiB for the gateway. A write can be that large, and
nginx's default `client_max_body_size` of 1 MiB answers 413.

## What it can and cannot do

- Reads every project's screens, controls and reports, and the global controls.
- Writes screens, controls and reports only into the dev projects. Global controls are read-only.
- Can look up states (`id`, name, type, role, unit, writable) to bind them. The pattern must begin
  with an adapter and instance (`modbus.0.*`, `0_userdata.0.*`).
- Every write is checked like the designer's save (a control's fields and property types, no `debugger;`)
  and scanned (eval, network, cookies, state writes, sendTo …); the findings come back to the agent.
- Every write keeps the previous file in `<project>/data/.mcp-backup/<kind>s/<name>.<time>.<kind>` (the
  newest 10 per document, none if the content did not change), and is recorded in the journal
  (`mcpWrite`, `mcpCreateProject`) and the adapter log. A backup above 512 KiB is gzipped although it keeps
  its `.screen`, `.control` or `.report` name.
- A write names the version it read (`baseSha256`); if the file changed since, it answers `conflict`.
  Writes into one project run one at a time. A write that waited more than 55 s for its turn is not done
  and answers `failed`: read the document again before writing again.

### State writes

"Never writes a state" holds for the MCP channel: no MCP command writes one. But a screen or control an
agent writes can call `IOB.setState` or use two-way bindings, and that code runs with the rights of
whoever opens the page. That is why agents write only into dev projects.

Script calls (`IOB.setState`, `sendTo`), two-way bindings and Simple Script write commands come back as a
finding (`writes`, `sendto`), a warning for the agent; it does not stop the write. The scan is a text
heuristic and not a proof: a script that builds its call dynamically can escape it. Review what an agent
wrote before you copy it into a plant project.

### Open pages

Runtime pages of the same project refresh after an agent's write; pages of other projects ignore it, so a
write to `dev` does not reload a plant page. The refresh is best effort: if it gets no answer within 10 s,
the write still counts and its answer carries a warning. Closed documents show the new content when they are opened.

An open designer tab does not reload an agent's write, and a later save in that tab overwrites it. Close
the document in the designer, or reopen it, before an agent works on it.

### What only the designer does

- A report's output, schedule and trigger can only be set in the designer, because they make the server
  write and delete files and run by itself. A write that sets or changes `settings.output`,
  `settings.schedule` or `settings.trigger` answers `invalid`. An update that keeps them may change
  everything else in the report.
- A screen written by an agent is not in the multi-view index, and a control gets no thumbnail, until it
  is saved once in the designer.

### Legacy controls

Older controls may use the property type `ioBrokerObject` or still contain a `debugger;`. They can be read,
but writing them back is refused with `invalid` and the reason. The agent has to replace the type or remove
the statement.

## Answers

A refusal is `{ ok: false, code, reason }`:

| Code | Means |
|---|---|
| `disabled` | the MCP is off in the admin |
| `gateway-required` | the call did not come through web.0's gateway |
| `denied` | not an administrator, or creating projects is off |
| `bad-request` | a bad project, kind, name, pattern or command |
| `not-found` | the document does not exist |
| `read-only` | the project is not a dev project, or the control is global |
| `conflict` | the file changed since `baseSha256` was read |
| `invalid` | the content cannot be stored, with the reason |
| `exists` | a project of that name, or files in its storage, already exist |
| `license-restricted` | the licence does not allow engineering (reads still work) |
| `failed` | anything else, with the reason (a file error, too many writes waiting, or a write that waited too long) |

## Connect an agent

See the package's README. In short, Claude Code:

```bash
claude mcp add mywebui -e MYWEBUI_URL=https://scada:9090 -e MYWEBUI_USER=agent -e MYWEBUI_PASSWORD=… -- npx -y @gokturk413/mywebui-mcp
```

The password belongs in the agent's environment, never in a repository.
