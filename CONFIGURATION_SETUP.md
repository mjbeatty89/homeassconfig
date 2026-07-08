# Home Assistant Configuration Setup

## 📋 Overview

Your Home Assistant configuration has been completely rebuilt following best practices from the official documentation. This guide explains the new structure and how to use it.

---

## 🏗️ File Structure

```
/config/
├── configuration.yaml          # Main configuration (well-organized, commented)
├── secrets.yaml                # Sensitive data (WiFi, API keys, coordinates)
├── templates.yaml              # Template sensors & binary sensors
├── automations.yaml            # Automations (UI-managed)
├── scenes.yaml                 # Scenes (UI-managed)
├── scripts/
│   └── rental_scenes.yaml      # Rental suite scripts
├── dashboards/
│   └── rental_suite.yaml       # Rental suite dashboard (YAML)
├── themes/                     # Frontend themes
├── .storage/                   # Internal HA storage (don't edit manually)
└── custom_components/          # Custom integrations (HACS, etc.)
```

---

## ✅ What's Configured

### Core Settings (configuration.yaml)

1. **Homeassistant Core**
   - Name: Miller Smart Home
   - Location: Using secrets for latitude/longitude/elevation
   - Timezone: America/Detroit
   - Units: Imperial
   - URLs: Internal and external from secrets

2. **Default Integrations**
   - Includes all standard HA integrations (automation, history, logbook, etc.)

3. **HTTP & Security**
   - Trusted proxies for reverse proxy support
   - Trusted proxy ranges include loopback, LAN ranges, Tailscale, and Docker bridge networks (see `configuration.yaml`)
   - SSL ready (commented out, uncomment when needed)

4. **Recorder & History**
   - 7-day retention (keeps database lean)
   - Excludes noisy sensors (signal strength, WiFi stats, etc.)
   - Optimized commit interval

5. **Logging**
   - Default: info level
   - Spook warnings only (reduces noise)
   - Debug lines commented for easy activation

6. **Lovelace Dashboards**
   - **Mode: Storage** (UI-managed main dashboard)
   - **Added YAML dashboard:** "Rental Suite"
     - Filename: `dashboards/rental_suite.yaml`
     - Shows in sidebar
     - Icon: mdi:home-variant
     - Available to non-admin users

7. **Notifications**
   - Group `notify.all_devices` configured
   - Includes your iPhone
   - Easy to add more devices

8. **Stream Integration**
   - Enabled for camera feeds

9. **Text-to-Speech**
   - No YAML TTS provider configured by default

### Template Sensors (templates.yaml)

**11 New Helper Sensors Created:**

#### Binary Sensors (Motion & Occupancy):

1. **Any Motion Detected**
   - Aggregates ALL motion sensors in house
   - Perfect for "someone's home" detection

2. **Living Areas Motion**
   - Dining + Den motion
   - Main living space activity

3. **Bedrooms Motion**
   - Plant Bed + Primary Bed + Suite Bedroom
   - Sleeping areas activity

4. **Rental Area Motion**
   - Den + Suite Bedroom motion
   - Guest activity tracking

5. **Outdoor Motion**
   - Front porch + Basement (exterior)
   - Perimeter detection

6. **Any Room Occupied**
   - Combines all occupancy sensors
   - More reliable than motion alone

7. **Home Occupied**
   - Motion OR occupancy anywhere
   - Master occupancy sensor

8. **Night Mode**
   - Active 10 PM - 6 AM
   - Useful for lighting automations

9. **Rental Suite Occupied**
   - Guest presence in rental area
   - Protects guest privacy

#### Regular Sensors:

10. **Motion Sensors Average Battery**
    - Average battery level across all motion sensors
    - Get alerts when batteries run low

11. **Active Motion Sensors**
    - Count of currently detecting motion
    - See at-a-glance activity level

12. **Time of Day**
    - Morning / Afternoon / Evening / Night
    - Automations can use this instead of complex time conditions

---

## 🔒 Secrets Management

Your `secrets.yaml` contains:

- WiFi credentials (main & IoT networks)
- Home Assistant long-lived token
- MQTT server
- Spotify API credentials
- Location (lat/long/elevation)
- URLs (internal/external)
- SSL certificate paths

**Security Note:** Never commit `secrets.yaml` to git! It's already in `.gitignore`.

---

## 🎯 Dashboard Configuration

The Rental Suite dashboard is now properly configured and will appear in your sidebar.

**To see it:**
1. Restart Home Assistant (see below)
2. Look in left sidebar for "Rental Suite" 📱

**Features:**
- Climate control (Suite thermostat)
- Bedroom lighting with presets
- Den lights & fan
- Quick scenes (Goodnight, Morning, etc.)

---

## 🚀 Applying This Configuration

### Step 1: Validate Configuration

BEFORE restarting, always validate:

```bash
# Via UI (safest):
Settings > System > Restart Home Assistant > Check Configuration

# Via CLI (if SSH enabled):
ha core check
```

Expected output: ✅ "Configuration valid!"

### Step 2: Restart Home Assistant

**Full Restart (required for this update):**

```bash
# Via UI:
Settings > System > Restart Home Assistant > Restart Home Assistant

# Via CLI:
ha core restart
```

