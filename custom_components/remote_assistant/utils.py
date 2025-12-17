import os
import ssl
import aiohttp
import json
import logging
import qrcode
import base64
import io
from homeassistant.core import HomeAssistant
from aiohttp import TCPConnector

_LOGGER = logging.getLogger(__name__)

BASE_PATH = os.path.dirname(os.path.abspath(__file__))
SSL_CA_PATH = os.path.join(BASE_PATH, "resources", "ca.cer")
SSL_CA_PINNED_PUBKEY = "xL1x9OPP4f4HdgNL2DPeEcrScpin48vTueeCFey5ZwM="

async def get_version(hass: HomeAssistant):
    """Reads the version from manifest.json asynchronously."""
    def _read_manifest():
        manifest_path = os.path.join(os.path.dirname(__file__), "manifest.json")
        with open(manifest_path, "r") as manifest_file:
            manifest = json.load(manifest_file)
            return manifest.get("version", "unknown")
    return await hass.async_add_executor_job(_read_manifest)

# async def create_ssl_context(hass: HomeAssistant):
#     """Erstellt asynchron einen SSL-Kontext mit CA-Zertifikat."""
#     def _load_ssl_context():
#         context = ssl.create_default_context()
#         context.load_verify_locations(cafile=SSL_CA_PATH)
#         context.verify_flags = ssl.VERIFY_X509_TRUSTED_FIRST
#         context.sslsocket_class = fingerprint_checking_SSLSocket([SSL_CA_PINNED_PUBKEY])
#         return context
#     return await hass.async_add_executor_job(_load_ssl_context)

async def make_post_request(hass: HomeAssistant, url, payload=None):
    """Performs a REST Post requests and returns the json or None."""
    try:
        # ssl_context = await create_ssl_context(hass)
        connector = TCPConnector(fingerprint=base64.b64decode(SSL_CA_PINNED_PUBKEY))

        _LOGGER.debug("REST API: url: %s", url)
        _LOGGER.debug("REST API: payload: %s", payload)
        async with aiohttp.ClientSession(connector=connector) as session:
            headers = {"Content-Type": "application/json"}
            async with session.post(url, json=payload, headers=headers) as response:
                if response.status == 200:
                    return await response.json()
                else:
                    _LOGGER.error(f"Error in response: {response.status}")
                    return None
    except Exception as e:
        _LOGGER.error(f"Error on request: {e}")
        return None

def json_to_base64(json_data):
    """Convert JSON data to a base64 encoded string."""
    json_string = json.dumps(json_data)
    json_string_bytes = json_string.encode('utf-8')
    return base64.b64encode(json_string_bytes).decode('utf-8')

def generate_qr_code(data):
    """Generate a QR code from the given data and return it as a base64 string."""
    qr = qrcode.QRCode(version=1, box_size=10, border=5)
    qr.add_data(data)
    qr.make(fit=True)
    img = qr.make_image(fill="black", back_color="white")

    # QR-Code in Base64 umwandeln
    buffer = io.BytesIO()
    img.save(buffer, format="PNG")
    qr_base64 = base64.b64encode(buffer.getvalue()).decode()
    buffer.close()
    return qr_base64

