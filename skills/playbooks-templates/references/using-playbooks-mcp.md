# Connecting and selecting targets

Use Node.js 22.12+ and compatible Playbooks CLI and MCP releases. Authenticate outside the conversation. Run `playbooks login`, then `playbooks status`. With a CLI build that supports browser sign-in, review the account and requested access in Playbooks and return to the terminal. CLI 1.0.0 prompts for a scoped developer API key from Account settings. Register the local stdio server with `playbooks mcp install codex` (or `claude`, `cursor`, `vscode`) and reconnect the client. Keep tokens in CLI configuration or a secret manager.

The npm 1.0.0 clients cover basic Workspace and Project reads. Workflow drafts, retained Artifacts, and some Chat, Agent, Site, and Template operations need newer Clients code. The [public Clients staging branch](https://github.com/playbooks-hq/playbooks-clients/tree/staging) contains these changes. With a compatible source build, configure the editor to run that build's MCP executable alongside its matching CLI. The registration command above selects the npm MCP package.

Inspect playbooks_help for enabled tools and their input schemas. Default toolsets are core, operator, and discovery. Project configuration and source operations may require project. Explicit --toolsets replaces the defaults, so retain the groups needed for the task. Restart the MCP connection after changing its configuration. A read-only connection filters out mutations. Server permissions still govern access.

Use `playbooks_workspace_list` to find authorized Workspaces and pass the selected Workspace's returned `uuid` as `workspace`. Existing Project operations also take `project`. Resolve ambiguous names with the developer. Review the target and requested effects before passing `confirm`. Preserve a reviewed revision or idempotency key when the schema requires it. After an uncertain write, inspect the resulting state before retrying.

Use the [public reference](https://www.playbooks.ai/reference) for API consumers and the [documentation index](https://www.playbooks.ai/docs/llms.txt) for product guides.
