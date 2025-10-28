# Quick Start Guide

## 🚀 Getting Started

### Installation
1. Copy all files to your Home Assistant config directory (usually `/config/`)
2. Restart Home Assistant
3. Access the dashboard from the sidebar: "Sensor Dashboard"

## 📋 What's Included

### Binary Sensors (14 total)
Each room has two sensors:
- **Motion Sensor**: Detects movement
- **Occupancy Sensor**: Detects presence

**Rooms:**
- Living Room
- Kitchen
- Bedroom
- Bathroom
- Office
- Hallway
- Garage

## 🎨 Dashboard Features

### Visual Elements
- **Color-coded sections**: Each room has a unique color theme
- **Dynamic icons**: Icons change based on sensor state
- **Responsive layout**: Works on desktop and mobile
- **Quick stats**: Summary card at the bottom

### Room Colors
- 🛋️ Living Room: Purple (#667eea)
- 🍳 Kitchen: Cyan (#22c1c3)
- 🛏️ Bedroom: Pink (#fd79a8)
- 🚿 Bathroom: Blue (#00b8d4)
- 💼 Office: Orange (#ff9f40)
- 🚪 Hallway: Deep Purple (#9c27b0)
- 🚗 Garage: Blue Grey (#607d8b)

## ⚙️ Configuration Options

### Using Real Sensors
Replace the template sensors with your actual sensor entities:

```yaml
# In binary_sensors.yaml, change from:
value_template: "{{ states('input_boolean.living_room_motion_state') }}"

# To your actual sensor:
value_template: "{{ states('binary_sensor.your_actual_motion_sensor') }}"
```

### Adding More Rooms
1. Add sensors to `binary_sensors.yaml`
2. Add input booleans to `input_booleans.yaml` (if simulating)
3. Add a new card section to `ui-lovelace.yaml`
4. Choose a new color for the room

### Customizing Appearance
Edit `themes/sensor_dashboard.yaml` to change:
- Colors
- Card styling
- Icon colors
- Background colors

## 🧪 Testing

### Validate Configuration
```bash
python3 validate_yaml.py
```

### Toggle Sensors (Simulation Mode)
1. Go to Developer Tools > States
2. Find `input_boolean.living_room_motion_state` (or any room)
3. Toggle the state to see the sensor change on the dashboard

## 📱 Mobile Access
The dashboard is fully responsive and works on:
- iOS Home Assistant app
- Android Home Assistant app
- Mobile browsers

## 🔧 Troubleshooting

### Dashboard Not Showing
- Check that `ui-lovelace.yaml` exists
- Restart Home Assistant
- Clear browser cache

### Sensors Not Updating
- Check entity names match between files
- Verify input_boolean entities exist
- Check Home Assistant logs for errors

### YAML Errors
Run the validator:
```bash
python3 validate_yaml.py
```

## 📚 Further Customization

### Add Automations
Create automations based on sensor states:
```yaml
automation:
  - alias: "Living Room Motion Alert"
    trigger:
      - platform: state
        entity_id: binary_sensor.living_room_motion
        to: "on"
    action:
      - service: notify.mobile_app
        data:
          message: "Motion detected in living room"
```

### Add Notifications
Set up notifications for sensor changes:
```yaml
- service: persistent_notification.create
  data:
    title: "Sensor Alert"
    message: "{{ trigger.to_state.attributes.friendly_name }} is {{ trigger.to_state.state }}"
```

## 🌟 Next Steps
1. Replace simulated sensors with real hardware
2. Add automations based on sensor states
3. Customize the theme colors
4. Add more rooms as needed
5. Integrate with other Home Assistant features

## 📞 Support
For issues or questions:
- Check the README.md for detailed documentation
- Review Home Assistant logs: Settings > System > Logs
- Validate YAML syntax with the included validator
