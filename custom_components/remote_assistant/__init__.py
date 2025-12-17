import asyncio
import logging
import time
import random
from homeassistant.core import HomeAssistant
from homeassistant.config_entries import ConfigEntry

from .const import DOMAIN, SERVER, INSTANCEHASH, INSTANCEAUTH, API_URL
from .utils import get_version, make_post_request, json_to_base64

_LOGGER = logging.getLogger(__name__)

process = None
should_run_process = False

async def get_remote_port(hass: HomeAssistant, entry: ConfigEntry):
    """Request a port from the server. Upload current config."""
    try:
        protocol = "https" if hass.config.api.use_ssl else "http"
        config = {
            "name": entry.title,
            "localip": hass.config.api.local_ip,
            "localport": str(hass.config.api.port),
            "localprotocol": protocol,
            "baseurl": "/",
            "timestamp": int(time.time() * 1000)
        }
        payload = {
            "instancehash": entry.data[INSTANCEHASH],
            "instanceauth": entry.data[INSTANCEAUTH],
            "protocol": protocol,
            "mountpath": "/",
            "config": json_to_base64(config),
            "version": await get_version(hass),
            "platform": "ha"
        }
        server = entry.data[SERVER]
        data = await make_post_request(hass, API_URL.format(server=server, path="instanceSlotRequest"), payload)
        return data.get("port", None)
    except Exception as e:
        _LOGGER.error("get_remote_port: %s", e)
        return None

async def run_remote_connection(hass: HomeAssistant, entry: ConfigEntry):
    """Get the remote port, start the ssh tunnel, keep it alive while should_run_process is true."""
    global process
    global should_run_process

    # Check if the process is already running
    if process:
        _LOGGER.warning("Remote connection function already running...")
        return None

    # Run until should_run_process is false
    restart_wait_time = 30
    should_run_process = True
    while should_run_process:
        #  Get port
        port = await get_remote_port(hass, entry)
        if not port:
            _LOGGER.error("Could not get remote port from server.")
        else:
            try:
                # Create arguments for ssh command
                server = entry.data[SERVER]
                localport = str(hass.config.api.port)
                args = ["ssh", "-o StrictHostKeyChecking=no", "-R", port + ":localhost:" + localport, 'forward@proxy-' + server, '-N']
                _LOGGER.debug("Starting SSH service with args: %s", args)
                _LOGGER.info("Starting SSH service on port %s", port)

                # Remember start time
                start_time = time.time()

                # Start the ssh process, wait until it finishes
                process = await asyncio.create_subprocess_exec(*args, stdout=asyncio.subprocess.PIPE, stderr=asyncio.subprocess.PIPE)
                stdout, stderr = await process.communicate()
                process = None

                # Ausgabe von stdout und stderr
                if stdout:
                    _LOGGER.debug("SSH stdout: %s", stdout.decode())
                if stderr:
                    _LOGGER.error("SSH stderr: %s", stderr.decode())

                # When the process was longer than 60 seconds active, reset restart time to 30 seconds
                if time.time() - start_time >= 60:
                    restart_wait_time = 30
            except Exception as e:
                _LOGGER.error("Exception in SSH service: %s", e)

        if should_run_process:
            # Wait
            _LOGGER.info(f"Waiting {int(restart_wait_time // 60)} minutes {int(restart_wait_time % 60)} seconds before next reconnect try")
            await asyncio.sleep(restart_wait_time)

            # Increate wait time, max 42 minutes
            restart_wait_time = min(restart_wait_time * random.uniform(1.75, 2.1), 42 * 60)

async def stop_ssh_process():
    """Stops the ssh process if it is running, deactivates automatic restart."""
    global process
    global should_run_process

    should_run_process = False
    if process:
        if process.returncode is None:
            _LOGGER.info("Stopping SSH process...")
            process.terminate()
            try:
                await process.wait()
                _LOGGER.info("SSH process stopped.")
            except Exception as e:
                _LOGGER.error("Error while stopping SSH process: %s", e)
        else:
            _LOGGER.info("SSH process is not running.")
        process = None

async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry):
    """New configuration entry or Home Assistant restart."""
    _LOGGER.info("Starting Remote Assistant: %s", entry.title)

    # Init data structure in hass.data defaults
    hass.data.setdefault(DOMAIN, {})

    # Store config entry
    hass.data[DOMAIN][entry.entry_id] = entry.data

    # Start the ssh process
    hass.loop.create_task(run_remote_connection(hass, entry))

    # Service to restart the ssh process
    async def handle_restart_service(call):
        await stop_ssh_process()
        hass.loop.create_task(run_remote_connection(hass, entry))
    hass.services.async_register(DOMAIN, "restart", handle_restart_service)

    return True

async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry):
    """Configuration entry is unloaded."""
    _LOGGER.info("Unloading Remote Assistant: %s", entry.title)

    # Remove entry from hass.data
    hass.data[DOMAIN].pop(entry.entry_id)

    # Stop the ssh process
    await stop_ssh_process()

    return True

async def async_setup(hass, config):
    """Set up the integration."""

    # Init data structure in hass.data defaults
    hass.data.setdefault(DOMAIN, {})

    return True