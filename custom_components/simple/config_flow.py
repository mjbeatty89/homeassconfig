"""Config flow for The Simple WiFi Thermostat integration."""

from __future__ import annotations

import logging
from typing import Any

import voluptuous as vol

from homeassistant import config_entries
from homeassistant.const import CONF_PASSWORD, CONF_USERNAME

from .const import BASE_URL, DOMAIN
from .thesimple import APIError, AuthError, TheSimpleClient

_LOGGER = logging.getLogger(__name__)


class SimpleConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle a config flow for The Simple Thermostat."""

    VERSION = 1

    async def async_step_user(
        self, user_input: dict[str, Any] | None = None
    ) -> config_entries.ConfigFlowResult:
        """Handle the initial step."""
        errors = {}

        if user_input is not None:
            username = user_input[CONF_USERNAME]
            password = user_input[CONF_PASSWORD]

            # Prevent duplicate entries
            await self.async_set_unique_id(username)
            self._abort_if_unique_id_configured()

            client = TheSimpleClient(BASE_URL)
            try:
                await self.hass.async_add_executor_job(client.auth, username, password)
            except AuthError:
                errors["base"] = "invalid_auth"
            except APIError:
                errors["base"] = "cannot_connect"
            except Exception:  # pylint: disable=broad-except
                _LOGGER.exception("Unexpected exception during config flow")
                errors["base"] = "unknown"

            if not errors:
                return self.async_create_entry(
                    title=username,
                    data={
                        CONF_USERNAME: username,
                        CONF_PASSWORD: password,
                    },
                )

        data_schema = self._get_data_schema()
        return self.async_show_form(
            step_id="user",
            data_schema=data_schema,
            errors=errors,
        )

    def _get_data_schema(self):
        """Return the data schema for the user step."""

        return vol.Schema(
            {
                vol.Required(CONF_USERNAME): str,
                vol.Required(CONF_PASSWORD): str,
            }
        )
