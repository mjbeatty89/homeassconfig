"""The Simple WiFi Thermostat integration."""

import logging
from typing import Any

from homeassistant.components.climate import (
    FAN_AUTO,
    FAN_ON,
    PRESET_AWAY,
    PRESET_NONE,
    ClimateEntity,
    ClimateEntityFeature,
    HVACAction,
    HVACMode,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import ATTR_TEMPERATURE, PRECISION_TENTHS, UnitOfTemperature
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddConfigEntryEntitiesCallback

from .const import DOMAIN
from .thesimple import APIError, AuthError, TheSimpleClient, TheSimpleError

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddConfigEntryEntitiesCallback,
) -> None:
    """Set up simple thermostats from a config entry."""
    client: TheSimpleClient = hass.data[DOMAIN][entry.entry_id]

    # Discover thermostats (sync call, run in executor)
    thermostat_ids = await hass.async_add_executor_job(client.getThermostatIds)
    simple_thermostats = []

    for thermostat_id in thermostat_ids:
        # Create the thermostat object (sync call, run in executor)
        thermostat_obj = await hass.async_add_executor_job(
            client.createThermostat, thermostat_id
        )
        simple_thermostat = SimpleThermostat(thermostat_obj)
        simple_thermostats.append(simple_thermostat)

    async_add_entities(simple_thermostats)


class SimpleThermostatError(Exception):
    """Base exception class for SimpleThermostat errors."""


class SimpleThermostatConfigError(SimpleThermostatError):
    """Raised for configuration-related errors."""


