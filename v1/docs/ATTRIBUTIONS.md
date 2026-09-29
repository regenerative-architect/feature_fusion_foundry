# Attributions & Licenses

## This bundle

Architecture compilation and interface concept: Foster + Navi / Planetary Restoration Archive. Prototype source files in this bundle are provided under the MIT License in `LICENSE`.

## Optional external runtime components

The bundle does not redistribute the following libraries/model weights. They are loaded only when the corresponding live feature is explicitly used.

### WebLLM
- Project: MLC WebLLM
- Version targeted by the live demo: **0.2.85**
- Runtime import: `@mlc-ai/web-llm`
- Official docs: https://webllm.mlc.ai/docs/
- Repository: https://github.com/mlc-ai/web-llm
- The current documentation describes WebGPU in-browser inference, OpenAI-compatible APIs, Web Worker support and opt-in resumable generation.

### Trystero
- Project: Trystero by Dan Motzenbecker
- Version pinned in the live P2P demo: **0.25.3**
- Repository: https://github.com/dmotz/trystero
- Uses its modern `makeAction()` object API for peer messages.
- Trystero supports several peer-discovery strategies; the root package defaults to Nostr. Direct application data is carried peer-to-peer after discovery, subject to WebRTC/TURN conditions.

## Standards/current-state references used while assembling this version

- WebTransport W3C Candidate Recommendation Snapshot, 30 July 2026: https://www.w3.org/TR/webtransport/
- WebLLM 0.2.85 documentation: https://webllm.mlc.ai/docs/
- Trystero repository/releases: https://github.com/dmotz/trystero

Always review the licenses and current versions of external dependencies before production deployment.
