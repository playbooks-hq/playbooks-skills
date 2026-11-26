---
name: playbooks-marketplace
description: Browse the Playbooks Marketplace, compare public Templates and Collections, inspect versions and setup, and remix a chosen version into a Workspace.
---

Ask what the recipient should receive. A Template lets the recipient remix an independent resource. An invitation grants access to the same resource, and a Site release serves an application. See [the resource model](references/resource-model.md) and [MCP setup](references/using-playbooks-mcp.md).

## Discover and remix

Search public listings with `playbooks_templates`, then inspect the chosen listing with `playbooks_template`. The default `discovery` toolset handles public discovery. Owned drafts, publishing, and remix operations require the optional `templates` toolset. Check the connected schemas with `playbooks_help`; keep existing groups when enabling another.

For an authorized Chat, Project, or Agent remix, resolve the destination Workspace with `playbooks_workspace_list`. Use its returned `uuid` as `workspace`. Identify the exact published version and review any required setup before creating the resource. Call `playbooks_workspace_template_remix` with the Template identifier, `data.versionId`, a stable `data.idempotencyKey`, and confirmation for the intended destination. Inspect the returned resource and report its identifier and remaining setup. Reconcile an uncertain response before retrying with the same key. Workspace Template remix is available through Explore in the app.

For an adopted Chat, inspect `playbooks_workspace_chat_template_setup`. Read individual Files, Designs, or Skills with `playbooks_workspace_chat_template_item` using keys from that inventory. If the developer requests import, review the exact items and use the confirmed import operation with the selected keys, acknowledgment and a stable idempotency key. Configure connectors and MCP connections separately using the recipient’s authorized credentials.

## Compare candidates

Ask what the developer wants to build and which Workspace will receive it. Compare kind, publisher, version, included resources, permissions and remaining setup. Search public Collections with the discovery listing tool `playbooks_collections` to find collections matching the request. Saving a listing for later or organizing a Workspace Collection belongs in the selected Workspace’s Library in the app. Remix only when the developer asks for an independent resource.

For a publishing request, start from the owning Chat, Agent, Project, Workflow or Workspace. Follow [source review and publication](references/marketplace-publication.md).
