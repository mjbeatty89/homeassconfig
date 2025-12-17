"""Handling Mains currents input."""

from abc import ABC, abstractmethod
from datetime import datetime
from typing import Any

import voluptuous as vol

from homeassistant.core import HomeAssistant

from ..const import Phases


class MainsPhase(ABC):
    """A data class for a mains phase."""

    # def __init__(self) -> None:
    #     """Initialize object."""

    @abstractmethod
    def actual_current(self) -> float:
        """Get actual current on phase."""

    @abstractmethod
    def stddev_current(self) -> float:
        """Get standard deviation of current on phase."""

    @property
    @abstractmethod
    def name(self) -> str:
        """Get friendly name of phase."""


class Mains(ABC):
    """Base class for Mains extractor."""

    _history_phase1: dict[datetime, float] = {}
    _history_phase2: dict[datetime, float] = {}
    _history_phase3: dict[datetime, float] = {}

    def __init__(self, hass: HomeAssistant, update_callback) -> None:
        """Initialize base class."""
        self._hass = hass
        self._update_callback = update_callback

    @abstractmethod
    def get_phase(self, phase: Phases) -> MainsPhase:
        """Return phase X data."""

    @abstractmethod
    def get_rated_limit(self) -> int:
        """Return main limit per phase."""

    @abstractmethod
    def update(self) -> None:
        """Update measurements."""

    @abstractmethod
    def cleanup(self) -> None:
        """Cleanup event listeners etc."""

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
