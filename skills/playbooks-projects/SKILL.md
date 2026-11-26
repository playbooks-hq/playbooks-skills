---
name: playbooks-projects
description: Inspect or develop a Playbooks Project from an editor. Use for listing Projects, reviewing source or configuration, submitting Project Operator work, and following runs to a working preview. Use for spending questions and publishing this resource to the Marketplace.
---

Read [the MCP guide](references/using-playbooks-mcp.md) before calling tools. Consult [the resource model](references/resource-model.md) for sharing, production releases, and retained outputs.

1. Resolve the Workspace with `playbooks_workspace_list`. Pass its returned `uuid` as `workspace` to `playbooks_projects`. Match the requested Project and carry the Workspace UUID and Project identifier into subsequent operations.
2. For inspection, discover the enabled tool and schema through playbooks_help. Project Git source uses playbooks_project_source. A supplied Source uses playbooks_project_source_get. For missing configuration tools, explain how to enable the project group while retaining the required defaults.
3. To submit authorized Operator work, use playbooks_project_message_create with workspace, project, and data containing the task text, intended mode, and a stable idempotencyKey. Review the target and usage-bearing action before setting confirm. Reconcile an uncertain response before resubmission.
4. Inspect the message receipt. Handle clarification, a queued message, or an identified execution attempt according to its actual state. Use playbooks_project_runs and playbooks_project_run to follow the selected attempt. Report its outcome, outstanding blockers, and any observed preview or revision. For a preview request, stop at the working preview.
5. For an explicit production publication request, inspect playbooks_project_preflight. Bind the authorized publish call to the reviewed expectedRevision and inspect the returned release with playbooks_project_release until its outcome is known. Report the release identity and observed state.

## Usage, budget and ledger

Use `playbooks_project_usage` and `playbooks_project_budget` for the selected Project. Report period, units, scope and observed limit. Before a requested change, show the current and proposed values. Use `playbooks_project_budget_update` with confirmation and the authorized fields, then reread the limit. Workspace limits still apply. For creator proceeds, inspect this Project’s Settings → Ledger in the app. For Workspace-wide credit movements, invoices, settlements or transfers, resolve the owning Workspace and use its corresponding financial tools. Attribute a transaction to this Project only when its record supports the link.

## Publish a Marketplace Template

Use `playbooks_workspace_project_template_draft` for the selected Project; `playbooks_workspace_project_template_create` creates or returns its draft. Review the saved default branch, portable source and included assigned or local resources. A request to publish a Marketplace starter uses the Template flow; a request to serve the application uses a Site release. Follow [source review and publication](references/marketplace-publication.md) through version and visibility verification.
