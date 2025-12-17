"""TheSimple/Ecofactor library."""

import base64
import hashlib
import logging
import random
import re
import time

from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.primitives.asymmetric.rsa import RSAPublicKey
from cryptography.hazmat.primitives.serialization import load_pem_public_key
import requests

from homeassistant.components.climate import (
    FAN_AUTO,
    FAN_ON,
    PRESET_AWAY,
    PRESET_NONE,
    HVACMode,
)

_LOGGER = logging.getLogger(__name__)


HTTP_SUCCESS_START = 200
HTTP_SUCCESS_END = 299
HTTP_FORBIDDEN_START = 401
HTTP_FORBIDDEN_END = 401

MAX_TEMP_DEFAULT = 89
MIN_TEMP_DEFAULT = 50


class TheSimpleError(Exception):
    """Base exception for TheSimple/Ecofactor errors."""


class APIError(TheSimpleError):
    """Exception raised for API errors in TheSimple integration."""


class AuthError(TheSimpleError):
    """Exception raised for authentication errors in TheSimple integration."""


class TheSimpleClient:
    """Client for interacting with TheSimple/Ecofactor API."""

    def __init__(self, base_url) -> None:
        """Initialize TheSimpleClient with the given base URL."""
        self._base_url = base_url
        self._token = ""
        self._authinfo = {
            "nonce": "",
            "response": "",
            "opaque": "",
            "encryptedpass": "",
        }
        self._username = ""
        self._http_sess = None
        self._userid = ""
        self._location_id = None
        self._refreshToken = ""
        self._publicKey = None
        self._noCacheNum = random.randint(1, 200000000000)
        self._realm = ""
        self._nonce = ""
        self._opaque = ""

    def get_location_id(self):
        """Return the current location ID."""
        return self._location_id

    @property
    def httpSess(self):
        """Return the HTTP session, creating it if necessary."""
        if self._http_sess is None:
            self._http_sess = requests.Session()
            self._http_sess.headers.update({"X-Requested-With": "XMLHttpRequest"})

        return self._http_sess

    def auth(self, username, password):
        """Authenticate with TheSimple/Ecofactor API using the provided username and password.

        Args:
            username: The username for authentication.
            password: The password for authentication.

        Raises:
            AuthError: If authentication fails.
            TheSimpleError: If unable to parse nonce response.

        """
        self.getPublicKey()
        self.getNonce()

        resp = self.buildResponse(username, password, self._realm, self._nonce)
        encrypted_pw = self.encryptPassword(password)

        self.authwithdetails(username, encrypted_pw, self._nonce, resp, self._opaque)

    def authwithdetails(self, user, encpass, nonce, resp, opaque):
        """Authenticate with provided details and obtain an access token.

        Args:
            user: The username.
            encpass: The encrypted password.
            nonce: The nonce value.
            resp: The response hash.
            opaque: The opaque value.

        """
        self._authinfo["nonce"] = nonce
        self._authinfo["response"] = resp
        self._authinfo["opaque"] = opaque
        self._authinfo["encryptedpass"] = encpass
        self._username = user

        self.getToken()

    def buildResponse(self, username, password, realm, nonce):
        """Build the response hash for digest authentication.

        Args:
            username: The username for authentication.
            password: The password for authentication.
            realm: The authentication realm.
            nonce: The nonce value.

        Returns:
            The SHA-1 hash response string.

        """
        pwhash = hashlib.sha1(password.encode("utf-8")).hexdigest()
        step2 = hashlib.sha1(
            (username + ":" + realm + ":" + pwhash).encode("utf-8")
        ).hexdigest()
        return hashlib.sha1((step2 + ":" + nonce).encode("utf-8")).hexdigest()

    def clearToken(self):
        """Clear the current access and refresh tokens and reset the HTTP session."""
        self._token = ""
        self._refreshToken = ""
        self._http_sess = None

    def createThermostat(self, thermostat_id):
        """Create and return a TheSimpleThermostat instance for the given thermostat ID.

        Args:
            thermostat_id: The ID of the thermostat to create.

        Returns:
            TheSimpleThermostat: An instance representing the specified thermostat.

        """
        return TheSimpleThermostat(self, thermostat_id)

    def encryptPassword(self, password):
        """Encrypt the given password using the loaded public key.

        Args:
            password: The password string to encrypt.

        Returns:
            The base64-encoded encrypted password string.

        Raises:
            TheSimpleError: If the public key is not an RSA public key.

        """

        if self._publicKey is None or not isinstance(self._publicKey, RSAPublicKey):
            raise TheSimpleError("Public key is not a valid RSA public key")

        encryptedPwBytes = self._publicKey.encrypt(
            password.encode("utf-8"), padding.PKCS1v15()
        )

        return base64.b64encode(encryptedPwBytes).decode("utf-8")

    def getNonce(self):
        """Retrieve and parse the authentication nonce from the API."""
        url = "authenticate/nonce"

        r = self.http_request("GET", url)

        www_auth = r.json()["WWW-Authenticate"]

        p = re.compile('DigestE realm="(\\w+)", nonce="(\\w+)", opaque="(\\w+)"')
        m = p.match(www_auth)

        if m:
            self._realm = m.group(1)
            self._nonce = m.group(2)
            self._opaque = m.group(3)
        else:
            raise TheSimpleError(f"Unable to parse nonce response: {www_auth}")

    def getPublicKey(self):
        """Retrieve and load the public key from the API for password encryption."""
        url = "public_key"
        r = self.http_request("GET", url)

        pubkey_pem = r.json()["public_key"]
        self._publicKey = load_pem_public_key(pubkey_pem.encode("utf-8"))

    def getThermostatIds(self, locationIndex=0):
        """Retrieve thermostat IDs for the specified location index.

        Args:
            locationIndex: The index of the location to retrieve thermostat IDs from (default is 0).

        Returns:
            A list of thermostat IDs for the specified location.

        """
        url = "user"
        r = self.http_request("GET", url, None, True)

        self._location_id = r.json()["location_id_list"][locationIndex]

        url = f"location/{self._location_id}"
        r = self.http_request("GET", url, None, True)

        return r.json()["thermostatIdList"]

    def getToken(self):
        """Obtain an access token from TheSimple/Ecofactor API using the current authentication details."""
        _LOGGER.debug("getToken")

        self.clearToken()

        authstr = (
            f'DigestE username="{self._username}", '
            f'realm="Consumer", nonce="{self._authinfo["nonce"]}", '
            f'response="{self._authinfo["response"]}", '
            f'opaque="{self._authinfo["opaque"]}"'
        )

        url = f"{self._base_url}authenticate"

        r = self.httpSess.post(
            url,
            headers={"Authorization": authstr},
            json={
                "username": self._username,
                "password": self._authinfo["encryptedpass"],
            },
        )

        _LOGGER.debug("response code: %s, response text: %s", r.status_code, r.text)

        if HTTP_SUCCESS_START <= r.status_code <= HTTP_SUCCESS_END:
            r_json = r.json()
            self._token = r_json["access_token"]
            self._userid = r_json["user_id"]
            self._refreshToken = r_json["refresh_token"]
        elif HTTP_FORBIDDEN_START <= r.status_code <= HTTP_FORBIDDEN_END:
            raise AuthError(
                f"Authentication Error (code: {r.status_code}) (response: {r.text})"
            )
        else:
            raise APIError(
                f"Invalid HTTP response (code: {r.status_code}) (response: {r.text})"
            )

    def http_request(self, method, req_url, json_req_body=None, authenticated=False):
        """Make an HTTP request to TheSimple/Ecofactor API.

        Args:
            method: The HTTP method to use ("GET", "PATCH", "PUT", "DELETE").
            req_url: The endpoint URL (relative to base URL).
            json_req_body: Optional JSON body for the request.
            authenticated: Whether to include authentication headers.

        Raises:
            AuthError: If authentication is required but no token is present.
            APIError: If the HTTP response is not successful.

        Returns:
            The HTTP response object.

        """
        _LOGGER.debug(
            "HTTP request (method: %s, url: %s, json: %s, authenticated: %s)",
            method,
            req_url,
            json_req_body,
            authenticated,
        )
        if authenticated and len(self._token) == 0:
            raise AuthError("No token, authentication required")

        url = self._base_url + req_url

        reqheaders = {}
        if authenticated:
            reqheaders["Authorization"] = "Bearer " + self._token

        if method == "GET":
            r = self.httpSess.get(url, json=json_req_body, headers=reqheaders)
        elif method == "PATCH":
            r = self.httpSess.patch(url, json=json_req_body, headers=reqheaders)
        elif method == "PUT":
            r = self.httpSess.put(url, json=json_req_body, headers=reqheaders)
        elif method == "DELETE":
            r = self.httpSess.delete(url, json=json_req_body, headers=reqheaders)
        else:
            raise APIError(f"Unsupported HTTP method: {method}")

        _LOGGER.debug(
            "HTTP Response (status code: %s, response: %s)", r.status_code, r.text
        )

        if HTTP_SUCCESS_START <= r.status_code <= HTTP_SUCCESS_END:
            return r
        if HTTP_FORBIDDEN_START <= r.status_code <= HTTP_FORBIDDEN_END:
            self.clearToken()
            raise APIError(
                f"HTTP response forbidden (code: {r.status_code}) (response: {r.text})"
            )
        raise APIError(
            f"Invalid HTTP response (code: {r.status_code}) (response: {r.text})"
        )


