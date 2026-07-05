# Secrets Rotation Checklist

This file tracks credentials that were **already publicly exposed** in this
repository's git history before they were removed from the working tree.

> **Important:** Removing files from HEAD does **not** erase them from git
> history. Anyone who cloned or viewed this repo before the cleanup can still
> retrieve the raw key/token bytes from older commits. Treat every item below
> as fully compromised and rotate it immediately, independent of any further
> git cleanup.

---

## Credentials Confirmed Exposed

### TLS / PKI

| Credential | File(s) in git history | Action |
|---|---|---|
| TLS private key for `ha.aadd.rocks` | `ssl/privkey.pem`, `ssl/ha.aadd.rocks.key` | Revoke cert; reissue via ACME/Let's Encrypt |
| TLS certificate chain | `ssl/fullchain.pem`, `ssl/cert.pem`, `ssl/ha.aadd.rocks.pem` | Covered by above reissue |
| Nabu Casa remote-access private key | `.cloud/remote_private.pem` | Force re-auth in Nabu Casa (see below) |
| Let's Encrypt ACME account private key | `.cloud/acme_account.pem`, `.cloud/acme_reg.json` | Rotate ACME account key or create new account |
| Lutron Caseta bridge private key | `lutron_caseta-083e075a-key.pem` | Re-pair bridge (generates new key pair) |
| Lutron Caseta bridge certificate | `lutron_caseta-083e075a-cert.pem`, `-ca.pem` | Covered by re-pairing |
| Android TV remote pairing key | `.storage_backup_before_recovery/androidtv_remote_key.pem` | Remove and re-pair Android TV in HA |
| Android TV remote certificate | `.storage_backup_before_recovery/androidtv_remote_cert.pem` | Covered by re-pairing |

### Auth Tokens / User Accounts

| Credential | File(s) in git history | Action |
|---|---|---|
| Long-lived HA access token (referenced by `.ha_token`) | `secrets.yaml` (prior commits) | Delete token in HA → Profile → Long-Lived Access Tokens |
| Full HA user + auth registry (10 users, 39 refresh tokens) | `.storage_backup_before_recovery/auth` | Change all user passwords; invalidate all sessions |
| HA local-auth hashed credentials | `.storage_backup_before_recovery/auth_provider.homeassistant` | Covered by password changes |
| HTTP content-user ID | `.storage_backup_before_recovery/http.auth` | Regenerate via HA restart |
| HomeKit bridge pairing secrets | `.storage_backup_before_recovery/homekit.*.state`, `.iids`, `.aids` | Reset HomeKit bridges; re-pair all HomeKit devices |
| Nabu Casa Cloud config (cloud subscription details) | `.storage_backup_before_recovery/cloud` | Force re-auth in Nabu Casa dashboard |
| Alexa integration config | `.storage_backup_before_recovery/alexa` | Review/re-authorize Alexa skill in HA |
| Supervisor / Hassio config | `.storage_backup_before_recovery/hassio` | Review for any embedded tokens |

---

## Rotation Step-by-Step

### 1. Home Assistant Access Token
1. Log into HA → click your username (bottom left) → **Security** tab
2. Under **Long-Lived Access Tokens**, delete every token you don't recognise
3. Generate a new token and update any scripts/automations that used the old one
4. Update `secrets.yaml` with the new token value

### 2. Nabu Casa Cloud (remote_private.pem, acme_account.pem)
1. Log into [account.nabucasa.com](https://account.nabucasa.com)
2. Go to **Remote UI** → disable, then re-enable remote access — this forces
   a new key pair and new Let's Encrypt certificate
3. Alternatively, in HA: **Settings → Home Assistant Cloud → Log out** then log
   back in

### 3. TLS Certificate for ha.aadd.rocks
1. If using Let's Encrypt via the **DuckDNS** / **Nginx Proxy Manager** /
   **ACME** add-on, trigger a certificate renewal
2. If managing manually, generate a new private key and re-issue the cert

### 4. Lutron Caseta Bridge
1. In HA: **Settings → Devices & Services → Lutron Caseta → Delete integration**
2. Re-add the integration — HA will re-pair with the bridge and generate a fresh
   key/cert pair stored outside git

### 5. Android TV Remote
1. In HA: **Settings → Devices & Services → Android TV Remote → Delete**
2. Re-add the integration — new pairing key generated automatically

### 6. HomeKit Bridges
1. In HA: **Settings → Devices & Services → HomeKit Bridge → Delete** each bridge
2. On each Apple device: remove the bridge from **Home** app → **Home Settings**
3. Re-add HomeKit Bridge in HA — new pairing secrets are generated

### 7. HA User Passwords
1. Log into HA as admin
2. For each local user: **Settings → People → [user] → Change Password**
3. Pay particular attention to user `Matthew Beatty` (your account) and any
   admin accounts

### 8. Review Alexa / Google Assistant
1. Check **Settings → Voice Assistants** for any exposed webhook URLs or tokens
2. If unsure, remove and re-authorize the Alexa / Google Home integrations

---

## Git History Rewrite

Removing files from HEAD stops future exposure but does **not** purge the bytes
from history. To fully clean all branches, run the following **after** rotating
every credential above (so the purged values are already worthless):

```bash
# Prerequisites
pip install git-filter-repo

# Clone a fresh copy of the repo to work on
git clone https://github.com/mjbeatty89/homeassconfig.git homeassconfig-clean
cd homeassconfig-clean
git fetch --all

# Purge every sensitive path from ALL branches' history
git filter-repo --force \
  --path ssl \
  --path .cloud \
  --path .ha_token \
  --path .ha_run.lock \
  --path .HA_VERSION \
  --path secrets.yaml \
  --path '.storage_backup_before_recovery' \
  --path 'lutron_caseta-083e075a-ca.pem' \
  --path 'lutron_caseta-083e075a-cert.pem' \
  --path 'lutron_caseta-083e075a-key.pem' \
  --path home-assistant.log.1 \
  --path home-assistant.log.fault \
  --path home-assistant.log.old \
  --path logs \
  --path backup \
  --path ha_tracker_zones.json \
  --path .shopping_list.json \
  --invert-paths

# Force-push all rewritten branches
git push origin --force --all
git push origin --force --tags
```

> **Note:** After a force-push, anyone who had a clone of the repo must
> `git fetch --all && git reset --hard origin/<branch>` — stale local clones
> still contain the old objects. GitHub also caches objects for up to 90 days;
> contact GitHub Support to request an immediate cache purge if needed.

Affected branches that carry the exposed history (as of 2026-07-05):
- `main-clean`
- `codex/rental-segmentation-2026-06-18`
- `claude/home-assistant-config-011CUbS1wRiGs366uVLbpqH4`
- `claude/install-exa-smithery-011CUayCn4ZwGvYwr2pGTe9Q`
- `mjbeatty89-patch-1`
