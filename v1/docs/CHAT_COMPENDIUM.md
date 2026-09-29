# Feature Fusion Foundry — Chat Compendium

This compendium consolidates **430 capability records** derived from the advanced feature banks developed in this conversation: browser architecture, local-first data, WebLLM and AI orchestration, realtime multiplayer, cross-disciplinary collaboration, gamification, governance, provenance, federation, resilience, accessibility, production hardening and systems-safety patterns.

## Core architectural shift

For online cross-domain multiplayer, treat projects as **networked collaborative operating systems**, not collections of widgets. Separate application semantics from transport, keep local work possible during network failure, use authoritative services where abuse-resistant durable state is needed, and connect modules through explicit schemas/events.

## Progressive capability ladder

0. Static/read-only reference.
1. Local interactive state.
2. Cloud persistence.
3. Realtime multiplayer.
4. Peer-to-peer collaboration.
5. AI-assisted collaboration.
6. Cross-project federation.

## Shared collaboration graph

People ↔ skills ↔ organizations ↔ teams ↔ projects ↔ places ↔ tasks ↔ evidence ↔ datasets ↔ decisions ↔ interventions ↔ outcomes ↔ reusable patterns. Multiplayer, CRDT synchronization, AI, search, gamification, governance, provenance, security, moderation, accessibility, federation and offline resilience operate across this graph.

## Storage & Local Data

### IndexedDB
- **Simple:** Structured transactional browser database for application state.
- **Advanced:** Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations.
- **Example:** Store projects, tasks, evidence and preferences locally.
- **Recommended use:** offline-first applications, large datasets, portable knowledge commons, local AI assets
- **Maturity:** stable

### OPFS
- **Simple:** Origin Private File System for high-performance private files.
- **Advanced:** Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations.
- **Example:** Keep local model assets, map packs or SQLite databases in browser-private storage.
- **Recommended use:** offline-first applications, large datasets, portable knowledge commons, local AI assets
- **Maturity:** stable

### SQLite/WASM
- **Simple:** Relational SQL database running locally through WebAssembly.
- **Advanced:** Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations.
- **Example:** Run joins and constraints across project, evidence and contributor tables without a server.
- **Recommended use:** offline-first applications, large datasets, portable knowledge commons, local AI assets
- **Maturity:** stable

### DuckDB-WASM
- **Simple:** Analytical SQL engine for CSV, JSON and Parquet in-browser.
- **Advanced:** Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations.
- **Example:** Analyze a regional dataset directly in the browser.
- **Recommended use:** offline-first applications, large datasets, portable knowledge commons, local AI assets
- **Maturity:** stable

### Schema migrations
- **Simple:** Version and upgrade persisted data safely.
- **Advanced:** Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations.
- **Example:** Upgrade a v3 project schema to v4 with rollback if validation fails.
- **Recommended use:** offline-first applications, large datasets, portable knowledge commons, local AI assets
- **Maturity:** stable

### Portable workspace bundles
- **Simple:** Export selected state, files and metadata as a transportable package.
- **Advanced:** Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations.
- **Example:** Move a project from one device or deployment to another.
- **Recommended use:** offline-first applications, large datasets, portable knowledge commons, local AI assets
- **Maturity:** stable

### Content-addressed storage
- **Simple:** Address objects by cryptographic hash to deduplicate and verify them.
- **Advanced:** Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations.
- **Example:** Store one copy of identical evidence files referenced by many projects.
- **Recommended use:** offline-first applications, large datasets, portable knowledge commons, local AI assets
- **Maturity:** stable

### Incremental backups
- **Simple:** Persist only changed records or blocks after a baseline snapshot.
- **Advanced:** Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations.
- **Example:** Create small daily backup bundles instead of full exports.
- **Recommended use:** offline-first applications, large datasets, portable knowledge commons, local AI assets
- **Maturity:** stable

## Local-first Sync & Conflict Resolution

### CRDTs
- **Simple:** Conflict-free replicated data types for convergent collaborative state.
- **Advanced:** Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins.
- **Example:** Two offline editors change a task board and later merge safely.
- **Recommended use:** collaborative editors, field operations, multiplayer project boards, federated nodes
- **Maturity:** stable

### Operational Transformation
- **Simple:** Transform concurrent text operations for collaborative editing.
- **Advanced:** Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins.
- **Example:** Keep a shared document coherent while multiple users type.
- **Recommended use:** collaborative editors, field operations, multiplayer project boards, federated nodes
- **Maturity:** stable

### Event sourcing
- **Simple:** Record immutable domain events instead of only final state.
- **Advanced:** Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins.
- **Example:** Rebuild a project timeline from task.created and task.completed events.
- **Recommended use:** collaborative editors, field operations, multiplayer project boards, federated nodes
- **Maturity:** stable

### Lamport clocks
- **Simple:** Logical ordering for distributed events.
- **Advanced:** Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins.
- **Example:** Order edits generated on disconnected devices.
- **Recommended use:** collaborative editors, field operations, multiplayer project boards, federated nodes
- **Maturity:** stable

### Vector clocks
- **Simple:** Track causality across multiple writers.
- **Advanced:** Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins.
- **Example:** Detect whether two edits are concurrent or causally related.
- **Recommended use:** collaborative editors, field operations, multiplayer project boards, federated nodes
- **Maturity:** stable

### Snapshot + replay
- **Simple:** Periodically checkpoint state and replay later events.
- **Advanced:** Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins.
- **Example:** Restore a room quickly without replaying years of history.
- **Recommended use:** collaborative editors, field operations, multiplayer project boards, federated nodes
- **Maturity:** stable

### Outbox/inbox pattern
- **Simple:** Queue outgoing and incoming changes for reliable synchronization.
- **Advanced:** Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins.
- **Example:** Submit field observations offline and sync later.
- **Recommended use:** collaborative editors, field operations, multiplayer project boards, federated nodes
- **Maturity:** stable

### Three-way merge
- **Simple:** Merge local and remote branches against a common base.
- **Advanced:** Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins.
- **Example:** Reconcile two independently edited project plans.
- **Recommended use:** collaborative editors, field operations, multiplayer project boards, federated nodes
- **Maturity:** stable

## Workers, Concurrency & Cross-Tab Coordination

### Web Workers
- **Simple:** Run compute-heavy JavaScript off the UI thread.
- **Advanced:** Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit.
- **Example:** Generate embeddings without freezing the interface.
- **Recommended use:** local AI, large visualizations, multi-tab applications, simulation tools
- **Maturity:** stable

### SharedWorker
- **Simple:** Share one worker process across same-origin tabs.
- **Advanced:** Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit.
- **Example:** Maintain one sync coordinator for several open workspaces.
- **Recommended use:** local AI, large visualizations, multi-tab applications, simulation tools
- **Maturity:** stable

### BroadcastChannel
- **Simple:** Send same-origin messages between tabs and workers.
- **Advanced:** Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit.
- **Example:** Immediately reflect a task update across open tabs.
- **Recommended use:** local AI, large visualizations, multi-tab applications, simulation tools
- **Maturity:** stable

### Web Locks
- **Simple:** Coordinate exclusive access to shared resources.
- **Advanced:** Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit.
- **Example:** Ensure only one tab performs a database migration.
- **Recommended use:** local AI, large visualizations, multi-tab applications, simulation tools
- **Maturity:** stable

### MessageChannel
- **Simple:** Create direct structured message pipes between contexts.
- **Advanced:** Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit.
- **Example:** Connect a worker-based parser to a UI controller.
- **Recommended use:** local AI, large visualizations, multi-tab applications, simulation tools
- **Maturity:** stable

### SharedArrayBuffer + Atomics
- **Simple:** Use shared memory for high-performance parallel workloads where isolation headers permit.
- **Advanced:** Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit.
- **Example:** Parallelize a simulation kernel across workers.
- **Recommended use:** local AI, large visualizations, multi-tab applications, simulation tools
- **Maturity:** conditional

### AbortController
- **Simple:** Cancel stale network, AI and compute operations.
- **Advanced:** Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit.
- **Example:** Stop a long search when the user changes filters.
- **Recommended use:** local AI, large visualizations, multi-tab applications, simulation tools
- **Maturity:** stable

### Cooperative scheduling
- **Simple:** Yield during long tasks so the interface stays interactive.
- **Advanced:** Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit.
- **Example:** Chunk graph layout across frames.
- **Recommended use:** local AI, large visualizations, multi-tab applications, simulation tools
- **Maturity:** stable

## WebAssembly, WebGPU & High-Performance Compute

### WebAssembly
- **Simple:** Compile high-performance libraries to run safely in the browser.
- **Advanced:** Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices.
- **Example:** Run SQLite, compression or scientific algorithms locally.
- **Recommended use:** local AI, scientific computing, large maps, interactive simulations
- **Maturity:** stable

### WASM SIMD
- **Simple:** Vectorized instructions for numerical workloads.
- **Advanced:** Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices.
- **Example:** Accelerate image filtering and matrix operations.
- **Recommended use:** local AI, scientific computing, large maps, interactive simulations
- **Maturity:** stable

### WASM threads
- **Simple:** Parallelize compatible WebAssembly workloads.
- **Advanced:** Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices.
- **Example:** Speed up local simulations on multicore systems.
- **Recommended use:** local AI, scientific computing, large maps, interactive simulations
- **Maturity:** conditional

### WebGPU compute
- **Simple:** Use GPU compute shaders for ML, simulation and visualization.
- **Advanced:** Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices.
- **Example:** Run local LLM inference or large graph layout.
- **Recommended use:** local AI, scientific computing, large maps, interactive simulations
- **Maturity:** stable

### WebGL2 fallback
- **Simple:** Retain accelerated rendering on devices without WebGPU.
- **Advanced:** Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices.
- **Example:** Render network graphs when WebGPU is unavailable.
- **Recommended use:** local AI, scientific computing, large maps, interactive simulations
- **Maturity:** stable

### OffscreenCanvas
- **Simple:** Render canvas graphics inside workers.
- **Advanced:** Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices.
- **Example:** Animate a large map overlay without blocking controls.
- **Recommended use:** local AI, scientific computing, large maps, interactive simulations
- **Maturity:** stable

### Adaptive quality
- **Simple:** Scale graphics and compute based on device capability.
- **Advanced:** Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices.
- **Example:** Reduce particle count on low-power hardware.
- **Recommended use:** local AI, scientific computing, large maps, interactive simulations
- **Maturity:** stable

## Local & Hybrid AI

### WebLLM
- **Simple:** Run compatible language models in-browser with WebGPU.
- **Advanced:** Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation.
- **Example:** Use a local model to improve a project brief without uploading it.
- **Recommended use:** private copilots, prompt improvement, research synthesis, agent-assisted workflows
- **Maturity:** stable

### Local embeddings
- **Simple:** Generate semantic vectors on-device.
- **Advanced:** Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation.
- **Example:** Index project notes for semantic search.
- **Recommended use:** private copilots, prompt improvement, research synthesis, agent-assisted workflows
- **Maturity:** stable

### Local RAG
- **Simple:** Retrieve relevant local material before model generation.
- **Advanced:** Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation.
- **Example:** Answer questions from an offline evidence pack.
- **Recommended use:** private copilots, prompt improvement, research synthesis, agent-assisted workflows
- **Maturity:** stable

### Hybrid AI router
- **Simple:** Select local or remote inference by privacy, cost and capability.
- **Advanced:** Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation.
- **Example:** Keep confidential tasks local but send large public synthesis jobs remotely.
- **Recommended use:** private copilots, prompt improvement, research synthesis, agent-assisted workflows
- **Maturity:** stable

### Structured outputs
- **Simple:** Require JSON/schema-shaped model responses.
- **Advanced:** Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation.
- **Example:** Generate a validated task object instead of free-form prose.
- **Recommended use:** private copilots, prompt improvement, research synthesis, agent-assisted workflows
- **Maturity:** stable

### AI tool calling
- **Simple:** Let a model invoke narrow application functions.
- **Advanced:** Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation.
- **Example:** Allow an assistant to query project status or create a draft task.
- **Recommended use:** private copilots, prompt improvement, research synthesis, agent-assisted workflows
- **Maturity:** stable

### Agent planner/executor/verifier
- **Simple:** Separate planning, execution and checking into explicit stages.
- **Advanced:** Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation.
- **Example:** Draft an intervention, test assumptions, then critique the result.
- **Recommended use:** private copilots, prompt improvement, research synthesis, agent-assisted workflows
- **Maturity:** stable

### AI provenance
- **Simple:** Record model, time, source context and review status.
- **Advanced:** Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation.
- **Example:** Mark a paragraph as AI-assisted and human-reviewed.
- **Recommended use:** private copilots, prompt improvement, research synthesis, agent-assisted workflows
- **Maturity:** stable

### Context budgeting
- **Simple:** Select and compress relevant context instead of sending everything.
- **Advanced:** Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation.
- **Example:** Summarize old room history before an AI call.
- **Recommended use:** private copilots, prompt improvement, research synthesis, agent-assisted workflows
- **Maturity:** stable

### Model capability registry
- **Simple:** Track model size, memory needs, tools and strengths.
- **Advanced:** Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation.
- **Example:** Offer a smaller model when GPU memory is limited.
- **Recommended use:** private copilots, prompt improvement, research synthesis, agent-assisted workflows
- **Maturity:** stable

## Realtime Multiplayer Networking

### WebRTC DataChannels
- **Simple:** Direct encrypted browser-to-browser data transport.
- **Advanced:** Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic.
- **Example:** Synchronize cursor and board updates peer-to-peer.
- **Recommended use:** multiplayer workspaces, shared maps, live games, remote workshops
- **Maturity:** stable

### Trystero peer discovery
- **Simple:** Abstract signaling and direct WebRTC room formation.
- **Advanced:** Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic.
- **Example:** Create decentralized collaboration rooms using a shared app and room ID.
- **Recommended use:** multiplayer workspaces, shared maps, live games, remote workshops
- **Maturity:** stable

### WebSockets
- **Simple:** Persistent bidirectional client/server communication.
- **Advanced:** Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic.
- **Example:** Connect users to an authoritative project room.
- **Recommended use:** multiplayer workspaces, shared maps, live games, remote workshops
- **Maturity:** stable

### WebTransport
- **Simple:** HTTP/3-based streams and datagrams for advanced client/server realtime traffic.
- **Advanced:** Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic.
- **Example:** Send reliable state streams and low-latency transient updates.
- **Recommended use:** multiplayer workspaces, shared maps, live games, remote workshops
- **Maturity:** emerging

