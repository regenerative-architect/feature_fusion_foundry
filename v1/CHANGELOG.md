# Changelog

## 1.3.0 — Catalog recovery, file-safe core and long-form feature bank

- Fixed the capability-module syntax error that could stop the application module graph from loading.
- Added a classic deferred application bundle for direct `file://` operation of core features.
- Pre-rendered every feature into `index.html` so documentation never disappears behind a JavaScript failure.
- Expanded the capability registry from 430 to 868 explicit entries.
- Added long-form description, implementation, fusion, risk and fallback fields to every feature.
- Added Expand all / Collapse all controls and richer full-text search coverage.
- Added safe localStorage and clipboard fallbacks.
- Added a WebLLM worker-to-main-thread fallback path for environments where worker construction fails.
- Bumped the service-worker cache to `fusion-foundry-core-v1.3.0` and precached `js/app.bundle.js`.

## 1.2.1 — Cinematic fail-safe splash

- Added locally bundled Earth/cosmos art, shooting-star and orbital animation.
- Bound splash dismissal independently from async app initialization.
- Added Enter, Escape, init-complete, recovery and hard-timeout dismissal paths.
- Changed navigations to network-first so deployed UI fixes are less likely to be hidden by stale shells.

## 1.1.0 — Four-edge HUD + concise prompt minifier

- Added strict comma-only prompt generation with optional character budgeting.
- Added optional curated-synergy completion and custom feature names.
- Added synchronized top, left, right and bottom HUD surfaces driven by one route registry.
- Added responsive left/right drawers and bottom workflow/status navigation.
