#!/usr/bin/env python3
"""Export a rental-area Home Assistant migration inventory.

Requires:
  HOMEASSISTANT_URL=http://host:8123
  HOMEASSISTANT_TOKEN=<long-lived access token>
"""

from __future__ import annotations

import base64
import csv
import datetime as dt
import hashlib
import json
import os
import random
import socket
import ssl
import struct
import sys
import urllib.parse
import urllib.request
from pathlib import Path
from typing import Any


TARGET_AREAS = {
    "den",
    "suite_bedroom",
    "suite bedroom",
    "suite_guest_bed",
    "suite guest bed",
    "suite_bathroom",
    "suite bathroom",
}

PRIORITY_ENTITIES = {
    "climate.suite_thermostat",
    "fan.den_ceiling_fan",
    "light.unnamed_ks240_den_fanlight",
    "light.den_hall",
    "light.den_lights",
    "light.suite_lights",
    "light.suite_bedroom_scones",
    "light.suite_guest_bed",
    "camera.den_doorbell",
    "device_tracker.suitebed_plate01",
}

NETWORK_TERMS = ("suite_u6_pro", "den_flex_mini", "uplink", "ssid", "signal")
REPAIR_TERMS = ("plate01", "openhasp", "rotary", "impact", "vue", "dining_and_patio_selector")
GUEST_CRITICAL_DOMAINS = {"climate", "cover", "fan", "light", "lock", "camera"}
COMFORT_SENSOR_TERMS = ("temperature", "humidity", "battery", "occupancy", "motion", "contact")


class HAClient:
    def __init__(self, base_url: str, token: str) -> None:
        self.base_url = base_url.rstrip("/")
        self.token = token
        self.ws: socket.socket | ssl.SSLSocket | None = None
        self.msg_id = 1

    def rest_json(self, path: str, data: dict[str, Any] | None = None) -> Any:
        payload = None if data is None else json.dumps(data).encode()
        request = urllib.request.Request(
            f"{self.base_url}{path}",
            data=payload,
            headers={
                "Authorization": f"Bearer {self.token}",
                "Content-Type": "application/json",
            },
        )
        context = ssl._create_unverified_context() if self.base_url.startswith("https://") else None
        with urllib.request.urlopen(request, context=context, timeout=20) as response:
            return json.loads(response.read().decode())

    def connect_ws(self) -> None:
        parsed = urllib.parse.urlparse(self.base_url)
        secure = parsed.scheme == "https"
        host = parsed.hostname
        if not host:
            raise RuntimeError(f"Could not parse host from {self.base_url}")
        port = parsed.port or (443 if secure else 80)
        raw = socket.create_connection((host, port), timeout=20)
        if secure:
            raw = ssl._create_unverified_context().wrap_socket(raw, server_hostname=host)

        key = base64.b64encode(os.urandom(16)).decode()
        request = (
            "GET /api/websocket HTTP/1.1\r\n"
            f"Host: {host}:{port}\r\n"
            "Upgrade: websocket\r\n"
            "Connection: Upgrade\r\n"
            f"Sec-WebSocket-Key: {key}\r\n"
            "Sec-WebSocket-Version: 13\r\n\r\n"
        )
        raw.sendall(request.encode())
        response = raw.recv(4096)
        if b" 101 " not in response.split(b"\r\n", 1)[0]:
            raise RuntimeError(f"WebSocket handshake failed: {response[:160]!r}")
        self.ws = raw

        hello = self._recv_json()
        if hello.get("type") != "auth_required":
            raise RuntimeError(f"Unexpected WebSocket greeting: {hello}")
        self._send_json({"type": "auth", "access_token": self.token})
        auth = self._recv_json()
        if auth.get("type") != "auth_ok":
            raise RuntimeError(f"WebSocket auth failed: {auth}")

    def call_ws(self, msg_type: str, **extra: Any) -> Any:
        if self.ws is None:
            self.connect_ws()
        msg_id = self.msg_id
        self.msg_id += 1
        self._send_json({"id": msg_id, "type": msg_type, **extra})
        while True:
            message = self._recv_json()
            if message.get("id") == msg_id:
                if not message.get("success", False):
                    raise RuntimeError(f"{msg_type} failed: {message}")
                return message.get("result")

    def close(self) -> None:
        if self.ws is not None:
            try:
                self.ws.close()
            finally:
                self.ws = None

    def _send_json(self, payload: dict[str, Any]) -> None:
        if self.ws is None:
            raise RuntimeError("WebSocket is not connected")
        data = json.dumps(payload, separators=(",", ":")).encode()
        mask_key = random.randbytes(4) if hasattr(random, "randbytes") else os.urandom(4)
        header = bytearray([0x81])
        length = len(data)
        if length < 126:
            header.append(0x80 | length)
        elif length < 65536:
            header.extend([0x80 | 126, *struct.pack("!H", length)])
        else:
            header.extend([0x80 | 127, *struct.pack("!Q", length)])
        masked = bytes(byte ^ mask_key[i % 4] for i, byte in enumerate(data))
        self.ws.sendall(bytes(header) + mask_key + masked)

    def _recv_json(self) -> dict[str, Any]:
        data = self._recv_frame()
        return json.loads(data.decode())

    def _recv_frame(self) -> bytes:
        if self.ws is None:
            raise RuntimeError("WebSocket is not connected")
        first = self._recv_exact(2)
        opcode = first[0] & 0x0F
        length = first[1] & 0x7F
        if length == 126:
            length = struct.unpack("!H", self._recv_exact(2))[0]
        elif length == 127:
            length = struct.unpack("!Q", self._recv_exact(8))[0]
        masked = bool(first[1] & 0x80)
        mask_key = self._recv_exact(4) if masked else b""
        payload = self._recv_exact(length)
        if masked:
            payload = bytes(byte ^ mask_key[i % 4] for i, byte in enumerate(payload))
        if opcode == 0x8:
            raise RuntimeError("WebSocket closed by server")
        if opcode != 0x1:
            return self._recv_frame()
        return payload

    def _recv_exact(self, length: int) -> bytes:
        if self.ws is None:
            raise RuntimeError("WebSocket is not connected")
        chunks = bytearray()
        while len(chunks) < length:
            chunk = self.ws.recv(length - len(chunks))
            if not chunk:
                raise RuntimeError("WebSocket closed unexpectedly")
            chunks.extend(chunk)
        return bytes(chunks)