### Transport abstraction
- **Simple:** Expose one message interface over multiple transports.
- **Advanced:** Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic.
- **Example:** Fallback from WebRTC to WebSocket without changing project code.
- **Recommended use:** multiplayer workspaces, shared maps, live games, remote workshops
- **Maturity:** stable

### TURN fallback
- **Simple:** Relay WebRTC when direct NAT traversal fails.
- **Advanced:** Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic.
- **Example:** Keep collaboration working on restrictive enterprise networks.
- **Recommended use:** multiplayer workspaces, shared maps, live games, remote workshops
- **Maturity:** stable

### Adaptive update rate
- **Simple:** Reduce synchronization frequency under poor network conditions.
- **Advanced:** Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic.
- **Example:** Lower cursor update rate on high latency links.
- **Recommended use:** multiplayer workspaces, shared maps, live games, remote workshops
- **Maturity:** stable

### Late-join snapshots
- **Simple:** Send current room state to newcomers.
- **Advanced:** Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic.
- **Example:** A participant joining later immediately sees existing tasks.
- **Recommended use:** multiplayer workspaces, shared maps, live games, remote workshops
- **Maturity:** stable

### Protocol negotiation
- **Simple:** Negotiate versions and supported capabilities.
- **Advanced:** Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic.
- **Example:** Prevent an older client from applying an unknown event type.
- **Recommended use:** multiplayer workspaces, shared maps, live games, remote workshops
- **Maturity:** stable

## Authoritative Coordination & Room Services

### Authoritative room state
- **Simple:** Maintain canonical state for critical shared objects.
- **Advanced:** Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful.
- **Example:** Reject invalid score changes or permission escalation.
- **Recommended use:** public multiplayer, institutional collaboration, authoritative games, large rooms
- **Maturity:** stable

### Durable room coordinator
- **Simple:** Assign a stateful server object per room or project.
- **Advanced:** Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful.
- **Example:** Keep room membership and event sequence available while clients disconnect.
- **Recommended use:** public multiplayer, institutional collaboration, authoritative games, large rooms
- **Maturity:** stable

### Lobby and waiting room
- **Simple:** Control admission before participants enter an active room.
- **Advanced:** Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful.
- **Example:** Approve workshop participants before they access shared material.
- **Recommended use:** public multiplayer, institutional collaboration, authoritative games, large rooms
- **Maturity:** stable

### Server validation
- **Simple:** Revalidate client-submitted actions.
- **Advanced:** Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful.
- **Example:** Ensure a contributor can only edit allowed project fields.
- **Recommended use:** public multiplayer, institutional collaboration, authoritative games, large rooms
- **Maturity:** stable

### Session resumption
- **Simple:** Reconnect without rebuilding the entire session.
- **Advanced:** Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful.
- **Example:** Restore a dropped participant to the same room state.
- **Recommended use:** public multiplayer, institutional collaboration, authoritative games, large rooms
- **Maturity:** stable

### Idempotency keys
- **Simple:** Prevent retries from duplicating actions.
- **Advanced:** Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful.
- **Example:** Retry task creation safely after a network timeout.
- **Recommended use:** public multiplayer, institutional collaboration, authoritative games, large rooms
- **Maturity:** stable

### Leader election
- **Simple:** Choose a temporary coordinator when no authority server exists.
- **Advanced:** Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful.
- **Example:** Select a peer to supply snapshots to newcomers.
- **Recommended use:** public multiplayer, institutional collaboration, authoritative games, large rooms
- **Maturity:** stable

### Presence service
- **Simple:** Maintain ephemeral online/away status separately from durable data.
- **Advanced:** Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful.
- **Example:** Show who is actively reviewing a document.
- **Recommended use:** public multiplayer, institutional collaboration, authoritative games, large rooms
- **Maturity:** stable

## Decentralized & Federated Systems

### Federated instances
- **Simple:** Let independent deployments exchange compatible objects.
- **Advanced:** Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy.
- **Example:** A university instance shares approved projects with a community instance.
- **Recommended use:** community-owned infrastructure, resilient archives, multi-instance commons, peer discovery
- **Maturity:** stable

### Gossip replication
- **Simple:** Spread updates through peers rather than a central broadcaster.
- **Advanced:** Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy.
- **Example:** Distribute low-priority knowledge updates across nodes.
- **Recommended use:** community-owned infrastructure, resilient archives, multi-instance commons, peer discovery
- **Maturity:** stable

### Merkle trees/DAGs
- **Simple:** Verify large object sets and identify changed branches efficiently.
- **Advanced:** Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy.
- **Example:** Compare two knowledge packs without hashing every file repeatedly.
- **Recommended use:** community-owned infrastructure, resilient archives, multi-instance commons, peer discovery
- **Maturity:** stable

### Signed event logs
- **Simple:** Cryptographically sign authored events.
- **Advanced:** Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy.
- **Example:** Verify that a project approval event came from an authorized key.
- **Recommended use:** community-owned infrastructure, resilient archives, multi-instance commons, peer discovery
- **Maturity:** stable

### Selective replication
- **Simple:** Replicate only data relevant to a node or user.
- **Advanced:** Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy.
- **Example:** A regional node downloads local projects, not the entire global archive.
- **Recommended use:** community-owned infrastructure, resilient archives, multi-instance commons, peer discovery
- **Maturity:** stable

### IPFS/IPNS adapters
- **Simple:** Publish content-addressed artifacts through decentralized storage.
- **Advanced:** Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy.
- **Example:** Publish a versioned public evidence bundle.
- **Recommended use:** community-owned infrastructure, resilient archives, multi-instance commons, peer discovery
- **Maturity:** stable

### Nostr adapters
- **Simple:** Use Nostr-compatible relays for selected discovery or messaging workflows.
- **Advanced:** Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy.
- **Example:** Discover peers without owning a signaling server.
- **Recommended use:** community-owned infrastructure, resilient archives, multi-instance commons, peer discovery
- **Maturity:** stable

### Portable node bundles
- **Simple:** Package a node snapshot for offline transfer or redeployment.
- **Advanced:** Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy.
- **Example:** Seed a remote community installation from removable media.
- **Recommended use:** community-owned infrastructure, resilient archives, multi-instance commons, peer discovery
- **Maturity:** stable

## Security Engineering

### Content Security Policy
- **Simple:** Restrict executable and network content sources.
- **Advanced:** Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes.
- **Example:** Block unexpected third-party scripts from running.
- **Recommended use:** public web apps, institutional deployments, plugin systems, AI-assisted applications
- **Maturity:** stable

### Trusted Types
- **Simple:** Constrain dangerous DOM injection sinks.
- **Advanced:** Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes.
- **Example:** Require vetted HTML creation policies.
- **Recommended use:** public web apps, institutional deployments, plugin systems, AI-assisted applications
- **Maturity:** stable

### Subresource Integrity
- **Simple:** Pin expected hashes for external static resources where feasible.
- **Advanced:** Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes.
- **Example:** Detect a modified third-party script.
- **Recommended use:** public web apps, institutional deployments, plugin systems, AI-assisted applications
- **Maturity:** stable

### Web Crypto
- **Simple:** Use standardized browser cryptographic primitives.
- **Advanced:** Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes.
- **Example:** Sign an export or derive an encryption key.
- **Recommended use:** public web apps, institutional deployments, plugin systems, AI-assisted applications
- **Maturity:** stable

### Signed manifests
- **Simple:** Describe and sign bundle contents and hashes.
- **Advanced:** Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes.
- **Example:** Verify that a release package has not changed.
- **Recommended use:** public web apps, institutional deployments, plugin systems, AI-assisted applications
- **Maturity:** stable

### Input/schema validation
- **Simple:** Reject malformed imported or network data.
- **Advanced:** Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes.
- **Example:** Validate project JSON before saving it.
- **Recommended use:** public web apps, institutional deployments, plugin systems, AI-assisted applications
- **Maturity:** stable

### Sanitized rendering
- **Simple:** Render untrusted content without script execution.
- **Advanced:** Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes.
- **Example:** Display user Markdown safely.
- **Recommended use:** public web apps, institutional deployments, plugin systems, AI-assisted applications
- **Maturity:** stable

### Capability-based permissions
- **Simple:** Grant narrowly scoped actions rather than broad admin authority.
- **Advanced:** Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes.
- **Example:** Allow a plugin to read tasks but not identities.
- **Recommended use:** public web apps, institutional deployments, plugin systems, AI-assisted applications
- **Maturity:** stable

### Secret isolation
- **Simple:** Keep server keys out of client bundles and source control.
- **Advanced:** Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes.
- **Example:** Call privileged APIs through a server-side proxy.
- **Recommended use:** public web apps, institutional deployments, plugin systems, AI-assisted applications
- **Maturity:** stable

### Security headers
- **Simple:** Use HSTS, frame policy and MIME protections where host supports them.
- **Advanced:** Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes.
- **Example:** Reduce browser-side attack surface.
- **Recommended use:** public web apps, institutional deployments, plugin systems, AI-assisted applications
- **Maturity:** stable

## Identity, Authentication & Authorization

### Passkeys/WebAuthn
- **Simple:** Passwordless public-key authentication.
- **Advanced:** Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity.
- **Example:** Sign into an institutional workspace with a platform authenticator.
- **Recommended use:** public communities, enterprise collaboration, moderated spaces, sensitive projects
- **Maturity:** stable

### Guest/pseudonymous identity
- **Simple:** Participate without exposing legal identity where appropriate.
- **Advanced:** Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity.
- **Example:** Join a public brainstorming room using a persistent pseudonym.
- **Recommended use:** public communities, enterprise collaboration, moderated spaces, sensitive projects
- **Maturity:** stable

### RBAC
- **Simple:** Role-based access control.
- **Advanced:** Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity.
- **Example:** Give reviewers approval rights and contributors edit rights.
- **Recommended use:** public communities, enterprise collaboration, moderated spaces, sensitive projects
- **Maturity:** stable

### ABAC
- **Simple:** Attribute-based access control using context and attributes.
- **Advanced:** Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity.
- **Example:** Allow regional coordinators to edit only projects in their region.
- **Recommended use:** public communities, enterprise collaboration, moderated spaces, sensitive projects
- **Maturity:** stable

### Object-level ACLs
- **Simple:** Permissions on individual records.
- **Advanced:** Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity.
- **Example:** Keep one project private inside a public organization workspace.
- **Recommended use:** public communities, enterprise collaboration, moderated spaces, sensitive projects
- **Maturity:** stable

### Delegated capabilities
- **Simple:** Grant narrow, revocable permissions.
- **Advanced:** Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity.
- **Example:** Allow an automation to publish status but not delete projects.
- **Recommended use:** public communities, enterprise collaboration, moderated spaces, sensitive projects
- **Maturity:** stable

### Session management
- **Simple:** Inspect, expire and revoke sessions.
- **Advanced:** Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity.
- **Example:** Sign out a lost device remotely.
- **Recommended use:** public communities, enterprise collaboration, moderated spaces, sensitive projects
- **Maturity:** stable

### Identity assurance levels
- **Simple:** Track how strongly an identity has been verified.
- **Advanced:** Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity.
- **Example:** Distinguish self-declared expertise from verified organization membership.
- **Recommended use:** public communities, enterprise collaboration, moderated spaces, sensitive projects
- **Maturity:** stable

## Privacy & Data Sovereignty

### Local-only mode
- **Simple:** Disable network transmission for selected work.
- **Advanced:** Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data.
- **Example:** Draft a sensitive project before sharing it.
- **Recommended use:** community platforms, field tools, research collaboration, privacy-sensitive users
- **Maturity:** stable

### Network kill switch
- **Simple:** Stop optional network connections.
- **Advanced:** Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data.
- **Example:** Demonstrate exactly what still works offline.
- **Recommended use:** community platforms, field tools, research collaboration, privacy-sensitive users
- **Maturity:** stable

### Per-object visibility
- **Simple:** Set records as private, team, organization or public.
- **Advanced:** Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data.
- **Example:** Share a dataset only with an approved research group.
- **Recommended use:** community platforms, field tools, research collaboration, privacy-sensitive users
- **Maturity:** stable

### Client-side encryption
- **Simple:** Encrypt content before sending to storage.
- **Advanced:** Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data.
- **Example:** Store private notes on a remote object store in encrypted form.
- **Recommended use:** community platforms, field tools, research collaboration, privacy-sensitive users
- **Maturity:** stable

### Data inventory dashboard
- **Simple:** Show what information the application stores.
- **Advanced:** Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data.
- **Example:** List local databases, cached files and remote profile data.
- **Recommended use:** community platforms, field tools, research collaboration, privacy-sensitive users
- **Maturity:** stable

### Selective deletion
- **Simple:** Delete chosen data categories without resetting everything.
- **Advanced:** Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data.
- **Example:** Remove chat history while retaining project artifacts.
- **Recommended use:** community platforms, field tools, research collaboration, privacy-sensitive users
- **Maturity:** stable

### Portable export
- **Simple:** Download user-controlled data in open formats.
- **Advanced:** Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data.
- **Example:** Move a contributor profile and authored projects to another instance.
- **Recommended use:** community platforms, field tools, research collaboration, privacy-sensitive users
- **Maturity:** stable

### Location minimization
- **Simple:** Reduce precision unless exact location is necessary.
- **Advanced:** Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data.
- **Example:** Show a contributor region rather than home coordinates.
- **Recommended use:** community platforms, field tools, research collaboration, privacy-sensitive users
- **Maturity:** stable

## File & OS Integration

### File System Access API
- **Simple:** Open and save user-selected local files directly where supported.
- **Advanced:** Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist.
- **Example:** Edit a GeoJSON file and save it back.
- **Recommended use:** PWA tools, data analysis, field applications, documentation systems
- **Maturity:** stable

### Drag and drop
- **Simple:** Import files through direct UI interaction.
- **Advanced:** Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist.
- **Example:** Drop CSV evidence into a project.
- **Recommended use:** PWA tools, data analysis, field applications, documentation systems
- **Maturity:** stable

### Clipboard API
- **Simple:** Copy structured outputs or read user-approved clipboard content.
- **Advanced:** Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist.
- **Example:** Copy a generated implementation prompt.
- **Recommended use:** PWA tools, data analysis, field applications, documentation systems
- **Maturity:** stable

### Web Share
- **Simple:** Invoke native sharing surfaces on supported devices.
- **Advanced:** Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist.
- **Example:** Share a project invite from mobile.
- **Recommended use:** PWA tools, data analysis, field applications, documentation systems
- **Maturity:** stable

