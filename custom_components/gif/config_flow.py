"""Config flow for GIF Creator integration."""
import logging

from homeassistant import config_entries
from homeassistant.core import callback

_LOGGER = logging.getLogger(__name__)


class ConfigFlow(config_entries.ConfigFlow, domain="gif"):
    """Handle a config flow for GIF Creator."""

    VERSION = 1

    @callback
    async def async_step_user(self, user_input=None):
        """Handle the initial step."""
        # Check for single instance
        if self._async_current_entries():
            return self.async_abort(reason="single_instance_allowed")

        if user_input is not None:
            return self.async_create_entry(title="GIF Creator", data={})

        return self.async_show_form(step_id="user")

    @staticmethod
    @callback
    def async_get_options_flow(config_entry):
        """Get the options flow for this handler."""
        return OptionsFlowHandler(config_entry)


class OptionsFlowHandler(config_entries.OptionsFlow):
    """Handle options flow for GIF Creator."""

    def __init__(self, config_entry):
        """Initialize options flow."""
        self.config_entry = config_entry

    @callback
    async def async_step_init(self, user_input=None):
        """Manage the options."""
        if user_input is not None:
            return self.async_create_entry(title="", data=user_input)

        return self.async_show_form(step_id="init")
