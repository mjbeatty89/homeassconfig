# Dashboard Structure

## Visual Layout

```
┌─────────────────────────────────────────────────────────────┐
│  🏠 Home Sensor Status                                      │
│  Monitor all motion and occupancy sensors throughout your   │
│  home                                                        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ## 🛋️ Living Room                                          │
├─────────────────────────────────────────────────────────────┤
│  ┌───────────────────┐  ┌───────────────────┐              │
│  │  Motion Sensor    │  │  Occupancy        │              │
│  │  [OFF/ON]         │  │  [OFF/ON]         │              │
│  └───────────────────┘  └───────────────────┘              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ## 🍳 Kitchen                                               │
├─────────────────────────────────────────────────────────────┤
│  ┌───────────────────┐  ┌───────────────────┐              │
│  │  Motion Sensor    │  │  Occupancy        │              │
│  │  [OFF/ON]         │  │  [OFF/ON]         │              │
│  └───────────────────┘  └───────────────────┘              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ## 🛏️ Bedroom                                              │
├─────────────────────────────────────────────────────────────┤
│  ┌───────────────────┐  ┌───────────────────┐              │
│  │  Motion Sensor    │  │  Occupancy        │              │
│  │  [OFF/ON]         │  │  [OFF/ON]         │              │
│  └───────────────────┘  └───────────────────┘              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ## 🚿 Bathroom                                              │
├─────────────────────────────────────────────────────────────┤
│  ┌───────────────────┐  ┌───────────────────┐              │
│  │  Motion Sensor    │  │  Occupancy        │              │
│  │  [OFF/ON]         │  │  [OFF/ON]         │              │
│  └───────────────────┘  └───────────────────┘              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ## 💼 Office                                                │
├─────────────────────────────────────────────────────────────┤
│  ┌───────────────────┐  ┌───────────────────┐              │
│  │  Motion Sensor    │  │  Occupancy        │              │
│  │  [OFF/ON]         │  │  [OFF/ON]         │              │
│  └───────────────────┘  └───────────────────┘              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ## 🚪 Hallway                                               │
├─────────────────────────────────────────────────────────────┤
│  ┌───────────────────┐  ┌───────────────────┐              │
│  │  Motion Sensor    │  │  Occupancy        │              │
│  │  [OFF/ON]         │  │  [OFF/ON]         │              │
│  └───────────────────┘  └───────────────────┘              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ## 🚗 Garage                                                │
├─────────────────────────────────────────────────────────────┤
│  ┌───────────────────┐  ┌───────────────────┐              │
│  │  Motion Sensor    │  │  Occupancy        │              │
│  │  [OFF/ON]         │  │  [OFF/ON]         │              │
│  └───────────────────┘  └───────────────────┘              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  ### 📊 Quick Stats                                          │
│  Total Sensors: 14 (7 Motion + 7 Occupancy)                │
│  Last Updated: 2025-10-28 10:17:04                         │
└─────────────────────────────────────────────────────────────┘
```

## Sensor States

### Motion Sensor
- **OFF**: 🔴 No motion detected (mdi:motion-sensor-off)
- **ON**: 🟢 Motion detected (mdi:motion-sensor)

### Occupancy Sensor  
- **OFF**: 🔴 Room unoccupied (mdi:account-off)
- **ON**: 🟢 Room occupied (mdi:account-check)

## Color Scheme

Each room section has a unique colored border:
- Living Room: Purple gradient
- Kitchen: Cyan
- Bedroom: Pink
- Bathroom: Blue
- Office: Orange
- Hallway: Deep Purple
- Garage: Blue Grey

## Interactive Features

1. **Click on sensor card** to see detailed history
2. **Toggle states** in Developer Tools > States (simulation mode)
3. **Real-time updates** when sensors change state
4. **Responsive design** adapts to screen size

## Entity IDs

### Motion Sensors
- `binary_sensor.living_room_motion`
- `binary_sensor.kitchen_motion`
- `binary_sensor.bedroom_motion`
- `binary_sensor.bathroom_motion`
- `binary_sensor.office_motion`
- `binary_sensor.hallway_motion`
- `binary_sensor.garage_motion`

### Occupancy Sensors
- `binary_sensor.living_room_occupancy`
- `binary_sensor.kitchen_occupancy`
- `binary_sensor.bedroom_occupancy`
- `binary_sensor.bathroom_occupancy`
- `binary_sensor.office_occupancy`
- `binary_sensor.hallway_occupancy`
- `binary_sensor.garage_occupancy`

## Dashboard Access

- **Sidebar**: "Sensor Dashboard"
- **Direct URL**: `/lovelace-sensors/home-sensors`
- **Icon**: mdi:home-analytics