### Share Target
- **Simple:** Receive content shared into an installed PWA.
- **Advanced:** Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist.
- **Example:** Send a webpage into the evidence inbox.
- **Recommended use:** PWA tools, data analysis, field applications, documentation systems
- **Maturity:** stable

### File handlers
- **Simple:** Associate an installed PWA with selected file types.
- **Advanced:** Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist.
- **Example:** Open a project bundle by double-clicking it.
- **Recommended use:** PWA tools, data analysis, field applications, documentation systems
- **Maturity:** stable

### Print/PDF views
- **Simple:** Provide deliberate print layouts.
- **Advanced:** Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist.
- **Example:** Export a meeting decision packet.
- **Recommended use:** PWA tools, data analysis, field applications, documentation systems
- **Maturity:** stable

### Multi-format export
- **Simple:** Offer JSON, CSV, Markdown, SVG or GeoJSON where meaningful.
- **Advanced:** Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist.
- **Example:** Export graph data for external analysis.
- **Recommended use:** PWA tools, data analysis, field applications, documentation systems
- **Maturity:** stable

## Search, Retrieval & Knowledge Systems

### Full-text search
- **Simple:** Index and search local or remote text.
- **Advanced:** Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance.
- **Example:** Find every project mentioning aquifer recharge.
- **Recommended use:** research commons, large project portfolios, AI RAG, discovery interfaces
- **Maturity:** stable

### Fuzzy search
- **Simple:** Handle minor spelling differences.
- **Advanced:** Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance.
- **Example:** Find hydrology when a user types hydroloy.
- **Recommended use:** research commons, large project portfolios, AI RAG, discovery interfaces
- **Maturity:** stable

### Faceted search
- **Simple:** Filter by structured dimensions.
- **Advanced:** Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance.
- **Example:** Filter projects by region, status and discipline.
- **Recommended use:** research commons, large project portfolios, AI RAG, discovery interfaces
- **Maturity:** stable

### Semantic vector search
- **Simple:** Find conceptually similar content.
- **Advanced:** Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance.
- **Example:** Find food-access work even when documents use different wording.
- **Recommended use:** research commons, large project portfolios, AI RAG, discovery interfaces
- **Maturity:** stable

### Hybrid retrieval
- **Simple:** Combine text, vectors and metadata.
- **Advanced:** Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance.
- **Example:** Rank exact policy names while still surfacing conceptual matches.
- **Recommended use:** research commons, large project portfolios, AI RAG, discovery interfaces
- **Maturity:** stable

### Entity extraction
- **Simple:** Identify people, places, organizations and concepts.
- **Advanced:** Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance.
- **Example:** Turn a report into linked entities.
- **Recommended use:** research commons, large project portfolios, AI RAG, discovery interfaces
- **Maturity:** stable

### Knowledge graph
- **Simple:** Represent typed relationships among objects.
- **Advanced:** Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance.
- **Example:** Connect a watershed to infrastructure, projects and evidence.
- **Recommended use:** research commons, large project portfolios, AI RAG, discovery interfaces
- **Maturity:** stable

### Contradiction detection
- **Simple:** Flag claims that appear inconsistent.
- **Advanced:** Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance.
- **Example:** Surface two evidence records reporting conflicting capacity.
- **Recommended use:** research commons, large project portfolios, AI RAG, discovery interfaces
- **Maturity:** stable

### Freshness scoring
- **Simple:** Track age and update expectations.
- **Advanced:** Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance.
- **Example:** Warn that a transport schedule source is stale.
- **Recommended use:** research commons, large project portfolios, AI RAG, discovery interfaces
- **Maturity:** stable

## Evidence, Provenance & Integrity

### Claim-evidence linking
- **Simple:** Attach one or more evidence records to a claim.
- **Advanced:** Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations.
- **Example:** Show which sources support an intervention assumption.
- **Recommended use:** research platforms, institutional decisions, public dashboards, AI synthesis
- **Maturity:** stable

### Evidence quality fields
- **Simple:** Record type, limitations and applicability.
- **Advanced:** Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations.
- **Example:** Distinguish randomized evidence from anecdotal observations.
- **Recommended use:** research platforms, institutional decisions, public dashboards, AI synthesis
- **Maturity:** stable

### Citation manager
- **Simple:** Store structured references.
- **Advanced:** Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations.
- **Example:** Reuse one source across several project briefs.
- **Recommended use:** research platforms, institutional decisions, public dashboards, AI synthesis
- **Maturity:** stable

### Source freshness
- **Simple:** Record publication and retrieval dates.
- **Advanced:** Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations.
- **Example:** Prompt a review when a source ages past its update interval.
- **Recommended use:** research platforms, institutional decisions, public dashboards, AI synthesis
- **Maturity:** stable

### Data lineage graph
- **Simple:** Trace transformations from source to result.
- **Advanced:** Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations.
- **Example:** Show how a dashboard metric was calculated.
- **Recommended use:** research platforms, institutional decisions, public dashboards, AI synthesis
- **Maturity:** stable

### Version history + diff
- **Simple:** Compare object revisions.
- **Advanced:** Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations.
- **Example:** Review exactly what changed in a proposal.
- **Recommended use:** research platforms, institutional decisions, public dashboards, AI synthesis
- **Maturity:** stable

### Hash verification
- **Simple:** Fingerprint files or records.
- **Advanced:** Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations.
- **Example:** Detect altered evidence bundles.
- **Recommended use:** research platforms, institutional decisions, public dashboards, AI synthesis
- **Maturity:** stable

### Review status
- **Simple:** Track draft, reviewed, disputed and superseded states.
- **Advanced:** Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations.
- **Example:** Keep contested claims visible without presenting them as settled.
- **Recommended use:** research platforms, institutional decisions, public dashboards, AI synthesis
- **Maturity:** stable

## Modular Application Architecture

### Module registry
- **Simple:** Declare installed modules and metadata.
- **Advanced:** Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling.
- **Example:** Load water, food and energy modules through one registry.
- **Recommended use:** large suites, plugin ecosystems, multi-domain platforms, long-lived projects
- **Maturity:** stable

### Capability registry
- **Simple:** Track what the browser, user and deployment support.
- **Advanced:** Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling.
- **Example:** Disable local AI controls when WebGPU is unavailable.
- **Recommended use:** large suites, plugin ecosystems, multi-domain platforms, long-lived projects
- **Maturity:** stable

### Plugin API
- **Simple:** Provide documented extension points.
- **Advanced:** Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling.
- **Example:** Add a new visualization without editing core code.
- **Recommended use:** large suites, plugin ecosystems, multi-domain platforms, long-lived projects
- **Maturity:** stable

### Lifecycle hooks
- **Simple:** Standardize initialize, suspend and cleanup behavior.
- **Advanced:** Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling.
- **Example:** Disconnect a room cleanly when its module unloads.
- **Recommended use:** large suites, plugin ecosystems, multi-domain platforms, long-lived projects
- **Maturity:** stable

### Dynamic imports
- **Simple:** Lazy-load optional code.
- **Advanced:** Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling.
- **Example:** Load WebLLM only when the user opens AI tools.
- **Recommended use:** large suites, plugin ecosystems, multi-domain platforms, long-lived projects
- **Maturity:** stable

### Dependency injection
- **Simple:** Pass services explicitly to modules.
- **Advanced:** Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling.
- **Example:** Swap IndexedDB storage for a test adapter.
- **Recommended use:** large suites, plugin ecosystems, multi-domain platforms, long-lived projects
- **Maturity:** stable

### Event bus
- **Simple:** Publish typed domain events between modules.
- **Advanced:** Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling.
- **Example:** Let gamification respond to task.completed without importing task code.
- **Recommended use:** large suites, plugin ecosystems, multi-domain platforms, long-lived projects
- **Maturity:** stable

### Route registry
- **Simple:** Generate navigation and breadcrumbs from one source.
- **Advanced:** Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling.
- **Example:** Keep top and side menus synchronized.
- **Recommended use:** large suites, plugin ecosystems, multi-domain platforms, long-lived projects
- **Maturity:** stable

### Feature flags
- **Simple:** Enable features by environment or cohort.
- **Advanced:** Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling.
- **Example:** Beta-test WebTransport with selected users.
- **Recommended use:** large suites, plugin ecosystems, multi-domain platforms, long-lived projects
- **Maturity:** stable

## Performance Engineering

### Code splitting
- **Simple:** Load only code needed for the current route.
- **Advanced:** Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition.
- **Example:** Keep the initial shell small despite many modules.
- **Recommended use:** mobile users, large datasets, AI-heavy apps, global deployments
- **Maturity:** stable

### Lazy loading
- **Simple:** Defer media and feature initialization.
- **Advanced:** Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition.
- **Example:** Load map tiles only when the map becomes visible.
- **Recommended use:** mobile users, large datasets, AI-heavy apps, global deployments
- **Maturity:** stable

### Virtualized lists
- **Simple:** Render only visible rows in huge lists.
- **Advanced:** Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition.
- **Example:** Browse 100,000 evidence records smoothly.
- **Recommended use:** mobile users, large datasets, AI-heavy apps, global deployments
- **Maturity:** stable

### Debounce/throttle
- **Simple:** Control high-frequency events.
- **Advanced:** Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition.
- **Example:** Limit search calls while typing.
- **Recommended use:** mobile users, large datasets, AI-heavy apps, global deployments
- **Maturity:** stable

### Resource timing
- **Simple:** Inspect network and load performance.
- **Advanced:** Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition.
- **Example:** Identify a slow third-party module.
- **Recommended use:** mobile users, large datasets, AI-heavy apps, global deployments
- **Maturity:** stable

### Long-task detection
- **Simple:** Detect main-thread blocks.
- **Advanced:** Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition.
- **Example:** Move an expensive parser to a worker.
- **Recommended use:** mobile users, large datasets, AI-heavy apps, global deployments
- **Maturity:** stable

### Memory budgets
- **Simple:** Limit caches and model sizes.
- **Advanced:** Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition.
- **Example:** Unload an LLM before loading a large map pack.
- **Recommended use:** mobile users, large datasets, AI-heavy apps, global deployments
- **Maturity:** stable

### Network-aware loading
- **Simple:** Adapt downloads to connection conditions.
- **Advanced:** Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition.
- **Example:** Avoid auto-fetching a model over a constrained connection.
- **Recommended use:** mobile users, large datasets, AI-heavy apps, global deployments
- **Maturity:** stable

## Resilience & Graceful Degradation

### Progressive enhancement
- **Simple:** Start from a functional baseline and add advanced capabilities.
- **Advanced:** Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences.
- **Example:** Offer static project reading before activating realtime features.
- **Recommended use:** mission-critical tools, field work, large PWAs, public services
- **Maturity:** stable

### Capability fallback ladder
- **Simple:** Define preferred and fallback implementations.
- **Advanced:** Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences.
- **Example:** WebGPU → WASM → basic JavaScript.
- **Recommended use:** mission-critical tools, field work, large PWAs, public services
- **Maturity:** stable

### Offline mutation queue
- **Simple:** Store writes until network returns.
- **Advanced:** Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences.
- **Example:** Capture field inspection data without connectivity.
- **Recommended use:** mission-critical tools, field work, large PWAs, public services
- **Maturity:** stable

### Circuit breaker
- **Simple:** Stop repeatedly calling a failing dependency.
- **Advanced:** Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences.
- **Example:** Temporarily disable a broken external API.
- **Recommended use:** mission-critical tools, field work, large PWAs, public services
- **Maturity:** stable

### Last-known-good config
- **Simple:** Recover from a bad configuration update.
- **Advanced:** Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences.
- **Example:** Restore the previous module registry after validation fails.
- **Recommended use:** mission-critical tools, field work, large PWAs, public services
- **Maturity:** stable

### Safe/recovery mode
- **Simple:** Load minimal functionality after repeated crashes.
- **Advanced:** Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences.
- **Example:** Open data export even if an optional visualization fails.
- **Recommended use:** mission-critical tools, field work, large PWAs, public services
- **Maturity:** stable

### Failed migration rollback
- **Simple:** Restore prior data if upgrade cannot complete.
- **Advanced:** Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences.
- **Example:** Avoid corrupting a long-lived local workspace.
- **Recommended use:** mission-critical tools, field work, large PWAs, public services
- **Maturity:** stable

### Read-only emergency mode
- **Simple:** Preserve access during server stress.
- **Advanced:** Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences.
- **Example:** Let users read projects while writes are temporarily disabled.
- **Recommended use:** mission-critical tools, field work, large PWAs, public services
- **Maturity:** stable

## Observability Without Surveillance

### Local diagnostics console
- **Simple:** Show capability and error state to the user.
- **Advanced:** Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads.
- **Example:** Export a support report without remote telemetry.
- **Recommended use:** public platforms, serverless deployments, privacy-first tools, support workflows
- **Maturity:** stable

### Structured logging
- **Simple:** Emit machine-readable log events.
- **Advanced:** Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads.
- **Example:** Filter synchronization errors separately from UI warnings.
- **Recommended use:** public platforms, serverless deployments, privacy-first tools, support workflows
- **Maturity:** stable

### Correlation IDs
- **Simple:** Trace one action across services.
- **Advanced:** Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads.
- **Example:** Follow a task update from browser to room coordinator to database.
- **Recommended use:** public platforms, serverless deployments, privacy-first tools, support workflows
- **Maturity:** stable

### OpenTelemetry server tracing
- **Simple:** Collect standardized server traces and metrics.
- **Advanced:** Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads.
- **Example:** Measure realtime room latency across services.
- **Recommended use:** public platforms, serverless deployments, privacy-first tools, support workflows
- **Maturity:** stable

### Network inspector
- **Simple:** Show application network dependencies.
- **Advanced:** Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads.
- **Example:** Explain which domains an AI feature contacts.
- **Recommended use:** public platforms, serverless deployments, privacy-first tools, support workflows
- **Maturity:** stable

### Storage inspector
- **Simple:** Expose cache and database size.
- **Advanced:** Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads.
- **Example:** Help a user free space without wiping all data.
- **Recommended use:** public platforms, serverless deployments, privacy-first tools, support workflows
- **Maturity:** stable

### Cost observability
- **Simple:** Track serverless, storage and inference costs.
- **Advanced:** Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads.
- **Example:** Estimate infrastructure cost per active room.
- **Recommended use:** public platforms, serverless deployments, privacy-first tools, support workflows
- **Maturity:** stable

### Redacted bug bundles
- **Simple:** Package diagnostics without private content.
- **Advanced:** Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads.
- **Example:** Share version, capability and stack information safely.
- **Recommended use:** public platforms, serverless deployments, privacy-first tools, support workflows
- **Maturity:** stable

