# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Prerequisites
- **Docker**: Required for the validation commands below.
- **Python**: Required for `yamllint` or custom scripts.

## Quick commands (local dev via Docker)

- Validate Home Assistant configuration
  - Uses the official container to run Home Assistant’s built-in config check against this repo.
  - macOS/Linux (zsh/bash):
    ```sh
    docker run --rm -it \
      -v "$PWD":/config \
      -e TZ=America/Detroit \
      --name ha-check ghcr.io/home-assistant/home-assistant:stable \
      hass --script check_config -c /config
    ```

- Run Home Assistant with this config (foreground)
  - Exposes the UI at http://localhost:8123 and persists config from this repo via bind mount.
  - macOS/Linux (zsh/bash):
    ```sh
    docker run --rm -it \
      -p 8123:8123 \
      -v "$PWD":/config \
      -e TZ=America/Detroit \
      --name ha-dev ghcr.io/home-assistant/home-assistant:stable
    ```

- Start Zigbee2MQTT using the repo’s config
  - Uses TCP serial per `zigbee2mqtt/configuration.yaml` and publishes to the configured MQTT broker.
  - macOS/Linux (zsh/bash):
    ```sh
    docker run --rm -it \
      -v "$PWD/zigbee2mqtt":/app/data \
      -p 8099:8099 \
      --name z2m koenkk/zigbee2mqtt
    ```

- Optional: lint YAML (no repo config required)
  - Run from repo root to catch basic syntax/style issues:
    ```sh
    yamllint .
    ```

Notes
- There is no unit test suite in this repo. Use the config check above and a local Home Assistant run to validate changes.
- After editing Python under `custom_components/`, restart the Home Assistant container to load changes.

## High-level architecture

Home Assistant Core
- Root configuration
  - `configuration.yaml` loads `default_config` and includes:
    - `automation: !include automations.yaml`
    - `script: !include scripts.yaml`
    - `scene: !include scenes.yaml`
    - `frontend:` loads themes from `themes/` via `!include_dir_merge_named`.
  - `auth_providers.yaml` customizes authentication (e.g., trusted networks/users). Keep credentials and network details out of commits.
  - Top-level files `automations.yaml`, `scripts.yaml`, and `scenes.yaml` are present (currently minimal/empty) and are the primary YAML entry points for logic.

UI and assets
- `www/` is served as `/local/` by Home Assistant. This repo includes community frontend assets (e.g., `www/community/lovelace-layout-card/`).
- `ui_lovelace_minimalist/` contains the “Minimalist UI” integration and a large set of Lovelace card/overlay/Popup templates under `__ui_minimalist__/`.

Custom integrations (Python)
- `custom_components/` contains multiple integrations (examples: `hacs`, `frigate`, `browser_mod`, `magic_areas`, `nodered`, `ui_lovelace_minimalist`, `tapo`, `watchman`, etc.).
  - Treat these as vendor code unless intentionally forking—changes here alter integration behavior and require a Home Assistant restart to take effect.
  - Many subfolders contain `__pycache__/` artifacts which are not necessary for source control.

Automations blueprints
- `blueprints/` includes reusable automation and script blueprints (e.g., `homeassistant/motion_light.yaml`, `homeassistant/notify_leaving_zone.yaml`, and script confirmation prompts).

Zigbee2MQTT
- `zigbee2mqtt/configuration.yaml` configures the Zigbee network (e.g., MQTT base topic, TCP serial adapter, frontend port 8099, network IDs/keys). Avoid committing live secrets; prefer indirection (e.g., `!secret`) or environment.

Other
- `appdaemon/` exists for AppDaemon apps (e.g., a vendor “covers manager” app directory). No runtime configuration is defined here in this repo.
- `packages/openhands/` contains a vendored third-party artifact unrelated to Home Assistant; it is not used by the HA configuration.

## Workflow tips specific to this repo
- Primary validation is via the Home Assistant config check and running HA locally with this directory mounted.
- For YAML-only changes (automations/scripts/scenes), you can validate with `yamllint` and then use the running HA UI to reload automations/scripts where possible, otherwise restart the container.
- For Python changes under `custom_components/`, always restart the Home Assistant container. If you are intentionally forking a HACS-managed integration, document the divergence in a commit message.
