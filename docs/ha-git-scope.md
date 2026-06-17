# What belongs in Git for this Home Assistant config

This repo can absolutely back up a meaningful slice of Home Assistant, but it should focus on human-authored configuration and leave out volatile/generated state.

## Good Git candidates

- `configuration.yaml`
- `automations.yaml`, `scripts.yaml`, `scenes.yaml`, `templates.yaml`
- `packages/`
- `custom_components/`
- Dashboard YAML files that you intentionally version
- Theme files, blueprint files, AppDaemon apps, and helper scripts
- Documentation such as room contracts, migration notes, and dashboard plans

## Usually keep out of Git

- `secrets.yaml`
- SSL keys and certificates
- `.storage/` if you want clean, reviewable diffs
- Log files and crash dumps
- Databases and recorder files
- Transient lock files and generated caches

## Practical split for this house

- Keep the reusable automation policy in Git.
- Keep room contracts and dashboards in Git when they are stable enough to review.
- Treat device pairing, integration auth, and most UI-generated state as runtime state unless you intentionally export it.
- If a helper or dashboard starts life in the UI but becomes important and repeatable, promote it into versioned YAML when practical.

## Immediate recommendation

Use this repo as the durable home for:
- room-by-room lighting contracts
- rental split notes
- dashboard specs
- AI room-agent definitions
- any YAML you want an AI or human to safely review later

Then add a lightweight backup/export strategy for the runtime-only layer such as `.storage` snapshots or an entity catalog export.
