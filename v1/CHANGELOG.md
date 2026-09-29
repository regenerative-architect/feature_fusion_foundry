## 1.2.1 — Cinematic fail-safe splash

- Replaced the blocking splash with a cinematic Earth/cosmos splash using a locally bundled photorealistic asset.
- Added shooting-star, cosmic-drift and orbital animations with reduced-motion support.
- Bound dismissal before async initialization.
- Added click, Escape, successful-init auto-close, startup-error recovery close and an 8-second hard timeout.
- Added graceful opacity fade before DOM removal.
- Bumped PWA cache to v1.2.1 and changed navigations to network-first with cached/offline fallback so stale shells do not mask deployed UI fixes.

# Changelog

## 1.1.0 — Four-edge HUD + concise prompt minifier

- Added strict comma-only prompt generation from selected capability names.
- Added optional character budgeting without truncating feature names.
- Added optional curated-synergy completion and manual comma-separated feature additions.
- Replaced duplicated navigation definitions with one route registry driving four complementary HUD edges.
- Added contextual right-edge actions and related-module navigation.
- Added bottom workflow/status HUD with selection and connectivity state.
- Added responsive left/right drawers and synchronized active-route state.
- Bumped service-worker cache to `fusion-foundry-core-v1.1.0` to invalidate the previous shell.
- Added `docs/HUD_AND_COMPACT_PROMPTS.md` and expanded smoke-test coverage.
