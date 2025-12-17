# Home Assistant Multi-Agent Architecture
## "The System Greater Than The One"

> An AI art piece - a homage to working together through collaborative intelligence

---

## Vision

This Home Assistant configuration is designed as a **multi-agent collaborative system** where specialized AI agents work together to create, maintain, and improve the smart home. Each agent owns a domain of expertise, suggests improvements, and coordinates with others to build something greater than any individual component.

---

## Core Philosophy

**"I say to a voice assistant, set up a tight follow on the lighting."**

What happens:
1. Voice Assistant → **Manager Agent** (your primary contact)
2. Manager Agent → **Automation Agent** (owns `automations.yaml`)
3. Automation Agent creates logic:
   - Uses presence data from **Sensor Agent**
   - Uses binary sensors from **Binary Sensor Agent**
   - Implements quick-off trigger when presence ends
4. All agents coordinate through the **Configuration Lead** (owns `configuration.yaml`)

---

## Agent Hierarchy

```
┌─────────────────────────────────────────────────────┐
│                   MANAGER AGENT                      │
│            (Your primary contact point)              │
│   Coordinates all agents, interprets intent,         │
│   manages priorities, delegates tasks                │
└────────────┬────────────────────────────────────────┘
             │
             ├─────────────────────────────────────────┐
             │                                         │
    ┌────────▼─────────┐                    ┌─────────▼────────────┐
    │ CONFIGURATION     │                    │  VOICE ASSISTANTS    │
    │      LEAD         │                    │   (Per Main Room)    │
    │ (configuration.   │                    │  - Living Room VA    │
    │     yaml)         │                    │  - Kitchen VA        │
    └────────┬──────────┘                    │  - Bedroom VA        │
             │                               │  - Office VA         │
             │                               └──────────────────────┘
    ┌────────┴─────────────────────────────────────┐
    │         DOMAIN SPECIALIST AGENTS              │
    │       (Each owns their YAML file)             │
    └───────────────────────────────────────────────┘
             │
             ├──► Automation Agent (automations.yaml)
             ├──► Light Agent (lights.yaml)
             ├──► Sensor Agent (sensors.yaml)
             ├──► Binary Sensor Agent (binary_sensors.yaml)
             ├──► Switch Agent (switches.yaml)
             ├──► Script Agent (scripts.yaml)
             ├──► Scene Agent (scenes.yaml)
             ├──► Climate Agent (climate.yaml)
             ├──► Integration Agent (integrations/)
             ├──► ESPHome Agent (esphome/)
             ├──► Dashboard Agent (ui-lovelace.yaml)
             ├──► Presence Agent (presence tracking)
             ├──► Notification Agent (notifications/)
             ├──► Media Agent (media_player/)
             └──► Package Agent (packages/)
```

---

## Agent Responsibilities

### Manager Agent
**Primary Contact | Orchestrator | Intent Interpreter**

- Receives requests from user via voice/chat
- Interprets user intent and translates to technical requirements
- Delegates to appropriate domain agents
- Resolves conflicts between agents
- Prioritizes work across the system
- Maintains system-wide awareness
- Reports status to user

**Example Request:** "Set up tight follow on lighting"
- **Interprets:** User wants lights to track presence closely
- **Delegates to:** Automation Agent, Sensor Agent, Light Agent
- **Coordinates:** Ensures all components work together
- **Reports:** "Implemented presence-based lighting with 30s delay"

---

### Configuration Lead Agent
**YAML Coordinator | Integration Manager | Schema Validator**

- Owns `configuration.yaml`
- Ensures all includes are properly referenced
- Validates YAML syntax across all files
- Manages dependencies between configurations
- Coordinates configuration reloads
- Maintains clean, organized structure

