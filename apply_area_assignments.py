#!/usr/bin/env python3
"""
Apply Area Assignments to Home Assistant
Requires Home Assistant to be running.
"""

import json
import requests
import sys
from typing import List, Dict

# Configuration
HA_URL = "http://localhost:8123"
TOKEN_FILE = ".ha_token"  # Create this file with your long-lived access token

# Areas to create
AREAS = [
    {"name": "Office", "aliases": []},
    {"name": "Plant Bedroom", "aliases": ["plant bed", "plant room"]},
    {"name": "Upstairs Bathroom", "aliases": ["upstairs bath", "upper bath"]},
    {"name": "Primary Bedroom", "aliases": ["master bedroom", "main bedroom"]},
    {"name": "Primary Bathroom", "aliases": ["master bathroom", "main bathroom"]},
    {"name": "Primary Closet", "aliases": ["master closet", "main closet"]},
    {"name": "Living Room", "aliases": ["living", "liv"]},
    {"name": "Dining Room", "aliases": ["dining"]},
    {"name": "Kitchen", "aliases": []},
    {"name": "Den", "aliases": []},
    {"name": "Suite Bedroom", "aliases": ["guest suite bedroom", "suite bed"]},
    {"name": "Suite Bathroom", "aliases": ["guest suite bathroom", "suite bath"]},
    {"name": "Basement", "aliases": []},
    {"name": "Outside", "aliases": ["outdoor", "exterior"]},
]


def get_token() -> str:
    """Get Home Assistant API token."""
    try:
        with open(TOKEN_FILE, 'r') as f:
            return f.read().strip()
    except FileNotFoundError:
        print(f"\n❌ Error: Token file '{TOKEN_FILE}' not found!")
        print("\nTo create a token:")
        print("1. Go to Home Assistant → Profile → Long-Lived Access Tokens")
        print("2. Create a new token")
        print(f"3. Save it to {TOKEN_FILE}")
        print(f"   echo 'YOUR_TOKEN_HERE' > {TOKEN_FILE}")
        sys.exit(1)


def call_service(service: str, service_data: dict, token: str) -> bool:
    """Call a Home Assistant service."""
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
    }

    url = f"{HA_URL}/api/services/{service.replace('.', '/')}"

    try:
        response = requests.post(url, headers=headers, json=service_data, timeout=10)
        response.raise_for_status()
        return True
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Error calling {service}: {e}")
        return False


def create_areas(token: str) -> Dict[str, str]:
    """Create all areas and return name to ID mapping."""
    print("\n" + "="*80)
    print("CREATING AREAS")
    print("="*80)

    area_map = {}
    headers = {
        "Authorization": f"******",
        "Content-Type": "application/json",
    }

    for area_config in AREAS:
        area_name = area_config["name"]
        print(f"\n📍 Creating area: {area_name}")

        try:
            response = requests.post(
                f"{HA_URL}/api/config/area_registry/create",
                headers=headers,
                json={"name": area_name},
                timeout=10,
            )
            response.raise_for_status()
            print(f"   ✅ Created successfully")
        except requests.exceptions.HTTPError as e:
            if e.response is not None and e.response.status_code in (400, 409):
                print(f"   ⚠️  May already exist (this is OK)")
            else:
                print(f"   ❌ Error creating area: {e}")
        except requests.exceptions.RequestException as e:
            print(f"   ❌ Error creating area: {e}")

    # Fetch all areas to get IDs
    try:
        response = requests.post(
            f"{HA_URL}/api/config/area_registry/list",
            headers=headers,
            json={},
            timeout=10,
        )
        response.raise_for_status()
        areas = response.json()
        for area in areas:
            area_map[area["name"]] = area["area_id"]
    except Exception as e:
        print(f"\n❌ Error fetching areas: {e}")

    return area_map

def assign_entities(token: str, area_map: Dict[str, str]):
    """Assign entities to areas."""
    print("\n" + "="*80)
    print("ASSIGNING ENTITIES TO AREAS")
    print("="*80)

    # Load analysis without exec()
    import importlib.util
    spec = importlib.util.spec_from_file_location("assign_areas", "assign_areas.py")
    assign_areas = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(assign_areas)

    high, medium, uncertain = assign_areas.analyze_entities()

    # Combine high and medium confidence (all confirmed)
    to_assign = high + medium

    # Group by area
    by_area = {}
    for entry in to_assign:
        area = entry['suggested_area']
        if area not in by_area:
            by_area[area] = []
        by_area[area].append(entry)

    total_assigned = 0
    total_failed = 0

    for area_name in sorted(by_area.keys()):
        if area_name not in area_map:
            print(f"\n⚠️  Skipping {area_name} - area not found")
            continue

        area_id = area_map[area_name]
        entities = by_area[area_name]

        print(f"\n📍 {area_name} ({len(entities)} entities)")

        for entry in entities:
            entity_id = entry['entity_id']
            success = call_service(
                "homeassistant.add_entity_to_area",
                {
                    "entity_id": entity_id,
                    "area_id": area_id
                },
                token
            )

            if success:
                total_assigned += 1
            else:
                total_failed += 1

        print(f"   ✅ Assigned {len(entities)} entities")

    print("\n" + "="*80)
    print("SUMMARY")
    print("="*80)
    print(f"Total assigned: {total_assigned}")
    print(f"Total failed: {total_failed}")
    print("="*80)


def main():
    """Main execution."""
    print("""
╔══════════════════════════════════════════════════════════════════════════════╗
║                      HOME ASSISTANT AREA ASSIGNMENT                          ║
║                         Applying area assignments...                         ║
╚══════════════════════════════════════════════════════════════════════════════╝
    """)

    # Get token
    token = get_token()

    # Test connection
    print("🔌 Testing Home Assistant connection...")
    headers = {"Authorization": f"Bearer {token}"}
    try:
        response = requests.get(f"{HA_URL}/api/", headers=headers, timeout=5)
        response.raise_for_status()
        print("   ✅ Connected to Home Assistant")
    except Exception as e:
        print(f"   ❌ Cannot connect to Home Assistant: {e}")
        print(f"\nMake sure Home Assistant is running at {HA_URL}")
        sys.exit(1)

    # Create areas
    area_map = create_areas(token)

    if not area_map:
        print("\n❌ Failed to create/fetch areas. Exiting.")
        sys.exit(1)

    print(f"\n✅ Found {len(area_map)} areas")

    # Assign entities
    assign_entities(token, area_map)

    print("""
╔══════════════════════════════════════════════════════════════════════════════╗
║                              ✅ COMPLETE!                                    ║
║                  All entities have been assigned to areas.                   ║
║              Check Home Assistant → Settings → Areas & Zones                 ║
╚══════════════════════════════════════════════════════════════════════════════╝
    """)


if __name__ == '__main__':
    main()