def normalize_area(value: str | None) -> str:
    return (value or "").strip().lower().replace("-", "_")


def classify(entity_id: str, state: str, restored: bool, domain: str) -> tuple[str, str]:
    lower = entity_id.lower()
    if any(term in lower for term in NETWORK_TERMS):
        return "expose via bridge", "network/infrastructure telemetry should remain controller-owned initially"
    if restored and state in {"unavailable", "unknown"}:
        if any(term in lower for term in REPAIR_TERMS):
            return "repair before split", "restored stale openHASP or abandoned hardware path"
        return "retire/review", "restored unavailable entity; do not migrate blindly"
    if any(term in lower for term in REPAIR_TERMS) and state in {"unavailable", "unknown"}:
        return "repair before split", "hardware or integration exists but current HA binding is unhealthy"
    if entity_id in PRIORITY_ENTITIES or domain in GUEST_CRITICAL_DOMAINS:
        return "move to Rental HA", "guest-facing control or comfort entity"
    if domain in {"binary_sensor", "sensor"} and any(term in lower for term in COMFORT_SENSOR_TERMS):
        return "move to Rental HA", "guest occupancy/comfort diagnostic needed for deterministic rental control"
    if domain in {"scene", "script", "automation", "input_boolean", "input_number", "input_select"}:
        return "move to Rental HA", "room contract/control surface should live with the rental instance"
    if domain in {"media_player", "button", "event", "select", "number", "switch", "valve"}:
        return "leave on Main HA temporarily", "non-critical or device-management surface; migrate after owner is confirmed"
    return "leave on Main HA temporarily", "not obviously guest-critical in first-pass migration"


