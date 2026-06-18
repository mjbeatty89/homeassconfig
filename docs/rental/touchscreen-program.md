# Rental Touchscreen Program

## Device Roles

## Fire 10 - Main Den Dashboard

- Primary URL: `/lovelace/rental-main`
- Role: full guest/host dashboard for the rental area.
- Content: thermostat, den controls, suite bedroom controls, curtain controls, openHASP status, and network health.
- Runtime: Fully Kiosk on Android.

## Fire 5 - Simple Guest Dashboard

- Primary URL: `/lovelace/rental-simple`
- Role: simplified guest controls for older guests or anyone who does not want the full dashboard.
- Content: thermostat, den/bedroom temperatures, den/bedroom lights, fans, four simple scenes, and help text.
- Runtime: Fully Kiosk on Android.

## iPad - Secondary Information Surface

- Do not assume Fully Kiosk feature parity on iOS.
- Preferred approach: iOS kiosk browser or Guided Access.
- Candidate launcher targets:
  - HA rental dashboard
  - BirdBuddy/bird camera view
  - Ecobee app or Ecobee web fallback
  - house information/help page

## openHASP Plate01 - Suite Bedroom Panel

- Device URL: `http://10.1.11.135/`
- Network status: reachable.
- HA binding status: `openhasp.plate01` unavailable in the 2026-06-18 inventory.
- Role after repair: deterministic bedside control for climate comfort, lights/scenes, fan, and curtains.

## Dashboard Design Rules

- HA storage dashboards remain the tablet runtime surface.
- Do not hand-edit `.storage`; use HA dashboard APIs/UI.
- Keep guest actions shallow and obvious.
- Use tile cards for direct entity controls and button cards for scene/service actions.
- Put diagnostics on the main dashboard, not on the simple Fire 5 dashboard.
- Any reusable behavior should be exposed through scripts/helpers/scenes before being wired to dashboards.
