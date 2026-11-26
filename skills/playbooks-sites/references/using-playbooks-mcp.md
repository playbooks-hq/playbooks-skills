# Connecting and selecting targets

Install the Playbooks CLI with `npm install --global @playbooks/cli@^1.1.0` on Node.js 22.12 or newer. The skills installer requires Node.js 22.20 or newer. Authenticate outside the conversation with `playbooks login`, complete browser sign-in, and run `playbooks status`. Register the stdio server with `playbooks mcp install codex` (or `claude`, `cursor`, `vscode`). Keep tokens in CLI configuration or a secret manager.

For Workflow and Artifact tools in Codex, use this argument list in the existing `[mcp_servers.playbooks]` entry in `~/.codex/config.toml`, then reconnect:

```toml
args = ["-y", "@playbooks/mcp@^1.1.0", "--toolsets", "core,operator,discovery,workspace,project"]
```

Inspect playbooks_help for enabled tools and their input schemas. Default toolsets are core, operator, and discovery. Project configuration and source operations may require project. Explicit --toolsets replaces the defaults, so retain the groups needed for the task. Restart the MCP connection after changing its configuration. A read-only connection filters out mutations. Server permissions still govern access.

Use `playbooks_workspace_list` to find authorized Workspaces and pass the selected Workspace's returned `uuid` as `workspace`. Existing Project operations also take `project`. Resolve ambiguous names with the developer. Review the target and requested effects before passing `confirm`. Preserve a reviewed revision or idempotency key when the schema requires it. After an uncertain write, inspect the resulting state before retrying.

Use the [public reference](https://www.playbooks.ai/reference) for API consumers and the [documentation index](https://www.playbooks.ai/docs/llms.txt) for product guides.
