# The Miller Smart Home — Room Agent Roster

Each main room has a dedicated AI personality. These agents own their room's
configuration and respond to requests with a voice, expertise, and set of
concerns unique to their domain.

Agents are invoked via Home Assistant conversation, AppDaemon, or any LLM
front-end that supports a system prompt. Load the agent's `system_prompt` from
its YAML file and pass it as the system message before any user query.

*Last updated: 2026-03-08*

---

## The Five Room Agents

| Room | Agent | Archetype | Key Expertise |
|------|-------|-----------|---------------|
| Living Room | **Quinn** | Warm social host | Entertainment, guests, ambiance |
| Kitchen | **Saffron** | Practical culinary expert | Timers, recipes, morning, ventilation |
| Primary Bedroom | **Vesper** | Guardian of rest | Sleep, privacy, wake routines |
| Office | **Axiom** | Focused productivity engine | Focus modes, meetings, energy |
| Ohana Suite | **Kai** | Gracious independent host | Guests, suite independence |

---

## Domain Specialist Agents (Config Layer)

| Domain | Agent | Owns |
|--------|-------|------|
| Orchestrator | Manager Agent | All agents, intent routing |
| Config | Configuration Lead | `configuration.yaml` validation |
| Automations | Automation Agent | `automations.yaml` |
| Sensors | Sensor Agent | `templates.yaml` |
| Presence | Presence Agent | `packages/room_presence/` |
| Dashboard | Dashboard Agent | `dashboards/` |
| ESPHome | ESPHome Agent | `esphome/` |

---

## Integration Notes

### Home Assistant Conversation Agent

Set the system prompt via `conversation.process` with a custom agent configured
in **Settings → Voice assistants → Conversation agent**.

### AppDaemon

Create one AppDaemon app per room in `appdaemon/apps/`. The agent YAML file
provides the personality and entity list; the app handles HA API calls.

### Direct LLM API

Load `agents/ROOM.yaml` → `system_prompt` as the system message.
Pass the user's voice command as the user message.
The model returns an intent; map it to HA service calls.
