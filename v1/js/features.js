export const FEATURES = [
  {
    "id": "f001",
    "category": "storage",
    "categoryTitle": "Storage & Local Data",
    "name": "IndexedDB",
    "summary": "Structured transactional browser database for application state.",
    "advanced": "Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations.",
    "example": "Store projects, tasks, evidence and preferences locally.",
    "useCases": [
      "offline-first applications",
      "large datasets",
      "portable knowledge commons",
      "local AI assets"
    ],
    "tags": [
      "offline",
      "data",
      "resilience"
    ],
    "maturity": "stable",
    "tooltip": "Structured transactional browser database for application state. Advanced: Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations. Example: Store projects, tasks, evidence and preferences locally. Recommended for: offline-first applications, large datasets, portable knowledge commons."
  },
  {
    "id": "f002",
    "category": "storage",
    "categoryTitle": "Storage & Local Data",
    "name": "OPFS",
    "summary": "Origin Private File System for high-performance private files.",
    "advanced": "Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations.",
    "example": "Keep local model assets, map packs or SQLite databases in browser-private storage.",
    "useCases": [
      "offline-first applications",
      "large datasets",
      "portable knowledge commons",
      "local AI assets"
    ],
    "tags": [
      "offline",
      "data",
      "resilience"
    ],
    "maturity": "stable",
    "tooltip": "Origin Private File System for high-performance private files. Advanced: Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations. Example: Keep local model assets, map packs or SQLite databases in browser-private storage. Recommended for: offline-first applications, large datasets, portable knowledge commons."
  },
  {
    "id": "f003",
    "category": "storage",
    "categoryTitle": "Storage & Local Data",
    "name": "SQLite/WASM",
    "summary": "Relational SQL database running locally through WebAssembly.",
    "advanced": "Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations.",
    "example": "Run joins and constraints across project, evidence and contributor tables without a server.",
    "useCases": [
      "offline-first applications",
      "large datasets",
      "portable knowledge commons",
      "local AI assets"
    ],
    "tags": [
      "offline",
      "data",
      "resilience"
    ],
    "maturity": "stable",
    "tooltip": "Relational SQL database running locally through WebAssembly. Advanced: Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations. Example: Run joins and constraints across project, evidence and contributor tables without a server. Recommended for: offline-first applications, large datasets, portable knowledge commons."
  },
  {
    "id": "f004",
    "category": "storage",
    "categoryTitle": "Storage & Local Data",
    "name": "DuckDB-WASM",
    "summary": "Analytical SQL engine for CSV, JSON and Parquet in-browser.",
    "advanced": "Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations.",
    "example": "Analyze a regional dataset directly in the browser.",
    "useCases": [
      "offline-first applications",
      "large datasets",
      "portable knowledge commons",
      "local AI assets"
    ],
    "tags": [
      "offline",
      "data",
      "resilience"
    ],
    "maturity": "stable",
    "tooltip": "Analytical SQL engine for CSV, JSON and Parquet in-browser. Advanced: Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations. Example: Analyze a regional dataset directly in the browser. Recommended for: offline-first applications, large datasets, portable knowledge commons."
  },
  {
    "id": "f005",
    "category": "storage",
    "categoryTitle": "Storage & Local Data",
    "name": "Schema migrations",
    "summary": "Version and upgrade persisted data safely.",
    "advanced": "Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations.",
    "example": "Upgrade a v3 project schema to v4 with rollback if validation fails.",
    "useCases": [
      "offline-first applications",
      "large datasets",
      "portable knowledge commons",
      "local AI assets"
    ],
    "tags": [
      "offline",
      "data",
      "resilience"
    ],
    "maturity": "stable",
    "tooltip": "Version and upgrade persisted data safely. Advanced: Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations. Example: Upgrade a v3 project schema to v4 with rollback if validation fails. Recommended for: offline-first applications, large datasets, portable knowledge commons."
  },
  {
    "id": "f006",
    "category": "storage",
    "categoryTitle": "Storage & Local Data",
    "name": "Portable workspace bundles",
    "summary": "Export selected state, files and metadata as a transportable package.",
    "advanced": "Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations.",
    "example": "Move a project from one device or deployment to another.",
    "useCases": [
      "offline-first applications",
      "large datasets",
      "portable knowledge commons",
      "local AI assets"
    ],
    "tags": [
      "offline",
      "data",
      "resilience"
    ],
    "maturity": "stable",
    "tooltip": "Export selected state, files and metadata as a transportable package. Advanced: Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations. Example: Move a project from one device or deployment to another. Recommended for: offline-first applications, large datasets, portable knowledge commons."
  },
  {
    "id": "f007",
    "category": "storage",
    "categoryTitle": "Storage & Local Data",
    "name": "Content-addressed storage",
    "summary": "Address objects by cryptographic hash to deduplicate and verify them.",
    "advanced": "Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations.",
    "example": "Store one copy of identical evidence files referenced by many projects.",
    "useCases": [
      "offline-first applications",
      "large datasets",
      "portable knowledge commons",
      "local AI assets"
    ],
    "tags": [
      "offline",
      "data",
      "resilience"
    ],
    "maturity": "stable",
    "tooltip": "Address objects by cryptographic hash to deduplicate and verify them. Advanced: Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations. Example: Store one copy of identical evidence files referenced by many projects. Recommended for: offline-first applications, large datasets, portable knowledge commons."
  },
  {
    "id": "f008",
    "category": "storage",
    "categoryTitle": "Storage & Local Data",
    "name": "Incremental backups",
    "summary": "Persist only changed records or blocks after a baseline snapshot.",
    "advanced": "Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations.",
    "example": "Create small daily backup bundles instead of full exports.",
    "useCases": [
      "offline-first applications",
      "large datasets",
      "portable knowledge commons",
      "local AI assets"
    ],
    "tags": [
      "offline",
      "data",
      "resilience"
    ],
    "maturity": "stable",
    "tooltip": "Persist only changed records or blocks after a baseline snapshot. Advanced: Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations. Example: Create small daily backup bundles instead of full exports. Recommended for: offline-first applications, large datasets, portable knowledge commons."
  },
  {
    "id": "f009",
    "category": "sync",
    "categoryTitle": "Local-first Sync & Conflict Resolution",
    "name": "CRDTs",
    "summary": "Conflict-free replicated data types for convergent collaborative state.",
    "advanced": "Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins.",
    "example": "Two offline editors change a task board and later merge safely.",
    "useCases": [
      "collaborative editors",
      "field operations",
      "multiplayer project boards",
      "federated nodes"
    ],
    "tags": [
      "offline",
      "sync",
      "multiplayer"
    ],
    "maturity": "stable",
    "tooltip": "Conflict-free replicated data types for convergent collaborative state. Advanced: Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins. Example: Two offline editors change a task board and later merge safely. Recommended for: collaborative editors, field operations, multiplayer project boards."
  },
  {
    "id": "f010",
    "category": "sync",
    "categoryTitle": "Local-first Sync & Conflict Resolution",
    "name": "Operational Transformation",
    "summary": "Transform concurrent text operations for collaborative editing.",
    "advanced": "Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins.",
    "example": "Keep a shared document coherent while multiple users type.",
    "useCases": [
      "collaborative editors",
      "field operations",
      "multiplayer project boards",
      "federated nodes"
    ],
    "tags": [
      "offline",
      "sync",
      "multiplayer"
    ],
    "maturity": "stable",
    "tooltip": "Transform concurrent text operations for collaborative editing. Advanced: Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins. Example: Keep a shared document coherent while multiple users type. Recommended for: collaborative editors, field operations, multiplayer project boards."
  },
  {
    "id": "f011",
    "category": "sync",
    "categoryTitle": "Local-first Sync & Conflict Resolution",
    "name": "Event sourcing",
    "summary": "Record immutable domain events instead of only final state.",
    "advanced": "Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins.",
    "example": "Rebuild a project timeline from task.created and task.completed events.",
    "useCases": [
      "collaborative editors",
      "field operations",
      "multiplayer project boards",
      "federated nodes"
    ],
    "tags": [
      "offline",
      "sync",
      "multiplayer"
    ],
    "maturity": "stable",
    "tooltip": "Record immutable domain events instead of only final state. Advanced: Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins. Example: Rebuild a project timeline from task.created and task.completed events. Recommended for: collaborative editors, field operations, multiplayer project boards."
  },
  {
    "id": "f012",
    "category": "sync",
    "categoryTitle": "Local-first Sync & Conflict Resolution",
    "name": "Lamport clocks",
    "summary": "Logical ordering for distributed events.",
    "advanced": "Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins.",
    "example": "Order edits generated on disconnected devices.",
    "useCases": [
      "collaborative editors",
      "field operations",
      "multiplayer project boards",
      "federated nodes"
    ],
    "tags": [
      "offline",
      "sync",
      "multiplayer"
    ],
    "maturity": "stable",
    "tooltip": "Logical ordering for distributed events. Advanced: Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins. Example: Order edits generated on disconnected devices. Recommended for: collaborative editors, field operations, multiplayer project boards."
  },
  {
    "id": "f013",
    "category": "sync",
    "categoryTitle": "Local-first Sync & Conflict Resolution",
    "name": "Vector clocks",
    "summary": "Track causality across multiple writers.",
    "advanced": "Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins.",
    "example": "Detect whether two edits are concurrent or causally related.",
    "useCases": [
      "collaborative editors",
      "field operations",
      "multiplayer project boards",
      "federated nodes"
    ],
    "tags": [
      "offline",
      "sync",
      "multiplayer"
    ],
    "maturity": "stable",
    "tooltip": "Track causality across multiple writers. Advanced: Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins. Example: Detect whether two edits are concurrent or causally related. Recommended for: collaborative editors, field operations, multiplayer project boards."
  },
  {
    "id": "f014",
    "category": "sync",
    "categoryTitle": "Local-first Sync & Conflict Resolution",
    "name": "Snapshot + replay",
    "summary": "Periodically checkpoint state and replay later events.",
    "advanced": "Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins.",
    "example": "Restore a room quickly without replaying years of history.",
    "useCases": [
      "collaborative editors",
      "field operations",
      "multiplayer project boards",
      "federated nodes"
    ],
    "tags": [
      "offline",
      "sync",
      "multiplayer"
    ],
    "maturity": "stable",
    "tooltip": "Periodically checkpoint state and replay later events. Advanced: Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins. Example: Restore a room quickly without replaying years of history. Recommended for: collaborative editors, field operations, multiplayer project boards."
  },
  {
    "id": "f015",
    "category": "sync",
    "categoryTitle": "Local-first Sync & Conflict Resolution",
    "name": "Outbox/inbox pattern",
    "summary": "Queue outgoing and incoming changes for reliable synchronization.",
    "advanced": "Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins.",
    "example": "Submit field observations offline and sync later.",
    "useCases": [
      "collaborative editors",
      "field operations",
      "multiplayer project boards",
      "federated nodes"
    ],
    "tags": [
      "offline",
      "sync",
      "multiplayer"
    ],
    "maturity": "stable",
    "tooltip": "Queue outgoing and incoming changes for reliable synchronization. Advanced: Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins. Example: Submit field observations offline and sync later. Recommended for: collaborative editors, field operations, multiplayer project boards."
  },
  {
    "id": "f016",
    "category": "sync",
    "categoryTitle": "Local-first Sync & Conflict Resolution",
    "name": "Three-way merge",
    "summary": "Merge local and remote branches against a common base.",
    "advanced": "Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins.",
    "example": "Reconcile two independently edited project plans.",
    "useCases": [
      "collaborative editors",
      "field operations",
      "multiplayer project boards",
      "federated nodes"
    ],
    "tags": [
      "offline",
      "sync",
      "multiplayer"
    ],
    "maturity": "stable",
    "tooltip": "Merge local and remote branches against a common base. Advanced: Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins. Example: Reconcile two independently edited project plans. Recommended for: collaborative editors, field operations, multiplayer project boards."
  },
  {
    "id": "f017",
    "category": "concurrency",
    "categoryTitle": "Workers, Concurrency & Cross-Tab Coordination",
    "name": "Web Workers",
    "summary": "Run compute-heavy JavaScript off the UI thread.",
    "advanced": "Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit.",
    "example": "Generate embeddings without freezing the interface.",
    "useCases": [
      "local AI",
      "large visualizations",
      "multi-tab applications",
      "simulation tools"
    ],
    "tags": [
      "performance",
      "browser",
      "resilience"
    ],
    "maturity": "stable",
    "tooltip": "Run compute-heavy JavaScript off the UI thread. Advanced: Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit. Example: Generate embeddings without freezing the interface. Recommended for: local AI, large visualizations, multi-tab applications."
  },
  {
    "id": "f018",
    "category": "concurrency",
    "categoryTitle": "Workers, Concurrency & Cross-Tab Coordination",
    "name": "SharedWorker",
    "summary": "Share one worker process across same-origin tabs.",
    "advanced": "Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit.",
    "example": "Maintain one sync coordinator for several open workspaces.",
    "useCases": [
      "local AI",
      "large visualizations",
      "multi-tab applications",
      "simulation tools"
    ],
    "tags": [
      "performance",
      "browser",
      "resilience"
    ],
    "maturity": "stable",
    "tooltip": "Share one worker process across same-origin tabs. Advanced: Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit. Example: Maintain one sync coordinator for several open workspaces. Recommended for: local AI, large visualizations, multi-tab applications."
  },
  {
    "id": "f019",
    "category": "concurrency",
    "categoryTitle": "Workers, Concurrency & Cross-Tab Coordination",
    "name": "BroadcastChannel",
    "summary": "Send same-origin messages between tabs and workers.",
    "advanced": "Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit.",
    "example": "Immediately reflect a task update across open tabs.",
    "useCases": [
      "local AI",
      "large visualizations",
      "multi-tab applications",
      "simulation tools"
    ],
    "tags": [
      "performance",
      "browser",
      "resilience"
    ],
    "maturity": "stable",
    "tooltip": "Send same-origin messages between tabs and workers. Advanced: Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit. Example: Immediately reflect a task update across open tabs. Recommended for: local AI, large visualizations, multi-tab applications."
  },
  {
    "id": "f020",
    "category": "concurrency",
    "categoryTitle": "Workers, Concurrency & Cross-Tab Coordination",
    "name": "Web Locks",
    "summary": "Coordinate exclusive access to shared resources.",
    "advanced": "Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit.",
    "example": "Ensure only one tab performs a database migration.",
    "useCases": [
      "local AI",
      "large visualizations",
      "multi-tab applications",
      "simulation tools"
    ],
    "tags": [
      "performance",
      "browser",
      "resilience"
    ],
    "maturity": "stable",
    "tooltip": "Coordinate exclusive access to shared resources. Advanced: Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit. Example: Ensure only one tab performs a database migration. Recommended for: local AI, large visualizations, multi-tab applications."
  },
  {
    "id": "f021",
    "category": "concurrency",
    "categoryTitle": "Workers, Concurrency & Cross-Tab Coordination",
    "name": "MessageChannel",
    "summary": "Create direct structured message pipes between contexts.",
    "advanced": "Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit.",
    "example": "Connect a worker-based parser to a UI controller.",
    "useCases": [
      "local AI",
      "large visualizations",
      "multi-tab applications",
      "simulation tools"
    ],
    "tags": [
      "performance",
      "browser",
      "resilience"
    ],
    "maturity": "stable",
    "tooltip": "Create direct structured message pipes between contexts. Advanced: Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit. Example: Connect a worker-based parser to a UI controller. Recommended for: local AI, large visualizations, multi-tab applications."
  },
  {
    "id": "f022",
    "category": "concurrency",
    "categoryTitle": "Workers, Concurrency & Cross-Tab Coordination",
    "name": "SharedArrayBuffer + Atomics",
    "summary": "Use shared memory for high-performance parallel workloads where isolation headers permit.",
    "advanced": "Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit.",
    "example": "Parallelize a simulation kernel across workers.",
    "useCases": [
      "local AI",
      "large visualizations",
      "multi-tab applications",
      "simulation tools"
    ],
    "tags": [
      "performance",
      "browser",
      "resilience"
    ],
    "maturity": "conditional",
    "tooltip": "Use shared memory for high-performance parallel workloads where isolation headers permit. Advanced: Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit. Example: Parallelize a simulation kernel across workers. Recommended for: local AI, large visualizations, multi-tab applications."
  },
  {
    "id": "f023",
    "category": "concurrency",
    "categoryTitle": "Workers, Concurrency & Cross-Tab Coordination",
    "name": "AbortController",
    "summary": "Cancel stale network, AI and compute operations.",
    "advanced": "Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit.",
    "example": "Stop a long search when the user changes filters.",
    "useCases": [
      "local AI",
      "large visualizations",
      "multi-tab applications",
      "simulation tools"
    ],
    "tags": [
      "performance",
      "browser",
      "resilience"
    ],
    "maturity": "stable",
    "tooltip": "Cancel stale network, AI and compute operations. Advanced: Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit. Example: Stop a long search when the user changes filters. Recommended for: local AI, large visualizations, multi-tab applications."
  },
  {
    "id": "f024",
    "category": "concurrency",
    "categoryTitle": "Workers, Concurrency & Cross-Tab Coordination",
    "name": "Cooperative scheduling",
    "summary": "Yield during long tasks so the interface stays interactive.",
    "advanced": "Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit.",
    "example": "Chunk graph layout across frames.",
    "useCases": [
      "local AI",
      "large visualizations",
      "multi-tab applications",
      "simulation tools"
    ],
    "tags": [
      "performance",
      "browser",
      "resilience"
    ],
    "maturity": "stable",
    "tooltip": "Yield during long tasks so the interface stays interactive. Advanced: Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit. Example: Chunk graph layout across frames. Recommended for: local AI, large visualizations, multi-tab applications."
  },
  {
    "id": "f025",
    "category": "compute",
    "categoryTitle": "WebAssembly, WebGPU & High-Performance Compute",
    "name": "WebAssembly",
    "summary": "Compile high-performance libraries to run safely in the browser.",
    "advanced": "Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices.",
    "example": "Run SQLite, compression or scientific algorithms locally.",
    "useCases": [
      "local AI",
      "scientific computing",
      "large maps",
      "interactive simulations"
    ],
    "tags": [
      "performance",
      "gpu",
      "wasm"
    ],
    "maturity": "stable",
    "tooltip": "Compile high-performance libraries to run safely in the browser. Advanced: Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices. Example: Run SQLite, compression or scientific algorithms locally. Recommended for: local AI, scientific computing, large maps."
  },
  {
    "id": "f026",
    "category": "compute",
    "categoryTitle": "WebAssembly, WebGPU & High-Performance Compute",
    "name": "WASM SIMD",
    "summary": "Vectorized instructions for numerical workloads.",
    "advanced": "Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices.",
    "example": "Accelerate image filtering and matrix operations.",
    "useCases": [
      "local AI",
      "scientific computing",
      "large maps",
      "interactive simulations"
    ],
    "tags": [
      "performance",
      "gpu",
      "wasm"
    ],
    "maturity": "stable",
    "tooltip": "Vectorized instructions for numerical workloads. Advanced: Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices. Example: Accelerate image filtering and matrix operations. Recommended for: local AI, scientific computing, large maps."
  },
  {
    "id": "f027",
    "category": "compute",
    "categoryTitle": "WebAssembly, WebGPU & High-Performance Compute",
    "name": "WASM threads",
    "summary": "Parallelize compatible WebAssembly workloads.",
    "advanced": "Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices.",
    "example": "Speed up local simulations on multicore systems.",
    "useCases": [
      "local AI",
      "scientific computing",
      "large maps",
      "interactive simulations"
    ],
    "tags": [
      "performance",
      "gpu",
      "wasm"
    ],
    "maturity": "conditional",
    "tooltip": "Parallelize compatible WebAssembly workloads. Advanced: Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices. Example: Speed up local simulations on multicore systems. Recommended for: local AI, scientific computing, large maps."
  },
  {
    "id": "f028",
    "category": "compute",
    "categoryTitle": "WebAssembly, WebGPU & High-Performance Compute",
    "name": "WebGPU compute",
    "summary": "Use GPU compute shaders for ML, simulation and visualization.",
    "advanced": "Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices.",
    "example": "Run local LLM inference or large graph layout.",
    "useCases": [
      "local AI",
      "scientific computing",
      "large maps",
      "interactive simulations"
    ],
    "tags": [
      "performance",
      "gpu",
      "wasm"
    ],
    "maturity": "stable",
    "tooltip": "Use GPU compute shaders for ML, simulation and visualization. Advanced: Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices. Example: Run local LLM inference or large graph layout. Recommended for: local AI, scientific computing, large maps."
  },
  {
    "id": "f029",
    "category": "compute",
    "categoryTitle": "WebAssembly, WebGPU & High-Performance Compute",
    "name": "WebGL2 fallback",
    "summary": "Retain accelerated rendering on devices without WebGPU.",
    "advanced": "Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices.",
    "example": "Render network graphs when WebGPU is unavailable.",
    "useCases": [
      "local AI",
      "scientific computing",
      "large maps",
      "interactive simulations"
    ],
    "tags": [
      "performance",
      "gpu",
      "wasm"
    ],
    "maturity": "stable",
    "tooltip": "Retain accelerated rendering on devices without WebGPU. Advanced: Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices. Example: Render network graphs when WebGPU is unavailable. Recommended for: local AI, scientific computing, large maps."
  },
  {
    "id": "f030",
    "category": "compute",
    "categoryTitle": "WebAssembly, WebGPU & High-Performance Compute",
    "name": "OffscreenCanvas",
    "summary": "Render canvas graphics inside workers.",
    "advanced": "Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices.",
    "example": "Animate a large map overlay without blocking controls.",
    "useCases": [
      "local AI",
      "scientific computing",
      "large maps",
      "interactive simulations"
    ],
    "tags": [
      "performance",
      "gpu",
      "wasm"
    ],
    "maturity": "stable",
    "tooltip": "Render canvas graphics inside workers. Advanced: Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices. Example: Animate a large map overlay without blocking controls. Recommended for: local AI, scientific computing, large maps."
  },
  {
    "id": "f031",
    "category": "compute",
    "categoryTitle": "WebAssembly, WebGPU & High-Performance Compute",
    "name": "Adaptive quality",
    "summary": "Scale graphics and compute based on device capability.",
    "advanced": "Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices.",
    "example": "Reduce particle count on low-power hardware.",
    "useCases": [
      "local AI",
      "scientific computing",
      "large maps",
      "interactive simulations"
    ],
    "tags": [
      "performance",
      "gpu",
      "wasm"
    ],
    "maturity": "stable",
    "tooltip": "Scale graphics and compute based on device capability. Advanced: Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices. Example: Reduce particle count on low-power hardware. Recommended for: local AI, scientific computing, large maps."
  },
  {
    "id": "f032",
    "category": "ai",
    "categoryTitle": "Local & Hybrid AI",
    "name": "WebLLM",
    "summary": "Run compatible language models in-browser with WebGPU.",
    "advanced": "Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation.",
    "example": "Use a local model to improve a project brief without uploading it.",
    "useCases": [
      "private copilots",
      "prompt improvement",
      "research synthesis",
      "agent-assisted workflows"
    ],
    "tags": [
      "ai",
      "webllm",
      "rag"
    ],
    "maturity": "stable",
    "tooltip": "Run compatible language models in-browser with WebGPU. Advanced: Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation. Example: Use a local model to improve a project brief without uploading it. Recommended for: private copilots, prompt improvement, research synthesis."
  },
  {
    "id": "f033",
    "category": "ai",
    "categoryTitle": "Local & Hybrid AI",
    "name": "Local embeddings",
    "summary": "Generate semantic vectors on-device.",
    "advanced": "Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation.",
    "example": "Index project notes for semantic search.",
    "useCases": [
      "private copilots",
      "prompt improvement",
      "research synthesis",
      "agent-assisted workflows"
    ],
    "tags": [
      "ai",
      "webllm",
      "rag"
    ],
    "maturity": "stable",
    "tooltip": "Generate semantic vectors on-device. Advanced: Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation. Example: Index project notes for semantic search. Recommended for: private copilots, prompt improvement, research synthesis."
  },
  {
    "id": "f034",
    "category": "ai",
    "categoryTitle": "Local & Hybrid AI",
    "name": "Local RAG",
    "summary": "Retrieve relevant local material before model generation.",
    "advanced": "Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation.",
    "example": "Answer questions from an offline evidence pack.",
    "useCases": [
      "private copilots",
      "prompt improvement",
      "research synthesis",
      "agent-assisted workflows"
    ],
    "tags": [
      "ai",
      "webllm",
      "rag"
    ],
    "maturity": "stable",
    "tooltip": "Retrieve relevant local material before model generation. Advanced: Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation. Example: Answer questions from an offline evidence pack. Recommended for: private copilots, prompt improvement, research synthesis."
  },
  {
    "id": "f035",
    "category": "ai",
    "categoryTitle": "Local & Hybrid AI",
    "name": "Hybrid AI router",
    "summary": "Select local or remote inference by privacy, cost and capability.",
    "advanced": "Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation.",
    "example": "Keep confidential tasks local but send large public synthesis jobs remotely.",
    "useCases": [
      "private copilots",
      "prompt improvement",
      "research synthesis",
      "agent-assisted workflows"
    ],
    "tags": [
      "ai",
      "webllm",
      "rag"
    ],
    "maturity": "stable",
    "tooltip": "Select local or remote inference by privacy, cost and capability. Advanced: Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation. Example: Keep confidential tasks local but send large public synthesis jobs remotely. Recommended for: private copilots, prompt improvement, research synthesis."
  },
  {
    "id": "f036",
    "category": "ai",
    "categoryTitle": "Local & Hybrid AI",
    "name": "Structured outputs",
    "summary": "Require JSON/schema-shaped model responses.",
    "advanced": "Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation.",
    "example": "Generate a validated task object instead of free-form prose.",
    "useCases": [
      "private copilots",
      "prompt improvement",
      "research synthesis",
      "agent-assisted workflows"
    ],
    "tags": [
      "ai",
      "webllm",
      "rag"
    ],
    "maturity": "stable",
    "tooltip": "Require JSON/schema-shaped model responses. Advanced: Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation. Example: Generate a validated task object instead of free-form prose. Recommended for: private copilots, prompt improvement, research synthesis."
  },
  {
    "id": "f037",
    "category": "ai",
    "categoryTitle": "Local & Hybrid AI",
    "name": "AI tool calling",
    "summary": "Let a model invoke narrow application functions.",
    "advanced": "Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation.",
    "example": "Allow an assistant to query project status or create a draft task.",
    "useCases": [
      "private copilots",
      "prompt improvement",
      "research synthesis",
      "agent-assisted workflows"
    ],
    "tags": [
      "ai",
      "webllm",
      "rag"
    ],
    "maturity": "stable",
    "tooltip": "Let a model invoke narrow application functions. Advanced: Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation. Example: Allow an assistant to query project status or create a draft task. Recommended for: private copilots, prompt improvement, research synthesis."
  },
  {
    "id": "f038",
    "category": "ai",
    "categoryTitle": "Local & Hybrid AI",
    "name": "Agent planner/executor/verifier",
    "summary": "Separate planning, execution and checking into explicit stages.",
    "advanced": "Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation.",
    "example": "Draft an intervention, test assumptions, then critique the result.",
    "useCases": [
      "private copilots",
      "prompt improvement",
      "research synthesis",
      "agent-assisted workflows"
    ],
    "tags": [
      "ai",
      "webllm",
      "rag"
    ],
    "maturity": "stable",
    "tooltip": "Separate planning, execution and checking into explicit stages. Advanced: Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation. Example: Draft an intervention, test assumptions, then critique the result. Recommended for: private copilots, prompt improvement, research synthesis."
  },
  {
    "id": "f039",
    "category": "ai",
    "categoryTitle": "Local & Hybrid AI",
    "name": "AI provenance",
    "summary": "Record model, time, source context and review status.",
    "advanced": "Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation.",
    "example": "Mark a paragraph as AI-assisted and human-reviewed.",
    "useCases": [
      "private copilots",
      "prompt improvement",
      "research synthesis",
      "agent-assisted workflows"
    ],
    "tags": [
      "ai",
      "webllm",
      "rag"
    ],
    "maturity": "stable",
    "tooltip": "Record model, time, source context and review status. Advanced: Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation. Example: Mark a paragraph as AI-assisted and human-reviewed. Recommended for: private copilots, prompt improvement, research synthesis."
  },
  {
    "id": "f040",
    "category": "ai",
    "categoryTitle": "Local & Hybrid AI",
    "name": "Context budgeting",
    "summary": "Select and compress relevant context instead of sending everything.",
    "advanced": "Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation.",
    "example": "Summarize old room history before an AI call.",
    "useCases": [
      "private copilots",
      "prompt improvement",
      "research synthesis",
      "agent-assisted workflows"
    ],
    "tags": [
      "ai",
      "webllm",
      "rag"
    ],
    "maturity": "stable",
    "tooltip": "Select and compress relevant context instead of sending everything. Advanced: Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation. Example: Summarize old room history before an AI call. Recommended for: private copilots, prompt improvement, research synthesis."
  },
  {
    "id": "f041",
    "category": "ai",
    "categoryTitle": "Local & Hybrid AI",
    "name": "Model capability registry",
    "summary": "Track model size, memory needs, tools and strengths.",
    "advanced": "Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation.",
    "example": "Offer a smaller model when GPU memory is limited.",
    "useCases": [
      "private copilots",
      "prompt improvement",
      "research synthesis",
      "agent-assisted workflows"
    ],
    "tags": [
      "ai",
      "webllm",
      "rag"
    ],
    "maturity": "stable",
    "tooltip": "Track model size, memory needs, tools and strengths. Advanced: Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation. Example: Offer a smaller model when GPU memory is limited. Recommended for: private copilots, prompt improvement, research synthesis."
  },
  {
    "id": "f042",
    "category": "network",
    "categoryTitle": "Realtime Multiplayer Networking",
    "name": "WebRTC DataChannels",
    "summary": "Direct encrypted browser-to-browser data transport.",
    "advanced": "Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic.",
    "example": "Synchronize cursor and board updates peer-to-peer.",
    "useCases": [
      "multiplayer workspaces",
      "shared maps",
      "live games",
      "remote workshops"
    ],
    "tags": [
      "multiplayer",
      "realtime",
      "network"
    ],
    "maturity": "stable",
    "tooltip": "Direct encrypted browser-to-browser data transport. Advanced: Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic. Example: Synchronize cursor and board updates peer-to-peer. Recommended for: multiplayer workspaces, shared maps, live games."
  },
  {
    "id": "f043",
    "category": "network",
    "categoryTitle": "Realtime Multiplayer Networking",
    "name": "Trystero peer discovery",
    "summary": "Abstract signaling and direct WebRTC room formation.",
    "advanced": "Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic.",
    "example": "Create decentralized collaboration rooms using a shared app and room ID.",
    "useCases": [
      "multiplayer workspaces",
      "shared maps",
      "live games",
      "remote workshops"
    ],
    "tags": [
      "multiplayer",
      "realtime",
      "network"
    ],
    "maturity": "stable",
    "tooltip": "Abstract signaling and direct WebRTC room formation. Advanced: Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic. Example: Create decentralized collaboration rooms using a shared app and room ID. Recommended for: multiplayer workspaces, shared maps, live games."
  },
  {
    "id": "f044",
    "category": "network",
    "categoryTitle": "Realtime Multiplayer Networking",
    "name": "WebSockets",
    "summary": "Persistent bidirectional client/server communication.",
    "advanced": "Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic.",
    "example": "Connect users to an authoritative project room.",
    "useCases": [
      "multiplayer workspaces",
      "shared maps",
      "live games",
      "remote workshops"
    ],
    "tags": [
      "multiplayer",
      "realtime",
      "network"
    ],
    "maturity": "stable",
    "tooltip": "Persistent bidirectional client/server communication. Advanced: Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic. Example: Connect users to an authoritative project room. Recommended for: multiplayer workspaces, shared maps, live games."
  },
  {
    "id": "f045",
    "category": "network",
    "categoryTitle": "Realtime Multiplayer Networking",
    "name": "WebTransport",
    "summary": "HTTP/3-based streams and datagrams for advanced client/server realtime traffic.",
    "advanced": "Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic.",
    "example": "Send reliable state streams and low-latency transient updates.",
    "useCases": [
      "multiplayer workspaces",
      "shared maps",
      "live games",
      "remote workshops"
    ],
    "tags": [
      "multiplayer",
      "realtime",
      "network"
    ],
    "maturity": "emerging",
    "tooltip": "HTTP/3-based streams and datagrams for advanced client/server realtime traffic. Advanced: Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic. Example: Send reliable state streams and low-latency transient updates. Recommended for: multiplayer workspaces, shared maps, live games."
  },
  {
    "id": "f046",
    "category": "network",
    "categoryTitle": "Realtime Multiplayer Networking",
    "name": "Transport abstraction",
    "summary": "Expose one message interface over multiple transports.",
    "advanced": "Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic.",
    "example": "Fallback from WebRTC to WebSocket without changing project code.",
    "useCases": [
      "multiplayer workspaces",
      "shared maps",
      "live games",
      "remote workshops"
    ],
    "tags": [
      "multiplayer",
      "realtime",
      "network"
    ],
    "maturity": "stable",
    "tooltip": "Expose one message interface over multiple transports. Advanced: Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic. Example: Fallback from WebRTC to WebSocket without changing project code. Recommended for: multiplayer workspaces, shared maps, live games."
  },
  {
    "id": "f047",
    "category": "network",
    "categoryTitle": "Realtime Multiplayer Networking",
    "name": "TURN fallback",
    "summary": "Relay WebRTC when direct NAT traversal fails.",
    "advanced": "Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic.",
    "example": "Keep collaboration working on restrictive enterprise networks.",
    "useCases": [
      "multiplayer workspaces",
      "shared maps",
      "live games",
      "remote workshops"
    ],
    "tags": [
      "multiplayer",
      "realtime",
      "network"
    ],
    "maturity": "stable",
    "tooltip": "Relay WebRTC when direct NAT traversal fails. Advanced: Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic. Example: Keep collaboration working on restrictive enterprise networks. Recommended for: multiplayer workspaces, shared maps, live games."
  },
  {
    "id": "f048",
    "category": "network",
    "categoryTitle": "Realtime Multiplayer Networking",
    "name": "Adaptive update rate",
    "summary": "Reduce synchronization frequency under poor network conditions.",
    "advanced": "Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic.",
    "example": "Lower cursor update rate on high latency links.",
    "useCases": [
      "multiplayer workspaces",
      "shared maps",
      "live games",
      "remote workshops"
    ],
    "tags": [
      "multiplayer",
      "realtime",
      "network"
    ],
    "maturity": "stable",
    "tooltip": "Reduce synchronization frequency under poor network conditions. Advanced: Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic. Example: Lower cursor update rate on high latency links. Recommended for: multiplayer workspaces, shared maps, live games."
  },
  {
    "id": "f049",
    "category": "network",
    "categoryTitle": "Realtime Multiplayer Networking",
    "name": "Late-join snapshots",
    "summary": "Send current room state to newcomers.",
    "advanced": "Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic.",
    "example": "A participant joining later immediately sees existing tasks.",
    "useCases": [
      "multiplayer workspaces",
      "shared maps",
      "live games",
      "remote workshops"
    ],
    "tags": [
      "multiplayer",
      "realtime",
      "network"
    ],
    "maturity": "stable",
    "tooltip": "Send current room state to newcomers. Advanced: Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic. Example: A participant joining later immediately sees existing tasks. Recommended for: multiplayer workspaces, shared maps, live games."
  },
  {
    "id": "f050",
    "category": "network",
    "categoryTitle": "Realtime Multiplayer Networking",
    "name": "Protocol negotiation",
    "summary": "Negotiate versions and supported capabilities.",
    "advanced": "Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic.",
    "example": "Prevent an older client from applying an unknown event type.",
    "useCases": [
      "multiplayer workspaces",
      "shared maps",
      "live games",
      "remote workshops"
    ],
    "tags": [
      "multiplayer",
      "realtime",
      "network"
    ],
    "maturity": "stable",
    "tooltip": "Negotiate versions and supported capabilities. Advanced: Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic. Example: Prevent an older client from applying an unknown event type. Recommended for: multiplayer workspaces, shared maps, live games."
  },
  {
    "id": "f051",
    "category": "authority",
    "categoryTitle": "Authoritative Coordination & Room Services",
    "name": "Authoritative room state",
    "summary": "Maintain canonical state for critical shared objects.",
    "advanced": "Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful.",
    "example": "Reject invalid score changes or permission escalation.",
    "useCases": [
      "public multiplayer",
      "institutional collaboration",
      "authoritative games",
      "large rooms"
    ],
    "tags": [
      "server",
      "multiplayer",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Maintain canonical state for critical shared objects. Advanced: Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful. Example: Reject invalid score changes or permission escalation. Recommended for: public multiplayer, institutional collaboration, authoritative games."
  },
  {
    "id": "f052",
    "category": "authority",
    "categoryTitle": "Authoritative Coordination & Room Services",
    "name": "Durable room coordinator",
    "summary": "Assign a stateful server object per room or project.",
    "advanced": "Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful.",
    "example": "Keep room membership and event sequence available while clients disconnect.",
    "useCases": [
      "public multiplayer",
      "institutional collaboration",
      "authoritative games",
      "large rooms"
    ],
    "tags": [
      "server",
      "multiplayer",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Assign a stateful server object per room or project. Advanced: Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful. Example: Keep room membership and event sequence available while clients disconnect. Recommended for: public multiplayer, institutional collaboration, authoritative games."
  },
  {
    "id": "f053",
    "category": "authority",
    "categoryTitle": "Authoritative Coordination & Room Services",
    "name": "Lobby and waiting room",
    "summary": "Control admission before participants enter an active room.",
    "advanced": "Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful.",
    "example": "Approve workshop participants before they access shared material.",
    "useCases": [
      "public multiplayer",
      "institutional collaboration",
      "authoritative games",
      "large rooms"
    ],
    "tags": [
      "server",
      "multiplayer",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Control admission before participants enter an active room. Advanced: Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful. Example: Approve workshop participants before they access shared material. Recommended for: public multiplayer, institutional collaboration, authoritative games."
  },
  {
    "id": "f054",
    "category": "authority",
    "categoryTitle": "Authoritative Coordination & Room Services",
    "name": "Server validation",
    "summary": "Revalidate client-submitted actions.",
    "advanced": "Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful.",
    "example": "Ensure a contributor can only edit allowed project fields.",
    "useCases": [
      "public multiplayer",
      "institutional collaboration",
      "authoritative games",
      "large rooms"
    ],
    "tags": [
      "server",
      "multiplayer",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Revalidate client-submitted actions. Advanced: Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful. Example: Ensure a contributor can only edit allowed project fields. Recommended for: public multiplayer, institutional collaboration, authoritative games."
  },
  {
    "id": "f055",
    "category": "authority",
    "categoryTitle": "Authoritative Coordination & Room Services",
    "name": "Session resumption",
    "summary": "Reconnect without rebuilding the entire session.",
    "advanced": "Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful.",
    "example": "Restore a dropped participant to the same room state.",
    "useCases": [
      "public multiplayer",
      "institutional collaboration",
      "authoritative games",
      "large rooms"
    ],
    "tags": [
      "server",
      "multiplayer",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Reconnect without rebuilding the entire session. Advanced: Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful. Example: Restore a dropped participant to the same room state. Recommended for: public multiplayer, institutional collaboration, authoritative games."
  },
  {
    "id": "f056",
    "category": "authority",
    "categoryTitle": "Authoritative Coordination & Room Services",
    "name": "Idempotency keys",
    "summary": "Prevent retries from duplicating actions.",
    "advanced": "Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful.",
    "example": "Retry task creation safely after a network timeout.",
    "useCases": [
      "public multiplayer",
      "institutional collaboration",
      "authoritative games",
      "large rooms"
    ],
    "tags": [
      "server",
      "multiplayer",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Prevent retries from duplicating actions. Advanced: Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful. Example: Retry task creation safely after a network timeout. Recommended for: public multiplayer, institutional collaboration, authoritative games."
  },
  {
    "id": "f057",
    "category": "authority",
    "categoryTitle": "Authoritative Coordination & Room Services",
    "name": "Leader election",
    "summary": "Choose a temporary coordinator when no authority server exists.",
    "advanced": "Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful.",
    "example": "Select a peer to supply snapshots to newcomers.",
    "useCases": [
      "public multiplayer",
      "institutional collaboration",
      "authoritative games",
      "large rooms"
    ],
    "tags": [
      "server",
      "multiplayer",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Choose a temporary coordinator when no authority server exists. Advanced: Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful. Example: Select a peer to supply snapshots to newcomers. Recommended for: public multiplayer, institutional collaboration, authoritative games."
  },
  {
    "id": "f058",
    "category": "authority",
    "categoryTitle": "Authoritative Coordination & Room Services",
    "name": "Presence service",
    "summary": "Maintain ephemeral online/away status separately from durable data.",
    "advanced": "Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful.",
    "example": "Show who is actively reviewing a document.",
    "useCases": [
      "public multiplayer",
      "institutional collaboration",
      "authoritative games",
      "large rooms"
    ],
    "tags": [
      "server",
      "multiplayer",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Maintain ephemeral online/away status separately from durable data. Advanced: Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful. Example: Show who is actively reviewing a document. Recommended for: public multiplayer, institutional collaboration, authoritative games."
  },
  {
    "id": "f059",
    "category": "decentralized",
    "categoryTitle": "Decentralized & Federated Systems",
    "name": "Federated instances",
    "summary": "Let independent deployments exchange compatible objects.",
    "advanced": "Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy.",
    "example": "A university instance shares approved projects with a community instance.",
    "useCases": [
      "community-owned infrastructure",
      "resilient archives",
      "multi-instance commons",
      "peer discovery"
    ],
    "tags": [
      "decentralized",
      "federation",
      "p2p"
    ],
    "maturity": "stable",
    "tooltip": "Let independent deployments exchange compatible objects. Advanced: Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy. Example: A university instance shares approved projects with a community instance. Recommended for: community-owned infrastructure, resilient archives, multi-instance commons."
  },
  {
    "id": "f060",
    "category": "decentralized",
    "categoryTitle": "Decentralized & Federated Systems",
    "name": "Gossip replication",
    "summary": "Spread updates through peers rather than a central broadcaster.",
    "advanced": "Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy.",
    "example": "Distribute low-priority knowledge updates across nodes.",
    "useCases": [
      "community-owned infrastructure",
      "resilient archives",
      "multi-instance commons",
      "peer discovery"
    ],
    "tags": [
      "decentralized",
      "federation",
      "p2p"
    ],
    "maturity": "stable",
    "tooltip": "Spread updates through peers rather than a central broadcaster. Advanced: Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy. Example: Distribute low-priority knowledge updates across nodes. Recommended for: community-owned infrastructure, resilient archives, multi-instance commons."
  },
  {
    "id": "f061",
    "category": "decentralized",
    "categoryTitle": "Decentralized & Federated Systems",
    "name": "Merkle trees/DAGs",
    "summary": "Verify large object sets and identify changed branches efficiently.",
    "advanced": "Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy.",
    "example": "Compare two knowledge packs without hashing every file repeatedly.",
    "useCases": [
      "community-owned infrastructure",
      "resilient archives",
      "multi-instance commons",
      "peer discovery"
    ],
    "tags": [
      "decentralized",
      "federation",
      "p2p"
    ],
    "maturity": "stable",
    "tooltip": "Verify large object sets and identify changed branches efficiently. Advanced: Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy. Example: Compare two knowledge packs without hashing every file repeatedly. Recommended for: community-owned infrastructure, resilient archives, multi-instance commons."
  },
  {
    "id": "f062",
    "category": "decentralized",
    "categoryTitle": "Decentralized & Federated Systems",
    "name": "Signed event logs",
    "summary": "Cryptographically sign authored events.",
    "advanced": "Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy.",
    "example": "Verify that a project approval event came from an authorized key.",
    "useCases": [
      "community-owned infrastructure",
      "resilient archives",
      "multi-instance commons",
      "peer discovery"
    ],
    "tags": [
      "decentralized",
      "federation",
      "p2p"
    ],
    "maturity": "stable",
    "tooltip": "Cryptographically sign authored events. Advanced: Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy. Example: Verify that a project approval event came from an authorized key. Recommended for: community-owned infrastructure, resilient archives, multi-instance commons."
  },
  {
    "id": "f063",
    "category": "decentralized",
    "categoryTitle": "Decentralized & Federated Systems",
    "name": "Selective replication",
    "summary": "Replicate only data relevant to a node or user.",
    "advanced": "Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy.",
    "example": "A regional node downloads local projects, not the entire global archive.",
    "useCases": [
      "community-owned infrastructure",
      "resilient archives",
      "multi-instance commons",
      "peer discovery"
    ],
    "tags": [
      "decentralized",
      "federation",
      "p2p"
    ],
    "maturity": "stable",
    "tooltip": "Replicate only data relevant to a node or user. Advanced: Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy. Example: A regional node downloads local projects, not the entire global archive. Recommended for: community-owned infrastructure, resilient archives, multi-instance commons."
  },
  {
    "id": "f064",
    "category": "decentralized",
    "categoryTitle": "Decentralized & Federated Systems",
    "name": "IPFS/IPNS adapters",
    "summary": "Publish content-addressed artifacts through decentralized storage.",
    "advanced": "Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy.",
    "example": "Publish a versioned public evidence bundle.",
    "useCases": [
      "community-owned infrastructure",
      "resilient archives",
      "multi-instance commons",
      "peer discovery"
    ],
    "tags": [
      "decentralized",
      "federation",
      "p2p"
    ],
    "maturity": "stable",
    "tooltip": "Publish content-addressed artifacts through decentralized storage. Advanced: Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy. Example: Publish a versioned public evidence bundle. Recommended for: community-owned infrastructure, resilient archives, multi-instance commons."
  },
  {
    "id": "f065",
    "category": "decentralized",
    "categoryTitle": "Decentralized & Federated Systems",
    "name": "Nostr adapters",
    "summary": "Use Nostr-compatible relays for selected discovery or messaging workflows.",
    "advanced": "Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy.",
    "example": "Discover peers without owning a signaling server.",
    "useCases": [
      "community-owned infrastructure",
      "resilient archives",
      "multi-instance commons",
      "peer discovery"
    ],
    "tags": [
      "decentralized",
      "federation",
      "p2p"
    ],
    "maturity": "stable",
    "tooltip": "Use Nostr-compatible relays for selected discovery or messaging workflows. Advanced: Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy. Example: Discover peers without owning a signaling server. Recommended for: community-owned infrastructure, resilient archives, multi-instance commons."
  },
  {
    "id": "f066",
    "category": "decentralized",
    "categoryTitle": "Decentralized & Federated Systems",
    "name": "Portable node bundles",
    "summary": "Package a node snapshot for offline transfer or redeployment.",
    "advanced": "Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy.",
    "example": "Seed a remote community installation from removable media.",
    "useCases": [
      "community-owned infrastructure",
      "resilient archives",
      "multi-instance commons",
      "peer discovery"
    ],
    "tags": [
      "decentralized",
      "federation",
      "p2p"
    ],
    "maturity": "stable",
    "tooltip": "Package a node snapshot for offline transfer or redeployment. Advanced: Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy. Example: Seed a remote community installation from removable media. Recommended for: community-owned infrastructure, resilient archives, multi-instance commons."
  },
  {
    "id": "f067",
    "category": "security",
    "categoryTitle": "Security Engineering",
    "name": "Content Security Policy",
    "summary": "Restrict executable and network content sources.",
    "advanced": "Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes.",
    "example": "Block unexpected third-party scripts from running.",
    "useCases": [
      "public web apps",
      "institutional deployments",
      "plugin systems",
      "AI-assisted applications"
    ],
    "tags": [
      "security",
      "integrity",
      "privacy"
    ],
    "maturity": "stable",
    "tooltip": "Restrict executable and network content sources. Advanced: Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes. Example: Block unexpected third-party scripts from running. Recommended for: public web apps, institutional deployments, plugin systems."
  },
  {
    "id": "f068",
    "category": "security",
    "categoryTitle": "Security Engineering",
    "name": "Trusted Types",
    "summary": "Constrain dangerous DOM injection sinks.",
    "advanced": "Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes.",
    "example": "Require vetted HTML creation policies.",
    "useCases": [
      "public web apps",
      "institutional deployments",
      "plugin systems",
      "AI-assisted applications"
    ],
    "tags": [
      "security",
      "integrity",
      "privacy"
    ],
    "maturity": "stable",
    "tooltip": "Constrain dangerous DOM injection sinks. Advanced: Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes. Example: Require vetted HTML creation policies. Recommended for: public web apps, institutional deployments, plugin systems."
  },
  {
    "id": "f069",
    "category": "security",
    "categoryTitle": "Security Engineering",
    "name": "Subresource Integrity",
    "summary": "Pin expected hashes for external static resources where feasible.",
    "advanced": "Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes.",
    "example": "Detect a modified third-party script.",
    "useCases": [
      "public web apps",
      "institutional deployments",
      "plugin systems",
      "AI-assisted applications"
    ],
    "tags": [
      "security",
      "integrity",
      "privacy"
    ],
    "maturity": "stable",
    "tooltip": "Pin expected hashes for external static resources where feasible. Advanced: Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes. Example: Detect a modified third-party script. Recommended for: public web apps, institutional deployments, plugin systems."
  },
  {
    "id": "f070",
    "category": "security",
    "categoryTitle": "Security Engineering",
    "name": "Web Crypto",
    "summary": "Use standardized browser cryptographic primitives.",
    "advanced": "Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes.",
    "example": "Sign an export or derive an encryption key.",
    "useCases": [
      "public web apps",
      "institutional deployments",
      "plugin systems",
      "AI-assisted applications"
    ],
    "tags": [
      "security",
      "integrity",
      "privacy"
    ],
    "maturity": "stable",
    "tooltip": "Use standardized browser cryptographic primitives. Advanced: Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes. Example: Sign an export or derive an encryption key. Recommended for: public web apps, institutional deployments, plugin systems."
  },
  {
    "id": "f071",
    "category": "security",
    "categoryTitle": "Security Engineering",
    "name": "Signed manifests",
    "summary": "Describe and sign bundle contents and hashes.",
    "advanced": "Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes.",
    "example": "Verify that a release package has not changed.",
    "useCases": [
      "public web apps",
      "institutional deployments",
      "plugin systems",
      "AI-assisted applications"
    ],
    "tags": [
      "security",
      "integrity",
      "privacy"
    ],
    "maturity": "stable",
    "tooltip": "Describe and sign bundle contents and hashes. Advanced: Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes. Example: Verify that a release package has not changed. Recommended for: public web apps, institutional deployments, plugin systems."
  },
  {
    "id": "f072",
    "category": "security",
    "categoryTitle": "Security Engineering",
    "name": "Input/schema validation",
    "summary": "Reject malformed imported or network data.",
    "advanced": "Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes.",
    "example": "Validate project JSON before saving it.",
    "useCases": [
      "public web apps",
      "institutional deployments",
      "plugin systems",
      "AI-assisted applications"
    ],
    "tags": [
      "security",
      "integrity",
      "privacy"
    ],
    "maturity": "stable",
    "tooltip": "Reject malformed imported or network data. Advanced: Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes. Example: Validate project JSON before saving it. Recommended for: public web apps, institutional deployments, plugin systems."
  },
  {
    "id": "f073",
    "category": "security",
    "categoryTitle": "Security Engineering",
    "name": "Sanitized rendering",
    "summary": "Render untrusted content without script execution.",
    "advanced": "Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes.",
    "example": "Display user Markdown safely.",
    "useCases": [
      "public web apps",
      "institutional deployments",
      "plugin systems",
      "AI-assisted applications"
    ],
    "tags": [
      "security",
      "integrity",
      "privacy"
    ],
    "maturity": "stable",
    "tooltip": "Render untrusted content without script execution. Advanced: Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes. Example: Display user Markdown safely. Recommended for: public web apps, institutional deployments, plugin systems."
  },
  {
    "id": "f074",
    "category": "security",
    "categoryTitle": "Security Engineering",
    "name": "Capability-based permissions",
    "summary": "Grant narrowly scoped actions rather than broad admin authority.",
    "advanced": "Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes.",
    "example": "Allow a plugin to read tasks but not identities.",
    "useCases": [
      "public web apps",
      "institutional deployments",
      "plugin systems",
      "AI-assisted applications"
    ],
    "tags": [
      "security",
      "integrity",
      "privacy"
    ],
    "maturity": "stable",
    "tooltip": "Grant narrowly scoped actions rather than broad admin authority. Advanced: Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes. Example: Allow a plugin to read tasks but not identities. Recommended for: public web apps, institutional deployments, plugin systems."
  },
  {
    "id": "f075",
    "category": "security",
    "categoryTitle": "Security Engineering",
    "name": "Secret isolation",
    "summary": "Keep server keys out of client bundles and source control.",
    "advanced": "Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes.",
    "example": "Call privileged APIs through a server-side proxy.",
    "useCases": [
      "public web apps",
      "institutional deployments",
      "plugin systems",
      "AI-assisted applications"
    ],
    "tags": [
      "security",
      "integrity",
      "privacy"
    ],
    "maturity": "stable",
    "tooltip": "Keep server keys out of client bundles and source control. Advanced: Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes. Example: Call privileged APIs through a server-side proxy. Recommended for: public web apps, institutional deployments, plugin systems."
  },
  {
    "id": "f076",
    "category": "security",
    "categoryTitle": "Security Engineering",
    "name": "Security headers",
    "summary": "Use HSTS, frame policy and MIME protections where host supports them.",
    "advanced": "Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes.",
    "example": "Reduce browser-side attack surface.",
    "useCases": [
      "public web apps",
      "institutional deployments",
      "plugin systems",
      "AI-assisted applications"
    ],
    "tags": [
      "security",
      "integrity",
      "privacy"
    ],
    "maturity": "stable",
    "tooltip": "Use HSTS, frame policy and MIME protections where host supports them. Advanced: Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes. Example: Reduce browser-side attack surface. Recommended for: public web apps, institutional deployments, plugin systems."
  },
  {
    "id": "f077",
    "category": "identity",
    "categoryTitle": "Identity, Authentication & Authorization",
    "name": "Passkeys/WebAuthn",
    "summary": "Passwordless public-key authentication.",
    "advanced": "Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity.",
    "example": "Sign into an institutional workspace with a platform authenticator.",
    "useCases": [
      "public communities",
      "enterprise collaboration",
      "moderated spaces",
      "sensitive projects"
    ],
    "tags": [
      "identity",
      "auth",
      "trust"
    ],
    "maturity": "stable",
    "tooltip": "Passwordless public-key authentication. Advanced: Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity. Example: Sign into an institutional workspace with a platform authenticator. Recommended for: public communities, enterprise collaboration, moderated spaces."
  },
  {
    "id": "f078",
    "category": "identity",
    "categoryTitle": "Identity, Authentication & Authorization",
    "name": "Guest/pseudonymous identity",
    "summary": "Participate without exposing legal identity where appropriate.",
    "advanced": "Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity.",
    "example": "Join a public brainstorming room using a persistent pseudonym.",
    "useCases": [
      "public communities",
      "enterprise collaboration",
      "moderated spaces",
      "sensitive projects"
    ],
    "tags": [
      "identity",
      "auth",
      "trust"
    ],
    "maturity": "stable",
    "tooltip": "Participate without exposing legal identity where appropriate. Advanced: Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity. Example: Join a public brainstorming room using a persistent pseudonym. Recommended for: public communities, enterprise collaboration, moderated spaces."
  },
  {
    "id": "f079",
    "category": "identity",
    "categoryTitle": "Identity, Authentication & Authorization",
    "name": "RBAC",
    "summary": "Role-based access control.",
    "advanced": "Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity.",
    "example": "Give reviewers approval rights and contributors edit rights.",
    "useCases": [
      "public communities",
      "enterprise collaboration",
      "moderated spaces",
      "sensitive projects"
    ],
    "tags": [
      "identity",
      "auth",
      "trust"
    ],
    "maturity": "stable",
    "tooltip": "Role-based access control. Advanced: Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity. Example: Give reviewers approval rights and contributors edit rights. Recommended for: public communities, enterprise collaboration, moderated spaces."
  },
  {
    "id": "f080",
    "category": "identity",
    "categoryTitle": "Identity, Authentication & Authorization",
    "name": "ABAC",
    "summary": "Attribute-based access control using context and attributes.",
    "advanced": "Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity.",
    "example": "Allow regional coordinators to edit only projects in their region.",
    "useCases": [
      "public communities",
      "enterprise collaboration",
      "moderated spaces",
      "sensitive projects"
    ],
    "tags": [
      "identity",
      "auth",
      "trust"
    ],
    "maturity": "stable",
    "tooltip": "Attribute-based access control using context and attributes. Advanced: Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity. Example: Allow regional coordinators to edit only projects in their region. Recommended for: public communities, enterprise collaboration, moderated spaces."
  },
  {
    "id": "f081",
    "category": "identity",
    "categoryTitle": "Identity, Authentication & Authorization",
    "name": "Object-level ACLs",
    "summary": "Permissions on individual records.",
    "advanced": "Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity.",
    "example": "Keep one project private inside a public organization workspace.",
    "useCases": [
      "public communities",
      "enterprise collaboration",
      "moderated spaces",
      "sensitive projects"
    ],
    "tags": [
      "identity",
      "auth",
      "trust"
    ],
    "maturity": "stable",
    "tooltip": "Permissions on individual records. Advanced: Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity. Example: Keep one project private inside a public organization workspace. Recommended for: public communities, enterprise collaboration, moderated spaces."
  },
  {
    "id": "f082",
    "category": "identity",
    "categoryTitle": "Identity, Authentication & Authorization",
    "name": "Delegated capabilities",
    "summary": "Grant narrow, revocable permissions.",
    "advanced": "Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity.",
    "example": "Allow an automation to publish status but not delete projects.",
    "useCases": [
      "public communities",
      "enterprise collaboration",
      "moderated spaces",
      "sensitive projects"
    ],
    "tags": [
      "identity",
      "auth",
      "trust"
    ],
    "maturity": "stable",
    "tooltip": "Grant narrow, revocable permissions. Advanced: Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity. Example: Allow an automation to publish status but not delete projects. Recommended for: public communities, enterprise collaboration, moderated spaces."
  },
  {
    "id": "f083",
    "category": "identity",
    "categoryTitle": "Identity, Authentication & Authorization",
    "name": "Session management",
    "summary": "Inspect, expire and revoke sessions.",
    "advanced": "Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity.",
    "example": "Sign out a lost device remotely.",
    "useCases": [
      "public communities",
      "enterprise collaboration",
      "moderated spaces",
      "sensitive projects"
    ],
    "tags": [
      "identity",
      "auth",
      "trust"
    ],
    "maturity": "stable",
    "tooltip": "Inspect, expire and revoke sessions. Advanced: Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity. Example: Sign out a lost device remotely. Recommended for: public communities, enterprise collaboration, moderated spaces."
  },
  {
    "id": "f084",
    "category": "identity",
    "categoryTitle": "Identity, Authentication & Authorization",
    "name": "Identity assurance levels",
    "summary": "Track how strongly an identity has been verified.",
    "advanced": "Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity.",
    "example": "Distinguish self-declared expertise from verified organization membership.",
    "useCases": [
      "public communities",
      "enterprise collaboration",
      "moderated spaces",
      "sensitive projects"
    ],
    "tags": [
      "identity",
      "auth",
      "trust"
    ],
    "maturity": "stable",
    "tooltip": "Track how strongly an identity has been verified. Advanced: Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity. Example: Distinguish self-declared expertise from verified organization membership. Recommended for: public communities, enterprise collaboration, moderated spaces."
  },
  {
    "id": "f085",
    "category": "privacy",
    "categoryTitle": "Privacy & Data Sovereignty",
    "name": "Local-only mode",
    "summary": "Disable network transmission for selected work.",
    "advanced": "Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data.",
    "example": "Draft a sensitive project before sharing it.",
    "useCases": [
      "community platforms",
      "field tools",
      "research collaboration",
      "privacy-sensitive users"
    ],
    "tags": [
      "privacy",
      "sovereignty",
      "consent"
    ],
    "maturity": "stable",
    "tooltip": "Disable network transmission for selected work. Advanced: Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data. Example: Draft a sensitive project before sharing it. Recommended for: community platforms, field tools, research collaboration."
  },
  {
    "id": "f086",
    "category": "privacy",
    "categoryTitle": "Privacy & Data Sovereignty",
    "name": "Network kill switch",
    "summary": "Stop optional network connections.",
    "advanced": "Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data.",
    "example": "Demonstrate exactly what still works offline.",
    "useCases": [
      "community platforms",
      "field tools",
      "research collaboration",
      "privacy-sensitive users"
    ],
    "tags": [
      "privacy",
      "sovereignty",
      "consent"
    ],
    "maturity": "stable",
    "tooltip": "Stop optional network connections. Advanced: Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data. Example: Demonstrate exactly what still works offline. Recommended for: community platforms, field tools, research collaboration."
  },
  {
    "id": "f087",
    "category": "privacy",
    "categoryTitle": "Privacy & Data Sovereignty",
    "name": "Per-object visibility",
    "summary": "Set records as private, team, organization or public.",
    "advanced": "Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data.",
    "example": "Share a dataset only with an approved research group.",
    "useCases": [
      "community platforms",
      "field tools",
      "research collaboration",
      "privacy-sensitive users"
    ],
    "tags": [
      "privacy",
      "sovereignty",
      "consent"
    ],
    "maturity": "stable",
    "tooltip": "Set records as private, team, organization or public. Advanced: Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data. Example: Share a dataset only with an approved research group. Recommended for: community platforms, field tools, research collaboration."
  },
  {
    "id": "f088",
    "category": "privacy",
    "categoryTitle": "Privacy & Data Sovereignty",
    "name": "Client-side encryption",
    "summary": "Encrypt content before sending to storage.",
    "advanced": "Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data.",
    "example": "Store private notes on a remote object store in encrypted form.",
    "useCases": [
      "community platforms",
      "field tools",
      "research collaboration",
      "privacy-sensitive users"
    ],
    "tags": [
      "privacy",
      "sovereignty",
      "consent"
    ],
    "maturity": "stable",
    "tooltip": "Encrypt content before sending to storage. Advanced: Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data. Example: Store private notes on a remote object store in encrypted form. Recommended for: community platforms, field tools, research collaboration."
  },
  {
    "id": "f089",
    "category": "privacy",
    "categoryTitle": "Privacy & Data Sovereignty",
    "name": "Data inventory dashboard",
    "summary": "Show what information the application stores.",
    "advanced": "Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data.",
    "example": "List local databases, cached files and remote profile data.",
    "useCases": [
      "community platforms",
      "field tools",
      "research collaboration",
      "privacy-sensitive users"
    ],
    "tags": [
      "privacy",
      "sovereignty",
      "consent"
    ],
    "maturity": "stable",
    "tooltip": "Show what information the application stores. Advanced: Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data. Example: List local databases, cached files and remote profile data. Recommended for: community platforms, field tools, research collaboration."
  },
  {
    "id": "f090",
    "category": "privacy",
    "categoryTitle": "Privacy & Data Sovereignty",
    "name": "Selective deletion",
    "summary": "Delete chosen data categories without resetting everything.",
    "advanced": "Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data.",
    "example": "Remove chat history while retaining project artifacts.",
    "useCases": [
      "community platforms",
      "field tools",
      "research collaboration",
      "privacy-sensitive users"
    ],
    "tags": [
      "privacy",
      "sovereignty",
      "consent"
    ],
    "maturity": "stable",
    "tooltip": "Delete chosen data categories without resetting everything. Advanced: Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data. Example: Remove chat history while retaining project artifacts. Recommended for: community platforms, field tools, research collaboration."
  },
  {
    "id": "f091",
    "category": "privacy",
    "categoryTitle": "Privacy & Data Sovereignty",
    "name": "Portable export",
    "summary": "Download user-controlled data in open formats.",
    "advanced": "Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data.",
    "example": "Move a contributor profile and authored projects to another instance.",
    "useCases": [
      "community platforms",
      "field tools",
      "research collaboration",
      "privacy-sensitive users"
    ],
    "tags": [
      "privacy",
      "sovereignty",
      "consent"
    ],
    "maturity": "stable",
    "tooltip": "Download user-controlled data in open formats. Advanced: Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data. Example: Move a contributor profile and authored projects to another instance. Recommended for: community platforms, field tools, research collaboration."
  },
  {
    "id": "f092",
    "category": "privacy",
    "categoryTitle": "Privacy & Data Sovereignty",
    "name": "Location minimization",
    "summary": "Reduce precision unless exact location is necessary.",
    "advanced": "Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data.",
    "example": "Show a contributor region rather than home coordinates.",
    "useCases": [
      "community platforms",
      "field tools",
      "research collaboration",
      "privacy-sensitive users"
    ],
    "tags": [
      "privacy",
      "sovereignty",
      "consent"
    ],
    "maturity": "stable",
    "tooltip": "Reduce precision unless exact location is necessary. Advanced: Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data. Example: Show a contributor region rather than home coordinates. Recommended for: community platforms, field tools, research collaboration."
  },
  {
    "id": "f093",
    "category": "files",
    "categoryTitle": "File & OS Integration",
    "name": "File System Access API",
    "summary": "Open and save user-selected local files directly where supported.",
    "advanced": "Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist.",
    "example": "Edit a GeoJSON file and save it back.",
    "useCases": [
      "PWA tools",
      "data analysis",
      "field applications",
      "documentation systems"
    ],
    "tags": [
      "files",
      "browser",
      "ux"
    ],
    "maturity": "stable",
    "tooltip": "Open and save user-selected local files directly where supported. Advanced: Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist. Example: Edit a GeoJSON file and save it back. Recommended for: PWA tools, data analysis, field applications."
  },
  {
    "id": "f094",
    "category": "files",
    "categoryTitle": "File & OS Integration",
    "name": "Drag and drop",
    "summary": "Import files through direct UI interaction.",
    "advanced": "Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist.",
    "example": "Drop CSV evidence into a project.",
    "useCases": [
      "PWA tools",
      "data analysis",
      "field applications",
      "documentation systems"
    ],
    "tags": [
      "files",
      "browser",
      "ux"
    ],
    "maturity": "stable",
    "tooltip": "Import files through direct UI interaction. Advanced: Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist. Example: Drop CSV evidence into a project. Recommended for: PWA tools, data analysis, field applications."
  },
  {
    "id": "f095",
    "category": "files",
    "categoryTitle": "File & OS Integration",
    "name": "Clipboard API",
    "summary": "Copy structured outputs or read user-approved clipboard content.",
    "advanced": "Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist.",
    "example": "Copy a generated implementation prompt.",
    "useCases": [
      "PWA tools",
      "data analysis",
      "field applications",
      "documentation systems"
    ],
    "tags": [
      "files",
      "browser",
      "ux"
    ],
    "maturity": "stable",
    "tooltip": "Copy structured outputs or read user-approved clipboard content. Advanced: Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist. Example: Copy a generated implementation prompt. Recommended for: PWA tools, data analysis, field applications."
  },
  {
    "id": "f096",
    "category": "files",
    "categoryTitle": "File & OS Integration",
    "name": "Web Share",
    "summary": "Invoke native sharing surfaces on supported devices.",
    "advanced": "Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist.",
    "example": "Share a project invite from mobile.",
    "useCases": [
      "PWA tools",
      "data analysis",
      "field applications",
      "documentation systems"
    ],
    "tags": [
      "files",
      "browser",
      "ux"
    ],
    "maturity": "stable",
    "tooltip": "Invoke native sharing surfaces on supported devices. Advanced: Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist. Example: Share a project invite from mobile. Recommended for: PWA tools, data analysis, field applications."
  },
  {
    "id": "f097",
    "category": "files",
    "categoryTitle": "File & OS Integration",
    "name": "Share Target",
    "summary": "Receive content shared into an installed PWA.",
    "advanced": "Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist.",
    "example": "Send a webpage into the evidence inbox.",
    "useCases": [
      "PWA tools",
      "data analysis",
      "field applications",
      "documentation systems"
    ],
    "tags": [
      "files",
      "browser",
      "ux"
    ],
    "maturity": "stable",
    "tooltip": "Receive content shared into an installed PWA. Advanced: Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist. Example: Send a webpage into the evidence inbox. Recommended for: PWA tools, data analysis, field applications."
  },
  {
    "id": "f098",
    "category": "files",
    "categoryTitle": "File & OS Integration",
    "name": "File handlers",
    "summary": "Associate an installed PWA with selected file types.",
    "advanced": "Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist.",
    "example": "Open a project bundle by double-clicking it.",
    "useCases": [
      "PWA tools",
      "data analysis",
      "field applications",
      "documentation systems"
    ],
    "tags": [
      "files",
      "browser",
      "ux"
    ],
    "maturity": "stable",
    "tooltip": "Associate an installed PWA with selected file types. Advanced: Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist. Example: Open a project bundle by double-clicking it. Recommended for: PWA tools, data analysis, field applications."
  },
  {
    "id": "f099",
    "category": "files",
    "categoryTitle": "File & OS Integration",
    "name": "Print/PDF views",
    "summary": "Provide deliberate print layouts.",
    "advanced": "Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist.",
    "example": "Export a meeting decision packet.",
    "useCases": [
      "PWA tools",
      "data analysis",
      "field applications",
      "documentation systems"
    ],
    "tags": [
      "files",
      "browser",
      "ux"
    ],
    "maturity": "stable",
    "tooltip": "Provide deliberate print layouts. Advanced: Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist. Example: Export a meeting decision packet. Recommended for: PWA tools, data analysis, field applications."
  },
  {
    "id": "f100",
    "category": "files",
    "categoryTitle": "File & OS Integration",
    "name": "Multi-format export",
    "summary": "Offer JSON, CSV, Markdown, SVG or GeoJSON where meaningful.",
    "advanced": "Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist.",
    "example": "Export graph data for external analysis.",
    "useCases": [
      "PWA tools",
      "data analysis",
      "field applications",
      "documentation systems"
    ],
    "tags": [
      "files",
      "browser",
      "ux"
    ],
    "maturity": "stable",
    "tooltip": "Offer JSON, CSV, Markdown, SVG or GeoJSON where meaningful. Advanced: Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist. Example: Export graph data for external analysis. Recommended for: PWA tools, data analysis, field applications."
  },
  {
    "id": "f101",
    "category": "search",
    "categoryTitle": "Search, Retrieval & Knowledge Systems",
    "name": "Full-text search",
    "summary": "Index and search local or remote text.",
    "advanced": "Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance.",
    "example": "Find every project mentioning aquifer recharge.",
    "useCases": [
      "research commons",
      "large project portfolios",
      "AI RAG",
      "discovery interfaces"
    ],
    "tags": [
      "search",
      "knowledge",
      "rag"
    ],
    "maturity": "stable",
    "tooltip": "Index and search local or remote text. Advanced: Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance. Example: Find every project mentioning aquifer recharge. Recommended for: research commons, large project portfolios, AI RAG."
  },
  {
    "id": "f102",
    "category": "search",
    "categoryTitle": "Search, Retrieval & Knowledge Systems",
    "name": "Fuzzy search",
    "summary": "Handle minor spelling differences.",
    "advanced": "Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance.",
    "example": "Find hydrology when a user types hydroloy.",
    "useCases": [
      "research commons",
      "large project portfolios",
      "AI RAG",
      "discovery interfaces"
    ],
    "tags": [
      "search",
      "knowledge",
      "rag"
    ],
    "maturity": "stable",
    "tooltip": "Handle minor spelling differences. Advanced: Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance. Example: Find hydrology when a user types hydroloy. Recommended for: research commons, large project portfolios, AI RAG."
  },
  {
    "id": "f103",
    "category": "search",
    "categoryTitle": "Search, Retrieval & Knowledge Systems",
    "name": "Faceted search",
    "summary": "Filter by structured dimensions.",
    "advanced": "Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance.",
    "example": "Filter projects by region, status and discipline.",
    "useCases": [
      "research commons",
      "large project portfolios",
      "AI RAG",
      "discovery interfaces"
    ],
    "tags": [
      "search",
      "knowledge",
      "rag"
    ],
    "maturity": "stable",
    "tooltip": "Filter by structured dimensions. Advanced: Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance. Example: Filter projects by region, status and discipline. Recommended for: research commons, large project portfolios, AI RAG."
  },
  {
    "id": "f104",
    "category": "search",
    "categoryTitle": "Search, Retrieval & Knowledge Systems",
    "name": "Semantic vector search",
    "summary": "Find conceptually similar content.",
    "advanced": "Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance.",
    "example": "Find food-access work even when documents use different wording.",
    "useCases": [
      "research commons",
      "large project portfolios",
      "AI RAG",
      "discovery interfaces"
    ],
    "tags": [
      "search",
      "knowledge",
      "rag"
    ],
    "maturity": "stable",
    "tooltip": "Find conceptually similar content. Advanced: Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance. Example: Find food-access work even when documents use different wording. Recommended for: research commons, large project portfolios, AI RAG."
  },
  {
    "id": "f105",
    "category": "search",
    "categoryTitle": "Search, Retrieval & Knowledge Systems",
    "name": "Hybrid retrieval",
    "summary": "Combine text, vectors and metadata.",
    "advanced": "Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance.",
    "example": "Rank exact policy names while still surfacing conceptual matches.",
    "useCases": [
      "research commons",
      "large project portfolios",
      "AI RAG",
      "discovery interfaces"
    ],
    "tags": [
      "search",
      "knowledge",
      "rag"
    ],
    "maturity": "stable",
    "tooltip": "Combine text, vectors and metadata. Advanced: Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance. Example: Rank exact policy names while still surfacing conceptual matches. Recommended for: research commons, large project portfolios, AI RAG."
  },
  {
    "id": "f106",
    "category": "search",
    "categoryTitle": "Search, Retrieval & Knowledge Systems",
    "name": "Entity extraction",
    "summary": "Identify people, places, organizations and concepts.",
    "advanced": "Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance.",
    "example": "Turn a report into linked entities.",
    "useCases": [
      "research commons",
      "large project portfolios",
      "AI RAG",
      "discovery interfaces"
    ],
    "tags": [
      "search",
      "knowledge",
      "rag"
    ],
    "maturity": "stable",
    "tooltip": "Identify people, places, organizations and concepts. Advanced: Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance. Example: Turn a report into linked entities. Recommended for: research commons, large project portfolios, AI RAG."
  },
  {
    "id": "f107",
    "category": "search",
    "categoryTitle": "Search, Retrieval & Knowledge Systems",
    "name": "Knowledge graph",
    "summary": "Represent typed relationships among objects.",
    "advanced": "Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance.",
    "example": "Connect a watershed to infrastructure, projects and evidence.",
    "useCases": [
      "research commons",
      "large project portfolios",
      "AI RAG",
      "discovery interfaces"
    ],
    "tags": [
      "search",
      "knowledge",
      "rag"
    ],
    "maturity": "stable",
    "tooltip": "Represent typed relationships among objects. Advanced: Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance. Example: Connect a watershed to infrastructure, projects and evidence. Recommended for: research commons, large project portfolios, AI RAG."
  },
  {
    "id": "f108",
    "category": "search",
    "categoryTitle": "Search, Retrieval & Knowledge Systems",
    "name": "Contradiction detection",
    "summary": "Flag claims that appear inconsistent.",
    "advanced": "Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance.",
    "example": "Surface two evidence records reporting conflicting capacity.",
    "useCases": [
      "research commons",
      "large project portfolios",
      "AI RAG",
      "discovery interfaces"
    ],
    "tags": [
      "search",
      "knowledge",
      "rag"
    ],
    "maturity": "stable",
    "tooltip": "Flag claims that appear inconsistent. Advanced: Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance. Example: Surface two evidence records reporting conflicting capacity. Recommended for: research commons, large project portfolios, AI RAG."
  },
  {
    "id": "f109",
    "category": "search",
    "categoryTitle": "Search, Retrieval & Knowledge Systems",
    "name": "Freshness scoring",
    "summary": "Track age and update expectations.",
    "advanced": "Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance.",
    "example": "Warn that a transport schedule source is stale.",
    "useCases": [
      "research commons",
      "large project portfolios",
      "AI RAG",
      "discovery interfaces"
    ],
    "tags": [
      "search",
      "knowledge",
      "rag"
    ],
    "maturity": "stable",
    "tooltip": "Track age and update expectations. Advanced: Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance. Example: Warn that a transport schedule source is stale. Recommended for: research commons, large project portfolios, AI RAG."
  },
  {
    "id": "f110",
    "category": "evidence",
    "categoryTitle": "Evidence, Provenance & Integrity",
    "name": "Claim-evidence linking",
    "summary": "Attach one or more evidence records to a claim.",
    "advanced": "Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations.",
    "example": "Show which sources support an intervention assumption.",
    "useCases": [
      "research platforms",
      "institutional decisions",
      "public dashboards",
      "AI synthesis"
    ],
    "tags": [
      "evidence",
      "provenance",
      "research"
    ],
    "maturity": "stable",
    "tooltip": "Attach one or more evidence records to a claim. Advanced: Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations. Example: Show which sources support an intervention assumption. Recommended for: research platforms, institutional decisions, public dashboards."
  },
  {
    "id": "f111",
    "category": "evidence",
    "categoryTitle": "Evidence, Provenance & Integrity",
    "name": "Evidence quality fields",
    "summary": "Record type, limitations and applicability.",
    "advanced": "Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations.",
    "example": "Distinguish randomized evidence from anecdotal observations.",
    "useCases": [
      "research platforms",
      "institutional decisions",
      "public dashboards",
      "AI synthesis"
    ],
    "tags": [
      "evidence",
      "provenance",
      "research"
    ],
    "maturity": "stable",
    "tooltip": "Record type, limitations and applicability. Advanced: Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations. Example: Distinguish randomized evidence from anecdotal observations. Recommended for: research platforms, institutional decisions, public dashboards."
  },
  {
    "id": "f112",
    "category": "evidence",
    "categoryTitle": "Evidence, Provenance & Integrity",
    "name": "Citation manager",
    "summary": "Store structured references.",
    "advanced": "Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations.",
    "example": "Reuse one source across several project briefs.",
    "useCases": [
      "research platforms",
      "institutional decisions",
      "public dashboards",
      "AI synthesis"
    ],
    "tags": [
      "evidence",
      "provenance",
      "research"
    ],
    "maturity": "stable",
    "tooltip": "Store structured references. Advanced: Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations. Example: Reuse one source across several project briefs. Recommended for: research platforms, institutional decisions, public dashboards."
  },
  {
    "id": "f113",
    "category": "evidence",
    "categoryTitle": "Evidence, Provenance & Integrity",
    "name": "Source freshness",
    "summary": "Record publication and retrieval dates.",
    "advanced": "Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations.",
    "example": "Prompt a review when a source ages past its update interval.",
    "useCases": [
      "research platforms",
      "institutional decisions",
      "public dashboards",
      "AI synthesis"
    ],
    "tags": [
      "evidence",
      "provenance",
      "research"
    ],
    "maturity": "stable",
    "tooltip": "Record publication and retrieval dates. Advanced: Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations. Example: Prompt a review when a source ages past its update interval. Recommended for: research platforms, institutional decisions, public dashboards."
  },
  {
    "id": "f114",
    "category": "evidence",
    "categoryTitle": "Evidence, Provenance & Integrity",
    "name": "Data lineage graph",
    "summary": "Trace transformations from source to result.",
    "advanced": "Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations.",
    "example": "Show how a dashboard metric was calculated.",
    "useCases": [
      "research platforms",
      "institutional decisions",
      "public dashboards",
      "AI synthesis"
    ],
    "tags": [
      "evidence",
      "provenance",
      "research"
    ],
    "maturity": "stable",
    "tooltip": "Trace transformations from source to result. Advanced: Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations. Example: Show how a dashboard metric was calculated. Recommended for: research platforms, institutional decisions, public dashboards."
  },
  {
    "id": "f115",
    "category": "evidence",
    "categoryTitle": "Evidence, Provenance & Integrity",
    "name": "Version history + diff",
    "summary": "Compare object revisions.",
    "advanced": "Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations.",
    "example": "Review exactly what changed in a proposal.",
    "useCases": [
      "research platforms",
      "institutional decisions",
      "public dashboards",
      "AI synthesis"
    ],
    "tags": [
      "evidence",
      "provenance",
      "research"
    ],
    "maturity": "stable",
    "tooltip": "Compare object revisions. Advanced: Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations. Example: Review exactly what changed in a proposal. Recommended for: research platforms, institutional decisions, public dashboards."
  },
  {
    "id": "f116",
    "category": "evidence",
    "categoryTitle": "Evidence, Provenance & Integrity",
    "name": "Hash verification",
    "summary": "Fingerprint files or records.",
    "advanced": "Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations.",
    "example": "Detect altered evidence bundles.",
    "useCases": [
      "research platforms",
      "institutional decisions",
      "public dashboards",
      "AI synthesis"
    ],
    "tags": [
      "evidence",
      "provenance",
      "research"
    ],
    "maturity": "stable",
    "tooltip": "Fingerprint files or records. Advanced: Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations. Example: Detect altered evidence bundles. Recommended for: research platforms, institutional decisions, public dashboards."
  },
  {
    "id": "f117",
    "category": "evidence",
    "categoryTitle": "Evidence, Provenance & Integrity",
    "name": "Review status",
    "summary": "Track draft, reviewed, disputed and superseded states.",
    "advanced": "Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations.",
    "example": "Keep contested claims visible without presenting them as settled.",
    "useCases": [
      "research platforms",
      "institutional decisions",
      "public dashboards",
      "AI synthesis"
    ],
    "tags": [
      "evidence",
      "provenance",
      "research"
    ],
    "maturity": "stable",
    "tooltip": "Track draft, reviewed, disputed and superseded states. Advanced: Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations. Example: Keep contested claims visible without presenting them as settled. Recommended for: research platforms, institutional decisions, public dashboards."
  },
  {
    "id": "f118",
    "category": "modules",
    "categoryTitle": "Modular Application Architecture",
    "name": "Module registry",
    "summary": "Declare installed modules and metadata.",
    "advanced": "Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling.",
    "example": "Load water, food and energy modules through one registry.",
    "useCases": [
      "large suites",
      "plugin ecosystems",
      "multi-domain platforms",
      "long-lived projects"
    ],
    "tags": [
      "architecture",
      "modules",
      "scalability"
    ],
    "maturity": "stable",
    "tooltip": "Declare installed modules and metadata. Advanced: Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling. Example: Load water, food and energy modules through one registry. Recommended for: large suites, plugin ecosystems, multi-domain platforms."
  },
  {
    "id": "f119",
    "category": "modules",
    "categoryTitle": "Modular Application Architecture",
    "name": "Capability registry",
    "summary": "Track what the browser, user and deployment support.",
    "advanced": "Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling.",
    "example": "Disable local AI controls when WebGPU is unavailable.",
    "useCases": [
      "large suites",
      "plugin ecosystems",
      "multi-domain platforms",
      "long-lived projects"
    ],
    "tags": [
      "architecture",
      "modules",
      "scalability"
    ],
    "maturity": "stable",
    "tooltip": "Track what the browser, user and deployment support. Advanced: Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling. Example: Disable local AI controls when WebGPU is unavailable. Recommended for: large suites, plugin ecosystems, multi-domain platforms."
  },
  {
    "id": "f120",
    "category": "modules",
    "categoryTitle": "Modular Application Architecture",
    "name": "Plugin API",
    "summary": "Provide documented extension points.",
    "advanced": "Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling.",
    "example": "Add a new visualization without editing core code.",
    "useCases": [
      "large suites",
      "plugin ecosystems",
      "multi-domain platforms",
      "long-lived projects"
    ],
    "tags": [
      "architecture",
      "modules",
      "scalability"
    ],
    "maturity": "stable",
    "tooltip": "Provide documented extension points. Advanced: Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling. Example: Add a new visualization without editing core code. Recommended for: large suites, plugin ecosystems, multi-domain platforms."
  },
  {
    "id": "f121",
    "category": "modules",
    "categoryTitle": "Modular Application Architecture",
    "name": "Lifecycle hooks",
    "summary": "Standardize initialize, suspend and cleanup behavior.",
    "advanced": "Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling.",
    "example": "Disconnect a room cleanly when its module unloads.",
    "useCases": [
      "large suites",
      "plugin ecosystems",
      "multi-domain platforms",
      "long-lived projects"
    ],
    "tags": [
      "architecture",
      "modules",
      "scalability"
    ],
    "maturity": "stable",
    "tooltip": "Standardize initialize, suspend and cleanup behavior. Advanced: Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling. Example: Disconnect a room cleanly when its module unloads. Recommended for: large suites, plugin ecosystems, multi-domain platforms."
  },
  {
    "id": "f122",
    "category": "modules",
    "categoryTitle": "Modular Application Architecture",
    "name": "Dynamic imports",
    "summary": "Lazy-load optional code.",
    "advanced": "Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling.",
    "example": "Load WebLLM only when the user opens AI tools.",
    "useCases": [
      "large suites",
      "plugin ecosystems",
      "multi-domain platforms",
      "long-lived projects"
    ],
    "tags": [
      "architecture",
      "modules",
      "scalability"
    ],
    "maturity": "stable",
    "tooltip": "Lazy-load optional code. Advanced: Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling. Example: Load WebLLM only when the user opens AI tools. Recommended for: large suites, plugin ecosystems, multi-domain platforms."
  },
  {
    "id": "f123",
    "category": "modules",
    "categoryTitle": "Modular Application Architecture",
    "name": "Dependency injection",
    "summary": "Pass services explicitly to modules.",
    "advanced": "Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling.",
    "example": "Swap IndexedDB storage for a test adapter.",
    "useCases": [
      "large suites",
      "plugin ecosystems",
      "multi-domain platforms",
      "long-lived projects"
    ],
    "tags": [
      "architecture",
      "modules",
      "scalability"
    ],
    "maturity": "stable",
    "tooltip": "Pass services explicitly to modules. Advanced: Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling. Example: Swap IndexedDB storage for a test adapter. Recommended for: large suites, plugin ecosystems, multi-domain platforms."
  },
  {
    "id": "f124",
    "category": "modules",
    "categoryTitle": "Modular Application Architecture",
    "name": "Event bus",
    "summary": "Publish typed domain events between modules.",
    "advanced": "Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling.",
    "example": "Let gamification respond to task.completed without importing task code.",
    "useCases": [
      "large suites",
      "plugin ecosystems",
      "multi-domain platforms",
      "long-lived projects"
    ],
    "tags": [
      "architecture",
      "modules",
      "scalability"
    ],
    "maturity": "stable",
    "tooltip": "Publish typed domain events between modules. Advanced: Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling. Example: Let gamification respond to task.completed without importing task code. Recommended for: large suites, plugin ecosystems, multi-domain platforms."
  },
  {
    "id": "f125",
    "category": "modules",
    "categoryTitle": "Modular Application Architecture",
    "name": "Route registry",
    "summary": "Generate navigation and breadcrumbs from one source.",
    "advanced": "Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling.",
    "example": "Keep top and side menus synchronized.",
    "useCases": [
      "large suites",
      "plugin ecosystems",
      "multi-domain platforms",
      "long-lived projects"
    ],
    "tags": [
      "architecture",
      "modules",
      "scalability"
    ],
    "maturity": "stable",
    "tooltip": "Generate navigation and breadcrumbs from one source. Advanced: Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling. Example: Keep top and side menus synchronized. Recommended for: large suites, plugin ecosystems, multi-domain platforms."
  },
  {
    "id": "f126",
    "category": "modules",
    "categoryTitle": "Modular Application Architecture",
    "name": "Feature flags",
    "summary": "Enable features by environment or cohort.",
    "advanced": "Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling.",
    "example": "Beta-test WebTransport with selected users.",
    "useCases": [
      "large suites",
      "plugin ecosystems",
      "multi-domain platforms",
      "long-lived projects"
    ],
    "tags": [
      "architecture",
      "modules",
      "scalability"
    ],
    "maturity": "stable",
    "tooltip": "Enable features by environment or cohort. Advanced: Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling. Example: Beta-test WebTransport with selected users. Recommended for: large suites, plugin ecosystems, multi-domain platforms."
  },
  {
    "id": "f127",
    "category": "performance",
    "categoryTitle": "Performance Engineering",
    "name": "Code splitting",
    "summary": "Load only code needed for the current route.",
    "advanced": "Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition.",
    "example": "Keep the initial shell small despite many modules.",
    "useCases": [
      "mobile users",
      "large datasets",
      "AI-heavy apps",
      "global deployments"
    ],
    "tags": [
      "performance",
      "quality",
      "scale"
    ],
    "maturity": "stable",
    "tooltip": "Load only code needed for the current route. Advanced: Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition. Example: Keep the initial shell small despite many modules. Recommended for: mobile users, large datasets, AI-heavy apps."
  },
  {
    "id": "f128",
    "category": "performance",
    "categoryTitle": "Performance Engineering",
    "name": "Lazy loading",
    "summary": "Defer media and feature initialization.",
    "advanced": "Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition.",
    "example": "Load map tiles only when the map becomes visible.",
    "useCases": [
      "mobile users",
      "large datasets",
      "AI-heavy apps",
      "global deployments"
    ],
    "tags": [
      "performance",
      "quality",
      "scale"
    ],
    "maturity": "stable",
    "tooltip": "Defer media and feature initialization. Advanced: Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition. Example: Load map tiles only when the map becomes visible. Recommended for: mobile users, large datasets, AI-heavy apps."
  },
  {
    "id": "f129",
    "category": "performance",
    "categoryTitle": "Performance Engineering",
    "name": "Virtualized lists",
    "summary": "Render only visible rows in huge lists.",
    "advanced": "Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition.",
    "example": "Browse 100,000 evidence records smoothly.",
    "useCases": [
      "mobile users",
      "large datasets",
      "AI-heavy apps",
      "global deployments"
    ],
    "tags": [
      "performance",
      "quality",
      "scale"
    ],
    "maturity": "stable",
    "tooltip": "Render only visible rows in huge lists. Advanced: Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition. Example: Browse 100,000 evidence records smoothly. Recommended for: mobile users, large datasets, AI-heavy apps."
  },
  {
    "id": "f130",
    "category": "performance",
    "categoryTitle": "Performance Engineering",
    "name": "Debounce/throttle",
    "summary": "Control high-frequency events.",
    "advanced": "Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition.",
    "example": "Limit search calls while typing.",
    "useCases": [
      "mobile users",
      "large datasets",
      "AI-heavy apps",
      "global deployments"
    ],
    "tags": [
      "performance",
      "quality",
      "scale"
    ],
    "maturity": "stable",
    "tooltip": "Control high-frequency events. Advanced: Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition. Example: Limit search calls while typing. Recommended for: mobile users, large datasets, AI-heavy apps."
  },
  {
    "id": "f131",
    "category": "performance",
    "categoryTitle": "Performance Engineering",
    "name": "Resource timing",
    "summary": "Inspect network and load performance.",
    "advanced": "Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition.",
    "example": "Identify a slow third-party module.",
    "useCases": [
      "mobile users",
      "large datasets",
      "AI-heavy apps",
      "global deployments"
    ],
    "tags": [
      "performance",
      "quality",
      "scale"
    ],
    "maturity": "stable",
    "tooltip": "Inspect network and load performance. Advanced: Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition. Example: Identify a slow third-party module. Recommended for: mobile users, large datasets, AI-heavy apps."
  },
  {
    "id": "f132",
    "category": "performance",
    "categoryTitle": "Performance Engineering",
    "name": "Long-task detection",
    "summary": "Detect main-thread blocks.",
    "advanced": "Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition.",
    "example": "Move an expensive parser to a worker.",
    "useCases": [
      "mobile users",
      "large datasets",
      "AI-heavy apps",
      "global deployments"
    ],
    "tags": [
      "performance",
      "quality",
      "scale"
    ],
    "maturity": "stable",
    "tooltip": "Detect main-thread blocks. Advanced: Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition. Example: Move an expensive parser to a worker. Recommended for: mobile users, large datasets, AI-heavy apps."
  },
  {
    "id": "f133",
    "category": "performance",
    "categoryTitle": "Performance Engineering",
    "name": "Memory budgets",
    "summary": "Limit caches and model sizes.",
    "advanced": "Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition.",
    "example": "Unload an LLM before loading a large map pack.",
    "useCases": [
      "mobile users",
      "large datasets",
      "AI-heavy apps",
      "global deployments"
    ],
    "tags": [
      "performance",
      "quality",
      "scale"
    ],
    "maturity": "stable",
    "tooltip": "Limit caches and model sizes. Advanced: Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition. Example: Unload an LLM before loading a large map pack. Recommended for: mobile users, large datasets, AI-heavy apps."
  },
  {
    "id": "f134",
    "category": "performance",
    "categoryTitle": "Performance Engineering",
    "name": "Network-aware loading",
    "summary": "Adapt downloads to connection conditions.",
    "advanced": "Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition.",
    "example": "Avoid auto-fetching a model over a constrained connection.",
    "useCases": [
      "mobile users",
      "large datasets",
      "AI-heavy apps",
      "global deployments"
    ],
    "tags": [
      "performance",
      "quality",
      "scale"
    ],
    "maturity": "stable",
    "tooltip": "Adapt downloads to connection conditions. Advanced: Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition. Example: Avoid auto-fetching a model over a constrained connection. Recommended for: mobile users, large datasets, AI-heavy apps."
  },
  {
    "id": "f135",
    "category": "resilience",
    "categoryTitle": "Resilience & Graceful Degradation",
    "name": "Progressive enhancement",
    "summary": "Start from a functional baseline and add advanced capabilities.",
    "advanced": "Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences.",
    "example": "Offer static project reading before activating realtime features.",
    "useCases": [
      "mission-critical tools",
      "field work",
      "large PWAs",
      "public services"
    ],
    "tags": [
      "resilience",
      "offline",
      "quality"
    ],
    "maturity": "stable",
    "tooltip": "Start from a functional baseline and add advanced capabilities. Advanced: Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences. Example: Offer static project reading before activating realtime features. Recommended for: mission-critical tools, field work, large PWAs."
  },
  {
    "id": "f136",
    "category": "resilience",
    "categoryTitle": "Resilience & Graceful Degradation",
    "name": "Capability fallback ladder",
    "summary": "Define preferred and fallback implementations.",
    "advanced": "Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences.",
    "example": "WebGPU → WASM → basic JavaScript.",
    "useCases": [
      "mission-critical tools",
      "field work",
      "large PWAs",
      "public services"
    ],
    "tags": [
      "resilience",
      "offline",
      "quality"
    ],
    "maturity": "stable",
    "tooltip": "Define preferred and fallback implementations. Advanced: Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences. Example: WebGPU → WASM → basic JavaScript. Recommended for: mission-critical tools, field work, large PWAs."
  },
  {
    "id": "f137",
    "category": "resilience",
    "categoryTitle": "Resilience & Graceful Degradation",
    "name": "Offline mutation queue",
    "summary": "Store writes until network returns.",
    "advanced": "Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences.",
    "example": "Capture field inspection data without connectivity.",
    "useCases": [
      "mission-critical tools",
      "field work",
      "large PWAs",
      "public services"
    ],
    "tags": [
      "resilience",
      "offline",
      "quality"
    ],
    "maturity": "stable",
    "tooltip": "Store writes until network returns. Advanced: Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences. Example: Capture field inspection data without connectivity. Recommended for: mission-critical tools, field work, large PWAs."
  },
  {
    "id": "f138",
    "category": "resilience",
    "categoryTitle": "Resilience & Graceful Degradation",
    "name": "Circuit breaker",
    "summary": "Stop repeatedly calling a failing dependency.",
    "advanced": "Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences.",
    "example": "Temporarily disable a broken external API.",
    "useCases": [
      "mission-critical tools",
      "field work",
      "large PWAs",
      "public services"
    ],
    "tags": [
      "resilience",
      "offline",
      "quality"
    ],
    "maturity": "stable",
    "tooltip": "Stop repeatedly calling a failing dependency. Advanced: Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences. Example: Temporarily disable a broken external API. Recommended for: mission-critical tools, field work, large PWAs."
  },
  {
    "id": "f139",
    "category": "resilience",
    "categoryTitle": "Resilience & Graceful Degradation",
    "name": "Last-known-good config",
    "summary": "Recover from a bad configuration update.",
    "advanced": "Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences.",
    "example": "Restore the previous module registry after validation fails.",
    "useCases": [
      "mission-critical tools",
      "field work",
      "large PWAs",
      "public services"
    ],
    "tags": [
      "resilience",
      "offline",
      "quality"
    ],
    "maturity": "stable",
    "tooltip": "Recover from a bad configuration update. Advanced: Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences. Example: Restore the previous module registry after validation fails. Recommended for: mission-critical tools, field work, large PWAs."
  },
  {
    "id": "f140",
    "category": "resilience",
    "categoryTitle": "Resilience & Graceful Degradation",
    "name": "Safe/recovery mode",
    "summary": "Load minimal functionality after repeated crashes.",
    "advanced": "Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences.",
    "example": "Open data export even if an optional visualization fails.",
    "useCases": [
      "mission-critical tools",
      "field work",
      "large PWAs",
      "public services"
    ],
    "tags": [
      "resilience",
      "offline",
      "quality"
    ],
    "maturity": "stable",
    "tooltip": "Load minimal functionality after repeated crashes. Advanced: Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences. Example: Open data export even if an optional visualization fails. Recommended for: mission-critical tools, field work, large PWAs."
  },
  {
    "id": "f141",
    "category": "resilience",
    "categoryTitle": "Resilience & Graceful Degradation",
    "name": "Failed migration rollback",
    "summary": "Restore prior data if upgrade cannot complete.",
    "advanced": "Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences.",
    "example": "Avoid corrupting a long-lived local workspace.",
    "useCases": [
      "mission-critical tools",
      "field work",
      "large PWAs",
      "public services"
    ],
    "tags": [
      "resilience",
      "offline",
      "quality"
    ],
    "maturity": "stable",
    "tooltip": "Restore prior data if upgrade cannot complete. Advanced: Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences. Example: Avoid corrupting a long-lived local workspace. Recommended for: mission-critical tools, field work, large PWAs."
  },
  {
    "id": "f142",
    "category": "resilience",
    "categoryTitle": "Resilience & Graceful Degradation",
    "name": "Read-only emergency mode",
    "summary": "Preserve access during server stress.",
    "advanced": "Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences.",
    "example": "Let users read projects while writes are temporarily disabled.",
    "useCases": [
      "mission-critical tools",
      "field work",
      "large PWAs",
      "public services"
    ],
    "tags": [
      "resilience",
      "offline",
      "quality"
    ],
    "maturity": "stable",
    "tooltip": "Preserve access during server stress. Advanced: Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences. Example: Let users read projects while writes are temporarily disabled. Recommended for: mission-critical tools, field work, large PWAs."
  },
  {
    "id": "f143",
    "category": "observability",
    "categoryTitle": "Observability Without Surveillance",
    "name": "Local diagnostics console",
    "summary": "Show capability and error state to the user.",
    "advanced": "Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads.",
    "example": "Export a support report without remote telemetry.",
    "useCases": [
      "public platforms",
      "serverless deployments",
      "privacy-first tools",
      "support workflows"
    ],
    "tags": [
      "observability",
      "privacy",
      "ops"
    ],
    "maturity": "stable",
    "tooltip": "Show capability and error state to the user. Advanced: Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads. Example: Export a support report without remote telemetry. Recommended for: public platforms, serverless deployments, privacy-first tools."
  },
  {
    "id": "f144",
    "category": "observability",
    "categoryTitle": "Observability Without Surveillance",
    "name": "Structured logging",
    "summary": "Emit machine-readable log events.",
    "advanced": "Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads.",
    "example": "Filter synchronization errors separately from UI warnings.",
    "useCases": [
      "public platforms",
      "serverless deployments",
      "privacy-first tools",
      "support workflows"
    ],
    "tags": [
      "observability",
      "privacy",
      "ops"
    ],
    "maturity": "stable",
    "tooltip": "Emit machine-readable log events. Advanced: Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads. Example: Filter synchronization errors separately from UI warnings. Recommended for: public platforms, serverless deployments, privacy-first tools."
  },
  {
    "id": "f145",
    "category": "observability",
    "categoryTitle": "Observability Without Surveillance",
    "name": "Correlation IDs",
    "summary": "Trace one action across services.",
    "advanced": "Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads.",
    "example": "Follow a task update from browser to room coordinator to database.",
    "useCases": [
      "public platforms",
      "serverless deployments",
      "privacy-first tools",
      "support workflows"
    ],
    "tags": [
      "observability",
      "privacy",
      "ops"
    ],
    "maturity": "stable",
    "tooltip": "Trace one action across services. Advanced: Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads. Example: Follow a task update from browser to room coordinator to database. Recommended for: public platforms, serverless deployments, privacy-first tools."
  },
  {
    "id": "f146",
    "category": "observability",
    "categoryTitle": "Observability Without Surveillance",
    "name": "OpenTelemetry server tracing",
    "summary": "Collect standardized server traces and metrics.",
    "advanced": "Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads.",
    "example": "Measure realtime room latency across services.",
    "useCases": [
      "public platforms",
      "serverless deployments",
      "privacy-first tools",
      "support workflows"
    ],
    "tags": [
      "observability",
      "privacy",
      "ops"
    ],
    "maturity": "stable",
    "tooltip": "Collect standardized server traces and metrics. Advanced: Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads. Example: Measure realtime room latency across services. Recommended for: public platforms, serverless deployments, privacy-first tools."
  },
  {
    "id": "f147",
    "category": "observability",
    "categoryTitle": "Observability Without Surveillance",
    "name": "Network inspector",
    "summary": "Show application network dependencies.",
    "advanced": "Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads.",
    "example": "Explain which domains an AI feature contacts.",
    "useCases": [
      "public platforms",
      "serverless deployments",
      "privacy-first tools",
      "support workflows"
    ],
    "tags": [
      "observability",
      "privacy",
      "ops"
    ],
    "maturity": "stable",
    "tooltip": "Show application network dependencies. Advanced: Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads. Example: Explain which domains an AI feature contacts. Recommended for: public platforms, serverless deployments, privacy-first tools."
  },
  {
    "id": "f148",
    "category": "observability",
    "categoryTitle": "Observability Without Surveillance",
    "name": "Storage inspector",
    "summary": "Expose cache and database size.",
    "advanced": "Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads.",
    "example": "Help a user free space without wiping all data.",
    "useCases": [
      "public platforms",
      "serverless deployments",
      "privacy-first tools",
      "support workflows"
    ],
    "tags": [
      "observability",
      "privacy",
      "ops"
    ],
    "maturity": "stable",
    "tooltip": "Expose cache and database size. Advanced: Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads. Example: Help a user free space without wiping all data. Recommended for: public platforms, serverless deployments, privacy-first tools."
  },
  {
    "id": "f149",
    "category": "observability",
    "categoryTitle": "Observability Without Surveillance",
    "name": "Cost observability",
    "summary": "Track serverless, storage and inference costs.",
    "advanced": "Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads.",
    "example": "Estimate infrastructure cost per active room.",
    "useCases": [
      "public platforms",
      "serverless deployments",
      "privacy-first tools",
      "support workflows"
    ],
    "tags": [
      "observability",
      "privacy",
      "ops"
    ],
    "maturity": "stable",
    "tooltip": "Track serverless, storage and inference costs. Advanced: Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads. Example: Estimate infrastructure cost per active room. Recommended for: public platforms, serverless deployments, privacy-first tools."
  },
  {
    "id": "f150",
    "category": "observability",
    "categoryTitle": "Observability Without Surveillance",
    "name": "Redacted bug bundles",
    "summary": "Package diagnostics without private content.",
    "advanced": "Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads.",
    "example": "Share version, capability and stack information safely.",
    "useCases": [
      "public platforms",
      "serverless deployments",
      "privacy-first tools",
      "support workflows"
    ],
    "tags": [
      "observability",
      "privacy",
      "ops"
    ],
    "maturity": "stable",
    "tooltip": "Package diagnostics without private content. Advanced: Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads. Example: Share version, capability and stack information safely. Recommended for: public platforms, serverless deployments, privacy-first tools."
  },
  {
    "id": "f151",
    "category": "testing",
    "categoryTitle": "Testing & Self-Verification",
    "name": "Unit tests",
    "summary": "Verify pure logic and small modules.",
    "advanced": "Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles.",
    "example": "Test score calculation or schema conversion.",
    "useCases": [
      "long-lived software",
      "offline apps",
      "multiplayer systems",
      "public releases"
    ],
    "tags": [
      "testing",
      "quality",
      "devops"
    ],
    "maturity": "stable",
    "tooltip": "Verify pure logic and small modules. Advanced: Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles. Example: Test score calculation or schema conversion. Recommended for: long-lived software, offline apps, multiplayer systems."
  },
  {
    "id": "f152",
    "category": "testing",
    "categoryTitle": "Testing & Self-Verification",
    "name": "Integration tests",
    "summary": "Verify cooperating modules.",
    "advanced": "Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles.",
    "example": "Test that task completion emits XP and audit events.",
    "useCases": [
      "long-lived software",
      "offline apps",
      "multiplayer systems",
      "public releases"
    ],
    "tags": [
      "testing",
      "quality",
      "devops"
    ],
    "maturity": "stable",
    "tooltip": "Verify cooperating modules. Advanced: Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles. Example: Test that task completion emits XP and audit events. Recommended for: long-lived software, offline apps, multiplayer systems."
  },
  {
    "id": "f153",
    "category": "testing",
    "categoryTitle": "Testing & Self-Verification",
    "name": "End-to-end tests",
    "summary": "Exercise real user workflows.",
    "advanced": "Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles.",
    "example": "Create, edit, export and restore a project.",
    "useCases": [
      "long-lived software",
      "offline apps",
      "multiplayer systems",
      "public releases"
    ],
    "tags": [
      "testing",
      "quality",
      "devops"
    ],
    "maturity": "stable",
    "tooltip": "Exercise real user workflows. Advanced: Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles. Example: Create, edit, export and restore a project. Recommended for: long-lived software, offline apps, multiplayer systems."
  },
  {
    "id": "f154",
    "category": "testing",
    "categoryTitle": "Testing & Self-Verification",
    "name": "Offline tests",
    "summary": "Verify operation with network disabled.",
    "advanced": "Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles.",
    "example": "Confirm cached shell and queued edits work.",
    "useCases": [
      "long-lived software",
      "offline apps",
      "multiplayer systems",
      "public releases"
    ],
    "tags": [
      "testing",
      "quality",
      "devops"
    ],
    "maturity": "stable",
    "tooltip": "Verify operation with network disabled. Advanced: Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles. Example: Confirm cached shell and queued edits work. Recommended for: long-lived software, offline apps, multiplayer systems."
  },
  {
    "id": "f155",
    "category": "testing",
    "categoryTitle": "Testing & Self-Verification",
    "name": "CRDT convergence tests",
    "summary": "Ensure replicas reach the same state.",
    "advanced": "Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles.",
    "example": "Apply edits in different orders and compare final documents.",
    "useCases": [
      "long-lived software",
      "offline apps",
      "multiplayer systems",
      "public releases"
    ],
    "tags": [
      "testing",
      "quality",
      "devops"
    ],
    "maturity": "stable",
    "tooltip": "Ensure replicas reach the same state. Advanced: Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles. Example: Apply edits in different orders and compare final documents. Recommended for: long-lived software, offline apps, multiplayer systems."
  },
  {
    "id": "f156",
    "category": "testing",
    "categoryTitle": "Testing & Self-Verification",
    "name": "Accessibility tests",
    "summary": "Automate common WCAG checks and keyboard paths.",
    "advanced": "Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles.",
    "example": "Catch missing labels and focus traps.",
    "useCases": [
      "long-lived software",
      "offline apps",
      "multiplayer systems",
      "public releases"
    ],
    "tags": [
      "testing",
      "quality",
      "devops"
    ],
    "maturity": "stable",
    "tooltip": "Automate common WCAG checks and keyboard paths. Advanced: Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles. Example: Catch missing labels and focus traps. Recommended for: long-lived software, offline apps, multiplayer systems."
  },
  {
    "id": "f157",
    "category": "testing",
    "categoryTitle": "Testing & Self-Verification",
    "name": "Migration tests",
    "summary": "Validate upgrades from old data versions.",
    "advanced": "Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles.",
    "example": "Load v1 fixtures into current code.",
    "useCases": [
      "long-lived software",
      "offline apps",
      "multiplayer systems",
      "public releases"
    ],
    "tags": [
      "testing",
      "quality",
      "devops"
    ],
    "maturity": "stable",
    "tooltip": "Validate upgrades from old data versions. Advanced: Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles. Example: Load v1 fixtures into current code. Recommended for: long-lived software, offline apps, multiplayer systems."
  },
  {
    "id": "f158",
    "category": "testing",
    "categoryTitle": "Testing & Self-Verification",
    "name": "Self-test dashboard",
    "summary": "Let deployments inspect key runtime functions.",
    "advanced": "Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles.",
    "example": "Check storage, service worker, workers and crypto from the UI.",
    "useCases": [
      "long-lived software",
      "offline apps",
      "multiplayer systems",
      "public releases"
    ],
    "tags": [
      "testing",
      "quality",
      "devops"
    ],
    "maturity": "stable",
    "tooltip": "Let deployments inspect key runtime functions. Advanced: Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles. Example: Check storage, service worker, workers and crypto from the UI. Recommended for: long-lived software, offline apps, multiplayer systems."
  },
  {
    "id": "f159",
    "category": "accessibility",
    "categoryTitle": "Accessibility-First Interaction",
    "name": "Semantic landmarks",
    "summary": "Use correct document structure.",
    "advanced": "Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup.",
    "example": "Let screen-reader users jump between navigation and workspace.",
    "useCases": [
      "public services",
      "education",
      "multiplayer collaboration",
      "visual dashboards"
    ],
    "tags": [
      "accessibility",
      "wcag",
      "ux"
    ],
    "maturity": "stable",
    "tooltip": "Use correct document structure. Advanced: Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup. Example: Let screen-reader users jump between navigation and workspace. Recommended for: public services, education, multiplayer collaboration."
  },
  {
    "id": "f160",
    "category": "accessibility",
    "categoryTitle": "Accessibility-First Interaction",
    "name": "Robust focus management",
    "summary": "Move focus intentionally during dialogs and route changes.",
    "advanced": "Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup.",
    "example": "Return focus after closing the mobile drawer.",
    "useCases": [
      "public services",
      "education",
      "multiplayer collaboration",
      "visual dashboards"
    ],
    "tags": [
      "accessibility",
      "wcag",
      "ux"
    ],
    "maturity": "stable",
    "tooltip": "Move focus intentionally during dialogs and route changes. Advanced: Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup. Example: Return focus after closing the mobile drawer. Recommended for: public services, education, multiplayer collaboration."
  },
  {
    "id": "f161",
    "category": "accessibility",
    "categoryTitle": "Accessibility-First Interaction",
    "name": "Live regions",
    "summary": "Announce meaningful asynchronous updates.",
    "advanced": "Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup.",
    "example": "Tell a screen-reader user that a collaborator joined.",
    "useCases": [
      "public services",
      "education",
      "multiplayer collaboration",
      "visual dashboards"
    ],
    "tags": [
      "accessibility",
      "wcag",
      "ux"
    ],
    "maturity": "stable",
    "tooltip": "Announce meaningful asynchronous updates. Advanced: Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup. Example: Tell a screen-reader user that a collaborator joined. Recommended for: public services, education, multiplayer collaboration."
  },
  {
    "id": "f162",
    "category": "accessibility",
    "categoryTitle": "Accessibility-First Interaction",
    "name": "Reduced motion",
    "summary": "Honor system/user motion preferences.",
    "advanced": "Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup.",
    "example": "Disable parallax and animated network rings.",
    "useCases": [
      "public services",
      "education",
      "multiplayer collaboration",
      "visual dashboards"
    ],
    "tags": [
      "accessibility",
      "wcag",
      "ux"
    ],
    "maturity": "stable",
    "tooltip": "Honor system/user motion preferences. Advanced: Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup. Example: Disable parallax and animated network rings. Recommended for: public services, education, multiplayer collaboration."
  },
  {
    "id": "f163",
    "category": "accessibility",
    "categoryTitle": "Accessibility-First Interaction",
    "name": "High contrast",
    "summary": "Provide sufficient contrast and forced-colors support.",
    "advanced": "Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup.",
    "example": "Keep status indicators legible in high-contrast mode.",
    "useCases": [
      "public services",
      "education",
      "multiplayer collaboration",
      "visual dashboards"
    ],
    "tags": [
      "accessibility",
      "wcag",
      "ux"
    ],
    "maturity": "stable",
    "tooltip": "Provide sufficient contrast and forced-colors support. Advanced: Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup. Example: Keep status indicators legible in high-contrast mode. Recommended for: public services, education, multiplayer collaboration."
  },
  {
    "id": "f164",
    "category": "accessibility",
    "categoryTitle": "Accessibility-First Interaction",
    "name": "Accessible data alternatives",
    "summary": "Pair graphics with tables or text summaries.",
    "advanced": "Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup.",
    "example": "Expose chart values without requiring vision.",
    "useCases": [
      "public services",
      "education",
      "multiplayer collaboration",
      "visual dashboards"
    ],
    "tags": [
      "accessibility",
      "wcag",
      "ux"
    ],
    "maturity": "stable",
    "tooltip": "Pair graphics with tables or text summaries. Advanced: Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup. Example: Expose chart values without requiring vision. Recommended for: public services, education, multiplayer collaboration."
  },
  {
    "id": "f165",
    "category": "accessibility",
    "categoryTitle": "Accessibility-First Interaction",
    "name": "Cognitive/simple mode",
    "summary": "Reduce density and jargon.",
    "advanced": "Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup.",
    "example": "Show an action-oriented beginner interface.",
    "useCases": [
      "public services",
      "education",
      "multiplayer collaboration",
      "visual dashboards"
    ],
    "tags": [
      "accessibility",
      "wcag",
      "ux"
    ],
    "maturity": "stable",
    "tooltip": "Reduce density and jargon. Advanced: Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup. Example: Show an action-oriented beginner interface. Recommended for: public services, education, multiplayer collaboration."
  },
  {
    "id": "f166",
    "category": "accessibility",
    "categoryTitle": "Accessibility-First Interaction",
    "name": "Caption/transcript support",
    "summary": "Make audio/video collaboration accessible.",
    "advanced": "Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup.",
    "example": "Provide captions for a live meeting.",
    "useCases": [
      "public services",
      "education",
      "multiplayer collaboration",
      "visual dashboards"
    ],
    "tags": [
      "accessibility",
      "wcag",
      "ux"
    ],
    "maturity": "stable",
    "tooltip": "Make audio/video collaboration accessible. Advanced: Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup. Example: Provide captions for a live meeting. Recommended for: public services, education, multiplayer collaboration."
  },
  {
    "id": "f167",
    "category": "i18n",
    "categoryTitle": "Internationalization & Localization",
    "name": "Translation dictionaries",
    "summary": "Separate interface strings from code.",
    "advanced": "Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic.",
    "example": "Switch English and French without reload.",
    "useCases": [
      "global communities",
      "cross-border research",
      "education",
      "international institutions"
    ],
    "tags": [
      "i18n",
      "global",
      "accessibility"
    ],
    "maturity": "stable",
    "tooltip": "Separate interface strings from code. Advanced: Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic. Example: Switch English and French without reload. Recommended for: global communities, cross-border research, education."
  },
  {
    "id": "f168",
    "category": "i18n",
    "categoryTitle": "Internationalization & Localization",
    "name": "RTL support",
    "summary": "Mirror layouts for right-to-left languages.",
    "advanced": "Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic.",
    "example": "Render Arabic navigation correctly.",
    "useCases": [
      "global communities",
      "cross-border research",
      "education",
      "international institutions"
    ],
    "tags": [
      "i18n",
      "global",
      "accessibility"
    ],
    "maturity": "stable",
    "tooltip": "Mirror layouts for right-to-left languages. Advanced: Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic. Example: Render Arabic navigation correctly. Recommended for: global communities, cross-border research, education."
  },
  {
    "id": "f169",
    "category": "i18n",
    "categoryTitle": "Internationalization & Localization",
    "name": "Intl formatting",
    "summary": "Format dates, numbers and units by locale.",
    "advanced": "Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic.",
    "example": "Display regional number formats automatically.",
    "useCases": [
      "global communities",
      "cross-border research",
      "education",
      "international institutions"
    ],
    "tags": [
      "i18n",
      "global",
      "accessibility"
    ],
    "maturity": "stable",
    "tooltip": "Format dates, numbers and units by locale. Advanced: Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic. Example: Display regional number formats automatically. Recommended for: global communities, cross-border research, education."
  },
  {
    "id": "f170",
    "category": "i18n",
    "categoryTitle": "Internationalization & Localization",
    "name": "Pluralization",
    "summary": "Use locale-correct grammatical forms.",
    "advanced": "Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic.",
    "example": "Render 1 task versus 2 tasks correctly across languages.",
    "useCases": [
      "global communities",
      "cross-border research",
      "education",
      "international institutions"
    ],
    "tags": [
      "i18n",
      "global",
      "accessibility"
    ],
    "maturity": "stable",
    "tooltip": "Use locale-correct grammatical forms. Advanced: Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic. Example: Render 1 task versus 2 tasks correctly across languages. Recommended for: global communities, cross-border research, education."
  },
  {
    "id": "f171",
    "category": "i18n",
    "categoryTitle": "Internationalization & Localization",
    "name": "Machine-translation labels",
    "summary": "Mark AI-generated translations explicitly.",
    "advanced": "Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic.",
    "example": "Avoid presenting an unreviewed translation as official.",
    "useCases": [
      "global communities",
      "cross-border research",
      "education",
      "international institutions"
    ],
    "tags": [
      "i18n",
      "global",
      "accessibility"
    ],
    "maturity": "stable",
    "tooltip": "Mark AI-generated translations explicitly. Advanced: Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic. Example: Avoid presenting an unreviewed translation as official. Recommended for: global communities, cross-border research, education."
  },
  {
    "id": "f172",
    "category": "i18n",
    "categoryTitle": "Internationalization & Localization",
    "name": "Multilingual search",
    "summary": "Search across translated concepts.",
    "advanced": "Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic.",
    "example": "Find a project regardless of whether a query is English or French.",
    "useCases": [
      "global communities",
      "cross-border research",
      "education",
      "international institutions"
    ],
    "tags": [
      "i18n",
      "global",
      "accessibility"
    ],
    "maturity": "stable",
    "tooltip": "Search across translated concepts. Advanced: Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic. Example: Find a project regardless of whether a query is English or French. Recommended for: global communities, cross-border research, education."
  },
  {
    "id": "f173",
    "category": "i18n",
    "categoryTitle": "Internationalization & Localization",
    "name": "Time-zone awareness",
    "summary": "Render collaboration times locally.",
    "advanced": "Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic.",
    "example": "Schedule a workshop across continents.",
    "useCases": [
      "global communities",
      "cross-border research",
      "education",
      "international institutions"
    ],
    "tags": [
      "i18n",
      "global",
      "accessibility"
    ],
    "maturity": "stable",
    "tooltip": "Render collaboration times locally. Advanced: Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic. Example: Schedule a workshop across continents. Recommended for: global communities, cross-border research, education."
  },
  {
    "id": "f174",
    "category": "i18n",
    "categoryTitle": "Internationalization & Localization",
    "name": "Incomplete translation indicators",
    "summary": "Show coverage and fallback language.",
    "advanced": "Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic.",
    "example": "Display 82% complete rather than silently mixing languages.",
    "useCases": [
      "global communities",
      "cross-border research",
      "education",
      "international institutions"
    ],
    "tags": [
      "i18n",
      "global",
      "accessibility"
    ],
    "maturity": "stable",
    "tooltip": "Show coverage and fallback language. Advanced: Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic. Example: Display 82% complete rather than silently mixing languages. Recommended for: global communities, cross-border research, education."
  },
  {
    "id": "f175",
    "category": "visualization",
    "categoryTitle": "Advanced Visualization",
    "name": "SVG diagrams",
    "summary": "Accessible vector graphics for moderate datasets.",
    "advanced": "Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports.",
    "example": "Render an editable systems map.",
    "useCases": [
      "knowledge graphs",
      "system maps",
      "dashboards",
      "gamified interfaces"
    ],
    "tags": [
      "visualization",
      "canvas",
      "graph"
    ],
    "maturity": "stable",
    "tooltip": "Accessible vector graphics for moderate datasets. Advanced: Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports. Example: Render an editable systems map. Recommended for: knowledge graphs, system maps, dashboards."
  },
  {
    "id": "f176",
    "category": "visualization",
    "categoryTitle": "Advanced Visualization",
    "name": "Canvas rendering",
    "summary": "Efficient immediate-mode graphics.",
    "advanced": "Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports.",
    "example": "Draw thousands of map markers.",
    "useCases": [
      "knowledge graphs",
      "system maps",
      "dashboards",
      "gamified interfaces"
    ],
    "tags": [
      "visualization",
      "canvas",
      "graph"
    ],
    "maturity": "stable",
    "tooltip": "Efficient immediate-mode graphics. Advanced: Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports. Example: Draw thousands of map markers. Recommended for: knowledge graphs, system maps, dashboards."
  },
  {
    "id": "f177",
    "category": "visualization",
    "categoryTitle": "Advanced Visualization",
    "name": "WebGL/WebGPU graphs",
    "summary": "GPU-accelerated large visual networks.",
    "advanced": "Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports.",
    "example": "Explore a million-edge knowledge graph.",
    "useCases": [
      "knowledge graphs",
      "system maps",
      "dashboards",
      "gamified interfaces"
    ],
    "tags": [
      "visualization",
      "canvas",
      "graph"
    ],
    "maturity": "stable",
    "tooltip": "GPU-accelerated large visual networks. Advanced: Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports. Example: Explore a million-edge knowledge graph. Recommended for: knowledge graphs, system maps, dashboards."
  },
  {
    "id": "f178",
    "category": "visualization",
    "categoryTitle": "Advanced Visualization",
    "name": "Force-directed networks",
    "summary": "Lay out relationship graphs interactively.",
    "advanced": "Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports.",
    "example": "Show people, projects and organizations as a network.",
    "useCases": [
      "knowledge graphs",
      "system maps",
      "dashboards",
      "gamified interfaces"
    ],
    "tags": [
      "visualization",
      "canvas",
      "graph"
    ],
    "maturity": "stable",
    "tooltip": "Lay out relationship graphs interactively. Advanced: Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports. Example: Show people, projects and organizations as a network. Recommended for: knowledge graphs, system maps, dashboards."
  },
  {
    "id": "f179",
    "category": "visualization",
    "categoryTitle": "Advanced Visualization",
    "name": "Sankey flows",
    "summary": "Visualize quantities moving through systems.",
    "advanced": "Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports.",
    "example": "Show food or energy flows.",
    "useCases": [
      "knowledge graphs",
      "system maps",
      "dashboards",
      "gamified interfaces"
    ],
    "tags": [
      "visualization",
      "canvas",
      "graph"
    ],
    "maturity": "stable",
    "tooltip": "Visualize quantities moving through systems. Advanced: Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports. Example: Show food or energy flows. Recommended for: knowledge graphs, system maps, dashboards."
  },
  {
    "id": "f180",
    "category": "visualization",
    "categoryTitle": "Advanced Visualization",
    "name": "Timelines",
    "summary": "Explore events chronologically.",
    "advanced": "Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports.",
    "example": "Review project decisions across months.",
    "useCases": [
      "knowledge graphs",
      "system maps",
      "dashboards",
      "gamified interfaces"
    ],
    "tags": [
      "visualization",
      "canvas",
      "graph"
    ],
    "maturity": "stable",
    "tooltip": "Explore events chronologically. Advanced: Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports. Example: Review project decisions across months. Recommended for: knowledge graphs, system maps, dashboards."
  },
  {
    "id": "f181",
    "category": "visualization",
    "categoryTitle": "Advanced Visualization",
    "name": "Constellation UI",
    "summary": "Use optional spatial metaphor for exploration and progress.",
    "advanced": "Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports.",
    "example": "Represent modules as connected stars.",
    "useCases": [
      "knowledge graphs",
      "system maps",
      "dashboards",
      "gamified interfaces"
    ],
    "tags": [
      "visualization",
      "canvas",
      "graph"
    ],
    "maturity": "stable",
    "tooltip": "Use optional spatial metaphor for exploration and progress. Advanced: Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports. Example: Represent modules as connected stars. Recommended for: knowledge graphs, system maps, dashboards."
  },
  {
    "id": "f182",
    "category": "visualization",
    "categoryTitle": "Advanced Visualization",
    "name": "Exportable SVG/PNG",
    "summary": "Create portable visual artifacts.",
    "advanced": "Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports.",
    "example": "Embed a systems diagram in a report.",
    "useCases": [
      "knowledge graphs",
      "system maps",
      "dashboards",
      "gamified interfaces"
    ],
    "tags": [
      "visualization",
      "canvas",
      "graph"
    ],
    "maturity": "stable",
    "tooltip": "Create portable visual artifacts. Advanced: Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports. Example: Embed a systems diagram in a report. Recommended for: knowledge graphs, system maps, dashboards."
  },
  {
    "id": "f183",
    "category": "geo",
    "categoryTitle": "Geospatial & Mapping",
    "name": "GeoJSON layers",
    "summary": "Store portable vector geometry.",
    "advanced": "Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision.",
    "example": "Represent community gardens and water points.",
    "useCases": [
      "field operations",
      "regional planning",
      "infrastructure",
      "environmental projects"
    ],
    "tags": [
      "maps",
      "geo",
      "field"
    ],
    "maturity": "stable",
    "tooltip": "Store portable vector geometry. Advanced: Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision. Example: Represent community gardens and water points. Recommended for: field operations, regional planning, infrastructure."
  },
  {
    "id": "f184",
    "category": "geo",
    "categoryTitle": "Geospatial & Mapping",
    "name": "Offline map packs",
    "summary": "Cache selected regional basemaps/data.",
    "advanced": "Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision.",
    "example": "Use a field map without cellular service.",
    "useCases": [
      "field operations",
      "regional planning",
      "infrastructure",
      "environmental projects"
    ],
    "tags": [
      "maps",
      "geo",
      "field"
    ],
    "maturity": "stable",
    "tooltip": "Cache selected regional basemaps/data. Advanced: Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision. Example: Use a field map without cellular service. Recommended for: field operations, regional planning, infrastructure."
  },
  {
    "id": "f185",
    "category": "geo",
    "categoryTitle": "Geospatial & Mapping",
    "name": "Collaborative annotation",
    "summary": "Let participants edit shared spatial features.",
    "advanced": "Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision.",
    "example": "Draw a proposed transit route together.",
    "useCases": [
      "field operations",
      "regional planning",
      "infrastructure",
      "environmental projects"
    ],
    "tags": [
      "maps",
      "geo",
      "field"
    ],
    "maturity": "stable",
    "tooltip": "Let participants edit shared spatial features. Advanced: Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision. Example: Draw a proposed transit route together. Recommended for: field operations, regional planning, infrastructure."
  },
  {
    "id": "f186",
    "category": "geo",
    "categoryTitle": "Geospatial & Mapping",
    "name": "Clustering",
    "summary": "Summarize dense point sets.",
    "advanced": "Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision.",
    "example": "Group thousands of observations at low zoom.",
    "useCases": [
      "field operations",
      "regional planning",
      "infrastructure",
      "environmental projects"
    ],
    "tags": [
      "maps",
      "geo",
      "field"
    ],
    "maturity": "stable",
    "tooltip": "Summarize dense point sets. Advanced: Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision. Example: Group thousands of observations at low zoom. Recommended for: field operations, regional planning, infrastructure."
  },
  {
    "id": "f187",
    "category": "geo",
    "categoryTitle": "Geospatial & Mapping",
    "name": "Heatmaps",
    "summary": "Visualize spatial intensity.",
    "advanced": "Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision.",
    "example": "Show service coverage gaps.",
    "useCases": [
      "field operations",
      "regional planning",
      "infrastructure",
      "environmental projects"
    ],
    "tags": [
      "maps",
      "geo",
      "field"
    ],
    "maturity": "stable",
    "tooltip": "Visualize spatial intensity. Advanced: Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision. Example: Show service coverage gaps. Recommended for: field operations, regional planning, infrastructure."
  },
  {
    "id": "f188",
    "category": "geo",
    "categoryTitle": "Geospatial & Mapping",
    "name": "Routing/isochrones",
    "summary": "Estimate reachable areas and paths.",
    "advanced": "Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision.",
    "example": "Compare access to clinics within 30 minutes.",
    "useCases": [
      "field operations",
      "regional planning",
      "infrastructure",
      "environmental projects"
    ],
    "tags": [
      "maps",
      "geo",
      "field"
    ],
    "maturity": "stable",
    "tooltip": "Estimate reachable areas and paths. Advanced: Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision. Example: Compare access to clinics within 30 minutes. Recommended for: field operations, regional planning, infrastructure."
  },
  {
    "id": "f189",
    "category": "geo",
    "categoryTitle": "Geospatial & Mapping",
    "name": "Time-enabled maps",
    "summary": "Filter spatial objects by time.",
    "advanced": "Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision.",
    "example": "Watch restoration projects appear over years.",
    "useCases": [
      "field operations",
      "regional planning",
      "infrastructure",
      "environmental projects"
    ],
    "tags": [
      "maps",
      "geo",
      "field"
    ],
    "maturity": "stable",
    "tooltip": "Filter spatial objects by time. Advanced: Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision. Example: Watch restoration projects appear over years. Recommended for: field operations, regional planning, infrastructure."
  },
  {
    "id": "f190",
    "category": "geo",
    "categoryTitle": "Geospatial & Mapping",
    "name": "GeoJSON/GPX/KML interchange",
    "summary": "Import/export standard geospatial formats.",
    "advanced": "Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision.",
    "example": "Move field tracks between systems.",
    "useCases": [
      "field operations",
      "regional planning",
      "infrastructure",
      "environmental projects"
    ],
    "tags": [
      "maps",
      "geo",
      "field"
    ],
    "maturity": "stable",
    "tooltip": "Import/export standard geospatial formats. Advanced: Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision. Example: Move field tracks between systems. Recommended for: field operations, regional planning, infrastructure."
  },
  {
    "id": "f191",
    "category": "media",
    "categoryTitle": "Media & Rich Collaboration",
    "name": "MediaRecorder",
    "summary": "Capture microphone/camera streams with permission.",
    "advanced": "Make recording explicit and consent-driven; process locally where feasible and provide text equivalents.",
    "example": "Record a field interview with consent.",
    "useCases": [
      "remote meetings",
      "field evidence",
      "education",
      "media-rich games"
    ],
    "tags": [
      "media",
      "webrtc",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Capture microphone/camera streams with permission. Advanced: Make recording explicit and consent-driven; process locally where feasible and provide text equivalents. Example: Record a field interview with consent. Recommended for: remote meetings, field evidence, education."
  },
  {
    "id": "f192",
    "category": "media",
    "categoryTitle": "Media & Rich Collaboration",
    "name": "Screen sharing",
    "summary": "Share an application or display during collaboration.",
    "advanced": "Make recording explicit and consent-driven; process locally where feasible and provide text equivalents.",
    "example": "Walk a team through a simulation.",
    "useCases": [
      "remote meetings",
      "field evidence",
      "education",
      "media-rich games"
    ],
    "tags": [
      "media",
      "webrtc",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Share an application or display during collaboration. Advanced: Make recording explicit and consent-driven; process locally where feasible and provide text equivalents. Example: Walk a team through a simulation. Recommended for: remote meetings, field evidence, education."
  },
  {
    "id": "f193",
    "category": "media",
    "categoryTitle": "Media & Rich Collaboration",
    "name": "WebCodecs",
    "summary": "Low-level encode/decode for advanced media applications.",
    "advanced": "Make recording explicit and consent-driven; process locally where feasible and provide text equivalents.",
    "example": "Build efficient local video processing.",
    "useCases": [
      "remote meetings",
      "field evidence",
      "education",
      "media-rich games"
    ],
    "tags": [
      "media",
      "webrtc",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Low-level encode/decode for advanced media applications. Advanced: Make recording explicit and consent-driven; process locally where feasible and provide text equivalents. Example: Build efficient local video processing. Recommended for: remote meetings, field evidence, education."
  },
  {
    "id": "f194",
    "category": "media",
    "categoryTitle": "Media & Rich Collaboration",
    "name": "Web Audio",
    "summary": "Analyze and synthesize audio.",
    "advanced": "Make recording explicit and consent-driven; process locally where feasible and provide text equivalents.",
    "example": "Visualize a voice note waveform.",
    "useCases": [
      "remote meetings",
      "field evidence",
      "education",
      "media-rich games"
    ],
    "tags": [
      "media",
      "webrtc",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Analyze and synthesize audio. Advanced: Make recording explicit and consent-driven; process locally where feasible and provide text equivalents. Example: Visualize a voice note waveform. Recommended for: remote meetings, field evidence, education."
  },
  {
    "id": "f195",
    "category": "media",
    "categoryTitle": "Media & Rich Collaboration",
    "name": "Local image compression",
    "summary": "Resize uploads before transmission.",
    "advanced": "Make recording explicit and consent-driven; process locally where feasible and provide text equivalents.",
    "example": "Reduce field-photo bandwidth.",
    "useCases": [
      "remote meetings",
      "field evidence",
      "education",
      "media-rich games"
    ],
    "tags": [
      "media",
      "webrtc",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Resize uploads before transmission. Advanced: Make recording explicit and consent-driven; process locally where feasible and provide text equivalents. Example: Reduce field-photo bandwidth. Recommended for: remote meetings, field evidence, education."
  },
  {
    "id": "f196",
    "category": "media",
    "categoryTitle": "Media & Rich Collaboration",
    "name": "Speech synthesis",
    "summary": "Read selected content aloud.",
    "advanced": "Make recording explicit and consent-driven; process locally where feasible and provide text equivalents.",
    "example": "Provide an optional auditory summary.",
    "useCases": [
      "remote meetings",
      "field evidence",
      "education",
      "media-rich games"
    ],
    "tags": [
      "media",
      "webrtc",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Read selected content aloud. Advanced: Make recording explicit and consent-driven; process locally where feasible and provide text equivalents. Example: Provide an optional auditory summary. Recommended for: remote meetings, field evidence, education."
  },
  {
    "id": "f197",
    "category": "media",
    "categoryTitle": "Media & Rich Collaboration",
    "name": "Caption editing",
    "summary": "Review generated transcripts and captions.",
    "advanced": "Make recording explicit and consent-driven; process locally where feasible and provide text equivalents.",
    "example": "Correct meeting captions before publishing.",
    "useCases": [
      "remote meetings",
      "field evidence",
      "education",
      "media-rich games"
    ],
    "tags": [
      "media",
      "webrtc",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Review generated transcripts and captions. Advanced: Make recording explicit and consent-driven; process locally where feasible and provide text equivalents. Example: Correct meeting captions before publishing. Recommended for: remote meetings, field evidence, education."
  },
  {
    "id": "f198",
    "category": "media",
    "categoryTitle": "Media & Rich Collaboration",
    "name": "Picture-in-Picture",
    "summary": "Keep video visible while working elsewhere.",
    "advanced": "Make recording explicit and consent-driven; process locally where feasible and provide text equivalents.",
    "example": "Follow a remote workshop while editing tasks.",
    "useCases": [
      "remote meetings",
      "field evidence",
      "education",
      "media-rich games"
    ],
    "tags": [
      "media",
      "webrtc",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Keep video visible while working elsewhere. Advanced: Make recording explicit and consent-driven; process locally where feasible and provide text equivalents. Example: Follow a remote workshop while editing tasks. Recommended for: remote meetings, field evidence, education."
  },
  {
    "id": "f199",
    "category": "device",
    "categoryTitle": "Device & Sensor Capabilities",
    "name": "Geolocation",
    "summary": "Request location with explicit consent.",
    "advanced": "Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback.",
    "example": "Attach approximate coordinates to a field observation.",
    "useCases": [
      "field science",
      "accessibility",
      "hardware labs",
      "interactive exhibits"
    ],
    "tags": [
      "device",
      "permissions",
      "field"
    ],
    "maturity": "stable",
    "tooltip": "Request location with explicit consent. Advanced: Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback. Example: Attach approximate coordinates to a field observation. Recommended for: field science, accessibility, hardware labs."
  },
  {
    "id": "f200",
    "category": "device",
    "categoryTitle": "Device & Sensor Capabilities",
    "name": "Camera",
    "summary": "Capture images or video.",
    "advanced": "Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback.",
    "example": "Document infrastructure condition.",
    "useCases": [
      "field science",
      "accessibility",
      "hardware labs",
      "interactive exhibits"
    ],
    "tags": [
      "device",
      "permissions",
      "field"
    ],
    "maturity": "stable",
    "tooltip": "Capture images or video. Advanced: Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback. Example: Document infrastructure condition. Recommended for: field science, accessibility, hardware labs."
  },
  {
    "id": "f201",
    "category": "device",
    "categoryTitle": "Device & Sensor Capabilities",
    "name": "Microphone",
    "summary": "Capture audio.",
    "advanced": "Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback.",
    "example": "Record a consented oral-history contribution.",
    "useCases": [
      "field science",
      "accessibility",
      "hardware labs",
      "interactive exhibits"
    ],
    "tags": [
      "device",
      "permissions",
      "field"
    ],
    "maturity": "stable",
    "tooltip": "Capture audio. Advanced: Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback. Example: Record a consented oral-history contribution. Recommended for: field science, accessibility, hardware labs."
  },
  {
    "id": "f202",
    "category": "device",
    "categoryTitle": "Device & Sensor Capabilities",
    "name": "Screen Wake Lock",
    "summary": "Keep a display awake during active field use.",
    "advanced": "Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback.",
    "example": "Prevent a checklist from sleeping during an inspection.",
    "useCases": [
      "field science",
      "accessibility",
      "hardware labs",
      "interactive exhibits"
    ],
    "tags": [
      "device",
      "permissions",
      "field"
    ],
    "maturity": "stable",
    "tooltip": "Keep a display awake during active field use. Advanced: Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback. Example: Prevent a checklist from sleeping during an inspection. Recommended for: field science, accessibility, hardware labs."
  },
  {
    "id": "f203",
    "category": "device",
    "categoryTitle": "Device & Sensor Capabilities",
    "name": "Gamepad API",
    "summary": "Use controllers as alternative input.",
    "advanced": "Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback.",
    "example": "Drive an accessible simulation interface.",
    "useCases": [
      "field science",
      "accessibility",
      "hardware labs",
      "interactive exhibits"
    ],
    "tags": [
      "device",
      "permissions",
      "field"
    ],
    "maturity": "stable",
    "tooltip": "Use controllers as alternative input. Advanced: Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback. Example: Drive an accessible simulation interface. Recommended for: field science, accessibility, hardware labs."
  },
  {
    "id": "f204",
    "category": "device",
    "categoryTitle": "Device & Sensor Capabilities",
    "name": "Web Bluetooth",
    "summary": "Communicate with compatible nearby devices where supported.",
    "advanced": "Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback.",
    "example": "Read a voluntary environmental sensor.",
    "useCases": [
      "field science",
      "accessibility",
      "hardware labs",
      "interactive exhibits"
    ],
    "tags": [
      "device",
      "permissions",
      "field"
    ],
    "maturity": "conditional",
    "tooltip": "Communicate with compatible nearby devices where supported. Advanced: Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback. Example: Read a voluntary environmental sensor. Recommended for: field science, accessibility, hardware labs."
  },
  {
    "id": "f205",
    "category": "device",
    "categoryTitle": "Device & Sensor Capabilities",
    "name": "WebSerial/WebUSB",
    "summary": "Connect selected hardware on compatible browsers.",
    "advanced": "Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback.",
    "example": "Import measurements from a field instrument.",
    "useCases": [
      "field science",
      "accessibility",
      "hardware labs",
      "interactive exhibits"
    ],
    "tags": [
      "device",
      "permissions",
      "field"
    ],
    "maturity": "conditional",
    "tooltip": "Connect selected hardware on compatible browsers. Advanced: Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback. Example: Import measurements from a field instrument. Recommended for: field science, accessibility, hardware labs."
  },
  {
    "id": "f206",
    "category": "device",
    "categoryTitle": "Device & Sensor Capabilities",
    "name": "Orientation/motion sensors",
    "summary": "Use movement data where appropriate.",
    "advanced": "Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback.",
    "example": "Drive an optional AR field visualization.",
    "useCases": [
      "field science",
      "accessibility",
      "hardware labs",
      "interactive exhibits"
    ],
    "tags": [
      "device",
      "permissions",
      "field"
    ],
    "maturity": "stable",
    "tooltip": "Use movement data where appropriate. Advanced: Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback. Example: Drive an optional AR field visualization. Recommended for: field science, accessibility, hardware labs."
  },
  {
    "id": "f207",
    "category": "background",
    "categoryTitle": "Notifications & Background Work",
    "name": "Push notifications",
    "summary": "Deliver server-originated notifications to opted-in users.",
    "advanced": "Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state.",
    "example": "Notify a reviewer of an assigned decision.",
    "useCases": [
      "PWA collaboration",
      "field apps",
      "project management",
      "community platforms"
    ],
    "tags": [
      "notifications",
      "background",
      "pwa"
    ],
    "maturity": "stable",
    "tooltip": "Deliver server-originated notifications to opted-in users. Advanced: Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state. Example: Notify a reviewer of an assigned decision. Recommended for: PWA collaboration, field apps, project management."
  },
  {
    "id": "f208",
    "category": "background",
    "categoryTitle": "Notifications & Background Work",
    "name": "Background Sync",
    "summary": "Retry queued work after connectivity returns where supported.",
    "advanced": "Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state.",
    "example": "Upload field observations later.",
    "useCases": [
      "PWA collaboration",
      "field apps",
      "project management",
      "community platforms"
    ],
    "tags": [
      "notifications",
      "background",
      "pwa"
    ],
    "maturity": "conditional",
    "tooltip": "Retry queued work after connectivity returns where supported. Advanced: Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state. Example: Upload field observations later. Recommended for: PWA collaboration, field apps, project management."
  },
  {
    "id": "f209",
    "category": "background",
    "categoryTitle": "Notifications & Background Work",
    "name": "Background Fetch",
    "summary": "Handle long downloads more reliably where supported.",
    "advanced": "Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state.",
    "example": "Download an offline map pack.",
    "useCases": [
      "PWA collaboration",
      "field apps",
      "project management",
      "community platforms"
    ],
    "tags": [
      "notifications",
      "background",
      "pwa"
    ],
    "maturity": "conditional",
    "tooltip": "Handle long downloads more reliably where supported. Advanced: Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state. Example: Download an offline map pack. Recommended for: PWA collaboration, field apps, project management."
  },
  {
    "id": "f210",
    "category": "background",
    "categoryTitle": "Notifications & Background Work",
    "name": "Badging",
    "summary": "Show pending items on an installed app icon.",
    "advanced": "Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state.",
    "example": "Display three unread project requests.",
    "useCases": [
      "PWA collaboration",
      "field apps",
      "project management",
      "community platforms"
    ],
    "tags": [
      "notifications",
      "background",
      "pwa"
    ],
    "maturity": "stable",
    "tooltip": "Show pending items on an installed app icon. Advanced: Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state. Example: Display three unread project requests. Recommended for: PWA collaboration, field apps, project management."
  },
  {
    "id": "f211",
    "category": "background",
    "categoryTitle": "Notifications & Background Work",
    "name": "Notification inbox",
    "summary": "Keep an in-app durable record of important alerts.",
    "advanced": "Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state.",
    "example": "Review mentions after returning from offline work.",
    "useCases": [
      "PWA collaboration",
      "field apps",
      "project management",
      "community platforms"
    ],
    "tags": [
      "notifications",
      "background",
      "pwa"
    ],
    "maturity": "stable",
    "tooltip": "Keep an in-app durable record of important alerts. Advanced: Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state. Example: Review mentions after returning from offline work. Recommended for: PWA collaboration, field apps, project management."
  },
  {
    "id": "f212",
    "category": "background",
    "categoryTitle": "Notifications & Background Work",
    "name": "Digest mode",
    "summary": "Group low-priority events.",
    "advanced": "Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state.",
    "example": "Send one daily project summary instead of 30 alerts.",
    "useCases": [
      "PWA collaboration",
      "field apps",
      "project management",
      "community platforms"
    ],
    "tags": [
      "notifications",
      "background",
      "pwa"
    ],
    "maturity": "stable",
    "tooltip": "Group low-priority events. Advanced: Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state. Example: Send one daily project summary instead of 30 alerts. Recommended for: PWA collaboration, field apps, project management."
  },
  {
    "id": "f213",
    "category": "background",
    "categoryTitle": "Notifications & Background Work",
    "name": "Quiet hours",
    "summary": "Respect user-defined interruption windows.",
    "advanced": "Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state.",
    "example": "Suppress noncritical alerts overnight.",
    "useCases": [
      "PWA collaboration",
      "field apps",
      "project management",
      "community platforms"
    ],
    "tags": [
      "notifications",
      "background",
      "pwa"
    ],
    "maturity": "stable",
    "tooltip": "Respect user-defined interruption windows. Advanced: Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state. Example: Suppress noncritical alerts overnight. Recommended for: PWA collaboration, field apps, project management."
  },
  {
    "id": "f214",
    "category": "background",
    "categoryTitle": "Notifications & Background Work",
    "name": "Freshness indicators",
    "summary": "Show when data was last synchronized.",
    "advanced": "Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state.",
    "example": "Mark a dashboard as 2 hours old.",
    "useCases": [
      "PWA collaboration",
      "field apps",
      "project management",
      "community platforms"
    ],
    "tags": [
      "notifications",
      "background",
      "pwa"
    ],
    "maturity": "stable",
    "tooltip": "Show when data was last synchronized. Advanced: Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state. Example: Mark a dashboard as 2 hours old. Recommended for: PWA collaboration, field apps, project management."
  },
  {
    "id": "f215",
    "category": "pwa",
    "categoryTitle": "Advanced PWA Integration",
    "name": "Installable manifest",
    "summary": "Describe app identity, icons and display mode.",
    "advanced": "Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached.",
    "example": "Install the suite from a browser.",
    "useCases": [
      "installable tools",
      "offline suites",
      "desktop-like PWAs",
      "field apps"
    ],
    "tags": [
      "pwa",
      "offline",
      "native"
    ],
    "maturity": "stable",
    "tooltip": "Describe app identity, icons and display mode. Advanced: Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached. Example: Install the suite from a browser. Recommended for: installable tools, offline suites, desktop-like PWAs."
  },
  {
    "id": "f216",
    "category": "pwa",
    "categoryTitle": "Advanced PWA Integration",
    "name": "Versioned service worker",
    "summary": "Cache application shell and manage upgrades.",
    "advanced": "Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached.",
    "example": "Roll out v2 without trapping users on stale code.",
    "useCases": [
      "installable tools",
      "offline suites",
      "desktop-like PWAs",
      "field apps"
    ],
    "tags": [
      "pwa",
      "offline",
      "native"
    ],
    "maturity": "stable",
    "tooltip": "Cache application shell and manage upgrades. Advanced: Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached. Example: Roll out v2 without trapping users on stale code. Recommended for: installable tools, offline suites, desktop-like PWAs."
  },
  {
    "id": "f217",
    "category": "pwa",
    "categoryTitle": "Advanced PWA Integration",
    "name": "App shortcuts",
    "summary": "Expose common actions from the launcher.",
    "advanced": "Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached.",
    "example": "Open New Project directly.",
    "useCases": [
      "installable tools",
      "offline suites",
      "desktop-like PWAs",
      "field apps"
    ],
    "tags": [
      "pwa",
      "offline",
      "native"
    ],
    "maturity": "stable",
    "tooltip": "Expose common actions from the launcher. Advanced: Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached. Example: Open New Project directly. Recommended for: installable tools, offline suites, desktop-like PWAs."
  },
  {
    "id": "f218",
    "category": "pwa",
    "categoryTitle": "Advanced PWA Integration",
    "name": "Protocol handlers",
    "summary": "Handle selected custom links where supported.",
    "advanced": "Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached.",
    "example": "Open pra://project/123 in the app.",
    "useCases": [
      "installable tools",
      "offline suites",
      "desktop-like PWAs",
      "field apps"
    ],
    "tags": [
      "pwa",
      "offline",
      "native"
    ],
    "maturity": "stable",
    "tooltip": "Handle selected custom links where supported. Advanced: Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached. Example: Open pra://project/123 in the app. Recommended for: installable tools, offline suites, desktop-like PWAs."
  },
  {
    "id": "f219",
    "category": "pwa",
    "categoryTitle": "Advanced PWA Integration",
    "name": "Launch handler",
    "summary": "Control how installed launches are routed.",
    "advanced": "Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached.",
    "example": "Reuse or create windows intentionally.",
    "useCases": [
      "installable tools",
      "offline suites",
      "desktop-like PWAs",
      "field apps"
    ],
    "tags": [
      "pwa",
      "offline",
      "native"
    ],
    "maturity": "stable",
    "tooltip": "Control how installed launches are routed. Advanced: Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached. Example: Reuse or create windows intentionally. Recommended for: installable tools, offline suites, desktop-like PWAs."
  },
  {
    "id": "f220",
    "category": "pwa",
    "categoryTitle": "Advanced PWA Integration",
    "name": "Window Controls Overlay",
    "summary": "Use desktop titlebar space where supported.",
    "advanced": "Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached.",
    "example": "Create a denser desktop workspace.",
    "useCases": [
      "installable tools",
      "offline suites",
      "desktop-like PWAs",
      "field apps"
    ],
    "tags": [
      "pwa",
      "offline",
      "native"
    ],
    "maturity": "conditional",
    "tooltip": "Use desktop titlebar space where supported. Advanced: Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached. Example: Create a denser desktop workspace. Recommended for: installable tools, offline suites, desktop-like PWAs."
  },
  {
    "id": "f221",
    "category": "pwa",
    "categoryTitle": "Advanced PWA Integration",
    "name": "Update UX",
    "summary": "Tell users when a new version is ready.",
    "advanced": "Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached.",
    "example": "Apply an update after saving current work.",
    "useCases": [
      "installable tools",
      "offline suites",
      "desktop-like PWAs",
      "field apps"
    ],
    "tags": [
      "pwa",
      "offline",
      "native"
    ],
    "maturity": "stable",
    "tooltip": "Tell users when a new version is ready. Advanced: Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached. Example: Apply an update after saving current work. Recommended for: installable tools, offline suites, desktop-like PWAs."
  },
  {
    "id": "f222",
    "category": "pwa",
    "categoryTitle": "Advanced PWA Integration",
    "name": "Session restore",
    "summary": "Persist open workspace state.",
    "advanced": "Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached.",
    "example": "Return to the same project after restart.",
    "useCases": [
      "installable tools",
      "offline suites",
      "desktop-like PWAs",
      "field apps"
    ],
    "tags": [
      "pwa",
      "offline",
      "native"
    ],
    "maturity": "stable",
    "tooltip": "Persist open workspace state. Advanced: Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached. Example: Return to the same project after restart. Recommended for: installable tools, offline suites, desktop-like PWAs."
  },
  {
    "id": "f223",
    "category": "workflow",
    "categoryTitle": "Workflow & Automation Engines",
    "name": "Finite-state workflows",
    "summary": "Model allowed transitions explicitly.",
    "advanced": "Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated.",
    "example": "Move evidence through draft → review → approved.",
    "useCases": [
      "institutional processes",
      "research review",
      "project operations",
      "agent workflows"
    ],
    "tags": [
      "workflow",
      "automation",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Model allowed transitions explicitly. Advanced: Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated. Example: Move evidence through draft → review → approved. Recommended for: institutional processes, research review, project operations."
  },
  {
    "id": "f224",
    "category": "workflow",
    "categoryTitle": "Workflow & Automation Engines",
    "name": "DAG workflows",
    "summary": "Represent tasks with dependencies.",
    "advanced": "Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated.",
    "example": "Start analysis only when data ingestion and validation finish.",
    "useCases": [
      "institutional processes",
      "research review",
      "project operations",
      "agent workflows"
    ],
    "tags": [
      "workflow",
      "automation",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Represent tasks with dependencies. Advanced: Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated. Example: Start analysis only when data ingestion and validation finish. Recommended for: institutional processes, research review, project operations."
  },
  {
    "id": "f225",
    "category": "workflow",
    "categoryTitle": "Workflow & Automation Engines",
    "name": "Trigger-condition-action rules",
    "summary": "Automate routine responses.",
    "advanced": "Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated.",
    "example": "When evidence is added, assign two reviewers.",
    "useCases": [
      "institutional processes",
      "research review",
      "project operations",
      "agent workflows"
    ],
    "tags": [
      "workflow",
      "automation",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Automate routine responses. Advanced: Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated. Example: When evidence is added, assign two reviewers. Recommended for: institutional processes, research review, project operations."
  },
  {
    "id": "f226",
    "category": "workflow",
    "categoryTitle": "Workflow & Automation Engines",
    "name": "Human approval gates",
    "summary": "Require explicit approval for consequential actions.",
    "advanced": "Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated.",
    "example": "AI drafts a publication but cannot publish it.",
    "useCases": [
      "institutional processes",
      "research review",
      "project operations",
      "agent workflows"
    ],
    "tags": [
      "workflow",
      "automation",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Require explicit approval for consequential actions. Advanced: Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated. Example: AI drafts a publication but cannot publish it. Recommended for: institutional processes, research review, project operations."
  },
  {
    "id": "f227",
    "category": "workflow",
    "categoryTitle": "Workflow & Automation Engines",
    "name": "Dry-run mode",
    "summary": "Preview workflow actions without committing.",
    "advanced": "Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated.",
    "example": "Test a new automation against sample events.",
    "useCases": [
      "institutional processes",
      "research review",
      "project operations",
      "agent workflows"
    ],
    "tags": [
      "workflow",
      "automation",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Preview workflow actions without committing. Advanced: Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated. Example: Test a new automation against sample events. Recommended for: institutional processes, research review, project operations."
  },
  {
    "id": "f228",
    "category": "workflow",
    "categoryTitle": "Workflow & Automation Engines",
    "name": "Retry/dead-letter handling",
    "summary": "Deal with failed external actions safely.",
    "advanced": "Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated.",
    "example": "Retry webhook delivery then queue unresolved failures.",
    "useCases": [
      "institutional processes",
      "research review",
      "project operations",
      "agent workflows"
    ],
    "tags": [
      "workflow",
      "automation",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Deal with failed external actions safely. Advanced: Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated. Example: Retry webhook delivery then queue unresolved failures. Recommended for: institutional processes, research review, project operations."
  },
  {
    "id": "f229",
    "category": "workflow",
    "categoryTitle": "Workflow & Automation Engines",
    "name": "Workflow templates",
    "summary": "Reuse proven processes.",
    "advanced": "Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated.",
    "example": "Clone a community consultation workflow.",
    "useCases": [
      "institutional processes",
      "research review",
      "project operations",
      "agent workflows"
    ],
    "tags": [
      "workflow",
      "automation",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Reuse proven processes. Advanced: Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated. Example: Clone a community consultation workflow. Recommended for: institutional processes, research review, project operations."
  },
  {
    "id": "f230",
    "category": "workflow",
    "categoryTitle": "Workflow & Automation Engines",
    "name": "Automation history",
    "summary": "Inspect what executed and why.",
    "advanced": "Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated.",
    "example": "Audit who approved an automated assignment.",
    "useCases": [
      "institutional processes",
      "research review",
      "project operations",
      "agent workflows"
    ],
    "tags": [
      "workflow",
      "automation",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Inspect what executed and why. Advanced: Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated. Example: Audit who approved an automated assignment. Recommended for: institutional processes, research review, project operations."
  },
  {
    "id": "f231",
    "category": "decision",
    "categoryTitle": "Decision Support & Scenario Analysis",
    "name": "Multi-criteria analysis",
    "summary": "Compare options across explicit dimensions.",
    "advanced": "Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible.",
    "example": "Explore cost, time, access and ecological impact.",
    "useCases": [
      "planning",
      "resource allocation",
      "systems engineering",
      "training"
    ],
    "tags": [
      "decision",
      "simulation",
      "analysis"
    ],
    "maturity": "stable",
    "tooltip": "Compare options across explicit dimensions. Advanced: Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible. Example: Explore cost, time, access and ecological impact. Recommended for: planning, resource allocation, systems engineering."
  },
  {
    "id": "f232",
    "category": "decision",
    "categoryTitle": "Decision Support & Scenario Analysis",
    "name": "Sensitivity analysis",
    "summary": "Show how conclusions change with assumptions.",
    "advanced": "Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible.",
    "example": "Vary energy-price assumptions across scenarios.",
    "useCases": [
      "planning",
      "resource allocation",
      "systems engineering",
      "training"
    ],
    "tags": [
      "decision",
      "simulation",
      "analysis"
    ],
    "maturity": "stable",
    "tooltip": "Show how conclusions change with assumptions. Advanced: Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible. Example: Vary energy-price assumptions across scenarios. Recommended for: planning, resource allocation, systems engineering."
  },
  {
    "id": "f233",
    "category": "decision",
    "categoryTitle": "Decision Support & Scenario Analysis",
    "name": "Monte Carlo simulation",
    "summary": "Propagate uncertainty through repeated sampling.",
    "advanced": "Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible.",
    "example": "Estimate outcome ranges rather than one point estimate.",
    "useCases": [
      "planning",
      "resource allocation",
      "systems engineering",
      "training"
    ],
    "tags": [
      "decision",
      "simulation",
      "analysis"
    ],
    "maturity": "stable",
    "tooltip": "Propagate uncertainty through repeated sampling. Advanced: Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible. Example: Estimate outcome ranges rather than one point estimate. Recommended for: planning, resource allocation, systems engineering."
  },
  {
    "id": "f234",
    "category": "decision",
    "categoryTitle": "Decision Support & Scenario Analysis",
    "name": "Risk register",
    "summary": "Track likelihood, impact, mitigations and owners.",
    "advanced": "Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible.",
    "example": "Manage project delivery risks.",
    "useCases": [
      "planning",
      "resource allocation",
      "systems engineering",
      "training"
    ],
    "tags": [
      "decision",
      "simulation",
      "analysis"
    ],
    "maturity": "stable",
    "tooltip": "Track likelihood, impact, mitigations and owners. Advanced: Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible. Example: Manage project delivery risks. Recommended for: planning, resource allocation, systems engineering."
  },
  {
    "id": "f235",
    "category": "decision",
    "categoryTitle": "Decision Support & Scenario Analysis",
    "name": "Assumption registry",
    "summary": "List premises behind models and plans.",
    "advanced": "Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible.",
    "example": "Mark a population-growth figure as an assumption.",
    "useCases": [
      "planning",
      "resource allocation",
      "systems engineering",
      "training"
    ],
    "tags": [
      "decision",
      "simulation",
      "analysis"
    ],
    "maturity": "stable",
    "tooltip": "List premises behind models and plans. Advanced: Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible. Example: Mark a population-growth figure as an assumption. Recommended for: planning, resource allocation, systems engineering."
  },
  {
    "id": "f236",
    "category": "decision",
    "categoryTitle": "Decision Support & Scenario Analysis",
    "name": "What-if engine",
    "summary": "Change parameters interactively.",
    "advanced": "Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible.",
    "example": "Compare water demand under several conservation rates.",
    "useCases": [
      "planning",
      "resource allocation",
      "systems engineering",
      "training"
    ],
    "tags": [
      "decision",
      "simulation",
      "analysis"
    ],
    "maturity": "stable",
    "tooltip": "Change parameters interactively. Advanced: Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible. Example: Compare water demand under several conservation rates. Recommended for: planning, resource allocation, systems engineering."
  },
  {
    "id": "f237",
    "category": "decision",
    "categoryTitle": "Decision Support & Scenario Analysis",
    "name": "Decision log",
    "summary": "Record rationale and revisit dates.",
    "advanced": "Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible.",
    "example": "Explain why a team selected a design.",
    "useCases": [
      "planning",
      "resource allocation",
      "systems engineering",
      "training"
    ],
    "tags": [
      "decision",
      "simulation",
      "analysis"
    ],
    "maturity": "stable",
    "tooltip": "Record rationale and revisit dates. Advanced: Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible. Example: Explain why a team selected a design. Recommended for: planning, resource allocation, systems engineering."
  },
  {
    "id": "f238",
    "category": "decision",
    "categoryTitle": "Decision Support & Scenario Analysis",
    "name": "Counterfactual review",
    "summary": "Compare observed outcomes to plausible alternatives.",
    "advanced": "Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible.",
    "example": "Study whether a completed intervention met expectations.",
    "useCases": [
      "planning",
      "resource allocation",
      "systems engineering",
      "training"
    ],
    "tags": [
      "decision",
      "simulation",
      "analysis"
    ],
    "maturity": "stable",
    "tooltip": "Compare observed outcomes to plausible alternatives. Advanced: Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible. Example: Study whether a completed intervention met expectations. Recommended for: planning, resource allocation, systems engineering."
  },
  {
    "id": "f239",
    "category": "science",
    "categoryTitle": "Scientific & Data Analysis",
    "name": "CSV/JSON/Parquet ingestion",
    "summary": "Load common analytical formats.",
    "advanced": "Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited.",
    "example": "Analyze an open-data table.",
    "useCases": [
      "research",
      "planning",
      "education",
      "evidence-based projects"
    ],
    "tags": [
      "science",
      "data",
      "analysis"
    ],
    "maturity": "stable",
    "tooltip": "Load common analytical formats. Advanced: Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited. Example: Analyze an open-data table. Recommended for: research, planning, education."
  },
  {
    "id": "f240",
    "category": "science",
    "categoryTitle": "Scientific & Data Analysis",
    "name": "Statistical summaries",
    "summary": "Compute distributions, correlations and uncertainty.",
    "advanced": "Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited.",
    "example": "Profile a survey dataset.",
    "useCases": [
      "research",
      "planning",
      "education",
      "evidence-based projects"
    ],
    "tags": [
      "science",
      "data",
      "analysis"
    ],
    "maturity": "stable",
    "tooltip": "Compute distributions, correlations and uncertainty. Advanced: Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited. Example: Profile a survey dataset. Recommended for: research, planning, education."
  },
  {
    "id": "f241",
    "category": "science",
    "categoryTitle": "Scientific & Data Analysis",
    "name": "Regression models",
    "summary": "Explore relationships among variables.",
    "advanced": "Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited.",
    "example": "Estimate association between access and travel time.",
    "useCases": [
      "research",
      "planning",
      "education",
      "evidence-based projects"
    ],
    "tags": [
      "science",
      "data",
      "analysis"
    ],
    "maturity": "stable",
    "tooltip": "Explore relationships among variables. Advanced: Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited. Example: Estimate association between access and travel time. Recommended for: research, planning, education."
  },
  {
    "id": "f242",
    "category": "science",
    "categoryTitle": "Scientific & Data Analysis",
    "name": "Time-series analysis",
    "summary": "Analyze change over time.",
    "advanced": "Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited.",
    "example": "Track reservoir levels or project metrics.",
    "useCases": [
      "research",
      "planning",
      "education",
      "evidence-based projects"
    ],
    "tags": [
      "science",
      "data",
      "analysis"
    ],
    "maturity": "stable",
    "tooltip": "Analyze change over time. Advanced: Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited. Example: Track reservoir levels or project metrics. Recommended for: research, planning, education."
  },
  {
    "id": "f243",
    "category": "science",
    "categoryTitle": "Scientific & Data Analysis",
    "name": "Graph algorithms",
    "summary": "Analyze network structure.",
    "advanced": "Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited.",
    "example": "Find highly connected collaboration hubs.",
    "useCases": [
      "research",
      "planning",
      "education",
      "evidence-based projects"
    ],
    "tags": [
      "science",
      "data",
      "analysis"
    ],
    "maturity": "stable",
    "tooltip": "Analyze network structure. Advanced: Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited. Example: Find highly connected collaboration hubs. Recommended for: research, planning, education."
  },
  {
    "id": "f244",
    "category": "science",
    "categoryTitle": "Scientific & Data Analysis",
    "name": "Spatial statistics",
    "summary": "Quantify geographic patterns.",
    "advanced": "Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited.",
    "example": "Analyze clustering of service gaps.",
    "useCases": [
      "research",
      "planning",
      "education",
      "evidence-based projects"
    ],
    "tags": [
      "science",
      "data",
      "analysis"
    ],
    "maturity": "stable",
    "tooltip": "Quantify geographic patterns. Advanced: Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited. Example: Analyze clustering of service gaps. Recommended for: research, planning, education."
  },
  {
    "id": "f245",
    "category": "science",
    "categoryTitle": "Scientific & Data Analysis",
    "name": "Unit/dimensional analysis",
    "summary": "Check and convert quantities safely.",
    "advanced": "Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited.",
    "example": "Prevent mixing liters and gallons in calculations.",
    "useCases": [
      "research",
      "planning",
      "education",
      "evidence-based projects"
    ],
    "tags": [
      "science",
      "data",
      "analysis"
    ],
    "maturity": "stable",
    "tooltip": "Check and convert quantities safely. Advanced: Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited. Example: Prevent mixing liters and gallons in calculations. Recommended for: research, planning, education."
  },
  {
    "id": "f246",
    "category": "science",
    "categoryTitle": "Scientific & Data Analysis",
    "name": "Reproducible notebook cells",
    "summary": "Combine narrative, data and calculations.",
    "advanced": "Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited.",
    "example": "Publish a rerunnable project analysis.",
    "useCases": [
      "research",
      "planning",
      "education",
      "evidence-based projects"
    ],
    "tags": [
      "science",
      "data",
      "analysis"
    ],
    "maturity": "stable",
    "tooltip": "Combine narrative, data and calculations. Advanced: Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited. Example: Publish a rerunnable project analysis. Recommended for: research, planning, education."
  },
  {
    "id": "f247",
    "category": "governance",
    "categoryTitle": "Governance & Deliberation",
    "name": "Versioned proposals",
    "summary": "Track amendments over time.",
    "advanced": "Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote.",
    "example": "Compare proposal v2 with the original.",
    "useCases": [
      "cooperatives",
      "institutions",
      "community projects",
      "research groups"
    ],
    "tags": [
      "governance",
      "collaboration",
      "trust"
    ],
    "maturity": "stable",
    "tooltip": "Track amendments over time. Advanced: Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote. Example: Compare proposal v2 with the original. Recommended for: cooperatives, institutions, community projects."
  },
  {
    "id": "f248",
    "category": "governance",
    "categoryTitle": "Governance & Deliberation",
    "name": "Structured objections",
    "summary": "Record unresolved concerns and responses.",
    "advanced": "Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote.",
    "example": "Keep accessibility concerns attached to a decision.",
    "useCases": [
      "cooperatives",
      "institutions",
      "community projects",
      "research groups"
    ],
    "tags": [
      "governance",
      "collaboration",
      "trust"
    ],
    "maturity": "stable",
    "tooltip": "Record unresolved concerns and responses. Advanced: Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote. Example: Keep accessibility concerns attached to a decision. Recommended for: cooperatives, institutions, community projects."
  },
  {
    "id": "f249",
    "category": "governance",
    "categoryTitle": "Governance & Deliberation",
    "name": "Quorum rules",
    "summary": "Define minimum participation for a decision.",
    "advanced": "Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote.",
    "example": "Delay a formal vote until enough members participate.",
    "useCases": [
      "cooperatives",
      "institutions",
      "community projects",
      "research groups"
    ],
    "tags": [
      "governance",
      "collaboration",
      "trust"
    ],
    "maturity": "stable",
    "tooltip": "Define minimum participation for a decision. Advanced: Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote. Example: Delay a formal vote until enough members participate. Recommended for: cooperatives, institutions, community projects."
  },
  {
    "id": "f250",
    "category": "governance",
    "categoryTitle": "Governance & Deliberation",
    "name": "Voting methods",
    "summary": "Support context-appropriate approval, ranked or consent mechanisms.",
    "advanced": "Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote.",
    "example": "Run an advisory preference poll.",
    "useCases": [
      "cooperatives",
      "institutions",
      "community projects",
      "research groups"
    ],
    "tags": [
      "governance",
      "collaboration",
      "trust"
    ],
    "maturity": "stable",
    "tooltip": "Support context-appropriate approval, ranked or consent mechanisms. Advanced: Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote. Example: Run an advisory preference poll. Recommended for: cooperatives, institutions, community projects."
  },
  {
    "id": "f251",
    "category": "governance",
    "categoryTitle": "Governance & Deliberation",
    "name": "Delegation",
    "summary": "Permit revocable delegation where governance allows.",
    "advanced": "Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote.",
    "example": "Temporarily delegate a committee vote.",
    "useCases": [
      "cooperatives",
      "institutions",
      "community projects",
      "research groups"
    ],
    "tags": [
      "governance",
      "collaboration",
      "trust"
    ],
    "maturity": "stable",
    "tooltip": "Permit revocable delegation where governance allows. Advanced: Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote. Example: Temporarily delegate a committee vote. Recommended for: cooperatives, institutions, community projects."
  },
  {
    "id": "f252",
    "category": "governance",
    "categoryTitle": "Governance & Deliberation",
    "name": "Conflict-of-interest disclosure",
    "summary": "Record relevant conflicts.",
    "advanced": "Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote.",
    "example": "Mark a reviewer connected to a vendor.",
    "useCases": [
      "cooperatives",
      "institutions",
      "community projects",
      "research groups"
    ],
    "tags": [
      "governance",
      "collaboration",
      "trust"
    ],
    "maturity": "stable",
    "tooltip": "Record relevant conflicts. Advanced: Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote. Example: Mark a reviewer connected to a vendor. Recommended for: cooperatives, institutions, community projects."
  },
  {
    "id": "f253",
    "category": "governance",
    "categoryTitle": "Governance & Deliberation",
    "name": "Appeals/review dates",
    "summary": "Create formal reconsideration paths.",
    "advanced": "Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote.",
    "example": "Automatically reopen a policy after one year.",
    "useCases": [
      "cooperatives",
      "institutions",
      "community projects",
      "research groups"
    ],
    "tags": [
      "governance",
      "collaboration",
      "trust"
    ],
    "maturity": "stable",
    "tooltip": "Create formal reconsideration paths. Advanced: Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote. Example: Automatically reopen a policy after one year. Recommended for: cooperatives, institutions, community projects."
  },
  {
    "id": "f254",
    "category": "governance",
    "categoryTitle": "Governance & Deliberation",
    "name": "Dissent record",
    "summary": "Preserve minority reasoning.",
    "advanced": "Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote.",
    "example": "Publish a decision with documented objections.",
    "useCases": [
      "cooperatives",
      "institutions",
      "community projects",
      "research groups"
    ],
    "tags": [
      "governance",
      "collaboration",
      "trust"
    ],
    "maturity": "stable",
    "tooltip": "Preserve minority reasoning. Advanced: Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote. Example: Publish a decision with documented objections. Recommended for: cooperatives, institutions, community projects."
  },
  {
    "id": "f255",
    "category": "game",
    "categoryTitle": "Gamification Tied to Real Work",
    "name": "Quest engine",
    "summary": "Represent useful work as structured missions.",
    "advanced": "Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score.",
    "example": "Create an Evidence Guardian quest to verify five claims.",
    "useCases": [
      "education",
      "volunteer coordination",
      "community projects",
      "serious games"
    ],
    "tags": [
      "gamification",
      "learning",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Represent useful work as structured missions. Advanced: Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score. Example: Create an Evidence Guardian quest to verify five claims. Recommended for: education, volunteer coordination, community projects."
  },
  {
    "id": "f256",
    "category": "game",
    "categoryTitle": "Gamification Tied to Real Work",
    "name": "Skill trees",
    "summary": "Show learning and capability pathways.",
    "advanced": "Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score.",
    "example": "Progress from water concepts to field assessment to mentoring.",
    "useCases": [
      "education",
      "volunteer coordination",
      "community projects",
      "serious games"
    ],
    "tags": [
      "gamification",
      "learning",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Show learning and capability pathways. Advanced: Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score. Example: Progress from water concepts to field assessment to mentoring. Recommended for: education, volunteer coordination, community projects."
  },
  {
    "id": "f257",
    "category": "game",
    "categoryTitle": "Gamification Tied to Real Work",
    "name": "Team XP",
    "summary": "Reward cooperative achievement.",
    "advanced": "Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score.",
    "example": "A cross-domain team gains progress for completing a reviewed milestone.",
    "useCases": [
      "education",
      "volunteer coordination",
      "community projects",
      "serious games"
    ],
    "tags": [
      "gamification",
      "learning",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Reward cooperative achievement. Advanced: Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score. Example: A cross-domain team gains progress for completing a reviewed milestone. Recommended for: education, volunteer coordination, community projects."
  },
  {
    "id": "f258",
    "category": "game",
    "categoryTitle": "Gamification Tied to Real Work",
    "name": "Contribution ledger",
    "summary": "Record meaningful verified actions.",
    "advanced": "Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score.",
    "example": "Credit translation, mentoring and bug fixes.",
    "useCases": [
      "education",
      "volunteer coordination",
      "community projects",
      "serious games"
    ],
    "tags": [
      "gamification",
      "learning",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Record meaningful verified actions. Advanced: Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score. Example: Credit translation, mentoring and bug fixes. Recommended for: education, volunteer coordination, community projects."
  },
  {
    "id": "f259",
    "category": "game",
    "categoryTitle": "Gamification Tied to Real Work",
    "name": "Achievement provenance",
    "summary": "Attach evidence to badges.",
    "advanced": "Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score.",
    "example": "A badge links to completed quests and reviews.",
    "useCases": [
      "education",
      "volunteer coordination",
      "community projects",
      "serious games"
    ],
    "tags": [
      "gamification",
      "learning",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Attach evidence to badges. Advanced: Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score. Example: A badge links to completed quests and reviews. Recommended for: education, volunteer coordination, community projects."
  },
  {
    "id": "f260",
    "category": "game",
    "categoryTitle": "Gamification Tied to Real Work",
    "name": "Community milestones",
    "summary": "Track collective progress.",
    "advanced": "Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score.",
    "example": "Unlock a new scenario when a region verifies 100 datasets.",
    "useCases": [
      "education",
      "volunteer coordination",
      "community projects",
      "serious games"
    ],
    "tags": [
      "gamification",
      "learning",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Track collective progress. Advanced: Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score. Example: Unlock a new scenario when a region verifies 100 datasets. Recommended for: education, volunteer coordination, community projects."
  },
  {
    "id": "f261",
    "category": "game",
    "categoryTitle": "Gamification Tied to Real Work",
    "name": "Anti-Goodhart rules",
    "summary": "Reduce incentives to spam measured actions.",
    "advanced": "Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score.",
    "example": "Diminish XP for repetitive low-value tasks.",
    "useCases": [
      "education",
      "volunteer coordination",
      "community projects",
      "serious games"
    ],
    "tags": [
      "gamification",
      "learning",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Reduce incentives to spam measured actions. Advanced: Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score. Example: Diminish XP for repetitive low-value tasks. Recommended for: education, volunteer coordination, community projects."
  },
  {
    "id": "f262",
    "category": "game",
    "categoryTitle": "Gamification Tied to Real Work",
    "name": "Disable-gamification mode",
    "summary": "Keep core functionality available without game UI.",
    "advanced": "Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score.",
    "example": "Let an institution use the platform in a formal mode.",
    "useCases": [
      "education",
      "volunteer coordination",
      "community projects",
      "serious games"
    ],
    "tags": [
      "gamification",
      "learning",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Keep core functionality available without game UI. Advanced: Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score. Example: Let an institution use the platform in a formal mode. Recommended for: education, volunteer coordination, community projects."
  },
  {
    "id": "f263",
    "category": "ux",
    "categoryTitle": "Advanced UX & Workspace Architecture",
    "name": "Command palette",
    "summary": "Search and execute actions from the keyboard.",
    "advanced": "Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links.",
    "example": "Jump to a project or create a task.",
    "useCases": [
      "large suites",
      "professional tools",
      "learning platforms",
      "mobile/desktop apps"
    ],
    "tags": [
      "ux",
      "navigation",
      "workspace"
    ],
    "maturity": "stable",
    "tooltip": "Search and execute actions from the keyboard. Advanced: Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links. Example: Jump to a project or create a task. Recommended for: large suites, professional tools, learning platforms."
  },
  {
    "id": "f264",
    "category": "ux",
    "categoryTitle": "Advanced UX & Workspace Architecture",
    "name": "Universal search",
    "summary": "Search across modules and object types.",
    "advanced": "Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links.",
    "example": "Find people, evidence and projects in one box.",
    "useCases": [
      "large suites",
      "professional tools",
      "learning platforms",
      "mobile/desktop apps"
    ],
    "tags": [
      "ux",
      "navigation",
      "workspace"
    ],
    "maturity": "stable",
    "tooltip": "Search across modules and object types. Advanced: Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links. Example: Find people, evidence and projects in one box. Recommended for: large suites, professional tools, learning platforms."
  },
  {
    "id": "f265",
    "category": "ux",
    "categoryTitle": "Advanced UX & Workspace Architecture",
    "name": "Split panes",
    "summary": "Compare or edit multiple views.",
    "advanced": "Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links.",
    "example": "Read evidence while updating a decision.",
    "useCases": [
      "large suites",
      "professional tools",
      "learning platforms",
      "mobile/desktop apps"
    ],
    "tags": [
      "ux",
      "navigation",
      "workspace"
    ],
    "maturity": "stable",
    "tooltip": "Compare or edit multiple views. Advanced: Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links. Example: Read evidence while updating a decision. Recommended for: large suites, professional tools, learning platforms."
  },
  {
    "id": "f266",
    "category": "ux",
    "categoryTitle": "Advanced UX & Workspace Architecture",
    "name": "Saved layouts",
    "summary": "Persist workspace arrangement.",
    "advanced": "Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links.",
    "example": "Restore a research layout with map and evidence panel.",
    "useCases": [
      "large suites",
      "professional tools",
      "learning platforms",
      "mobile/desktop apps"
    ],
    "tags": [
      "ux",
      "navigation",
      "workspace"
    ],
    "maturity": "stable",
    "tooltip": "Persist workspace arrangement. Advanced: Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links. Example: Restore a research layout with map and evidence panel. Recommended for: large suites, professional tools, learning platforms."
  },
  {
    "id": "f267",
    "category": "ux",
    "categoryTitle": "Advanced UX & Workspace Architecture",
    "name": "Guided/expert modes",
    "summary": "Change information density without removing functionality.",
    "advanced": "Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links.",
    "example": "Show simplified actions to newcomers and raw schemas to experts.",
    "useCases": [
      "large suites",
      "professional tools",
      "learning platforms",
      "mobile/desktop apps"
    ],
    "tags": [
      "ux",
      "navigation",
      "workspace"
    ],
    "maturity": "stable",
    "tooltip": "Change information density without removing functionality. Advanced: Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links. Example: Show simplified actions to newcomers and raw schemas to experts. Recommended for: large suites, professional tools, learning platforms."
  },
  {
    "id": "f268",
    "category": "ux",
    "categoryTitle": "Advanced UX & Workspace Architecture",
    "name": "Contextual help",
    "summary": "Explain controls in place.",
    "advanced": "Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links.",
    "example": "Open an extended tooltip describing CRDT trade-offs.",
    "useCases": [
      "large suites",
      "professional tools",
      "learning platforms",
      "mobile/desktop apps"
    ],
    "tags": [
      "ux",
      "navigation",
      "workspace"
    ],
    "maturity": "stable",
    "tooltip": "Explain controls in place. Advanced: Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links. Example: Open an extended tooltip describing CRDT trade-offs. Recommended for: large suites, professional tools, learning platforms."
  },
  {
    "id": "f269",
    "category": "ux",
    "categoryTitle": "Advanced UX & Workspace Architecture",
    "name": "Deep links",
    "summary": "Make application state linkable.",
    "advanced": "Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links.",
    "example": "Share a URL opening a specific project tab.",
    "useCases": [
      "large suites",
      "professional tools",
      "learning platforms",
      "mobile/desktop apps"
    ],
    "tags": [
      "ux",
      "navigation",
      "workspace"
    ],
    "maturity": "stable",
    "tooltip": "Make application state linkable. Advanced: Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links. Example: Share a URL opening a specific project tab. Recommended for: large suites, professional tools, learning platforms."
  },
  {
    "id": "f270",
    "category": "ux",
    "categoryTitle": "Advanced UX & Workspace Architecture",
    "name": "Responsive drawer/navigation",
    "summary": "Use one route registry across desktop and mobile menus.",
    "advanced": "Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links.",
    "example": "Keep active-route state consistent.",
    "useCases": [
      "large suites",
      "professional tools",
      "learning platforms",
      "mobile/desktop apps"
    ],
    "tags": [
      "ux",
      "navigation",
      "workspace"
    ],
    "maturity": "stable",
    "tooltip": "Use one route registry across desktop and mobile menus. Advanced: Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links. Example: Keep active-route state consistent. Recommended for: large suites, professional tools, learning platforms."
  },
  {
    "id": "f271",
    "category": "knowledge",
    "categoryTitle": "Collaborative Knowledge Management",
    "name": "Wiki pages",
    "summary": "Create versioned collaborative reference pages.",
    "advanced": "Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows.",
    "example": "Maintain a regional water-system overview.",
    "useCases": [
      "research archives",
      "institutional memory",
      "community knowledge",
      "documentation"
    ],
    "tags": [
      "knowledge",
      "collaboration",
      "wiki"
    ],
    "maturity": "stable",
    "tooltip": "Create versioned collaborative reference pages. Advanced: Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows. Example: Maintain a regional water-system overview. Recommended for: research archives, institutional memory, community knowledge."
  },
  {
    "id": "f272",
    "category": "knowledge",
    "categoryTitle": "Collaborative Knowledge Management",
    "name": "Backlinks",
    "summary": "Show objects that reference the current one.",
    "advanced": "Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows.",
    "example": "See all projects using a dataset.",
    "useCases": [
      "research archives",
      "institutional memory",
      "community knowledge",
      "documentation"
    ],
    "tags": [
      "knowledge",
      "collaboration",
      "wiki"
    ],
    "maturity": "stable",
    "tooltip": "Show objects that reference the current one. Advanced: Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows. Example: See all projects using a dataset. Recommended for: research archives, institutional memory, community knowledge."
  },
  {
    "id": "f273",
    "category": "knowledge",
    "categoryTitle": "Collaborative Knowledge Management",
    "name": "Annotations",
    "summary": "Attach comments to precise source passages.",
    "advanced": "Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows.",
    "example": "Discuss one claim in a report.",
    "useCases": [
      "research archives",
      "institutional memory",
      "community knowledge",
      "documentation"
    ],
    "tags": [
      "knowledge",
      "collaboration",
      "wiki"
    ],
    "maturity": "stable",
    "tooltip": "Attach comments to precise source passages. Advanced: Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows. Example: Discuss one claim in a report. Recommended for: research archives, institutional memory, community knowledge."
  },
  {
    "id": "f274",
    "category": "knowledge",
    "categoryTitle": "Collaborative Knowledge Management",
    "name": "Suggested edits",
    "summary": "Separate proposals from accepted text.",
    "advanced": "Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows.",
    "example": "Review a contributor rewrite.",
    "useCases": [
      "research archives",
      "institutional memory",
      "community knowledge",
      "documentation"
    ],
    "tags": [
      "knowledge",
      "collaboration",
      "wiki"
    ],
    "maturity": "stable",
    "tooltip": "Separate proposals from accepted text. Advanced: Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows. Example: Review a contributor rewrite. Recommended for: research archives, institutional memory, community knowledge."
  },
  {
    "id": "f275",
    "category": "knowledge",
    "categoryTitle": "Collaborative Knowledge Management",
    "name": "Draft/published states",
    "summary": "Distinguish work-in-progress from public material.",
    "advanced": "Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows.",
    "example": "Keep internal notes private until approved.",
    "useCases": [
      "research archives",
      "institutional memory",
      "community knowledge",
      "documentation"
    ],
    "tags": [
      "knowledge",
      "collaboration",
      "wiki"
    ],
    "maturity": "stable",
    "tooltip": "Distinguish work-in-progress from public material. Advanced: Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows. Example: Keep internal notes private until approved. Recommended for: research archives, institutional memory, community knowledge."
  },
  {
    "id": "f276",
    "category": "knowledge",
    "categoryTitle": "Collaborative Knowledge Management",
    "name": "Glossary/ontology",
    "summary": "Define shared terms.",
    "advanced": "Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows.",
    "example": "Explain what resilience means in each domain.",
    "useCases": [
      "research archives",
      "institutional memory",
      "community knowledge",
      "documentation"
    ],
    "tags": [
      "knowledge",
      "collaboration",
      "wiki"
    ],
    "maturity": "stable",
    "tooltip": "Define shared terms. Advanced: Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows. Example: Explain what resilience means in each domain. Recommended for: research archives, institutional memory, community knowledge."
  },
  {
    "id": "f277",
    "category": "knowledge",
    "categoryTitle": "Collaborative Knowledge Management",
    "name": "Cross-project references",
    "summary": "Link work instead of duplicating it.",
    "advanced": "Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows.",
    "example": "Reuse one evidence record across food and health projects.",
    "useCases": [
      "research archives",
      "institutional memory",
      "community knowledge",
      "documentation"
    ],
    "tags": [
      "knowledge",
      "collaboration",
      "wiki"
    ],
    "maturity": "stable",
    "tooltip": "Link work instead of duplicating it. Advanced: Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows. Example: Reuse one evidence record across food and health projects. Recommended for: research archives, institutional memory, community knowledge."
  },
  {
    "id": "f278",
    "category": "knowledge",
    "categoryTitle": "Collaborative Knowledge Management",
    "name": "Knowledge packs",
    "summary": "Export a curated subset of linked material.",
    "advanced": "Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows.",
    "example": "Create an offline training pack.",
    "useCases": [
      "research archives",
      "institutional memory",
      "community knowledge",
      "documentation"
    ],
    "tags": [
      "knowledge",
      "collaboration",
      "wiki"
    ],
    "maturity": "stable",
    "tooltip": "Export a curated subset of linked material. Advanced: Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows. Example: Create an offline training pack. Recommended for: research archives, institutional memory, community knowledge."
  },
  {
    "id": "f279",
    "category": "interop",
    "categoryTitle": "Interoperability & Open Standards",
    "name": "JSON Schema",
    "summary": "Validate portable structured objects.",
    "advanced": "Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems.",
    "example": "Publish the project record contract.",
    "useCases": [
      "integrations",
      "institutional systems",
      "open data",
      "federation"
    ],
    "tags": [
      "interop",
      "standards",
      "api"
    ],
    "maturity": "stable",
    "tooltip": "Validate portable structured objects. Advanced: Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems. Example: Publish the project record contract. Recommended for: integrations, institutional systems, open data."
  },
  {
    "id": "f280",
    "category": "interop",
    "categoryTitle": "Interoperability & Open Standards",
    "name": "JSON-LD",
    "summary": "Attach machine-readable semantic context.",
    "advanced": "Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems.",
    "example": "Describe people, places and projects with linked identifiers.",
    "useCases": [
      "integrations",
      "institutional systems",
      "open data",
      "federation"
    ],
    "tags": [
      "interop",
      "standards",
      "api"
    ],
    "maturity": "stable",
    "tooltip": "Attach machine-readable semantic context. Advanced: Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems. Example: Describe people, places and projects with linked identifiers. Recommended for: integrations, institutional systems, open data."
  },
  {
    "id": "f281",
    "category": "interop",
    "categoryTitle": "Interoperability & Open Standards",
    "name": "GeoJSON",
    "summary": "Exchange spatial geometry.",
    "advanced": "Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems.",
    "example": "Move project boundaries between tools.",
    "useCases": [
      "integrations",
      "institutional systems",
      "open data",
      "federation"
    ],
    "tags": [
      "interop",
      "standards",
      "api"
    ],
    "maturity": "stable",
    "tooltip": "Exchange spatial geometry. Advanced: Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems. Example: Move project boundaries between tools. Recommended for: integrations, institutional systems, open data."
  },
  {
    "id": "f282",
    "category": "interop",
    "categoryTitle": "Interoperability & Open Standards",
    "name": "iCalendar",
    "summary": "Exchange events and schedules.",
    "advanced": "Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems.",
    "example": "Export workshops to calendars.",
    "useCases": [
      "integrations",
      "institutional systems",
      "open data",
      "federation"
    ],
    "tags": [
      "interop",
      "standards",
      "api"
    ],
    "maturity": "stable",
    "tooltip": "Exchange events and schedules. Advanced: Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems. Example: Export workshops to calendars. Recommended for: integrations, institutional systems, open data."
  },
  {
    "id": "f283",
    "category": "interop",
    "categoryTitle": "Interoperability & Open Standards",
    "name": "OpenAPI",
    "summary": "Describe server APIs.",
    "advanced": "Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems.",
    "example": "Generate clients and documentation from one contract.",
    "useCases": [
      "integrations",
      "institutional systems",
      "open data",
      "federation"
    ],
    "tags": [
      "interop",
      "standards",
      "api"
    ],
    "maturity": "stable",
    "tooltip": "Describe server APIs. Advanced: Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems. Example: Generate clients and documentation from one contract. Recommended for: integrations, institutional systems, open data."
  },
  {
    "id": "f284",
    "category": "interop",
    "categoryTitle": "Interoperability & Open Standards",
    "name": "REST adapters",
    "summary": "Integrate common HTTP services.",
    "advanced": "Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems.",
    "example": "Read a public data API.",
    "useCases": [
      "integrations",
      "institutional systems",
      "open data",
      "federation"
    ],
    "tags": [
      "interop",
      "standards",
      "api"
    ],
    "maturity": "stable",
    "tooltip": "Integrate common HTTP services. Advanced: Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems. Example: Read a public data API. Recommended for: integrations, institutional systems, open data."
  },
  {
    "id": "f285",
    "category": "interop",
    "categoryTitle": "Interoperability & Open Standards",
    "name": "GraphQL adapters",
    "summary": "Query graph-shaped remote data selectively.",
    "advanced": "Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems.",
    "example": "Fetch projects plus contributors in one request.",
    "useCases": [
      "integrations",
      "institutional systems",
      "open data",
      "federation"
    ],
    "tags": [
      "interop",
      "standards",
      "api"
    ],
    "maturity": "stable",
    "tooltip": "Query graph-shaped remote data selectively. Advanced: Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems. Example: Fetch projects plus contributors in one request. Recommended for: integrations, institutional systems, open data."
  },
  {
    "id": "f286",
    "category": "interop",
    "categoryTitle": "Interoperability & Open Standards",
    "name": "Webhooks",
    "summary": "Push signed external events into workflows.",
    "advanced": "Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems.",
    "example": "Trigger review when a repository release appears.",
    "useCases": [
      "integrations",
      "institutional systems",
      "open data",
      "federation"
    ],
    "tags": [
      "interop",
      "standards",
      "api"
    ],
    "maturity": "stable",
    "tooltip": "Push signed external events into workflows. Advanced: Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems. Example: Trigger review when a repository release appears. Recommended for: integrations, institutional systems, open data."
  },
  {
    "id": "f287",
    "category": "devops",
    "categoryTitle": "Deployment, CI/CD & Release Engineering",
    "name": "GitHub Actions",
    "summary": "Automate tests and deployments.",
    "advanced": "Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation.",
    "example": "Publish GitHub Pages after tests pass.",
    "useCases": [
      "public web apps",
      "large suites",
      "institutional deployments",
      "rapid iteration"
    ],
    "tags": [
      "devops",
      "deployment",
      "quality"
    ],
    "maturity": "stable",
    "tooltip": "Automate tests and deployments. Advanced: Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation. Example: Publish GitHub Pages after tests pass. Recommended for: public web apps, large suites, institutional deployments."
  },
  {
    "id": "f288",
    "category": "devops",
    "categoryTitle": "Deployment, CI/CD & Release Engineering",
    "name": "Static analysis/linting",
    "summary": "Catch errors before runtime.",
    "advanced": "Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation.",
    "example": "Reject malformed module metadata.",
    "useCases": [
      "public web apps",
      "large suites",
      "institutional deployments",
      "rapid iteration"
    ],
    "tags": [
      "devops",
      "deployment",
      "quality"
    ],
    "maturity": "stable",
    "tooltip": "Catch errors before runtime. Advanced: Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation. Example: Reject malformed module metadata. Recommended for: public web apps, large suites, institutional deployments."
  },
  {
    "id": "f289",
    "category": "devops",
    "categoryTitle": "Deployment, CI/CD & Release Engineering",
    "name": "Accessibility CI",
    "summary": "Run automated accessibility checks.",
    "advanced": "Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation.",
    "example": "Block regressions in labels or contrast.",
    "useCases": [
      "public web apps",
      "large suites",
      "institutional deployments",
      "rapid iteration"
    ],
    "tags": [
      "devops",
      "deployment",
      "quality"
    ],
    "maturity": "stable",
    "tooltip": "Run automated accessibility checks. Advanced: Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation. Example: Block regressions in labels or contrast. Recommended for: public web apps, large suites, institutional deployments."
  },
  {
    "id": "f290",
    "category": "devops",
    "categoryTitle": "Deployment, CI/CD & Release Engineering",
    "name": "Dependency audit",
    "summary": "Detect vulnerable or outdated dependencies.",
    "advanced": "Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation.",
    "example": "Review third-party packages before release.",
    "useCases": [
      "public web apps",
      "large suites",
      "institutional deployments",
      "rapid iteration"
    ],
    "tags": [
      "devops",
      "deployment",
      "quality"
    ],
    "maturity": "stable",
    "tooltip": "Detect vulnerable or outdated dependencies. Advanced: Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation. Example: Review third-party packages before release. Recommended for: public web apps, large suites, institutional deployments."
  },
  {
    "id": "f291",
    "category": "devops",
    "categoryTitle": "Deployment, CI/CD & Release Engineering",
    "name": "Bundle-size budgets",
    "summary": "Prevent uncontrolled frontend growth.",
    "advanced": "Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation.",
    "example": "Fail CI if initial JS exceeds a threshold.",
    "useCases": [
      "public web apps",
      "large suites",
      "institutional deployments",
      "rapid iteration"
    ],
    "tags": [
      "devops",
      "deployment",
      "quality"
    ],
    "maturity": "stable",
    "tooltip": "Prevent uncontrolled frontend growth. Advanced: Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation. Example: Fail CI if initial JS exceeds a threshold. Recommended for: public web apps, large suites, institutional deployments."
  },
  {
    "id": "f292",
    "category": "devops",
    "categoryTitle": "Deployment, CI/CD & Release Engineering",
    "name": "Canary deployment",
    "summary": "Release to a small cohort first.",
    "advanced": "Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation.",
    "example": "Test a new sync protocol with beta rooms.",
    "useCases": [
      "public web apps",
      "large suites",
      "institutional deployments",
      "rapid iteration"
    ],
    "tags": [
      "devops",
      "deployment",
      "quality"
    ],
    "maturity": "stable",
    "tooltip": "Release to a small cohort first. Advanced: Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation. Example: Test a new sync protocol with beta rooms. Recommended for: public web apps, large suites, institutional deployments."
  },
  {
    "id": "f293",
    "category": "devops",
    "categoryTitle": "Deployment, CI/CD & Release Engineering",
    "name": "Release checksums",
    "summary": "Publish hashes beside release artifacts.",
    "advanced": "Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation.",
    "example": "Verify downloaded ZIP integrity.",
    "useCases": [
      "public web apps",
      "large suites",
      "institutional deployments",
      "rapid iteration"
    ],
    "tags": [
      "devops",
      "deployment",
      "quality"
    ],
    "maturity": "stable",
    "tooltip": "Publish hashes beside release artifacts. Advanced: Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation. Example: Verify downloaded ZIP integrity. Recommended for: public web apps, large suites, institutional deployments."
  },
  {
    "id": "f294",
    "category": "devops",
    "categoryTitle": "Deployment, CI/CD & Release Engineering",
    "name": "Rollback artifacts",
    "summary": "Retain known-good deployable versions.",
    "advanced": "Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation.",
    "example": "Restore the previous service worker quickly.",
    "useCases": [
      "public web apps",
      "large suites",
      "institutional deployments",
      "rapid iteration"
    ],
    "tags": [
      "devops",
      "deployment",
      "quality"
    ],
    "maturity": "stable",
    "tooltip": "Retain known-good deployable versions. Advanced: Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation. Example: Restore the previous service worker quickly. Recommended for: public web apps, large suites, institutional deployments."
  },
  {
    "id": "f295",
    "category": "presence",
    "categoryTitle": "Multiplayer Presence & Social Context",
    "name": "Online/away state",
    "summary": "Show approximate availability.",
    "advanced": "Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed.",
    "example": "Avoid assigning a synchronous task to an offline participant.",
    "useCases": [
      "shared docs",
      "workshops",
      "multidisciplinary rooms",
      "team coordination"
    ],
    "tags": [
      "presence",
      "multiplayer",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Show approximate availability. Advanced: Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed. Example: Avoid assigning a synchronous task to an offline participant. Recommended for: shared docs, workshops, multidisciplinary rooms."
  },
  {
    "id": "f296",
    "category": "presence",
    "categoryTitle": "Multiplayer Presence & Social Context",
    "name": "Live cursors",
    "summary": "Show collaborators in shared editors.",
    "advanced": "Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed.",
    "example": "See where another user is working.",
    "useCases": [
      "shared docs",
      "workshops",
      "multidisciplinary rooms",
      "team coordination"
    ],
    "tags": [
      "presence",
      "multiplayer",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Show collaborators in shared editors. Advanced: Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed. Example: See where another user is working. Recommended for: shared docs, workshops, multidisciplinary rooms."
  },
  {
    "id": "f297",
    "category": "presence",
    "categoryTitle": "Multiplayer Presence & Social Context",
    "name": "Typing/editing indicators",
    "summary": "Signal active contribution.",
    "advanced": "Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed.",
    "example": "Avoid overwriting a paragraph someone is editing.",
    "useCases": [
      "shared docs",
      "workshops",
      "multidisciplinary rooms",
      "team coordination"
    ],
    "tags": [
      "presence",
      "multiplayer",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Signal active contribution. Advanced: Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed. Example: Avoid overwriting a paragraph someone is editing. Recommended for: shared docs, workshops, multidisciplinary rooms."
  },
  {
    "id": "f298",
    "category": "presence",
    "categoryTitle": "Multiplayer Presence & Social Context",
    "name": "Current module/task",
    "summary": "Optionally expose active workspace context.",
    "advanced": "Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed.",
    "example": "See that two reviewers are in Evidence Review.",
    "useCases": [
      "shared docs",
      "workshops",
      "multidisciplinary rooms",
      "team coordination"
    ],
    "tags": [
      "presence",
      "multiplayer",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Optionally expose active workspace context. Advanced: Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed. Example: See that two reviewers are in Evidence Review. Recommended for: shared docs, workshops, multidisciplinary rooms."
  },
  {
    "id": "f299",
    "category": "presence",
    "categoryTitle": "Multiplayer Presence & Social Context",
    "name": "Expertise presence",
    "summary": "Show relevant volunteered expertise in a room.",
    "advanced": "Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed.",
    "example": "Indicate that a hydrologist is available.",
    "useCases": [
      "shared docs",
      "workshops",
      "multidisciplinary rooms",
      "team coordination"
    ],
    "tags": [
      "presence",
      "multiplayer",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Show relevant volunteered expertise in a room. Advanced: Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed. Example: Indicate that a hydrologist is available. Recommended for: shared docs, workshops, multidisciplinary rooms."
  },
  {
    "id": "f300",
    "category": "presence",
    "categoryTitle": "Multiplayer Presence & Social Context",
    "name": "Focus/busy state",
    "summary": "Let participants reduce interruptions.",
    "advanced": "Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed.",
    "example": "Suppress low-priority mentions while presenting.",
    "useCases": [
      "shared docs",
      "workshops",
      "multidisciplinary rooms",
      "team coordination"
    ],
    "tags": [
      "presence",
      "multiplayer",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Let participants reduce interruptions. Advanced: Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed. Example: Suppress low-priority mentions while presenting. Recommended for: shared docs, workshops, multidisciplinary rooms."
  },
  {
    "id": "f301",
    "category": "presence",
    "categoryTitle": "Multiplayer Presence & Social Context",
    "name": "Presence expiration",
    "summary": "Automatically remove stale state.",
    "advanced": "Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed.",
    "example": "Do not show a crashed browser as online forever.",
    "useCases": [
      "shared docs",
      "workshops",
      "multidisciplinary rooms",
      "team coordination"
    ],
    "tags": [
      "presence",
      "multiplayer",
      "collaboration"
    ],
    "maturity": "stable",
    "tooltip": "Automatically remove stale state. Advanced: Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed. Example: Do not show a crashed browser as online forever. Recommended for: shared docs, workshops, multidisciplinary rooms."
  },
  {
    "id": "f302",
    "category": "roles",
    "categoryTitle": "Cross-Disciplinary Roles & Skills Graphs",
    "name": "Discipline taxonomy",
    "summary": "Represent fields of practice consistently.",
    "advanced": "Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally.",
    "example": "Tag contributors as hydrology, education or logistics.",
    "useCases": [
      "cross-domain teams",
      "education",
      "institutional projects",
      "volunteer networks"
    ],
    "tags": [
      "skills",
      "roles",
      "matchmaking"
    ],
    "maturity": "stable",
    "tooltip": "Represent fields of practice consistently. Advanced: Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally. Example: Tag contributors as hydrology, education or logistics. Recommended for: cross-domain teams, education, institutional projects."
  },
  {
    "id": "f303",
    "category": "roles",
    "categoryTitle": "Cross-Disciplinary Roles & Skills Graphs",
    "name": "Skills graph",
    "summary": "Link people to specific skills and evidence.",
    "advanced": "Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally.",
    "example": "Show GIS → raster analysis → watershed mapping.",
    "useCases": [
      "cross-domain teams",
      "education",
      "institutional projects",
      "volunteer networks"
    ],
    "tags": [
      "skills",
      "roles",
      "matchmaking"
    ],
    "maturity": "stable",
    "tooltip": "Link people to specific skills and evidence. Advanced: Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally. Example: Show GIS → raster analysis → watershed mapping. Recommended for: cross-domain teams, education, institutional projects."
  },
  {
    "id": "f304",
    "category": "roles",
    "categoryTitle": "Cross-Disciplinary Roles & Skills Graphs",
    "name": "Competency evidence",
    "summary": "Attach projects or assessments to skills.",
    "advanced": "Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally.",
    "example": "Support a mentor badge with completed training.",
    "useCases": [
      "cross-domain teams",
      "education",
      "institutional projects",
      "volunteer networks"
    ],
    "tags": [
      "skills",
      "roles",
      "matchmaking"
    ],
    "maturity": "stable",
    "tooltip": "Attach projects or assessments to skills. Advanced: Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally. Example: Support a mentor badge with completed training. Recommended for: cross-domain teams, education, institutional projects."
  },
  {
    "id": "f305",
    "category": "roles",
    "categoryTitle": "Cross-Disciplinary Roles & Skills Graphs",
    "name": "Learning goals",
    "summary": "Let participants state skills they want to develop.",
    "advanced": "Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally.",
    "example": "Match a novice mapper with a mentor.",
    "useCases": [
      "cross-domain teams",
      "education",
      "institutional projects",
      "volunteer networks"
    ],
    "tags": [
      "skills",
      "roles",
      "matchmaking"
    ],
    "maturity": "stable",
    "tooltip": "Let participants state skills they want to develop. Advanced: Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally. Example: Match a novice mapper with a mentor. Recommended for: cross-domain teams, education, institutional projects."
  },
  {
    "id": "f306",
    "category": "roles",
    "categoryTitle": "Cross-Disciplinary Roles & Skills Graphs",
    "name": "Responsibility matrix",
    "summary": "Clarify ownership across a project.",
    "advanced": "Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally.",
    "example": "Use RACI-like roles for a complex intervention.",
    "useCases": [
      "cross-domain teams",
      "education",
      "institutional projects",
      "volunteer networks"
    ],
    "tags": [
      "skills",
      "roles",
      "matchmaking"
    ],
    "maturity": "stable",
    "tooltip": "Clarify ownership across a project. Advanced: Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally. Example: Use RACI-like roles for a complex intervention. Recommended for: cross-domain teams, education, institutional projects."
  },
  {
    "id": "f307",
    "category": "roles",
    "categoryTitle": "Cross-Disciplinary Roles & Skills Graphs",
    "name": "Expertise-gap detection",
    "summary": "Find missing perspectives.",
    "advanced": "Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally.",
    "example": "Warn that a plan lacks operations and accessibility review.",
    "useCases": [
      "cross-domain teams",
      "education",
      "institutional projects",
      "volunteer networks"
    ],
    "tags": [
      "skills",
      "roles",
      "matchmaking"
    ],
    "maturity": "stable",
    "tooltip": "Find missing perspectives. Advanced: Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally. Example: Warn that a plan lacks operations and accessibility review. Recommended for: cross-domain teams, education, institutional projects."
  },
  {
    "id": "f308",
    "category": "roles",
    "categoryTitle": "Cross-Disciplinary Roles & Skills Graphs",
    "name": "Team composition view",
    "summary": "Visualize complementary capabilities.",
    "advanced": "Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally.",
    "example": "Balance engineering, community and implementation expertise.",
    "useCases": [
      "cross-domain teams",
      "education",
      "institutional projects",
      "volunteer networks"
    ],
    "tags": [
      "skills",
      "roles",
      "matchmaking"
    ],
    "maturity": "stable",
    "tooltip": "Visualize complementary capabilities. Advanced: Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally. Example: Balance engineering, community and implementation expertise. Recommended for: cross-domain teams, education, institutional projects."
  },
  {
    "id": "f309",
    "category": "matchmaking",
    "categoryTitle": "Collaboration Matchmaking & Resource Exchange",
    "name": "Project-to-skill matching",
    "summary": "Find people whose capabilities fit project gaps.",
    "advanced": "Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement.",
    "example": "Suggest GIS contributors to a mapping project.",
    "useCases": [
      "volunteer networks",
      "institutional collaboration",
      "research teams",
      "community resource sharing"
    ],
    "tags": [
      "matchmaking",
      "resources",
      "network"
    ],
    "maturity": "stable",
    "tooltip": "Find people whose capabilities fit project gaps. Advanced: Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement. Example: Suggest GIS contributors to a mapping project. Recommended for: volunteer networks, institutional collaboration, research teams."
  },
  {
    "id": "f310",
    "category": "matchmaking",
    "categoryTitle": "Collaboration Matchmaking & Resource Exchange",
    "name": "Mentor matching",
    "summary": "Pair learning goals with willing mentors.",
    "advanced": "Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement.",
    "example": "Connect a new hydrology learner to a practitioner.",
    "useCases": [
      "volunteer networks",
      "institutional collaboration",
      "research teams",
      "community resource sharing"
    ],
    "tags": [
      "matchmaking",
      "resources",
      "network"
    ],
    "maturity": "stable",
    "tooltip": "Pair learning goals with willing mentors. Advanced: Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement. Example: Connect a new hydrology learner to a practitioner. Recommended for: volunteer networks, institutional collaboration, research teams."
  },
  {
    "id": "f311",
    "category": "matchmaking",
    "categoryTitle": "Collaboration Matchmaking & Resource Exchange",
    "name": "Have/need marketplace",
    "summary": "Represent resources offered or requested.",
    "advanced": "Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement.",
    "example": "Match an available meeting space to a project need.",
    "useCases": [
      "volunteer networks",
      "institutional collaboration",
      "research teams",
      "community resource sharing"
    ],
    "tags": [
      "matchmaking",
      "resources",
      "network"
    ],
    "maturity": "stable",
    "tooltip": "Represent resources offered or requested. Advanced: Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement. Example: Match an available meeting space to a project need. Recommended for: volunteer networks, institutional collaboration, research teams."
  },
  {
    "id": "f312",
    "category": "matchmaking",
    "categoryTitle": "Collaboration Matchmaking & Resource Exchange",
    "name": "Dataset reuse matching",
    "summary": "Detect existing data that can satisfy a need.",
    "advanced": "Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement.",
    "example": "Suggest a dataset already used by another project.",
    "useCases": [
      "volunteer networks",
      "institutional collaboration",
      "research teams",
      "community resource sharing"
    ],
    "tags": [
      "matchmaking",
      "resources",
      "network"
    ],
    "maturity": "stable",
    "tooltip": "Detect existing data that can satisfy a need. Advanced: Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement. Example: Suggest a dataset already used by another project. Recommended for: volunteer networks, institutional collaboration, research teams."
  },
  {
    "id": "f313",
    "category": "matchmaking",
    "categoryTitle": "Collaboration Matchmaking & Resource Exchange",
    "name": "Cross-project synergy detection",
    "summary": "Find projects with overlapping objectives or dependencies.",
    "advanced": "Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement.",
    "example": "Connect transport and food-access teams.",
    "useCases": [
      "volunteer networks",
      "institutional collaboration",
      "research teams",
      "community resource sharing"
    ],
    "tags": [
      "matchmaking",
      "resources",
      "network"
    ],
    "maturity": "stable",
    "tooltip": "Find projects with overlapping objectives or dependencies. Advanced: Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement. Example: Connect transport and food-access teams. Recommended for: volunteer networks, institutional collaboration, research teams."
  },
  {
    "id": "f314",
    "category": "matchmaking",
    "categoryTitle": "Collaboration Matchmaking & Resource Exchange",
    "name": "Explainable recommendations",
    "summary": "Show why a match was made.",
    "advanced": "Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement.",
    "example": "Recommended because language, region and skill overlap.",
    "useCases": [
      "volunteer networks",
      "institutional collaboration",
      "research teams",
      "community resource sharing"
    ],
    "tags": [
      "matchmaking",
      "resources",
      "network"
    ],
    "maturity": "stable",
    "tooltip": "Show why a match was made. Advanced: Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement. Example: Recommended because language, region and skill overlap. Recommended for: volunteer networks, institutional collaboration, research teams."
  },
  {
    "id": "f315",
    "category": "matchmaking",
    "categoryTitle": "Collaboration Matchmaking & Resource Exchange",
    "name": "Capacity constraints",
    "summary": "Respect workload and availability.",
    "advanced": "Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement.",
    "example": "Avoid recommending an overloaded expert.",
    "useCases": [
      "volunteer networks",
      "institutional collaboration",
      "research teams",
      "community resource sharing"
    ],
    "tags": [
      "matchmaking",
      "resources",
      "network"
    ],
    "maturity": "stable",
    "tooltip": "Respect workload and availability. Advanced: Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement. Example: Avoid recommending an overloaded expert. Recommended for: volunteer networks, institutional collaboration, research teams."
  },
  {
    "id": "f316",
    "category": "projectgraph",
    "categoryTitle": "Project Graphs, Resources & Dependencies",
    "name": "Goal-to-task hierarchy",
    "summary": "Link strategy to executable work.",
    "advanced": "Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects.",
    "example": "Trace a resilience goal to specific field tasks.",
    "useCases": [
      "portfolio management",
      "systems planning",
      "replicable interventions",
      "research programs"
    ],
    "tags": [
      "projects",
      "graph",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Link strategy to executable work. Advanced: Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects. Example: Trace a resilience goal to specific field tasks. Recommended for: portfolio management, systems planning, replicable interventions."
  },
  {
    "id": "f317",
    "category": "projectgraph",
    "categoryTitle": "Project Graphs, Resources & Dependencies",
    "name": "Dependency graph",
    "summary": "Represent blockers and prerequisites.",
    "advanced": "Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects.",
    "example": "Prevent deployment before safety review.",
    "useCases": [
      "portfolio management",
      "systems planning",
      "replicable interventions",
      "research programs"
    ],
    "tags": [
      "projects",
      "graph",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Represent blockers and prerequisites. Advanced: Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects. Example: Prevent deployment before safety review. Recommended for: portfolio management, systems planning, replicable interventions."
  },
  {
    "id": "f318",
    "category": "projectgraph",
    "categoryTitle": "Project Graphs, Resources & Dependencies",
    "name": "Critical path",
    "summary": "Identify tasks controlling completion time.",
    "advanced": "Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects.",
    "example": "Focus coordination on the longest dependency chain.",
    "useCases": [
      "portfolio management",
      "systems planning",
      "replicable interventions",
      "research programs"
    ],
    "tags": [
      "projects",
      "graph",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Identify tasks controlling completion time. Advanced: Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects. Example: Focus coordination on the longest dependency chain. Recommended for: portfolio management, systems planning, replicable interventions."
  },
  {
    "id": "f319",
    "category": "projectgraph",
    "categoryTitle": "Project Graphs, Resources & Dependencies",
    "name": "Shared-resource graph",
    "summary": "Track resources used by several projects.",
    "advanced": "Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects.",
    "example": "Avoid double-booking equipment.",
    "useCases": [
      "portfolio management",
      "systems planning",
      "replicable interventions",
      "research programs"
    ],
    "tags": [
      "projects",
      "graph",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Track resources used by several projects. Advanced: Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects. Example: Avoid double-booking equipment. Recommended for: portfolio management, systems planning, replicable interventions."
  },
  {
    "id": "f320",
    "category": "projectgraph",
    "categoryTitle": "Project Graphs, Resources & Dependencies",
    "name": "Cross-domain effects",
    "summary": "Link one project to impacts in other domains.",
    "advanced": "Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects.",
    "example": "Connect energy reliability to water treatment.",
    "useCases": [
      "portfolio management",
      "systems planning",
      "replicable interventions",
      "research programs"
    ],
    "tags": [
      "projects",
      "graph",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Link one project to impacts in other domains. Advanced: Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects. Example: Connect energy reliability to water treatment. Recommended for: portfolio management, systems planning, replicable interventions."
  },
  {
    "id": "f321",
    "category": "projectgraph",
    "categoryTitle": "Project Graphs, Resources & Dependencies",
    "name": "Fork/merge projects",
    "summary": "Experiment in branches then integrate improvements.",
    "advanced": "Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects.",
    "example": "Adapt a template for a local context.",
    "useCases": [
      "portfolio management",
      "systems planning",
      "replicable interventions",
      "research programs"
    ],
    "tags": [
      "projects",
      "graph",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Experiment in branches then integrate improvements. Advanced: Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects. Example: Adapt a template for a local context. Recommended for: portfolio management, systems planning, replicable interventions."
  },
  {
    "id": "f322",
    "category": "projectgraph",
    "categoryTitle": "Project Graphs, Resources & Dependencies",
    "name": "Template lineage",
    "summary": "Track reusable project descendants.",
    "advanced": "Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects.",
    "example": "Compare outcomes across implementations of one pattern.",
    "useCases": [
      "portfolio management",
      "systems planning",
      "replicable interventions",
      "research programs"
    ],
    "tags": [
      "projects",
      "graph",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Track reusable project descendants. Advanced: Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects. Example: Compare outcomes across implementations of one pattern. Recommended for: portfolio management, systems planning, replicable interventions."
  },
  {
    "id": "f323",
    "category": "projectgraph",
    "categoryTitle": "Project Graphs, Resources & Dependencies",
    "name": "Outcome feedback",
    "summary": "Link measured outcomes back to project design.",
    "advanced": "Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects.",
    "example": "Refine the template based on field results.",
    "useCases": [
      "portfolio management",
      "systems planning",
      "replicable interventions",
      "research programs"
    ],
    "tags": [
      "projects",
      "graph",
      "coordination"
    ],
    "maturity": "stable",
    "tooltip": "Link measured outcomes back to project design. Advanced: Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects. Example: Refine the template based on field results. Recommended for: portfolio management, systems planning, replicable interventions."
  },
  {
    "id": "f324",
    "category": "lab",
    "categoryTitle": "Shared Labs, Simulation & Digital Twins",
    "name": "Collaborative notebook",
    "summary": "Combine narrative, formulas, data and outputs.",
    "advanced": "Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing.",
    "example": "Coauthor a reproducible water-demand analysis.",
    "useCases": [
      "training",
      "planning",
      "scientific collaboration",
      "serious games"
    ],
    "tags": [
      "simulation",
      "lab",
      "multiplayer"
    ],
    "maturity": "stable",
    "tooltip": "Combine narrative, formulas, data and outputs. Advanced: Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing. Example: Coauthor a reproducible water-demand analysis. Recommended for: training, planning, scientific collaboration."
  },
  {
    "id": "f325",
    "category": "lab",
    "categoryTitle": "Shared Labs, Simulation & Digital Twins",
    "name": "Scenario rooms",
    "summary": "Place teams inside structured simulations.",
    "advanced": "Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing.",
    "example": "Run a 72-hour water disruption exercise.",
    "useCases": [
      "training",
      "planning",
      "scientific collaboration",
      "serious games"
    ],
    "tags": [
      "simulation",
      "lab",
      "multiplayer"
    ],
    "maturity": "stable",
    "tooltip": "Place teams inside structured simulations. Advanced: Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing. Example: Run a 72-hour water disruption exercise. Recommended for: training, planning, scientific collaboration."
  },
  {
    "id": "f326",
    "category": "lab",
    "categoryTitle": "Shared Labs, Simulation & Digital Twins",
    "name": "Digital twin models",
    "summary": "Maintain simplified representations of real systems.",
    "advanced": "Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing.",
    "example": "Model a watershed or school network.",
    "useCases": [
      "training",
      "planning",
      "scientific collaboration",
      "serious games"
    ],
    "tags": [
      "simulation",
      "lab",
      "multiplayer"
    ],
    "maturity": "stable",
    "tooltip": "Maintain simplified representations of real systems. Advanced: Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing. Example: Model a watershed or school network. Recommended for: training, planning, scientific collaboration."
  },
  {
    "id": "f327",
    "category": "lab",
    "categoryTitle": "Shared Labs, Simulation & Digital Twins",
    "name": "Shared parameter editing",
    "summary": "Let multiple users manipulate a scenario.",
    "advanced": "Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing.",
    "example": "Adjust demand and supply assumptions together.",
    "useCases": [
      "training",
      "planning",
      "scientific collaboration",
      "serious games"
    ],
    "tags": [
      "simulation",
      "lab",
      "multiplayer"
    ],
    "maturity": "stable",
    "tooltip": "Let multiple users manipulate a scenario. Advanced: Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing. Example: Adjust demand and supply assumptions together. Recommended for: training, planning, scientific collaboration."
  },
  {
    "id": "f328",
    "category": "lab",
    "categoryTitle": "Shared Labs, Simulation & Digital Twins",
    "name": "Simulation forks",
    "summary": "Branch a baseline into alternatives.",
    "advanced": "Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing.",
    "example": "Compare conservation and infrastructure scenarios.",
    "useCases": [
      "training",
      "planning",
      "scientific collaboration",
      "serious games"
    ],
    "tags": [
      "simulation",
      "lab",
      "multiplayer"
    ],
    "maturity": "stable",
    "tooltip": "Branch a baseline into alternatives. Advanced: Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing. Example: Compare conservation and infrastructure scenarios. Recommended for: training, planning, scientific collaboration."
  },
  {
    "id": "f329",
    "category": "lab",
    "categoryTitle": "Shared Labs, Simulation & Digital Twins",
    "name": "Uncertainty visualization",
    "summary": "Show ranges rather than false precision.",
    "advanced": "Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing.",
    "example": "Display Monte Carlo output intervals.",
    "useCases": [
      "training",
      "planning",
      "scientific collaboration",
      "serious games"
    ],
    "tags": [
      "simulation",
      "lab",
      "multiplayer"
    ],
    "maturity": "stable",
    "tooltip": "Show ranges rather than false precision. Advanced: Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing. Example: Display Monte Carlo output intervals. Recommended for: training, planning, scientific collaboration."
  },
  {
    "id": "f330",
    "category": "lab",
    "categoryTitle": "Shared Labs, Simulation & Digital Twins",
    "name": "Replayable exercises",
    "summary": "Record scenario actions and outcomes.",
    "advanced": "Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing.",
    "example": "Review emergency-team choices after a drill.",
    "useCases": [
      "training",
      "planning",
      "scientific collaboration",
      "serious games"
    ],
    "tags": [
      "simulation",
      "lab",
      "multiplayer"
    ],
    "maturity": "stable",
    "tooltip": "Record scenario actions and outcomes. Advanced: Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing. Example: Review emergency-team choices after a drill. Recommended for: training, planning, scientific collaboration."
  },
  {
    "id": "f331",
    "category": "moderation",
    "categoryTitle": "Moderation, Abuse Resistance & Trust",
    "name": "Report/block/mute",
    "summary": "Give users direct safety controls.",
    "advanced": "Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores.",
    "example": "Block abusive messages without leaving a project.",
    "useCases": [
      "public communities",
      "multiplayer",
      "knowledge commons",
      "youth-safe spaces"
    ],
    "tags": [
      "moderation",
      "trust",
      "safety"
    ],
    "maturity": "stable",
    "tooltip": "Give users direct safety controls. Advanced: Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores. Example: Block abusive messages without leaving a project. Recommended for: public communities, multiplayer, knowledge commons."
  },
  {
    "id": "f332",
    "category": "moderation",
    "categoryTitle": "Moderation, Abuse Resistance & Trust",
    "name": "Kick/ban with audit",
    "summary": "Allow moderators to restrict access transparently.",
    "advanced": "Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores.",
    "example": "Record who issued a temporary room ban and why.",
    "useCases": [
      "public communities",
      "multiplayer",
      "knowledge commons",
      "youth-safe spaces"
    ],
    "tags": [
      "moderation",
      "trust",
      "safety"
    ],
    "maturity": "stable",
    "tooltip": "Allow moderators to restrict access transparently. Advanced: Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores. Example: Record who issued a temporary room ban and why. Recommended for: public communities, multiplayer, knowledge commons."
  },
  {
    "id": "f333",
    "category": "moderation",
    "categoryTitle": "Moderation, Abuse Resistance & Trust",
    "name": "Rate limiting",
    "summary": "Bound high-frequency actions.",
    "advanced": "Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores.",
    "example": "Stop a bot from creating thousands of tasks.",
    "useCases": [
      "public communities",
      "multiplayer",
      "knowledge commons",
      "youth-safe spaces"
    ],
    "tags": [
      "moderation",
      "trust",
      "safety"
    ],
    "maturity": "stable",
    "tooltip": "Bound high-frequency actions. Advanced: Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores. Example: Stop a bot from creating thousands of tasks. Recommended for: public communities, multiplayer, knowledge commons."
  },
  {
    "id": "f334",
    "category": "moderation",
    "categoryTitle": "Moderation, Abuse Resistance & Trust",
    "name": "Rollback/history",
    "summary": "Recover from vandalism.",
    "advanced": "Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores.",
    "example": "Restore a project description after destructive edits.",
    "useCases": [
      "public communities",
      "multiplayer",
      "knowledge commons",
      "youth-safe spaces"
    ],
    "tags": [
      "moderation",
      "trust",
      "safety"
    ],
    "maturity": "stable",
    "tooltip": "Recover from vandalism. Advanced: Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores. Example: Restore a project description after destructive edits. Recommended for: public communities, multiplayer, knowledge commons."
  },
  {
    "id": "f335",
    "category": "moderation",
    "categoryTitle": "Moderation, Abuse Resistance & Trust",
    "name": "New-user safeguards",
    "summary": "Limit high-impact actions until trust is established.",
    "advanced": "Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores.",
    "example": "Require review before mass edits.",
    "useCases": [
      "public communities",
      "multiplayer",
      "knowledge commons",
      "youth-safe spaces"
    ],
    "tags": [
      "moderation",
      "trust",
      "safety"
    ],
    "maturity": "stable",
    "tooltip": "Limit high-impact actions until trust is established. Advanced: Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores. Example: Require review before mass edits. Recommended for: public communities, multiplayer, knowledge commons."
  },
  {
    "id": "f336",
    "category": "moderation",
    "categoryTitle": "Moderation, Abuse Resistance & Trust",
    "name": "Appeals process",
    "summary": "Permit moderation decisions to be challenged.",
    "advanced": "Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores.",
    "example": "Route a ban appeal to a separate review role.",
    "useCases": [
      "public communities",
      "multiplayer",
      "knowledge commons",
      "youth-safe spaces"
    ],
    "tags": [
      "moderation",
      "trust",
      "safety"
    ],
    "maturity": "stable",
    "tooltip": "Permit moderation decisions to be challenged. Advanced: Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores. Example: Route a ban appeal to a separate review role. Recommended for: public communities, multiplayer, knowledge commons."
  },
  {
    "id": "f337",
    "category": "moderation",
    "categoryTitle": "Moderation, Abuse Resistance & Trust",
    "name": "Multidimensional trust",
    "summary": "Keep expertise, reliability and identity assurance separate.",
    "advanced": "Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores.",
    "example": "Do not collapse everything into one score.",
    "useCases": [
      "public communities",
      "multiplayer",
      "knowledge commons",
      "youth-safe spaces"
    ],
    "tags": [
      "moderation",
      "trust",
      "safety"
    ],
    "maturity": "stable",
    "tooltip": "Keep expertise, reliability and identity assurance separate. Advanced: Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores. Example: Do not collapse everything into one score. Recommended for: public communities, multiplayer, knowledge commons."
  },
  {
    "id": "f338",
    "category": "moderation",
    "categoryTitle": "Moderation, Abuse Resistance & Trust",
    "name": "Raid protection",
    "summary": "Detect sudden coordinated abusive joins.",
    "advanced": "Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores.",
    "example": "Switch a public room into approval mode.",
    "useCases": [
      "public communities",
      "multiplayer",
      "knowledge commons",
      "youth-safe spaces"
    ],
    "tags": [
      "moderation",
      "trust",
      "safety"
    ],
    "maturity": "stable",
    "tooltip": "Detect sudden coordinated abusive joins. Advanced: Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores. Example: Switch a public room into approval mode. Recommended for: public communities, multiplayer, knowledge commons."
  },
  {
    "id": "f339",
    "category": "federation",
    "categoryTitle": "Federation & Multi-Instance Commons",
    "name": "Instance identity",
    "summary": "Give each deployment a signed stable identity.",
    "advanced": "Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery.",
    "example": "Verify which university node published a project.",
    "useCases": [
      "community-owned platforms",
      "universities",
      "municipal networks",
      "global commons"
    ],
    "tags": [
      "federation",
      "server",
      "interop"
    ],
    "maturity": "stable",
    "tooltip": "Give each deployment a signed stable identity. Advanced: Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery. Example: Verify which university node published a project. Recommended for: community-owned platforms, universities, municipal networks."
  },
  {
    "id": "f340",
    "category": "federation",
    "categoryTitle": "Federation & Multi-Instance Commons",
    "name": "Federated search",
    "summary": "Query compatible remote indexes.",
    "advanced": "Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery.",
    "example": "Find relevant projects across participating nodes.",
    "useCases": [
      "community-owned platforms",
      "universities",
      "municipal networks",
      "global commons"
    ],
    "tags": [
      "federation",
      "server",
      "interop"
    ],
    "maturity": "stable",
    "tooltip": "Query compatible remote indexes. Advanced: Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery. Example: Find relevant projects across participating nodes. Recommended for: community-owned platforms, universities, municipal networks."
  },
  {
    "id": "f341",
    "category": "federation",
    "categoryTitle": "Federation & Multi-Instance Commons",
    "name": "Federated project sharing",
    "summary": "Exchange selected project objects.",
    "advanced": "Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery.",
    "example": "Share a public toolkit to another instance.",
    "useCases": [
      "community-owned platforms",
      "universities",
      "municipal networks",
      "global commons"
    ],
    "tags": [
      "federation",
      "server",
      "interop"
    ],
    "maturity": "stable",
    "tooltip": "Exchange selected project objects. Advanced: Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery. Example: Share a public toolkit to another instance. Recommended for: community-owned platforms, universities, municipal networks."
  },
  {
    "id": "f342",
    "category": "federation",
    "categoryTitle": "Federation & Multi-Instance Commons",
    "name": "Instance policy",
    "summary": "Declare moderation, retention and federation rules.",
    "advanced": "Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery.",
    "example": "Let a community node refuse unwanted peers.",
    "useCases": [
      "community-owned platforms",
      "universities",
      "municipal networks",
      "global commons"
    ],
    "tags": [
      "federation",
      "server",
      "interop"
    ],
    "maturity": "stable",
    "tooltip": "Declare moderation, retention and federation rules. Advanced: Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery. Example: Let a community node refuse unwanted peers. Recommended for: community-owned platforms, universities, municipal networks."
  },
  {
    "id": "f343",
    "category": "federation",
    "categoryTitle": "Federation & Multi-Instance Commons",
    "name": "Server-to-server signatures",
    "summary": "Authenticate federated messages.",
    "advanced": "Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery.",
    "example": "Verify remote event origin.",
    "useCases": [
      "community-owned platforms",
      "universities",
      "municipal networks",
      "global commons"
    ],
    "tags": [
      "federation",
      "server",
      "interop"
    ],
    "maturity": "stable",
    "tooltip": "Authenticate federated messages. Advanced: Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery. Example: Verify remote event origin. Recommended for: community-owned platforms, universities, municipal networks."
  },
  {
    "id": "f344",
    "category": "federation",
    "categoryTitle": "Federation & Multi-Instance Commons",
    "name": "Selective federation",
    "summary": "Choose which object types cross boundaries.",
    "advanced": "Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery.",
    "example": "Federate public evidence but not member profiles.",
    "useCases": [
      "community-owned platforms",
      "universities",
      "municipal networks",
      "global commons"
    ],
    "tags": [
      "federation",
      "server",
      "interop"
    ],
    "maturity": "stable",
    "tooltip": "Choose which object types cross boundaries. Advanced: Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery. Example: Federate public evidence but not member profiles. Recommended for: community-owned platforms, universities, municipal networks."
  },
  {
    "id": "f345",
    "category": "federation",
    "categoryTitle": "Federation & Multi-Instance Commons",
    "name": "Cross-instance identity linking",
    "summary": "Optionally associate identities across nodes.",
    "advanced": "Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery.",
    "example": "Let a researcher prove membership on two instances.",
    "useCases": [
      "community-owned platforms",
      "universities",
      "municipal networks",
      "global commons"
    ],
    "tags": [
      "federation",
      "server",
      "interop"
    ],
    "maturity": "stable",
    "tooltip": "Optionally associate identities across nodes. Advanced: Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery. Example: Let a researcher prove membership on two instances. Recommended for: community-owned platforms, universities, municipal networks."
  },
  {
    "id": "f346",
    "category": "api",
    "categoryTitle": "API-First Integrations & External Events",
    "name": "Versioned REST API",
    "summary": "Expose core domain objects over HTTP.",
    "advanced": "Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes.",
    "example": "Allow a mobile client to retrieve projects.",
    "useCases": [
      "mobile clients",
      "institutional integrations",
      "AI agents",
      "automation"
    ],
    "tags": [
      "api",
      "integration",
      "agents"
    ],
    "maturity": "stable",
    "tooltip": "Expose core domain objects over HTTP. Advanced: Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes. Example: Allow a mobile client to retrieve projects. Recommended for: mobile clients, institutional integrations, AI agents."
  },
  {
    "id": "f347",
    "category": "api",
    "categoryTitle": "API-First Integrations & External Events",
    "name": "Typed SDK/client",
    "summary": "Wrap API contracts for developers.",
    "advanced": "Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes.",
    "example": "Use generated types in integrations.",
    "useCases": [
      "mobile clients",
      "institutional integrations",
      "AI agents",
      "automation"
    ],
    "tags": [
      "api",
      "integration",
      "agents"
    ],
    "maturity": "stable",
    "tooltip": "Wrap API contracts for developers. Advanced: Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes. Example: Use generated types in integrations. Recommended for: mobile clients, institutional integrations, AI agents."
  },
  {
    "id": "f348",
    "category": "api",
    "categoryTitle": "API-First Integrations & External Events",
    "name": "Signed webhooks",
    "summary": "Notify external systems of events.",
    "advanced": "Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes.",
    "example": "Send project.completed to an institutional workflow.",
    "useCases": [
      "mobile clients",
      "institutional integrations",
      "AI agents",
      "automation"
    ],
    "tags": [
      "api",
      "integration",
      "agents"
    ],
    "maturity": "stable",
    "tooltip": "Notify external systems of events. Advanced: Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes. Example: Send project.completed to an institutional workflow. Recommended for: mobile clients, institutional integrations, AI agents."
  },
  {
    "id": "f349",
    "category": "api",
    "categoryTitle": "API-First Integrations & External Events",
    "name": "Webhook replay protection",
    "summary": "Reject duplicated or stale webhook events.",
    "advanced": "Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes.",
    "example": "Prevent one external event from executing twice.",
    "useCases": [
      "mobile clients",
      "institutional integrations",
      "AI agents",
      "automation"
    ],
    "tags": [
      "api",
      "integration",
      "agents"
    ],
    "maturity": "stable",
    "tooltip": "Reject duplicated or stale webhook events. Advanced: Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes. Example: Prevent one external event from executing twice. Recommended for: mobile clients, institutional integrations, AI agents."
  },
  {
    "id": "f350",
    "category": "api",
    "categoryTitle": "API-First Integrations & External Events",
    "name": "Integration adapter layer",
    "summary": "Keep third-party code out of core modules.",
    "advanced": "Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes.",
    "example": "Swap one map or storage provider for another.",
    "useCases": [
      "mobile clients",
      "institutional integrations",
      "AI agents",
      "automation"
    ],
    "tags": [
      "api",
      "integration",
      "agents"
    ],
    "maturity": "stable",
    "tooltip": "Keep third-party code out of core modules. Advanced: Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes. Example: Swap one map or storage provider for another. Recommended for: mobile clients, institutional integrations, AI agents."
  },
  {
    "id": "f351",
    "category": "api",
    "categoryTitle": "API-First Integrations & External Events",
    "name": "Rate/cost budgets",
    "summary": "Limit external API use.",
    "advanced": "Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes.",
    "example": "Prevent an AI agent from exhausting a paid quota.",
    "useCases": [
      "mobile clients",
      "institutional integrations",
      "AI agents",
      "automation"
    ],
    "tags": [
      "api",
      "integration",
      "agents"
    ],
    "maturity": "stable",
    "tooltip": "Limit external API use. Advanced: Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes. Example: Prevent an AI agent from exhausting a paid quota. Recommended for: mobile clients, institutional integrations, AI agents."
  },
  {
    "id": "f352",
    "category": "api",
    "categoryTitle": "API-First Integrations & External Events",
    "name": "Agent-ready tools",
    "summary": "Expose narrow structured actions to AI systems.",
    "advanced": "Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes.",
    "example": "Provide findEvidence() rather than unrestricted DOM control.",
    "useCases": [
      "mobile clients",
      "institutional integrations",
      "AI agents",
      "automation"
    ],
    "tags": [
      "api",
      "integration",
      "agents"
    ],
    "maturity": "stable",
    "tooltip": "Expose narrow structured actions to AI systems. Advanced: Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes. Example: Provide findEvidence() rather than unrestricted DOM control. Recommended for: mobile clients, institutional integrations, AI agents."
  },
  {
    "id": "f353",
    "category": "api",
    "categoryTitle": "API-First Integrations & External Events",
    "name": "WebMCP-ready semantics",
    "summary": "Design actions and forms so emerging browser-agent protocols can map to them.",
    "advanced": "Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes.",
    "example": "Future-proof a project creation workflow.",
    "useCases": [
      "mobile clients",
      "institutional integrations",
      "AI agents",
      "automation"
    ],
    "tags": [
      "api",
      "integration",
      "agents"
    ],
    "maturity": "emerging",
    "tooltip": "Design actions and forms so emerging browser-agent protocols can map to them. Advanced: Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes. Example: Future-proof a project creation workflow. Recommended for: mobile clients, institutional integrations, AI agents."
  },
  {
    "id": "f354",
    "category": "analytics",
    "categoryTitle": "Outcome, Network & Cost Analytics",
    "name": "Outcome metrics",
    "summary": "Track project-specific results.",
    "advanced": "Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable.",
    "example": "Measure verified trees surviving after one year.",
    "useCases": [
      "platform operations",
      "impact evaluation",
      "capacity planning",
      "grant reporting"
    ],
    "tags": [
      "analytics",
      "impact",
      "ops"
    ],
    "maturity": "stable",
    "tooltip": "Track project-specific results. Advanced: Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable. Example: Measure verified trees surviving after one year. Recommended for: platform operations, impact evaluation, capacity planning."
  },
  {
    "id": "f355",
    "category": "analytics",
    "categoryTitle": "Outcome, Network & Cost Analytics",
    "name": "Collaboration metrics",
    "summary": "Measure useful cooperation.",
    "advanced": "Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable.",
    "example": "Count cross-discipline projects reaching review.",
    "useCases": [
      "platform operations",
      "impact evaluation",
      "capacity planning",
      "grant reporting"
    ],
    "tags": [
      "analytics",
      "impact",
      "ops"
    ],
    "maturity": "stable",
    "tooltip": "Measure useful cooperation. Advanced: Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable. Example: Count cross-discipline projects reaching review. Recommended for: platform operations, impact evaluation, capacity planning."
  },
  {
    "id": "f356",
    "category": "analytics",
    "categoryTitle": "Outcome, Network & Cost Analytics",
    "name": "Network health metrics",
    "summary": "Track realtime transport quality.",
    "advanced": "Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable.",
    "example": "Measure WebRTC connection success and fallback rate.",
    "useCases": [
      "platform operations",
      "impact evaluation",
      "capacity planning",
      "grant reporting"
    ],
    "tags": [
      "analytics",
      "impact",
      "ops"
    ],
    "maturity": "stable",
    "tooltip": "Track realtime transport quality. Advanced: Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable. Example: Measure WebRTC connection success and fallback rate. Recommended for: platform operations, impact evaluation, capacity planning."
  },
  {
    "id": "f357",
    "category": "analytics",
    "categoryTitle": "Outcome, Network & Cost Analytics",
    "name": "Cost per active user/project",
    "summary": "Allocate infrastructure spending.",
    "advanced": "Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable.",
    "example": "Estimate AI and room costs per project.",
    "useCases": [
      "platform operations",
      "impact evaluation",
      "capacity planning",
      "grant reporting"
    ],
    "tags": [
      "analytics",
      "impact",
      "ops"
    ],
    "maturity": "stable",
    "tooltip": "Allocate infrastructure spending. Advanced: Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable. Example: Estimate AI and room costs per project. Recommended for: platform operations, impact evaluation, capacity planning."
  },
  {
    "id": "f358",
    "category": "analytics",
    "categoryTitle": "Outcome, Network & Cost Analytics",
    "name": "Data freshness metrics",
    "summary": "Track stale sources and sync lag.",
    "advanced": "Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable.",
    "example": "Show datasets needing refresh.",
    "useCases": [
      "platform operations",
      "impact evaluation",
      "capacity planning",
      "grant reporting"
    ],
    "tags": [
      "analytics",
      "impact",
      "ops"
    ],
    "maturity": "stable",
    "tooltip": "Track stale sources and sync lag. Advanced: Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable. Example: Show datasets needing refresh. Recommended for: platform operations, impact evaluation, capacity planning."
  },
  {
    "id": "f359",
    "category": "analytics",
    "categoryTitle": "Outcome, Network & Cost Analytics",
    "name": "Quality metrics",
    "summary": "Measure review coverage and unresolved issues.",
    "advanced": "Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable.",
    "example": "Track evidence records without reviewers.",
    "useCases": [
      "platform operations",
      "impact evaluation",
      "capacity planning",
      "grant reporting"
    ],
    "tags": [
      "analytics",
      "impact",
      "ops"
    ],
    "maturity": "stable",
    "tooltip": "Measure review coverage and unresolved issues. Advanced: Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable. Example: Track evidence records without reviewers. Recommended for: platform operations, impact evaluation, capacity planning."
  },
  {
    "id": "f360",
    "category": "analytics",
    "categoryTitle": "Outcome, Network & Cost Analytics",
    "name": "Privacy-preserving local analytics",
    "summary": "Compute personal usage insights on-device.",
    "advanced": "Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable.",
    "example": "Show the user their own contribution history without sending it away.",
    "useCases": [
      "platform operations",
      "impact evaluation",
      "capacity planning",
      "grant reporting"
    ],
    "tags": [
      "analytics",
      "impact",
      "ops"
    ],
    "maturity": "stable",
    "tooltip": "Compute personal usage insights on-device. Advanced: Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable. Example: Show the user their own contribution history without sending it away. Recommended for: platform operations, impact evaluation, capacity planning."
  },
  {
    "id": "f361",
    "category": "agents",
    "categoryTitle": "Agentic Collaboration & Meta-Prompt Chains",
    "name": "Meta-prompt chain",
    "summary": "Compose staged prompts for architecture, risks, implementation and verification.",
    "advanced": "Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth.",
    "example": "Turn selected features into a comprehensive build brief.",
    "useCases": [
      "feature fusion",
      "project copilots",
      "research assistants",
      "workflow automation"
    ],
    "tags": [
      "agents",
      "ai",
      "prompting"
    ],
    "maturity": "stable",
    "tooltip": "Compose staged prompts for architecture, risks, implementation and verification. Advanced: Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth. Example: Turn selected features into a comprehensive build brief. Recommended for: feature fusion, project copilots, research assistants."
  },
  {
    "id": "f362",
    "category": "agents",
    "categoryTitle": "Agentic Collaboration & Meta-Prompt Chains",
    "name": "Specialist agent council",
    "summary": "Run separate analytical perspectives.",
    "advanced": "Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth.",
    "example": "Have security, accessibility and evidence reviewers critique a design.",
    "useCases": [
      "feature fusion",
      "project copilots",
      "research assistants",
      "workflow automation"
    ],
    "tags": [
      "agents",
      "ai",
      "prompting"
    ],
    "maturity": "stable",
    "tooltip": "Run separate analytical perspectives. Advanced: Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth. Example: Have security, accessibility and evidence reviewers critique a design. Recommended for: feature fusion, project copilots, research assistants."
  },
  {
    "id": "f363",
    "category": "agents",
    "categoryTitle": "Agentic Collaboration & Meta-Prompt Chains",
    "name": "Planner-executor-critic loop",
    "summary": "Separate planning from action and evaluation.",
    "advanced": "Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth.",
    "example": "Generate a module plan, implement draft steps, then inspect gaps.",
    "useCases": [
      "feature fusion",
      "project copilots",
      "research assistants",
      "workflow automation"
    ],
    "tags": [
      "agents",
      "ai",
      "prompting"
    ],
    "maturity": "stable",
    "tooltip": "Separate planning from action and evaluation. Advanced: Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth. Example: Generate a module plan, implement draft steps, then inspect gaps. Recommended for: feature fusion, project copilots, research assistants."
  },
  {
    "id": "f364",
    "category": "agents",
    "categoryTitle": "Agentic Collaboration & Meta-Prompt Chains",
    "name": "Tool-scoped agents",
    "summary": "Restrict each agent to explicit functions.",
    "advanced": "Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth.",
    "example": "A research agent can search evidence but cannot publish.",
    "useCases": [
      "feature fusion",
      "project copilots",
      "research assistants",
      "workflow automation"
    ],
    "tags": [
      "agents",
      "ai",
      "prompting"
    ],
    "maturity": "stable",
    "tooltip": "Restrict each agent to explicit functions. Advanced: Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth. Example: A research agent can search evidence but cannot publish. Recommended for: feature fusion, project copilots, research assistants."
  },
  {
    "id": "f365",
    "category": "agents",
    "categoryTitle": "Agentic Collaboration & Meta-Prompt Chains",
    "name": "Context assembly",
    "summary": "Build minimal structured context from project state.",
    "advanced": "Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth.",
    "example": "Give an agent only relevant decisions and tasks.",
    "useCases": [
      "feature fusion",
      "project copilots",
      "research assistants",
      "workflow automation"
    ],
    "tags": [
      "agents",
      "ai",
      "prompting"
    ],
    "maturity": "stable",
    "tooltip": "Build minimal structured context from project state. Advanced: Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth. Example: Give an agent only relevant decisions and tasks. Recommended for: feature fusion, project copilots, research assistants."
  },
  {
    "id": "f366",
    "category": "agents",
    "categoryTitle": "Agentic Collaboration & Meta-Prompt Chains",
    "name": "Budget controls",
    "summary": "Limit tokens, calls, time or compute.",
    "advanced": "Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth.",
    "example": "Stop runaway multi-agent loops.",
    "useCases": [
      "feature fusion",
      "project copilots",
      "research assistants",
      "workflow automation"
    ],
    "tags": [
      "agents",
      "ai",
      "prompting"
    ],
    "maturity": "stable",
    "tooltip": "Limit tokens, calls, time or compute. Advanced: Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth. Example: Stop runaway multi-agent loops. Recommended for: feature fusion, project copilots, research assistants."
  },
  {
    "id": "f367",
    "category": "agents",
    "categoryTitle": "Agentic Collaboration & Meta-Prompt Chains",
    "name": "Human-in-the-loop approval",
    "summary": "Require review before consequential operations.",
    "advanced": "Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth.",
    "example": "Approve generated tasks before assignment.",
    "useCases": [
      "feature fusion",
      "project copilots",
      "research assistants",
      "workflow automation"
    ],
    "tags": [
      "agents",
      "ai",
      "prompting"
    ],
    "maturity": "stable",
    "tooltip": "Require review before consequential operations. Advanced: Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth. Example: Approve generated tasks before assignment. Recommended for: feature fusion, project copilots, research assistants."
  },
  {
    "id": "f368",
    "category": "agents",
    "categoryTitle": "Agentic Collaboration & Meta-Prompt Chains",
    "name": "Agent event log",
    "summary": "Record prompts, tools, outputs and approvals.",
    "advanced": "Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth.",
    "example": "Audit how an automated suggestion was produced.",
    "useCases": [
      "feature fusion",
      "project copilots",
      "research assistants",
      "workflow automation"
    ],
    "tags": [
      "agents",
      "ai",
      "prompting"
    ],
    "maturity": "stable",
    "tooltip": "Record prompts, tools, outputs and approvals. Advanced: Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth. Example: Audit how an automated suggestion was produced. Recommended for: feature fusion, project copilots, research assistants."
  },
  {
    "id": "f369",
    "category": "systems",
    "categoryTitle": "Systems Thinking, Harm Checks & Anti-Inversion",
    "name": "Stakeholder map",
    "summary": "Identify affected groups and representation gaps.",
    "advanced": "Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers.",
    "example": "Show that residents are missing from an infrastructure decision.",
    "useCases": [
      "high-impact projects",
      "public systems",
      "AI-assisted planning",
      "governance"
    ],
    "tags": [
      "systems",
      "safety",
      "ethics"
    ],
    "maturity": "stable",
    "tooltip": "Identify affected groups and representation gaps. Advanced: Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers. Example: Show that residents are missing from an infrastructure decision. Recommended for: high-impact projects, public systems, AI-assisted planning."
  },
  {
    "id": "f370",
    "category": "systems",
    "categoryTitle": "Systems Thinking, Harm Checks & Anti-Inversion",
    "name": "Consequence mapper",
    "summary": "Trace direct, indirect and second-order effects.",
    "advanced": "Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers.",
    "example": "Explore how a transport change affects food access and emissions.",
    "useCases": [
      "high-impact projects",
      "public systems",
      "AI-assisted planning",
      "governance"
    ],
    "tags": [
      "systems",
      "safety",
      "ethics"
    ],
    "maturity": "stable",
    "tooltip": "Trace direct, indirect and second-order effects. Advanced: Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers. Example: Explore how a transport change affects food access and emissions. Recommended for: high-impact projects, public systems, AI-assisted planning."
  },
  {
    "id": "f371",
    "category": "systems",
    "categoryTitle": "Systems Thinking, Harm Checks & Anti-Inversion",
    "name": "Feedback-loop map",
    "summary": "Represent reinforcing and balancing loops.",
    "advanced": "Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers.",
    "example": "Model how trust and participation influence each other.",
    "useCases": [
      "high-impact projects",
      "public systems",
      "AI-assisted planning",
      "governance"
    ],
    "tags": [
      "systems",
      "safety",
      "ethics"
    ],
    "maturity": "stable",
    "tooltip": "Represent reinforcing and balancing loops. Advanced: Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers. Example: Model how trust and participation influence each other. Recommended for: high-impact projects, public systems, AI-assisted planning."
  },
  {
    "id": "f372",
    "category": "systems",
    "categoryTitle": "Systems Thinking, Harm Checks & Anti-Inversion",
    "name": "Pre-mortem",
    "summary": "Assume failure and identify plausible causes.",
    "advanced": "Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers.",
    "example": "Generate mitigations before launch.",
    "useCases": [
      "high-impact projects",
      "public systems",
      "AI-assisted planning",
      "governance"
    ],
    "tags": [
      "systems",
      "safety",
      "ethics"
    ],
    "maturity": "stable",
    "tooltip": "Assume failure and identify plausible causes. Advanced: Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers. Example: Generate mitigations before launch. Recommended for: high-impact projects, public systems, AI-assisted planning."
  },
  {
    "id": "f373",
    "category": "systems",
    "categoryTitle": "Systems Thinking, Harm Checks & Anti-Inversion",
    "name": "Red-team review",
    "summary": "Attack assumptions, security and abuse paths.",
    "advanced": "Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers.",
    "example": "Test whether a gamification mechanic can be exploited.",
    "useCases": [
      "high-impact projects",
      "public systems",
      "AI-assisted planning",
      "governance"
    ],
    "tags": [
      "systems",
      "safety",
      "ethics"
    ],
    "maturity": "stable",
    "tooltip": "Attack assumptions, security and abuse paths. Advanced: Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers. Example: Test whether a gamification mechanic can be exploited. Recommended for: high-impact projects, public systems, AI-assisted planning."
  },
  {
    "id": "f374",
    "category": "systems",
    "categoryTitle": "Systems Thinking, Harm Checks & Anti-Inversion",
    "name": "Reversibility check",
    "summary": "Classify whether actions can be undone.",
    "advanced": "Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers.",
    "example": "Require higher review for irreversible deployment.",
    "useCases": [
      "high-impact projects",
      "public systems",
      "AI-assisted planning",
      "governance"
    ],
    "tags": [
      "systems",
      "safety",
      "ethics"
    ],
    "maturity": "stable",
    "tooltip": "Classify whether actions can be undone. Advanced: Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers. Example: Require higher review for irreversible deployment. Recommended for: high-impact projects, public systems, AI-assisted planning."
  },
  {
    "id": "f375",
    "category": "systems",
    "categoryTitle": "Systems Thinking, Harm Checks & Anti-Inversion",
    "name": "Opt-out/consent check",
    "summary": "Confirm participation remains voluntary where applicable.",
    "advanced": "Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers.",
    "example": "Document how users can leave a study.",
    "useCases": [
      "high-impact projects",
      "public systems",
      "AI-assisted planning",
      "governance"
    ],
    "tags": [
      "systems",
      "safety",
      "ethics"
    ],
    "maturity": "stable",
    "tooltip": "Confirm participation remains voluntary where applicable. Advanced: Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers. Example: Document how users can leave a study. Recommended for: high-impact projects, public systems, AI-assisted planning."
  },
  {
    "id": "f376",
    "category": "systems",
    "categoryTitle": "Systems Thinking, Harm Checks & Anti-Inversion",
    "name": "Unknowns detector",
    "summary": "Turn missing evidence and expertise into tasks.",
    "advanced": "Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers.",
    "example": "Generate quests from unresolved assumptions.",
    "useCases": [
      "high-impact projects",
      "public systems",
      "AI-assisted planning",
      "governance"
    ],
    "tags": [
      "systems",
      "safety",
      "ethics"
    ],
    "maturity": "stable",
    "tooltip": "Turn missing evidence and expertise into tasks. Advanced: Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers. Example: Generate quests from unresolved assumptions. Recommended for: high-impact projects, public systems, AI-assisted planning."
  },
  {
    "id": "f377",
    "category": "learning",
    "categoryTitle": "Embedded Learning & Mentorship",
    "name": "Just-in-time primers",
    "summary": "Teach a concept at the moment it is needed.",
    "advanced": "Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content.",
    "example": "Explain confidence intervals beside an analysis tool.",
    "useCases": [
      "education",
      "workforce development",
      "volunteer communities",
      "professional learning"
    ],
    "tags": [
      "learning",
      "mentorship",
      "gamification"
    ],
    "maturity": "stable",
    "tooltip": "Teach a concept at the moment it is needed. Advanced: Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content. Example: Explain confidence intervals beside an analysis tool. Recommended for: education, workforce development, volunteer communities."
  },
  {
    "id": "f378",
    "category": "learning",
    "categoryTitle": "Embedded Learning & Mentorship",
    "name": "Competency pathways",
    "summary": "Define staged skill development.",
    "advanced": "Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content.",
    "example": "Progress from GIS basics to reviewed field mapping.",
    "useCases": [
      "education",
      "workforce development",
      "volunteer communities",
      "professional learning"
    ],
    "tags": [
      "learning",
      "mentorship",
      "gamification"
    ],
    "maturity": "stable",
    "tooltip": "Define staged skill development. Advanced: Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content. Example: Progress from GIS basics to reviewed field mapping. Recommended for: education, workforce development, volunteer communities."
  },
  {
    "id": "f379",
    "category": "learning",
    "categoryTitle": "Embedded Learning & Mentorship",
    "name": "Mentor matching",
    "summary": "Connect willing experts and learners.",
    "advanced": "Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content.",
    "example": "Pair a student with a project reviewer.",
    "useCases": [
      "education",
      "workforce development",
      "volunteer communities",
      "professional learning"
    ],
    "tags": [
      "learning",
      "mentorship",
      "gamification"
    ],
    "maturity": "stable",
    "tooltip": "Connect willing experts and learners. Advanced: Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content. Example: Pair a student with a project reviewer. Recommended for: education, workforce development, volunteer communities."
  },
  {
    "id": "f380",
    "category": "learning",
    "categoryTitle": "Embedded Learning & Mentorship",
    "name": "Office hours",
    "summary": "Schedule accessible group help sessions.",
    "advanced": "Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content.",
    "example": "Host weekly project clinics.",
    "useCases": [
      "education",
      "workforce development",
      "volunteer communities",
      "professional learning"
    ],
    "tags": [
      "learning",
      "mentorship",
      "gamification"
    ],
    "maturity": "stable",
    "tooltip": "Schedule accessible group help sessions. Advanced: Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content. Example: Host weekly project clinics. Recommended for: education, workforce development, volunteer communities."
  },
  {
    "id": "f381",
    "category": "learning",
    "categoryTitle": "Embedded Learning & Mentorship",
    "name": "Applied assessments",
    "summary": "Verify learning through actual work.",
    "advanced": "Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content.",
    "example": "Earn a competency by completing a reviewed map.",
    "useCases": [
      "education",
      "workforce development",
      "volunteer communities",
      "professional learning"
    ],
    "tags": [
      "learning",
      "mentorship",
      "gamification"
    ],
    "maturity": "stable",
    "tooltip": "Verify learning through actual work. Advanced: Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content. Example: Earn a competency by completing a reviewed map. Recommended for: education, workforce development, volunteer communities."
  },
  {
    "id": "f382",
    "category": "learning",
    "categoryTitle": "Embedded Learning & Mentorship",
    "name": "Peer teaching credit",
    "summary": "Recognize mentoring contributions.",
    "advanced": "Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content.",
    "example": "Award mentorship XP for accepted guidance.",
    "useCases": [
      "education",
      "workforce development",
      "volunteer communities",
      "professional learning"
    ],
    "tags": [
      "learning",
      "mentorship",
      "gamification"
    ],
    "maturity": "stable",
    "tooltip": "Recognize mentoring contributions. Advanced: Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content. Example: Award mentorship XP for accepted guidance. Recommended for: education, workforce development, volunteer communities."
  },
  {
    "id": "f383",
    "category": "learning",
    "categoryTitle": "Embedded Learning & Mentorship",
    "name": "Adaptive explanations",
    "summary": "Offer simple, advanced and expert depth.",
    "advanced": "Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content.",
    "example": "Switch a tooltip from one-minute summary to implementation details.",
    "useCases": [
      "education",
      "workforce development",
      "volunteer communities",
      "professional learning"
    ],
    "tags": [
      "learning",
      "mentorship",
      "gamification"
    ],
    "maturity": "stable",
    "tooltip": "Offer simple, advanced and expert depth. Advanced: Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content. Example: Switch a tooltip from one-minute summary to implementation details. Recommended for: education, workforce development, volunteer communities."
  },
  {
    "id": "f384",
    "category": "discovery",
    "categoryTitle": "Discovery, Recommendations & Project Graph Navigation",
    "name": "Global object search",
    "summary": "Search across people, projects, evidence, places and organizations.",
    "advanced": "Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people.",
    "example": "Find food projects in Alberta needing logistics help.",
    "useCases": [
      "collaboration networks",
      "research discovery",
      "volunteer platforms",
      "multi-domain suites"
    ],
    "tags": [
      "discovery",
      "recommendations",
      "graph"
    ],
    "maturity": "stable",
    "tooltip": "Search across people, projects, evidence, places and organizations. Advanced: Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people. Example: Find food projects in Alberta needing logistics help. Recommended for: collaboration networks, research discovery, volunteer platforms."
  },
  {
    "id": "f385",
    "category": "discovery",
    "categoryTitle": "Discovery, Recommendations & Project Graph Navigation",
    "name": "Explainable recommendations",
    "summary": "State why something is suggested.",
    "advanced": "Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people.",
    "example": "Recommended because your GIS skill matches this task.",
    "useCases": [
      "collaboration networks",
      "research discovery",
      "volunteer platforms",
      "multi-domain suites"
    ],
    "tags": [
      "discovery",
      "recommendations",
      "graph"
    ],
    "maturity": "stable",
    "tooltip": "State why something is suggested. Advanced: Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people. Example: Recommended because your GIS skill matches this task. Recommended for: collaboration networks, research discovery, volunteer platforms."
  },
  {
    "id": "f386",
    "category": "discovery",
    "categoryTitle": "Discovery, Recommendations & Project Graph Navigation",
    "name": "Related-project graph",
    "summary": "Navigate conceptual and dependency relationships.",
    "advanced": "Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people.",
    "example": "Explore projects linked to one watershed.",
    "useCases": [
      "collaboration networks",
      "research discovery",
      "volunteer platforms",
      "multi-domain suites"
    ],
    "tags": [
      "discovery",
      "recommendations",
      "graph"
    ],
    "maturity": "stable",
    "tooltip": "Navigate conceptual and dependency relationships. Advanced: Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people. Example: Explore projects linked to one watershed. Recommended for: collaboration networks, research discovery, volunteer platforms."
  },
  {
    "id": "f387",
    "category": "discovery",
    "categoryTitle": "Discovery, Recommendations & Project Graph Navigation",
    "name": "Saved searches",
    "summary": "Persist reusable discovery queries.",
    "advanced": "Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people.",
    "example": "Track open translation quests.",
    "useCases": [
      "collaboration networks",
      "research discovery",
      "volunteer platforms",
      "multi-domain suites"
    ],
    "tags": [
      "discovery",
      "recommendations",
      "graph"
    ],
    "maturity": "stable",
    "tooltip": "Persist reusable discovery queries. Advanced: Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people. Example: Track open translation quests. Recommended for: collaboration networks, research discovery, volunteer platforms."
  },
  {
    "id": "f388",
    "category": "discovery",
    "categoryTitle": "Discovery, Recommendations & Project Graph Navigation",
    "name": "Opportunity inbox",
    "summary": "Collect relevant requests without infinite scroll.",
    "advanced": "Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people.",
    "example": "Review five new matches in one deliberate session.",
    "useCases": [
      "collaboration networks",
      "research discovery",
      "volunteer platforms",
      "multi-domain suites"
    ],
    "tags": [
      "discovery",
      "recommendations",
      "graph"
    ],
    "maturity": "stable",
    "tooltip": "Collect relevant requests without infinite scroll. Advanced: Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people. Example: Review five new matches in one deliberate session. Recommended for: collaboration networks, research discovery, volunteer platforms."
  },
  {
    "id": "f389",
    "category": "discovery",
    "categoryTitle": "Discovery, Recommendations & Project Graph Navigation",
    "name": "Diversity constraints",
    "summary": "Avoid repeatedly showing one domain or organization.",
    "advanced": "Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people.",
    "example": "Surface complementary project types.",
    "useCases": [
      "collaboration networks",
      "research discovery",
      "volunteer platforms",
      "multi-domain suites"
    ],
    "tags": [
      "discovery",
      "recommendations",
      "graph"
    ],
    "maturity": "stable",
    "tooltip": "Avoid repeatedly showing one domain or organization. Advanced: Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people. Example: Surface complementary project types. Recommended for: collaboration networks, research discovery, volunteer platforms."
  },
  {
    "id": "f390",
    "category": "discovery",
    "categoryTitle": "Discovery, Recommendations & Project Graph Navigation",
    "name": "User-tunable ranking",
    "summary": "Let users adjust relevance factors.",
    "advanced": "Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people.",
    "example": "Prioritize local projects over global popularity.",
    "useCases": [
      "collaboration networks",
      "research discovery",
      "volunteer platforms",
      "multi-domain suites"
    ],
    "tags": [
      "discovery",
      "recommendations",
      "graph"
    ],
    "maturity": "stable",
    "tooltip": "Let users adjust relevance factors. Advanced: Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people. Example: Prioritize local projects over global popularity. Recommended for: collaboration networks, research discovery, volunteer platforms."
  },
  {
    "id": "f391",
    "category": "events",
    "categoryTitle": "Universal Event & Schema Architecture",
    "name": "Universal event envelope",
    "summary": "Standardize actor, action, object, time and context.",
    "advanced": "Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution.",
    "example": "Emit one task.completed shape everywhere.",
    "useCases": [
      "event-driven systems",
      "analytics",
      "audit",
      "workflow engines"
    ],
    "tags": [
      "events",
      "architecture",
      "data"
    ],
    "maturity": "stable",
    "tooltip": "Standardize actor, action, object, time and context. Advanced: Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution. Example: Emit one task.completed shape everywhere. Recommended for: event-driven systems, analytics, audit."
  },
  {
    "id": "f392",
    "category": "events",
    "categoryTitle": "Universal Event & Schema Architecture",
    "name": "Typed domain events",
    "summary": "Define explicit event families.",
    "advanced": "Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution.",
    "example": "project.created differs from evidence.reviewed.",
    "useCases": [
      "event-driven systems",
      "analytics",
      "audit",
      "workflow engines"
    ],
    "tags": [
      "events",
      "architecture",
      "data"
    ],
    "maturity": "stable",
    "tooltip": "Define explicit event families. Advanced: Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution. Example: project.created differs from evidence.reviewed. Recommended for: event-driven systems, analytics, audit."
  },
  {
    "id": "f393",
    "category": "events",
    "categoryTitle": "Universal Event & Schema Architecture",
    "name": "Schema registry",
    "summary": "Version and validate shared object contracts.",
    "advanced": "Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution.",
    "example": "Reject an event that targets an unsupported schema version.",
    "useCases": [
      "event-driven systems",
      "analytics",
      "audit",
      "workflow engines"
    ],
    "tags": [
      "events",
      "architecture",
      "data"
    ],
    "maturity": "stable",
    "tooltip": "Version and validate shared object contracts. Advanced: Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution. Example: Reject an event that targets an unsupported schema version. Recommended for: event-driven systems, analytics, audit."
  },
  {
    "id": "f394",
    "category": "events",
    "categoryTitle": "Universal Event & Schema Architecture",
    "name": "Event replay",
    "summary": "Reprocess past events through new projections.",
    "advanced": "Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution.",
    "example": "Rebuild a gamification dashboard after rules change.",
    "useCases": [
      "event-driven systems",
      "analytics",
      "audit",
      "workflow engines"
    ],
    "tags": [
      "events",
      "architecture",
      "data"
    ],
    "maturity": "stable",
    "tooltip": "Reprocess past events through new projections. Advanced: Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution. Example: Rebuild a gamification dashboard after rules change. Recommended for: event-driven systems, analytics, audit."
  },
  {
    "id": "f395",
    "category": "events",
    "categoryTitle": "Universal Event & Schema Architecture",
    "name": "Dead-letter queue",
    "summary": "Quarantine events that cannot be processed.",
    "advanced": "Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution.",
    "example": "Keep malformed integrations from blocking the stream.",
    "useCases": [
      "event-driven systems",
      "analytics",
      "audit",
      "workflow engines"
    ],
    "tags": [
      "events",
      "architecture",
      "data"
    ],
    "maturity": "stable",
    "tooltip": "Quarantine events that cannot be processed. Advanced: Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution. Example: Keep malformed integrations from blocking the stream. Recommended for: event-driven systems, analytics, audit."
  },
  {
    "id": "f396",
    "category": "events",
    "categoryTitle": "Universal Event & Schema Architecture",
    "name": "Materialized views",
    "summary": "Derive fast queryable projections.",
    "advanced": "Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution.",
    "example": "Build a contributor dashboard from events.",
    "useCases": [
      "event-driven systems",
      "analytics",
      "audit",
      "workflow engines"
    ],
    "tags": [
      "events",
      "architecture",
      "data"
    ],
    "maturity": "stable",
    "tooltip": "Derive fast queryable projections. Advanced: Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution. Example: Build a contributor dashboard from events. Recommended for: event-driven systems, analytics, audit."
  },
  {
    "id": "f397",
    "category": "events",
    "categoryTitle": "Universal Event & Schema Architecture",
    "name": "Correlation/causation IDs",
    "summary": "Link related events in a workflow.",
    "advanced": "Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution.",
    "example": "Trace a quest completion to its badge and notification.",
    "useCases": [
      "event-driven systems",
      "analytics",
      "audit",
      "workflow engines"
    ],
    "tags": [
      "events",
      "architecture",
      "data"
    ],
    "maturity": "stable",
    "tooltip": "Link related events in a workflow. Advanced: Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution. Example: Trace a quest completion to its badge and notification. Recommended for: event-driven systems, analytics, audit."
  },
  {
    "id": "f398",
    "category": "backend",
    "categoryTitle": "Online Backend & Edge Architecture",
    "name": "Edge/serverless functions",
    "summary": "Run APIs close to users without managing servers.",
    "advanced": "Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations.",
    "example": "Validate and persist a project action.",
    "useCases": [
      "online multiplayer",
      "institutional deployments",
      "public platforms",
      "large datasets"
    ],
    "tags": [
      "backend",
      "cloud",
      "online"
    ],
    "maturity": "stable",
    "tooltip": "Run APIs close to users without managing servers. Advanced: Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations. Example: Validate and persist a project action. Recommended for: online multiplayer, institutional deployments, public platforms."
  },
  {
    "id": "f399",
    "category": "backend",
    "categoryTitle": "Online Backend & Edge Architecture",
    "name": "Stateful room objects",
    "summary": "Keep low-latency state near realtime sessions.",
    "advanced": "Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations.",
    "example": "Use one coordinator per multiplayer room.",
    "useCases": [
      "online multiplayer",
      "institutional deployments",
      "public platforms",
      "large datasets"
    ],
    "tags": [
      "backend",
      "cloud",
      "online"
    ],
    "maturity": "stable",
    "tooltip": "Keep low-latency state near realtime sessions. Advanced: Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations. Example: Use one coordinator per multiplayer room. Recommended for: online multiplayer, institutional deployments, public platforms."
  },
  {
    "id": "f400",
    "category": "backend",
    "categoryTitle": "Online Backend & Edge Architecture",
    "name": "Relational database",
    "summary": "Store durable normalized online state.",
    "advanced": "Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations.",
    "example": "Persist users, projects and permissions.",
    "useCases": [
      "online multiplayer",
      "institutional deployments",
      "public platforms",
      "large datasets"
    ],
    "tags": [
      "backend",
      "cloud",
      "online"
    ],
    "maturity": "stable",
    "tooltip": "Store durable normalized online state. Advanced: Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations. Example: Persist users, projects and permissions. Recommended for: online multiplayer, institutional deployments, public platforms."
  },
  {
    "id": "f401",
    "category": "backend",
    "categoryTitle": "Online Backend & Edge Architecture",
    "name": "Object storage",
    "summary": "Store large files and media.",
    "advanced": "Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations.",
    "example": "Keep datasets separate from relational rows.",
    "useCases": [
      "online multiplayer",
      "institutional deployments",
      "public platforms",
      "large datasets"
    ],
    "tags": [
      "backend",
      "cloud",
      "online"
    ],
    "maturity": "stable",
    "tooltip": "Store large files and media. Advanced: Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations. Example: Keep datasets separate from relational rows. Recommended for: online multiplayer, institutional deployments, public platforms."
  },
  {
    "id": "f402",
    "category": "backend",
    "categoryTitle": "Online Backend & Edge Architecture",
    "name": "KV/cache layer",
    "summary": "Serve small frequently-read configuration quickly.",
    "advanced": "Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations.",
    "example": "Cache public project summaries.",
    "useCases": [
      "online multiplayer",
      "institutional deployments",
      "public platforms",
      "large datasets"
    ],
    "tags": [
      "backend",
      "cloud",
      "online"
    ],
    "maturity": "stable",
    "tooltip": "Serve small frequently-read configuration quickly. Advanced: Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations. Example: Cache public project summaries. Recommended for: online multiplayer, institutional deployments, public platforms."
  },
  {
    "id": "f403",
    "category": "backend",
    "categoryTitle": "Online Backend & Edge Architecture",
    "name": "Search index",
    "summary": "Provide scalable lexical/faceted search.",
    "advanced": "Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations.",
    "example": "Search millions of public objects.",
    "useCases": [
      "online multiplayer",
      "institutional deployments",
      "public platforms",
      "large datasets"
    ],
    "tags": [
      "backend",
      "cloud",
      "online"
    ],
    "maturity": "stable",
    "tooltip": "Provide scalable lexical/faceted search. Advanced: Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations. Example: Search millions of public objects. Recommended for: online multiplayer, institutional deployments, public platforms."
  },
  {
    "id": "f404",
    "category": "backend",
    "categoryTitle": "Online Backend & Edge Architecture",
    "name": "Vector index",
    "summary": "Support server-side semantic retrieval.",
    "advanced": "Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations.",
    "example": "Find similar evidence across instances.",
    "useCases": [
      "online multiplayer",
      "institutional deployments",
      "public platforms",
      "large datasets"
    ],
    "tags": [
      "backend",
      "cloud",
      "online"
    ],
    "maturity": "stable",
    "tooltip": "Support server-side semantic retrieval. Advanced: Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations. Example: Find similar evidence across instances. Recommended for: online multiplayer, institutional deployments, public platforms."
  },
  {
    "id": "f405",
    "category": "backend",
    "categoryTitle": "Online Backend & Edge Architecture",
    "name": "Scheduled jobs/queues",
    "summary": "Run deferred and retryable work.",
    "advanced": "Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations.",
    "example": "Refresh public datasets nightly.",
    "useCases": [
      "online multiplayer",
      "institutional deployments",
      "public platforms",
      "large datasets"
    ],
    "tags": [
      "backend",
      "cloud",
      "online"
    ],
    "maturity": "stable",
    "tooltip": "Run deferred and retryable work. Advanced: Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations. Example: Refresh public datasets nightly. Recommended for: online multiplayer, institutional deployments, public platforms."
  },
  {
    "id": "f406",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "SFU media topology",
    "summary": "Route audio/video through a selective forwarding unit for rooms too large for full peer meshes.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Run a 50-person workshop without every browser maintaining 49 media connections.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "multiplayer",
      "media"
    ],
    "maturity": "conditional",
    "tooltip": "Route audio/video through a selective forwarding unit for rooms too large for full peer meshes. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Run a 50-person workshop without every browser maintaining 49 media connections. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f407",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "Simulcast / SVC video",
    "summary": "Publish layered video encodings so receivers get quality appropriate to bandwidth and layout.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Send low-resolution thumbnails plus a higher-quality active speaker stream.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "media",
      "network",
      "performance"
    ],
    "maturity": "conditional",
    "tooltip": "Publish layered video encodings so receivers get quality appropriate to bandwidth and layout. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Send low-resolution thumbnails plus a higher-quality active speaker stream. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f408",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "WebRTC Encoded Transforms",
    "summary": "Transform encoded media frames for advanced end-to-end encryption or processing where supported.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Encrypt conference media before it reaches an SFU that should not see plaintext.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "media",
      "webrtc"
    ],
    "maturity": "conditional",
    "tooltip": "Transform encoded media frames for advanced end-to-end encryption or processing where supported. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Encrypt conference media before it reaches an SFU that should not see plaintext. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f409",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "Messaging Layer Security (MLS)",
    "summary": "Use standardized group key agreement concepts for large encrypted groups.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Rotate group keys when a participant joins or leaves a sensitive room.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "encryption",
      "multiplayer"
    ],
    "maturity": "emerging",
    "tooltip": "Use standardized group key agreement concepts for large encrypted groups. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Rotate group keys when a participant joins or leaves a sensitive room. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f410",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "Ephemeral TURN credentials",
    "summary": "Issue short-lived relay credentials instead of embedding permanent TURN secrets.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Allow WebRTC relay for one session without exposing long-term credentials.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "webrtc",
      "backend"
    ],
    "maturity": "stable",
    "tooltip": "Issue short-lived relay credentials instead of embedding permanent TURN secrets. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Allow WebRTC relay for one session without exposing long-term credentials. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f411",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "Verifiable Credentials",
    "summary": "Represent portable cryptographically verifiable claims about roles or competencies.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Verify that a reviewer holds a credential without copying the issuer database.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "identity",
      "trust",
      "interop"
    ],
    "maturity": "conditional",
    "tooltip": "Represent portable cryptographically verifiable claims about roles or competencies. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Verify that a reviewer holds a credential without copying the issuer database. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f412",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "DID adapter layer",
    "summary": "Support decentralized identifier methods through replaceable adapters where justified.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Resolve a portable contributor identifier without binding the application to one DID method.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "identity",
      "decentralized",
      "interop"
    ],
    "maturity": "emerging",
    "tooltip": "Support decentralized identifier methods through replaceable adapters where justified. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Resolve a portable contributor identifier without binding the application to one DID method. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f413",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "C2PA / Content Credentials",
    "summary": "Preserve compatible content provenance metadata for media and generated assets.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Carry source/edit provenance with a published project image.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "provenance",
      "media",
      "trust"
    ],
    "maturity": "conditional",
    "tooltip": "Preserve compatible content provenance metadata for media and generated assets. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Carry source/edit provenance with a published project image. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f414",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "Software Bill of Materials (SBOM)",
    "summary": "Generate a machine-readable inventory of shipped software dependencies.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Publish dependency provenance beside a release bundle.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "devops",
      "supply-chain"
    ],
    "maturity": "stable",
    "tooltip": "Generate a machine-readable inventory of shipped software dependencies. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Publish dependency provenance beside a release bundle. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f415",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "SLSA-style build provenance",
    "summary": "Record verifiable build origin and release pipeline metadata.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Show which source revision and workflow produced a deployed artifact.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "devops",
      "provenance"
    ],
    "maturity": "conditional",
    "tooltip": "Record verifiable build origin and release pipeline metadata. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Show which source revision and workflow produced a deployed artifact. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f416",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "Policy-as-code",
    "summary": "Express authorization or governance rules as reviewable policy separate from application code.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Evaluate whether a role may publish a dataset under current organization policy.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "governance",
      "authorization"
    ],
    "maturity": "stable",
    "tooltip": "Express authorization or governance rules as reviewable policy separate from application code. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Evaluate whether a role may publish a dataset under current organization policy. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f417",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "Contract testing",
    "summary": "Verify that clients and services continue to honor shared API/event contracts.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Catch a breaking event-schema change before production.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "testing",
      "api",
      "interop"
    ],
    "maturity": "stable",
    "tooltip": "Verify that clients and services continue to honor shared API/event contracts. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Catch a breaking event-schema change before production. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f418",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "Property-based testing",
    "summary": "Generate many inputs to test invariants rather than only hand-written examples.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Prove that merge operations remain commutative across randomized edits.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "testing",
      "quality",
      "sync"
    ],
    "maturity": "stable",
    "tooltip": "Generate many inputs to test invariants rather than only hand-written examples. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Prove that merge operations remain commutative across randomized edits. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f419",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "Chaos / fault injection",
    "summary": "Deliberately simulate failures to verify resilience.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Drop peer connections, fail a database call and restart a room coordinator during tests.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "testing",
      "resilience",
      "ops"
    ],
    "maturity": "stable",
    "tooltip": "Deliberately simulate failures to verify resilience. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Drop peer connections, fail a database call and restart a room coordinator during tests. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f420",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "Synthetic load testing",
    "summary": "Generate realistic concurrency before public launch.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Simulate 5,000 room connections and bursty task events.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "testing",
      "backend"
    ],
    "maturity": "stable",
    "tooltip": "Generate realistic concurrency before public launch. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Simulate 5,000 room connections and bursty task events. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f421",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "Deterministic replay debugger",
    "summary": "Replay recorded events through the same reducers to reproduce distributed bugs.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Recreate the exact sequence that produced an incorrect project state.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "events",
      "debugging",
      "observability"
    ],
    "maturity": "stable",
    "tooltip": "Replay recorded events through the same reducers to reproduce distributed bugs. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Recreate the exact sequence that produced an incorrect project state. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f422",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "Anonymous credential rate limiting",
    "summary": "Limit abuse without requiring persistent cross-site identity where supported by the chosen design.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Give an anonymous participant a bounded posting budget while minimizing tracking.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "privacy",
      "moderation"
    ],
    "maturity": "emerging",
    "tooltip": "Limit abuse without requiring persistent cross-site identity where supported by the chosen design. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Give an anonymous participant a bounded posting budget while minimizing tracking. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f423",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "WebNN inference adapter",
    "summary": "Use browser neural-network acceleration when available behind a provider abstraction.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Run a small embedding or vision model through a hardware-backed browser path.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "ai",
      "compute",
      "browser"
    ],
    "maturity": "emerging",
    "tooltip": "Use browser neural-network acceleration when available behind a provider abstraction. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Run a small embedding or vision model through a hardware-backed browser path. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f424",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "Optimized WebGPU kernels",
    "summary": "Use tuned GPU kernels for local inference and scientific workloads.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Accelerate embedding or matrix operations beyond generic shader implementations.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "webgpu",
      "ai",
      "performance"
    ],
    "maturity": "emerging",
    "tooltip": "Use tuned GPU kernels for local inference and scientific workloads. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Accelerate embedding or matrix operations beyond generic shader implementations. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f425",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "Sandboxed WASM plugins",
    "summary": "Run untrusted or third-party computation inside constrained WebAssembly interfaces.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Allow a community analytics plugin without direct DOM/database authority.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "wasm",
      "plugins"
    ],
    "maturity": "conditional",
    "tooltip": "Run untrusted or third-party computation inside constrained WebAssembly interfaces. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Allow a community analytics plugin without direct DOM/database authority. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f426",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "Sandboxed iframe plugin RPC",
    "summary": "Isolate optional UI plugins in sandboxed frames with explicit message contracts.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Let a visualization extension render without inheriting full application privileges.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "plugins",
      "architecture"
    ],
    "maturity": "stable",
    "tooltip": "Isolate optional UI plugins in sandboxed frames with explicit message contracts. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Let a visualization extension render without inheriting full application privileges. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f427",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "Group key rotation",
    "summary": "Rotate encryption material as room membership changes.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Remove a departed participant from future encrypted message access.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "multiplayer",
      "encryption"
    ],
    "maturity": "stable",
    "tooltip": "Rotate encryption material as room membership changes. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Remove a departed participant from future encrypted message access. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f428",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "Merkle synchronization",
    "summary": "Compare replicated state by tree/hash summaries before sending missing objects.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Synchronize two archive nodes by transferring only divergent branches.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "sync",
      "decentralized",
      "performance"
    ],
    "maturity": "conditional",
    "tooltip": "Compare replicated state by tree/hash summaries before sending missing objects. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Synchronize two archive nodes by transferring only divergent branches. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f429",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "Schema evolution compatibility",
    "summary": "Define forward/backward compatibility rules for long-lived event and object schemas.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Allow v4 clients to read safe fields from v5 events while rejecting incompatible writes.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "schema",
      "interop",
      "resilience"
    ],
    "maturity": "stable",
    "tooltip": "Define forward/backward compatibility rules for long-lived event and object schemas. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Allow v4 clients to read safe fields from v5 events while rejecting incompatible writes. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  },
  {
    "id": "f430",
    "category": "frontier",
    "categoryTitle": "Frontier Production Hardening",
    "name": "Transparency log anchoring",
    "summary": "Publish append-only signed release or moderation proofs to an independently verifiable log where warranted.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "example": "Make it detectable if a signed release record disappears later.",
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ],
    "tags": [
      "frontier",
      "production",
      "security",
      "scale",
      "provenance",
      "audit"
    ],
    "maturity": "conditional",
    "tooltip": "Publish append-only signed release or moderation proofs to an independently verifiable log where warranted. Advanced: Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure. Example: Make it detectable if a signed release record disappears later. Recommended for: large public multiplayer, institutional infrastructure, high-assurance deployments."
  }
];
export const CATEGORIES = [
  {
    "id": "storage",
    "title": "Storage & Local Data",
    "description": "Durable browser-side data, large-file handling, migrations, backup and portable workspaces.",
    "advanced": "Combine transactional structured storage with file-oriented storage, explicit schema versions, integrity checks, quota awareness and reversible migrations.",
    "tags": [
      "offline",
      "data",
      "resilience"
    ],
    "useCases": [
      "offline-first applications",
      "large datasets",
      "portable knowledge commons",
      "local AI assets"
    ]
  },
  {
    "id": "sync",
    "title": "Local-first Sync & Conflict Resolution",
    "description": "Let users work immediately and reconcile changes when connectivity or peers return.",
    "advanced": "Use explicit operation identities, causality metadata, conflict semantics and convergence tests rather than relying on last-write-wins.",
    "tags": [
      "offline",
      "sync",
      "multiplayer"
    ],
    "useCases": [
      "collaborative editors",
      "field operations",
      "multiplayer project boards",
      "federated nodes"
    ]
  },
  {
    "id": "concurrency",
    "title": "Workers, Concurrency & Cross-Tab Coordination",
    "description": "Keep intensive workloads responsive and coordinate multiple browser contexts.",
    "advanced": "Move expensive tasks off the main thread, guard shared resources with locks, and make cancellation and backpressure explicit.",
    "tags": [
      "performance",
      "browser",
      "resilience"
    ],
    "useCases": [
      "local AI",
      "large visualizations",
      "multi-tab applications",
      "simulation tools"
    ]
  },
  {
    "id": "compute",
    "title": "WebAssembly, WebGPU & High-Performance Compute",
    "description": "Use native-speed and GPU-accelerated execution for demanding browser workloads.",
    "advanced": "Feature-detect high-performance paths and always define lower-capability fallbacks to avoid excluding modest devices.",
    "tags": [
      "performance",
      "gpu",
      "wasm"
    ],
    "useCases": [
      "local AI",
      "scientific computing",
      "large maps",
      "interactive simulations"
    ]
  },
  {
    "id": "ai",
    "title": "Local & Hybrid AI",
    "description": "Run privacy-preserving AI locally and route to remote models only when appropriate.",
    "advanced": "Treat models as pluggable providers behind structured interfaces; track provenance, cost, privacy and capability for each invocation.",
    "tags": [
      "ai",
      "webllm",
      "rag"
    ],
    "useCases": [
      "private copilots",
      "prompt improvement",
      "research synthesis",
      "agent-assisted workflows"
    ]
  },
  {
    "id": "network",
    "title": "Realtime Multiplayer Networking",
    "description": "Provide direct peer communication and dependable server-backed fallbacks.",
    "advanced": "Separate application semantics from transport so WebRTC, WebSocket and WebTransport can be swapped without rewriting domain logic.",
    "tags": [
      "multiplayer",
      "realtime",
      "network"
    ],
    "useCases": [
      "multiplayer workspaces",
      "shared maps",
      "live games",
      "remote workshops"
    ]
  },
  {
    "id": "authority",
    "title": "Authoritative Coordination & Room Services",
    "description": "Add durable coordination where purely peer-to-peer networking is insufficient.",
    "advanced": "Keep high-value validation, membership, sequencing and durable state under a trusted service while leaving bulk collaboration peer-to-peer when useful.",
    "tags": [
      "server",
      "multiplayer",
      "coordination"
    ],
    "useCases": [
      "public multiplayer",
      "institutional collaboration",
      "authoritative games",
      "large rooms"
    ]
  },
  {
    "id": "decentralized",
    "title": "Decentralized & Federated Systems",
    "description": "Support independent nodes, peer replication and portable identities without making everything centrally dependent.",
    "advanced": "Separate discovery, replication, identity and application state; add signatures and conflict semantics before treating distributed data as trustworthy.",
    "tags": [
      "decentralized",
      "federation",
      "p2p"
    ],
    "useCases": [
      "community-owned infrastructure",
      "resilient archives",
      "multi-instance commons",
      "peer discovery"
    ]
  },
  {
    "id": "security",
    "title": "Security Engineering",
    "description": "Build security into data flow, rendering, permissions and dependency boundaries.",
    "advanced": "Threat-model the application, minimize ambient authority, validate every trust transition and prefer standards-based cryptography over custom schemes.",
    "tags": [
      "security",
      "integrity",
      "privacy"
    ],
    "useCases": [
      "public web apps",
      "institutional deployments",
      "plugin systems",
      "AI-assisted applications"
    ]
  },
  {
    "id": "identity",
    "title": "Identity, Authentication & Authorization",
    "description": "Support passkeys, pseudonymous participation and granular permissions.",
    "advanced": "Separate authentication assurance from authorization, reputation and profile visibility; allow low-risk participation without demanding unnecessary identity.",
    "tags": [
      "identity",
      "auth",
      "trust"
    ],
    "useCases": [
      "public communities",
      "enterprise collaboration",
      "moderated spaces",
      "sensitive projects"
    ]
  },
  {
    "id": "privacy",
    "title": "Privacy & Data Sovereignty",
    "description": "Give participants visible control over collection, sharing, retention and deletion.",
    "advanced": "Make privacy states inspectable in the interface; separate required service metadata from optional profile and analytics data.",
    "tags": [
      "privacy",
      "sovereignty",
      "consent"
    ],
    "useCases": [
      "community platforms",
      "field tools",
      "research collaboration",
      "privacy-sensitive users"
    ]
  },
  {
    "id": "files",
    "title": "File & OS Integration",
    "description": "Make browser applications interoperate naturally with user files and desktop workflows.",
    "advanced": "Request permissions only when a user initiates an action, retain upload/download fallbacks and never assume advanced filesystem APIs exist.",
    "tags": [
      "files",
      "browser",
      "ux"
    ],
    "useCases": [
      "PWA tools",
      "data analysis",
      "field applications",
      "documentation systems"
    ]
  },
  {
    "id": "search",
    "title": "Search, Retrieval & Knowledge Systems",
    "description": "Help users find information by text, semantics, entities, time, geography and relationships.",
    "advanced": "Use hybrid retrieval: lexical precision, vector similarity, metadata filters, quality signals and explicit provenance.",
    "tags": [
      "search",
      "knowledge",
      "rag"
    ],
    "useCases": [
      "research commons",
      "large project portfolios",
      "AI RAG",
      "discovery interfaces"
    ]
  },
  {
    "id": "evidence",
    "title": "Evidence, Provenance & Integrity",
    "description": "Make claims traceable to sources, transformations and review status.",
    "advanced": "Treat provenance as a graph from source to transformation to derived claim or decision, with machine-readable metadata and human-visible explanations.",
    "tags": [
      "evidence",
      "provenance",
      "research"
    ],
    "useCases": [
      "research platforms",
      "institutional decisions",
      "public dashboards",
      "AI synthesis"
    ]
  },
  {
    "id": "modules",
    "title": "Modular Application Architecture",
    "description": "Keep a growing platform understandable, replaceable and failure-tolerant.",
    "advanced": "Define module lifecycle, dependencies, capabilities, routes, schemas and error containment rather than allowing cross-module implicit coupling.",
    "tags": [
      "architecture",
      "modules",
      "scalability"
    ],
    "useCases": [
      "large suites",
      "plugin ecosystems",
      "multi-domain platforms",
      "long-lived projects"
    ]
  },
  {
    "id": "performance",
    "title": "Performance Engineering",
    "description": "Keep the interface fast as data, users and features grow.",
    "advanced": "Set budgets for startup, memory, network and long tasks; measure real performance and adapt quality rather than relying on intuition.",
    "tags": [
      "performance",
      "quality",
      "scale"
    ],
    "useCases": [
      "mobile users",
      "large datasets",
      "AI-heavy apps",
      "global deployments"
    ]
  },
  {
    "id": "resilience",
    "title": "Resilience & Graceful Degradation",
    "description": "Keep core tasks usable when capabilities, networks or dependencies fail.",
    "advanced": "Design explicit fallback ladders and recovery states; test degraded modes as first-class product experiences.",
    "tags": [
      "resilience",
      "offline",
      "quality"
    ],
    "useCases": [
      "mission-critical tools",
      "field work",
      "large PWAs",
      "public services"
    ]
  },
  {
    "id": "observability",
    "title": "Observability Without Surveillance",
    "description": "Understand application health while respecting participant privacy.",
    "advanced": "Prefer technical telemetry and user-controlled diagnostics over behavioral tracking; correlate distributed errors with trace IDs and redact sensitive payloads.",
    "tags": [
      "observability",
      "privacy",
      "ops"
    ],
    "useCases": [
      "public platforms",
      "serverless deployments",
      "privacy-first tools",
      "support workflows"
    ]
  },
  {
    "id": "testing",
    "title": "Testing & Self-Verification",
    "description": "Ship automated checks for correctness, compatibility, accessibility and failure recovery.",
    "advanced": "Test invariants and degraded states, not just happy paths; include reproducible fixtures and user-visible self-tests for portable bundles.",
    "tags": [
      "testing",
      "quality",
      "devops"
    ],
    "useCases": [
      "long-lived software",
      "offline apps",
      "multiplayer systems",
      "public releases"
    ]
  },
  {
    "id": "accessibility",
    "title": "Accessibility-First Interaction",
    "description": "Make complex collaborative systems usable across assistive technologies and cognitive needs.",
    "advanced": "Treat shared presence, realtime updates and visualization as accessibility problems too, not only static markup.",
    "tags": [
      "accessibility",
      "wcag",
      "ux"
    ],
    "useCases": [
      "public services",
      "education",
      "multiplayer collaboration",
      "visual dashboards"
    ]
  },
  {
    "id": "i18n",
    "title": "Internationalization & Localization",
    "description": "Support multilingual and culturally appropriate collaboration.",
    "advanced": "Keep content keys, locale formatting, translation provenance and right-to-left layout support separate from business logic.",
    "tags": [
      "i18n",
      "global",
      "accessibility"
    ],
    "useCases": [
      "global communities",
      "cross-border research",
      "education",
      "international institutions"
    ]
  },
  {
    "id": "visualization",
    "title": "Advanced Visualization",
    "description": "Turn complex systems into explorable visual models while preserving accessible alternatives.",
    "advanced": "Use the lightest rendering technology that meets scale needs, synchronize visual state with URL/data state and preserve deterministic exports.",
    "tags": [
      "visualization",
      "canvas",
      "graph"
    ],
    "useCases": [
      "knowledge graphs",
      "system maps",
      "dashboards",
      "gamified interfaces"
    ]
  },
  {
    "id": "geo",
    "title": "Geospatial & Mapping",
    "description": "Represent places, infrastructure, hazards and interventions as shared spatial data.",
    "advanced": "Use open geospatial formats, explicit coordinate systems, offline-friendly layers and privacy-sensitive location precision.",
    "tags": [
      "maps",
      "geo",
      "field"
    ],
    "useCases": [
      "field operations",
      "regional planning",
      "infrastructure",
      "environmental projects"
    ]
  },
  {
    "id": "media",
    "title": "Media & Rich Collaboration",
    "description": "Capture, process and share audio, video, images and screens where they genuinely improve collaboration.",
    "advanced": "Make recording explicit and consent-driven; process locally where feasible and provide text equivalents.",
    "tags": [
      "media",
      "webrtc",
      "collaboration"
    ],
    "useCases": [
      "remote meetings",
      "field evidence",
      "education",
      "media-rich games"
    ]
  },
  {
    "id": "device",
    "title": "Device & Sensor Capabilities",
    "description": "Use permission-gated hardware APIs for field, accessibility and specialized workflows.",
    "advanced": "Every device capability should be optional, purpose-limited and paired with clear permission rationale and manual fallback.",
    "tags": [
      "device",
      "permissions",
      "field"
    ],
    "useCases": [
      "field science",
      "accessibility",
      "hardware labs",
      "interactive exhibits"
    ]
  },
  {
    "id": "background",
    "title": "Notifications & Background Work",
    "description": "Keep users informed without requiring constant attention or an open foreground tab.",
    "advanced": "Treat background APIs as progressive enhancements because support varies; always preserve an in-app queue and visible freshness state.",
    "tags": [
      "notifications",
      "background",
      "pwa"
    ],
    "useCases": [
      "PWA collaboration",
      "field apps",
      "project management",
      "community platforms"
    ]
  },
  {
    "id": "pwa",
    "title": "Advanced PWA Integration",
    "description": "Make installable web software behave more like a durable application without hiding browser limitations.",
    "advanced": "Version caches deliberately, surface update state, preserve user data across releases and avoid claiming background or offline behavior that has not been cached.",
    "tags": [
      "pwa",
      "offline",
      "native"
    ],
    "useCases": [
      "installable tools",
      "offline suites",
      "desktop-like PWAs",
      "field apps"
    ]
  },
  {
    "id": "workflow",
    "title": "Workflow & Automation Engines",
    "description": "Turn collaboration into repeatable stateful processes rather than loose messages.",
    "advanced": "Represent triggers, conditions, actions, approvals, retries and audit events as explicit data so workflows can be inspected and simulated.",
    "tags": [
      "workflow",
      "automation",
      "coordination"
    ],
    "useCases": [
      "institutional processes",
      "research review",
      "project operations",
      "agent workflows"
    ]
  },
  {
    "id": "decision",
    "title": "Decision Support & Scenario Analysis",
    "description": "Help groups reason about trade-offs, assumptions, risks and uncertainty without hiding judgment inside scores.",
    "advanced": "Keep assumptions explicit, separate measured data from modeled estimates and make sensitivity to weights/parameters visible.",
    "tags": [
      "decision",
      "simulation",
      "analysis"
    ],
    "useCases": [
      "planning",
      "resource allocation",
      "systems engineering",
      "training"
    ]
  },
  {
    "id": "science",
    "title": "Scientific & Data Analysis",
    "description": "Embed reproducible data exploration and quantitative reasoning into collaborative projects.",
    "advanced": "Keep datasets, transformations, code/formulas, assumptions and outputs linked so analyses can be rerun and audited.",
    "tags": [
      "science",
      "data",
      "analysis"
    ],
    "useCases": [
      "research",
      "planning",
      "education",
      "evidence-based projects"
    ]
  },
  {
    "id": "governance",
    "title": "Governance & Deliberation",
    "description": "Structure proposals, discussion, review, consent and accountability.",
    "advanced": "Governance mechanisms should be configurable, transparent and appropriate to context; preserve dissent and appeals rather than collapsing everything into one vote.",
    "tags": [
      "governance",
      "collaboration",
      "trust"
    ],
    "useCases": [
      "cooperatives",
      "institutions",
      "community projects",
      "research groups"
    ]
  },
  {
    "id": "game",
    "title": "Gamification Tied to Real Work",
    "description": "Use game mechanics to reveal progress and encourage cooperation without turning engagement into the objective.",
    "advanced": "Reward verified contribution quality and learning; use anti-Goodhart safeguards, optional HUDs and multidimensional progress rather than a single social score.",
    "tags": [
      "gamification",
      "learning",
      "collaboration"
    ],
    "useCases": [
      "education",
      "volunteer coordination",
      "community projects",
      "serious games"
    ]
  },
  {
    "id": "ux",
    "title": "Advanced UX & Workspace Architecture",
    "description": "Provide one coherent interface across many modules and participant skill levels.",
    "advanced": "Derive navigation, route state and contextual actions from shared registries; preserve keyboard accessibility and stable deep links.",
    "tags": [
      "ux",
      "navigation",
      "workspace"
    ],
    "useCases": [
      "large suites",
      "professional tools",
      "learning platforms",
      "mobile/desktop apps"
    ]
  },
  {
    "id": "knowledge",
    "title": "Collaborative Knowledge Management",
    "description": "Turn discussions and artifacts into a durable, linked commons.",
    "advanced": "Promote important chat or notes into structured, versioned objects; use backlinks and review states so knowledge remains navigable as volume grows.",
    "tags": [
      "knowledge",
      "collaboration",
      "wiki"
    ],
    "useCases": [
      "research archives",
      "institutional memory",
      "community knowledge",
      "documentation"
    ]
  },
  {
    "id": "interop",
    "title": "Interoperability & Open Standards",
    "description": "Keep data useful outside one application and make integrations replaceable.",
    "advanced": "Use explicit schemas, semantic identifiers and standard interchange formats; version contracts before exposing them to external systems.",
    "tags": [
      "interop",
      "standards",
      "api"
    ],
    "useCases": [
      "integrations",
      "institutional systems",
      "open data",
      "federation"
    ]
  },
  {
    "id": "devops",
    "title": "Deployment, CI/CD & Release Engineering",
    "description": "Automate quality gates, reproducible builds and safe deployments.",
    "advanced": "Treat infrastructure configuration, schemas and release metadata as version-controlled code; require rollback paths and environment separation.",
    "tags": [
      "devops",
      "deployment",
      "quality"
    ],
    "useCases": [
      "public web apps",
      "large suites",
      "institutional deployments",
      "rapid iteration"
    ]
  },
  {
    "id": "presence",
    "title": "Multiplayer Presence & Social Context",
    "description": "Show who is participating and what collaborative state is relevant without turning presence into surveillance.",
    "advanced": "Keep presence ephemeral, minimize sensitive attributes and let users control visibility; do not persist everything merely because it can be observed.",
    "tags": [
      "presence",
      "multiplayer",
      "collaboration"
    ],
    "useCases": [
      "shared docs",
      "workshops",
      "multidisciplinary rooms",
      "team coordination"
    ]
  },
  {
    "id": "roles",
    "title": "Cross-Disciplinary Roles & Skills Graphs",
    "description": "Model expertise, responsibilities, learning goals and organizational context as structured data.",
    "advanced": "Separate self-declared, peer-endorsed and formally verified competencies; make missing expertise discoverable without ranking people globally.",
    "tags": [
      "skills",
      "roles",
      "matchmaking"
    ],
    "useCases": [
      "cross-domain teams",
      "education",
      "institutional projects",
      "volunteer networks"
    ]
  },
  {
    "id": "matchmaking",
    "title": "Collaboration Matchmaking & Resource Exchange",
    "description": "Connect needs, people, organizations and reusable assets.",
    "advanced": "Make matching criteria explainable, opt-in and multi-factor; optimize for fit and unmet needs rather than addictive engagement.",
    "tags": [
      "matchmaking",
      "resources",
      "network"
    ],
    "useCases": [
      "volunteer networks",
      "institutional collaboration",
      "research teams",
      "community resource sharing"
    ]
  },
  {
    "id": "projectgraph",
    "title": "Project Graphs, Resources & Dependencies",
    "description": "Represent work as linked goals, programs, milestones, tasks, resources and outcomes.",
    "advanced": "Model dependencies explicitly so the platform can compute blockers, critical paths, shared assets and cross-domain effects.",
    "tags": [
      "projects",
      "graph",
      "coordination"
    ],
    "useCases": [
      "portfolio management",
      "systems planning",
      "replicable interventions",
      "research programs"
    ]
  },
  {
    "id": "lab",
    "title": "Shared Labs, Simulation & Digital Twins",
    "description": "Let participants test hypotheses together before acting in the real world.",
    "advanced": "Keep simulated results distinct from observed measurements, expose assumptions and support deterministic scenario sharing.",
    "tags": [
      "simulation",
      "lab",
      "multiplayer"
    ],
    "useCases": [
      "training",
      "planning",
      "scientific collaboration",
      "serious games"
    ]
  },
  {
    "id": "moderation",
    "title": "Moderation, Abuse Resistance & Trust",
    "description": "Protect collaborative spaces from spam, harassment, vandalism and manipulation.",
    "advanced": "Combine reversible history, rate limits, user controls, transparent rules and appeal paths; avoid opaque global reputation scores.",
    "tags": [
      "moderation",
      "trust",
      "safety"
    ],
    "useCases": [
      "public communities",
      "multiplayer",
      "knowledge commons",
      "youth-safe spaces"
    ]
  },
  {
    "id": "federation",
    "title": "Federation & Multi-Instance Commons",
    "description": "Allow communities and institutions to run autonomous deployments while interoperating.",
    "advanced": "Define shared schemas, signed server identities, federation policies and selective exchange boundaries before implementing cross-instance discovery.",
    "tags": [
      "federation",
      "server",
      "interop"
    ],
    "useCases": [
      "community-owned platforms",
      "universities",
      "municipal networks",
      "global commons"
    ]
  },
  {
    "id": "api",
    "title": "API-First Integrations & External Events",
    "description": "Expose stable machine interfaces so external tools and agents can participate safely.",
    "advanced": "Version APIs, authenticate actions, validate payloads and separate read capabilities from consequential writes.",
    "tags": [
      "api",
      "integration",
      "agents"
    ],
    "useCases": [
      "mobile clients",
      "institutional integrations",
      "AI agents",
      "automation"
    ]
  },
  {
    "id": "analytics",
    "title": "Outcome, Network & Cost Analytics",
    "description": "Measure whether the system is useful, healthy and affordable without optimizing for compulsive engagement.",
    "advanced": "Separate operational metrics, impact indicators and behavioral analytics; minimize collection and make definitions inspectable.",
    "tags": [
      "analytics",
      "impact",
      "ops"
    ],
    "useCases": [
      "platform operations",
      "impact evaluation",
      "capacity planning",
      "grant reporting"
    ]
  },
  {
    "id": "agents",
    "title": "Agentic Collaboration & Meta-Prompt Chains",
    "description": "Use AI as constrained collaborators that plan, retrieve, analyze, propose and verify through explicit tools.",
    "advanced": "Build agent workflows as auditable state machines with scoped tools, source context, budgets and human approval; never equate generated confidence with truth.",
    "tags": [
      "agents",
      "ai",
      "prompting"
    ],
    "useCases": [
      "feature fusion",
      "project copilots",
      "research assistants",
      "workflow automation"
    ]
  },
  {
    "id": "systems",
    "title": "Systems Thinking, Harm Checks & Anti-Inversion",
    "description": "Expose second-order effects, missing stakeholders and failure modes before projects become actions.",
    "advanced": "Operationalize safeguards as structured review objects tied to decisions, not decorative disclaimers.",
    "tags": [
      "systems",
      "safety",
      "ethics"
    ],
    "useCases": [
      "high-impact projects",
      "public systems",
      "AI-assisted planning",
      "governance"
    ]
  },
  {
    "id": "learning",
    "title": "Embedded Learning & Mentorship",
    "description": "Blend real project work with just-in-time learning and mentorship.",
    "advanced": "Make competencies evidence-linked and portable; reward teaching and verified application rather than time spent on content.",
    "tags": [
      "learning",
      "mentorship",
      "gamification"
    ],
    "useCases": [
      "education",
      "workforce development",
      "volunteer communities",
      "professional learning"
    ]
  },
  {
    "id": "discovery",
    "title": "Discovery, Recommendations & Project Graph Navigation",
    "description": "Help people discover useful work, knowledge and collaborators without an engagement-maximizing feed.",
    "advanced": "Use explicit relevance factors and explanations; preserve user controls over recommendation inputs and avoid hidden ranking of people.",
    "tags": [
      "discovery",
      "recommendations",
      "graph"
    ],
    "useCases": [
      "collaboration networks",
      "research discovery",
      "volunteer platforms",
      "multi-domain suites"
    ]
  },
  {
    "id": "events",
    "title": "Universal Event & Schema Architecture",
    "description": "Represent meaningful changes in a common event language that can feed sync, audit, gamification, notifications and analytics.",
    "advanced": "Use stable event names, versioned payload schemas, idempotent identifiers and clear source attribution.",
    "tags": [
      "events",
      "architecture",
      "data"
    ],
    "useCases": [
      "event-driven systems",
      "analytics",
      "audit",
      "workflow engines"
    ]
  },
  {
    "id": "backend",
    "title": "Online Backend & Edge Architecture",
    "description": "Add durable online services while retaining local-first behavior and offline fallback.",
    "advanced": "Keep backend responsibilities narrow: identity, authoritative state, shared persistence, search, scheduled jobs and protected integrations.",
    "tags": [
      "backend",
      "cloud",
      "online"
    ],
    "useCases": [
      "online multiplayer",
      "institutional deployments",
      "public platforms",
      "large datasets"
    ]
  },
  {
    "id": "frontier",
    "title": "Frontier Production Hardening",
    "description": "Advanced patterns for large rooms, cryptographic trust, supply-chain integrity, fault injection and next-generation browser compute.",
    "advanced": "Treat frontier capabilities as opt-in adapters behind stable interfaces. Verify standards/browser maturity, threat model the new trust boundary and ship a lower-complexity fallback before enabling them in public infrastructure.",
    "tags": [
      "frontier",
      "production",
      "security",
      "scale"
    ],
    "useCases": [
      "large public multiplayer",
      "institutional infrastructure",
      "high-assurance deployments",
      "advanced AI/media"
    ]
  }
];
export const SYNERGIES = [
  [
    "CRDTs",
    "WebRTC DataChannels",
    "Offline mutation queue",
    "High-value local-first collaborative state"
  ],
  [
    "WebLLM",
    "Local RAG",
    "AI tool calling",
    "Private context-aware copilots"
  ],
  [
    "Universal event envelope",
    "Contribution ledger",
    "Quest engine",
    "Verified gamification driven by real work"
  ],
  [
    "Knowledge graph",
    "Claim-evidence linking",
    "Hybrid retrieval",
    "Evidence-aware cross-domain discovery"
  ],
  [
    "Transport abstraction",
    "WebRTC DataChannels",
    "WebSockets",
    "Resilient multiplayer networking"
  ],
  [
    "Passkeys/WebAuthn",
    "Object-level ACLs",
    "Capability-based permissions",
    "Strong identity with least privilege"
  ],
  [
    "Module registry",
    "Capability registry",
    "Feature flags",
    "Expandable suites with safe progressive rollout"
  ],
  [
    "OPFS",
    "SQLite/WASM",
    "Web Workers",
    "High-performance local data workbench"
  ],
  [
    "Stateful room objects",
    "Authoritative room state",
    "Late-join snapshots",
    "Durable collaborative rooms"
  ],
  [
    "Skills graph",
    "Expertise-gap detection",
    "Project-to-skill matching",
    "Cross-disciplinary team formation"
  ],
  [
    "Scenario rooms",
    "Monte Carlo simulation",
    "Collaborative notebook",
    "Multiplayer planning and training labs"
  ],
  [
    "Stakeholder map",
    "Consequence mapper",
    "Pre-mortem",
    "Structured harm and failure-mode review"
  ],
  [
    "Signed manifests",
    "Hash verification",
    "Data lineage graph",
    "Portable integrity and provenance"
  ],
  [
    "Federated instances",
    "Selective federation",
    "JSON-LD",
    "Interoperable community-owned deployments"
  ],
  [
    "Live regions",
    "Adaptive explanations",
    "Guided/expert modes",
    "Accessible progressive complexity"
  ]
];
export const ARCHETYPES = [
  {
    "id": "commons",
    "name": "Knowledge Commons",
    "tags": [
      "knowledge",
      "search",
      "evidence",
      "interop",
      "federation",
      "ai"
    ]
  },
  {
    "id": "lab",
    "name": "Multiplayer Lab",
    "tags": [
      "multiplayer",
      "simulation",
      "science",
      "realtime",
      "agents"
    ]
  },
  {
    "id": "field",
    "name": "Field Operations",
    "tags": [
      "field",
      "offline",
      "maps",
      "device",
      "resilience"
    ]
  },
  {
    "id": "learning",
    "name": "Learning Realm",
    "tags": [
      "learning",
      "gamification",
      "accessibility",
      "collaboration",
      "ai"
    ]
  },
  {
    "id": "institution",
    "name": "Institutional Hub",
    "tags": [
      "governance",
      "workflow",
      "identity",
      "security",
      "audit",
      "backend"
    ]
  },
  {
    "id": "game",
    "name": "Cooperative Serious Game",
    "tags": [
      "gamification",
      "multiplayer",
      "simulation",
      "presence",
      "learning"
    ]
  },
  {
    "id": "federated",
    "name": "Federated Commons",
    "tags": [
      "federation",
      "decentralized",
      "interop",
      "security",
      "identity"
    ]
  },
  {
    "id": "agentic",
    "name": "Agentic Workbench",
    "tags": [
      "agents",
      "ai",
      "workflow",
      "evidence",
      "api"
    ]
  }
];