## Testing & Self-Verification

### Unit tests
- **Simple:** Verify pure logic and small modules.
- **Advanced:** Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles.
- **Example:** Test score calculation or schema conversion.
- **Recommended use:** long-lived software, offline apps, multiplayer systems, public releases
- **Maturity:** stable

### Integration tests
- **Simple:** Verify cooperating modules.
- **Advanced:** Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles.
- **Example:** Test that task completion emits XP and audit events.
- **Recommended use:** long-lived software, offline apps, multiplayer systems, public releases
- **Maturity:** stable

### End-to-end tests
- **Simple:** Exercise real user workflows.
- **Advanced:** Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles.
- **Example:** Create, edit, export and restore a project.
- **Recommended use:** long-lived software, offline apps, multiplayer systems, public releases
- **Maturity:** stable

### Offline tests
- **Simple:** Verify operation with network disabled.
- **Advanced:** Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles.
- **Example:** Confirm cached shell and queued edits work.
- **Recommended use:** long-lived software, offline apps, multiplayer systems, public releases
- **Maturity:** stable

### CRDT convergence tests
- **Simple:** Ensure replicas reach the same state.
- **Advanced:** Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles.
- **Example:** Apply edits in different orders and compare final documents.
- **Recommended use:** long-lived software, offline apps, multiplayer systems, public releases
- **Maturity:** stable

### Accessibility tests
- **Simple:** Automate common WCAG checks and keyboard paths.
- **Advanced:** Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles.
- **Example:** Catch missing labels and focus traps.
- **Recommended use:** long-lived software, offline apps, multiplayer systems, public releases
- **Maturity:** stable

### Migration tests
- **Simple:** Validate upgrades from old data versions.
- **Advanced:** Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles.
- **Example:** Load v1 fixtures into current code.
- **Recommended use:** long-lived software, offline apps, multiplayer systems, public releases
- **Maturity:** stable

### Self-test dashboard
- **Simple:** Let deployments inspect key runtime functions.
- **Advanced:** Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles.
- **Example:** Check storage, service worker, workers and crypto from the UI.
- **Recommended use:** long-lived software, offline apps, multiplayer systems, public releases
- **Maturity:** stable

## Accessibility-First Interaction

### Semantic landmarks
- **Simple:** Use correct document structure.
- **Advanced:** Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup.
- **Example:** Let screen-reader users jump between navigation and workspace.
- **Recommended use:** public services, education, multiplayer collaboration, visual dashboards
- **Maturity:** stable

### Robust focus management
- **Simple:** Move focus intentionally during dialogs and route changes.
- **Advanced:** Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup.
- **Example:** Return focus after closing the mobile drawer.
- **Recommended use:** public services, education, multiplayer collaboration, visual dashboards
- **Maturity:** stable

### Live regions
- **Simple:** Announce meaningful asynchronous updates.
- **Advanced:** Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup.
- **Example:** Tell a screen-reader user that a collaborator joined.
- **Recommended use:** public services, education, multiplayer collaboration, visual dashboards
- **Maturity:** stable

### Reduced motion
- **Simple:** Honor system/user motion preferences.
- **Advanced:** Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup.
- **Example:** Disable parallax and animated network rings.
- **Recommended use:** public services, education, multiplayer collaboration, visual dashboards
- **Maturity:** stable

### High contrast
- **Simple:** Provide sufficient contrast and forced-colors support.
- **Advanced:** Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup.
- **Example:** Keep status indicators legible in high-contrast mode.
- **Recommended use:** public services, education, multiplayer collaboration, visual dashboards
- **Maturity:** stable

### Accessible data alternatives
- **Simple:** Pair graphics with tables or text summaries.
- **Advanced:** Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup.
- **Example:** Expose chart values without requiring vision.
- **Recommended use:** public services, education, multiplayer collaboration, visual dashboards
- **Maturity:** stable

### Cognitive/simple mode
- **Simple:** Reduce density and jargon.
- **Advanced:** Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup.
- **Example:** Show an action-oriented beginner interface.
- **Recommended use:** public services, education, multiplayer collaboration, visual dashboards
- **Maturity:** stable

### Caption/transcript support
- **Simple:** Make audio/video collaboration accessible.
- **Advanced:** Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup.
- **Example:** Provide captions for a live meeting.
- **Recommended use:** public services, education, multiplayer collaboration, visual dashboards
- **Maturity:** stable

## Internationalization & Localization

### Translation dictionaries
- **Simple:** Separate interface strings from code.
- **Advanced:** Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic.
- **Example:** Switch English and French without reload.
- **Recommended use:** global communities, cross-border research, education, international institutions
- **Maturity:** stable

### RTL support
- **Simple:** Mirror layouts for right-to-left languages.
- **Advanced:** Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic.
- **Example:** Render Arabic navigation correctly.
- **Recommended use:** global communities, cross-border research, education, international institutions
- **Maturity:** stable

### Intl formatting
- **Simple:** Format dates, numbers and units by locale.
- **Advanced:** Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic.
- **Example:** Display regional number formats automatically.
- **Recommended use:** global communities, cross-border research, education, international institutions
- **Maturity:** stable

### Pluralization
- **Simple:** Use locale-correct grammatical forms.
- **Advanced:** Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic.
- **Example:** Render 1 task versus 2 tasks correctly across languages.
- **Recommended use:** global communities, cross-border research, education, international institutions
- **Maturity:** stable

### Machine-translation labels
- **Simple:** Mark AI-generated translations explicitly.
- **Advanced:** Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic.
- **Example:** Avoid presenting an unreviewed translation as official.
- **Recommended use:** global communities, cross-border research, education, international institutions
- **Maturity:** stable

### Multilingual search
- **Simple:** Search across translated concepts.
- **Advanced:** Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic.
- **Example:** Find a project regardless of whether a query is English or French.
- **Recommended use:** global communities, cross-border research, education, international institutions
- **Maturity:** stable

### Time-zone awareness
- **Simple:** Render collaboration times locally.
- **Advanced:** Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic.
- **Example:** Schedule a workshop across continents.
- **Recommended use:** global communities, cross-border research, education, international institutions
- **Maturity:** stable

### Incomplete translation indicators
- **Simple:** Show coverage and fallback language.
- **Advanced:** Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic.
- **Example:** Display 82% complete rather than silently mixing languages.
- **Recommended use:** global communities, cross-border research, education, international institutions
- **Maturity:** stable

## Advanced Visualization

### SVG diagrams
- **Simple:** Accessible vector graphics for moderate datasets.
- **Advanced:** Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports.
- **Example:** Render an editable systems map.
- **Recommended use:** knowledge graphs, system maps, dashboards, gamified interfaces
- **Maturity:** stable

### Canvas rendering
- **Simple:** Efficient immediate-mode graphics.
- **Advanced:** Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports.
- **Example:** Draw thousands of map markers.
- **Recommended use:** knowledge graphs, system maps, dashboards, gamified interfaces
- **Maturity:** stable

### WebGL/WebGPU graphs
- **Simple:** GPU-accelerated large visual networks.
- **Advanced:** Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports.
- **Example:** Explore a million-edge knowledge graph.
- **Recommended use:** knowledge graphs, system maps, dashboards, gamified interfaces
- **Maturity:** stable

### Force-directed networks
- **Simple:** Lay out relationship graphs interactively.
- **Advanced:** Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports.
- **Example:** Show people, projects and organizations as a network.
- **Recommended use:** knowledge graphs, system maps, dashboards, gamified interfaces
- **Maturity:** stable

### Sankey flows
- **Simple:** Visualize quantities moving through systems.
- **Advanced:** Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports.
- **Example:** Show food or energy flows.
- **Recommended use:** knowledge graphs, system maps, dashboards, gamified interfaces
- **Maturity:** stable

### Timelines
- **Simple:** Explore events chronologically.
- **Advanced:** Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports.
- **Example:** Review project decisions across months.
- **Recommended use:** knowledge graphs, system maps, dashboards, gamified interfaces
- **Maturity:** stable

### Constellation UI
- **Simple:** Use optional spatial metaphor for exploration and progress.
- **Advanced:** Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports.
- **Example:** Represent modules as connected stars.
- **Recommended use:** knowledge graphs, system maps, dashboards, gamified interfaces
- **Maturity:** stable

### Exportable SVG/PNG
- **Simple:** Create portable visual artifacts.
- **Advanced:** Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports.
- **Example:** Embed a systems diagram in a report.
- **Recommended use:** knowledge graphs, system maps, dashboards, gamified interfaces
- **Maturity:** stable

## Geospatial & Mapping

### GeoJSON layers
- **Simple:** Store portable vector geometry.
- **Advanced:** Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision.
- **Example:** Represent community gardens and water points.
- **Recommended use:** field operations, regional planning, infrastructure, environmental projects
- **Maturity:** stable

### Offline map packs
- **Simple:** Cache selected regional basemaps/data.
- **Advanced:** Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision.
- **Example:** Use a field map without cellular service.
- **Recommended use:** field operations, regional planning, infrastructure, environmental projects
- **Maturity:** stable

### Collaborative annotation
- **Simple:** Let participants edit shared spatial features.
- **Advanced:** Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision.
- **Example:** Draw a proposed transit route together.
- **Recommended use:** field operations, regional planning, infrastructure, environmental projects
- **Maturity:** stable

### Clustering
- **Simple:** Summarize dense point sets.
- **Advanced:** Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision.
- **Example:** Group thousands of observations at low zoom.
- **Recommended use:** field operations, regional planning, infrastructure, environmental projects
- **Maturity:** stable

### Heatmaps
- **Simple:** Visualize spatial intensity.
- **Advanced:** Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision.
- **Example:** Show service coverage gaps.
- **Recommended use:** field operations, regional planning, infrastructure, environmental projects
- **Maturity:** stable

### Routing/isochrones
- **Simple:** Estimate reachable areas and paths.
- **Advanced:** Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision.
- **Example:** Compare access to clinics within 30 minutes.
- **Recommended use:** field operations, regional planning, infrastructure, environmental projects
- **Maturity:** stable

### Time-enabled maps
- **Simple:** Filter spatial objects by time.
- **Advanced:** Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision.
- **Example:** Watch restoration projects appear over years.
- **Recommended use:** field operations, regional planning, infrastructure, environmental projects
- **Maturity:** stable

### GeoJSON/GPX/KML interchange
- **Simple:** Import/export standard geospatial formats.
- **Advanced:** Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision.
- **Example:** Move field tracks between systems.
- **Recommended use:** field operations, regional planning, infrastructure, environmental projects
- **Maturity:** stable

## Media & Rich Collaboration

### MediaRecorder
- **Simple:** Capture microphone/camera streams with permission.
- **Advanced:** Make recording explicit and consent-driven; process locally where feasible and provide text equivalents.
- **Example:** Record a field interview with consent.
- **Recommended use:** remote meetings, field evidence, education, media-rich games
- **Maturity:** stable

### Screen sharing
- **Simple:** Share an application or display during collaboration.
- **Advanced:** Make recording explicit and consent-driven; process locally where feasible and provide text equivalents.
- **Example:** Walk a team through a simulation.
- **Recommended use:** remote meetings, field evidence, education, media-rich games
- **Maturity:** stable

### WebCodecs
- **Simple:** Low-level encode/decode for advanced media applications.
- **Advanced:** Make recording explicit and consent-driven; process locally where feasible and provide text equivalents.
- **Example:** Build efficient local video processing.
- **Recommended use:** remote meetings, field evidence, education, media-rich games
- **Maturity:** stable

### Web Audio
- **Simple:** Analyze and synthesize audio.
- **Advanced:** Make recording explicit and consent-driven; process locally where feasible and provide text equivalents.
- **Example:** Visualize a voice note waveform.
- **Recommended use:** remote meetings, field evidence, education, media-rich games
- **Maturity:** stable

### Local image compression
- **Simple:** Resize uploads before transmission.
- **Advanced:** Make recording explicit and consent-driven; process locally where feasible and provide text equivalents.
- **Example:** Reduce field-photo bandwidth.
- **Recommended use:** remote meetings, field evidence, education, media-rich games
- **Maturity:** stable

### Speech synthesis
- **Simple:** Read selected content aloud.
- **Advanced:** Make recording explicit and consent-driven; process locally where feasible and provide text equivalents.
- **Example:** Provide an optional auditory summary.
- **Recommended use:** remote meetings, field evidence, education, media-rich games
- **Maturity:** stable

### Caption editing
- **Simple:** Review generated transcripts and captions.
- **Advanced:** Make recording explicit and consent-driven; process locally where feasible and provide text equivalents.
- **Example:** Correct meeting captions before publishing.
- **Recommended use:** remote meetings, field evidence, education, media-rich games
- **Maturity:** stable

### Picture-in-Picture
- **Simple:** Keep video visible while working elsewhere.
- **Advanced:** Make recording explicit and consent-driven; process locally where feasible and provide text equivalents.
- **Example:** Follow a remote workshop while editing tasks.
- **Recommended use:** remote meetings, field evidence, education, media-rich games
- **Maturity:** stable

## Device & Sensor Capabilities

### Geolocation
- **Simple:** Request location with explicit consent.
- **Advanced:** Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback.
- **Example:** Attach approximate coordinates to a field observation.
- **Recommended use:** field science, accessibility, hardware labs, interactive exhibits
- **Maturity:** stable

### Camera
- **Simple:** Capture images or video.
- **Advanced:** Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback.
- **Example:** Document infrastructure condition.
- **Recommended use:** field science, accessibility, hardware labs, interactive exhibits
- **Maturity:** stable

### Microphone
- **Simple:** Capture audio.
- **Advanced:** Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback.
- **Example:** Record a consented oral-history contribution.
- **Recommended use:** field science, accessibility, hardware labs, interactive exhibits
- **Maturity:** stable

### Screen Wake Lock
- **Simple:** Keep a display awake during active field use.
- **Advanced:** Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback.
- **Example:** Prevent a checklist from sleeping during an inspection.
- **Recommended use:** field science, accessibility, hardware labs, interactive exhibits
- **Maturity:** stable

### Gamepad API
- **Simple:** Use controllers as alternative input.
- **Advanced:** Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback.
- **Example:** Drive an accessible simulation interface.
- **Recommended use:** field science, accessibility, hardware labs, interactive exhibits
- **Maturity:** stable

### Web Bluetooth
- **Simple:** Communicate with compatible nearby devices where supported.
- **Advanced:** Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback.
- **Example:** Read a voluntary environmental sensor.
- **Recommended use:** field science, accessibility, hardware labs, interactive exhibits
- **Maturity:** conditional

