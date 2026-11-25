---
name: playbooks-templates
description: Find, inspect, remix, and publish reusable Playbooks Templates. Use when a developer wants an independent starting point for a client, needs to review the contents of a draft, or wants to publish a new version.
---

Ask what the recipient should receive. A Template lets the recipient remix an independent resource. An invitation grants access to the same resource, and a Site release serves an application. See [the resource model](references/resource-model.md) and [MCP setup](references/using-playbooks-mcp.md).

## Discover and remix

Search public listings with `playbooks_templates`, then inspect the chosen listing with `playbooks_template`. The default `discovery` toolset handles public discovery. Owned drafts, publishing, and remix operations require the optional `templates` toolset. Check the connected schemas with `playbooks_help`; keep existing groups when enabling another.

For an authorized Chat, Project, or Agent remix, resolve the destination Workspace with `playbooks_workspace_list`. Use its returned `uuid` as `workspace`. Identify the exact published version and review any required setup before creating the resource. Call `playbooks_workspace_template_remix` with the Template identifier, `data.versionId`, a stable `data.idempotencyKey`, and confirmation for the intended destination. Inspect the returned resource and report its identifier and remaining setup. Reconcile an uncertain response before retrying with the same key. Workspace Template remix is available through Explore in the app.

For an adopted Chat, inspect `playbooks_workspace_chat_template_setup`. Read individual Files, Designs, or Skills with `playbooks_workspace_chat_template_item` using keys from that inventory. If the developer requests import, review the exact items and use the confirmed import operation with the selected keys, acknowledgment and a stable idempotency key. Configure connectors and MCP connections separately using the recipient’s authorized credentials.

## Review and publish

Resolve the source Workspace and resource. For a Chat, Project, or Agent, use the corresponding Workspace Template draft tool to look for an existing draft. For an authorized new draft, use the matching Template create tool. Use `playbooks_workspace_templates` to list owned Templates and `playbooks_workspace_template` to inspect a particular one.

If the Chat draft command returns “Unexpected positional arguments,” list owned Templates filtered by Chat kind and match the source Chat identifier before inspecting a draft. An argument error alone cannot establish that a draft is missing.

Use `playbooks_workspace_template_source` to inspect the current package inventory. For a Chat, review working file paths and checksums and any eligible linked Artifact editing assets. To inspect file contents, read the authorized source Chat’s File system and match the files to the draft inventory by checksum. For a Project, check the saved default branch and included assigned or local resources. For an Agent, check portable configuration and assigned resources; its working outputs stay with the original Agent. Review the intended public material and flag any client-specific data before requesting publication approval.

Use `playbooks_workspace_template_update` for authorized listing changes. After explicit human approval to publish the reviewed package, call `playbooks_workspace_template_publish` with confirmation and any requested release notes or version bump. The client binds the publication to source revisions. If the contents change, review them again. Read `playbooks_workspace_template_versions` and report the published version and visibility. Existing adopters keep the version they selected.

## Worked request

> Before we offer our onboarding Chat to the next client, show me what they would receive.

Find the source Chat and its owned draft. If it has a draft, inspect its package and listing. Report the included working files, any retained editing assets, and setup the recipient would still need. Identify client-specific content that needs review. If there is no draft, say so and explain that creating one is the next authoring step. A package review can end without publishing or creating a client resource.
