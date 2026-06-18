# openHASP Plate01 Repair Plan

## Observed State

- Plate web UI is reachable at `http://10.1.11.135/`.
- Device reports as `plate01`, openHASP `0.7.0-rc12`.
- HA sees `device_tracker.suitebed_plate01` as present.
- HA openHASP entities are restored/unavailable:
  - `openhasp.plate01`
  - `light.plate01_backlight`
  - `switch.plate01_antiburn`
  - `number.plate01_page_number`
  - `button.plate01_restart`
  - `light.plate01_moodlight`
  - `light.plate01_light_12`
  - `light.plate01_light_14`
  - `light.plate01_light_27`

## Repair Order

1. Export the current panel pages/config from the plate web UI or saved config files.
2. Verify MQTT host, topic prefix, username, and TLS/plaintext settings on the plate.
3. Verify the HA openHASP integration is loaded and listening for the same node name.
4. Confirm retained MQTT discovery/state messages for `plate01`.
5. Restore the HA binding before changing page layout.
6. Rebuild pages around stable Rental HA scripts/helpers, not raw device entity IDs.

## Target Page Contract

- Page 1: climate comfort and current room status.
- Page 2: suite bedroom lights and scenes.
- Page 3: fan and curtains.
- Page 4: help/status, including whether HA binding is healthy.

## Safety Rules

- No surprise night behavior from the bedroom plate.
- No noisy announcements.
- Manual control always wins.
- Do not upload/reboot the plate during guest occupancy.
- Keep a copy of the last working `pages.jsonl` before any upload.