### WebSerial/WebUSB
- **Simple:** Connect selected hardware on compatible browsers.
- **Advanced:** Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback.
- **Example:** Import measurements from a field instrument.
- **Recommended use:** field science, accessibility, hardware labs, interactive exhibits
- **Maturity:** conditional

### Orientation/motion sensors
- **Simple:** Use movement data where appropriate.
- **Advanced:** Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback.
- **Example:** Drive an optional AR field visualization.
- **Recommended use:** field science, accessibility, hardware labs, interactive exhibits
- **Maturity:** stable

## Notifications & Background Work

### Push notifications
- **Simple:** Deliver server-originated notifications to opted-in users.
- **Advanced:** Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state.
- **Example:** Notify a reviewer of an assigned decision.
- **Recommended use:** PWA collaboration, field apps, project management, community platforms
- **Maturity:** stable

### Background Sync
- **Simple:** Retry queued work after connectivity returns where supported.
- **Advanced:** Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state.
- **Example:** Upload field observations later.
- **Recommended use:** PWA collaboration, field apps, project management, community platforms
- **Maturity:** conditional

### Background Fetch
- **Simple:** Handle long downloads more reliably where supported.
- **Advanced:** Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state.
- **Example:** Download an offline map pack.
- **Recommended use:** PWA collaboration, field apps, project management, community platforms
- **Maturity:** conditional

### Badging
- **Simple:** Show pending items on an installed app icon.
- **Advanced:** Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state.
- **Example:** Display three unread project requests.
- **Recommended use:** PWA collaboration, field apps, project management, community platforms
- **Maturity:** stable

### Notification inbox
- **Simple:** Keep an in-app durable record of important alerts.
- **Advanced:** Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state.
- **Example:** Review mentions after returning from offline work.
- **Recommended use:** PWA collaboration, field apps, project management, community platforms
- **Maturity:** stable

### Digest mode
- **Simple:** Group low-priority events.
- **Advanced:** Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state.
- **Example:** Send one daily project summary instead of 30 alerts.
- **Recommended use:** PWA collaboration, field apps, project management, community platforms
- **Maturity:** stable

### Quiet hours
- **Simple:** Respect user-defined interruption windows.
- **Advanced:** Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state.
- **Example:** Suppress noncritical alerts overnight.
- **Recommended use:** PWA collaboration, field apps, project management, community platforms
- **Maturity:** stable

### Freshness indicators
- **Simple:** Show when data was last synchronized.
- **Advanced:** Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state.
- **Example:** Mark a dashboard as 2 hours old.
- **Recommended use:** PWA collaboration, field apps, project management, community platforms
- **Maturity:** stable

## Advanced PWA Integration

### Installable manifest
- **Simple:** Describe app identity, icons and display mode.
- **Advanced:** Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached.
- **Example:** Install the suite from a browser.
- **Recommended use:** installable tools, offline suites, desktop-like PWAs, field apps
- **Maturity:** stable

### Versioned service worker
- **Simple:** Cache application shell and manage upgrades.
- **Advanced:** Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached.
- **Example:** Roll out v2 without trapping users on stale code.
- **Recommended use:** installable tools, offline suites, desktop-like PWAs, field apps
- **Maturity:** stable

### App shortcuts
- **Simple:** Expose common actions from the launcher.
- **Advanced:** Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached.
- **Example:** Open New Project directly.
- **Recommended use:** installable tools, offline suites, desktop-like PWAs, field apps
- **Maturity:** stable

### Protocol handlers
- **Simple:** Handle selected custom links where supported.
- **Advanced:** Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached.
- **Example:** Open pra://project/123 in the app.
- **Recommended use:** installable tools, offline suites, desktop-like PWAs, field apps
- **Maturity:** stable

### Launch handler
- **Simple:** Control how installed launches are routed.
- **Advanced:** Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached.
- **Example:** Reuse or create windows intentionally.
- **Recommended use:** installable tools, offline suites, desktop-like PWAs, field apps
- **Maturity:** stable

### Window Controls Overlay
- **Simple:** Use desktop titlebar space where supported.
- **Advanced:** Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached.
- **Example:** Create a denser desktop workspace.
- **Recommended use:** installable tools, offline suites, desktop-like PWAs, field apps
- **Maturity:** conditional

### Update UX
- **Simple:** Tell users when a new version is ready.
- **Advanced:** Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached.
- **Example:** Apply an update after saving current work.
- **Recommended use:** installable tools, offline suites, desktop-like PWAs, field apps
- **Maturity:** stable

### Session restore
- **Simple:** Persist open workspace state.
- **Advanced:** Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached.
- **Example:** Return to the same project after restart.
- **Recommended use:** installable tools, offline suites, desktop-like PWAs, field apps
- **Maturity:** stable

## Workflow & Automation Engines

### Finite-state workflows
- **Simple:** Model allowed transitions explicitly.
- **Advanced:** Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated.
- **Example:** Move evidence through draft → review → approved.
- **Recommended use:** institutional processes, research review, project operations, agent workflows
- **Maturity:** stable

### DAG workflows
- **Simple:** Represent tasks with dependencies.
- **Advanced:** Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated.
- **Example:** Start analysis only when data ingestion and validation finish.
- **Recommended use:** institutional processes, research review, project operations, agent workflows
- **Maturity:** stable

### Trigger-condition-action rules
- **Simple:** Automate routine responses.
- **Advanced:** Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated.
- **Example:** When evidence is added, assign two reviewers.
- **Recommended use:** institutional processes, research review, project operations, agent workflows
- **Maturity:** stable

### Human approval gates
- **Simple:** Require explicit approval for consequential actions.
- **Advanced:** Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated.
- **Example:** AI drafts a publication but cannot publish it.
- **Recommended use:** institutional processes, research review, project operations, agent workflows
- **Maturity:** stable

### Dry-run mode
- **Simple:** Preview workflow actions without committing.
- **Advanced:** Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated.
- **Example:** Test a new automation against sample events.
- **Recommended use:** institutional processes, research review, project operations, agent workflows
- **Maturity:** stable

### Retry/dead-letter handling
- **Simple:** Deal with failed external actions safely.
- **Advanced:** Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated.
- **Example:** Retry webhook delivery then queue unresolved failures.
- **Recommended use:** institutional processes, research review, project operations, agent workflows
- **Maturity:** stable

### Workflow templates
- **Simple:** Reuse proven processes.
- **Advanced:** Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated.
- **Example:** Clone a community consultation workflow.
- **Recommended use:** institutional processes, research review, project operations, agent workflows
- **Maturity:** stable

### Automation history
- **Simple:** Inspect what executed and why.
- **Advanced:** Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated.
- **Example:** Audit who approved an automated assignment.
- **Recommended use:** institutional processes, research review, project operations, agent workflows
- **Maturity:** stable

## Decision Support & Scenario Analysis

### Multi-criteria analysis
- **Simple:** Compare options across explicit dimensions.
- **Advanced:** Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible.
- **Example:** Explore cost, time, access and ecological impact.
- **Recommended use:** planning, resource allocation, systems engineering, training
- **Maturity:** stable

### Sensitivity analysis
- **Simple:** Show how conclusions change with assumptions.
- **Advanced:** Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible.
- **Example:** Vary energy-price assumptions across scenarios.
- **Recommended use:** planning, resource allocation, systems engineering, training
- **Maturity:** stable

### Monte Carlo simulation
- **Simple:** Propagate uncertainty through repeated sampling.
- **Advanced:** Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible.
- **Example:** Estimate outcome ranges rather than one point estimate.
- **Recommended use:** planning, resource allocation, systems engineering, training
- **Maturity:** stable

### Risk register
- **Simple:** Track likelihood, impact, mitigations and owners.
- **Advanced:** Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible.
- **Example:** Manage project delivery risks.
- **Recommended use:** planning, resource allocation, systems engineering, training
- **Maturity:** stable

### Assumption registry
- **Simple:** List premises behind models and plans.
- **Advanced:** Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible.
- **Example:** Mark a population-growth figure as an assumption.
- **Recommended use:** planning, resource allocation, systems engineering, training
- **Maturity:** stable

### What-if engine
- **Simple:** Change parameters interactively.
- **Advanced:** Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible.
- **Example:** Compare water demand under several conservation rates.
- **Recommended use:** planning, resource allocation, systems engineering, training
- **Maturity:** stable

### Decision log
- **Simple:** Record rationale and revisit dates.
- **Advanced:** Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible.
- **Example:** Explain why a team selected a design.
- **Recommended use:** planning, resource allocation, systems engineering, training
- **Maturity:** stable

### Counterfactual review
- **Simple:** Compare observed outcomes to plausible alternatives.
- **Advanced:** Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible.
- **Example:** Study whether a completed intervention met expectations.
- **Recommended use:** planning, resource allocation, systems engineering, training
- **Maturity:** stable

## Scientific & Data Analysis

### CSV/JSON/Parquet ingestion
- **Simple:** Load common analytical formats.
- **Advanced:** Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited.
- **Example:** Analyze an open-data table.
- **Recommended use:** research, planning, education, evidence-based projects
- **Maturity:** stable

### Statistical summaries
- **Simple:** Compute distributions, correlations and uncertainty.
- **Advanced:** Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited.
- **Example:** Profile a survey dataset.
- **Recommended use:** research, planning, education, evidence-based projects
- **Maturity:** stable

### Regression models
- **Simple:** Explore relationships among variables.
- **Advanced:** Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited.
- **Example:** Estimate association between access and travel time.
- **Recommended use:** research, planning, education, evidence-based projects
- **Maturity:** stable

### Time-series analysis
- **Simple:** Analyze change over time.
- **Advanced:** Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited.
- **Example:** Track reservoir levels or project metrics.
- **Recommended use:** research, planning, education, evidence-based projects
- **Maturity:** stable

### Graph algorithms
- **Simple:** Analyze network structure.
- **Advanced:** Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited.
- **Example:** Find highly connected collaboration hubs.
- **Recommended use:** research, planning, education, evidence-based projects
- **Maturity:** stable

### Spatial statistics
- **Simple:** Quantify geographic patterns.
- **Advanced:** Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited.
- **Example:** Analyze clustering of service gaps.
- **Recommended use:** research, planning, education, evidence-based projects
- **Maturity:** stable

### Unit/dimensional analysis
- **Simple:** Check and convert quantities safely.
- **Advanced:** Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited.
- **Example:** Prevent mixing liters and gallons in calculations.
- **Recommended use:** research, planning, education, evidence-based projects
- **Maturity:** stable

### Reproducible notebook cells
- **Simple:** Combine narrative, data and calculations.
- **Advanced:** Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited.
- **Example:** Publish a rerunnable project analysis.
- **Recommended use:** research, planning, education, evidence-based projects
- **Maturity:** stable

## Governance & Deliberation

### Versioned proposals
- **Simple:** Track amendments over time.
- **Advanced:** Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote.
- **Example:** Compare proposal v2 with the original.
- **Recommended use:** cooperatives, institutions, community projects, research groups
- **Maturity:** stable

### Structured objections
- **Simple:** Record unresolved concerns and responses.
- **Advanced:** Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote.
- **Example:** Keep accessibility concerns attached to a decision.
- **Recommended use:** cooperatives, institutions, community projects, research groups
- **Maturity:** stable

### Quorum rules
- **Simple:** Define minimum participation for a decision.
- **Advanced:** Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote.
- **Example:** Delay a formal vote until enough members participate.
- **Recommended use:** cooperatives, institutions, community projects, research groups
- **Maturity:** stable

### Voting methods
- **Simple:** Support context-appropriate approval, ranked or consent mechanisms.
- **Advanced:** Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote.
- **Example:** Run an advisory preference poll.
- **Recommended use:** cooperatives, institutions, community projects, research groups
- **Maturity:** stable

### Delegation
- **Simple:** Permit revocable delegation where governance allows.
- **Advanced:** Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote.
- **Example:** Temporarily delegate a committee vote.
- **Recommended use:** cooperatives, institutions, community projects, research groups
- **Maturity:** stable

### Conflict-of-interest disclosure
- **Simple:** Record relevant conflicts.
- **Advanced:** Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote.
- **Example:** Mark a reviewer connected to a vendor.
- **Recommended use:** cooperatives, institutions, community projects, research groups
- **Maturity:** stable

### Appeals/review dates
- **Simple:** Create formal reconsideration paths.
- **Advanced:** Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote.
- **Example:** Automatically reopen a policy after one year.
- **Recommended use:** cooperatives, institutions, community projects, research groups
- **Maturity:** stable

### Dissent record
- **Simple:** Preserve minority reasoning.
- **Advanced:** Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote.
- **Example:** Publish a decision with documented objections.
- **Recommended use:** cooperatives, institutions, community projects, research groups
- **Maturity:** stable

## Gamification Tied to Real Work

### Quest engine
- **Simple:** Represent useful work as structured missions.
- **Advanced:** Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score.
- **Example:** Create an Evidence Guardian quest to verify five claims.
- **Recommended use:** education, volunteer coordination, community projects, serious games
- **Maturity:** stable

### Skill trees
- **Simple:** Show learning and capability pathways.
- **Advanced:** Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score.
- **Example:** Progress from water concepts to field assessment to mentoring.
- **Recommended use:** education, volunteer coordination, community projects, serious games
- **Maturity:** stable

### Team XP
- **Simple:** Reward cooperative achievement.
- **Advanced:** Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score.
- **Example:** A cross-domain team gains progress for completing a reviewed milestone.
- **Recommended use:** education, volunteer coordination, community projects, serious games
- **Maturity:** stable

### Contribution ledger
- **Simple:** Record meaningful verified actions.
- **Advanced:** Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score.
- **Example:** Credit translation, mentoring and bug fixes.
- **Recommended use:** education, volunteer coordination, community projects, serious games
- **Maturity:** stable

### Achievement provenance
- **Simple:** Attach evidence to badges.
- **Advanced:** Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score.
- **Example:** A badge links to completed quests and reviews.
- **Recommended use:** education, volunteer coordination, community projects, serious games
- **Maturity:** stable

### Community milestones
- **Simple:** Track collective progress.
- **Advanced:** Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score.
- **Example:** Unlock a new scenario when a region verifies 100 datasets.
- **Recommended use:** education, volunteer coordination, community projects, serious games
- **Maturity:** stable

### Anti-Goodhart rules
- **Simple:** Reduce incentives to spam measured actions.
- **Advanced:** Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score.
- **Example:** Diminish XP for repetitive low-value tasks.
- **Recommended use:** education, volunteer coordination, community projects, serious games
- **Maturity:** stable

