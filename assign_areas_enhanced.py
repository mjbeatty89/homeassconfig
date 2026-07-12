#!/usr/bin/env python3
"""
Enhanced Area Assignment Script
- Validates existing area assignments
- Detects and auto-corrects mismatches
- Assigns unassigned entities
"""

import json
import re
from typing import Dict, List, Tuple, Optional

# Define areas
AREAS = [
    "Office",
    "Plant Bedroom",
    "Upstairs Bathroom",
    "Primary Bedroom",
    "Primary Bathroom",
    "Primary Closet",
    "Living Room",
    "Dining Room",
    "Kitchen",
    "Den",
    "Suite Bedroom",
    "Suite Bathroom",
    "Basement",
    "Outside"
]

# Mapping patterns - area name to regex patterns
AREA_PATTERNS = {
    "Office": [
        r'\boffice\b',
        r'\boffice_\w+',
        r'\w+_office\b',
    ],
    "Plant Bedroom": [
        r'\bplant\b',
        r'\bplant_bed',
        r'\bbed.*plant\b',
    ],
    "Upstairs Bathroom": [
        r'\bupstairs.*bath',
        r'\bupstairs.*toilet',
        r'\bup.*bath',
    ],
    "Primary Bedroom": [
        r'\bprimary.*bed',
        r'\bmaster.*bed',
        r'\bmain.*bed',
        r'\bprimary_bed',
        r'\bmaster_bed',
    ],
    "Primary Bathroom": [
        r'\bprimary.*bath',
        r'\bmaster.*bath',
        r'\bmain.*bath',
        r'\bprimary_bath',
        r'\bmaster_bath',
    ],
    "Primary Closet": [
        r'\bprimary.*closet',
        r'\bmaster.*closet',
        r'\bprimary_closet',
        r'\bmaster_closet',
    ],
    "Living Room": [
        r'\bliving',
        r'\bliv\b',
        r'\bliv_',
        r'\blivingroom',
    ],
    "Dining Room": [
        r'\bdining',
        r'\bdinner',
    ],
    "Kitchen": [
        r'\bkitchen',
        r'\bkitch\b',
    ],
    "Den": [
        r'\bden\b',
        r'\bden_',
        r'\b_den\b',
    ],
    "Suite Bedroom": [
        r'\bsuite.*bed',
        r'\bguest.*suite.*bed',
        r'\bsuite_bed',
    ],
    "Suite Bathroom": [
        r'\bsuite.*bath',
        r'\bguest.*suite.*bath',
        r'\bsuite_bath',
    ],
    "Basement": [
        r'\bbasement',
        r'\bcellar\b',
        r'\bdownstairs\b',
    ],
    "Outside": [
        r'\boutside',
        r'\boutdoor',
        r'\bfront.*porch',
        r'\bback.*porch',
        r'\bpatio\b',
        r'\bdeck\b',
        r'\byard\b',
        r'\bgarden\b',
        r'\bgarage\b',
        r'\bdriveway',
        r'\bexterior',
        r'\bfront.*door',
        r'\brear\b',
    ]
}


def load_entity_registry() -> dict:
    """Load entity registry from storage."""
    with open('.storage/core.entity_registry', 'r') as f:
        return json.load(f)


def load_device_registry() -> dict:
    """Load device registry from storage."""
    with open('.storage/core.device_registry', 'r') as f:
        return json.load(f)


