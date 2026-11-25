---
name: playbooks-sites
description: Inspect and operate a Playbooks production Site. Use to find what is live, review a release candidate, deploy a saved revision, diagnose production traffic, or recover a retained release.
---

A Site is a production destination with its own releases, configuration, visitor access, and data. A Project can have a working preview and multiple connected Sites. Identify the intended Site before interpreting “ship it” or “roll it back.” See [resource ownership](references/resource-model.md) and [MCP setup](references/using-playbooks-mcp.md).

## Find what is live

Resolve the Workspace with `playbooks_workspace_list` and pass its returned `uuid` as `workspace`. Use `playbooks_sites` to list authorized Sites independently of Project access. An empty list means the caller can see no Sites in that Workspace. Workspace membership or access to a source Project alone does not establish a Site grant. For a known Site, resolve its owning Workspace and ask the owner for Viewer access if needed. When starting with a known Project, `playbooks_project_sites` lists its authorized Site connections. Resolve ambiguous destinations with the developer. Use the Site UUID with `playbooks_site` to inspect health, source, current release, and management capabilities. These tools use the default `core` toolset. Check exact inputs with `playbooks_help`.

Inspect provenance and status with `playbooks_site_release` using the selected release UUID. For a production issue, scope `playbooks_site_logs` to the affected release and time window. Use `playbooks_site_analytics` for traffic, response statuses, and latency. Report the observed release, time range, and relevant evidence. A preview image alone cannot confirm production health.

## Review and deploy a revision

1. Read `playbooks_site_source` and `playbooks_site_release-options` for the selected Site. Identify the eligible saved revision and component. If the developer requested a review, stop after preflight and report readiness or blockers.
2. Use `playbooks_site_preflight` to review the exact source, component, current release, and Site configuration revision. Surface any blockers and confirm the intended destination and revision for a production change.
3. For an authorized release, pass the reviewed values to `playbooks_site_deploy` with a stable request ID and the required confirmation. If a revision has changed, repeat preflight and review what changed before proceeding. After an uncertain response, inspect Site releases before retrying the same request.
4. Use the receipt’s release UUID with `playbooks_site_release` to follow the operation. Read the Site again to verify which release is serving. Report a failed or pending attempt separately from the active release.

## Recover a retained release

Use `playbooks_site_releases` to identify the exact retained release and read the currently serving release. Choose the operation based on the requested outcome. Redeploy uses retained content with validated **current Site configuration**; submit the retained release ID, expected current release ID, configuration revision and stable request ID. Rollback restores an eligible retained release and preserves application data; submit the selected release ID and expected current release ID. Inspect the connected schemas for `playbooks_site_redeploy` or `playbooks_site_rollback`, obtain authorization for the reviewed change, and verify its receipt and serving release as above.

## Worked request

> Is the version we approved yesterday live on the customer portal?

Resolve the customer portal Site and read its current release UUID. Open that release and compare its source revision and component with the approval evidence. If they differ, inspect release history to see whether the approved revision is pending, failed, previously served, or absent from the visible history. If “yesterday” identifies several candidates, ask which revision was approved. Return the Site, active release, and comparison. This question can be answered through read-only tools.
