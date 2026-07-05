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
check_dir "scripts"
check_dir "themes"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Checking Dashboard Files..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

check_file "dashboards/rental_suite.yaml"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Checking Script Files..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

check_file "scripts/rental_scenes.yaml"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Checking Secrets..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check for required secrets
REQUIRED_SECRETS=("ha_latitude" "ha_longitude" "ha_elevation" "internal_url" "external_url")

for secret in "${REQUIRED_SECRETS[@]}"; do
    if grep -q "^${secret}:" secrets.yaml 2>/dev/null; then
        echo "✅ Secret: $secret"
    else
        echo "❌ Secret missing: $secret"
        ERRORS=$((ERRORS + 1))
    fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Checking YAML Syntax..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check if Python YAML module is available
if command -v python3 &> /dev/null; then
    python3 << 'PYEOF'
import yaml
import sys

files = [
    'configuration.yaml',
    'templates.yaml',
    'dashboards/rental_suite.yaml',
    'scripts/rental_scenes.yaml'
]

errors = 0

for filename in files:
    try:
        with open(filename, 'r') as f:
            yaml.safe_load(f)
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
