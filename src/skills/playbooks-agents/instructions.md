---
name: playbooks-agents
description: Configure and operate reusable Playbooks Workspace Agents. Use to inspect Agent permissions and assigned resources, connect a calling application, continue an Agent conversation, or follow an Agent execution and its results. Use for spending questions and publishing this resource to the Marketplace.
---

A Workspace Agent is a programmable worker with its own configuration, conversations, grants, and attributable usage. For a temporary helper inside one conversation, use that conversation’s Sub-agent tools. See [resource ownership](references/resource-model.md) and [MCP setup](references/using-playbooks-mcp.md).

## Select and configure an Agent

Resolve the owning Workspace with `playbooks_workspace_list` and use its returned `uuid` as `workspace`. List Agents with `playbooks_agents`, resolve ambiguous names, and read the selected record with `playbooks_agent`. Carry its returned identifier as `agent`. The default `core` toolset covers discovery, configuration, invocation, schedules, and execution inspection. Conversations, grants, credential metadata, and budget inspection require the optional `workspace` toolset. Check the enabled input schemas with `playbooks_help`.

For a new worker, use `playbooks_agent_create` with its purpose, configuration, and a stable idempotency key. For an edit, read the current configuration, submit the requested change with its revision through `playbooks_agent_update`, and verify the saved record. Associating an Agent with a Project or Site organizes the worker. Review runtime access and application grants separately before claiming the application can invoke it.

## Inspect access in both directions

- **Who may call the Agent?** Inspect direct human grants for the Agent through the resource access tools. Use `playbooks_agent_applications` for application roles. For a Project or Site caller, also inspect its runtime Agent access. When updating application roles, read the complete current grants and revision: the update replaces the grant list. Preserve unrelated callers.
- **What may the Agent use?** Inspect `playbooks_agent_resources` for assigned resources and `playbooks_agent_externals` for authorized external operations. Use the available options for that Agent when assigning a resource or granting operations. Inspect credential metadata through `playbooks_agent_credentials`; keep credential values out of the conversation. Check `playbooks_agent_budget` when the request depends on a spending limit.

## Execute or review work

For an explicitly requested one-off execution, review the Agent, instruction, and usage-bearing action. Call `playbooks_agent_invoke` with a stable idempotency key and the required confirmation. Inspect the returned execution identifier with `playbooks_agent_execution`. After an uncertain submission, reconcile with `playbooks_agent_executions` before retrying. Report the observed state, output or blocker; a receipt alone establishes admission.

For an ongoing conversation, select it through `playbooks_agent_conversations` and inspect its messages. Creating an empty conversation and sending a message are separate actions. Sending work with `playbooks_agent_conversation_send` can incur usage. For recurring work, review instructions, timezone, references and timing. Each occurrence starts a fresh Agent conversation. Use `playbooks_agent_schedule_occurrences` to find the outcome of a particular occurrence.

## Usage, budget and ledger

Use `playbooks_agent_usage` and `playbooks_agent_budget` for the selected Agent. Report period, units, scope and observed limit. Before a requested change, show the current and proposed values. Use `playbooks_agent_budget_update` with the current revision and the authorized fields, then reread the limit. Workspace limits still apply. For creator proceeds, inspect this Agent’s Settings → Ledger in the app. For Workspace-wide credit movements, invoices, settlements or transfers, resolve the owning Workspace and use its corresponding financial tools. Attribute a transaction to this Agent only when its record supports the link.

## Publish a Marketplace Template

Use `playbooks_workspace_agent_template_draft` for the selected Agent; `playbooks_workspace_agent_template_create` creates or returns its draft. Review portable configuration, assignments and recipient setup. Keep original working outputs, application grants and credentials outside the recipient’s setup. Follow [source review and publication](references/marketplace-publication.md) through version and visibility verification.

## Worked request

> Can our Pricing Project call the Quote Review Agent, and what happened on its last execution?

Resolve both resources in the selected Workspace. Inspect the Project’s runtime access with `playbooks_project_agent-access` and the Agent’s application roles with `playbooks_agent_applications`. Identify which grant covers the caller or which access is missing. List executions, select the latest by its returned timestamp, and inspect its details with the same Agent and execution ID. Report the access evidence and last observed outcome. If there are no visible executions, say so. This inspection requires no new invocation or credential rotation.
