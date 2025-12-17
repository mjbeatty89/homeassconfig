"""Config flow for Pipeless Agents integration."""

from __future__ import annotations

import logging

from homeassistant.components.camera import DOMAIN as CAMERA_DOMAIN
from homeassistant.config_entries import ConfigFlow
from homeassistant.exceptions import HomeAssistantError
import voluptuous as vol

from .const import DOMAIN

_LOGGER = logging.getLogger(__name__)


class PipelessAgentsConfigFlow(ConfigFlow, domain=DOMAIN):
    """Handle a config flow for Pipeless Agents."""

    VERSION = 1

    async def _get_camera_entities(self):
        """Retrieve camera entities configured in Home Assistant."""
        entities = self.hass.states.async_all()
        return [entity for entity in entities if entity.domain == CAMERA_DOMAIN]

    async def async_step_user(self, user_input=None):
        """Handle the initial step."""
        errors: dict[str, str] = {}

        # When the user provides the inputs for this step
        if user_input is not None:
            try:
                # Get the actual stream source url from the selected camera
                camera_entity_id = user_input["camera_entity"]
                camera_component = self.hass.data[CAMERA_DOMAIN]
                entities = await self._get_camera_entities()
                camera_entity = camera_component.get_entity(camera_entity_id)
                stream_source = (
                    await camera_entity.stream_source()
                )  # This contains the string URL
                user_input["stream_source"] = stream_source
            except Exception:
                errors["base"] = "The camera is probably not connected"
            # Validate user input and create entry
            return self.async_create_entry(title="Pipeless Agents", data=user_input)

        # When there is not user input we configure the form to show it
        # Fetch available camera entities
        entities = await self._get_camera_entities()
        entity_options = {entity.entity_id: entity.name for entity in entities}
        if len(entity_options) < 1:
            errors["base"] = "No cameras found"
        CONFIG_SCHEMA = vol.Schema(
            {
                vol.Required("pipeless_endpoint"): str,
                vol.Required("camera_entity"): vol.In(entity_options),
            }
        )

        return self.async_show_form(
            step_id="user", errors=errors, data_schema=CONFIG_SCHEMA
        )


class CannotConnect(HomeAssistantError):
    """Error to indicate we cannot connect."""


class InvalidAuth(HomeAssistantError):
    """Error to indicate there is invalid auth."""


class InvalidPipelessEndpoint(HomeAssistantError):
    """Error to indicate the provided pipeless endpoint is invalid."""
