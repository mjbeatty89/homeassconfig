# Home Assistant 1.0 Inspiration Digest - 2026-06-23

This note captures patterns to borrow from three public Home Assistant configs.
It is intentionally a design digest, not imported YAML.

## Sources Reviewed

- `CCOSTAN/Home-AssistantConfig` at `a4e7d24` (`2026-06-23`)
- `frenck/home-assistant-config` at `cb50a78` (`2026-06-19`)
- `arsaboo/homeassistant-config` at `e3d359d` (`2026-05-03`)

## What To Borrow

## 1. Frenck: Clean Bootstrap And Modular Discipline

Best pattern: tiny top-level `configuration.yaml`, with real config loaded from one-purpose package files.

Borrow for HA 1.0:

- Keep `configuration.yaml` as a readable bootstrap, not the home of business logic.
- Use package-style modules for stable platform concerns: `logger`, `recorder`, `frontend`, `http`, `automation`, `script`, `scene`, and future `esphome`.
- Keep UI-compatible files such as `automations.yaml`, `scripts.yaml`, and `scenes.yaml` as stable entrypoints while allowing split directories for hand-authored logic.
- Add a secrets-safe validation path so CI/config checks can run without exposing real secrets.
- Add CI/pre-commit checks once the recovered config is clean enough.

Do not copy blindly:

- Frenck's repo is intentionally minimal and integration-centric. Matt's setup also needs room contracts, rental segmentation, dashboards, AI agents, and homelab ops modules.

## 2. CCostan: Whole-House/Homelab Operating System

Best pattern: HA as a documented smart-home and homelab operations layer, not just device automation.

Borrow for HA 1.0:

- Use one dashboard folder per surface: `overview`, `infrastructure`, `kiosk`, `rental`, and future `operator`.
- Structure YAML dashboards with `dashboard.yaml`, `views/`, `partials/`, `popups/`, and shared templates where a dashboard becomes large enough to justify YAML.
- Build health rollups first, dashboards second: normalize Proxmox, Docker, Pi-hole, UniFi, website health, and HA health into sensors/binary sensors before designing dashboards.
- Put dangerous maintenance actions behind admin-only surfaces or guarded popups.
- Adapt `vacation_mode` style into rental-specific modes:
  - `rental_guest_present`
  - `rental_turnover`
  - `rental_quiet_hours`
  - `rental_maintenance`
- Adapt maintenance-log ideas for homeowner/rental operations: filters, smoke detectors, linens, water softener, HVAC, battery checks, and guest-readiness tasks.
- Borrow kiosk drift recovery concepts for Fire tablets: if page/app/brightness drifts, recover gently.

Do not copy blindly:

- Some automations are older/template-heavy. Translate concepts into current HA patterns with native triggers, helpers, `target:`, and appropriate automation modes.
- Keep affiliate/blog scaffolding out of our repo; the useful part is operational structure.

## 3. Arsaboo: Dense Operator Dashboard And Spatial UI

Best pattern: a multi-tab, "everything" dashboard for the person at a PC, separate from simple wall/tablet dashboards.

Borrow for HA 1.0:

- Create a main operator dashboard with tabs/views for:
  - Home spatial overview
  - Rooms
  - Presence
  - Cameras
  - Media
  - Weather/environment
  - Network/infrastructure
  - Settings/admin
- Use the user's 2D/3D floorplan work for a spatial default view.
- Overlay global mode controls directly on the spatial view: sleep, away, guest/rental occupied, maintenance, vacation, and automation hold.
- Split camera UX into:
  - summary/security overview
  - live camera wall/panel
- Add a room-summary view mapped to room agents:
  - Quinn: Living Room
  - Saffron: Kitchen
  - Vesper: Primary Bedroom
  - Axiom: Office
  - Kai: Ohana/Rental
- Use helpers for tunable behavior from dashboards instead of editing YAML for day-to-day changes.
- Use generated/entity-filter style lists only for admin/debug views, not primary tablet UIs.

Do not copy blindly:

- The dashboard is a large legacy Lovelace YAML file with heavy custom-card usage. Rebuild the UX using modern `sections`, `tile`, `area`, and `grid` cards, plus a small curated custom-card set only where needed.

## Resulting HA 1.0 Direction

Use a hybrid architecture:

- Frenck gives the repo skeleton and validation discipline.
- CCostan gives homelab/rental operations depth.
- Arsaboo gives the PC/operator dashboard concept.

The house should have two dashboard classes:

- Operator dashboards: dense, multi-tab, spatial, diagnostic, PC-friendly.
- Room/tablet dashboards: single-purpose, single-page, low cognitive load, role-specific.

The config should have three module classes:

- Platform modules: logging, recorder, frontend, integrations, secrets discipline.
- Domain modules: cameras, network, notifications, climate, maintenance, presence.
- Room/rental modules: room contracts, scene orchestration, motion policy, guest-safe controls.

## Concrete First Moves After Recovery Diff Review

1. Finish reviewing the Samba recovery diff before reorganizing files.
2. Create a clean top-level `configuration.yaml` plan that preserves current entrypoints.
3. Add a config-check workflow once the recovered config has a stable validation path.
4. Promote dashboard specs into `dashboards/operator/`, `dashboards/tablets/`, and `dashboards/rental/`.
5. Build the operator dashboard as a PC-first surface, not as a replacement for tablet dashboards.
6. Keep rental dashboards and controls isolated from experimental main-house work.