class SimpleThermostat(ClimateEntity):
    """Representation of an Simple thermostat."""

    def __init__(self, thesimplethermostat: Any, name: str | None = None) -> None:
        """Initialize the SimpleThermostat entity."""
        _LOGGER.debug("Init Simple Thermostat class")
        self._thermostat = thesimplethermostat
        self._name = name

    @property
    def current_temperature(self) -> float | None:
        """Return the current temperature."""
        return self._thermostat.current_temp

    @property
    def extra_state_attributes(self) -> dict[str, str] | None:
        """Return additional state attributes."""
        return {
            "setpoint_reason": self._thermostat.setpoint_reason,
            "simple_thermostat_id": self._thermostat.thermostat_id,
        }

    @property
    def fan_mode(self) -> str | None:
        """Return the fan setting."""
        return self._thermostat.fan_mode

    @property
    def fan_modes(self) -> list[str] | None:
        """Return the list of available fan modes."""
        return [FAN_ON, FAN_AUTO]

    @property
    def hvac_action(self) -> HVACAction | None:
        """Return the current action (cooling, heating, idle)."""
        simpletherm_state = self._thermostat.hvacState
        simpletherm_mode = self._thermostat.hvacMode

        state_to_action = {
            "cool": HVACAction.COOLING,
            "heat": HVACAction.HEATING,
            "off": HVACAction.IDLE,
        }

        if simpletherm_mode == HVACMode.OFF and simpletherm_state == "off":
            return HVACAction.OFF

        return state_to_action.get(simpletherm_state)

    @property
    def hvac_mode(self) -> HVACMode | None:
        """Return the current mode."""
        simpletherm_mode = self._thermostat.hvacMode

        if simpletherm_mode in ["auto", "autocool", "autoheat"]:
            return HVACMode.AUTO
        return simpletherm_mode

    @property
    def hvac_modes(self) -> list[HVACMode]:
        """Return list of supported modes."""
        modes = [HVACMode.OFF]

        if "COOL" in self._thermostat.supportedModes:
            modes.append(HVACMode.COOL)
        if "HEAT" in self._thermostat.supportedModes:
            modes.append(HVACMode.HEAT)
        if (
            "COOL" in self._thermostat.supportedModes
            and "HEAT" in self._thermostat.supportedModes
        ):
            modes.append(HVACMode.AUTO)

        return modes

    @property
    def preset_modes(self) -> list[str] | None:
        """Return list of supported preset modes."""
        return [PRESET_AWAY, PRESET_NONE]

    @property
    def preset_mode(self) -> str | None:
        """Return the current preset mode."""
        return self._thermostat.preset_mode

    @property
    def max_temp(self) -> float:
        """Return the max supported temperature."""
        return self._thermostat.maxTemp

    @property
    def min_temp(self) -> float:
        """Return the min supported temperature."""
        return self._thermostat.minTemp

    @property
    def name(self) -> str | None:
        """Return thermostat name."""
        if self._name is None:
            return self._thermostat.name
        return self._name

    @property
    def precision(self) -> float:
        """Return the precision of the thermostat."""
        return PRECISION_TENTHS

    @property
    def supported_features(self) -> ClimateEntityFeature:
        """Return list of supported climate features."""
        return (
            ClimateEntityFeature.TARGET_TEMPERATURE
            | ClimateEntityFeature.FAN_MODE
            | ClimateEntityFeature.TURN_OFF
            | ClimateEntityFeature.TURN_ON
            | ClimateEntityFeature.PRESET_MODE
        )

    @property
    def target_temperature(self) -> float | None:
        """Return target temperature."""
        if self.hvac_mode == HVACMode.COOL:
            return self._thermostat.cool_setpoint
        if self.hvac_mode == HVACMode.HEAT:
            return self._thermostat.heat_setpoint
        return None

    @property
    def temperature_unit(self) -> UnitOfTemperature:
        """Return temperature unit set in home assistant."""
        return self.hass.config.units.temperature_unit

    @property
    def unique_id(self) -> str:
        """Return a unique ID for the thermostat."""
        return str(self._thermostat.thermostat_id)

    async def async_set_hvac_mode(self, hvac_mode: HVACMode) -> None:
        """Set a target mode."""
        await self.hass.async_add_executor_job(self._thermostat.set_mode, hvac_mode)

    async def async_set_fan_mode(self, fan_mode: str) -> None:
        """Set a target fan mode."""
        await self.hass.async_add_executor_job(self._thermostat.set_fan_mode, fan_mode)

    async def async_set_temperature(self, **kwargs: Any) -> None:
        """Set a target temperature."""
        _LOGGER.debug("Setting temperature")
        temperature = kwargs.get(ATTR_TEMPERATURE)
        if temperature is None:
            return

        _LOGGER.debug("Setting current temp to %f", temperature)
        await self.hass.async_add_executor_job(self._thermostat.set_temp, temperature)

    async def async_set_preset_mode(self, preset_mode: str) -> None:
        """Set a preset mode."""
        await self.hass.async_add_executor_job(
            self._thermostat.set_preset_mode, preset_mode
        )

    async def async_update(self) -> None:
        """Refresh the thermostat data from the API and handle retries on failure."""
        _LOGGER.debug("Refreshing thermostat")

        retries = 3
        success = False

        while retries > 0:
            try:
                await self.hass.async_add_executor_job(self._thermostat.refresh)
                success = True
                _LOGGER.debug("Thermostat data successfully refreshed")
                break

            except AuthError as ex:
                _LOGGER.warning("Authentication error during refresh: %s", str(ex))
                _LOGGER.debug("Attempting to refresh token")

                try:
                    await self.hass.async_add_executor_job(
                        self._thermostat.client.getToken
                    )
                except AuthError as token_ex:
                    _LOGGER.error(
                        "Failed to refresh authentication token: %s", str(token_ex)
                    )
                    break

            except APIError as ex:
                _LOGGER.warning("API error during refresh: %s", str(ex))

            except TheSimpleError as ex:
                _LOGGER.error("TheSimple error: %s", str(ex))
                break

            except Exception as ex:  # noqa: BLE001
                _LOGGER.error("Unexpected exception during refresh: %s", str(ex))
                break

            retries -= 1
            _LOGGER.debug("Retrying... (%d attempts left)", retries)

        if not success:
            raise SimpleThermostatError("Refresh failed after three attempts.")
