---
name: automated-fix-for-pull-request-findings
description: Workflow command scaffold for automated-fix-for-pull-request-findings in homeassconfig.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /automated-fix-for-pull-request-findings

Use this workflow when working on **automated-fix-for-pull-request-findings** in `homeassconfig`.

## Goal

Applies automated fixes in response to pull request review findings, typically by Copilot Autofix, targeting a single file per commit.

## Common Files

- `validate_config.sh`
- `ui_lovelace_minimalist/dashboard/ui-lovelace.yaml`
- `ui_lovelace_minimalist/dashboard/adaptive-dash/views/livingroom.yaml`
- `automations.yaml`
- `apply_area_assignments.py`
- `templates.yaml`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Receive pull request review with findings.
- Apply automated or manual fix to the identified file.
- Commit the change with a message referencing the pull request finding and Copilot Autofix.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.