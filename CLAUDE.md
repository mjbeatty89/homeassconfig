# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a **Home Assistant configuration** implementing a multi-agent collaborative architecture called "The System Greater Than The One." It's both a functioning smart home and an AI art piece exploring collaborative intelligence.

## Multi-Agent Architecture

The configuration is designed around specialized AI agents that own, maintain, and proactively improve different domains:

- **Manager Agent**: Primary orchestrator, interprets user intent, coordinates other agents
- **Configuration Lead Agent**: Owns `configuration.yaml`, validates YAML, manages dependencies
- **Domain Specialist Agents**: Each owns specific YAML files (automations, templates, dashboards, scripts, etc.)

**Key Principle**: Agents don't just execute - they analyze patterns, detect gaps, and proactively suggest improvements.

See `architecture.md` for complete design philosophy and agent responsibilities.

## Critical Files & Ownership

| File | Owner Agent | Purpose |
|------|-------------|---------|
| `configuration.yaml` | Configuration Lead | Main entry point, includes all components |
| `templates.yaml` | Template Agent | Helper sensors (motion aggregation, occupancy, time-based logic) |
| `dashboards/rental_suite.yaml` | Dashboard Agent | Guest-friendly controls for rental area |
| `scripts/rental_scenes.yaml` | Script Agent | Rental automation scenes |
| `automations.yaml` | Automation Agent | Automation rules (UI-managed) |
| `secrets.yaml` | Configuration Lead | Sensitive credentials (NEVER commit to git) |

## Configuration Patterns

### 1. Secrets Management

**ALWAYS use `!secret` for sensitive data:**
```yaml
# Good
latitude: !secret ha_latitude
internal_url: !secret internal_url

# Bad - NEVER hardcode
latitude: 42.2804
internal_url: "http://192.168.1.100:8123"
```

### 2. Template Sensor Layering

Templates build on templates for emergent behavior:
```
Physical Sensors → Area Aggregations → Whole-Home States → Derived Logic
```

Example:
```yaml
binary_sensor:
  # Layer 1: Area aggregation
  - name: "Living Areas Motion"
    state: >
      {{ is_state('binary_sensor.dining_motion', 'on') or
         is_state('binary_sensor.den_motion', 'on') }}

  # Layer 2: Whole-home state
  - name: "Any Motion Detected"
    state: >
      {{ is_state('binary_sensor.living_areas_motion', 'on') or
         is_state('binary_sensor.bedrooms_motion', 'on') }}

  # Layer 3: Derived logic
  - name: "Home Occupied"
    state: >
      {{ is_state('binary_sensor.any_motion_detected', 'on') or
         is_state('binary_sensor.any_room_occupied', 'on') }}
```

### 3. Configuration Organization

```yaml
# configuration.yaml includes other files
template: !include templates.yaml
automation: !include automations.yaml
script: !include scripts/rental_scenes.yaml

# Dashboards registered in lovelace section
lovelace:
  mode: storage  # Main dashboard is UI-managed
  dashboards:
    rental-suite:  # Additional YAML dashboards
      mode: yaml
      filename: dashboards/rental_suite.yaml
      show_in_sidebar: true
      require_admin: false
```

## Common Commands

### Validate Configuration
```bash
# Run validation script
./validate_config.sh

# Or via HA UI:
# Settings > System > Restart > Check Configuration
```

### Restart Home Assistant
```bash
# Full restart (required for template changes)
# Settings > System > Restart > Restart Home Assistant

# Quick reload (for automations/scripts)
# Settings > System > Restart > Quick reload
```

### Apply Area Assignments (One-time setup)
```bash
# 1. Create long-lived access token in HA UI
echo 'YOUR_TOKEN' > .ha_token

# 2. Run assignment (assigns 348 entities to 14 areas)
python3 apply_area_assignments.py
```

### Check Integration Status
```bash
# View configured integrations and their states
python3 -c "
import json
with open('.storage/core.config_entries', 'r') as f:
    data = json.load(f)
for entry in data['data']['entries']:
    print(f\"{entry['domain']}: {entry['title']} - {entry.get('state', 'unknown')}\")
"
```

### Git Sync
Auto-sync is configured via systemd. Changes auto-commit with timestamps.

**Manual sync:**
```bash
git add .
git commit -m "Manual update: $(date)"
git push origin main-clean
```

## Dual-Instance Architecture

This setup supports **two separate Home Assistant instances**:

1. **Main Instance** (experimental, this config)
   - Multi-agent architecture
   - Can break/restart freely
   - Living Room, Kitchen, Primary Bedroom, Office, etc.

2. **Rental Instance** (stable, separate VM)
   - Minimal config for Den + Suite Bedroom only
   - Isolated from main instance changes
   - Proxmox VM with dedicated Zigbee coordinator
   - See `RENTAL_INSTANCE_SETUP.md`

**Why**: Guests get reliable smart home experience while you experiment with main instance.

## Area Assignment Logic

The `assign_areas.py` and `apply_area_assignments.py` scripts intelligently assign entities to areas:

**Pattern Matching:**
- Searches entity_id, entity name, and device name
- Uses regex patterns for each area
- Scores confidence: 1.0 (entity_id match) > 0.8 (name) > 0.6 (device)

