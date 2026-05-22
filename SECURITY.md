# Security Policy

Thanks for taking the time to help keep this project and its users safe.

## Supported Versions

This repository is a rolling template — only the latest commit on `main` (and
the live site built from it) receives security fixes. Forks or older snapshots
are not supported; please rebase onto `main` before reporting issues against
older code.

| Version       | Supported          |
| ------------- | ------------------ |
| `main` (HEAD) | :white_check_mark: |
| Older commits | :x:                |

## Reporting a Vulnerability

**Please do not open a public GitHub issue, pull request, or discussion for
security reports.** Public disclosure before a fix is available puts users at
risk.

Instead, report privately via GitHub Security Advisories:

https://github.com/schwannden/resume/security/advisories/new

This opens a private channel visible only to the maintainers. Include as much
of the following as you can:

- A description of the issue and its impact
- Steps to reproduce (PoC, affected URL, payload, etc.)
- Affected commit / version
- Any suggested fix or mitigation

If GitHub Security Advisories is unavailable to you, you can fall back to
contacting the maintainer listed in the repository profile.

## Response Targets

These are targets, not contractual guarantees — this is a personal/OSS project
maintained on a best-effort basis.

| Stage                        | Target                                              |
| ---------------------------- | --------------------------------------------------- |
| Initial acknowledgement      | within 72 hours                                     |
| Triage + severity assessment | within 7 days                                       |
| Fix or mitigation merged     | within 30 days for high/critical, 90 days otherwise |
| Public advisory + credit     | after a fix ships, coordinated with the reporter    |

## Scope

In scope:

- Source code in this repository
- The deployed site (GitHub Pages build of `main`)
- Build / CI configuration (`.github/workflows/`)

Out of scope:

- Vulnerabilities in third-party dependencies that have not been triaged
  upstream — please report those to the upstream project first; this repo will
  pick up the fix via Dependabot
- Issues that require physical access, a rooted device, or social engineering
  of the maintainer
- Findings from automated scanners without a demonstrated impact

## Safe Harbor

Good-faith security research conducted within this scope, that avoids privacy
violations, service degradation, and data destruction, will not be pursued or
reported. We will work with you to understand and resolve the issue quickly.
