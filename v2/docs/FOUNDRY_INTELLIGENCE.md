# Foundry Intelligence Fast-Track

## Purpose

Foundry Intelligence helps users turn arbitrary project language into a coherent feature shortlist without requiring a remote model, API key, or WebLLM download. It is intentionally explainable: every recommended capability includes the reasons it matched.

## Discovery pipeline

1. **Weighted catalog retrieval** searches feature names, categories, tags, summaries, examples, use cases, advanced notes and implementation guidance.
2. **Project-intent inference** recognizes common architectural intents such as realtime multiplayer, cross-domain collaboration, gamification, AI/agents, offline resilience, evidence/provenance, governance, public-community hardening, institutional deployment, privacy, accessibility, geospatial work, simulation, learning, workflow automation, federation, static hosting, scale and constrained/mobile hardware.
3. **Ontology expansion** translates project language into related architecture terms so a request for “live collaborative rooms” can discover presence, WebRTC, synchronization and late-join concepts even when those literal terms are absent.
4. **Cross-cutting safeguards** add relevant security, accessibility, provenance and recovery capabilities when the project context makes them important.
5. **Synergy graph propagation** uses the Foundry's curated combination rules to surface complementary capabilities.
6. **Domain-diversity reranking** prevents a single architecture category from monopolizing the shortlist.
7. **Meta-prompt injection** passes the resulting project profile into Prompt Foundry so downstream coding models receive the inferred intents, keywords, constraints and recommended stack.

The displayed fit percentage is a heuristic normalized within the current query. It is not an empirical benchmark, quality score or claim that a feature is mandatory.

## Hardware-aware WebLLM advisor

The existing WebLLM integration remains opt-in. The advisor only helps choose among models in WebLLM's live prebuilt catalog. It reads the metadata already supplied by each WebLLM `ModelRecord`, including declared VRAM requirements, low-resource flags, required WebGPU features and required storage-buffer size. The browser's WebGPU adapter limits/features are compared against those requirements.

Dedicated GPU-memory totals are generally not exposed reliably to normal web pages, so the user can enter known VRAM manually. Without that value, model ranking is deliberately conservative and final compatibility is only established when the chosen model successfully loads.

No model is automatically downloaded by the advisor.

## Zero-harm / anti-inversion note

Recommendation systems can create false authority if scores are presented as truth. This module therefore keeps reasons visible, allows users to ignore or remove every recommendation, treats safeguards and synergies as suggestions, and leaves the final feature selection under human control.
