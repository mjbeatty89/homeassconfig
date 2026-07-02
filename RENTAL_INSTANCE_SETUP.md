# Rental Suite Home Assistant Instance Setup Guide

## Overview

This document describes the setup for a **separate, isolated Home Assistant instance** dedicated to the rental area (Den + Suite Bedroom). This ensures guests have a reliable experience while you can tinker with the main instance without affecting their stay.

---

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│        MAIN HOME ASSISTANT (Proxmox VM)                 │
│  - Your experimental playground                         │
│  - Living Room, Kitchen, Master Bedroom, Office, etc.   │
│  - Multi-agent architecture                             │
│  - Can break/restart without guest impact               │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│      RENTAL HOME ASSISTANT (Proxmox VM)                 │
│  - STABLE, minimal config                               │
│  - Den + Suite Bedroom ONLY                             │
│  - Simple automations                                   │
│  - Guest-friendly dashboard                             │
│  - Sonoff Zigbee 3.0 USB Dongle Plus                    │
└─────────────────────────────────────────────────────────┘
```

---

## Phase 1: Proxmox VM Setup

### Create New VM

1. In Proxmox, click **Create VM**
2. Configure:
   ```yaml
   General:
     VM ID: <your_choice> (e.g., 201)
     Name: ha-rental

   OS:
     ISO: haos_ova-XX.X.qcow2.xz (download latest from home-assistant.io)
     Type: Linux
     Version: 6.x

   System:
     Machine: q35
     BIOS: OVMF (UEFI)
     Add EFI Disk: Yes
     SCSI Controller: VirtIO SCSI single

   Disks:
     Bus/Device: SCSI 0
     Disk size: 32 GB minimum
     Cache: Write back
     Discard: Yes

   CPU:
     Cores: 2
     Type: host

   Memory:
     Memory: 4096 MB (4GB)
     Minimum: 2048 MB
     Ballooning: Off

   Network:
     Bridge: vmbr0
     Model: VirtIO
     Firewall: Optional
   ```

3. **DO NOT START YET** - Need to pass through Zigbee dongle first

### Pass Through USB Zigbee Coordinator

1. Find the Sonoff Zigbee dongle:
   ```bash
   lsusb
   ```
   Look for: `1a86:55d4` or similar (Sonoff dongle)

2. Note the bus and device number

3. Add USB device to VM:
   ```bash
   qm set <VM_ID> -usb0 host=1a86:55d4
   ```
   OR use Proxmox UI: Hardware → Add → USB Device

4. Start VM

---

## Phase 2: Home Assistant Initial Setup

1. Access HA at `http://<VM_IP>:8123`
2. Complete onboarding:
   - Create admin account
   - Name: "Rental Suite" or similar
   - Location: Your property
   - Set timezone
   - Skip analytics if desired

3. Install HACS (optional but recommended):
   ```bash
   # In SSH/Terminal
   wget -O - https://get.hacs.xyz | bash -
   ```

---

## Phase 3: Install Integrations

### Core Integrations

1. **Zigbee Home Automation (ZHA)**
   - Settings → Devices & Services → Add Integration
   - Search: ZHA
   - Select the Sonoff USB coordinator (should auto-detect)
   - Configure radio type: `ezsp` (for Sonoff)

2. **TP-Link Kasa Smart** (for Den ceiling fan/light)
   - Settings → Devices & Services → Add Integration
   - Search: TP-Link Kasa Smart
   - Auto-discovery should find the KS240

3. **Govee** (for Den smart diffuser)
   - Install via HACS if not already available
   - Settings → Devices & Services → Add Integration
   - Enter Govee API key

4. **ecobee** (for Suite thermostat)
   - Settings → Devices & Services → Add Integration
   - Search: ecobee
   - Follow OAuth flow to authorize

5. **Lutron Caseta** (for Pico remotes + bedroom lamps)
   - Settings → Devices & Services → Add Integration
   - Search: Lutron Caseta
   - Connect to Caseta bridge
   - **Note:** If this is shared with main instance, you may need:
     - Separate Caseta bridge (expensive), OR
     - MQTT sharing from main instance

6. **Home Assistant Android App** (for DenKiosk tablet)
   - Install HA app on Samsung tablet
   - Configure URL: `http://<rental-vm-ip>:8123`
   - Enable kiosk mode

---

## Phase 4: Device Pairing

### Zigbee Devices (via ZHA)

These need to be **re-paired** to the new coordinator:

