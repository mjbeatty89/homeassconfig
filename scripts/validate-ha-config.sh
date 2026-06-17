#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

REQUIRED_FILES=(
  configuration.yaml
  automations.yaml
  scripts.yaml
  scenes.yaml
  templates.yaml
)

missing=0
for file in "${REQUIRED_FILES[@]}"; do
  if [[ ! -f "$file" ]]; then
    echo "MISSING: $file"
    missing=1
  fi
done

if [[ "$missing" -ne 0 ]]; then
  cat <<'EOF'
Validation stopped because the canonical repo is still missing one or more
top-level YAML files. Run the rescue import when the HA Samba mount is back, or
copy the authoritative files into this repo before deploy.
EOF
  exit 1
fi

if ! command -v ruby >/dev/null 2>&1; then
  echo "Ruby is required for the current lightweight YAML validation path."
  exit 1
fi

echo "Validating YAML syntax with Ruby..."
find . \
  -path './.git' -prune -o \
  -path './.staging' -prune -o \
  -path './custom_components' -prune -o \
  -path './node_modules' -prune -o \
  \( -name '*.yaml' -o -name '*.yml' \) -print0 |
while IFS= read -r -d '' file; do
  ruby -e 'require "yaml"; YAML.load_file(ARGV[0])' "$file" >/dev/null
  echo "OK: $file"
done

echo "Validation complete."
