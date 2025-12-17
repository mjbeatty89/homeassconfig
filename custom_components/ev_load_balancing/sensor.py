"""Sensor definitions."""

from __future__ import annotations

import logging

from homeassistant.components.sensor import (
    SensorDeviceClass,
    SensorEntity,
    SensorEntityDescription,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import STATE_UNKNOWN, EntityCategory
from homeassistant.core import HomeAssistant

from . import EvLoadBalancingCoordinator
from .const import DOMAIN

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(
    hass: HomeAssistant, config_entry: ConfigEntry, async_add_entities
):
    """Create state sensor entities for platform."""

    coordinator: EvLoadBalancingCoordinator = hass.data[DOMAIN][config_entry.entry_id]
    entities = [
        LastUpdateSensor(
            coordinator,
            entity_description=SensorEntityDescription(
                key="last_update",
                name="Last Update",
                device_class=SensorDeviceClass.TIMESTAMP,
                entity_category=EntityCategory.DIAGNOSTIC,
            ),
        ),
        UpdateAgeSensor(
            coordinator,
            entity_description=SensorEntityDescription(
                key="update_age",
                name="Update Age",
                device_class=SensorDeviceClass.DURATION,
                entity_category=EntityCategory.DIAGNOSTIC,
                native_unit_of_measurement="seconds",
            ),
        ),
    ]

    async_add_entities(entities)
    return True


class BaseSensor(SensorEntity):
    """Base class for sensor entity."""

    def __init__(
        self,
        coordinator: EvLoadBalancingCoordinator,
        entity_description: SensorEntityDescription,
    ) -> None:
        """Initialize the entity."""
        # super().__init__(planner)
        self._coordinator = coordinator
        self.entity_description = entity_description
        self._attr_device_info = coordinator.get_device_info()
        self._attr_name = self._coordinator.name + " " + entity_description.name
        self._attr_unique_id = (
            (DOMAIN + "_" + self._attr_name).lower().replace(".", "").replace(" ", "_")
        )

    async def async_added_to_hass(self) -> None:
        """Load the last known state when added to hass."""
        await super().async_added_to_hass()
        self._coordinator.register_output_listener_entity(self.update_callback)

    def update_callback(self) -> None:
        """Call from planner that new data available."""
        self.schedule_update_ha_state()


class LastUpdateSensor(BaseSensor):
    """State sensor."""

    _attr_icon = "mdi:clock-edit-outline"

    @property
    def native_value(self):
        """Output state."""
        state = None
        if self._coordinator.last_update is not None:
            state = self._coordinator.last_update
        _LOGGER.debug(
            'Returning state "%s" of sensor "%s"',
            state,
            self.unique_id,
        )
        return state


class UpdateAgeSensor(BaseSensor):
    """State sensor."""

    _attr_icon = "mdi:clock-edit-outline"
    _last_update = None
    _last_value = 0

    @property
    def native_value(self):
        """Output state."""
        state = None
        if self._coordinator.last_update is not None:
            if self._last_update is not None:
                delta = int(
                    (self._coordinator.last_update - self._last_update).total_seconds()
                )
                if delta != 0:
                    state = delta
                    self._last_value = delta
                else:
                    state = self._last_value
            self._last_update = self._coordinator.last_update
        _LOGGER.debug(
            'Returning state "%s" of sensor "%s"',
            state,
            self.unique_id,
        )
        return state
