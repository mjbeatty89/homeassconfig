"""The Simple WiFi Thermostat integration."""

from __future__ import annotations

from homeassistant.config_entries import ConfigEntry
from homeassistant.const import CONF_PASSWORD, CONF_USERNAME, Platform
from homeassistant.core import HomeAssistant
from homeassistant.exceptions import ConfigEntryError, ConfigEntryNotReady

from .const import BASE_URL, DOMAIN
from .thesimple import APIError, AuthError, TheSimpleClient

_PLATFORMS: list[Platform] = [Platform.CLIMATE]


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up The Simple Thermostat from a config entry."""
    hass.data.setdefault(DOMAIN, {})

    username: str = entry.data[CONF_USERNAME]
    password: str = entry.data[CONF_PASSWORD]

    client = TheSimpleClient(BASE_URL)
    try:
        await hass.async_add_executor_job(client.auth, username, password)
    except AuthError as err:
        raise ConfigEntryError("Invalid authentication") from err
    except APIError as err:
        raise ConfigEntryNotReady("API error during setup") from err
    except Exception as err:
        raise ConfigEntryNotReady("Unexpected error during setup") from err

    hass.data[DOMAIN][entry.entry_id] = client

    await hass.config_entries.async_forward_entry_setups(entry, _PLATFORMS)
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    unload_ok = await hass.config_entries.async_unload_platforms(entry, _PLATFORMS)
    if unload_ok:
        hass.data[DOMAIN].pop(entry.entry_id, None)
    return unload_ok