class TheSimpleThermostat:
    """Represents a thermostat device managed via TheSimple/Ecofactor API."""

    def __init__(self, client, thermostat_id) -> None:
        """Initialize a TheSimpleThermostat instance with the given client and thermostat ID.

        Args:
            client: The TheSimpleClient instance used for API communication.
            thermostat_id: The ID of the thermostat to manage.

        """
        self._thermostat_id = thermostat_id
        self._client = client
        self._fan_mode = None
        self._fan_state = None
        self._hvac_mode = None
        self._hvac_state = None
        self._hold_mode = None
        self._cool_setpoint = None
        self._heat_setpoint = None
        self._setpoint_reason = None
        self._current_temp = None
        self._last_update = None
        self._connected = None
        self._name = None
        self._max_temp = MAX_TEMP_DEFAULT
        self._min_temp = MIN_TEMP_DEFAULT
        self._schedule_mode = None
        self._supported_modes = []
        self._away_details = None
        self._preset_mode = None
        self._location_id = self._client.get_location_id()
        self._away_cool_setpoint = MAX_TEMP_DEFAULT
        self._away_heat_setpoint = MIN_TEMP_DEFAULT

        self.get_metadata()
        self.refresh()

    @property
    def client(self):
        """Return the TheSimpleClient instance used for API communication."""
        return self._client

    @property
    def connected(self):
        """Return whether the thermostat is currently connected."""
        return self._connected

    @property
    def cool_setpoint(self):
        """Return the current cool setpoint temperature."""
        return self._cool_setpoint

    @property
    def current_temp(self):
        """Return the current temperature reported by the thermostat."""
        return self._current_temp

    @property
    def preset_mode(self):
        """Return the current preset mode of the thermostat."""
        return self._preset_mode

    @property
    def fan_mode(self):
        """Return the current fan mode of the thermostat."""
        return self._fan_mode

    @property
    def fan_state(self):
        """Return the current fan state of the thermostat."""
        return self._fan_state

    @property
    def heat_setpoint(self):
        """Return the current heat setpoint temperature."""
        return self._heat_setpoint

    @property
    def hvacMode(self):
        """Return the current HVAC mode of the thermostat."""
        return self._hvac_mode

    @property
    def hvacState(self):
        """Return the current HVAC state of the thermostat."""
        return self._hvac_state

    @property
    def location_id(self):
        """Return the location ID associated with this thermostat."""
        return self._location_id

    @property
    def last_update(self):
        """Return the timestamp of the last update from the thermostat."""
        return self._last_update

    @property
    def maxTemp(self):
        """Return the maximum temperature supported by the thermostat."""
        return self._max_temp

    @property
    def minTemp(self):
        """Return the minimum temperature supported by the thermostat."""
        return self._min_temp

    @property
    def name(self):
        """Return the name of the thermostat."""
        return self._name

    @property
    def setpoint_reason(self):
        """Return the reason for the current setpoint."""
        return self._setpoint_reason

    @property
    def supportedModes(self):
        """Return the supported HVAC modes for the thermostat."""
        return self._supported_modes

    @property
    def thermostat_id(self):
        """Return the thermostat ID."""
        return self._thermostat_id

    @property
    def away_cool_setpoint(self):
        """Return the away cool setpoint temperature."""
        return self._away_cool_setpoint

    @property
    def away_heat_setpoint(self):
        """Return the away heat setpoint temperature."""
        return self._away_heat_setpoint

    def get_metadata(self):
        """Retrieve and update thermostat metadata from the API."""
        url = f"thermostat/{self._thermostat_id}"

        r = self._client.http_request("GET", url, None, True)

        r_json = r.json()

        # Log the received JSON response
        _LOGGER.debug("get_metadata: Received JSON response: %s", r_json)

        self._name = r_json["name"]
        self._schedule_mode = r_json["schedule_mode"]
        self._min_temp = float(r_json["model"]["min_temperature"])
        self._max_temp = float(r_json["model"]["max_temperature"])
        self._supported_modes = r_json["hvac_control"]

    def get_away_settings(self):
        """Retrieve and update the away settings for the thermostat from the API."""
        url = f"location/{self._location_id}/away_settings"

        r = self._client.http_request("GET", url, None, True)

        r_json = r.json()

        self._away_cool_setpoint = float(r_json["cool_setpoint"])
        self._away_heat_setpoint = float(r_json["heat_setpoint"])

    def set_fan_mode(self, fan_mode):
        """Set the fan mode for the thermostat.

        Args:
            fan_mode: The fan mode to set (FAN_ON or FAN_AUTO).

        Raises:
            TheSimpleError: If an invalid fan mode is provided.

        """
        if fan_mode == FAN_ON:
            set_fan_mode = "on"
        elif fan_mode == FAN_AUTO:
            set_fan_mode = "auto"
        else:
            raise TheSimpleError(f"Invalid fan mode: {fan_mode}")

        url = f"thermostat/{self._thermostat_id}/state"

        json_req = {"fan_mode": set_fan_mode}

        self._client.http_request("PATCH", url, json_req, True)

        self._fan_mode = fan_mode

    def set_mode(self, mode):
        """Set the HVAC mode for the thermostat.

        Args:
            mode: The HVAC mode to set (HVACMode.COOL, HVACMode.HEAT, HVACMode.AUTO, HVACMode.OFF).

        Raises:
            TheSimpleError: If an invalid HVAC mode is provided.

        """
        if mode == HVACMode.COOL:
            set_mode = "cool"
        elif mode == HVACMode.HEAT:
            set_mode = "heat"
        elif mode == HVACMode.AUTO:
            set_mode = "auto"
        elif mode == HVACMode.OFF:
            set_mode = "off"
        else:
            raise TheSimpleError(f"Invalid HVAC mode: {mode}")

        url = f"thermostat/{self._thermostat_id}/state"

        json_req = {"hvac_mode": set_mode}

        self._client.http_request("PATCH", url, json_req, True)

    def set_temp(self, temp):
        """Set the temperature setpoint for the thermostat.

        Args:
            temp: The target temperature to set.

        Raises:
            TheSimpleError: If the current HVAC mode is not supported for setting temperature.

        """
        if temp < self._min_temp or temp > self._max_temp:
            return

        url = f"thermostat/{self._thermostat_id}/state"

        json_req = {}

        if self.hvacMode == HVACMode.COOL:
            json_req["cool_setpoint"] = int(temp)
            self._cool_setpoint = int(temp)
        elif self.hvacMode == HVACMode.HEAT:
            json_req["heat_setpoint"] = int(temp)
            self._heat_setpoint = int(temp)
        elif self.hvacMode == HVACMode.OFF:
            return
        else:
            raise TheSimpleError(
                f"set_temp: Unable to determine current HVAC Mode: {self.hvacMode}"
            )

        self._client.http_request("PATCH", url, json_req, True)

        # if successful, set internal state so we don't have to wait on a refresh
        if self.hvacMode == HVACMode.COOL:
            self._cool_setpoint = int(temp)
        elif self.hvacMode == HVACMode.HEAT:
            self._heat_setpoint = int(temp)

    def set_preset_mode(self, preset):
        """Set the preset mode for the thermostat.

        Args:
            preset: The preset mode to set (PRESET_AWAY or PRESET_NONE).

        Raises:
            TheSimpleError: If an invalid preset mode is provided.

        """
        if preset not in [PRESET_AWAY, PRESET_NONE]:
            raise TheSimpleError(f"Invalid preset mode: {preset}")

        # Check if the thermostat is off
        if self._hvac_mode == "off":
            _LOGGER.warning(
                "Cannot set preset mode to %s because thermostat is off", preset
            )
            self._preset_mode = PRESET_NONE
            return

        self.get_away_settings()
        url = f"thermostat/{self._thermostat_id}/away"

        if preset == PRESET_AWAY:
            json_req = {
                "cool_setpoint": self._away_cool_setpoint,
                "heat_setpoint": self._away_heat_setpoint,
                "end_ts": "2050-12-31T00:00:00+00:00",
            }
            self._client.http_request("PUT", url, json_req, True)
            self._preset_mode = PRESET_AWAY

        elif preset == PRESET_NONE:
            self._client.http_request("DELETE", url, None, True)
            self._preset_mode = PRESET_NONE

    def refresh(self):
        """Refresh the thermostat state from the API and update internal attributes."""
        url = f"thermostat/{self._thermostat_id}/state"

        r = self._client.http_request("GET", url, None, True)
        r_json = r.json()

        # Log the received JSON response
        _LOGGER.debug("refresh: Received JSON response: %s", r_json)

        self._connected = r_json["connected"]
        self._setpoint_reason = r_json["setpoint_reason"]

        thermostat_info = "best_known_current_state_thermostat_data"
        self._current_temp = round(float(r_json[thermostat_info]["temperature"]), 1)
        self._hold_mode = r_json[thermostat_info]["hold_mode"]
        self._fan_mode = r_json[thermostat_info]["fan_mode"]
        self._fan_state = r_json[thermostat_info]["fan_state"]
        self._hvac_mode = r_json[thermostat_info]["hvac_mode"]
        self._hvac_state = r_json[thermostat_info]["hvac_state"]
        self._cool_setpoint = r_json[thermostat_info]["cool_setpoint"]
        self._heat_setpoint = r_json[thermostat_info]["heat_setpoint"]
        self._last_update = time.time()

        if "end_ts" in r_json["away_details"]:
            self._away_details = r_json["away_details"]["end_ts"]
            self._preset_mode = PRESET_AWAY
        else:
            self._away_details = None
            self._preset_mode = PRESET_NONE