### Disable-gamification mode
- **Simple:** Keep core functionality available without game UI.
- **Advanced:** Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score.
- **Example:** Let an institution use the platform in a formal mode.
- **Recommended use:** education, volunteer coordination, community projects, serious games
- **Maturity:** stable

## Advanced UX & Workspace Architecture

### Command palette
- **Simple:** Search and execute actions from the keyboard.
- **Advanced:** Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links.
- **Example:** Jump to a project or create a task.
- **Recommended use:** large suites, professional tools, learning platforms, mobile/desktop apps
- **Maturity:** stable

### Universal search
- **Simple:** Search across modules and object types.
- **Advanced:** Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links.
- **Example:** Find people, evidence and projects in one box.
- **Recommended use:** large suites, professional tools, learning platforms, mobile/desktop apps
- **Maturity:** stable

### Split panes
- **Simple:** Compare or edit multiple views.
- **Advanced:** Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links.
- **Example:** Read evidence while updating a decision.
- **Recommended use:** large suites, professional tools, learning platforms, mobile/desktop apps
- **Maturity:** stable

### Saved layouts
- **Simple:** Persist workspace arrangement.
- **Advanced:** Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links.
- **Example:** Restore a research layout with map and evidence panel.
- **Recommended use:** large suites, professional tools, learning platforms, mobile/desktop apps
- **Maturity:** stable

### Guided/expert modes
- **Simple:** Change information density without removing functionality.
- **Advanced:** Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links.
- **Example:** Show simplified actions to newcomers and raw schemas to experts.
- **Recommended use:** large suites, professional tools, learning platforms, mobile/desktop apps
- **Maturity:** stable

### Contextual help
- **Simple:** Explain controls in place.
- **Advanced:** Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links.
- **Example:** Open an extended tooltip describing CRDT trade-offs.
- **Recommended use:** large suites, professional tools, learning platforms, mobile/desktop apps
- **Maturity:** stable

### Deep links
- **Simple:** Make application state linkable.
- **Advanced:** Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links.
- **Example:** Share a URL opening a specific project tab.
- **Recommended use:** large suites, professional tools, learning platforms, mobile/desktop apps
- **Maturity:** stable

### Responsive drawer/navigation
- **Simple:** Use one route registry across desktop and mobile menus.
- **Advanced:** Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links.
- **Example:** Keep active-route state consistent.
- **Recommended use:** large suites, professional tools, learning platforms, mobile/desktop apps
- **Maturity:** stable

## Collaborative Knowledge Management

### Wiki pages
- **Simple:** Create versioned collaborative reference pages.
- **Advanced:** Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows.
- **Example:** Maintain a regional water-system overview.
- **Recommended use:** research archives, institutional memory, community knowledge, documentation
- **Maturity:** stable

### Backlinks
- **Simple:** Show objects that reference the current one.
- **Advanced:** Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows.
- **Example:** See all projects using a dataset.
- **Recommended use:** research archives, institutional memory, community knowledge, documentation
- **Maturity:** stable

### Annotations
- **Simple:** Attach comments to precise source passages.
- **Advanced:** Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows.
- **Example:** Discuss one claim in a report.
- **Recommended use:** research archives, institutional memory, community knowledge, documentation
- **Maturity:** stable

### Suggested edits
- **Simple:** Separate proposals from accepted text.
- **Advanced:** Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows.
- **Example:** Review a contributor rewrite.
- **Recommended use:** research archives, institutional memory, community knowledge, documentation
- **Maturity:** stable

### Draft/published states
- **Simple:** Distinguish work-in-progress from public material.
- **Advanced:** Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows.
- **Example:** Keep internal notes private until approved.
- **Recommended use:** research archives, institutional memory, community knowledge, documentation
- **Maturity:** stable

### Glossary/ontology
- **Simple:** Define shared terms.
- **Advanced:** Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows.
- **Example:** Explain what resilience means in each domain.
- **Recommended use:** research archives, institutional memory, community knowledge, documentation
- **Maturity:** stable

### Cross-project references
- **Simple:** Link work instead of duplicating it.
- **Advanced:** Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows.
- **Example:** Reuse one evidence record across food and health projects.
- **Recommended use:** research archives, institutional memory, community knowledge, documentation
- **Maturity:** stable

### Knowledge packs
- **Simple:** Export a curated subset of linked material.
- **Advanced:** Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows.
- **Example:** Create an offline training pack.
- **Recommended use:** research archives, institutional memory, community knowledge, documentation
- **Maturity:** stable

## Interoperability & Open Standards

### JSON Schema
- **Simple:** Validate portable structured objects.
- **Advanced:** Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems.
- **Example:** Publish the project record contract.
- **Recommended use:** integrations, institutional systems, open data, federation
- **Maturity:** stable

### JSON-LD
- **Simple:** Attach machine-readable semantic context.
- **Advanced:** Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems.
- **Example:** Describe people, places and projects with linked identifiers.
- **Recommended use:** integrations, institutional systems, open data, federation
- **Maturity:** stable

### GeoJSON
- **Simple:** Exchange spatial geometry.
- **Advanced:** Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems.
- **Example:** Move project boundaries between tools.
- **Recommended use:** integrations, institutional systems, open data, federation
- **Maturity:** stable

### iCalendar
- **Simple:** Exchange events and schedules.
- **Advanced:** Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems.
- **Example:** Export workshops to calendars.
- **Recommended use:** integrations, institutional systems, open data, federation
- **Maturity:** stable

### OpenAPI
- **Simple:** Describe server APIs.
- **Advanced:** Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems.
- **Example:** Generate clients and documentation from one contract.
- **Recommended use:** integrations, institutional systems, open data, federation
- **Maturity:** stable

### REST adapters
- **Simple:** Integrate common HTTP services.
- **Advanced:** Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems.
- **Example:** Read a public data API.
- **Recommended use:** integrations, institutional systems, open data, federation
- **Maturity:** stable

### GraphQL adapters
- **Simple:** Query graph-shaped remote data selectively.
- **Advanced:** Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems.
- **Example:** Fetch projects plus contributors in one request.
- **Recommended use:** integrations, institutional systems, open data, federation
- **Maturity:** stable

### Webhooks
- **Simple:** Push signed external events into workflows.
- **Advanced:** Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems.
- **Example:** Trigger review when a repository release appears.
- **Recommended use:** integrations, institutional systems, open data, federation
- **Maturity:** stable

## Deployment, CI/CD & Release Engineering

### GitHub Actions
- **Simple:** Automate tests and deployments.
- **Advanced:** Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation.
- **Example:** Publish GitHub Pages after tests pass.
- **Recommended use:** public web apps, large suites, institutional deployments, rapid iteration
- **Maturity:** stable

### Static analysis/linting
- **Simple:** Catch errors before runtime.
- **Advanced:** Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation.
- **Example:** Reject malformed module metadata.
- **Recommended use:** public web apps, large suites, institutional deployments, rapid iteration
- **Maturity:** stable

### Accessibility CI
- **Simple:** Run automated accessibility checks.
- **Advanced:** Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation.
- **Example:** Block regressions in labels or contrast.
- **Recommended use:** public web apps, large suites, institutional deployments, rapid iteration
- **Maturity:** stable

### Dependency audit
- **Simple:** Detect vulnerable or outdated dependencies.
- **Advanced:** Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation.
- **Example:** Review third-party packages before release.
- **Recommended use:** public web apps, large suites, institutional deployments, rapid iteration
- **Maturity:** stable

### Bundle-size budgets
- **Simple:** Prevent uncontrolled frontend growth.
- **Advanced:** Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation.
- **Example:** Fail CI if initial JS exceeds a threshold.
- **Recommended use:** public web apps, large suites, institutional deployments, rapid iteration
- **Maturity:** stable

### Canary deployment
- **Simple:** Release to a small cohort first.
- **Advanced:** Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation.
- **Example:** Test a new sync protocol with beta rooms.
- **Recommended use:** public web apps, large suites, institutional deployments, rapid iteration
- **Maturity:** stable

### Release checksums
- **Simple:** Publish hashes beside release artifacts.
- **Advanced:** Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation.
- **Example:** Verify downloaded ZIP integrity.
- **Recommended use:** public web apps, large suites, institutional deployments, rapid iteration
- **Maturity:** stable

### Rollback artifacts
- **Simple:** Retain known-good deployable versions.
- **Advanced:** Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation.
- **Example:** Restore the previous service worker quickly.
- **Recommended use:** public web apps, large suites, institutional deployments, rapid iteration
- **Maturity:** stable

## Multiplayer Presence & Social Context

### Online/away state
- **Simple:** Show approximate availability.
- **Advanced:** Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed.
- **Example:** Avoid assigning a synchronous task to an offline participant.
- **Recommended use:** shared docs, workshops, multidisciplinary rooms, team coordination
- **Maturity:** stable

### Live cursors
- **Simple:** Show collaborators in shared editors.
- **Advanced:** Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed.
- **Example:** See where another user is working.
- **Recommended use:** shared docs, workshops, multidisciplinary rooms, team coordination
- **Maturity:** stable

### Typing/editing indicators
- **Simple:** Signal active contribution.
- **Advanced:** Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed.
- **Example:** Avoid overwriting a paragraph someone is editing.
- **Recommended use:** shared docs, workshops, multidisciplinary rooms, team coordination
- **Maturity:** stable

### Current module/task
- **Simple:** Optionally expose active workspace context.
- **Advanced:** Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed.
- **Example:** See that two reviewers are in Evidence Review.
- **Recommended use:** shared docs, workshops, multidisciplinary rooms, team coordination
- **Maturity:** stable

### Expertise presence
- **Simple:** Show relevant volunteered expertise in a room.
- **Advanced:** Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed.
- **Example:** Indicate that a hydrologist is available.
- **Recommended use:** shared docs, workshops, multidisciplinary rooms, team coordination
- **Maturity:** stable

### Focus/busy state
- **Simple:** Let participants reduce interruptions.
- **Advanced:** Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed.
- **Example:** Suppress low-priority mentions while presenting.
- **Recommended use:** shared docs, workshops, multidisciplinary rooms, team coordination
- **Maturity:** stable

### Presence expiration
- **Simple:** Automatically remove stale state.
- **Advanced:** Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed.
- **Example:** Do not show a crashed browser as online forever.
- **Recommended use:** shared docs, workshops, multidisciplinary rooms, team coordination
- **Maturity:** stable

## Cross-Disciplinary Roles & Skills Graphs

### Discipline taxonomy
- **Simple:** Represent fields of practice consistently.
- **Advanced:** Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally.
- **Example:** Tag contributors as hydrology, education or logistics.
- **Recommended use:** cross-domain teams, education, institutional projects, volunteer networks
- **Maturity:** stable

### Skills graph
- **Simple:** Link people to specific skills and evidence.
- **Advanced:** Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally.
- **Example:** Show GIS → raster analysis → watershed mapping.
- **Recommended use:** cross-domain teams, education, institutional projects, volunteer networks
- **Maturity:** stable

### Competency evidence
- **Simple:** Attach projects or assessments to skills.
- **Advanced:** Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally.
- **Example:** Support a mentor badge with completed training.
- **Recommended use:** cross-domain teams, education, institutional projects, volunteer networks
- **Maturity:** stable

### Learning goals
- **Simple:** Let participants state skills they want to develop.
- **Advanced:** Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally.
- **Example:** Match a novice mapper with a mentor.
- **Recommended use:** cross-domain teams, education, institutional projects, volunteer networks
- **Maturity:** stable

### Responsibility matrix
- **Simple:** Clarify ownership across a project.
- **Advanced:** Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally.
- **Example:** Use RACI-like roles for a complex intervention.
- **Recommended use:** cross-domain teams, education, institutional projects, volunteer networks
- **Maturity:** stable

### Expertise-gap detection
- **Simple:** Find missing perspectives.
- **Advanced:** Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally.
- **Example:** Warn that a plan lacks operations and accessibility review.
- **Recommended use:** cross-domain teams, education, institutional projects, volunteer networks
- **Maturity:** stable

### Team composition view
- **Simple:** Visualize complementary capabilities.
- **Advanced:** Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally.
- **Example:** Balance engineering, community and implementation expertise.
- **Recommended use:** cross-domain teams, education, institutional projects, volunteer networks
- **Maturity:** stable

## Collaboration Matchmaking & Resource Exchange

### Project-to-skill matching
- **Simple:** Find people whose capabilities fit project gaps.
- **Advanced:** Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement.
- **Example:** Suggest GIS contributors to a mapping project.
- **Recommended use:** volunteer networks, institutional collaboration, research teams, community resource sharing
- **Maturity:** stable

### Mentor matching
- **Simple:** Pair learning goals with willing mentors.
- **Advanced:** Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement.
- **Example:** Connect a new hydrology learner to a practitioner.
- **Recommended use:** volunteer networks, institutional collaboration, research teams, community resource sharing
- **Maturity:** stable

### Have/need marketplace
- **Simple:** Represent resources offered or requested.
- **Advanced:** Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement.
- **Example:** Match an available meeting space to a project need.
- **Recommended use:** volunteer networks, institutional collaboration, research teams, community resource sharing
- **Maturity:** stable

### Dataset reuse matching
- **Simple:** Detect existing data that can satisfy a need.
- **Advanced:** Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement.
- **Example:** Suggest a dataset already used by another project.
- **Recommended use:** volunteer networks, institutional collaboration, research teams, community resource sharing
- **Maturity:** stable

### Cross-project synergy detection
- **Simple:** Find projects with overlapping objectives or dependencies.
- **Advanced:** Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement.
- **Example:** Connect transport and food-access teams.
- **Recommended use:** volunteer networks, institutional collaboration, research teams, community resource sharing
- **Maturity:** stable

### Explainable recommendations
- **Simple:** Show why a match was made.
- **Advanced:** Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement.
- **Example:** Recommended because language, region and skill overlap.
- **Recommended use:** volunteer networks, institutional collaboration, research teams, community resource sharing
- **Maturity:** stable

### Capacity constraints
- **Simple:** Respect workload and availability.
- **Advanced:** Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement.
- **Example:** Avoid recommending an overloaded expert.
- **Recommended use:** volunteer networks, institutional collaboration, research teams, community resource sharing
- **Maturity:** stable

## Project Graphs, Resources & Dependencies

### Goal-to-task hierarchy
- **Simple:** Link strategy to executable work.
- **Advanced:** Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects.
- **Example:** Trace a resilience goal to specific field tasks.
- **Recommended use:** portfolio management, systems planning, replicable interventions, research programs
- **Maturity:** stable

