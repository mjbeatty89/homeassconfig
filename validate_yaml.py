#!/usr/bin/env python3
"""
YAML validator for Home Assistant configuration files
Handles custom tags like !include, !secret, !include_dir_merge_named
"""

import yaml
import sys
import os
from pathlib import Path

class HomeAssistantLoader(yaml.SafeLoader):
    """Custom YAML loader for Home Assistant tags"""
    pass

def include_constructor(loader, node):
    """Constructor for !include tag"""
    filepath = loader.construct_scalar(node)
    return f"<included: {filepath}>"

def secret_constructor(loader, node):
    """Constructor for !secret tag"""
    secret_name = loader.construct_scalar(node)
    return f"<secret: {secret_name}>"

def include_dir_constructor(loader, node):
    """Constructor for !include_dir_* tags"""
    dirpath = loader.construct_scalar(node)
    return f"<include_dir: {dirpath}>"

# Register custom constructors
HomeAssistantLoader.add_constructor('!include', include_constructor)
HomeAssistantLoader.add_constructor('!secret', secret_constructor)
HomeAssistantLoader.add_constructor('!include_dir_merge_named', include_dir_constructor)
HomeAssistantLoader.add_constructor('!include_dir_list', include_dir_constructor)
HomeAssistantLoader.add_constructor('!include_dir_merge_list', include_dir_constructor)

def validate_yaml_file(filepath):
    """Validate a YAML file"""
    try:
        with open(filepath, 'r') as f:
            yaml.load(f, Loader=HomeAssistantLoader)
        return True, None
    except yaml.YAMLError as e:
        return False, str(e)
    except Exception as e:
        return False, str(e)

def main():
    """Main validation function"""
    yaml_files = [
        'configuration.yaml',
        'binary_sensors.yaml',
        'input_booleans.yaml',
        'secrets.yaml',
        'ui-lovelace.yaml'
    ]
    
    all_valid = True
    for yaml_file in yaml_files:
        if os.path.exists(yaml_file):
            valid, error = validate_yaml_file(yaml_file)
            if valid:
                print(f"✓ {yaml_file} is valid")
            else:
                print(f"✗ {yaml_file} has errors:")
                print(f"  {error}")
                all_valid = False
        else:
            print(f"⚠ {yaml_file} not found")
    
    if all_valid:
        print("\n✓ All YAML files are valid!")
        return 0
    else:
        print("\n✗ Some YAML files have errors")
        return 1

if __name__ == '__main__':
    sys.exit(main())
