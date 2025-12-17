"""Handling Easee Charger."""

import logging
from typing import Any

import voluptuous as vol

from homeassistant.core import HomeAssistant
from homeassistant.helpers import selector
from homeassistant.helpers.event import async_track_state_change_event
from homeassistant.helpers.template import device_entities

from ..const import CONF_CHARGER_EXPIRES, CONF_DEVICE_ID, Phases
from ..helpers.entity_value import get_sensor_entity_attribute_value
from . import Charger, ChargerPhase, ChargingState

_LOGGER = logging.getLogger(__name__)


class ChargerPhaseEasee(ChargerPhase):
    """A data class for a charger phase."""

    def __init__(self, hass: HomeAssistant, entity_id: str, attribute: str) -> None:
        """Initialize object."""
        self._hass = hass
        self._entity = entity_id
        self._attribute = attribute

        self._value = None

    def update(self) -> None:
        """Update measurements."""
        self._value = get_sensor_entity_attribute_value(
            self._hass,
            _LOGGER,
            self._entity,
            self._attribute,
        )

    def current_limit(self) -> float:
        """Get set current limit on phase."""
        return self._value

    @property
    def name(self) -> str:
        """Get friendly name of phase."""
        return f"{self._attribute} ({self._entity})"


class ChargerEasee(Charger):
    """Slimmelezer mains extractor."""

    _state_change_listeners = []

    def __init__(
        self, hass: HomeAssistant, update_callback, options: dict[str, str]
    ) -> None:
        """Initialize Slimmelezer extractor."""
        super().__init__(hass, update_callback)
        self._id = options[CONF_DEVICE_ID]
        self._ttl = options[CONF_CHARGER_EXPIRES]

        entities = device_entities(hass, self._id)
        used_entities = []

        self._ent_status = [e for e in entities if e.endswith("_status")][0]
        used_entities.append(self._ent_status)

        self._ent_circuit_limit = [
            e for e in entities if e.endswith("_dynamic_circuit_limit")
        ][0]
        used_entities.append(self._ent_circuit_limit)

        self._state_change_listeners.append(
            async_track_state_change_event(
                self._hass,
                used_entities,
                self._async_input_changed,
            )
        )

        self._phase1 = ChargerPhaseEasee(
            self._hass, self._ent_circuit_limit, "state_dynamicCircuitCurrentP1"
        )
        self._phase2 = ChargerPhaseEasee(
            self._hass, self._ent_circuit_limit, "state_dynamicCircuitCurrentP2"
        )
        self._phase3 = ChargerPhaseEasee(
            self._hass, self._ent_circuit_limit, "state_dynamicCircuitCurrentP3"
        )

    async def async_set_limits(
        self, phase1: float, phase2: float, phase3: float
    ) -> bool:
        """Set charger limits."""
        _LOGGER.debug(
            "Setting limits: phase-1 %f, phase-2 %f, phase-3 %f", phase1, phase2, phase3
        )
        domain = "easee"
        service = "set_circuit_dynamic_limit"
        service_data = {
            "device_id": self._id,
            "current_p1": phase1,
            "current_p2": phase2,
            "current_p3": phase3,
            "time_to_live": self._ttl,
        }
        await self._hass.services.async_call(domain, service, service_data)

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
        state = self._hass.states.get(self._ent_status).state
        if state in ["charging"]:
            return ChargingState.CHARGING
        if state in ["awaiting_start"]:
            return ChargingState.PENDING
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
        limit = get_sensor_entity_attribute_value(
            self._hass, _LOGGER, self._ent_circuit_limit, "circuit_ratedCurrent"
        )
        if limit is not None:
            limit = int(limit)
            _LOGGER.debug("Returning rated limit %d for charger circuit", limit)
        return limit

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
                vol.Required(CONF_CHARGER_EXPIRES, default=10): selector.NumberSelector(
                    selector.NumberSelectorConfig(
                        min=1,
                        max=30,
                        step=1,
                        unit_of_measurement="minutes",
                    )
                ),
            }
        )

    @staticmethod
    def validate_user_input(hass: HomeAssistant, user_input: dict[str, Any]) -> bool:
        """Validate the result from config flow step."""
        return True
