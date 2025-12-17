"""Handling Template Charger."""

import logging
import re
from typing import Any

import voluptuous as vol

from homeassistant.core import HomeAssistant
from homeassistant.exceptions import TemplateError
from homeassistant.helpers.event import async_track_state_change_event
from homeassistant.helpers.template import Template

from ..const import (
    CONF_CHARGER_ACTIVE,
    CONF_CHARGER_COMMAND,
    CONF_CHARGER_LIMIT,
    CONF_CHARGER_PHASE1,
    CONF_CHARGER_PHASE2,
    CONF_CHARGER_PHASE3,
    Phases,
)
from . import Charger, ChargerPhase, ChargingState

_LOGGER = logging.getLogger(__name__)


class ChargerPhaseTemplate(ChargerPhase):
    """A data class for a charger phase."""

    def __init__(self, hass: HomeAssistant, template: str, name: str) -> None:
        """Initialize object."""
        self._hass = hass
        self._template = template
        self._name = name

        self._value = None

    def update(self) -> None:
        """Update measurements."""
        self._value = Template(self._template, self._hass).async_render() or None

        if not isinstance(self._value, float):
            _LOGGER.warning("Template did not return a numeric value")

    def current_limit(self) -> float:
        """Get set current limit on phase."""
        return self._value

    @property
    def name(self) -> str:
        """Get friendly name of phase."""
        return self._name


class ChargerTemplate(Charger):
    """Slimmelezer mains extractor."""

    _state_change_listeners = []

    def __init__(
        self, hass: HomeAssistant, update_callback, options: dict[str, str]
    ) -> None:
        """Initialize Slimmelezer extractor."""
        super().__init__(hass, update_callback)

        # used_entities = []

        self._active = options[CONF_CHARGER_ACTIVE]

        self._limit = options[CONF_CHARGER_LIMIT]

        self._phase1 = ChargerPhaseTemplate(
            self._hass, options[CONF_CHARGER_PHASE1], "Phase 1"
        )
        self._phase2 = ChargerPhaseTemplate(
            self._hass, options[CONF_CHARGER_PHASE2], "Phase 2"
        )
        self._phase3 = ChargerPhaseTemplate(
            self._hass, options[CONF_CHARGER_PHASE3], "Phase 3"
        )

        # self._state_change_listeners.append(
        #     async_track_state_change_event(
        #         self._hass,
        #         used_entities,
        #         self._async_input_changed,
        #     )
        # )

    async def async_set_limits(
        self, phase1: float, phase2: float, phase3: float
    ) -> bool:
        """Set charger limits."""
        _LOGGER.debug(
            "Setting limits: phase-1 %f, phase-2 %f, phase-3 %f", phase1, phase2, phase3
        )
        await Template(self._active, self._hass).async_render(
            phase1=phase1,
            phase2=phase2,
            phase3=phase3,
            parse_result=False,
        )

        return True

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
    def charging_state(self) -> ChargingState:
        """Return if charging state."""
        value = Template(self._active, self._hass).async_render()

        if not isinstance(value, bool):
            _LOGGER.warning("Template %s did not return a boolean value", self._active)
            value = False

        if value:
            return ChargingState.CHARGING
        return ChargingState.OFF

    def get_phase(self, phase: Phases) -> ChargerPhase:
        """Return phase X data."""
        if phase == Phases.PHASE1:
            return self._phase1
        if phase == Phases.PHASE2:
            return self._phase2
        if phase == Phases.PHASE3:
            return self._phase3
        return None

    def get_rated_limit(self) -> int:
        """Return overall limit per phase on charger circuit."""
        value = Template(self._limit, self._hass).async_render()

        if not isinstance(value, float):
            _LOGGER.warning("Template %s did not return a numeric value", self._active)
            value = None

        if value is not None:
            value = int(value)
            _LOGGER.debug("Returning rated limit %d for charger circuit", value)
        return value

    @property
    def device_id(self) -> str:
        """Device id."""
        return "template_charger"

    @staticmethod
    def get_schema(selections: dict[str, Any]) -> vol.Schema:
        """Device config schema."""
        return vol.Schema(
            {
                vol.Required(CONF_CHARGER_PHASE1): str,
                vol.Required(CONF_CHARGER_PHASE2): str,
                vol.Required(CONF_CHARGER_PHASE3): str,
                vol.Required(CONF_CHARGER_ACTIVE): str,
                vol.Required(CONF_CHARGER_LIMIT): str,
                vol.Required(CONF_CHARGER_COMMAND): str,
            }
        )

    @staticmethod
    def validate_user_input(hass: HomeAssistant, user_input: dict[str, Any]) -> bool:
        """Validate the result from config flow step."""
        validation_pass = True

        for template_key in (
            CONF_CHARGER_PHASE1,
            CONF_CHARGER_PHASE2,
            CONF_CHARGER_PHASE3,
            CONF_CHARGER_LIMIT,
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

        for template_key in (CONF_CHARGER_ACTIVE,):
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
                if not isinstance(ut, bool):
                    _LOGGER.warning("Template did not return a boolean value")
                    validation_pass = False
            except TemplateError as e:
                _LOGGER.error(e)
                validation_pass = False

        return validation_pass