### Dependency graph
- **Simple:** Represent blockers and prerequisites.
- **Advanced:** Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects.
- **Example:** Prevent deployment before safety review.
- **Recommended use:** portfolio management, systems planning, replicable interventions, research programs
- **Maturity:** stable

### Critical path
- **Simple:** Identify tasks controlling completion time.
- **Advanced:** Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects.
- **Example:** Focus coordination on the longest dependency chain.
- **Recommended use:** portfolio management, systems planning, replicable interventions, research programs
- **Maturity:** stable

### Shared-resource graph
- **Simple:** Track resources used by several projects.
- **Advanced:** Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects.
- **Example:** Avoid double-booking equipment.
- **Recommended use:** portfolio management, systems planning, replicable interventions, research programs
- **Maturity:** stable

### Cross-domain effects
- **Simple:** Link one project to impacts in other domains.
- **Advanced:** Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects.
- **Example:** Connect energy reliability to water treatment.
- **Recommended use:** portfolio management, systems planning, replicable interventions, research programs
- **Maturity:** stable

### Fork/merge projects
- **Simple:** Experiment in branches then integrate improvements.
- **Advanced:** Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects.
- **Example:** Adapt a template for a local context.
- **Recommended use:** portfolio management, systems planning, replicable interventions, research programs
- **Maturity:** stable

### Template lineage
- **Simple:** Track reusable project descendants.
- **Advanced:** Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects.
- **Example:** Compare outcomes across implementations of one pattern.
- **Recommended use:** portfolio management, systems planning, replicable interventions, research programs
- **Maturity:** stable

### Outcome feedback
- **Simple:** Link measured outcomes back to project design.
- **Advanced:** Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects.
- **Example:** Refine the template based on field results.
- **Recommended use:** portfolio management, systems planning, replicable interventions, research programs
- **Maturity:** stable

## Shared Labs, Simulation & Digital Twins

### Collaborative notebook
- **Simple:** Combine narrative, formulas, data and outputs.
- **Advanced:** Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing.
- **Example:** Coauthor a reproducible water-demand analysis.
- **Recommended use:** training, planning, scientific collaboration, serious games
- **Maturity:** stable

### Scenario rooms
- **Simple:** Place teams inside structured simulations.
- **Advanced:** Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing.
- **Example:** Run a 72-hour water disruption exercise.
- **Recommended use:** training, planning, scientific collaboration, serious games
- **Maturity:** stable

### Digital twin models
- **Simple:** Maintain simplified representations of real systems.
- **Advanced:** Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing.
- **Example:** Model a watershed or school network.
- **Recommended use:** training, planning, scientific collaboration, serious games
- **Maturity:** stable

### Shared parameter editing
- **Simple:** Let multiple users manipulate a scenario.
- **Advanced:** Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing.
- **Example:** Adjust demand and supply assumptions together.
- **Recommended use:** training, planning, scientific collaboration, serious games
- **Maturity:** stable

### Simulation forks
- **Simple:** Branch a baseline into alternatives.
- **Advanced:** Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing.
- **Example:** Compare conservation and infrastructure scenarios.
- **Recommended use:** training, planning, scientific collaboration, serious games
- **Maturity:** stable

### Uncertainty visualization
- **Simple:** Show ranges rather than false precision.
- **Advanced:** Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing.
- **Example:** Display Monte Carlo output intervals.
- **Recommended use:** training, planning, scientific collaboration, serious games
- **Maturity:** stable

### Replayable exercises
- **Simple:** Record scenario actions and outcomes.
- **Advanced:** Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing.
- **Example:** Review emergency-team choices after a drill.
- **Recommended use:** training, planning, scientific collaboration, serious games
- **Maturity:** stable

## Moderation, Abuse Resistance & Trust

### Report/block/mute
- **Simple:** Give users direct safety controls.
- **Advanced:** Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores.
- **Example:** Block abusive messages without leaving a project.
- **Recommended use:** public communities, multiplayer, knowledge commons, youth-safe spaces
- **Maturity:** stable

### Kick/ban with audit
- **Simple:** Allow moderators to restrict access transparently.
- **Advanced:** Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores.
- **Example:** Record who issued a temporary room ban and why.
- **Recommended use:** public communities, multiplayer, knowledge commons, youth-safe spaces
- **Maturity:** stable

### Rate limiting
- **Simple:** Bound high-frequency actions.
- **Advanced:** Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores.
- **Example:** Stop a bot from creating thousands of tasks.
- **Recommended use:** public communities, multiplayer, knowledge commons, youth-safe spaces
- **Maturity:** stable

### Rollback/history
- **Simple:** Recover from vandalism.
- **Advanced:** Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores.
- **Example:** Restore a project description after destructive edits.
- **Recommended use:** public communities, multiplayer, knowledge commons, youth-safe spaces
- **Maturity:** stable

### New-user safeguards
- **Simple:** Limit high-impact actions until trust is established.
- **Advanced:** Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores.
- **Example:** Require review before mass edits.
- **Recommended use:** public communities, multiplayer, knowledge commons, youth-safe spaces
- **Maturity:** stable

### Appeals process
- **Simple:** Permit moderation decisions to be challenged.
- **Advanced:** Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores.
- **Example:** Route a ban appeal to a separate review role.
- **Recommended use:** public communities, multiplayer, knowledge commons, youth-safe spaces
- **Maturity:** stable

### Multidimensional trust
- **Simple:** Keep expertise, reliability and identity assurance separate.
- **Advanced:** Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores.
- **Example:** Do not collapse everything into one score.
- **Recommended use:** public communities, multiplayer, knowledge commons, youth-safe spaces
- **Maturity:** stable

### Raid protection
- **Simple:** Detect sudden coordinated abusive joins.
- **Advanced:** Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores.
- **Example:** Switch a public room into approval mode.
- **Recommended use:** public communities, multiplayer, knowledge commons, youth-safe spaces
- **Maturity:** stable

## Federation & Multi-Instance Commons

### Instance identity
- **Simple:** Give each deployment a signed stable identity.
- **Advanced:** Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery.
- **Example:** Verify which university node published a project.
- **Recommended use:** community-owned platforms, universities, municipal networks, global commons
- **Maturity:** stable

### Federated search
- **Simple:** Query compatible remote indexes.
- **Advanced:** Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery.
- **Example:** Find relevant projects across participating nodes.
- **Recommended use:** community-owned platforms, universities, municipal networks, global commons
- **Maturity:** stable

### Federated project sharing
- **Simple:** Exchange selected project objects.
- **Advanced:** Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery.
- **Example:** Share a public toolkit to another instance.
- **Recommended use:** community-owned platforms, universities, municipal networks, global commons
- **Maturity:** stable

### Instance policy
- **Simple:** Declare moderation, retention and federation rules.
- **Advanced:** Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery.
- **Example:** Let a community node refuse unwanted peers.
- **Recommended use:** community-owned platforms, universities, municipal networks, global commons
- **Maturity:** stable

### Server-to-server signatures
- **Simple:** Authenticate federated messages.
- **Advanced:** Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery.
- **Example:** Verify remote event origin.
- **Recommended use:** community-owned platforms, universities, municipal networks, global commons
- **Maturity:** stable

### Selective federation
- **Simple:** Choose which object types cross boundaries.
- **Advanced:** Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery.
- **Example:** Federate public evidence but not member profiles.
- **Recommended use:** community-owned platforms, universities, municipal networks, global commons
- **Maturity:** stable

### Cross-instance identity linking
- **Simple:** Optionally associate identities across nodes.
- **Advanced:** Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery.
- **Example:** Let a researcher prove membership on two instances.
- **Recommended use:** community-owned platforms, universities, municipal networks, global commons
- **Maturity:** stable

## API-First Integrations & External Events

### Versioned REST API
- **Simple:** Expose core domain objects over HTTP.
- **Advanced:** Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes.
- **Example:** Allow a mobile client to retrieve projects.
- **Recommended use:** mobile clients, institutional integrations, AI agents, automation
- **Maturity:** stable

### Typed SDK/client
- **Simple:** Wrap API contracts for developers.
- **Advanced:** Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes.
- **Example:** Use generated types in integrations.
- **Recommended use:** mobile clients, institutional integrations, AI agents, automation
- **Maturity:** stable

### Signed webhooks
- **Simple:** Notify external systems of events.
- **Advanced:** Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes.
- **Example:** Send project.completed to an institutional workflow.
- **Recommended use:** mobile clients, institutional integrations, AI agents, automation
- **Maturity:** stable

### Webhook replay protection
- **Simple:** Reject duplicated or stale webhook events.
- **Advanced:** Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes.
- **Example:** Prevent one external event from executing twice.
- **Recommended use:** mobile clients, institutional integrations, AI agents, automation
- **Maturity:** stable

### Integration adapter layer
- **Simple:** Keep third-party code out of core modules.
- **Advanced:** Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes.
- **Example:** Swap one map or storage provider for another.
- **Recommended use:** mobile clients, institutional integrations, AI agents, automation
- **Maturity:** stable

### Rate/cost budgets
- **Simple:** Limit external API use.
- **Advanced:** Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes.
- **Example:** Prevent an AI agent from exhausting a paid quota.
- **Recommended use:** mobile clients, institutional integrations, AI agents, automation
- **Maturity:** stable

### Agent-ready tools
- **Simple:** Expose narrow structured actions to AI systems.
- **Advanced:** Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes.
- **Example:** Provide findEvidence() rather than unrestricted DOM control.
- **Recommended use:** mobile clients, institutional integrations, AI agents, automation
- **Maturity:** stable

### WebMCP-ready semantics
- **Simple:** Design actions and forms so emerging browser-agent protocols can map to them.
- **Advanced:** Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes.
- **Example:** Future-proof a project creation workflow.
- **Recommended use:** mobile clients, institutional integrations, AI agents, automation
- **Maturity:** emerging

## Outcome, Network & Cost Analytics

### Outcome metrics
- **Simple:** Track project-specific results.
- **Advanced:** Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable.
- **Example:** Measure verified trees surviving after one year.
- **Recommended use:** platform operations, impact evaluation, capacity planning, grant reporting
- **Maturity:** stable

### Collaboration metrics
- **Simple:** Measure useful cooperation.
- **Advanced:** Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable.
- **Example:** Count cross-discipline projects reaching review.
- **Recommended use:** platform operations, impact evaluation, capacity planning, grant reporting
- **Maturity:** stable

### Network health metrics
- **Simple:** Track realtime transport quality.
- **Advanced:** Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable.
- **Example:** Measure WebRTC connection success and fallback rate.
- **Recommended use:** platform operations, impact evaluation, capacity planning, grant reporting
- **Maturity:** stable

### Cost per active user/project
- **Simple:** Allocate infrastructure spending.
- **Advanced:** Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable.
- **Example:** Estimate AI and room costs per project.
- **Recommended use:** platform operations, impact evaluation, capacity planning, grant reporting
- **Maturity:** stable

### Data freshness metrics
- **Simple:** Track stale sources and sync lag.
- **Advanced:** Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable.
- **Example:** Show datasets needing refresh.
- **Recommended use:** platform operations, impact evaluation, capacity planning, grant reporting
- **Maturity:** stable

### Quality metrics
- **Simple:** Measure review coverage and unresolved issues.
- **Advanced:** Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable.
- **Example:** Track evidence records without reviewers.
- **Recommended use:** platform operations, impact evaluation, capacity planning, grant reporting
- **Maturity:** stable

### Privacy-preserving local analytics
- **Simple:** Compute personal usage insights on-device.
- **Advanced:** Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable.
- **Example:** Show the user their own contribution history without sending it away.
- **Recommended use:** platform operations, impact evaluation, capacity planning, grant reporting
- **Maturity:** stable

## Agentic Collaboration & Meta-Prompt Chains

### Meta-prompt chain
- **Simple:** Compose staged prompts for architecture, risks, implementation and verification.
- **Advanced:** Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth.
- **Example:** Turn selected features into a comprehensive build brief.
- **Recommended use:** feature fusion, project copilots, research assistants, workflow automation
- **Maturity:** stable

### Specialist agent council
- **Simple:** Run separate analytical perspectives.
- **Advanced:** Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth.
- **Example:** Have security, accessibility and evidence reviewers critique a design.
- **Recommended use:** feature fusion, project copilots, research assistants, workflow automation
- **Maturity:** stable

### Planner-executor-critic loop
- **Simple:** Separate planning from action and evaluation.
- **Advanced:** Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth.
- **Example:** Generate a module plan, implement draft steps, then inspect gaps.
- **Recommended use:** feature fusion, project copilots, research assistants, workflow automation
- **Maturity:** stable

### Tool-scoped agents
- **Simple:** Restrict each agent to explicit functions.
- **Advanced:** Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth.
- **Example:** A research agent can search evidence but cannot publish.
- **Recommended use:** feature fusion, project copilots, research assistants, workflow automation
- **Maturity:** stable

### Context assembly
- **Simple:** Build minimal structured context from project state.
- **Advanced:** Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth.
- **Example:** Give an agent only relevant decisions and tasks.
- **Recommended use:** feature fusion, project copilots, research assistants, workflow automation
- **Maturity:** stable

### Budget controls
- **Simple:** Limit tokens, calls, time or compute.
- **Advanced:** Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth.
- **Example:** Stop runaway multi-agent loops.
- **Recommended use:** feature fusion, project copilots, research assistants, workflow automation
- **Maturity:** stable

### Human-in-the-loop approval
- **Simple:** Require review before consequential operations.
- **Advanced:** Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth.
- **Example:** Approve generated tasks before assignment.
- **Recommended use:** feature fusion, project copilots, research assistants, workflow automation
- **Maturity:** stable

### Agent event log
- **Simple:** Record prompts, tools, outputs and approvals.
- **Advanced:** Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth.
- **Example:** Audit how an automated suggestion was produced.
- **Recommended use:** feature fusion, project copilots, research assistants, workflow automation
- **Maturity:** stable

## Systems Thinking, Harm Checks & Anti-Inversion

### Stakeholder map
- **Simple:** Identify affected groups and representation gaps.
- **Advanced:** Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers.
- **Example:** Show that residents are missing from an infrastructure decision.
- **Recommended use:** high-impact projects, public systems, AI-assisted planning, governance
- **Maturity:** stable

### Consequence mapper
- **Simple:** Trace direct, indirect and second-order effects.
- **Advanced:** Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers.
- **Example:** Explore how a transport change affects food access and emissions.
- **Recommended use:** high-impact projects, public systems, AI-assisted planning, governance
- **Maturity:** stable

