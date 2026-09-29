# Four-Edge HUD + Comma-Only Prompt Minifier

## Purpose

Version 1.1 adds two reusable patterns for constrained AI workflows and dense collaboration interfaces.

### Comma-Only Prompt Minifier

The minifier converts the currently selected Feature Library records into a strict, reusable string:

`WebLLM, CRDTs, WebRTC DataChannels, Passkeys/WebAuthn`

The output has no headings, bullets, descriptions, newlines, URL indirection or hidden metadata. Optional custom feature names are sanitized, deduplicated and appended. A character budget adds only complete names that fit; it never cuts a feature name in half. Optional synergy completion inspects curated synergy triples and adds a missing third capability when two are selected.

Implementation entry point: `buildConcisePrompt()` in `js/modules/prompts.js`.

## Four-edge HUD architecture

All route/navigation surfaces are generated from the `ROUTES` registry in `js/app.js`. Each route declares an ID, label, icon, group, edge placements and related routes.

- **Top:** major workspace modes.
- **Left:** complete grouped module tree and persistent workspace controls.
- **Right:** context-sensitive related modules and route-specific actions.
- **Bottom:** workflow progression HUD plus selected-feature and connectivity state.

Changing a route updates every edge using the same `data-nav` state. On smaller displays, left and right edges become independent drawers; Escape dismisses them.

## Extending it

Add a route to the registry rather than hard-coding four menus. Choose `edges` based on whether the route belongs in the primary workflow, the complete tree, or both. Add related routes for the contextual right HUD. Route-specific command buttons remain declarative in `renderContextHud()`.

## Accessibility and fallback

The four menus use semantic navigation/aside regions and synchronized active states. Bottom navigation scrolls horizontally on small screens. Left/right drawers expose `aria-expanded` state and are dismissible with Escape. The content remains navigable through ordinary hash URLs if enhanced HUD behavior fails.
