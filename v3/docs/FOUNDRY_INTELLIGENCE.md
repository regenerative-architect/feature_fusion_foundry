# Foundry Intelligence v2 — Deterministic Planning

Foundry Intelligence v2 turns an ordinary-language project brief into a feature plan without requiring an API key, remote model, or WebLLM download. The central design change in v2 is **primary-intent gating**: the system first decides what the user is actually asking for, then searches and ranks inside the capability lanes that serve that intent. Generic best-practice features no longer crowd out the requested work.

## Why v1 could feel context-insensitive

The previous engine combined lexical similarity, intent expansion, category diversity and a generic safeguard baseline in one score. That made it robust for broad architecture discovery, but a narrow request such as “advanced visuals, shaders, particles and cinematic motion” could still receive accessibility, security or governance entries simply because those were globally useful or because the diversity re-ranker tried to cover many architecture domains.

V2 separates **what the user wants** from **what a production implementation should also remember**.

## Deterministic pipeline

1. **Weighted intent classification** — high-signal phrases such as `shader`, `3D`, `particle`, `WebRTC`, `RAG`, `offline`, `GIS`, or `workflow` vote for explicit intent families.
2. **Primary vs secondary intent** — only strong intent families become primary. Weaker but still relevant families remain secondary.
3. **Capability-lane gating** — each primary intent has preferred architecture categories and adjacent categories. A visual request, for example, privileges Advanced Visualization and GPU/compute, with performance and workspace interaction as adjacent lanes.
4. **Full-catalog lexical retrieval** — BM25-like weighted token retrieval still searches every feature name, description, tag, example, use case and implementation note.
5. **Negative relevance penalties** — unrelated categories are aggressively down-ranked when the primary intent is clear. Directly named features are exempt.
6. **Lane-aware synergy expansion** — curated combinations can add complementary features only if they remain compatible with the active intent lanes or have strong direct lexical evidence.
7. **Supporting constraints are separated** — security, accessibility, provenance and other cross-cutting duties are shown in their own panel rather than using primary recommendation slots unless the user explicitly asked for them.
8. **Deterministic implementation plan** — recommendations are grouped into ordered stages so users can build the primary capability first and add integration/performance layers afterward.

## Planner strategies

- **Precise** — default. Strong category gating and negative-relevance penalties. Best when the request is concrete.
- **Balanced** — retains more adjacent capabilities when the project spans several concerns.
- **Exploratory** — intentionally broadens discovery and relaxes negative relevance for ideation.

## Optional primary-focus override

Auto-detection is the default. If a brief is ambiguous, users can explicitly choose a primary lane such as Advanced visuals / motion / 3D, Realtime multiplayer, AI / agents, Maps / geospatial, Simulation, Workflow automation, Federation, or Mobile / constrained hardware.

## Advanced visual intelligence pack

V1.5 expands the catalog with modern visual-engineering capabilities including Web Animations API, CSS scroll-driven animation, CSS Motion Path, FLIP, spring/inertial motion, SVG path morphing, masks, compositing, WebGL/WebGPU shader pipelines, WGSL, instancing, PBR, HDR/tone mapping, post-processing, bloom, depth of field, volumetrics, procedural materials, GPU particles, LOD/culling, render-loop/frame pacing, gesture choreography, 3D camera/hit-testing, cinematic splash orchestration, procedural galaxy shaders, quality ladders and more.

For a brief centered on visual effects, these features should dominate the primary list. Reduced motion or accessible alternatives can still appear under Supporting constraints, because they matter in production, but they are not treated as the answer to the visual-design request.

## Explainability

Each recommendation includes its matching reasons. The diagnostics panel also reports:

- selected planning strategy;
- dominant primary/secondary intents;
- active primary and adjacent category lanes;
- the number of low-relevance candidates suppressed.

The score is a deterministic design heuristic, not an empirical probability or quality measurement.

## WebLLM relationship

Foundry Intelligence remains model-free and immediate. WebLLM stays as a separate optional neural reasoning layer. A user can therefore discover and stage a coherent feature set first, then optionally send the resulting meta-prompt through a locally loaded WebLLM model selected by the hardware advisor.
