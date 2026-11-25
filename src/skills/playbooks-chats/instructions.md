---
name: playbooks-chats
description: Find, create, and continue Playbooks Chats from an editor. Use to review a conversation, inspect supplied Sources or working files, submit a message to the Chat Operator, or follow a specific run to its result.
---

A Chat owns one conversation and a working File system. Use the [resource model](references/resource-model.md) to choose between conversational work, a programmable Agent, and a Project with a working preview. Consult [MCP setup and targeting](references/using-playbooks-mcp.md) for connection details. Chat operations use the optional `workspace` toolset. Inspect enabled schemas with `playbooks_help` and retain the needed default groups when enabling it.

## Find the conversation

Use `playbooks_workspace_list` and pass the selected Workspace’s returned `uuid` as `workspace`. Search by name with `playbooks_workspace_chats`. Check archived Chats if the developer is looking for an older one. Resolve ambiguous matches before writing. Read `playbooks_workspace_chat` for the Chat UUID, its conversation UUID, current revision, and capabilities. Use the returned Chat and conversation identifiers in their respective fields.

To start a new Chat, use `playbooks_workspace_chat_create` with the requested name and a stable idempotency key. Creation gives the developer an empty conversation. Send a message when they want the Operator to start work.

## Read or continue a Chat

Read `playbooks_workspace_messages` with `workspace`, `chat`, and `conversation`. Follow `meta.nextCursor` for earlier context as needed. A history read preserves unread state. If asked to mark the conversation read, pass the returned observation time and the last reviewed message ID to `playbooks_workspace_chat_conversation_read` for the same targets.

For an authorized Operator request, submit `playbooks_workspace_message_create` with the same targets, the task text, and a stable `data.idempotencyKey`. Confirm the intended action and its possible usage before passing `confirm: true`. If the response is uncertain, inspect the conversation before retrying the same request. Read the returned message for a result, clarification request, or run reference. Use `playbooks_workspace_runs` to find attempts for that message, then `playbooks_workspace_run` with the Workspace UUID and the selected numeric run ID. Report the observed output or outstanding decision; a queued receipt only establishes submission.

## Work with files and retained results

A Source is supplied input. Inspect the relevant Chat Source and its version before copying anything. A requested copy into the Chat File system needs the reviewed destination path and revision. Use `playbooks_workspace_chat_file-system_get` to inspect the working tree before a revision-bound replacement. A retained HTML experience has an Artifact ID and checkpoints; identify the exact checkpoint for a historical export. Use `playbooks_help` to discover the Chat Source and Artifact tools on the current connection.

For Chat lifecycle changes, use `playbooks_workspace_chat_update` with the current revision. Archiving pauses its schedules, and restoration leaves them paused. Deletion requires the exact Chat name and removes its schedules. Re-read the Chat state after a change.

## Worked request

> In my Launch Review Chat, what did we decide about the rollout, and which parts still need approval?

Resolve the Workspace and Chat, read its conversation history, and follow the cursor until you find the decision and its replies. If a message refers to a saved Plan, inspect that revision with `playbooks_workspace_plan_get`. Report the agreed rollout, any open decision, and the message or Plan revision that supports each. This request can be answered with read-only tools.