**14 Areas Defined:**
Office, Plant Bedroom, Upstairs Bathroom, Primary Bedroom, Primary Bathroom, Primary Closet, Living Room, Dining Room, Kitchen, Den, Suite Bedroom, Suite Bathroom, Basement, Outside

**Workflow:**
1. Analyze: `python3 assign_areas.py` (shows assignments)
2. Apply: `python3 apply_area_assignments.py` (requires `.ha_token`)

## Helper Sensors Available

12 template sensors created for automation use:

**Motion Aggregation:**
- `binary_sensor.any_motion_detected` - Any motion in house
- `binary_sensor.living_areas_motion` - Dining + Den
- `binary_sensor.bedrooms_motion` - All bedrooms
- `binary_sensor.rental_area_motion` - Guest area only
- `binary_sensor.outdoor_motion` - Perimeter

**Occupancy Intelligence:**
- `binary_sensor.any_room_occupied` - Any room occupied
- `binary_sensor.home_occupied` - Master occupancy sensor
- `binary_sensor.rental_suite_occupied` - Guest presence

**Time Helpers:**
- `binary_sensor.night_mode` - Auto-detects 10 PM - 6 AM
- `sensor.time_of_day` - Morning/Afternoon/Evening/Night

**Monitoring:**
- `sensor.motion_sensors_average_battery` - Battery health
- `sensor.active_motion_sensors` - Count detecting motion

## When Making Changes

### Adding Template Sensors
1. Edit `templates.yaml`
2. Add under `binary_sensor:` or `sensor:`
3. Include `unique_id` for entity registry
4. Full restart required (or Developer Tools > YAML > Template Entities)

### Adding Dashboards
1. Create YAML file in `dashboards/`
2. Register in `configuration.yaml` under `lovelace.dashboards`
3. Full restart required

### Adding Scripts/Scenes
1. Edit `scripts/rental_scenes.yaml` or create new file
2. If new file, include it in `configuration.yaml`
3. Quick reload or restart

### Adding Automations
- Prefer HA UI (Settings > Automations)
- Saves to `automations.yaml` automatically
- Quick reload applies changes

## Integration Recovery

If integrations fail to load after restart:

**Common Causes:**
1. Missing `configuration.yaml` entries (MQTT, Spotify, groups)
2. IP address changes (TP-Link, WLED, Shelly, ESPHome)
3. Network discovery issues

**Solutions:**
1. Check logs: Settings > System > Logs
2. For IP changes: Settings > Devices & Services > ... > Reconfigure
3. Most devices use mDNS and auto-reconnect
4. MQTT/Spotify require explicit config in `configuration.yaml`

## Agent Development Guidelines

When developing new agents:

1. **Define Domain**: Identify which YAML file(s) the agent owns
2. **Establish Personality**: Expertise area, communication style
3. **Proactive Protocol**: How agent detects gaps and suggests improvements
4. **Coordination Pattern**: How agent interacts with Manager and other agents

**Example Suggestion Format:**
```yaml
suggestion:
  agent: sensor_agent
  priority: medium
  gap: "Frequent manual light adjustments in kitchen"
  impact: "User discomfort, inefficient energy use"
  solution:
    type: automation
    description: "Motion-activated brightness based on time of day"
    estimated_effort: "30 minutes"
```

## Documentation Map

- `README_START_HERE.md` - Quick start, restart guide
- `architecture.md` - Multi-agent philosophy and design (READ THIS FIRST)
- `CONFIGURATION_SETUP.md` - Configuration details and usage examples
- `AREA_ASSIGNMENT_README.md` - Area assignment workflow
- `RENTAL_INSTANCE_SETUP.md` - Rental VM isolation guide
- `SYNC_SETUP.md` - Git sync automation
- `WARP.md` - Developer terminal guide

## File Structure Conventions

```
/config/
├── configuration.yaml          # Main config (well-organized sections)
├── secrets.yaml                # Credentials (NEVER commit)
├── templates.yaml              # Helper sensors
├── automations.yaml            # UI-managed automations
├── scripts/
│   └── rental_scenes.yaml      # Rental scripts
├── dashboards/
│   └── rental_suite.yaml       # YAML dashboards
├── themes/                     # Frontend themes
├── custom_components/          # HACS integrations
├── esphome/                    # ESPHome device configs
└── .storage/                   # HA internal (don't edit manually)
```

## Security Notes

- `secrets.yaml` excluded from git via `.gitignore`
- `.storage/` directory excluded (contains tokens, DB)
- `.ha_token` for scripts excluded
- GitHub secret scanning enabled
- Use `!secret` references in all config files

## Philosophy

**"The System Greater Than The One"**

This configuration is an AI art piece exploring whether specialized agents working together can create something more intelligent than any single component. It's a homage to collaborative intelligence - where the whole truly is greater than the sum of its parts.

Each agent has expertise, suggests improvements, and coordinates with others. The result is an emergent smart home that learns, adapts, and proactively helps its users.

**Current Phase**: Phase 1 - Foundation (ready for Phase 2: Agent Framework)

---

*For detailed architecture, read `architecture.md`. For quick start, read `README_START_HERE.md`.*
