#!/usr/bin/env python3
"""
Area Assignment Script
Intelligently assigns entities to areas based on their names.
"""

import json
import re
from typing import Dict, List, Tuple

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

# Mapping patterns - area name to regex patterns that indicate that area
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


def match_entity_to_area(entity_id: str, entity_name: str, device_name: str) -> Tuple[str, float]:
    """
    Match entity to area based on name patterns.
    Returns (area_name, confidence_score)
    confidence_score: 0.0 - 1.0
    """
    search_text = f"{entity_id} {entity_name} {device_name}".lower()

    best_match = None
    best_score = 0.0

    for area_name, patterns in AREA_PATTERNS.items():
        for pattern in patterns:
            if re.search(pattern, search_text, re.IGNORECASE):
                # Score based on pattern specificity
                score = 0.5

                # Higher score if match is in entity_id (most specific)
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
    """Analyze all entities and suggest area assignments."""
    entity_data = load_entity_registry()
    device_data = load_device_registry()

    # Build device lookup
    devices = {}
    for device in device_data.get('data', {}).get('devices', []):
        devices[device['id']] = device.get('name') or device.get('name_by_user') or ''

    # Analyze entities
    high_confidence = []  # >= 0.8
    medium_confidence = []  # 0.5 - 0.79
    uncertain = []  # < 0.5 or no match

    for entity in entity_data.get('data', {}).get('entities', []):
        entity_id = entity.get('entity_id', '')
        entity_name = entity.get('name') or entity.get('original_name') or ''
        device_id = entity.get('device_id')
        device_name = devices.get(device_id, '') if device_id else ''

        # Skip certain entity types that don't need areas
        domain = entity_id.split('.')[0]
        if domain in ['sun', 'zone', 'group', 'automation', 'script', 'scene']:
            continue

        area, confidence = match_entity_to_area(entity_id, entity_name, device_name)

        entry = {
            'entity_id': entity_id,
            'name': entity_name,
            'device_name': device_name,
            'suggested_area': area,
            'confidence': confidence
        }

        if area and confidence >= 0.8:
            high_confidence.append(entry)
        elif area and confidence >= 0.5:
            medium_confidence.append(entry)
        else:
            uncertain.append(entry)

    return high_confidence, medium_confidence, uncertain


def print_report():
    """Print analysis report."""
    high, medium, uncertain = analyze_entities()

    print("=" * 80)
    print("AREA ASSIGNMENT ANALYSIS")
    print("=" * 80)

    print(f"\n✅ HIGH CONFIDENCE ({len(high)} entities) - Can assign automatically:")
    print("-" * 80)

    # Group by area
    by_area = {}
    for entry in high:
        area = entry['suggested_area']
        if area not in by_area:
            by_area[area] = []
        by_area[area].append(entry)

    for area in sorted(by_area.keys()):
        entities = by_area[area]
        print(f"\n📍 {area} ({len(entities)} entities)")
        for e in entities[:5]:  # Show first 5
            print(f"   {e['entity_id']}")
        if len(entities) > 5:
            print(f"   ... and {len(entities) - 5} more")

    print(f"\n\n⚠️  MEDIUM CONFIDENCE ({len(medium)} entities) - Should review:")
    print("-" * 80)

    by_area = {}
    for entry in medium:
        area = entry['suggested_area']
        if area not in by_area:
            by_area[area] = []
        by_area[area].append(entry)

    for area in sorted(by_area.keys()):
        entities = by_area[area]
        print(f"\n📍 {area} ({len(entities)} entities)")
        for e in entities[:3]:
            print(f"   {e['entity_id']} (confidence: {e['confidence']:.1%})")
        if len(entities) > 3:
            print(f"   ... and {len(entities) - 3} more")

    print(f"\n\n❓ UNCERTAIN ({len(uncertain)} entities) - Need manual assignment:")
    print("-" * 80)

    for entry in uncertain[:20]:  # Show first 20
        area_hint = entry['suggested_area'] or 'No match'
        print(f"   {entry['entity_id']}")
        print(f"      Device: {entry['device_name']}")
        print(f"      Suggestion: {area_hint} ({entry['confidence']:.1%})")
        print()

    if len(uncertain) > 20:
        print(f"   ... and {len(uncertain) - 20} more")

    print("\n" + "=" * 80)
    print("SUMMARY")
    print("=" * 80)
    print(f"High Confidence:   {len(high)}")
    print(f"Medium Confidence: {len(medium)}")
    print(f"Uncertain:         {len(uncertain)}")
    print(f"Total:             {len(high) + len(medium) + len(uncertain)}")
    print("=" * 80)


if __name__ == '__main__':
    print_report()
