# Feature Fusion Foundry v1.0.0

A no-build, static-host-friendly workbench that turns a large catalog of advanced web, AI, multiplayer, provenance, governance, accessibility and systems-thinking capabilities into coherent feature-fusion architectures and implementation prompts.

## What is live in this bundle

- **430 searchable capability records** with simplified descriptions, advanced context, examples, extended accessible tooltips and recommended use cases.
- **Feature Fusion Lab** with project-archetype scoring, curated synergy detection and a pairwise compatibility view.
- **Meta-prompt chain builder** that converts selected capabilities into a staged build prompt covering mission, architecture, feature fusion, multiplayer, AI, evidence, safety, accessibility, implementation and verification.
- **WebLLM 0.2.85 integration** loaded on demand from the official CDN package, using a dedicated Web Worker. Includes streaming output and an opt-in resumable-generation request mode.
- **Trystero 0.25.3 / WebRTC room demo** using the modern action-object API for direct peer messaging.
- **IndexedDB persistence** for selections and preferences.
- **PWA/service worker shell** with explicit offline fallback.
- **Runtime capability lab** covering WebGPU, WebRTC, WebTransport, WebAuthn, OPFS, Web Locks, workers, crypto, device/media APIs and more.
- **Self-tests**, JSON workspace export/import, SHA-256 file hashing, responsive navigation, dark/light themes, reduced motion, print styles and no-JS reference fallback.
- **Simplified Advanced Guides**: one-minute explanation → actionable steps → advanced explanation → implementation detail.

## Run locally

Do not double-click `index.html` if you want PWA/service-worker behavior. From this directory run one of:

```bash
python -m http.server 8080
```

or any static HTTP server, then open `http://localhost:8080`.

The feature library and prompt generator work without remote services. **WebLLM and Trystero require network access on first use** because this reference bundle deliberately does not redistribute those libraries or model weights. WebLLM model downloads occur only after the user presses the model-load button.

## GitHub Pages

Upload the directory contents to a repository and enable **Settings → Pages → Deploy from a branch**. This project uses relative URLs and requires no build step.

## Production multiplayer recommendation

The included P2P room is a real live preview, not a complete production authority system. For public or institutional deployments use a hybrid design:

- WebRTC/Trystero for useful direct peer traffic.
- WebSocket/WebTransport or equivalent server transport for authoritative coordination.
- Durable room state for membership, permissions, sequencing, abuse controls, snapshots and recovery.
- CRDT/event semantics for mergeable local-first data.
- SQL/object/search/vector stores according to data type.

See `docs/ARCHITECTURE.md` and `examples/cloudflare-room-worker.js`.

## Data sovereignty

Workspace selection/preferences are stored locally. The demo does not silently upload them. Joining a P2P room or loading WebLLM is an explicit action. Exported workspace JSON is schema-versioned. SHA-256 is an integrity primitive, **not proof of authorship**.

## Important limitations

- Browser/API support varies. Capability detection is included precisely because advanced APIs are not universal.
- The service worker caches the local application shell, not WebLLM model weights or arbitrary third-party CDN resources.
- Trystero peer discovery depends on its configured strategy infrastructure and WebRTC connectivity; TURN may be required on restrictive networks.
- Local LLM suitability depends on WebGPU support, GPU memory, model size and available storage.
- The heuristic fusion matrix is a design aid, not empirical evidence that one architecture is superior.
- I performed static syntax and bundle checks in the build environment, not full browser/device, WebGPU, peer-to-peer or accessibility conformance testing.

## Credits

Architecture/interface compilation: **Foster + Navi / Planetary Restoration Archive**. See `docs/ATTRIBUTIONS.md` for external components and current-source notes.
