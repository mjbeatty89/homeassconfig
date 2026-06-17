#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if [[ -f "$ROOT_DIR/deploy.local.env" ]]; then
  # shellcheck disable=SC1091
  source "$ROOT_DIR/deploy.local.env"
fi

LOCK_DIR="$ROOT_DIR/.staging/deploy.lock"
BACKUP_DIR="$ROOT_DIR/backups/runtime-target"
mkdir -p "$ROOT_DIR/.staging" "$BACKUP_DIR"

cleanup() {
  rm -rf "$LOCK_DIR"
}
trap cleanup EXIT

if ! mkdir "$LOCK_DIR" 2>/dev/null; then
  echo "Another deploy appears to be running. Lock: $LOCK_DIR"
  exit 1
fi

"$ROOT_DIR/scripts/validate-ha-config.sh"

HA_DEPLOY_HOST="${HA_DEPLOY_HOST:-ha}"
HA_DEPLOY_USER="${HA_DEPLOY_USER:-root}"
HA_DEPLOY_PATH="${HA_DEPLOY_PATH:-/config}"
SSH_OPTS="${HA_SSH_OPTS:-}"
DRY_RUN="${HA_DEPLOY_DRY_RUN:-0}"

timestamp="$(date '+%Y%m%d-%H%M%S')"
backup_target="$BACKUP_DIR/$timestamp"
mkdir -p "$backup_target"

echo "Creating local rescue copy of deploy set at $backup_target"
rsync -a \
  --exclude '.git/' \
  --exclude '.staging/' \
  --exclude 'backups/' \
  --exclude 'deploy.local.env' \
  ./ "$backup_target"/

rsync_ssh=(ssh)
if [[ -n "$SSH_OPTS" ]]; then
  read -r -a extra_ssh_opts <<<"$SSH_OPTS"
  rsync_ssh+=("${extra_ssh_opts[@]}")
fi

rsync_args=(-az --delete -e "${rsync_ssh[*]}")
if [[ "$DRY_RUN" == "1" ]]; then
  rsync_args+=(--dry-run)
fi

echo "Deploying to ${HA_DEPLOY_USER}@${HA_DEPLOY_HOST}:${HA_DEPLOY_PATH}"
rsync "${rsync_args[@]}" \
  --exclude '.git/' \
  --exclude '.staging/' \
  --exclude 'backups/' \
  --exclude 'deploy.local.env' \
  ./ "${HA_DEPLOY_USER}@${HA_DEPLOY_HOST}:${HA_DEPLOY_PATH}/"

echo "Deploy complete. Restart or reload Home Assistant only after reviewing the change scope."
