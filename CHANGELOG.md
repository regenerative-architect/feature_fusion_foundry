# Changelog

## 1.6.0 — Deterministic meta-chain + WebLLM diagnostics/recovery

- Made the meta-chain runnable without any neural model through a deterministic planner using intent classification, feature dependencies, curated synergies, risk rules and ordered implementation stages.
- Added Deterministic / Hybrid / WebLLM runner modes; deterministic is the default and Hybrid only calls WebLLM after a complete deterministic result exists.
- Replaced fragile `error.message` handling with structured serialization/classification of arbitrary thrown values.
- Added diagnostics for DXGI device removed/hung, WebGPU device loss, memory pressure, missing GPU features, requestDevice failures and worker/runtime failures.
- GPU faults now stop immediate retry/fallback loops and expose explicit recovery guidance.
- Added an opt-in WebGPU adapter/device probe plus copy/downloadable JSON diagnostic reports.
- Added explicit WebLLM 0.2.82 compatibility runtime alongside 0.2.85, with separate worker module and older-catalog warning.
- Added optional context-window caps and preserved hardware-aware model recommendations.
- Added `js/modules/metaplanner.js`, `tests/meta-planner-test.mjs`, `tests/webllm-diagnostic-test.mjs`, and `docs/WEBLLM_DIAGNOSTICS.md`.
- Bumped the service-worker cache to `fusion-foundry-core-v1.6.0`.

## 1.5.0 — Deterministic intent-gated planning + advanced visual engineering

- Replaced broad diversity-first discovery with deterministic **primary-intent gating** and negative-relevance penalties.
- Added primary vs secondary intent classification, precise/balanced/exploratory strategies and optional focus override.
- Moved generic accessibility/security/provenance baselines into a separate Supporting constraints lane so they do not displace the user-requested feature family.
- Added deterministic staged implementation plans and planner diagnostics.
- Expanded the feature registry from 868 to **912** capabilities with an advanced visual implementation pack covering motion, 3D rendering, shaders, lighting, post-processing, procedural effects, interaction and frame-budget architecture.
- Added curated visual synergy patterns for Web Animations/View Transitions/FLIP, WebGPU/WGSL/particles, PBR/HDR/bloom, scene/camera/hit-testing, adaptive quality and cinematic splash stacks.
- Bumped the service-worker cache to `fusion-foundry-core-v1.5.0`.

## 1.4.0 — Foundry Intelligence + hardware-aware WebLLM recommendations

- Added a local explainable project-intent intelligence engine over the full 868-feature catalog.
- Added arbitrary keyword/brief discovery with weighted retrieval, ontology expansion, intent inference, synergy-graph propagation and domain-diversity reranking.
- Added one-click application of core or comprehensive recommended feature stacks.
- Added inferred project constraints and architecture coverage readouts.
- Injected the discovery profile into generated meta-prompt chains.
- Added WebGPU hardware profiling and live WebLLM catalog ranking using each model's declared VRAM, buffer and required-feature metadata.
- Added optional user-entered dedicated VRAM for more useful recommendations where browsers cannot expose it.
- Kept model loading explicit and preserved WebLLM worker/main-thread fallback behavior.
- Added `js/modules/discovery.js` and bumped the service-worker cache to `fusion-foundry-core-v1.4.0`.

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
