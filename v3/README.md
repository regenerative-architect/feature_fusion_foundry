# Feature Fusion Foundry v1.5.0

A no-build, multiplayer-ready architecture and meta-prompt workbench for combining advanced web, AI, local-first, realtime, evidence, governance, accessibility, systems-thinking and production-hardening capabilities.


## v1.5 deterministic-planning upgrade

- Reworked **Foundry Intelligence** into a deterministic staged planner: weighted intent classification → primary/secondary intent → capability-lane gating → lexical retrieval → negative-relevance penalties → lane-aware synergy expansion → implementation plan.
- Generic safeguards no longer consume primary recommendation slots unless explicitly requested. They appear in a separate **Supporting constraints** panel.
- Added **Precise / Balanced / Exploratory** planning strategies plus an optional primary-focus override for ambiguous briefs.
- Added a dedicated **Advanced visuals / motion / 3D** intent family and expanded the registry from 868 to **912 capabilities** with Web Animations, scroll-driven motion, FLIP, springs, WebGL/WebGPU shaders, WGSL, instancing, PBR, HDR, post-processing, particles, camera/hit-testing, LOD/culling, procedural galaxy effects, cinematic splash orchestration and other visual-engineering primitives.
- Added a visible deterministic implementation plan and planner diagnostics (active lanes and suppressed low-relevance candidates).
- Preserved WebLLM as an optional second-stage neural reasoning layer; the local deterministic planner works without model downloads.
- Service-worker shell bumped to `fusion-foundry-core-v1.5.0`.

## v1.4 project-intelligence and hardware-advisor upgrade

- Added **Foundry Intelligence Fast-Track**, an explainable local project-intent recommender that searches all 912 capability records from arbitrary project keywords/briefs.
- Discovery combines weighted lexical/BM25-style relevance, ontology/synonym expansion, inferred project intents, curated feature-synergy propagation and domain-diversity balancing. It runs locally and does not require a remote model or API key.
- Recommendations expose a fit heuristic, tier, plain-language reason, inferred constraints, architecture coverage and one-click **Apply core / Apply all / Send to Prompt Foundry** actions.
- The generated master meta-prompt now carries the Foundry Intelligence project profile so downstream coding models receive inferred intents, keywords, recommended capabilities and deployment constraints.
- Added a **hardware-aware WebLLM model advisor**. It uses the live WebLLM `ModelRecord` metadata—including declared `vram_required_MB`, `low_resource_required`, `buffer_size_required_bytes` and `required_features`—plus browser WebGPU limits/features.
- Users may optionally enter known dedicated GPU VRAM because browsers generally do not expose a dependable VRAM total. Recommendations remain advisory until a model actually loads.
- Model loading remains explicit; the advisor never automatically downloads a model.
- Added `js/modules/discovery.js`, new responsive discovery/recommendation UI, and service-worker cache `fusion-foundry-core-v1.4.0`.

## v1.3 repair and catalog expansion

- **912 searchable capability records**. The catalog now promotes many previously compressed terms into explicit entries rather than burying them in category prose.
- Every feature includes a plain-language summary, multi-paragraph description, implementation guidance, example, recommended use cases, feature-fusion guidance, risks/failure modes, graceful fallback and extended tooltip.
- The entire catalog is **pre-rendered into `index.html`**, so feature descriptions remain readable even if the interactive JavaScript fails.
- The interactive application now uses **`js/app.bundle.js` as a classic deferred script**, avoiding the common `file://` ES-module import failure that previously left the catalog and Prompt Foundry inactive when `index.html` was opened directly.
- Fixed a syntax defect in `js/modules/capabilities.js` that could prevent the whole module graph from evaluating.
- Added **Expand all / Collapse all** controls to the Feature Library.
- Search now indexes the long descriptions, implementation notes, fusion guidance, risks and fallbacks.
- Added clipboard fallback behavior for non-secure/local contexts.
- WebLLM keeps the dedicated-worker path where possible and can attempt a main-thread engine fallback if the worker path is unavailable. Hosted HTTP(S) remains the recommended environment for WebLLM/PWA/multiplayer testing.

## Existing systems retained