def load_area_registry() -> dict:
    """Load area registry from storage."""
    try:
        with open('.storage/core.area_registry', 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        return {'data': {'areas': []}}


def match_entity_to_area(entity_id: str, entity_name: str, device_name: str) -> Tuple[Optional[str], float]:
    """
    Match entity to area based on name patterns.
    Returns (area_name, confidence_score)
    """
    search_text = f"{entity_id} {entity_name} {device_name}".lower()

    best_match = None
    best_score = 0.0

    for area_name, patterns in AREA_PATTERNS.items():
        for pattern in patterns:
            if re.search(pattern, search_text, re.IGNORECASE):
                # Score based on pattern specificity
                score = 0.5

                # Higher score if match is in entity_id
                if re.search(pattern, entity_id.lower(), re.IGNORECASE):
                    score = 1.0
                # Medium score if in entity name
                elif re.search(pattern, entity_name.lower(), re.IGNORECASE):
                    score = 0.8
                # Lower score if only in device name
                elif re.search(pattern, device_name.lower(), re.IGNORECASE):
                    score = 0.6

                if score > best_score:
                    best_score = score
                    best_match = area_name

    return best_match, best_score


def analyze_entities():
    """Analyze all entities and detect mismatches."""
    entity_data = load_entity_registry()
    device_data = load_device_registry()
    area_data = load_area_registry()

    # Build device lookup
    devices = {}
    for device in device_data.get('data', {}).get('devices', []):
        devices[device['id']] = device.get('name') or device.get('name_by_user') or ''

    # Build area name lookup
    area_id_to_name = {}
    area_name_to_id = {}
    for area in area_data.get('data', {}).get('areas', []):
        area_id = area.get('area_id')
        area_name = area.get('name')
        if area_id and area_name:
            area_id_to_name[area_id] = area_name
            area_name_to_id[area_name] = area_id

    # Analyze entities
    unassigned = []  # No area assigned
    correct = []  # Area matches pattern
    mismatched = []  # Area doesn't match pattern
    uncertain = []  # No clear pattern match

    for entity in entity_data.get('data', {}).get('entities', []):
        entity_id = entity.get('entity_id', '')
        entity_name = entity.get('name') or entity.get('original_name') or ''
        device_id = entity.get('device_id')
        device_name = devices.get(device_id, '') if device_id else ''
        current_area_id = entity.get('area_id')

        # Skip certain entity types
        domain = entity_id.split('.')[0]
        if domain in ['sun', 'zone', 'automation', 'script', 'scene']:
            continue

        # Determine suggested area
        suggested_area, confidence = match_entity_to_area(entity_id, entity_name, device_name)

        current_area_name = area_id_to_name.get(current_area_id) if current_area_id else None

        entry = {
            'entity_id': entity_id,
            'name': entity_name,
            'device_name': device_name,
            'current_area': current_area_name,
            'current_area_id': current_area_id,
            'suggested_area': suggested_area,
            'suggested_area_id': area_name_to_id.get(suggested_area) if suggested_area else None,
            'confidence': confidence
        }

        if not current_area_id:
            # No area assigned
            if suggested_area and confidence >= 0.5:
                unassigned.append(entry)
            else:
                uncertain.append(entry)
        elif suggested_area and current_area_name != suggested_area and confidence >= 0.8:
            # Mismatch detected with high confidence
            mismatched.append(entry)
        elif suggested_area and current_area_name == suggested_area:
            # Correct assignment
            correct.append(entry)
        else:
            # Has area but low confidence or no suggestion
            entry['suggested_area'] = current_area_name  # Keep existing
            correct.append(entry)

    return unassigned, mismatched, correct, uncertain, area_name_to_id


def print_report():
    """Print analysis report."""
    unassigned, mismatched, correct, uncertain, area_map = analyze_entities()

    print("=" * 80)
    print("ENHANCED AREA ASSIGNMENT ANALYSIS")
    print("=" * 80)

    # Mismatched (needs correction)
    if mismatched:
        print(f"\n🔧 MISMATCHED ASSIGNMENTS ({len(mismatched)} entities) - WILL AUTO-CORRECT:")
        print("-" * 80)
        for entry in mismatched[:20]:
            print(f"\n  Entity: {entry['entity_id']}")
            print(f"  Current: {entry['current_area']} ❌")
            print(f"  Should be: {entry['suggested_area']} ✅ (confidence: {entry['confidence']:.1%})")
        if len(mismatched) > 20:
            print(f"\n  ... and {len(mismatched) - 20} more")

    # Unassigned (needs assignment)
    print(f"\n\n📍 UNASSIGNED ({len(unassigned)} entities) - WILL ASSIGN:")
    print("-" * 80)

    by_area = {}
    for entry in unassigned:
        area = entry['suggested_area']
        if area not in by_area:
            by_area[area] = []
        by_area[area].append(entry)

    for area in sorted(by_area.keys()):
        entities = by_area[area]
        print(f"\n{area} ({len(entities)} entities)")
        for e in entities[:5]:
            print(f"  {e['entity_id']}")
        if len(entities) > 5:
            print(f"  ... and {len(entities) - 5} more")

    # Correct (no action needed)
    print(f"\n\n✅ CORRECTLY ASSIGNED ({len(correct)} entities) - NO ACTION NEEDED")

    # Uncertain (skip)
    print(f"\n\n❓ UNCERTAIN ({len(uncertain)} entities) - WILL SKIP")

    print("\n" + "=" * 80)
    print("SUMMARY")
    print("=" * 80)
    print(f"Mismatched (will correct):  {len(mismatched)}")
    print(f"Unassigned (will assign):   {len(unassigned)}")
    print(f"Correctly assigned:         {len(correct)}")
    print(f"Uncertain (skip):           {len(uncertain)}")
    print(f"Total to process:           {len(mismatched) + len(unassigned)}")
    print("=" * 80)


if __name__ == '__main__':
    print_report()
