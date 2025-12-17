"""Common constants for integration."""

from enum import Enum

DOMAIN = "ev_load_balancing"


class Phases(Enum):
    """Standard numeric identifiers for phases."""

    PHASE1 = 0
    PHASE2 = 1
    PHASE3 = 2


CONF_CHARGER = "charger"
CONF_MAINS = "mains"
CONF_PHASES = "phases"

CONF_DEVELOPER_MODE = "developer_mode"
CONF_PHASE_AUTO_MATCHING = "phase_auto_matching"

CONF_DEVICE_ID = "device_id"

CONF_MAINS_LIMIT = "mains_limit"
CONF_MAINS_PHASE1 = "mains_phase1"
CONF_MAINS_PHASE2 = "mains_phase2"
CONF_MAINS_PHASE3 = "mains_phase3"
CONF_MAINS_TYPE = "mains_type"

CONF_CHARGER_ACTIVE = "charger_active"
CONF_CHARGER_COMMAND = "charger_command"
CONF_CHARGER_EXPIRES = "charger_expires"
CONF_CHARGER_PHASE1 = "charger_phase1"
CONF_CHARGER_PHASE2 = "charger_phase2"
CONF_CHARGER_PHASE3 = "charger_phase3"
CONF_CHARGER_LIMIT = "charger_limit"
CONF_CHARGER_TYPE = "charger_type"

NAME_SLIMMELEZER = "slimmelezer"
NAME_EASEE = "easee"
NAME_TEMPLATE = "template"