### Feedback-loop map
- **Simple:** Represent reinforcing and balancing loops.
- **Advanced:** Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers.
- **Example:** Model how trust and participation influence each other.
- **Recommended use:** high-impact projects, public systems, AI-assisted planning, governance
- **Maturity:** stable

### Pre-mortem
- **Simple:** Assume failure and identify plausible causes.
- **Advanced:** Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers.
- **Example:** Generate mitigations before launch.
- **Recommended use:** high-impact projects, public systems, AI-assisted planning, governance
- **Maturity:** stable

### Red-team review
- **Simple:** Attack assumptions, security and abuse paths.
- **Advanced:** Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers.
- **Example:** Test whether a gamification mechanic can be exploited.
- **Recommended use:** high-impact projects, public systems, AI-assisted planning, governance
- **Maturity:** stable

### Reversibility check
- **Simple:** Classify whether actions can be undone.
- **Advanced:** Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers.
- **Example:** Require higher review for irreversible deployment.
- **Recommended use:** high-impact projects, public systems, AI-assisted planning, governance
- **Maturity:** stable

### Opt-out/consent check
- **Simple:** Confirm participation remains voluntary where applicable.
- **Advanced:** Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers.
- **Example:** Document how users can leave a study.
- **Recommended use:** high-impact projects, public systems, AI-assisted planning, governance
- **Maturity:** stable

### Unknowns detector
- **Simple:** Turn missing evidence and expertise into tasks.
- **Advanced:** Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers.
- **Example:** Generate quests from unresolved assumptions.
- **Recommended use:** high-impact projects, public systems, AI-assisted planning, governance
- **Maturity:** stable

## Embedded Learning & Mentorship

### Just-in-time primers
- **Simple:** Teach a concept at the moment it is needed.
- **Advanced:** Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content.
- **Example:** Explain confidence intervals beside an analysis tool.
- **Recommended use:** education, workforce development, volunteer communities, professional learning
- **Maturity:** stable

### Competency pathways
- **Simple:** Define staged skill development.
- **Advanced:** Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content.
- **Example:** Progress from GIS basics to reviewed field mapping.
- **Recommended use:** education, workforce development, volunteer communities, professional learning
- **Maturity:** stable

### Mentor matching
- **Simple:** Connect willing experts and learners.
- **Advanced:** Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content.
- **Example:** Pair a student with a project reviewer.
- **Recommended use:** education, workforce development, volunteer communities, professional learning
- **Maturity:** stable

### Office hours
- **Simple:** Schedule accessible group help sessions.
- **Advanced:** Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content.
- **Example:** Host weekly project clinics.
- **Recommended use:** education, workforce development, volunteer communities, professional learning
- **Maturity:** stable

### Applied assessments
- **Simple:** Verify learning through actual work.
- **Advanced:** Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content.
- **Example:** Earn a competency by completing a reviewed map.
- **Recommended use:** education, workforce development, volunteer communities, professional learning
- **Maturity:** stable

### Peer teaching credit
- **Simple:** Recognize mentoring contributions.
- **Advanced:** Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content.
- **Example:** Award mentorship XP for accepted guidance.
- **Recommended use:** education, workforce development, volunteer communities, professional learning
- **Maturity:** stable

### Adaptive explanations
- **Simple:** Offer simple, advanced and expert depth.
- **Advanced:** Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content.
- **Example:** Switch a tooltip from one-minute summary to implementation details.
- **Recommended use:** education, workforce development, volunteer communities, professional learning
- **Maturity:** stable

## Discovery, Recommendations & Project Graph Navigation

### Global object search
- **Simple:** Search across people, projects, evidence, places and organizations.
- **Advanced:** Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people.
- **Example:** Find food projects in Alberta needing logistics help.
- **Recommended use:** collaboration networks, research discovery, volunteer platforms, multi-domain suites
- **Maturity:** stable

### Explainable recommendations
- **Simple:** State why something is suggested.
- **Advanced:** Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people.
- **Example:** Recommended because your GIS skill matches this task.
- **Recommended use:** collaboration networks, research discovery, volunteer platforms, multi-domain suites
- **Maturity:** stable

### Related-project graph
- **Simple:** Navigate conceptual and dependency relationships.
- **Advanced:** Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people.
- **Example:** Explore projects linked to one watershed.
- **Recommended use:** collaboration networks, research discovery, volunteer platforms, multi-domain suites
- **Maturity:** stable

### Saved searches
- **Simple:** Persist reusable discovery queries.
- **Advanced:** Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people.
- **Example:** Track open translation quests.
- **Recommended use:** collaboration networks, research discovery, volunteer platforms, multi-domain suites
- **Maturity:** stable

### Opportunity inbox
- **Simple:** Collect relevant requests without infinite scroll.
- **Advanced:** Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people.
- **Example:** Review five new matches in one deliberate session.
- **Recommended use:** collaboration networks, research discovery, volunteer platforms, multi-domain suites
- **Maturity:** stable

### Diversity constraints
- **Simple:** Avoid repeatedly showing one domain or organization.
- **Advanced:** Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people.
- **Example:** Surface complementary project types.
- **Recommended use:** collaboration networks, research discovery, volunteer platforms, multi-domain suites
- **Maturity:** stable

### User-tunable ranking
- **Simple:** Let users adjust relevance factors.
- **Advanced:** Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people.
- **Example:** Prioritize local projects over global popularity.
- **Recommended use:** collaboration networks, research discovery, volunteer platforms, multi-domain suites
- **Maturity:** stable

## Universal Event & Schema Architecture

### Universal event envelope
- **Simple:** Standardize actor, action, object, time and context.
- **Advanced:** Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution.
- **Example:** Emit one task.completed shape everywhere.
- **Recommended use:** event-driven systems, analytics, audit, workflow engines
- **Maturity:** stable

### Typed domain events
- **Simple:** Define explicit event families.
- **Advanced:** Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution.
- **Example:** project.created differs from evidence.reviewed.
- **Recommended use:** event-driven systems, analytics, audit, workflow engines
- **Maturity:** stable

### Schema registry
- **Simple:** Version and validate shared object contracts.
- **Advanced:** Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution.
- **Example:** Reject an event that targets an unsupported schema version.
- **Recommended use:** event-driven systems, analytics, audit, workflow engines
- **Maturity:** stable

### Event replay
- **Simple:** Reprocess past events through new projections.
- **Advanced:** Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution.
- **Example:** Rebuild a gamification dashboard after rules change.
- **Recommended use:** event-driven systems, analytics, audit, workflow engines
- **Maturity:** stable

### Dead-letter queue
- **Simple:** Quarantine events that cannot be processed.
- **Advanced:** Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution.
- **Example:** Keep malformed integrations from blocking the stream.
- **Recommended use:** event-driven systems, analytics, audit, workflow engines
- **Maturity:** stable

### Materialized views
- **Simple:** Derive fast queryable projections.
- **Advanced:** Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution.
- **Example:** Build a contributor dashboard from events.
- **Recommended use:** event-driven systems, analytics, audit, workflow engines
- **Maturity:** stable

### Correlation/causation IDs
- **Simple:** Link related events in a workflow.
- **Advanced:** Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution.
- **Example:** Trace a quest completion to its badge and notification.
- **Recommended use:** event-driven systems, analytics, audit, workflow engines
- **Maturity:** stable

## Online Backend & Edge Architecture

### Edge/serverless functions
- **Simple:** Run APIs close to users without managing servers.
- **Advanced:** Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations.
- **Example:** Validate and persist a project action.
- **Recommended use:** online multiplayer, institutional deployments, public platforms, large datasets
- **Maturity:** stable

### Stateful room objects
- **Simple:** Keep low-latency state near realtime sessions.
- **Advanced:** Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations.
- **Example:** Use one coordinator per multiplayer room.
- **Recommended use:** online multiplayer, institutional deployments, public platforms, large datasets
- **Maturity:** stable

### Relational database
- **Simple:** Store durable normalized online state.
- **Advanced:** Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations.
- **Example:** Persist users, projects and permissions.
- **Recommended use:** online multiplayer, institutional deployments, public platforms, large datasets
- **Maturity:** stable

### Object storage
- **Simple:** Store large files and media.
- **Advanced:** Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations.
- **Example:** Keep datasets separate from relational rows.
- **Recommended use:** online multiplayer, institutional deployments, public platforms, large datasets
- **Maturity:** stable

### KV/cache layer
- **Simple:** Serve small frequently-read configuration quickly.
- **Advanced:** Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations.
- **Example:** Cache public project summaries.
- **Recommended use:** online multiplayer, institutional deployments, public platforms, large datasets
- **Maturity:** stable

### Search index
- **Simple:** Provide scalable lexical/faceted search.
- **Advanced:** Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations.
- **Example:** Search millions of public objects.
- **Recommended use:** online multiplayer, institutional deployments, public platforms, large datasets
- **Maturity:** stable

### Vector index
- **Simple:** Support server-side semantic retrieval.
- **Advanced:** Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations.
- **Example:** Find similar evidence across instances.
- **Recommended use:** online multiplayer, institutional deployments, public platforms, large datasets
- **Maturity:** stable

### Scheduled jobs/queues
- **Simple:** Run deferred and retryable work.
- **Advanced:** Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations.
- **Example:** Refresh public datasets nightly.
- **Recommended use:** online multiplayer, institutional deployments, public platforms, large datasets
- **Maturity:** stable

## Frontier Production Hardening

### SFU media topology
- **Simple:** Route audio/video through a selective forwarding unit for rooms too large for full peer meshes.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Run a 50-person workshop without every browser maintaining 49 media connections.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** conditional

### Simulcast / SVC video
- **Simple:** Publish layered video encodings so receivers get quality appropriate to bandwidth and layout.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Send low-resolution thumbnails plus a higher-quality active speaker stream.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** conditional

### WebRTC Encoded Transforms
- **Simple:** Transform encoded media frames for advanced end-to-end encryption or processing where supported.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Encrypt conference media before it reaches an SFU that should not see plaintext.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** conditional

### Messaging Layer Security (MLS)
- **Simple:** Use standardized group key agreement concepts for large encrypted groups.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Rotate group keys when a participant joins or leaves a sensitive room.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** emerging

### Ephemeral TURN credentials
- **Simple:** Issue short-lived relay credentials instead of embedding permanent TURN secrets.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Allow WebRTC relay for one session without exposing long-term credentials.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** stable

### Verifiable Credentials
- **Simple:** Represent portable cryptographically verifiable claims about roles or competencies.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Verify that a reviewer holds a credential without copying the issuer database.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** conditional

### DID adapter layer
- **Simple:** Support decentralized identifier methods through replaceable adapters where justified.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Resolve a portable contributor identifier without binding the application to one DID method.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** emerging

### C2PA / Content Credentials
- **Simple:** Preserve compatible content provenance metadata for media and generated assets.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Carry source/edit provenance with a published project image.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** conditional

### Software Bill of Materials (SBOM)
- **Simple:** Generate a machine-readable inventory of shipped software dependencies.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Publish dependency provenance beside a release bundle.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** stable

### SLSA-style build provenance
- **Simple:** Record verifiable build origin and release pipeline metadata.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Show which source revision and workflow produced a deployed artifact.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** conditional

### Policy-as-code
- **Simple:** Express authorization or governance rules as reviewable policy separate from application code.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Evaluate whether a role may publish a dataset under current organization policy.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** stable

### Contract testing
- **Simple:** Verify that clients and services continue to honor shared API/event contracts.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Catch a breaking event-schema change before production.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** stable

### Property-based testing
- **Simple:** Generate many inputs to test invariants rather than only hand-written examples.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Prove that merge operations remain commutative across randomized edits.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** stable

### Chaos / fault injection
- **Simple:** Deliberately simulate failures to verify resilience.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Drop peer connections, fail a database call and restart a room coordinator during tests.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** stable

### Synthetic load testing
- **Simple:** Generate realistic concurrency before public launch.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Simulate 5,000 room connections and bursty task events.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** stable

### Deterministic replay debugger
- **Simple:** Replay recorded events through the same reducers to reproduce distributed bugs.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Recreate the exact sequence that produced an incorrect project state.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** stable

### Anonymous credential rate limiting
- **Simple:** Limit abuse without requiring persistent cross-site identity where supported by the chosen design.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Give an anonymous participant a bounded posting budget while minimizing tracking.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** emerging

### WebNN inference adapter
- **Simple:** Use browser neural-network acceleration when available behind a provider abstraction.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Run a small embedding or vision model through a hardware-backed browser path.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** emerging

### Optimized WebGPU kernels
- **Simple:** Use tuned GPU kernels for local inference and scientific workloads.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Accelerate embedding or matrix operations beyond generic shader implementations.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** emerging

### Sandboxed WASM plugins
- **Simple:** Run untrusted or third-party computation inside constrained WebAssembly interfaces.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Allow a community analytics plugin without direct DOM/database authority.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** conditional

### Sandboxed iframe plugin RPC
- **Simple:** Isolate optional UI plugins in sandboxed frames with explicit message contracts.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Let a visualization extension render without inheriting full application privileges.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** stable

### Group key rotation
- **Simple:** Rotate encryption material as room membership changes.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Remove a departed participant from future encrypted message access.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** stable

### Merkle synchronization
- **Simple:** Compare replicated state by tree/hash summaries before sending missing objects.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Synchronize two archive nodes by transferring only divergent branches.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** conditional

### Schema evolution compatibility
- **Simple:** Define forward/backward compatibility rules for long-lived event and object schemas.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Allow v4 clients to read safe fields from v5 events while rejecting incompatible writes.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** stable

### Transparency log anchoring
- **Simple:** Publish append-only signed release or moderation proofs to an independently verifiable log where warranted.
- **Advanced:** Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.
- **Example:** Make it detectable if a signed release record disappears later.
- **Recommended use:** large public multiplayer, institutional infrastructure, high-assurance deployments, advanced AI/media
- **Maturity:** conditional

## Reusable feature-fusion principles

- Prefer capability detection over browser assumptions.
- Make every optional advanced API degradable.
- Keep networking transport separate from synchronization semantics.
- Use universal events and schemas to connect modules.
- Treat chat as conversation, not the durable database. Promote decisions, evidence and tasks into structured objects.
- Drive gamification from verified events and outcomes, not clicks.
- Separate identity assurance, expertise, reliability and moderation status instead of one global trust score.
- Record AI provenance and require human approval for consequential actions.
- Track source provenance, freshness, transformations and review state.
- Design federation as a trust-boundary problem, not merely a networking problem.
- Test offline, reconnect, migration, convergence, permissions, accessibility and abuse cases.
- Preserve data portability, explicit consent and reversible decisions where feasible.
