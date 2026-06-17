#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

MOUNT_PATH="${1:-/Volumes/config}"
STAMP="$(date '+%Y%m%d-%H%M%S')"
RESCUE_DIR="$ROOT_DIR/backups/rescue-import-$STAMP"
mkdir -p "$RESCUE_DIR"

if [[ ! -d "$MOUNT_PATH" ]]; then
  echo "Mount path not found: $MOUNT_PATH"
  exit 1
fi

echo "Backing up current local repo state to $RESCUE_DIR"
rsync -a \
  --exclude '.git/' \
  --exclude '.staging/' \
  --exclude 'backups/' \
  ./ "$RESCUE_DIR"/

echo "Importing authoritative config from $MOUNT_PATH"
rsync -a \
  --exclude '.git/' \
  --exclude '.storage/' \
  --exclude '.cloud/' \
  --exclude 'ssl/' \
  --exclude 'secrets.yaml' \
  --exclude 'tts/' \
  --exclude 'backup/' \
  --exclude 'zigbee2mqtt/' \
  --exclude '*.log' \
  --exclude 'home-assistant.log*' \
  --exclude '__pycache__/' \
  "$MOUNT_PATH"/ ./ 

echo "Rescue import complete. Review diffs before deploy."