- Strict **Comma-Only Prompt Minifier** for outputs like `WebLLM, CRDTs, WebRTC DataChannels` with optional character budgeting and curated synergy completion.
- **Four-edge synchronized HUD**: top = major modes, left = complete module tree, right = contextual actions/related modules, bottom = workflow/status HUD.
- **Feature Fusion Lab** with project-archetype heuristics, curated synergy detection and combinatorial comparison.
- **Meta-prompt chain builder** covering mission, architecture, feature fusion, multiplayer, AI, evidence, safety, accessibility, implementation and verification.
- **WebLLM 0.2.85 integration** loaded only on explicit user action.
- **Trystero 0.25.3 / WebRTC room demo** for direct peer messaging.
- IndexedDB workspace state, PWA/service-worker shell, JSON import/export, SHA-256 hashing, capability detection, self-tests, responsive navigation, light/dark themes, reduced-motion support and print styles.
- Cinematic Earth/cosmos splash with Enter, Escape, successful-init close, startup-error recovery and absolute timeout fail-safes.

## Opening the bundle

### Direct file preview

You can now double-click `index.html` and the **catalog, navigation, Fusion Lab and prompt-building core are designed to work from `file://`**. The feature descriptions are present in the HTML even before JavaScript runs.

Some advanced browser capabilities are intentionally unavailable or unreliable from `file://`, including service workers and some secure-context APIs. For the full environment use a local HTTP server.

### Recommended local HTTP preview

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

HTTP(S) is the recommended mode for PWA behavior, WebLLM worker execution, WebRTC/multiplayer testing, passkeys and other secure-context browser APIs.

## Feature reference

- `docs/FEATURE_CATALOG.md` — complete generated long-form catalog of all 912 entries.
- `docs/CHAT_COMPENDIUM.md` — architecture bank compiled from the earlier discussion.
- `docs/HUD_AND_COMPACT_PROMPTS.md` — four-edge HUD and compact-prompt design.
- `docs/META_PROMPT_PATTERNS.md` — staged prompt-chain patterns.
- `docs/ARCHITECTURE.md` — multiplayer/common-stack reference architecture.

## Production multiplayer recommendation

The included P2P room is a live preview, not a complete production authority system. Public or institutional deployments should normally combine:

- WebRTC/Trystero where direct peer traffic is useful.
- WebSocket/WebTransport or equivalent server transport for authoritative coordination.
- Durable room state for membership, permissions, sequencing, abuse controls, snapshots and recovery.
- CRDT/event semantics for mergeable local-first data.
- SQL/object/search/vector stores according to data type.
- Explicit moderation, identity, privacy, rate limits, observability, backups and rollback.

## Data sovereignty

Workspace selections/preferences are stored locally. The demo does not silently upload them. Joining a P2P room or loading WebLLM is an explicit action. Exported workspace JSON is schema-versioned. SHA-256 demonstrates integrity relative to a known digest; it does **not** establish authorship.

## Verification performed for v1.5

- Syntax-checked every JavaScript source file plus `js/app.bundle.js`.
- Executed the bundle smoke test.
- Verified **912 unique feature IDs** and required rich-description fields.
- Executed the deterministic planner against a visual-heavy brief and verified that visual/rendering/motion features dominate the primary ranking while generic safeguards remain in the Supporting constraints lane.
- Executed additional mixed multiplayer/interdisciplinary/AI/offline briefs to confirm multi-intent planning still works when the request genuinely spans domains.
- Verified the advanced visual feature pack is searchable and included in the static HTML fallback catalog.
- Tested the hardware model-ranking function with synthetic WebLLM model records and constrained VRAM profiles.
- Verified all app-referenced simple element IDs exist in the document.
- Verified the complete catalog is statically present in `index.html`.
- Verified service-worker cache versioning and bundle inclusion.

A full cross-browser WebGPU/WebLLM, multi-device WebRTC/TURN and WCAG conformance run still requires real browser/device/network environments and is not claimed here.

## Credits

Architecture/interface compilation: **Foster + Navi / Planetary Restoration Archive**. See `docs/ATTRIBUTIONS.md` for external components and licenses.
