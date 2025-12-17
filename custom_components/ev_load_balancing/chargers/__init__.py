"""Handling Chargers."""

from abc import ABC, abstractmethod
from enum import Enum
from typing import Any

import voluptuous as vol

from homeassistant.core import HomeAssistant

from ..const import Phases


class ChargingState(Enum):
    """State of charger."""

    OFF = 0
    PENDING = 1
    CHARGING = 2


class ChargerPhase(ABC):
    """A data class for a charger phase."""

    # def __init__(self) -> None:
    #     """Initialize object."""

    @abstractmethod
    def current_limit(self) -> float:
        """Get set current limit on phase."""

    @property
    @abstractmethod
    def name(self) -> str:
        """Get friendly name of phase."""


class Charger(ABC):
    """Base class for Charger robot."""

    def __init__(self, hass: HomeAssistant, update_callback) -> None:
        """Initialize base class."""
        self._hass = hass
        self._update_callback = update_callback

    @abstractmethod
    async def async_set_limits(
        self, phase1: float, phase2: float, phase3: float
    ) -> bool:
        """Set charger limits."""

    @abstractmethod
    def update(self) -> None:
        """Update measurements."""

    @abstractmethod
    def cleanup(self) -> None:
        """Cleanup event listeners etc."""

    @property
    @abstractmethod
    def charging_state(self) -> ChargingState:
        """Return charging state."""

    @abstractmethod
    def get_phase(self, phase: Phases) -> ChargerPhase:
        """Return phase X data."""

    @abstractmethod
    def get_rated_limit(self) -> int:
        """Return charger limit per phase."""

    @property
    @abstractmethod
    def device_id(self) -> str:
        """Device id."""

    @staticmethod
    @abstractmethod
    def get_schema(selections: dict[str, Any]) -> vol.Schema:
        """Device config schema."""

    @staticmethod
    @abstractmethod
    def validate_user_input(hass: HomeAssistant, user_input: dict[str, Any]) -> bool:
        """Validate the result from config flow step."""

    async def _async_input_changed(self, event):
        """Input entity change callback from state change event."""
        # _LOGGER.debug("Sensor change event from HASS: %s", event)
        if self._update_callback is not None:
            await self._update_callback()
