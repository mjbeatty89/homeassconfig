"""Handling Slimmelezer mains currents input."""

from datetime import UTC, datetime, timedelta
import logging
import statistics
from typing import Any

import voluptuous as vol

from homeassistant.core import HomeAssistant
from homeassistant.helpers import selector
from homeassistant.helpers.event import async_track_state_change_event
from homeassistant.helpers.template import device_entities

from ..const import CONF_DEVICE_ID, CONF_MAINS_LIMIT, Phases
from ..helpers.entity_value import get_sensor_entity_value
from . import Mains, MainsPhase

_LOGGER = logging.getLogger(__name__)


class MainsPhaseSlimmelezer(MainsPhase):
    """A data class for a mains phase."""

    _stddev_min_num = 10
    _stddev_max_age = timedelta(minutes=2)

    def __init__(self, hass: HomeAssistant, entity_id: str) -> None:
        """Initialize object."""
        self._hass = hass
        self._entity = entity_id
        self._value = None
        self._history_values = {}

    def update(self) -> None:
        """Update measurements."""
        now = datetime.now(UTC)
        self._value = get_sensor_entity_value(
            self._hass,
            _LOGGER,
            self._entity,
        )

        if self._value is None:
            _LOGGER.debug("Skipping history since None value")
            return

        self._history_values[now] = self._value

        # Find and drop old values if enough in dict
        drop_keys = []
        keep_count = 0
        for k in sorted(self._history_values.keys(), reverse=True):
            if keep_count < self._stddev_min_num or k > now - self._stddev_max_age:
                keep_count += 1
            else:
                drop_keys.append(k)
        for k in drop_keys:
            self._history_values.pop(k)
            _LOGGER.debug("Dropping measurement with key %s", k)

    def actual_current(self) -> float:
        """Get actual current on phase."""
        return self._value

    def stddev_current(self) -> float:
        """Get standard deviation of current on phase."""
        if len(self._history_values) > self._stddev_min_num / 2:
            return statistics.pstdev(self._history_values.values())
        _LOGGER.debug(
            "Not enough values for stddev (%d), returning 0", len(self._history_values)
        )
        return 0

    @property
    def name(self) -> str:
        """Get friendly name of phase."""
        return self._entity


class MainsSlimmelezer(Mains):
    """Slimmelezer mains extractor."""

    _state_change_listeners = []

    def __init__(
        self, hass: HomeAssistant, update_callback, options: dict[str, str]
    ) -> None:
        """Initialize Slimmelezer extractor."""
        super().__init__(hass, update_callback)
        self._id = options[CONF_DEVICE_ID]
        self._mains_limit = options[CONF_MAINS_LIMIT]

        entities = device_entities(hass, self._id)
        used_entities = []

        entity_phase1 = [e for e in entities if "_current" in e and e.endswith("1")][0]
        self._phase1 = MainsPhaseSlimmelezer(self._hass, entity_phase1)
        used_entities.append(entity_phase1)

        entity_phase2 = [e for e in entities if "_current" in e and e.endswith("2")][0]
        self._phase2 = MainsPhaseSlimmelezer(self._hass, entity_phase2)
        used_entities.append(entity_phase2)

        entity_phase3 = [e for e in entities if "_current" in e and e.endswith("3")][0]
        self._phase3 = MainsPhaseSlimmelezer(self._hass, entity_phase3)
        used_entities.append(entity_phase3)

        self._state_change_listeners.append(
            async_track_state_change_event(
                self._hass,
                used_entities,
                self._async_input_changed,
            )
        )

    def get_phase(self, phase: Phases) -> MainsPhase:
        """Return phase X data."""
        if phase == Phases.PHASE1:
            return self._phase1
        if phase == Phases.PHASE2:
            return self._phase2
        if phase == Phases.PHASE3:
            return self._phase3
        return None

    def get_rated_limit(self) -> int:
        """Return main limit per phase."""
        return self._mains_limit

    def update(self) -> None:
        """Update measurements."""
        self._phase1.update()
        self._phase2.update()
        self._phase3.update()

    def cleanup(self):
        """Cleanup by removing event listeners."""
        # for listener in self._state_change_listeners:
        #     listener()

    @property
    def device_id(self) -> str:
        """Device id."""
        return self._id

    @staticmethod
    def get_schema(selections: dict[str, Any]) -> vol.Schema:
        """Device config schema."""
        return vol.Schema(
            {
                vol.Required(CONF_DEVICE_ID): vol.In(selections[CONF_DEVICE_ID]),
                vol.Required(CONF_MAINS_LIMIT, default=20): selector.NumberSelector(
                    selector.NumberSelectorConfig(
                        min=6,
                        max=80,
                        step=1,
                        unit_of_measurement="ampere",
                    )
                ),
            }
        )

    @staticmethod
    def validate_user_input(hass: HomeAssistant, user_input: dict[str, Any]) -> bool:
        """Validate the result from config flow step."""
        return True
