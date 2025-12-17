"""Helper functions for integration."""

from logging import Logger

from homeassistant.core import HomeAssistant


def get_sensor_entity_attribute_value(
    hass: HomeAssistant, logger: Logger, entity_id: str, attribute: str
) -> float | None:
    """Get value of generic entity parameter."""
    if entity_id:
        try:
            entity = hass.states.get(entity_id)
            # return SensorValue(float(entity.state), entity.last_reported)
            return float(entity.attributes.get(attribute))
        except (TypeError, ValueError):
            logger.warning(
                'Could not convert value "%s" of entity %s to expected format',
                entity.attributes.get(attribute),
                entity_id,
            )
        except Exception as e:  # noqa: BLE001
            logger.error(
                'Unknown error when reading and converting "%s": %s',
                entity_id,
                e,
            )
    else:
        logger.debug("No entity defined")
    return None


def get_sensor_entity_value(
    hass: HomeAssistant, logger: Logger, entity_id: str
) -> float | None:
    """Get value of generic entity parameter."""
    if entity_id:
        try:
            entity = hass.states.get(entity_id)
            return float(entity.state)
        except (TypeError, ValueError):
            logger.warning(
                'Could not convert value "%s" of entity %s to expected format',
                entity.state,
                entity_id,
            )
        except Exception as e:  # noqa: BLE001
            logger.error(
                'Unknown error when reading and converting "%s": %s',
                entity_id,
                e,
            )
    else:
        logger.debug("No entity defined")
    return None
