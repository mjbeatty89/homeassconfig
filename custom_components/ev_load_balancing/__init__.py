"""Main package for coordinator."""

from __future__ import annotations

import logging

from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant, HomeAssistantError

from .config_flow import EvLoadBalancingConfigFlow
from .const import (
    CONF_CHARGER,
    CONF_CHARGER_EXPIRES,
    CONF_DEVELOPER_MODE,
    CONF_DEVICE_ID,
    CONF_MAINS,
    CONF_MAINS_LIMIT,
    DOMAIN,
)
from .coordinator import EvLoadBalancingCoordinator

_LOGGER = logging.getLogger(__name__)

PLATFORMS = [Platform.SENSOR]


async def async_setup_entry(hass: HomeAssistant, config_entry: ConfigEntry) -> bool:
    """Set up this integration using UI."""
    config_entry.async_on_unload(config_entry.add_update_listener(async_reload_entry))

    if DOMAIN not in hass.data:
        hass.data[DOMAIN] = {}

    if config_entry.entry_id not in hass.data[DOMAIN]:
        coordinator = EvLoadBalancingCoordinator(hass, config_entry)
        await coordinator.async_config_entry_first_refresh()

        config_entry.async_on_unload(
            config_entry.add_update_listener(coordinator.update_listener)
        )

        hass.data[DOMAIN][config_entry.entry_id] = coordinator

    await hass.config_entries.async_forward_entry_setups(config_entry, PLATFORMS)

    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unloading a config_flow entry."""
    # unload_ok = await hass.config_entries.async_unload_platforms(entry, PLATFORMS)
    unload_ok = True
    if unload_ok:
        coordinator: EvLoadBalancingCoordinator = hass.data[DOMAIN].pop(entry.entry_id)
        coordinator.cleanup()
    return unload_ok


async def async_reload_entry(hass: HomeAssistant, config_entry: ConfigEntry) -> None:
    """Reload the config entry."""
    await async_unload_entry(hass, config_entry)
    await async_setup_entry(hass, config_entry)


async def async_migrate_entry(hass: HomeAssistant, config_entry: ConfigEntry) -> bool:
    """Migrate old entry."""
    _LOGGER.debug(
        "Attempting migrating configuration from version %s.%s",
        config_entry.version,
        config_entry.minor_version,
    )

    class MigrateError(HomeAssistantError):
        """Error to indicate there is was an error in version migration."""

    installed_version = EvLoadBalancingConfigFlow.VERSION
    installed_minor_version = EvLoadBalancingConfigFlow.MINOR_VERSION

    new_data = {**config_entry.data}
    new_options = {**config_entry.options}

    if config_entry.version > installed_version:
        _LOGGER.warning(
            "Downgrading major version from %s to %s is not allowed",
            config_entry.version,
            installed_version,
        )
        return False

    if (
        config_entry.version == installed_version
        and config_entry.minor_version > installed_minor_version
    ):
        _LOGGER.warning(
            "Downgrading minor version from %s.%s to %s.%s is not allowed",
            config_entry.version,
            config_entry.minor_version,
            installed_version,
            installed_minor_version,
        )
        return False

    def data_01_to_02(data: dict):
        if CONF_DEVELOPER_MODE not in data:
            data[CONF_DEVELOPER_MODE] = False
        return data

    def options_02_to_03(options: dict):
        CONF_DEVICES = "devices"
        CONF_MAINS_DEVICE_ID = "mains_device_id"
        CONF_CHARGER_DEVICE_ID = "charger_device_id"
        devices = options.pop(CONF_DEVICES)
        options[CONF_MAINS] = {
            CONF_DEVICE_ID: devices[CONF_MAINS_DEVICE_ID],
            CONF_MAINS_LIMIT: devices[CONF_MAINS_LIMIT],
        }
        options[CONF_CHARGER] = {
            CONF_DEVICE_ID: devices[CONF_CHARGER_DEVICE_ID],
            CONF_CHARGER_EXPIRES: devices[CONF_CHARGER_EXPIRES],
        }
        return options

    if config_entry.version == 0 and config_entry.minor_version == 1:
        try:
            new_data = data_01_to_02(new_data)
            new_options = options_02_to_03(new_options)
        except MigrateError:
            _LOGGER.warning("Error while upgrading configuration version")
            return False

    if config_entry.version == 0 and config_entry.minor_version == 2:
        try:
            new_options = options_02_to_03(new_options)
        except MigrateError:
            _LOGGER.warning("Error while upgrading configuration version")
            return False

    _LOGGER.info(
        "Configuration update from version %s.%s to %s.%s successful",
        config_entry.version,
        config_entry.minor_version,
        installed_version,
        installed_minor_version,
    )

    hass.config_entries.async_update_entry(
        config_entry,
        data=new_data,
        options=new_options,
        version=installed_version,
        minor_version=installed_minor_version,
    )
    return True
