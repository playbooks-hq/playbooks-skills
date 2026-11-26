---
name: playbooks-extensions
description: Discover Workspace Files, Designs, Skills, Connectors and MCP servers, inspect their assignments, and verify what a Chat, Agent or Project can use.
---

Resolve the Workspace with `playbooks_workspace_list`. Ask which consuming resource needs the extension. Inspect [MCP setup](references/using-playbooks-mcp.md) and `playbooks_help` for enabled tools.

1. Inventory the relevant kind using `playbooks_workspace_files`, `playbooks_workspace_designs`, `playbooks_workspace_skills`, `playbooks_workspace_connectors` or `playbooks_workspace_mcps` in the workspace toolset. Report matching records and IDs. A managed File supplies scoped context; use the Chat File system for working output. A Playbooks Skill configures a platform Operator; editor skills install in the developer environment.
2. Check the consumer. Chats inherit Workspace configuration; report which effective settings you can actually inspect. For an Agent inspect `playbooks_agent_resources`, `playbooks_agent_resource_options` and, for permitted external operations, `playbooks_agent_externals`. For a Project inspect `playbooks_project_resources_state` and its applicable files, designs, skills, connectors or MCP inventory in the project toolset.
3. For a requested change, show the target, selected resource ID and effect. Inspect the exact mutation schema for the resource and kind. Preserve unrelated assignments and supply the reviewed revision where required. Reread effective assignments afterward. If setup requires an account connection or secret, hand off to the app and recheck readiness. An available or assigned connector alone does not establish authorization for a particular external action.
