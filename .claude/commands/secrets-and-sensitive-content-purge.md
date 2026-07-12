---
name: secrets-and-sensitive-content-purge
description: Workflow command scaffold for secrets-and-sensitive-content-purge in homeassconfig.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /secrets-and-sensitive-content-purge

Use this workflow when working on **secrets-and-sensitive-content-purge** in `homeassconfig`.

## Goal

Removes leaked secrets, credentials, and sensitive community content from the repository, updates .gitignore, and documents the rotation process.

## Common Files

- `.gitignore`
- `SECRETS_ROTATION.md`
- `various sensitive files (e.g., *.pem, .storage_backup_before_recovery/, theme packs, blueprints, logs)`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Identify and remove all files containing secrets or sensitive data.
- Update .gitignore to prevent future leaks.
- Add documentation (e.g., SECRETS_ROTATION.md) with rotation and cleanup procedures.
- Commit all removals and documentation updates.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.