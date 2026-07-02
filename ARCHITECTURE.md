# Home Assistant Architecture

## Source of Truth

- `configuration.yaml` stays thin and only owns top-level wiring.
- UI/storage owns integrations, devices, most helpers, and most everyday dashboards.
- YAML owns reusable logic, templates, room contracts, and versioned dashboards that benefit from review.

## Package Layout

- `packages/room_presence/` contains occupancy detection and occupancy-driven light follow.
- `packages/room_controls/` contains the human-facing room contract for each space:
  - automation enabled toggle
  - manual hold toggle
  - scene selector
  - recommended scene sensor
  - scene application scripts
- `agents/*.yaml` remain the canonical AI-room definitions.

## Room Rules

- Living Room, Kitchen, Office: automation on by default, but manual hold always wins.
- Primary Bedroom: automation is conservative, never auto-turns on during night mode, and respects adaptive lighting sleep mode.
- Ohana Suite: automation defaults off on the main instance until the suite is moved to its own Home Assistant instance.

## Dashboards

- Default Lovelace remains storage-mode.
- Version-controlled dashboards are reserved for:
  - Presence
  - Network health
  - Rental suite operations

## Rental Split

- Den + Suite Bedroom + Suite Bathroom should move to a dedicated Proxmox Home Assistant.
- Main HA should only keep temporary, conservative controls for those spaces until cutover is complete.