**Future Changes (Quick Reload):**

Most changes can use Quick Reload instead:

```bash
# Via UI:
Settings > System > Restart Home Assistant > Quick reload

# Specific component reloads:
Developer Tools > YAML > Template Entities (reload templates)
Developer Tools > YAML > Automations (reload automations)
```

---

## 📊 New Features You Can Use

### In Automations

```yaml
# Example: Turn on lights when anyone's home
trigger:
  - platform: state
    entity_id: binary_sensor.home_occupied
    to: 'on'
action:
  - service: light.turn_on
    target:
      entity_id: light.living_room
```

```yaml
# Example: Night mode lighting
trigger:
  - platform: state
    entity_id: binary_sensor.any_motion_detected
    to: 'on'
condition:
  - condition: state
    entity_id: binary_sensor.night_mode
    state: 'on'
action:
  - service: light.turn_on
    target:
      entity_id: light.hallway
    data:
      brightness_pct: 10
```

### In Dashboards

Add cards for your new sensors:

```yaml
# Motion activity card
type: entities
entities:
  - binary_sensor.any_motion_detected
  - binary_sensor.living_areas_motion
  - binary_sensor.bedrooms_motion
  - sensor.active_motion_sensors
```

```yaml
# Battery monitoring
type: sensor
entity: sensor.motion_sensors_average_battery
graph: line
name: Motion Sensor Batteries
```

---

## 🔧 Troubleshooting

### Dashboard doesn't appear

**Solution:**
1. Check configuration is valid
2. Ensure you did a FULL restart (not quick reload)
3. Verify file exists: `ls dashboards/rental_suite.yaml`
4. Check logs: Settings > System > Logs

### Template sensors not showing

**Solution:**
1. Check for YAML syntax errors in `templates.yaml`
2. Restart Home Assistant (templates require full restart)
3. Look in Developer Tools > States for `binary_sensor.any_motion_detected`

### Secrets not working

**Solution:**
1. Verify secret name matches: `!secret ha_latitude` → `ha_latitude:` in secrets.yaml
2. No spaces before secret value
3. Quotes only needed for values with special characters

### Configuration check fails

**Solution:**
1. Read the error message carefully
2. Common issues:
   - Indentation (use 2 spaces, not tabs)
   - Missing colon after key
   - File doesn't exist in !include path
3. Use YAML validator: http://www.yamllint.com/

---

## 📝 Next Steps

### 1. Add More Dashboards

Create additional YAML dashboards:

```yaml
# In configuration.yaml, add to lovelace.dashboards:
main-house:
  mode: yaml
  title: Main House
  icon: mdi:home
  show_in_sidebar: true
  filename: dashboards/main_house.yaml
```

### 2. Split Configuration Further

As config grows, split into dedicated files:

```yaml
# configuration.yaml
light: !include lights.yaml
sensor: !include sensors.yaml
binary_sensor: !include binary_sensors.yaml
```

### 3. Use Packages (Advanced)

For modular organization by function:

```yaml
# configuration.yaml
homeassistant:
  packages: !include_dir_named packages/

# Then create packages/presence.yaml with all presence-related config
```

### 4. Create Automations

Use your new binary sensors for smart automations:

- Lights that dim at night
- Alerts when motion detected while away
- Climate adjustments based on occupancy
- Guest mode when rental suite occupied

---

## 📚 Documentation References

- **Configuration:** https://www.home-assistant.io/docs/configuration/
- **Dashboards:** https://www.home-assistant.io/dashboards/dashboards/
- **Templates:** https://www.home-assistant.io/docs/configuration/templating/
- **Secrets:** https://www.home-assistant.io/docs/configuration/secrets/
- **Splitting Config:** https://www.home-assistant.io/docs/configuration/splitting_configuration/

---

## 🎨 Sub-Agent Opportunities

Following your architecture philosophy, here are good candidates for sub-agents:

1. **Dashboard Agent** - Owns `dashboards/*.yaml`
   - Creates/maintains dashboards
   - Suggests improvements
   - Ensures consistency

2. **Template Agent** - Owns `templates.yaml`
   - Creates helper sensors
   - Identifies useful aggregations
   - Optimizes template performance

3. **Automation Agent** - Owns `automations.yaml`
   - Creates automations
   - Detects patterns
   - Suggests improvements

4. **Script Agent** - Owns `scripts/*.yaml`
   - Creates reusable scripts
   - Scene management
   - Action sequences

5. **Integration Agent** - Manages integrations
   - Adds new platforms
   - Troubleshoots issues
   - Updates configs

Each agent would have expertise in their domain and coordinate through the Manager Agent!

---

## ✅ Validation Checklist

Before running the area assignment script, verify:

- [ ] Configuration check passes
- [ ] Home Assistant restarts successfully
- [ ] Rental Suite dashboard appears in sidebar
- [ ] Template sensors visible in Developer Tools > States
- [ ] Secrets loading correctly (check logs for errors)
- [ ] No errors in Settings > System > Logs

---

**Last Updated:** 2025-11-26
**Status:** Ready to restart Home Assistant
**Next Step:** Validate configuration, restart, then run area assignment script

---

*Your smart home is becoming self-aware! 🤖*
