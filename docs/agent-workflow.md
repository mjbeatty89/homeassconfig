# Agent Workflow

## Default pattern

1. Create a branch or worktree from this repo.
2. Edit only inside the local repo.
3. Run `scripts/validate-ha-config.sh`.
4. Review diffs.
5. Deploy with `scripts/deploy-ha.sh` when ready.

## Multi-agent guardrails

- One deploy at a time.
- Many branches/worktrees are fine; one live target sync is not.
- Prefer scoped edits:
  - `packages/`
  - `dashboards/`
  - `agents/`
  - specific `custom_components/`

## Red zones

- `.storage/`
- `secrets.yaml`
- cert files
- runtime logs
- anything only available from a temporary mount unless we are explicitly doing
  a rescue import
