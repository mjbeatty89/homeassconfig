"""Handles the coordination between mains and charger."""

from __future__ import annotations

from datetime import UTC, datetime
import logging

from homeassistant.config_entries import ConfigEntry, Debouncer
from homeassistant.const import CONF_NAME
from homeassistant.core import HomeAssistant
from homeassistant.helpers.device_registry import DeviceEntryType, DeviceInfo
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator, UpdateFailed

from .chargers import Charger, ChargerPhase, ChargingState
from .config_flow import get_charger, get_mains
from .const import (
    CONF_CHARGER_PHASE1,
    CONF_CHARGER_PHASE2,
    CONF_CHARGER_PHASE3,
    CONF_DEVELOPER_MODE,
    CONF_MAINS_PHASE1,
    CONF_MAINS_PHASE2,
    CONF_MAINS_PHASE3,
    CONF_PHASES,
    Phases,
)
from .mains import Mains, MainsPhase

_LOGGER = logging.getLogger(__name__)


class PhasePair:
    """Data analyzer per one phase."""

    def __init__(
        self,
        mains_phase: MainsPhase,
        mains_limit: int,
        charger_phase: ChargerPhase,
        charger_limit: int,
    ) -> None:
        """Pair of Charger and Mains phases."""
        self._mains_phase = mains_phase
        self._mains_limit = mains_limit
        self._charger_phase = charger_phase
        self._charger_limit = charger_limit

    def get_new_limit(self) -> float | None:
        """Calculate and return the proposed new limit for phase."""
        main_actual = self._mains_phase.actual_current()
        main_stddev = self._mains_phase.stddev_current()
        charger_set_limit = self._charger_phase.current_limit()
        if main_actual is None or charger_set_limit is None:
            return None
        spare = self._mains_limit - main_actual
        charger_new_limit = min(
            charger_set_limit + spare - main_stddev,
            self._charger_limit,
            self._mains_limit,
        )
        _LOGGER.debug(
            "Calculated new circuit limit %f (actual: %f, old limit: %f)",
            charger_new_limit,
            main_actual,
            charger_set_limit,
        )
        return charger_new_limit


class EvLoadBalancingCoordinator(DataUpdateCoordinator):
    """Coordinator base class."""

    _mains: Mains
    _charger: Charger
    _pairs = [PhasePair]
    _update_callbacks = []
    _last_update = None

    def __init__(self, hass: HomeAssistant, config_entry: ConfigEntry) -> None:
        """Initialize my coordinator."""
        self._hass = hass
        super().__init__(
            hass,
            _LOGGER,
            name=config_entry.data.get(CONF_NAME),
            setup_method=self._async_setup_method,
            update_method=self._async_update_method,
            request_refresh_debouncer=Debouncer(
                hass,
                _LOGGER,
                cooldown=1,
                immediate=False,
            ),
        )

        self._developer_mode = config_entry.data[CONF_DEVELOPER_MODE]

        self._mains = get_mains(
            hass, config_entry.data, config_entry.options, self.async_request_refresh
        )

        self._charger = get_charger(
            hass, config_entry.data, config_entry.options, self.async_request_refresh
        )

        self._mapping = {
            Phases[config_entry.options[CONF_PHASES][CONF_MAINS_PHASE1]]: Phases[
                config_entry.options[CONF_PHASES][CONF_CHARGER_PHASE1]
            ],
            Phases[config_entry.options[CONF_PHASES][CONF_MAINS_PHASE2]]: Phases[
                config_entry.options[CONF_PHASES][CONF_CHARGER_PHASE2]
            ],
            Phases[config_entry.options[CONF_PHASES][CONF_MAINS_PHASE3]]: Phases[
                config_entry.options[CONF_PHASES][CONF_CHARGER_PHASE3]
            ],
        }

    @property
    def last_update(self) -> datetime:
        """Get last update timestamp."""
        return self._last_update

    def register_output_listener_entity(self, callback_func) -> None:
        """Register output entity."""
        self._update_callbacks.append(callback_func)

    async def update_listener(self, config_entry):
        """Handle options update."""
        raise NotImplementedError(
            f"Coordinator has not function for handling new config_entry ({config_entry})"
        )

    def cleanup(self) -> None:
        """Cleanup any pending event listers etc."""
        self._mains.cleanup()
        self._charger.cleanup()

    async def async_shutdown(self) -> None:
        """Cancel any scheduled call, and ignore new runs."""
        self.cleanup()
        # self._shutdown_requested = True
        # self._async_unsub_refresh()
        # self._async_unsub_shutdown()
        # self._debounced_refresh.async_shutdown()

    def get_device_info(self) -> DeviceInfo:
        """Get device info to group entities."""
        return DeviceInfo(
            name=self.name,
            entry_type=DeviceEntryType.SERVICE,
            identifiers={
                ("mains", self._mains.device_id),
                ("charger", self._charger.device_id),
            },
        )

    async def _async_setup_method(self) -> bool:
        """Setups call method."""
        self._pairs.clear()
        mains_limit = self._mains.get_rated_limit()
        charger_limit = self._charger.get_rated_limit()
        for ch, ma in self._mapping.items():
            mains_phase = self._mains.get_phase(ma)
            charger_phase = self._charger.get_phase(ch)
            if (
                mains_phase is None
                or mains_limit is None
                or charger_phase is None
                or charger_limit is None
            ):
                self._pairs.clear()
                _LOGGER.warning(
                    "Got None value from dependency, aborting setup for now"
                )
                raise UpdateFailed("Got None value from dependency")
            _LOGGER.info(
                'Mapping mains "%s" to charger "%s"',
                mains_phase.name,
                charger_phase.name,
            )
            self._pairs.append(
                PhasePair(
                    mains_phase,
                    mains_limit,
                    charger_phase,
                    charger_limit,
                )
            )
        self._shutdown_requested = False
        _LOGGER.info("Setup successful")
        return True

    async def _async_update_method(self):
        """Update call function."""
        _LOGGER.info("Updating service")

        self._charger.update()
        self._mains.update()

        if self._charger.charging_state not in [
            ChargingState.CHARGING,
            ChargingState.PENDING,
        ]:
            self._last_update = None
            _LOGGER.debug("Skipping update since no charging active or pending")
            if self._developer_mode:
                _LOGGER.warning(
                    "Abort call due to charging not active disabled during development"
                )
            else:
                return

        new_limits = []
        for pair in self._pairs:
            new_limit = pair.get_new_limit()
            if new_limit is None:
                _LOGGER.warning("Skipping update since None value found")
                return
            new_limits.append(new_limit)

        if len(new_limits) >= 3:
            await self._charger.async_set_limits(
                new_limits[0], new_limits[1], new_limits[2]
            )
            self._last_update = datetime.now(UTC)
            for callback_func in self._update_callbacks:
                callback_func()
