# Architecture Notes

## One coherent system

The Foundry treats each advanced capability as a module participating in shared contracts rather than a decorative toggle. The reusable architecture is:

1. **Experience** — routes, dashboards, maps, quests, progressive explanation.
2. **Collaboration** — CRDT state, presence, chat, documents, decisions.
3. **Game/Learning** — quests, skills, competency, team/community progression.
4. **Knowledge/Evidence** — graph, citations, datasets, provenance, hybrid retrieval.
5. **AI/Agents** — local WebLLM, RAG, structured tools, meta-prompt chains, approvals.
6. **Realtime** — transport abstraction over WebRTC, WebSocket and future/optional WebTransport.
7. **Coordination** — rooms, authoritative validation, events, workflows, queues.
8. **Identity/Trust** — passkeys, scoped authorization, moderation and appeals.
9. **Data** — SQL/object/event/search/vector/cache stores chosen by semantics.
10. **Resilience** — IndexedDB/OPFS, queued mutation, snapshots, migration and recovery.
11. **Operations** — tests, traces, diagnostics, abuse controls, cost and rollback.

## State taxonomy

Do not synchronize every piece of state the same way.

- **Durable shared state:** projects, tasks, evidence, decisions. Use authoritative persistence and/or CRDT/event logs.
- **Ephemeral presence:** cursors, typing, online state. Do not treat it as permanent history.
- **Local private state:** preferences, drafts, model caches. Keep browser-local unless user explicitly shares it.
- **Derived state:** dashboards, scores, search indexes. Rebuild from source events/records when possible.

## Universal event pattern

```json
{
  "id": "uuid",
  "type": "task.completed",
  "schemaVersion": 1,
  "actor": "identity-or-pseudonym",
  "object": {"type": "task", "id": "task-123"},
  "projectId": "project-7",
  "occurredAt": "RFC3339 timestamp",
  "causationId": "optional-parent-event",
  "correlationId": "workflow-or-request-id",
  "payload": {},
  "provenance": {}
}
```

The same event can update project state, trigger a quest reward, create a notification, feed analytics and enter an audit trail without those modules importing one another.

## AI boundary

AI should interact through narrow application tools and structured context. Consequential writes use preview → human review → approval → execute → audit. Retrieved external content is data, not trusted instructions. AI output is tagged as generated/assisted and linked to model/context metadata when retained.

## Fallback principle

Advanced failure should reduce capability, not destroy the core:

WebGPU → no local LLM; WebRTC → server realtime/local work; server realtime → offline local queue; rich visualization → table/text; service worker unavailable → ordinary web app; background APIs unavailable → foreground retry/in-app inbox.
