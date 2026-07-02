#!/bin/bash
# Auto-sync Home Assistant config to GitHub
# Runs on the HA host via systemd path watcher
# Mount path: /mnt/sambahome (systemd) or detect dynamically

# ─── Find the config directory ──────────────────────────────
# Try the known system path first (systemd service), then fallback
if [ -d "/mnt/sambahome/.git" ]; then
  CONFIG_DIR="/mnt/sambahome"
elif [ -d "$(dirname "$0")/.git" ]; then
  CONFIG_DIR="$(cd "$(dirname "$0")" && pwd)"
else
  echo "ERROR: Cannot locate .git directory. Exiting."
  exit 1
fi

cd "$CONFIG_DIR" || exit 1

# ─── Safety: allow git to operate on this directory ─────────
git config --global --add safe.directory "$CONFIG_DIR" 2>/dev/null || true

# ─── Stage all changes ──────────────────────────────────────
git add -A

# ─── Commit only if there are staged changes ────────────────
if ! git diff-index --quiet HEAD --; then
  TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
  git commit -m "Auto-sync: $TIMESTAMP"
  echo "Committed at $TIMESTAMP"
else
  echo "No changes to commit at $(date '+%Y-%m-%d %H:%M:%S')"
fi

# ─── Sync with remote ───────────────────────────────────────
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Pull with rebase to stay clean
if ! git pull --rebase origin "$CURRENT_BRANCH"; then
  echo "ERROR: git pull --rebase failed. Manual intervention may be needed."
  echo "  Run: cd $CONFIG_DIR && git rebase --abort"
  exit 1
fi

# Push to GitHub
if ! git push origin "$CURRENT_BRANCH"; then
  echo "ERROR: git push failed. Check network and credentials."
  exit 1
fi

echo "Successfully synced branch '$CURRENT_BRANCH' at $(date '+%Y-%m-%d %H:%M:%S')"