1. **Den Motion Sensor** (ecobee EBERS41)
   - Put in pairing mode (check manual)
   - ZHA: Add device
   - Rename: "Den"

2. Other Zigbee devices if any

### WiFi Devices

1. **Den Ceiling Fan** (TP-Link KS240)
   - Should auto-discover via Kasa integration
   - Rename entities appropriately

2. **Den Smart Diffuser** (Govee H7140)
   - Should appear in Govee integration

### Caseta Devices

**OPTION A: Separate Caseta Bridge (Clean)**
- Buy new Caseta bridge for rental instance
- Re-pair Pico remotes and plug-in dimmer

**OPTION B: MQTT Sharing (Complex but works)**
- Use pylutron_caseta on main instance
- Publish to MQTT
- Subscribe on rental instance
- Requires MQTT broker setup

**OPTION C: Fake Hue Bridge (For Den Hall Switch)**
For the Hue-controlled switch:
```yaml
# In Docker on Proxmox host or as addon
docker run -d \
  --name=hue-emulator \
  --network=host \
  --restart=unless-stopped \
  diyhue/core
```
- Connect Hue Bridge to fake Hue emulator
- Map lights to rental instance

---

## Phase 5: Configuration

### Copy Dashboard

1. SSH into rental instance
2. Create dashboards directory:
   ```bash
   mkdir -p /config/dashboards
   ```

3. Copy `rental_suite.yaml` from this repo:
   ```bash
   # From your main config
   scp dashboards/rental_suite.yaml root@<rental-ip>:/config/dashboards/
   ```

4. Register dashboard:
   ```yaml
   # In configuration.yaml
   lovelace:
     mode: storage
     dashboards:
       rental-suite:
         mode: yaml
         title: Guest Suite
         icon: mdi:home
         show_in_sidebar: true
         filename: dashboards/rental_suite.yaml
   ```

### Copy Scripts

```bash
scp scripts/rental_scenes.yaml root@<rental-ip>:/config/scripts/
```

Add to `configuration.yaml`:
```yaml
script: !include scripts/rental_scenes.yaml
```

### Minimal Configuration

Keep config simple for stability:

```yaml
# configuration.yaml for Rental Instance

homeassistant:
  name: Guest Suite
  latitude: !secret latitude
  longitude: !secret longitude
  elevation: !secret elevation
  unit_system: imperial
  time_zone: America/Los_Angeles
  currency: USD
  country: US

# Load scripts
script: !include scripts/rental_scenes.yaml

# Frontend
lovelace:
  mode: storage
  dashboards:
    rental-suite:
      mode: yaml
      title: Guest Suite
      icon: mdi:home
      show_in_sidebar: true
      filename: dashboards/rental_suite.yaml

# Enable config UI
config:

# Enable frontend
frontend:

# Enable automation UI
automation: !include automations.yaml

# HTTP (optional: SSL if needed)
http:
  use_x_forwarded_for: true
  trusted_proxies:
    - 127.0.0.1
    - ::1

# Discovery
discovery:

# Recorder (limit to 7 days for performance)
recorder:
  purge_keep_days: 7
  db_url: !secret db_url  # Optional: use PostgreSQL

# History
history:

# Logbook
logbook:
```

---

## Phase 6: DenKiosk Tablet Setup

### Install Home Assistant App

1. On Samsung SM-X200 tablet
2. Open Play Store
3. Install "Home Assistant"
4. Open app, configure:
   - URL: `http://<rental-vm-ip>:8123`
   - Login with guest account

### Enable Kiosk Mode

**Option A: Fully Kiosk Browser (Recommended)**
1. Install "Fully Kiosk Browser" from Play Store
2. Settings:
   - Set homepage: `http://<rental-vm-ip>:8123`
   - Enable kiosk mode
   - Hide status bar
   - Disable back button
   - Set motion detection (optional)

**Option B: Native HA Kiosk**
In HA app settings:
- Enable "Kiosk mode"
- Hide side menu
- Set default dashboard to "Guest Suite"

### Create Guest User

1. Settings → People → Add Person
2. Name: "Guest"
3. Create user account:
   - Username: `guest`
   - Password: <simple PIN>
   - Admin: No
   - Limit to "Guest Suite" dashboard

---

## Phase 7: Simple Automations (Optional)

### Auto-Dim Lights at Night

