# WebLLM diagnostics and deterministic meta-chain

## Why this exists

The Foundry no longer requires WebLLM to run its meta-prompt chain. Deterministic planning is the default path and works through catalog/rule logic: intent classification, capability-lane gating, dependency rules, curated synergy detection, failure-mode rules and staged implementation planning.

WebLLM remains an optional local neural-refinement layer.

## `Error: Undefined`

Earlier builds assumed thrown failures were normal JavaScript `Error` instances and displayed `error.message`. Worker/RPC libraries can reject with strings, structured objects, custom serialized errors or event-like objects whose `.message` is absent. v1.6 normalizes:

- `name`, `message`, `String(error)` and stack;
- nested `cause`, `reason` and `error` fields where exposed;
- enumerable/raw fields with bounded recursion;
- operation name and timestamp;
- model/runtime/mode and recent progress events.

The UI therefore reports a normalized code plus the raw diagnostic JSON instead of reducing an opaque object to `undefined`.

## Windows D3D12 device removal

The signature:

`DXGI_ERROR_DEVICE_REMOVED (0x887A0005)`

means the browser WebGPU implementation lost the underlying D3D12 device/queue. This is treated as a GPU-session fault, not an ordinary model-load failure. The app:

1. records and classifies the error;
2. marks the WebLLM GPU session faulted;
3. terminates/clears engine and worker references;
4. does **not** immediately try a second GPU device on the main thread;
5. blocks repeated model-load loops until the user explicitly resets the AI session;
6. keeps deterministic feature discovery/meta-planning operational.

If `requestDevice()` continues to return device removed/hung after a reset, fully restart the browser. Some GPU-process/device-removal failures are not recoverable by a page refresh alone.

## Compatibility runtime

The default remains WebLLM `0.2.85`. The UI also exposes exact WebLLM `0.2.82` as an **opt-in compatibility runtime**.

Why: open upstream issue `mlc-ai/web-llm#844` reports a shape-cache regression beginning in 0.2.83 on affected Windows hardware and documents `DXGI_ERROR_DEVICE_HUNG` followed by `DXGI_ERROR_DEVICE_REMOVED`; the issue identifies exact pin `0.2.82` as its workaround. The compatibility runtime has an older built-in model catalog, so it is not selected automatically.

References:
- https://github.com/mlc-ai/web-llm/issues/844
- https://github.com/mlc-ai/web-llm/releases
- https://developer.mozilla.org/en-US/docs/Web/API/GPUDevice/lost

## Diagnostic report contents

The downloadable JSON contains, where the browser exposes them:

- Foundry/WebLLM runtime and execution mode;
- loaded model and selected model record;
- normalized last error and recovery guidance;
- chronological WebLLM progress/errors/recovery events;
- secure-context/protocol/network state;
- user-agent, system-memory hint and logical CPU count;
- WebGPU availability;
- adapter vendor/device/description information;
- WebGPU features and important limits;
- optional explicit `requestDevice()` probe result;
- hardware-advisor profile.

Dedicated GPU VRAM is generally not exposed reliably to web pages, so user-supplied VRAM remains optional and is clearly labeled as such.

## Deterministic meta-chain modes

### Deterministic
No model or network call. Produces project signals, current feature clusters, intent-matched capabilities, dependency gaps, feature-fusion opportunities, critic/red-team passes as selected, implementation order and a revised prompt patch.

### Hybrid
Runs the complete deterministic planner first. If a WebLLM engine is loaded, it then sends a compact deterministic patch plus the source prompt for optional neural refinement. If no model is loaded, the deterministic result remains complete.

### WebLLM
Uses local WebLLM when available. If no model is loaded, the UI falls back to deterministic planning rather than failing the workflow.

## Recovery sequence

1. Stop generation.
2. Export/copy the diagnostic report.
3. Unload or Reset AI session.
4. If the error was device removed/hung, avoid rapid retry loops.
5. Try a smaller model and/or 1024–2048 context cap.
6. For the matching Windows regression signature, optionally try runtime 0.2.82.
7. If `requestDevice()` remains broken, fully restart the browser and consider updating GPU drivers/browser before further testing.

The deterministic planner is available throughout this process.
