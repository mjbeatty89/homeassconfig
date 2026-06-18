# Rental HA Segmentation - 2026-06-18

## Current State

- Main HA source repo: `/Volumes/mm2ssd/mjb/dev/home-assistant-config`
- Runtime HA source: `http://10.1.30.10:8123`
- Rental migration domain: Den, suite bedroom, suite guest bed, suite bathroom, and Ohana/rental room-contract entities.
- Inventory snapshot: `docs/rental/inventory/rental-inventory-2026-06-18.{json,csv,md}`
- Live storage dashboards created:
  - `rental-main`
  - `rental-simple`

## Inventory Summary

The 2026-06-18 export found 184 rental-domain entities.

- `move to Rental HA`: 68
- `repair before split`: 25
- `retire/review`: 26
- `leave on Main HA temporarily`: 58
- `expose via bridge`: 7

Primary move candidates include:

- `climate.suite_thermostat`
- `fan.den_ceiling_fan`
- `light.unnamed_ks240_den_fanlight`
- `light.den_lights`
- `light.suite_lights`
- `light.suite_bedroom_scones`
- `light.suite_guest_bed`
- `cover.curtain_3_66e9`
- `cover.curtain_3_d1a0`
- `camera.den_doorbell`
- rental occupancy/contact/temperature sensors

## Migration Boundary

Rental HA on Proxmox should eventually own guest-critical controls directly:

- Climate and comfort controls
- Rental lights and scenes
- Den and suite bedroom fans
- Curtains/blinds used by guests
- Guest-facing occupancy/contact/temperature sensors
- Tablet dashboards and openHASP controls

Main HA can temporarily retain or bridge:

- UniFi controller telemetry
- owner-only diagnostics
- unavailable/restored ghost entities
- experimental automations
- non-critical media controls

## Known Repair Queue

- `openhasp.plate01` and its child entities are unavailable in HA while the panel is reachable on the network.
- Several SwitchBot curtain siblings are unavailable; two curtains are live and have low batteries (`41`, `24` at export time).
- Den Tuya rotary/dining/impact entities are restored/unavailable and should not be migrated without hardware confirmation.
- Some room-contract entities exist for Ohana Suite, but those should be recreated cleanly on Rental HA rather than copied blindly.

## Implementation Notes

- The repo now includes `scripts/export-rental-inventory.py`.
- The exporter uses HA REST for states/config entries and HA WebSocket registry calls for areas, devices, and entity registry metadata.
- Dashboard specs are versioned under `dashboards/rental/`; runtime dashboards were created via HA storage dashboard API, not by editing `.storage`.
- No live device migration was performed in this pass.

## Next Actions

1. Stand up the Proxmox Rental HA instance.
2. Decide which integration boundary moves first, likely HomeKit/Aqara/Tapo/TP-Link comfort devices before dashboard polish.
3. Repair `plate01` MQTT/openHASP binding before writing new plate pages.
4. Re-run `scripts/export-rental-inventory.py` after each hardware reconnection pass.
5. Promote only verified guest-critical entities to Rental HA.