def main() -> int:
    base_url = os.environ.get("HOMEASSISTANT_URL")
    token = os.environ.get("HOMEASSISTANT_TOKEN")
    if not base_url or not token:
        print("Set HOMEASSISTANT_URL and HOMEASSISTANT_TOKEN before running.", file=sys.stderr)
        return 2

    output_dir = Path(os.environ.get("RENTAL_INVENTORY_DIR", "docs/rental/inventory"))
    output_dir.mkdir(parents=True, exist_ok=True)
    stamp = dt.datetime.now().strftime("%Y-%m-%d")

    client = HAClient(base_url, token)
    try:
        states = {item["entity_id"]: item for item in client.rest_json("/api/states")}
        areas = client.call_ws("config/area_registry/list")
        entities = client.call_ws("config/entity_registry/list")
        devices = client.call_ws("config/device_registry/list")
        config_entries = client.rest_json("/api/config/config_entries/entry")
    finally:
        client.close()

    area_by_id = {area["area_id"]: area.get("name", area["area_id"]) for area in areas}
    target_area_ids = {
        area["area_id"]
        for area in areas
        if normalize_area(area["area_id"]) in TARGET_AREAS or normalize_area(area.get("name")) in TARGET_AREAS
    }
    device_by_id = {device["id"]: device for device in devices}
    entry_by_id = {entry["entry_id"]: entry for entry in config_entries}

    rows: list[dict[str, Any]] = []
    for entity in sorted(entities, key=lambda item: item["entity_id"]):
        entity_id = entity["entity_id"]
        state_obj = states.get(entity_id, {})
        attrs = state_obj.get("attributes", {})
        device = device_by_id.get(entity.get("device_id") or "", {})
        area_id = entity.get("area_id") or device.get("area_id")
        area_name = area_by_id.get(area_id, area_id or "")
        in_target_area = area_id in target_area_ids or normalize_area(area_name) in TARGET_AREAS
        in_room_contract = (
            "_ohana_suite" in entity_id
            or entity_id.startswith(
                (
                    "sensor.ohana_",
                    "binary_sensor.ohana_",
                    "binary_sensor.rental_",
                    "automation.rental_",
                    "script.rental_",
                    "input_boolean.rental_",
                    "input_select.rental_",
                )
            )
        )
        if not (in_target_area or in_room_contract or entity_id in PRIORITY_ENTITIES):
            continue

        domain = entity_id.split(".", 1)[0]
        state = state_obj.get("state", "missing")
        restored = bool(attrs.get("restored"))
        config_entry_ids = entity.get("config_entry_id") or device.get("config_entries") or []
        if isinstance(config_entry_ids, str):
            config_entry_ids = [config_entry_ids]
        integrations = sorted({entry_by_id.get(entry_id, {}).get("domain", "") for entry_id in config_entry_ids if entry_id in entry_by_id})
        classification, rationale = classify(entity_id, state, restored, domain)

        rows.append(
            {
                "entity_id": entity_id,
                "domain": domain,
                "state": state,
                "area_id": area_id or "",
                "area_name": area_name or "",
                "friendly_name": attrs.get("friendly_name") or entity.get("name") or entity.get("original_name") or "",
                "restored": restored,
                "device_id": entity.get("device_id") or "",
                "device_name": device.get("name_by_user") or device.get("name") or "",
                "manufacturer": device.get("manufacturer") or "",
                "model": device.get("model") or "",
                "integration": ", ".join(integrations),
                "classification": classification,
                "rationale": rationale,
            }
        )

    summary: dict[str, Any] = {
        "generated_at": dt.datetime.now(dt.UTC).isoformat(),
        "source": base_url,
        "target_areas": sorted(TARGET_AREAS),
        "counts": {
            "total": len(rows),
            "by_classification": {},
            "by_area": {},
            "by_domain": {},
        },
        "rows": rows,
    }
    for row in rows:
        for key, value in (
            ("by_classification", row["classification"]),
            ("by_area", row["area_name"] or row["area_id"] or "unassigned"),
            ("by_domain", row["domain"]),
        ):
            summary["counts"][key][value] = summary["counts"][key].get(value, 0) + 1

    json_path = output_dir / f"rental-inventory-{stamp}.json"
    csv_path = output_dir / f"rental-inventory-{stamp}.csv"
    md_path = output_dir / f"rental-inventory-{stamp}.md"

    json_path.write_text(json.dumps(summary, indent=2, sort_keys=True) + "\n")
    fieldnames = list(rows[0].keys()) if rows else []
    with csv_path.open("w", newline="") as fh:
        writer = csv.DictWriter(fh, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

    lines = [
        f"# Rental Inventory Export - {stamp}",
        "",
        f"- Source: `{base_url}`",
        f"- Entity count: `{len(rows)}`",
        "",
        "## Classification Counts",
        "",
    ]
    for key, value in sorted(summary["counts"]["by_classification"].items()):
        lines.append(f"- `{key}`: {value}")
    lines.extend(["", "## Priority Rows", ""])
    for row in rows:
        if row["classification"] in {"move to Rental HA", "repair before split"}:
            lines.append(
                f"- `{row['entity_id']}` ({row['area_name']}, {row['integration'] or 'unknown integration'}): "
                f"{row['classification']} - {row['rationale']}"
            )
    md_path.write_text("\n".join(lines) + "\n")

    print(f"Wrote {json_path}")
    print(f"Wrote {csv_path}")
    print(f"Wrote {md_path}")
    digest = hashlib.sha256(json_path.read_bytes()).hexdigest()
    print(f"JSON sha256: {digest}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
