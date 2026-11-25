# Connecting and selecting targets

Use Node.js 22.12+ and compatible Playbooks CLI and MCP releases. Authenticate the CLI outside the conversation with a scoped developer API key. Run playbooks login, then playbooks status. Register the local stdio server with playbooks mcp install codex (or claude, cursor, vscode) and reconnect the client. Keep tokens in CLI configuration or a secret manager.

Inspect playbooks_help for enabled tools and their input schemas. Default toolsets are core, operator, and discovery. Project configuration and source operations may require project. Explicit --toolsets replaces the defaults, so retain the groups needed for the task. Restart the MCP connection after changing its configuration. A read-only connection filters out mutations. Server permissions still govern access.

Use playbooks_workspace_list for authorized Workspace IDs. Private operations take an explicit workspace and existing Project operations take project as well. Resolve ambiguous names with the developer. Review the target and requested effects before passing confirm. Preserve a reviewed revision or idempotency key when the schema requires it. After an uncertain write, inspect the resulting state before retrying.

Use the [public reference](https://www.playbooks.ai/reference) for API consumers and the [documentation index](https://www.playbooks.ai/docs/llms.txt) for product guides.
