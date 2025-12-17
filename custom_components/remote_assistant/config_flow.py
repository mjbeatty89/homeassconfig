import voluptuous as vol
from homeassistant import config_entries
from homeassistant.core import callback, HomeAssistant
import logging
import time
from .const import DOMAIN, API_URL, API_CONTACT_URL, CONF_NAME, CONF_REGION, SERVER, INSTANCEHASH, INSTANCEAUTH
from .utils import get_version, region_by_country, make_post_request, json_to_base64, generate_qr_code
from homeassistant.helpers import selector

_LOGGER = logging.getLogger(__name__)

CONF_REGION_OPTIONS = ["us", "de", "sg"]
# CONF_REGION_OPTIONS = ["us", "de", "sg", "dev"]

async def register_app(hass: HomeAssistant, name, server, instancehash, instanceauth):
    """Call Remote-RED API for new app certificate. Return a object containing the QR code, the connection link and the config data."""
    try:
        # REST API POST Call
        registerAppData = await make_post_request(
            hass,
            API_URL.format(server=server, path="registerApp"),
            payload={
                "instancehash": instancehash,
                "instanceauth": instanceauth,
                "version": await get_version(hass),
                "platform": "ha"
            }
        )
        if registerAppData:
            # Successfully retrieved data
            _LOGGER.debug("register_app: registerAppData: %s", registerAppData)

            # Create data for the QR-Code
            qr_code_data = {
                "name": name,
                "server": server,
                "localip": hass.config.api.local_ip,
                "localport": str(hass.config.api.port),
                "localprotocol": "https" if hass.config.api.use_ssl else "http",
                "baseurl": "/",
                "instancehash": instancehash,
                "apphash": registerAppData['apphash'],
                "password": registerAppData['password'],
                "customerhash": registerAppData['customerhash'],
                "nodeversion": 2.0,
                "timestamp": int(time.time() * 1000)
            }
            _LOGGER.debug("register_app: qr_code_data: %s", qr_code_data)

            # Create connect data
            qr_code_string_base64 = json_to_base64(qr_code_data)
            link = registerAppData['appurl'] + '://add?data=' + qr_code_string_base64
            qr_code_image = generate_qr_code(qr_code_string_base64)

            # Create config data
            config_data = {
                CONF_NAME: name,
                SERVER: server,
                INSTANCEHASH: instancehash,
                INSTANCEAUTH: instanceauth,
            }

            # Info about link in log
            _LOGGER.info("You can also use this link on your device to add the instance: %s", link)

            # Show the QR-Code and link in a new step
            return {
                "qr_code_image": qr_code_image,
                "link": link,
                "config_data": config_data,
            }
        else:
            return None
    except Exception as e:
        _LOGGER.error(f"register_app failed: {e}")
        return None

class RemoteAssistantConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle a config flow for SSH Command."""

    VERSION = 1
    MINOR_VERSION = 1

    async def async_step_user(self, user_input=None):
        """Start of the config flow"""
        errors = {}

        if user_input is not None:
            # Prüfen, ob beide Felder angehakt wurden
            if not user_input.get("tosaccepted"):
                errors["tosaccepted"] = "tos_not_accepted"

            # Wenn keine Fehler vorliegen, zum nächsten Schritt gehen
            if not errors:
                return await self.async_step_instancehashrequest(user_input)

        # Get name and region by country
        name = self.hass.config.location_name
        region = region_by_country(self.hass.config.country)

        # Show form with name and region
        return self.async_show_form(
            step_id="user",
            data_schema=vol.Schema({
                vol.Required(CONF_NAME, default=name): str,
                vol.Required(CONF_REGION, default=region): selector.SelectSelector(
                    selector.SelectSelectorConfig(
                        options=CONF_REGION_OPTIONS,
                        translation_key=CONF_REGION,
                        mode=selector.SelectSelectorMode.DROPDOWN
                    )
                ),
                vol.Required("tosaccepted", default=False): bool,
            }),
            errors=errors,
        )

    async def async_step_error(self, user_input=None):
        """Displays a error"""
        errors = {}

        return self.async_show_form(
            step_id="error",
            errors=errors
        )

    async def async_step_instancehashrequest(self, user_input):
        """Call Remote-RED API for new instancehash."""
        errors = {}

        try:
            # REST API POST Call
            _LOGGER.debug("async_step_instancehashrequest: user_input: %s", user_input)
            instanceHashRequestData = await make_post_request(
                self.hass,
                API_CONTACT_URL.format(region=user_input[CONF_REGION], path="instanceHashRequest"),
                payload={
                    "version": await get_version(self.hass),
                    "platform": "ha"
                }
            )
            if instanceHashRequestData:
                # _LOGGER.debug("async_step_instancehashrequest: instanceHashRequestData: %s", instanceHashRequestData)

                # Next step > register app
                return await self.async_step_registerapprequest(
                    user_input=user_input,
                    name=user_input[CONF_NAME],
                    server=instanceHashRequestData['server'],
                    instancehash=instanceHashRequestData['instancehash'],
                    instanceauth=instanceHashRequestData['instanceauth']
                )
            else:
                errors["base"] = "api_error"
        except Exception as e:
            _LOGGER.error(f"async_step_instancehashrequest failed: {e}")
            errors["base"] = "api_error"

        # If reached here > show error message
        return self.async_show_form(
            step_id="error",
            data_schema=vol.Schema({}),
            errors=errors,
        )

    async def async_step_registerapprequest(self, user_input, name, server, instancehash, instanceauth):
        """Call Remote-RED API for new app certificate."""
        errors = {}

        try:
            # REST API Call and data generation in shared function
            data = await register_app(
                hass=self.hass,
                name=name,
                server=server,
                instancehash=instancehash,
                instanceauth=instanceauth
            )
            if data:
                # Successfully retrieved data
                _LOGGER.warning("async_step_registerapprequest: data: %s", data)

                # Store data in self for other steps
                self._link = data['link']
                self._qr_code_image = data['qr_code_image']
                self._config_data = data['config_data']

                # Show the QR code and link in separate step
                return await self.async_step_qr_display()
            else:
                errors["base"] = "api_error"
        except Exception as e:
            _LOGGER.error(f"async_step_registerapprequest failed: {e}")
            errors["base"] = "api_error"

        # If reached here > show error message
        return self.async_show_form(
            step_id="error",
            data_schema=vol.Schema({}),
            errors=errors,
        )

    async def async_step_qr_display(self, user_input=None):
        """Shows the QR Code and the link to the user"""
        if user_input is not None:
            # OK pressed > Save data to config entry
            return self.async_create_entry(
                title=self._config_data[CONF_NAME],
                data=self._config_data,
            )

        return self.async_show_form(
            step_id="qr_display",
            data_schema=vol.Schema({}),
            description_placeholders={
                "qr_code": f'<img src="data:image/png;base64,{self._qr_code_image}" alt="QR Code">',
                "link": self._link,
            },
        )

    @staticmethod
    @callback
    def async_get_options_flow(config_entry):
        """Options flow handler."""
        return RemoteAssistantOptionsFlow(config_entry)


class RemoteAssistantOptionsFlow(config_entries.OptionsFlow):
    """Handle options flow."""

    def __init__(self, config_entry):
        """Initialisiere den RemoteAssistantOptionsFlow."""
        self._config_entry = config_entry

    async def async_step_init(self, user_input=None):
        """Manage the options."""
        if user_input is not None:
            if user_input.get("reconnect"):
                # User wants a new QR code
                return await self.async_step_registerapprequest(
                    name=self._config_entry.title,
                    server=self._config_entry.data[SERVER],
                    instancehash=self._config_entry.data[INSTANCEHASH],
                    instanceauth=self._config_entry.data[INSTANCEAUTH]
                )
            return self.async_create_entry(title="", data=user_input)

        # Show information about a new QR code
        return self.async_show_form(
            step_id="init",
            data_schema=vol.Schema({
                vol.Optional("reconnect", default=False): bool,
            }),
        )

    async def async_step_error(self, user_input=None):
        """Displays a error"""
        errors = {}

        return self.async_show_form(
            step_id="error",
            errors=errors
        )

    async def async_step_registerapprequest(self, name, server, instancehash, instanceauth):
        """Call Remote-RED API for new app certificate."""
        errors = {}

        try:
            # REST API Call and data generation in shared function
            data = await register_app(
                hass=self.hass,
                name=name,
                server=server,
                instancehash=instancehash,
                instanceauth=instanceauth
            )
            if data:
                # Successfully retrieved data
                _LOGGER.warning("options: async_step_registerapprequest: data: %s", data)

                # Store data in self for other steps
                self._link = data['link']
                self._qr_code_image = data['qr_code_image']

                # Show the QR code and link in separate step
                return await self.async_step_qr_display()
            else:
                errors["base"] = "api_error"
        except Exception as e:
            _LOGGER.error(f"options: async_step_registerapprequest failed: {e}")
            errors["base"] = "api_error"

        # If reached here > show error message
        return self.async_show_form(
            step_id="error",
            data_schema=vol.Schema({}),
            errors=errors,
        )

    async def async_step_qr_display(self, user_input=None):
        """Shows the QR Code and the link to the user"""
        if user_input is not None:
            # OK pressed > Close by saving data to config entry
            return self.async_create_entry(title="", data={})

        return self.async_show_form(
            step_id="qr_display",
            data_schema=vol.Schema({}),
            description_placeholders={
                "qr_code": f'<img src="data:image/png;base64,{self._qr_code_image}" alt="QR Code">',
                "link": self._link
            },
        )