```yaml
# automations.yaml
- id: rental_bedroom_nightlight
  alias: "Rental: Bedroom Nightlight"
  trigger:
    - platform: time
      at: "22:00:00"
  condition:
    - condition: state
      entity_id: light.suite_bedroom_scones
      state: 'on'
  action:
    - service: light.turn_on
      target:
        entity_id: light.suite_bedroom_scones
      data:
        brightness_pct: 10
```

### Den Motion Lighting

```yaml
- id: rental_den_motion_light
  alias: "Rental: Den Motion Lighting"
  trigger:
    - platform: state
      entity_id: binary_sensor.den_motion
      to: 'on'
  condition:
    - condition: sun
      after: sunset
  action:
    - service: light.turn_on
      target:
        entity_id: light.unnamed_ks240_den_fanlight
      data:
        brightness_pct: 60
```

---

## Phase 8: Testing & Validation

### Pre-Guest Checklist

- [ ] All lights respond to dashboard controls
- [ ] Thermostat adjusts temperature correctly
- [ ] Pico remotes control bedroom lamps
- [ ] Den fan operates properly
- [ ] DenKiosk tablet loads dashboard
- [ ] Guest account can access dashboard only
- [ ] Quick scenes work (Goodnight, Morning, etc.)
- [ ] No errors in Home Assistant logs
- [ ] Backup created and tested

### Stability Test

Run for 48-72 hours before first guest:
- Monitor uptime
- Check for crashes/restarts
- Verify automations work
- Test from guest perspective

---

## Phase 9: Ongoing Maintenance

### Backups

**Automated Daily Backup:**
```yaml
# automations.yaml
- id: rental_daily_backup
  alias: "Rental: Daily Backup"
  trigger:
    - platform: time
      at: "03:00:00"
  action:
    - service: hassio.backup_full
      data:
        name: "Rental Auto Backup {{ now().strftime('%Y-%m-%d') }}"
```

**Store backups separately** from main instance!

### Updates

- Update quarterly (not during guest stays)
- Test on clone VM first
- Keep one version behind stable for reliability

### Monitoring

From main instance, monitor rental instance health:
- Ping check
- HTTP check on port 8123
- Alert if down for > 5 minutes

---

## Device Summary

| Device | Type | Integration | Notes |
|--------|------|-------------|-------|
| Den Motion Sensor | ecobee EBERS41 | ZHA | Battery-powered |
| Den Smart Diffuser | Govee H7140 | Govee | WiFi |
| DenKiosk Tablet | Samsung SM-X200 | HA App | Wall-mounted |
| Suite Bedroom Picos | Lutron Caseta | Lutron | Battery, 2x remotes |
| Suite Bedroom Lamps | Lutron PD-3PCL | Lutron | Plug-in dimmer |
| Suite Thermostat | ecobee3 lite | ecobee | WiFi |
| Den Ceiling Fan | TP-Link KS240 | Kasa | WiFi, fan+light |

**Total: 8 devices, ~140 entities**

---

## Troubleshooting

### Guests can't connect to DenKiosk

1. Check tablet WiFi connection
2. Verify HA URL is correct
3. Ensure guest user has permissions
4. Restart HA app on tablet

### Lights not responding

1. Check integration status (Settings → Devices)
2. Verify network connectivity
3. Check automation conflicts
4. Review HA logs

### Thermostat offline

1. Check ecobee cloud status
2. Verify thermostat WiFi
3. Re-authenticate integration if needed

### Zigbee devices dropping

1. Check coordinator USB connection
2. Add Zigbee repeaters if needed
3. Check interference (WiFi on same channel)
4. Update coordinator firmware

---

## Future Enhancements

- **Guest WiFi Network**: Separate VLAN for privacy
- **Voice Assistant**: Google/Alexa in suite
- **Smart Lock**: Keyless entry for guests
- **Occupancy Tracking**: Auto-adjust for checkout
- **Guest Portal**: Web-based welcome guide

---

## Support

For issues during guest stay:
1. Check main monitoring system
2. Access rental instance: `http://<ip>:8123`
3. Guest user: `guest` / `<pin>`
4. Admin user: `admin` / `<password>`

**Emergency Reset:**
```bash
# SSH into Proxmox
qm stop <VM_ID>
qm snapshot <VM_ID> rental_emergency_$(date +%Y%m%d)
qm start <VM_ID>
```

---

**Last Updated:** 2025-11-26
**Status:** Ready for Implementation
**Next Steps:** Create Proxmox VM and begin device pairing

---

*Happy hosting! Your guests will love the reliable smart home experience.*
