# Smithery Exa Installation Attempt

## Date
2025-10-29

## Attempted Command
```bash
npx -y @smithery/cli@latest install exa --client claude --profile ill-rabbit-iIUm0x --key e685cb4d-065b-4ae4-b38c-50fb2a059398
```

## Issue Encountered
The Smithery registry service (registry.smithery.ai) is currently unavailable, returning HTTP 503 (Service Unavailable).

## Error Details
- DNS resolution works for registry.smithery.ai
- Connection succeeds but registry returns 503 status
- Installation times out during package resolution phase
- Error: `Request timed out: TimeoutError: The operation was aborted due to timeout`

## Resolution
The installation should be retried once the Smithery registry service is back online. This appears to be a temporary service outage on Smithery's end.

## Next Steps
1. Wait for Smithery registry service to recover
2. Retry the installation command
3. Alternatively, check https://smithery.ai for service status updates