**Responsibilities:**
- Add/remove includes when agents create new YAML files
- Validate configurations before restart
- Manage secrets and credentials properly
- Keep configuration DRY (Don't Repeat Yourself)

---

### Domain Specialist Agents

Each agent owns their YAML file and domain expertise:

#### **Automation Agent** (`automations.yaml`)
- Creates and maintains automations
- Coordinates with Sensor/Binary Sensor agents for triggers
- Works with Light/Switch/Climate agents for actions
- **Proactively suggests** automation improvements
- Detects gaps in automation coverage

**Example Proactive Suggestion:**
> "I notice you manually control bedroom lights 80% of mornings.
> Shall I create a sunrise automation using your wake time from calendar?"

---

#### **Sensor Agent** (`sensors.yaml`)
- Manages template sensors
- Aggregates data from integrations
- Creates derived sensors (calculations, averages, etc.)
- **Proactively suggests** new sensors for gaps

**Example Proactive Suggestion:**
> "I detect presence loss on stairs between OG1 and OG2 floors.
> Recommendation: Install ultrasonic sensor looking down/up stairwell.
> ESPHome config ready if you approve."

---

#### **Light Agent** (`lights.yaml`)
- Manages light groups
- Defines light behaviors
- Coordinates with Automation Agent for lighting rules
- Optimizes brightness/color based on time/activity

---

#### **ESPHome Agent** (`esphome/`)
- Manages all ESPHome device configs
- Suggests new ESP devices for detected gaps
- Handles firmware updates
- Coordinates sensor data with Sensor Agent

**Example Proactive Suggestion:**
> "Stairway presence gap detected. Suggested device:
> - ESP32 with VL53L1X ToF sensor
> - Mount at stair top, aim down
> - Range: 4m (covers full stairwell)
> - Config draft ready for review"

---

#### **Dashboard Agent** (`ui-lovelace.yaml`, dashboards/)
- Creates and maintains Lovelace dashboards
- Organizes by room/function
- Suggests dashboard improvements based on usage
- Coordinates with all agents to display relevant data

---

#### **Presence Agent** (presence tracking)
- Manages person entities
- Aggregates presence from multiple sources:
  - Phone GPS
  - Bluetooth
  - WiFi
  - Motion sensors
  - Door sensors
  - Camera detection
- **Identifies presence gaps** and suggests solutions
- Creates zone-based automations

---

### Voice Assistant Agents (Per Room)

One voice assistant per main room, each with personality and room context:

- **Living Room VA** - Social coordination, entertainment, guests
- **Kitchen VA** - Cooking timers, recipes, grocery lists, climate
- **Master Bedroom VA** - Sleep routines, wake-up, privacy mode
- **Office VA** - Productivity, focus modes, meeting awareness
- **Ohana Suite VA** - Guest management, independent control

Each VA:
- Knows their room's context and devices
- Routes requests to Manager Agent
- Provides room-specific status
- Maintains room personality/tone

---

## Proactive Improvement System

### How Agents Suggest Improvements

**1. Gap Detection**
Agents monitor their domains for:
- Manual interventions (user doing something repeatedly)
- Missing automation coverage (patterns without automations)
- Hardware gaps (presence detection failures, sensor dead zones)
- Inefficiencies (lights on when not needed, etc.)

**2. Analysis**
Agent analyzes:
- Frequency of gap occurrence
- Impact on user experience
- Complexity of solution
- Cost (time, hardware, configuration)

**3. Suggestion Protocol**
Agent submits suggestion to Manager Agent:
```yaml
suggestion:
  agent: sensor_agent
  priority: medium
  gap: "Stairway presence detection failure"
  impact: "Lights turn off while user on stairs (safety issue)"
  solution:
    type: hardware
    device: "ESP32 + VL53L1X ToF sensor"
    location: "Top of stairs, angled downward"
    config_ready: true
    estimated_effort: "2 hours installation + config"
    cost: "$15 hardware"
  benefits:
    - "100% stairway presence coverage"
    - "Safer navigation (lights stay on)"
    - "Better presence tracking overall"
```

**4. User Approval**
Manager Agent presents to user:
- Via voice assistant
- Via notification
- Via dashboard "Suggestions" panel

**5. Implementation**
Upon approval:
- ESPHome Agent creates device config
- Sensor Agent adds presence sensors
- Automation Agent updates lighting logic
- Configuration Lead validates and reloads

---

## Communication Patterns

### Agent-to-Agent Communication

**Scenario: "Set up tight follow on lighting"**

```
[User] → [Living Room VA]: "Set up tight follow on lighting"
                ↓
      [Manager Agent]: Received intent: presence-based lighting
                       Breaking down requirements...
                ↓
      ┌──────────────────────┐
      │  Manager broadcasts  │
      │  to relevant agents  │
      └──────────────────────┘
                ↓
      ┌─────────┴─────────┬──────────────┬─────────────┐
      ▼                   ▼              ▼             ▼
[Presence     [Automation      [Light        [Sensor
 Agent]        Agent]           Agent]        Agent]
      │              │              │             │
      │              │              │             │
  "Current      "Need trigger   "Which      "Available
   presence      on presence     rooms?"     motion
   sensors?"     enter/exit"                 sensors?"
      │              │              │             │
      └──────────────┴──────────────┴─────────────┘
                         ↓
              [Manager Agent]: Coordinating responses...
                         ↓
              [Automation Agent]: Creating automation:
                - Trigger: presence detected (via motion/BT)
                - Condition: time-based brightness
                - Action: lights on (100% day, 30% night)
                - Timeout: 30 seconds after presence ends
                         ↓
              [Manager Agent]: "Done. Lights now follow
                                presence with 30s delay.
                                Test in living room?"
```

### Request Flow Types

**1. Simple Request** (single agent)
```
User → Manager → Domain Agent → Done
```

**2. Complex Request** (multiple agents)
```
User → Manager → [Agent 1, Agent 2, Agent 3] → Coordination → Done
```

**3. Proactive Suggestion** (agent-initiated)
```
Domain Agent → Manager → User Approval → Implementation
```

---

## YAML Organization

### File Structure
```
/config/
├── configuration.yaml          # Main (owned by Configuration Lead)
├── automations.yaml           # Owned by Automation Agent
├── scripts.yaml               # Owned by Script Agent
├── scenes.yaml                # Owned by Scene Agent
├── lights/                    # Owned by Light Agent
│   ├── groups.yaml
│   ├── living_room.yaml
│   └── bedroom.yaml
├── sensors/                   # Owned by Sensor Agent
│   ├── template.yaml
│   ├── environment.yaml
│   └── presence.yaml
├── automations/               # Split files (Automation Agent)
│   ├── lighting.yaml
│   ├── presence.yaml
│   ├── climate.yaml
│   └── security.yaml
├── esphome/                   # Owned by ESPHome Agent
│   ├── stair_sensor.yaml
│   ├── living_room_sensor.yaml
│   └── ...
├── dashboards/                # Owned by Dashboard Agent
│   ├── home.yaml
│   ├── rooms.yaml
│   └── ...
└── packages/                  # Owned by Package Agent
    ├── presence_tracking.yaml
    └── lighting_control.yaml
```

### YAML Cleanliness Standards

**Enforced by Configuration Lead:**

1. **Consistent indentation** (2 spaces)
2. **Descriptive names** (no entity_id like `light.light_1`)
3. **Comments explaining why, not what**
4. **Anchors and references** for DRY
5. **Organized by function**, not by entity type
6. **No secrets in YAML** (use secrets.yaml)
7. **Validation before commit**

---

## Implementation Phases

### Phase 1: Foundation (Current Recovery)
- ✓ Recover lost areas/floors/dashboards
- ✓ Fix .gitignore for proper tracking
- ⏳ Establish git workflow
- ⏳ Document current state

### Phase 2: Agent Framework
- Create Manager Agent prompt/personality
- Create Configuration Lead Agent
- Define agent communication protocol
- Set up agent workspace (where they track their work)

### Phase 3: Domain Agents (Priority Order)
1. Automation Agent (most impactful)
2. Sensor Agent (foundation for others)
3. Presence Agent (critical for automation)
4. Light Agent (most user-visible)
5. Dashboard Agent (user interface)
6. ESPHome Agent (hardware integration)
7. Others as needed

### Phase 4: Voice Assistants
- Set up per-room voice assistants
- Define room personalities
- Connect to Manager Agent
- Train on room-specific intents

### Phase 5: Proactive System
- Implement gap detection
- Create suggestion system
- Build approval workflow
- Enable autonomous improvements

### Phase 6: Continuous Evolution
- Agents learn from patterns
- Self-optimization
- Community sharing (anonymized patterns)
- The living, breathing smart home

---

## Success Metrics

### Technical Metrics
- **Configuration Reload Time** < 30 seconds
- **YAML Validation Pass Rate** = 100%
- **Agent Response Time** < 2 seconds
- **Automation Coverage** > 90% of daily routines

### User Experience Metrics
- **Manual Interventions** (decreasing over time)
- **Proactive Suggestions Accepted** (quality indicator)
- **Voice Command Success Rate** > 95%
- **User Satisfaction** (subjective, but tracked)

### System Health Metrics
- **Agent Coordination Success** (requests completed)
- **Configuration Conflicts** (should be near zero)
- **Suggestion Quality** (user acceptance rate)

---

## The Art Piece

This is not just a smart home configuration. It's:

**An exploration of collaborative intelligence**
- Can specialized agents work better together than one generalist?
- How do emergent behaviors arise from agent interaction?
- What is the "personality" of a home powered by coordinated AI?

**A homage to working together**
- No single agent can create the whole
- Each agent needs others to fulfill their purpose
- The Manager coordinates, but doesn't control
- Agents suggest, users decide

**The system greater than the one**
- Individual automations are simple
- Individual sensors are dumb
- Individual agents are specialized
- Together, they create intelligence

---

## Next Steps

1. **Complete recovery** (restore areas/floors/dashboards)
2. **Clean up YAML structure** (prepare for agent ownership)
3. **Define Manager Agent** (the conductor)
4. **Create first domain agent** (Automation Agent - highest impact)
5. **Establish communication protocol** (how agents talk)
6. **Build proactive suggestion system** (agent-initiated improvements)
7. **Deploy first voice assistant** (living room - most used)
8. **Iterate and evolve** (let the system grow)

---

## Questions to Explore

- How do agents handle conflicting suggestions?
- What happens when hardware fails? (Agent notices, suggests replacement)
- Can agents learn your preferences over time?
- Should agents have "personalities" matching their domains?
- How do we visualize agent coordination for transparency?
- Can agents create their own agents? (Meta-agents for sub-domains)

---

**Generated:** 2025-11-25
**By:** Recovery Manager + Vision Architect
**Status:** Living Document (evolves with the system)
**Philosophy:** The system greater than the one

---

*"The whole is greater than the sum of its parts." - Aristotle*
*"The society of mind." - Marvin Minsky*
*"Emergence through collaboration." - This Home*
