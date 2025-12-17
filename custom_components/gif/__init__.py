import asyncio
import logging
from PIL import Image

from homeassistant import config_entries
import homeassistant.helpers.config_validation as cv

from .const import DOMAIN

CONFIG_SCHEMA = cv.config_entry_only_config_schema(DOMAIN)

_LOGGER = logging.getLogger(__name__)

async def async_setup(hass, config):
    async def create_gif_service(call):
        images = call.data.get('images', [])
        fps = call.data.get('fps', 10)
        output_path = call.data.get('output_path')
        loop = call.data.get('loop', True)

        if not images or len(images) < 2:
            _LOGGER.error("At least 2 images required")
            return

        if not output_path:
            _LOGGER.error("Output path required")
            return

        # Create GIF in thread to avoid blocking
        event_loop = asyncio.get_event_loop()
        await event_loop.run_in_executor(None, create_gif_sync, images, fps, output_path, loop)

        _LOGGER.info(f"GIF created at {output_path}")

    hass.services.async_register('gif', 'create_gif', create_gif_service)

    return True

async def async_setup_entry(hass, entry):
    """Set up GIF Creator from a config entry."""
    # Since this integration only provides a service, no additional setup needed
    return True

def create_gif_sync(images, fps, output_path, loop):
    frames = []
    first_size = None
    for img_path in images:
        try:
            img = Image.open(img_path)
            if first_size is None:
                first_size = img.size
                frames.append(img)
            else:
                # Resize to match first image dimensions
                resized_img = img.resize(first_size, Image.Resampling.LANCZOS)
                frames.append(resized_img)
        except Exception as e:
            _LOGGER.error(f"Failed to open image {img_path}: {e}")
            return

    if frames:
        loop_value = 0 if loop else 1
        frames[0].save(output_path, save_all=True, append_images=frames[1:], duration=1000//fps, loop=loop_value)
