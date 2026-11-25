# Playbooks Skills

Use Playbooks from an MCP-enabled editor. Install the skill for your task or install the full set.

| Skill | Use it to |
| --- | --- |
| `playbooks` | Connect to Playbooks and find authorized Workspaces and resources. |
| `playbooks-workspaces` | Manage membership and sharing, inspect Workspace settings and connections, and review usage and budget. |
| `playbooks-chats` | Review Chat history, work with supplied files, and follow Operator requests to their results. |
| `playbooks-agents` | Configure reusable Agents, review caller and resource grants, and follow executions. |
| `playbooks-projects` | Inspect a Project and work with its Operator. |
| `playbooks-workflows` | Inspect, create, and revise Workflow drafts, then open the app to run or activate them. |
| `playbooks-artifacts` | Locate, prepare, and export exact saved Artifact checkpoints. |

Each specialist includes the connection and resource guidance it needs to work on its own.

## Install

Use Node.js 22.20 or newer. Install the Playbooks CLI, sign in, and register MCP for your editor.

```sh
npm install --global @playbooks/cli@^1
playbooks login
playbooks status
playbooks mcp install codex
```

If your CLI build supports browser sign-in, review and allow access in Playbooks, then return to the terminal. CLI 1.0.0 prompts for a scoped developer API key from Account settings. For Claude Code, use `playbooks mcp install claude`. Reconnect your editor after registration.

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
