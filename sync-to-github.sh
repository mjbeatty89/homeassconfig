#!/bin/bash
# Auto-sync Home Assistant config to GitHub

cd /mnt/sambahome || exit 1

# Configure git to handle the directory safely
git config --global --add safe.directory /mnt/sambahome

# Add all changes first
git add -A

# Check if there are changes to commit
if ! git diff-index --quiet HEAD --; then
    # Commit with timestamp
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    git commit -m "Auto-sync: $TIMESTAMP"
fi

# Pull latest changes and rebase
git pull --rebase origin main

# Push to GitHub
git push origin main

echo "Successfully synced at $(date '+%Y-%m-%d %H:%M:%S')"
