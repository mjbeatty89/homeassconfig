# Home Assistant Stability Triage - 2026-05-25

## Summary

Home Assistant was repeatedly becoming unreachable after reboot. The first symptom from Codex was that the Home Assistant MCP tools were present but could not connect to Core. Direct network checks showed the Pi was initially unreachable, then came back through Tailscale/Observer while Core on port `8123` was down or refusing connections.

## Access Findings

- `10.1.30.10:8123` was initially unreachable.
- Tailscale later showed `ha.manee-frog.ts.net` responding again.
- HA Observer on `http://100.79.62.42:4357/` reported:
  - Supervisor connected
  - Support supported
  - Health healthy
- Core eventually responded on plain HTTP at `http://100.79.62.42:8123/`.
- The Codex MCP server had been launched against an HTTPS URL, so MCP failed until the server process reconnected using the corrected HTTP config.

## Main Log Findings

The strongest startup offenders were:

- `custom_components.govee.light`
  - Repeated `light.living_room_lightstrip does not report a color mode`
  - Repeated Govee API 429 rate-limit warnings
  - Event-loop blocking warnings from the custom Govee integration
- `decora_wifi`
  - `RecursionError exception in shielded future`
  - Light platform setup exceeded 60 seconds
- `homekit`
  - Browser Mod `screen` entities exceeded the 150-device HomeKit bridge limit
- `mqtt`
  - Mosquitto broker config entry requires re-authentication
- `openhasp`
  - Integration failed because plate objects are not set up in YAML
- `ai_automation_suggester`
  - Anthropic API low-credit errors

Recorder also reported an unfinished prior session and could not validate a clean SQLite shutdown, which is consistent with abrupt Core termination.

## Actions Taken

- Disabled the Govee config entry `01K879B7MDTHFDTHGN31MYCRJP`.
- Restarted Home Assistant Core so the disabled Govee entry would stay out of startup.
- Watched Core after restart for roughly two minutes:
  - API returned successfully throughout the watch window after startup
  - Observer stayed healthy
- Confirmed `govee` is now:
  - `state: not_loaded`
  - `disabled_by: user`
- Turned off the living room contract automations that could still touch the Govee-backed ambient group:
  - `automation.contract_living_room_occupancy_follow`
  - `automation.contract_living_room_scene_selector`
- Updated both living room contract automations to `initial_state: false` so they remain off after future Core restarts.

## Current State

- Govee is disabled and was confirmed `not_loaded` after the first Core restart.
- Living room contract automations are parked and were updated to `initial_state: false`.
- After `ha_check_config` was attempted through MCP, Core dropped again while Observer remained healthy.
- A later hard reset caused the whole HA host to disappear from LAN, Tailscale, and Observer through the monitoring window.
- After the next reboot, the host, Tailscale, Observer, and Core API all returned.
- Core later dropped again at about `06:14:03` while LAN ping, Tailscale ping, and Observer stayed healthy. This confirms the active failure mode is Core/API stopping, not a whole-Pi network outage.

## Post-Reset Watch

Observed after the hard reset:

- `05:56:46`: Observer stopped responding, confirming the reset/power cycle reached the host.
- `05:56:46` through `06:02:57`: Core API remained down.
- `05:56:46` through `06:02:57`: Observer remained unreachable.
- Direct LAN ping to `10.1.30.10` failed.
- Direct Tailscale ping to `100.79.62.42` failed.
- `tailscale ping ha.manee-frog.ts.net` received no reply.

Interpretation:

- Before the hard reset, this looked like a Core-container failure with Supervisor still alive.
- After the hard reset, the Pi/HA host itself did not return to the network during the watch window.
- That shifts the immediate next check toward boot media, power, hardware boot status, or local console output.

## Second Reboot Watch

Observed after the user rebooted again:

