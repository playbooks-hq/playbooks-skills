---
name: playbooks-projects
description: Inspect or develop a Playbooks Project from an editor. Use for listing Projects, reviewing source or configuration, submitting Project Operator work, and following runs to a working preview.
---

Read [the MCP guide](references/using-playbooks-mcp.md) before calling tools. Consult [the resource model](references/resource-model.md) for sharing, production releases, and retained outputs.

1. Resolve the Workspace with playbooks_workspace_list. Call playbooks_projects with its workspace ID. Match the requested Project and carry both IDs into subsequent operations.
2. For inspection, discover the enabled tool and schema through playbooks_help. Project Git source uses playbooks_project_source. A supplied Source uses playbooks_project_source_get. For missing configuration tools, explain how to enable the project group while retaining the required defaults.
3. To submit authorized Operator work, use playbooks_project_message_create with workspace, project, and data containing the task text, intended mode, and a stable idempotencyKey. Review the target and usage-bearing action before setting confirm. Reconcile an uncertain response before resubmission.
4. Inspect the message receipt. Handle clarification, a queued message, or an identified execution attempt according to its actual state. Use playbooks_project_runs and playbooks_project_run to follow the selected attempt. Report its outcome, outstanding blockers, and any observed preview or revision. For a preview request, stop at the working preview.
5. For an explicit production publication request, inspect playbooks_project_preflight. Bind the authorized publish call to the reviewed expectedRevision and inspect the returned release with playbooks_project_release until its outcome is known. Report the release identity and observed state.
