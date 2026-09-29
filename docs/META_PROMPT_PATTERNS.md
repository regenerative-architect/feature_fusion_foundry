# Meta-Prompt Patterns

## Why chain prompts

A single giant implementation prompt often causes coding models to optimize the visually obvious parts and omit distributed-state semantics, failure modes or tests. The Foundry's chain separates reasoning obligations and carries them forward.

## Default chain

1. Mission & participant framing.
2. Architecture & data model.
3. Feature fusion.
4. Realtime & multiplayer.
5. AI, agents & tool boundaries.
6. Evidence & provenance.
7. Security, privacy & anti-inversion.
8. Accessibility & progressive complexity.
9. Implementation plan.
10. Verification & operations.

## Three-stage local AI chain

The WebLLM Lab demonstrates a compact loop:

- **Architect / Fusion optimizer:** find shared schemas, events and module interactions.
- **Red-team:** attack failure modes, abuse surfaces, cost, accessibility and stale evidence.
- **Integrator:** reconcile the first two stages into an executable prompt.

Do not let this become an autonomous unbounded loop. Set token/compute budgets and require explicit approval before any external action.

## Useful feature-fusion combinations

- CRDT + WebRTC + offline queue → local-first collaborative state.
- Universal events + contribution ledger + quest engine → auditable gamification.
- Knowledge graph + provenance + hybrid search + RAG → evidence-aware AI.
- Skills graph + expertise-gap detection + matching → interdisciplinary team formation.
- Scenario rooms + collaborative notebook + Monte Carlo → multiplayer planning labs.
- Passkeys + object ACLs + capability permissions → strong identity with least privilege.
- Federation + JSON-LD + signed instance events → interoperable community-owned deployments.
