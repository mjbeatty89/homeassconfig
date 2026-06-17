# Local Repo Migration

## Goal

Move Home Assistant config management from a fragile Samba-mounted workspace to
a durable local repository with explicit validation and deploy steps.

## Why we are changing

The previous path depended on:

- the HA host being healthy enough to keep the Samba add-on running
- macOS keeping the SMB mount alive
- agents editing a live mutable filesystem directly

That is too fragile for a busy multi-agent environment.

## New shape

- Local repo: `/Volumes/mm2ssd/mjb/dev/home-assistant-config`
- Live HA `/config`: deploy target only
- Emergency Samba mount: recovery path only

## Safety rules

- Do not edit HA `/config` directly unless the instance is unhealthy and a live
  rescue is required.
- Do not pull arbitrary runtime churn from `.storage/` into Git.
- Do not deploy when `configuration.yaml` or the other top-level YAML files are
  missing locally.
- Prefer agent worktrees or branches over shared direct edits.

## Immediate follow-up

1. Recover the missing top-level YAML files from the next good Samba mount.
2. Rebuild the repo's root orchestration layer.
3. Re-run the original triage backlog from this repo.