def region_by_country(country):
    """Maps a country to a server region"""
    # Kannst Du mir eine Liste erstellen, wo jeder ISO 3166-1 Alpha-2 Code einem der werte "us", "de" oder "sg" zugewiesen wird? "us" steht für "USA", "de" für "Deutschland" und "sg" für "Singapur". In diesen drei Ländern stehen meine Server. Die Liste soll dazu dienen, den schnellsten Server für das jeweilige Land zu haben.

    # Die Liste soll in dieser Form erstellt werden:
    # "FR": "de",
    # "DE": "de",
    # "IT":"de",
    # "CA":"us",
    # "MX":"us",
    # "CN":"sg",
    country_to_region_dict = {
        "AF": "sg",
        "AL": "de",
        "DZ": "de",
        "AD": "de",
        "AO": "sg",
        "AG": "us",
        "AR": "us",
        "AM": "de",
        "AU": "sg",
        "AT": "de",
        "AZ": "de",
        "BS": "us",
        "BH": "sg",
        "BD": "sg",
        "BB": "us",
        "BY": "de",
        "BE": "de",
        "BZ": "us",
        "BJ": "sg",
        "BT": "sg",
        "BO": "us",
        "BA": "de",
        "BW": "sg",
        "BR": "us",
        "BN": "sg",
        "BG": "de",
        "BF": "sg",
        "BI": "sg",
        "KH": "sg",
        "CM": "sg",
        "CA": "us",
        "CV": "sg",
        "CF": "sg",
        "TD": "sg",
        "CL": "us",
        "CN": "sg",
        "CO": "us",
        "KM": "sg",
        "CG": "sg",
        "CD": "sg",
        "CR": "us",
        "CI": "sg",
        "HR": "de",
        "CU": "us",
        "CY": "de",
        "CZ": "de",
        "DK": "de",
        "DJ": "sg",
        "DM": "us",
        "DO": "us",
        "EC": "us",
        "EG": "de",
        "SV": "us",
        "GQ": "sg",
        "ER": "sg",
        "EE": "de",
        "ET": "sg",
        "FJ": "sg",
        "FI": "de",
        "FR": "de",
        "GA": "sg",
        "GM": "sg",
        "GE": "de",
        "DE": "de",
        "GH": "sg",
        "GR": "de",
        "GD": "us",
        "GT": "us",
        "GN": "sg",
        "GW": "sg",
        "GY": "us",
        "HT": "us",
        "HN": "us",
        "HU": "de",
        "IS": "de",
        "IN": "sg",
        "ID": "sg",
        "IR": "sg",
        "IQ": "sg",
        "IE": "de",
        "IL": "sg",
        "IT": "de",
        "JM": "us",
        "JP": "sg",
        "JO": "sg",
        "KZ": "sg",
        "KE": "sg",
        "KI": "sg",
        "KP": "sg",
        "KR": "sg",
        "KW": "sg",
        "KG": "sg",
        "LA": "sg",
        "LV": "de",
        "LB": "sg",
        "LS": "sg",
        "LR": "sg",
        "LY": "sg",
        "LI": "de",
        "LT": "de",
        "LU": "de",
        "MG": "sg",
        "MW": "sg",
        "MY": "sg",
        "MV": "sg",
        "ML": "sg",
        "MT": "de",
        "MH": "sg",
        "MR": "sg",
        "MU": "sg",
        "MX": "us",
        "FM": "sg",
        "MD": "de",
        "MC": "de",
        "MN": "sg",
        "ME": "de",
        "MA": "de",
        "MZ": "sg",
        "MM": "sg",
        "NA": "sg",
        "NR": "sg",
        "NP": "sg",
        "NL": "de",
        "NZ": "sg",
        "NI": "us",
        "NE": "sg",
        "NG": "sg",
        "NO": "de",
        "OM": "sg",
        "PK": "sg",
        "PW": "sg",
        "PA": "us",
        "PG": "sg",
        "PY": "us",
        "PE": "us",
        "PH": "sg",
        "PL": "de",
        "PT": "de",
        "QA": "sg",
        "RO": "de",
        "RU": "de",
        "RW": "sg",
        "KN": "us",
        "LC": "us",
        "VC": "us",
        "WS": "sg",
        "SM": "de",
        "ST": "sg",
        "SA": "sg",
        "SN": "sg",
        "RS": "de",
        "SC": "sg",
        "SL": "sg",
        "SG": "sg",
        "SK": "de",
        "SI": "de",
        "SB": "sg",
        "ZA": "sg",
        "ES": "de",
        "LK": "sg",
        "SD": "sg",
        "SR": "us",
        "SE": "de",
        "CH": "de",
        "SY": "sg",
        "TW": "sg",
        "TJ": "sg",
        "TZ": "sg",
        "TH": "sg",
        "TL": "sg",
        "TG": "sg",
        "TO": "sg",
        "TT": "us",
        "TN": "de",
        "TR": "de",
        "TM": "sg",
        "TV": "sg",
        "UG": "sg",
        "UA": "de",
        "AE": "sg",
        "GB": "de",
        "US": "us",
        "UY": "us",
        "UZ": "sg",
        "VU": "sg",
        "VA": "de",
        "VE": "us",
        "VN": "sg",
        "YE": "sg",
        "ZM": "sg",
        "ZW": "sg"
    }
    return country_to_region_dict.get(country.upper(), "us")
