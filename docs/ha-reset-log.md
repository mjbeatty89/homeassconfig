# Home Assistant Reset Log

This log tracks room-by-room cleanup work, live Home Assistant changes, and follow-up items that still need a durable YAML home once the mounted config path is available again.

## 2026-05-21

### Living Room contract kickoff

Goals for this room:
- Rich ambient lighting by default
- Big light only when explicitly needed
- Conservative late-night behavior
- Manual scenes that suppress automation until resumed
- Stable room-level control surface for future dashboards, voice, and room agents

Live entities confirmed through Home Assistant MCP:
- Presence: `binary_sensor.living_room_occupied`
- Ambient group: `light.living_room_ambient_lights`
- All lights group: `light.living_room_lights`
- Big light: `light.living_room_light_switch`
- Blinds: `cover.living_front_left_blind`, `cover.living_front_right_blind`, `cover.living_west_left_blind`, `cover.living_west_right_blind`
- Projector screen: `cover.screen`
- Existing room helpers: `input_boolean.room_automation_enabled_living_room`, `input_boolean.room_manual_hold_living_room`, `input_select.room_scene_living_room`

Planned scene set:
- `Auto`
- `Cozy`
- `Hosting`
- `TV Time`
- `Bright Task`
- `Nightlight`
- `Off`

Implemented live on 2026-05-21:
- Created script category `Room Contracts`
- Created automation category `Room Contracts`
- Created `script.living_room_apply_contract_scene`
- Created `script.living_room_resume_contract_automation`
- Created `automation.contract_living_room_scene_selector`
- Created `automation.contract_living_room_occupancy_follow`
- Turned off the older generic automations `automation.room_living_room_light_follow` and `automation.room_living_room_scene_selector`
- Updated the runtime options for `input_select.room_scene_living_room` to the new scene list

Validation notes:
- A first test exposed a compatibility bug where the Govee strip threw an error if `color_temp_kelvin` was sent to the ambient group.
- The script was revised so the ambient group only receives brightness changes, while warmth is set separately on `light.sectional_lamp`.
- After the patch, the new living room scene selector and apply-scene script completed successfully.
- `script.living_room_resume_contract_automation` successfully restored the room to `Auto` and cleared manual hold.
- `automation.contract_living_room_occupancy_follow` was manually triggered through MCP and finished successfully.

Current device health notes from MCP:
- `light.living_room_light_switch` is still `unavailable`
- `light.living_room_stick_light` is still `unavailable`
- `light.corner_triple` is still `unavailable`
- `light.light_1`, `light.light_2`, and `light.light_3` are still `unavailable`
- `light.living_room_lightstrip` is reachable now and no longer erroring under brightness-only control

Notes:
- `cover.screen` is intentionally excluded from first-pass automation because the RF-backed screen implementation has historically created flaky duplicate `screen` entities. Once directionality is confirmed, it should move into its own isolated projector script.
- The current Codex session can reach live Home Assistant through MCP, but the mounted YAML path previously referenced as `/Volumes/config` is not available inside this session. That means runtime-safe storage changes can be made immediately, while some YAML-backed pieces still need a later file-backed cleanup pass.
- A low-poly living room and kitchen model is available at `/Volumes/mm2ssd/mjb/Downloads/Liv and Kitchen.glb` for a future spatial dashboard.

### Follow-up queue

- Persist the living room helper option list in YAML once the real config mount is accessible here again.
- Build a dedicated living room dashboard with scene controls, ambient/direct lighting controls, blinds, and media.
- Add the couch-side scene remote mapping once the exact button event surface is confirmed in Home Assistant.
- Confirm whether the big light device should be reconnected or replaced if `light.living_room_light_switch` remains unavailable.
- Clean up or rename the anonymous `light.light_1` / `light.light_2` / `light.light_3` entities once their real hardware mapping is confirmed.

## 2026-05-25

See `docs/ha-stability-triage-2026-05-25.md` for the crash-loop triage notes.

Crash triage status:
- Core/API dropped while Supervisor and Observer stayed healthy, so the incident is currently isolated to Home Assistant Core rather than the whole Pi.
- Govee is disabled and the living room contract automations are parked.
- Low-risk restart-loop add-ons were partially quarantined: pgvector tester, Git Pull, and Node-RED watchdog.
- Remaining high-signal suspects are Log Viewer watchdog restarts, OpenThread Border Router restarts, Node-RED package install failure, and the missing Core crash line from `home-assistant.log`.
- Live `configuration.yaml` was mounted via Samba and the YAML-only `decora_wifi` light platform was commented out with a timestamped backup.
- Fresh post-restart evidence shifted toward Bluetooth/BlueZ memory pressure, so ELK-BLEDOM, Bluetooth, and iBeacon config entries were disabled for the next boot.

## 2026-05-28

See `docs/ha-stability-triage-2026-05-25.md` for the morning follow-up.

Current status:
- Core briefly dropped while Observer stayed healthy, then recovered without another hard reset.
- No fresh `decora_wifi`, BlueZ, Bluetooth, or OOM signature was found after recovery.
- Glances was confirmed parked with `boot: manual` and `watchdog: false`.
- System is yellow-green: stable enough for careful dashboard work, but not boring enough for broad integration churn.
