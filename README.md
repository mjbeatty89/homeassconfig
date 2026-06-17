# Home Assistant Config

Canonical local repository for Matt's Home Assistant configuration.

## Model

This repository is the source of truth.

- Edit and review here first.
- Validate before deploy.
- Sync one-way to Home Assistant `/config`.
- Treat the live HA filesystem as a deploy target, not a workspace.

## Current Recovery Status

This repo was bootstrapped from a rescued local snapshot after the Samba-backed
`/Volumes/config` mount became unreliable during HA memory-leak triage.

Recovered safely:

- `custom_components/`
- `appdaemon/`
- `docs/`
- partial support files such as `auth_providers.yaml`

Not yet recovered into this canonical repo:

- `configuration.yaml`
- `automations.yaml`
- `scripts.yaml`
- `scenes.yaml`
- `templates.yaml`
- `.storage/` state that may still be needed for targeted cleanup

Because of that, deploy scripts intentionally refuse to push until the top-level
YAML orchestrators are present.

## Layout

- `docs/`: migration notes, triage notes, workflow docs
- `scripts/`: validation, rescue import, deploy tooling
- `custom_components/`: versioned custom integrations worth reviewing
- `packages/`: YAML packages that should be source-controlled
- `dashboards/`: YAML dashboards we intentionally version
- `agents/`: room-agent definitions and related metadata
- `.staging/`: transient local validation output
- `backups/`: local rescue snapshots created by scripts

## Recommended Workflow

1. Work in a branch or worktree.
2. Make changes in this repo.
3. Run `scripts/validate-ha-config.sh`.
4. If valid, run `scripts/deploy-ha.sh`.
5. Only use the HA Samba share for emergency recovery or comparison.

## First Recovery Step

When the HA config share is available again, run:

```bash
/Volumes/mm2ssd/mjb/dev/home-assistant-config/scripts/rescue-import-from-mount.sh
```

That will import the missing top-level YAML files and create dated backups of
the current local copy before changing anything.
