"""Handling Sensor Entities mains currents input."""

from datetime import UTC, datetime, timedelta
import logging
import re
import statistics
from typing import Any

import voluptuous as vol

from homeassistant.core import HomeAssistant
from homeassistant.exceptions import TemplateError
from homeassistant.helpers import selector
from homeassistant.helpers.event import async_track_state_change_event
from homeassistant.helpers.template import Template

from ..const import (
    CONF_MAINS_LIMIT,
    CONF_MAINS_PHASE1,
    CONF_MAINS_PHASE2,
    CONF_MAINS_PHASE3,
    Phases,
)
from . import Mains, MainsPhase

_LOGGER = logging.getLogger(__name__)


class MainsPhaseTemplate(MainsPhase):
    """A data class for a mains phase."""

    _stddev_min_num = 10
    _stddev_max_age = timedelta(minutes=2)

    def __init__(self, hass: HomeAssistant, template: str, name: str) -> None:
        """Initialize object."""
        self._hass = hass
        self._template = template
        self._name = name

        self._value = None
        self._history_values = {}

    def update(self) -> None:
        """Update measurements."""
        now = datetime.now(UTC)
        self._value = Template(self._template, self._hass).async_render() or None

        if not isinstance(self._value, float):
            _LOGGER.warning("Template did not return a numeric value")

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
        return self._name


class MainsTemplate(Mains):
    """Template mains extractor."""

    _state_change_listeners = []

    def __init__(
        self, hass: HomeAssistant, update_callback, options: dict[str, str]
    ) -> None:
        """Initialize Template extractor."""
        super().__init__(hass, update_callback)
        self._mains_limit = options[CONF_MAINS_LIMIT]

        # used_entities = []

        self._phase1 = MainsPhaseTemplate(
            self._hass, options[CONF_MAINS_PHASE1], "Phase 1"
        )
        # used_entities.append(entity_phase1)

        self._phase2 = MainsPhaseTemplate(
            self._hass, options[CONF_MAINS_PHASE2], "Phase 2"
        )
        # used_entities.append(entity_phase2)

        self._phase3 = MainsPhaseTemplate(
            self._hass, options[CONF_MAINS_PHASE3], "Phase 3"
        )
        # used_entities.append(entity_phase3)

        # self._state_change_listeners.append(
        #     async_track_state_change_event(
        #         self._hass,
        #         used_entities,
        #         self._async_input_changed,
        #     )
        # )

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
        return "template_mains"

    @staticmethod
    def get_schema(selections: dict[str, Any]) -> vol.Schema:
        """Device config schema."""
        return vol.Schema(
            {
                vol.Required(CONF_MAINS_PHASE1): str,
                vol.Required(CONF_MAINS_PHASE2): str,
                vol.Required(CONF_MAINS_PHASE3): str,
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
        validation_pass = True

        for template_key in (
            CONF_MAINS_PHASE1,
            CONF_MAINS_PHASE2,
            CONF_MAINS_PHASE3,
        ):
            _LOGGER.debug(
                "Attempting to validate %s with template %s",
                template_key,
                user_input[template_key],
            )
            # Lets try to remove the most common mistakes.
            user_input[template_key] = re.sub(r"\s{2,}", "", user_input[template_key])
            try:
                ut = Template(user_input[template_key], hass).async_render()
                _LOGGER.debug("Template returned value %s", ut)
                if not isinstance(ut, float):
                    _LOGGER.warning("Template did not return a numeric value")
                    validation_pass = False
            except TemplateError as e:
                _LOGGER.error(e)
                validation_pass = False

        return validation_pass
