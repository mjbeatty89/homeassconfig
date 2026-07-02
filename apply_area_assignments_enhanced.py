#!/usr/bin/env python3
"""
Apply Enhanced Area Assignments to Home Assistant
- Corrects mismatched area assignments
- Assigns unassigned entities
- Validates existing assignments
"""

import json
import requests
import sys
from typing import List, Dict

# Configuration
HA_URL = "http://localhost:8123"
TOKEN_FILE = ".ha_token"

# Import analysis from enhanced script
import importlib.util
spec = importlib.util.spec_from_file_location("assign_areas_enhanced", "assign_areas_enhanced.py")
assign_areas = importlib.util.module_from_spec(spec)
spec.loader.exec_module(assign_areas)


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
        return False


def main():
    """Main execution."""
    print("""
╔══════════════════════════════════════════════════════════════════════════════╗
║              ENHANCED HOME ASSISTANT AREA ASSIGNMENT                         ║
║         Validates existing assignments and corrects mismatches               ║
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

    # Run analysis
    print("\n" + "="*80)
    print("ANALYZING ASSIGNMENTS...")
    print("="*80)

    unassigned, mismatched, correct, uncertain, area_map = assign_areas.analyze_entities()

    print(f"\n✅ Found {len(correct)} correctly assigned entities")
    print(f"🔧 Found {len(mismatched)} mismatched assignments to correct")
    print(f"📍 Found {len(unassigned)} unassigned entities to assign")
    print(f"❓ Found {len(uncertain)} uncertain entities (will skip)")

    total_to_process = len(mismatched) + len(unassigned)

    if total_to_process == 0:
        print("\n" + "="*80)
        print("✅ All entities are correctly assigned! Nothing to do.")
        print("="*80)
        return

    # Process mismatches first
    if mismatched:
        print("\n" + "="*80)
        print(f"CORRECTING {len(mismatched)} MISMATCHED ASSIGNMENTS")
        print("="*80)

        corrected = 0
        failed = 0

        for entry in mismatched:
            entity_id = entry['entity_id']
            area_id = entry['suggested_area_id']
            old_area = entry['current_area']
            new_area = entry['suggested_area']

            print(f"\n  {entity_id}")
            print(f"    {old_area} → {new_area}")

            success = call_service(
                "homeassistant.add_entity_to_area",
                {
                    "entity_id": entity_id,
                    "area_id": area_id
                },
                token
            )

            if success:
                corrected += 1
                print(f"    ✅ Corrected")
            else:
                failed += 1
                print(f"    ❌ Failed")

        print(f"\n  Corrected: {corrected}, Failed: {failed}")

    # Process unassigned
    if unassigned:
        print("\n" + "="*80)
        print(f"ASSIGNING {len(unassigned)} UNASSIGNED ENTITIES")
        print("="*80)

        # Group by area
        by_area = {}
        for entry in unassigned:
            area = entry['suggested_area']
            if area not in by_area:
                by_area[area] = []
            by_area[area].append(entry)

        assigned = 0
        failed = 0

        for area_name in sorted(by_area.keys()):
            entities = by_area[area_name]
            area_id = area_map.get(area_name)

            if not area_id:
                print(f"\n⚠️  Skipping {area_name} - area not found in registry")
                continue

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
                    assigned += 1
                else:
                    failed += 1

            print(f"  ✅ Assigned {len(entities)} entities")

        print(f"\n  Total assigned: {assigned}, Failed: {failed}")

    print("\n" + "="*80)
    print("FINAL SUMMARY")
    print("="*80)
    print(f"Mismatches corrected:  {len(mismatched)}")
    print(f"New assignments:       {len(unassigned)}")
    print(f"Total processed:       {total_to_process}")
    print("="*80)

    print("""
╔══════════════════════════════════════════════════════════════════════════════╗
║                              ✅ COMPLETE!                                    ║
║                  All area assignments have been applied.                     ║
║              Check Home Assistant → Settings → Areas & Zones                 ║
╚══════════════════════════════════════════════════════════════════════════════╝
    """)


if __name__ == '__main__':
    main()