- `06:07:24`: LAN ping, Tailscale ping, and Observer were healthy; Core API still down.
- `06:07:50`: Core API began responding.
- `06:09:27`: Supervisor reported Home Assistant Core state `RUNNING`.
- `06:10:13`: Supervisor reported itself fully up and running.
- `06:07:50` through `06:13:58`: Core API stayed reachable.
- `06:14:03`: Core API began refusing connections again while LAN ping, Tailscale ping, and Observer stayed healthy.

Interpretation:

- The reboot did bring the Pi and Supervisor back cleanly.
- The active crash is now isolated to Home Assistant Core becoming unreachable after startup.
- The failure happened after Supervisor began its application add-on phase and while several add-ons were still restart-looping.

## Add-on Storm Findings

The strongest post-reboot add-on offenders were:

- `core_git_pull`
  - Restarted repeatedly immediately after boot.
  - Log showed `git_remote` was blank and produced `No such remote ''`.
  - Log also reported the local origin did not match `git@github.com:mjbeatty89/homeassconfig.git`.
- `4061d8e8_postgres_pgvector_tester`
  - This is explicitly an integration test add-on.
  - It was configured with `boot: auto` and `watchdog: true`.
  - It repeatedly ran `/tester.py`, failed to connect to PostgreSQL after 10 attempts, and raised `RuntimeError`.
- `a0d7b954_nodered`
  - State was `error`.
  - It repeatedly tried to install custom NPM packages and failed with `Failed to install a specified npm package`.
  - One configured package name appears malformed: `@hakit/core]`.
- `a0d7b954_logviewer`
  - Repeatedly stopped and was restarted by watchdog.
- `core_openthread_border_router`
  - Restarted repeatedly.
  - Supervisor warned that `autoflash_firmware` is not a valid option.
  - OTBR logs showed repeated Spinel frame send failures and `otbr-agent exited with code 1`.

## Quarantine Actions

Low-risk restart-loop mitigations applied through HA MCP before Core dropped again:

- `4061d8e8_postgres_pgvector_tester`
  - Set `watchdog: false`
  - Set `boot: manual`
- `core_git_pull`
  - Submitted `watchdog: false`
  - Submitted `boot: manual`
  - Submitted `repeat.active: false`
  - The tool reported this change was pending add-on restart.
- `a0d7b954_nodered`
  - Set `watchdog: false`
- `a0d7b954_logviewer`
  - Set `watchdog: false`
  - Set `boot: manual`
- `core_openthread_border_router`
  - Set `watchdog: false`
- `a0d7b954_nodered`
  - Later set `boot: manual` as well because it was failing during custom NPM package install.

Live config edits applied through the Samba config share:

- `configuration.yaml`
  - Backed up to `configuration.yaml.bak-2026-05-25-0733-decora-disable`.
  - Commented out the YAML-only `light: - platform: decora_wifi` block.
  - Reason: `decora_wifi` was recursively re-entering login on Python 3.14 and timing out light setup.
- `.storage/core.config_entries`
  - Backed up to `.storage/core.config_entries.bak-2026-05-25-0748-disable-bluetooth`.
  - Marked all `bluetooth` and `ibeacon` config entries `disabled_by: user`.
  - Confirmed the three `elkbledom_fastlink` entries were also `disabled_by: user`.
  - Reason: the fresh post-restart error shifted to BlueZ/Bluetooth `OSError: [Errno 12] Out of memory`, including a stack source from `custom_components/elkbledom_fastlink`.

Not yet changed:

- The broader HA startup graph still has many noisy custom integrations, but the emergency changes above focused only on the fresh crash-path evidence.

## Later Restart Findings

- After the Decora YAML block was disabled and HA was restarted, the host briefly disappeared from LAN/Tailscale and then came back.
- Core returned at `07:40:29`.
- No fresh Decora error was observed after the patched restart; the Decora stack trace in the system log was from the previous `07:30` startup.
- A fresh post-restart error showed `habluetooth` / BlueZ reporting `[Errno 12] Out of memory`.
- The traceback source included `custom_components/elkbledom_fastlink/elkbledom.py`.
- All three `elkbledom_fastlink` entries were disabled through HA MCP and unloaded successfully.
- Core/API dropped again shortly after, while Observer stayed healthy for several minutes.
- Because Core stayed down, the broader Bluetooth/iBeacon entries were disabled directly in `.storage/core.config_entries` via the mounted Samba share.

