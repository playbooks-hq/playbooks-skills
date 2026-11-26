# Playbooks Skills

Use Playbooks from an MCP-enabled editor. Install the skill for your task or install the full set.

| Skill | Use it to |
| --- | --- |
| `playbooks` | Connect to Playbooks and find authorized Workspaces and resources. |
| `playbooks-workspaces` | Manage membership and sharing, inspect Workspace settings and connections, and review usage and budget. |
| `playbooks-chats` | Review Chat history, work with supplied files, and follow Operator requests to their results. |
| `playbooks-agents` | Configure reusable Agents, review caller and resource grants, and follow executions. |
| `playbooks-projects` | Inspect a Project and work with its Operator. |
| `playbooks-sites` | Inspect production Sites, review and deploy revisions, and recover retained releases. |
| `playbooks-marketplace` | Browse public listings and Collections, compare versions, and remix a Template. |
| `playbooks-extensions` | Discover Files, Designs, Skills, Connectors and MCP servers and verify resource assignments. |
| `playbooks-workflows` | Inspect, create, and revise Workflow drafts, then open the app to run or activate them. |
| `playbooks-artifacts` | Locate, prepare, and export exact saved Artifact checkpoints. |

Marketplace replaces the previous `playbooks-templates` install. Install `playbooks-marketplace` for discovery and remix, and use the source resource’s skill for publication.

Each specialist includes the connection and resource guidance it needs to work on its own.

## Install

Use Node.js 22.20 or newer. Install the Playbooks CLI, sign in, and register MCP for your editor.

```sh
npm install --global @playbooks/cli@^1.1.0
playbooks login
playbooks status
playbooks mcp install codex
```

Complete browser sign-in and return to the terminal. For Claude Code, use `playbooks mcp install claude`.

To use Workflows and Artifacts in Codex, set the `args` line in the existing `[mcp_servers.playbooks]` section of `~/.codex/config.toml` to:

```toml
args = ["-y", "@playbooks/mcp@^1.1.0", "--toolsets", "core,operator,discovery,workspace,project"]
```

Reconnect Codex and use `playbooks_help` to inspect the available tools. The `workspace` group includes Workflow drafts and Chat Artifacts. Project Artifacts require `project`, and Agent Artifacts use `core`.

Run one of the following commands from the project where you want the skills installed. Replace `playbooks-workflows` with any name in the table, or use `--agent claude-code` for Claude Code.

```sh
npx skills add playbooks-hq/playbooks-skills --skill playbooks-workflows --agent codex --copy --yes
npx skills add playbooks-hq/playbooks-skills --skill '*' --agent codex --copy --yes
```

Try “Show my authorized Playbooks Workspaces, then list the Projects in the one I choose.”

## Maintain

Edit the Markdown in `src` and run `npm run build`. Include the generated `skills` directories in the same change. To verify a local checkout before publishing, replace `playbooks-hq/playbooks-skills` in the install command with the checkout's absolute path.

Base Scaffold supplies the Git workflow. With an origin and existing dev and main branches, `npm run commit -- "Message"` commits and pushes dev. From a clean tree, `npm run deploy` merges dev into main, pushes main, and returns to dev.

## License

[MIT](LICENSE)
