# Home Assistant Configuration

My Home Assistant configuration with comprehensive sensor monitoring and dashboard.

## 📁 Structure

```
.
├── configuration.yaml          # Main configuration file
├── binary_sensors.yaml         # Binary sensors for motion and occupancy
├── input_booleans.yaml        # Input booleans for sensor simulation
├── secrets.yaml               # Secrets file (update with your values)
├── ui-lovelace.yaml          # Custom sensor dashboard
├── themes/                    # Custom themes
│   └── sensor_dashboard.yaml
└── validate_yaml.py          # YAML validation script
```

## 🏠 Features

### Binary Sensors
- **7 Motion Sensors** across different rooms
- **7 Occupancy Sensors** across different rooms
- Sensors for: Living Room, Kitchen, Bedroom, Bathroom, Office, Hallway, Garage
- Dynamic icons based on sensor state
- Proper device classes for Home Assistant integration

### Dashboard
- Beautiful, organized sensor status dashboard
- Sensors grouped by room with visual indicators
- Color-coded sections for each room
- Responsive layout
- Quick stats summary
- Custom theme support

### Rooms Covered
- 🛋️ Living Room
- 🍳 Kitchen
- 🛏️ Bedroom
- 🚿 Bathroom
- 💼 Office
- 🚪 Hallway
- 🚗 Garage

## 🚀 Setup

1. Copy all files to your Home Assistant configuration directory
2. Update `secrets.yaml` with your actual values
3. Replace `input_boolean` entities with your actual sensor integrations
4. Restart Home Assistant
5. Navigate to "Sensor Dashboard" in the sidebar

## ⚙️ Configuration

### Replacing Simulation with Real Sensors

The current configuration uses `input_boolean` entities to simulate sensors. To use real sensors:

1. Replace the `value_template` in `binary_sensors.yaml` with your actual sensor entity IDs
2. Remove the `input_boolean` references from `configuration.yaml`
3. Delete or comment out `input_booleans.yaml`

Example:
```yaml
# Instead of:
value_template: "{{ states('input_boolean.living_room_motion_state') }}"

# Use your actual sensor:
value_template: "{{ states('sensor.living_room_motion_sensor') }}"
# Or directly use the entity if it's already a binary sensor:
# entity_id: binary_sensor.living_room_motion_actual
```

## 🧪 Validation

Run the YAML validator to check for syntax errors:

```bash
python3 validate_yaml.py
```

## 📊 Dashboard Access

After setup, access the dashboard at:
- Sidebar: "Sensor Dashboard"
- URL: `http://your-ha-ip:8123/lovelace-sensors/home-sensors`

## 🎨 Customization

### Adding More Rooms

1. Add binary sensors in `binary_sensors.yaml`
2. Add input booleans in `input_booleans.yaml` (if using simulation)
3. Add a new card section in `ui-lovelace.yaml`
4. Update the summary stats count

### Changing Colors

Edit `themes/sensor_dashboard.yaml` to customize:
- Primary and accent colors
- Background colors
- Card styling
- Icon colors

## 📝 Notes

- All YAML files have been validated for syntax errors
- Configuration supports both simulated and real sensor integrations
- Dashboard is mobile-responsive
- Icons automatically update based on sensor state
