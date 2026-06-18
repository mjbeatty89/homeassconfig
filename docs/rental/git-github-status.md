# GitHub Status - 2026-06-18

## Local Repo

- Path: `/Volumes/mm2ssd/mjb/dev/home-assistant-config`
- Local branch: `main`
- Local base commit before this pass: `b6abbdd setting up git ops for ha`
- Remote configured: `origin https://github.com/mjbeatty89/homeassconfig.git`

## Remote Inspection

The GitHub repository is not empty.

- `origin/main` exists and contains a minimal README-only initial commit.
- `origin/main-clean` appears to contain an older auto-sync branch with unsafe runtime files such as `secrets.yaml`, SSL material, logs, and backup/runtime directories.
- Other historical feature branches also exist.

## Decision

Do not force-push local `main` over `origin/main` automatically.

Safe path:

1. Push this implementation to a new branch.
2. Review GitHub branch contents.
3. Decide whether `origin/main` should be replaced, merged, or archived.
4. Clean up unsafe historical branches separately if desired.

## Useful Commands

```bash
cd /Volumes/mm2ssd/mjb/dev/home-assistant-config
git remote -v
git fetch origin --prune
git log --oneline --graph --decorate --all --max-count=40
git push -u origin codex/rental-segmentation-2026-06-18
```
