---
name: multi-file-pr-review-fixes
description: Workflow command scaffold for multi-file-pr-review-fixes in homeassconfig.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /multi-file-pr-review-fixes

Use this workflow when working on **multi-file-pr-review-fixes** in `homeassconfig`.

## Goal

Addresses multiple unresolved pull request review comments across several files in a single commit.

## Common Files

- `CONFIGURATION_SETUP.md`
- `WARP.md`
- `auth_providers.yaml`
- `automations.yaml`
- `govee_learning.yaml`
- `themes/visionos/Liquid Glass.yaml`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Review all unresolved PR comments.
- Apply fixes across all affected files.
- Commit all changes together with a message referencing the PR and review comments.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.