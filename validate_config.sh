#!/bin/bash

# Configuration Validation Script
# Checks files before restarting Home Assistant

echo "╔══════════════════════════════════════════════════════════════════════════════╗"
echo "║              HOME ASSISTANT CONFIGURATION VALIDATOR                         ║"
echo "╚══════════════════════════════════════════════════════════════════════════════╝"
echo ""

ERRORS=0
WARNINGS=0

# Check function
check_file() {
    if [ -f "$1" ]; then
        echo "✅ $1 exists"
        return 0
    else
        echo "❌ $1 MISSING!"
        ERRORS=$((ERRORS + 1))
        return 1
    fi
}

check_dir() {
    if [ -d "$1" ]; then
        echo "✅ $1/ directory exists"
        return 0
    else
        echo "⚠️  $1/ directory missing (will create if needed)"
        WARNINGS=$((WARNINGS + 1))
        return 1
    fi
}

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Checking Core Files..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

check_file "configuration.yaml"
check_file "secrets.yaml"
check_file "templates.yaml"
check_file "automations.yaml"
check_file "scripts.yaml"
check_file "scenes.yaml"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Checking Directories..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

check_dir "dashboards"
check_dir "themes"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Checking Dashboard Files..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

check_file "dashboards/rental_suite.yaml"
check_file "dashboards/presence.yaml"
check_file "dashboards/network.yaml"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Checking Script Files..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
# Scripts are defined in scripts.yaml in this repo (no scripts/ directory tracked)

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Checking Secrets..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check for required secrets (only if secrets.yaml exists)
# Only check secrets that are actively referenced (not commented out) in configuration.yaml
if [ -f "secrets.yaml" ]; then
    REQUIRED_SECRETS=()
    while IFS= read -r secret_name; do
        REQUIRED_SECRETS+=("$secret_name")
    done < <(grep -h '!secret' configuration.yaml templates.yaml automations.yaml scripts.yaml 2>/dev/null \
             | grep -v '^\s*#' \
             | grep -oP '(?<=!secret )\S+' \
             | sort -u)

    if [ ${#REQUIRED_SECRETS[@]} -eq 0 ]; then
        echo "ℹ️  No !secret references found in tracked YAML files"
    else
        for secret in "${REQUIRED_SECRETS[@]}"; do
            if grep -q "^${secret}:" secrets.yaml; then
                echo "✅ Secret: $secret"
            else
                echo "❌ Secret missing: $secret"
                ERRORS=$((ERRORS + 1))
            fi
        done
    fi
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Checking YAML Syntax..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check if Python YAML module is available
if command -v python3 &> /dev/null; then
    python3 << 'PYEOF'
import sys
try:
    import yaml
except ImportError:
    print("⚠️  PyYAML (python 'yaml') not installed - skipping YAML syntax check")
    sys.exit(0)

class IgnoreHATagsLoader(yaml.SafeLoader):
    pass

def _ignore_ha_tags(loader, tag_suffix, node):
    if isinstance(node, yaml.ScalarNode):
        return loader.construct_scalar(node)
    if isinstance(node, yaml.SequenceNode):
        return loader.construct_sequence(node)
    return loader.construct_mapping(node)

IgnoreHATagsLoader.add_multi_constructor("!", _ignore_ha_tags)

files = [
    'configuration.yaml',
    'templates.yaml',
    'automations.yaml',
    'scripts.yaml',
    'scenes.yaml',
    'dashboards/rental_suite.yaml',
    'dashboards/presence.yaml',
    'dashboards/network.yaml'
]

errors = 0

for filename in files:
    try:
        with open(filename, 'r') as f:
            yaml.load(f, Loader=IgnoreHATagsLoader)
        print(f"✅ {filename} - Valid YAML")
    except yaml.YAMLError as e:
        print(f"❌ {filename} - YAML Error:")
        print(f"   {e}")
        errors += 1
    except FileNotFoundError:
        print(f"⚠️  {filename} - File not found (may be OK if optional)")

sys.exit(errors)
PYEOF

    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ All YAML files have valid syntax"
    else
        echo ""
        echo "❌ Some YAML files have syntax errors"
        ERRORS=$((ERRORS + 1))
    fi
else
    echo "⚠️  Python3 not available - skipping YAML syntax check"
    echo "   (Will be validated by Home Assistant on restart)"
    WARNINGS=$((WARNINGS + 1))
fi

echo ""
echo "╔══════════════════════════════════════════════════════════════════════════════╗"
echo "║                             VALIDATION SUMMARY                               ║"
echo "╚══════════════════════════════════════════════════════════════════════════════╝"
echo ""

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo "🎉 Perfect! No errors or warnings."
    echo ""
    echo "✅ Configuration is ready!"
    echo ""
    echo "Next steps:"
    echo "1. Settings > System > Restart > Check Configuration (in HA UI)"
    echo "2. If check passes, restart Home Assistant"
    echo "3. Verify Rental Suite dashboard appears in sidebar"
    echo "4. Check Developer Tools > States for new template sensors"
    echo ""
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo "✅ No critical errors found"
    echo "⚠️  $WARNINGS warning(s) - review above"
    echo ""
    echo "You can proceed, but review warnings first."
    echo ""
    exit 0
else
    echo "❌ Found $ERRORS error(s)"
    if [ $WARNINGS -gt 0 ]; then
        echo "⚠️  Found $WARNINGS warning(s)"
    fi
    echo ""
    echo "⛔ Fix errors before restarting Home Assistant!"
    echo ""
    exit 1
fi
