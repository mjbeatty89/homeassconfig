# Area Assignment - README

## What This Does

Automatically assigns **348 entities** to their correct areas/rooms based on intelligent name matching.

### Areas Created

✅ 14 areas:
- Office
- Plant Bedroom
- Upstairs Bathroom
- Primary Bedroom
- Primary Bathroom
- Primary Closet
- Living Room
- Dining Room
- Kitchen
- Den
- Suite Bedroom
- Suite Bathroom
- Basement
- Outside

### Entities Assigned

- ✅ **309 high confidence** entities (100% certain)
- ✅ **39 medium confidence** entities (confirmed by you)
- ⏭️ **2,681 uncertain** entities (mostly system entities that don't need areas)

**Total: 348 entities assigned to areas**

---

## How to Apply

### Prerequisites

1. **Home Assistant must be running**
2. **Need a Long-Lived Access Token**

### Step 1: Create Access Token

1. Open Home Assistant
2. Click your profile (bottom left)
3. Scroll to "Long-Lived Access Tokens"
4. Click "Create Token"
5. Name it: "Area Assignment Script"
6. Copy the token

### Step 2: Save Token

```bash
cd /config
echo 'YOUR_TOKEN_HERE' > .ha_token
chmod 600 .ha_token  # Secure the file
```

### Step 3: Install Python Requests (if needed)

```bash
# If using Home Assistant Container/Docker
pip3 install requests

# If using Home Assistant OS (via SSH addon)
apk add py3-requests
```

### Step 4: Run the Script

```bash
cd /config
python3 apply_area_assignments.py
```

### Expected Output

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                      HOME ASSISTANT AREA ASSIGNMENT                          ║
║                         Applying area assignments...                         ║
╚══════════════════════════════════════════════════════════════════════════════╝

🔌 Testing Home Assistant connection...
   ✅ Connected to Home Assistant

================================================================================
CREATING AREAS
================================================================================

📍 Creating area: Office
   ✅ Created successfully

📍 Creating area: Plant Bedroom
   ✅ Created successfully

... [continues for all areas] ...

================================================================================
ASSIGNING ENTITIES TO AREAS
================================================================================

📍 Basement (15 entities)
   ✅ Assigned 15 entities

📍 Den (94 entities)
   ✅ Assigned 94 entities

... [continues for all areas] ...

================================================================================
SUMMARY
================================================================================
Total assigned: 348
Total failed: 0
================================================================================

╔══════════════════════════════════════════════════════════════════════════════╗
║                              ✅ COMPLETE!                                    ║
║                  All entities have been assigned to areas.                   ║
║              Check Home Assistant → Settings → Areas & Zones                 ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## Files Created

| File | Purpose |
|------|---------|
| `assign_areas.py` | Analysis script - shows what would be assigned |
| `apply_area_assignments.py` | Execution script - actually applies assignments |
| `.ha_token` | Your access token (you create this) |

---

## Verification

After running the script:

1. Go to Home Assistant → Settings → Areas & Zones
2. Click on each area
3. Verify entities are correctly assigned
4. Adjust any that need tweaking (rare)

---

## Troubleshooting

### Error: "Cannot connect to Home Assistant"

**Solution:** Check that Home Assistant is running at `http://localhost:8123`

If running on a different port/host, edit `apply_area_assignments.py`:
```python
HA_URL = "http://your-ha-ip:8123"
```

### Error: "Token file not found"

**Solution:** Create the `.ha_token` file with your access token (see Step 2)

### Error: "Area already exists"

**Solution:** This is fine! The script will still assign entities to existing areas.

### Some entities failed to assign

**Solution:** Check Home Assistant logs for details. Common reasons:
- Entity no longer exists
- Entity is disabled
- Integration not loaded

---

## What Gets Skipped

The script **intentionally skips** system entities that don't need areas:

- ☀️ Sun/Moon entities
- 🏠 Home Assistant system sensors
- 🔧 Configuration entities
- 📊 Integration diagnostics
- 🌐 Zone entities

These will remain unassigned (this is correct behavior).

---

## Area Breakdown

| Area | Entities | Key Devices |
|------|----------|-------------|
| Living Room | 35 | Media players, lights, blinds |
| Den | 94 | DenKiosk, lights, thermostat, TV |
| Primary Bedroom | 44 | TV, lights, Pico remotes |
| Office | 35 | Speakers, lights, switches, TV |
| Kitchen | 19 | Camera, motion sensors |
| Plant Bedroom | 26 | Speaker, lights, motion |
| Suite Bedroom | 18 | TV, lights, Pico remotes |
| Basement | 15 | Lights, sensors |
| Outside | 29 | Cameras, valves, outlets |
| Primary Bathroom | 13 | Fan, lights, sensors |
| Upstairs Bathroom | 11 | Light switches, sensors |
| Dining Room | 9 | Motion sensors, blinds |

---

## Next Steps After Assignment

1. **Review dashboards** - Area cards will now work properly
2. **Update automations** - Can now use `area: den` in triggers
3. **Voice assistants** - "Turn off all lights in the kitchen" will work
4. **Magic Areas** - Will track presence per area correctly

---

## Manual Adjustments

If you need to manually adjust any assignments:

**Via UI:**
1. Settings → Devices & Services
2. Click on device
3. Select correct area from dropdown

**Via Service Call:**
```yaml
service: homeassistant.add_entity_to_area
data:
  entity_id: light.some_light
  area_id: kitchen
```

---

## Backup First! (Optional but Recommended)

Before running the script:

```bash
# Backup entity registry
cp .storage/core.entity_registry .storage/core.entity_registry.backup

# Or create full backup via UI
# Settings → System → Backups → Create Backup
```

---

**Questions?** Check the [Home Assistant Areas documentation](https://www.home-assistant.io/docs/organizing/)

---

**Last Updated:** 2025-11-26
**Status:** Ready to execute
**Entities Affected:** 348
**Areas Created:** 14
