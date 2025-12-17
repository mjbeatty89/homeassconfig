# """Config flow for AWS Cost integration."""

from __future__ import annotations

import logging

from homeassistant import config_entries
from homeassistant.core import callback

from .const import DOMAIN, SUPPORTED_REGIONS, UPDATE_FREQUENCY
import voluptuous as vol

_LOGGER = logging.getLogger(__name__)


@callback
def configured_instance(hass):
    """Return a set of configured AWS Cost instances."""
    return set(entry.title for entry in hass.config_entries.async_entries(DOMAIN))


class AWSCostConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle a config flow for AWS Cost."""

    VERSION = 1
    CONNECTION_CLASS = config_entries.CONN_CLASS_CLOUD_POLL

    def __init__(self):
        """Initialize the config flow."""
        pass

    async def async_step_user(self, user_input=None):
        """Handle the initial step."""
        errors = {}

        if user_input is not None:
            try:
                # Here you could validate the credentials by making a call to AWS
                return self.async_create_entry(
                    title=user_input["aws_access_key_id"],
                    data=user_input,
                )
            except Exception as e:
                _LOGGER.error("Error validating AWS credentials: %s", e)
                errors["base"] = "auth"

        data_schema = vol.Schema(
            {
                vol.Required("aws_access_key_id"): str,
                vol.Required("aws_secret_access_key"): str,
                vol.Required("region_name"): vol.In(SUPPORTED_REGIONS),
                vol.Required("update_frequency"): vol.In(UPDATE_FREQUENCY),
            }
        )

        return self.async_show_form(
            step_id="user", data_schema=data_schema, errors=errors
        )

    async def async_step_import(self, user_input):
        """Handle import."""
        return await self.async_step_user(user_input)
