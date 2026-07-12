```markdown
# homeassconfig Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill covers the development patterns, coding conventions, and operational workflows for the `homeassconfig` repository. The repository is primarily Python-based, focused on Home Assistant configuration management, and features a mix of YAML, shell scripts, and Python automation. It emphasizes safe handling of sensitive data, consistent code style, and collaborative workflows for maintaining and improving configuration files.

## Coding Conventions

- **File Naming:**  
  Use `snake_case` for Python and script files.  
  *Example:*  
  ```
  apply_area_assignments.py
  validate_config.sh
  ```

- **Import Style:**  
  Use relative imports within Python modules.  
  *Example:*  
  ```python
  from .utils import validate_config
  ```

- **Export Style:**  
  Use named exports; avoid wildcard (`*`) imports/exports.  
  *Example:*  
  ```python
  def assign_area(device, area):
      ...
  ```

- **Commit Messages:**  
  - Freeform style, sometimes prefixed with `fix`
  - Average length: ~42 characters
  - Reference the context (e.g., PR, Copilot Autofix) when relevant

## Workflows

### Automated Fix for Pull Request Findings
**Trigger:** When a pull request review (often by Copilot) identifies an issue in a specific file.  
**Command:** `/autofix-pr-finding`

1. Receive a pull request review with findings.
2. Apply an automated or manual fix to the identified file.
3. Commit the change with a message referencing the pull request finding and Copilot Autofix.

*Example Commit Message:*  
```
fix: Copilot Autofix for PR #123 - update automations.yaml
```

*Files Commonly Involved:*  
- `validate_config.sh`
- `ui_lovelace_minimalist/dashboard/ui-lovelace.yaml`
- `automations.yaml`
- `apply_area_assignments.py`
- `configuration.yaml`

---

### Multi-file PR Review Fixes
**Trigger:** When a pull request has multiple unresolved review comments requiring changes in different files.  
**Command:** `/fix-multi-pr-comments`

1. Review all unresolved PR comments.
2. Apply fixes across all affected files.
3. Commit all changes together with a message referencing the PR and review comments.

*Example Commit Message:*  
```
fix: address all outstanding PR #456 review comments
```

*Files Commonly Involved:*  
- `CONFIGURATION_SETUP.md`
- `auth_providers.yaml`
- `themes/visionos/Liquid Glass.yaml`

---

### Secrets and Sensitive Content Purge
**Trigger:** When secrets or sensitive files are accidentally committed and need to be purged from the repository.  
**Command:** `/purge-secrets`

1. Identify and remove all files containing secrets or sensitive data.
2. Update `.gitignore` to prevent future leaks.
3. Add or update documentation (e.g., `SECRETS_ROTATION.md`) with rotation and cleanup procedures.
4. Commit all removals and documentation updates.

*Example Commit Message:*  
```
purge: remove leaked secrets and update rotation docs
```

*Files Commonly Involved:*  
- `.gitignore`
- `SECRETS_ROTATION.md`
- Sensitive files (e.g., `*.pem`, `.storage_backup_before_recovery/`, blueprints, logs)

---

## Testing Patterns

- **Framework:** Not explicitly detected; testing approach is unclear.
- **File Naming:** Test files follow the `*.test.*` pattern.
- **Example:**  
  ```
  apply_area_assignments.test.py
  ```

*Recommendation:*  
If adding new tests, follow the `*.test.py` naming convention and place them alongside or near the code they test.

## Commands

| Command                | Purpose                                                        |
|------------------------|----------------------------------------------------------------|
| /autofix-pr-finding    | Apply an automated fix to a single file based on PR review     |
| /fix-multi-pr-comments | Address multiple PR review comments across several files        |
| /purge-secrets         | Remove secrets and sensitive files, update docs and .gitignore |

```