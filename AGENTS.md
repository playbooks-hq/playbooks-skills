# AGENTS

## Overview

Portable developer skills for Playbooks.

This file governs contributions to `playbooks-skills`. Read applicable parent instructions before working here.

## Project Context

Read the README and inspect the package commands, source organization, and nearest existing implementation before making changes. Follow any shared workspace context and contracts referenced by the applicable parent instructions.

## Collaboration

Build with the existing architecture and conventions. Prefer focused changes with explicit ownership. Preserve unrelated local work and avoid speculative abstractions or features. Resolve material ambiguity before making dependent changes.

## Workspace Boundaries

Keep mutations within the requested project and scope. Sibling repositories may be read for context; changing them requires explicit user authorization. Read a project's own instructions before working in it.

Use the existing local environment. Do not create replacement infrastructure, run migrations, publish, or deploy without applicable authorization. Keep credentials out of source, logs, and reports.

## Validation

Run the project's applicable lint, type, build, and existing validation commands. Follow the workspace's test ownership and authoring policy; do not invent a test suite or infrastructure during scaffolding. Report checks that could not run and prerequisites that are missing.

## Documentation and Working Notes

Keep the README focused on the project's purpose, prerequisites, setup, and essential usage and development commands. Keep agent contribution instructions here rather than turning the README into an application manual.

Do not create a `docs/` directory or other documentation artifacts unless explicitly requested. Keep plans, progress notes, audits, handoffs, and completion reports in the conversation. Preserve existing documentation and its ownership rules.

Edit src/skills and src/shared, then run npm run build and include the resulting skills directories. Keep every installed reference inside its skill. When contributing from the Playbooks workspace, read ../playbooks-harness/src/about/ and select contracts through ../playbooks-harness/src/resources.md. Check public claims against the documented API and the MCP client. Installed skills must work without access to sibling repositories.
