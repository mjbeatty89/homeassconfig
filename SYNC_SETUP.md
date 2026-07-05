# Home Assistant GitHub Sync Setup

## Overview
Your Home Assistant configuration at `/mnt/sambahome` is now automatically synced to GitHub at https://github.com/mjbeatty89/homeassconfig

## Current Configuration

### Branch
- **Current branch**: `main-clean` 
- **Note**: You need to go to GitHub and either:
  1. Disable branch protection on `main`, delete it, and rename `main-clean` to `main`, OR
  2. Set `main-clean` as the default branch in repository settings

### Auto-Sync Service
The configuration uses systemd to automatically detect changes and push them to GitHub.

**Service files:**
- `/etc/systemd/system/ha-config-sync.service` - The sync service
- `/etc/systemd/system/ha-config-sync.path` - File watcher that triggers the service
- `/mnt/sambahome/sync-to-github.sh` - The sync script

**How it works:**
1. systemd's PathModified watches `/mnt/sambahome` for any file changes
2. When changes are detected, it triggers the sync service
3. The sync script commits and pushes changes automatically

### What's Synced
All Home Assistant configuration files EXCEPT:
- Database files (`*.db`, `*.db-shm`, `*.db-wal`)
- Log files (`*.log`)
- `.storage/` directory (contains secrets and credentials)
- `.cloud/` directory
- `esphome/` directory (external git repo)
- Temporary files and OS-specific files

See `.gitignore` for the complete list.

## Manual Commands

### Check sync status
```bash
sudo systemctl status ha-config-sync.path
```

### View sync logs
```bash
sudo journalctl -u ha-config-sync.service -f
```

### Manually trigger sync
```bash
/mnt/sambahome/sync-to-github.sh
```

### Stop auto-sync
```bash
sudo systemctl stop ha-config-sync.path
```

### Start auto-sync
```bash
sudo systemctl start ha-config-sync.path
```

### Disable auto-sync (won't start on boot)
```bash
sudo systemctl disable ha-config-sync.path
```

## Troubleshooting

### If git lock errors occur
```bash
rm -f /mnt/sambahome/.git/index.lock
```

### If sync fails
1. Check the logs: `sudo journalctl -u ha-config-sync.service -n 50`
2. Try manual sync: `/mnt/sambahome/sync-to-github.sh`
3. Check git status: `cd /mnt/sambahome && git status`

### If you want to change the branch
Edit `/mnt/sambahome/sync-to-github.sh` and update the branch logic, or simply checkout the desired branch:
```bash
cd /mnt/sambahome
git checkout <branch-name>
```

The script automatically uses the current branch.

## Security Notes
- Secrets and credentials are excluded via `.gitignore`
- The `.storage/` directory was removed from git history to eliminate leaked secrets
- Always ensure `secrets.yaml` is listed in `.gitignore`
- GitHub has secret scanning enabled which will block pushes containing exposed credentials
