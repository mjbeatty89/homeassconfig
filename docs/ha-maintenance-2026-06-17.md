# Home Assistant Maintenance - 2026-06-17

## Summary

- HA core API was healthy and reachable at `2026.6.3`.
- The current Codex thread did not expose callable `home_assistant` tools even though `home_assistant` was configured in `~/.codex/config.toml`.
- A fresh `codex exec` subprocess did expose callable HA MCP tools and was used to confirm current add-on memory leaders.
- The suspected Java issue did not reproduce as an active HA add-on problem during this pass.
- Safe-tier entity cleanup removed `109` stale restored entities.

## MCP Recovery

- Fresh-session path used: `codex exec`
- Result: HA MCP callable in the fresh subprocess session
- Core version reported there: `core-2026.6.3`

## Java / Add-on Memory Triage

- Top add-ons by memory from fresh-session HA MCP:
  - Music Assistant: `608972800` bytes
  - Z-Wave JS UI: `148099072` bytes
  - Matter Server: `109363200` bytes
  - Z-Wave JS: `86413312` bytes
  - Tailscale: `66568192` bytes
- Traccar status during this pass:
  - Installed
  - `stopped`
  - no live Supervisor memory stats
  - no useful `java` or `traccar` memory/log hit from the read-only HA-side checks
- Conclusion:
  - The Java memory issue looked benign or inactive during this pass.
  - The current memory leader was Music Assistant, not a Java add-on.

## Entity Cleanup

- Selection rule:
  - `state` was `unavailable` or `unknown`
  - `attributes.restored == true`
  - entity fell into the safe-tier update/meta/cloud/media ghost buckets
- Removal method:
  - the first large batch was started from a fresh `codex exec` session using HA MCP
  - the remaining unresolved media ghosts were reconciled directly through the HA WebSocket entity registry API

### Counts

- Restored unavailable/unknown count before cleanup: `990`
- Restored unavailable/unknown count after cleanup: `881`
- Net removed from safe-tier batch: `109`

### Deleted Batches

#### Abandoned update entities (20)

- `update.monitor_app_update`
- `update.spotify_mood_lights_sync_update`
- `update.replay_lights_history_update`
- `update.ench_entity_checker_update`
- `update.waves_update`
- `update.nordic_theme_update`
- `update.macos_theme_based_on_the_system_wide_light_and_dark_mode_ui_update`
- `update.auto_fan_speed_controller_update`
- `update.lightwand_update`
- `update.appdaemon_climate_update`
- `update.covers_manager_update`
- `update.follow_me_update`
- `update.healthcheck_update`
- `update.fontawesome_update`
- `update.mushroom_better_sliders_update`
- `update.stack_in_card_update`
- `update.simple_weather_card_update`
- `update.light_entity_card_update`
- `update.homed_zigbee_networkmap_card_update`
- `update.balena_cloud_update`

#### Dead dashboard/meta/cloud remnants (63)

- `sensor.dwains_dashboard_latest_version`
- `button.homeassistant_restart`
- `button.homeassistant_reload`
- `button.ignore_all_issues`
- `button.unignore_all_issues`
- `event.repair`
- `sensor.air_quality`
- `sensor.alarm_control_panels`
- `sensor.areas`
- `sensor.automations`
- `sensor.binary_sensors`
- `sensor.buttons`
- `sensor.calendars`
- `sensor.cameras`
- `sensor.climate`
- `sensor.covers`
- `sensor.dates`
- `sensor.datetimes`
- `sensor.devices`
- `sensor.device_trackers`
- `sensor.entities`
- `sensor.fans`
- `sensor.humidifiers`
- `sensor.integrations`
- `sensor.custom_integrations`
- `sensor.input_booleans`
- `sensor.input_buttons`
- `sensor.input_datetimes`
- `sensor.input_numbers`
- `sensor.input_selects`
- `sensor.input_texts`
- `sensor.images`
- `sensor.lights`
- `sensor.locks`
- `sensor.media_players`
- `sensor.numbers`
- `sensor.persistent_notifications`
- `sensor.persons`
- `sensor.remotes`
- `sensor.scenes`
- `sensor.scripts`
- `sensor.selects`
- `sensor.sensors`
- `sensor.sirens`
- `sensor.suns`
- `sensor.stt`
- `sensor.switches`
- `sensor.texts`
- `sensor.times`
- `sensor.tts`
- `sensor.vacuums`
- `sensor.update`
- `sensor.water_heaters`
- `sensor.weather`
- `sensor.zones`
- `sensor.issues`
- `sensor.active_issues`
- `sensor.ignored_issues`
- `switch.cloud_alexa`
- `switch.cloud_alexa_report_state`
- `switch.cloud_google`
- `switch.cloud_google_report_state`
- `switch.cloud_remote`

#### Media ghosts (26)

- `media_player.den_chrome_audio`
- `media_player.master_bedroom_tv`
- `media_player.plant_bed_speaker`
- `media_player.suite_bedroom_tv`
- `media_player.living_room_tv`
- `media_player.plant_bed_speaker_2`
- `media_player.den_chrome_audio_2`
- `media_player.master_bedroom_tv_airplay`
- `media_player.living_room_tv_airplay`
- `media_player.suite_bedroom_tv_2`
- `media_player.smarttv_4k`
- `media_player.audio_video_playback_on_debian`
- `media_player.master_tv`
- `button.master_tv_favorite_current_song`
- `button.suite_bedroom_tv_favorite_current_song`
- `button.den_chrome_audio_favorite_current_song`
- `button.plant_bed_speaker_favorite_current_song`
- `button.master_bedroom_tv_airplay_favorite_current_song`
- `button.audio_video_playback_on_debian_favorite_current_song`
- `button.hy320_2521_favorite_current_song`
- `media_player.hy320_2521`
- `button.googletv7468_airplay_favorite_current_song`
- `media_player.googletv7468_airplay`
- `media_player.googletv7468`
- `button.smarttv_4k_favorite_current_song`
- `button.bengal_for_arm64_es_0_0_0_0_favorite_current_song`

## Safety Checks

- Confirmed still present and queryable after cleanup:
  - `light.living_room_lights`
  - `light.living_room_ambient_lights`
  - `light.prim_lights`
  - `group.lights_adaptive_living_room`
  - `group.lights_adaptive_primary_bedroom`
- No active living-room or primary-bedroom control surfaces were touched by this pass.
