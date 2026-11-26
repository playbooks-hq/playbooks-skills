---
name: playbooks-workspaces
description: Manage a Playbooks Workspace from an editor. Use for membership and invitations, resource sharing, Workspace settings and connected resources, or questions about Workspace usage and budget. Use for budget changes, financial ledger records, Enterprise policies and Workspace Template publishing.
---

Resolve the target with `playbooks_workspace_list` and pass the selected record’s `uuid` as `workspace`. Ask which Workspace the developer means when names are ambiguous. Someone with direct access to a single resource can find their accepted grants through `playbooks_shared_resources`, including the owning Workspace.

Use `playbooks_help` to inspect the connected server’s toolsets and input schemas. Discovery works with `core`; the administrative operations below require the optional `workspace` group. When enabling it, retain the other groups the developer needs and reconnect. A read-only connection is sufficient for inspection. See [MCP setup and targeting](references/using-playbooks-mcp.md) and [resource ownership](references/resource-model.md).

## Membership and access

Use `playbooks_workspace_members` for membership and `playbooks_workspace_invitations` for pending invitations. Follow pagination before reporting a complete inventory. For access to one Chat, Agent, or Project, inspect that resource’s visibility, direct grants, and outstanding invitations. Use `playbooks_resource_members` and `playbooks_resource_invitations` with the owning Workspace, resource ID, and matching plural kind. A private resource may have direct collaborators. A Workspace-visible resource can also be accessible through membership.

For a membership lifecycle change, read `playbooks_workspace_member_governance` first. Explain the effect on owned resources and any blockers. Use the selected action’s required revision, recipient or typed name as applicable. If the revision changes, inspect governance again. Verify the resulting membership state and disposition of owned resources.

## Settings, connections, and usage

Use `playbooks_workspace_settings` for Workspace Operator defaults and instructions. For an authorized change, inspect the current settings, send only the requested fields through `playbooks_workspace_settings_update`, then read them back. Check a resource’s own settings when the question concerns its effective configuration. Public profile fields such as name and tagline belong to `playbooks_workspace_update`.

Use `playbooks_workspace_connectors` and `playbooks_workspace_mcps` to inventory configured connections. Use `playbooks_workspace_secrets` for metadata. Keep credentials in the app’s setup flow. Workspace skills returned by `playbooks_workspace_skills` are resources inside Playbooks; editor skills are installed in the developer’s environment.

For spend questions, inspect `playbooks_workspace_usage`, `playbooks_workspace_budget`, or `playbooks_workspace_credits` according to whether the developer needs consumption, a configured limit, or available credit. State the Workspace, period, and units supplied by the response. A request to explain spending authorizes a read.

## Budget and ledger

Read the current Workspace budget before a change. Show the requested credit limit, stop-new-work behavior, thresholds and recipients as applicable. Apply only the authorized fields with `playbooks_workspace_budget_update` and confirmation, then reread the budget. Explain which work the limit governs.

For “why did the balance change?”, start with the requested period and account. Page through `playbooks_workspace_credits` for credit movements, `playbooks_workspace_invoices` for invoices, `playbooks_workspace_settlements` and `playbooks_workspace_settlement` for settlement records, or `playbooks_workspace_transfers` for transfers. Report the returned date, amount, unit, reason, status and ID when available. Keep credits and currency separate; identify missing evidence and the range actually searched. Query Workspace Settings → Ledger in the app for the consolidated view. Use Workspace activity for operational events.

## Governance, publishing and Library

For Enterprise questions, establish the selected Workspace, entitlement and administrator capability. Inspect `playbooks_workspace_resource-retention` through the exact tool name returned by `playbooks_help`. Read the current policy before an authorized retention update and verify it afterward. Use Workspace settings in the app for MFA, SSO, zero data retention, Marketplace policy and audit history when the corresponding control is absent from the connected tools. Report only policies actually observed.

Publish a portable Workspace package from Workspace Settings → Marketplace. Review the included resources and their relationships, governance and setup with the owner. Follow [source review and publication](references/marketplace-publication.md). For saved Marketplace items, open Library in the selected Workspace to manage bookmarks and Collection membership. Confirm the intended Workspace before changing its curation.

## Worked request

> Give our client view access to the Launch Project only.

Resolve the Workspace, then use `playbooks_projects` to select Launch. Inspect its direct members and pending invitations with `kind: "projects"`. If the intended recipient already has access or a matching pending invitation, report what you found. Otherwise resolve the recipient email and role, then use `playbooks_resource_invite` with the reviewed target, schema-supported Viewer role and confirmation. Re-read the invitations and report whether the invitation is pending or access has been accepted. Keep Workspace membership unchanged.