## Next Recommended Fixes

- If Core is down but Observer is healthy, restart the host/Core locally and immediately collect `ha core logs`, `ha supervisor logs`, and `ha host logs`.
- If local console is available, run `ha core logs --no-color | tail -n 200` after the next drop to capture the actual Python exception or OOM line.
- Stop or disable the Log Viewer watchdog loop if it is not needed during triage.
- Consider temporarily disabling the OpenThread Border Router watchdog if no critical Thread/Matter devices are currently needed.
- Fix Node-RED custom package configuration before re-enabling its watchdog. Start by removing the malformed `@hakit/core]` package entry or correcting it to the intended package.
- Fix or leave disabled the Git Pull add-on. The immediate issue is `git_remote` being blank and not matching the configured repository expectation.
- Leave the pgvector tester disabled unless deliberately testing the pgvector add-on.
- Locate and remove or comment out the YAML `decora_wifi` light platform until the recursion issue is resolved.
- Rebuild living room ambient scenes without the old custom Govee integration in the ambient group.
- Clean HomeKit exposure filters so Browser Mod `screen` entities are not exported.
- Re-authenticate MQTT or temporarily disable the MQTT config entry if MQTT starts causing startup delays.
- Remove or repair `openhasp` YAML/config entry if plates are not currently in use.
- Remove archived HACS repository `openrgb-ha/openrgb-ha`.

## 2026-05-28 Morning Stability Check

Context:

- The config mount was back and HA was no longer immediately crashing after reboot.
- A prior watch caught Core/API dropping while Observer stayed healthy.
- The goal was quick triage before resuming living room dashboard work.

Observed:

- `10.1.30.10:4357` Observer stayed healthy while `10.1.30.10:8123` briefly refused connections.
- Core/API recovered on its own and then returned expected unauthenticated `401` responses at `/api/`.
- Health check reported Core `2026.5.4`, HAOS `17.3`, Supervisor `2026.05.1`, Python `3.14.2`, and recorder DB around `32 MiB`.
- Recorder started a new run at `2026-05-28T12:59:39Z` after ending unfinished run id `22`, confirming the Core bounce.
- No fresh `decora_wifi`, BlueZ, Bluetooth, or `Out of memory` error appeared in the current system log searches.

Current active noise:

- MQTT config entry is not authorized and has an active reauth repair.
- ESPHome cannot reach several Bluetooth proxy devices and one Apollo MTR device.
- Airthings BLE cannot find device `30:AF:7E:3D:87:D9`.
- Apple TV / `pyatv` is timing out on Companion protocol calls.
- Music Assistant had a DNS timeout talking to its add-on hostname.
- Glances is still in `error`, but now has `boot: manual` and `watchdog: false`.
- Node-RED is still in `error`, already `boot: manual` and `watchdog: false`; its configured NPM list still contains a malformed-looking `@hakit/core]` entry.
- Let's Encrypt, OpenThread Border Router, Git Pull, Piper, openWakeWord, Whisper, MQTT IO, and NUT are not cleanly started, but the currently running add-ons are not showing runaway memory use.

Action taken:

- Confirmed Glances is parked with `boot: manual` and `watchdog: false` so it should not restart-loop on the next boot.
- Left broader integrations untouched because the old crash signatures are absent and Core is currently recovering instead of staying hard-down.

Recommendation:

- Treat the system as yellow-green, not fully green: safe enough for careful dashboard/entity inventory work, but avoid HA Core restarts or broad integration changes until a longer watch passes.
- If Core drops again while Observer stays healthy, capture local console output with `ha core logs --no-color | tail -n 200` before resetting if possible.
- Next low-risk cleanup candidates are MQTT reauth, stale ESPHome Bluetooth proxy entries, and the Airthings BLE entry, but only disable them if they continue to appear in fresh post-drop evidence.
