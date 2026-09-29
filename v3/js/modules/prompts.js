export const CHAIN_STAGES=[
  {id:'intent',title:'Mission & participant framing',simple:'Clarify who the system serves, the real-world objective and what success means.',instruction:'Restate the mission, participant groups, measurable outcomes, non-goals and critical constraints. Distinguish facts, assumptions, hypotheses and simulated outcomes.'},
  {id:'discovery',title:'Project-intent & capability discovery',simple:'Translate project language into a coherent feature stack before architecture hardens.',instruction:'Use the Foundry Intelligence profile, project keywords and selected capabilities to identify direct needs, complementary features, missing safeguards, redundant mechanisms and deployment conflicts. Explain additions/removals and preserve a minimal coherent core before optional enhancements.'},
  {id:'architecture',title:'Architecture & data model',simple:'Turn the idea into modules, objects, events, storage and interfaces.',instruction:'Design semantic modules, route registry, capability registry, domain objects, schemas, universal events, data ownership boundaries, APIs and lifecycle hooks. Favor replaceable adapters and explicit contracts.'},
  {id:'fusion',title:'Feature fusion',simple:'Make selected capabilities reinforce one another instead of existing as isolated checkboxes.',instruction:'Explain exactly how selected features interact, what state they share, what events connect them, which combinations create synergy, and which combinations introduce coupling or failure risk.'},
  {id:'multiplayer',title:'Realtime & multiplayer',simple:'Define rooms, presence, synchronization, authority and offline reconciliation.',instruction:'Specify WebRTC/Trystero, WebSocket or WebTransport roles; CRDT/event semantics; admission; presence; late-join snapshots; transport fallbacks; authoritative validation; moderation; reconnect; low-bandwidth behavior; and protocol/version negotiation.'},
  {id:'ai',title:'AI, agents & meta-prompts',simple:'Use AI through bounded tools, provenance and human approval.',instruction:'Define local WebLLM and optional remote AI tiers, RAG/context assembly, structured outputs, agent tools, budgets, AI provenance, human approval gates, prompt-injection boundaries and a staged planner→critic→integrator meta-prompt chain.'},
  {id:'evidence',title:'Evidence & provenance',simple:'Make claims, data transformations and AI outputs traceable.',instruction:'Add claim/evidence relationships, citation metadata, source freshness, data lineage, AI provenance, review states, hashes/signatures where useful, conflict handling and machine-readable exports.'},
  {id:'safety',title:'Security, privacy & anti-inversion',simple:'Threat-model abuse, preserve consent and keep high-impact actions reversible where possible.',instruction:'Apply least privilege, CSP/Trusted Types where deployable, validation, rate limiting, content moderation, privacy minimization, opt-out paths, pre-mortem, stakeholder-gap analysis, reversibility checks and explicit handling of unintended second-order effects.'},
  {id:'access',title:'Accessibility & progressive complexity',simple:'Make beginner and expert modes equally functional.',instruction:'Target WCAG 2.2 AA, keyboard/screen-reader operation, reduced motion, high contrast, accessible realtime announcements, alternative representations, simplified/advanced/expert explanations and internationalization/RTL support.'},
  {id:'implementation',title:'Implementation plan',simple:'Convert architecture into buildable files and staged milestones.',instruction:'Provide a file tree, module boundaries, dependency choices, schemas, initialization order, graceful fallback ladder, deployment instructions, no-build/static-host options where practical, and production backend options where necessary.'},
  {id:'verification',title:'Verification & operations',simple:'Define how the system proves it works and remains maintainable.',instruction:'Include unit/integration/E2E tests, offline and convergence tests, capability self-tests, accessibility checks, observability without surveillance, cost monitoring, release checksums, migrations, rollback, recovery mode and known limitations.'},
];


export function buildConcisePrompt({selectedFeatures=[],customNames=[],synergies=[],completeSynergies=false,maxChars=0}={}){
  const names=[];
  const seen=new Set();
  const add=name=>{const clean=String(name||'').replace(/[\r\n,]+/g,' ').replace(/\s+/g,' ').trim();if(!clean)return;const key=clean.toLocaleLowerCase();if(!seen.has(key)){seen.add(key);names.push(clean)}};
  selectedFeatures.forEach(f=>add(f?.name));
  if(completeSynergies){
    const selectedNames=new Set(names);
    for(const synergy of synergies){
      const members=synergy.slice(0,3).filter(Boolean);
      if(members.filter(name=>selectedNames.has(name)).length>=2){
        members.forEach(name=>{add(name);selectedNames.add(name)});
      }
    }
  }
  customNames.forEach(add);
  const budget=Math.max(0,Number(maxChars)||0);
  if(!budget)return names.join(', ');
  const out=[];let used=0;
  for(const name of names){
    const extra=(out.length?2:0)+name.length;
    if(used+extra>budget)break;
    out.push(name);used+=extra;
  }
  return out.join(', ');
}

export function buildPrompt({selectedFeatures=[],projectName='Feature Fusion Project',goal='',audience='',deployment='',stageIds=CHAIN_STAGES.map(s=>s.id),discoveryProfile=''}){
  const byCategory=new Map();
  for(const f of selectedFeatures){if(!byCategory.has(f.categoryTitle))byCategory.set(f.categoryTitle,[]);byCategory.get(f.categoryTitle).push(f)}
  const featureText=[...byCategory.entries()].map(([cat,fs])=>`### ${cat}\n${fs.map(f=>`- **${f.name}** — ${f.summary} Example: ${f.example}`).join('\n')}`).join('\n\n');
  const stages=CHAIN_STAGES.filter(s=>stageIds.includes(s.id));
  return `# ${projectName} — Feature-Fusion Build Prompt\n\n## Mission\n${goal}\n\n## Participants\n${audience}\n\n## Deployment target\n${deployment}\n\n${discoveryProfile?`## Foundry Intelligence project profile\n${discoveryProfile}\n\n`:''}## Selected capabilities (${selectedFeatures.length})\n${featureText||'- No features selected yet. Propose a minimal coherent set and justify each addition.'}\n\n## Meta-prompt chain\nExecute the following stages in order. Carry forward verified constraints, but explicitly revise earlier assumptions when later stages expose a conflict. Do not silently drop selected capabilities; if one is unsuitable, explain why and propose a fallback.\n\n${stages.map((s,i)=>`### Stage ${i+1}: ${s.title}\n${s.instruction}\n\n**Stage output:** concrete decisions, unresolved questions, dependencies, risks and handoff context for the next stage.`).join('\n\n')}\n\n## Cross-cutting implementation contract\n- Build a coherent product, not a demo page containing disconnected widgets.\n- Core functionality must survive failure of optional AI, P2P, GPU, background or experimental browser APIs.\n- Feature-detect advanced APIs and expose capability/fallback state to users.\n- Prefer semantic HTML, modular vanilla JavaScript and standards-based browser APIs unless a library materially reduces risk.\n- Treat multiplayer data semantics separately from network transport.\n- Use local-first persistence where useful, with explicit cloud/federation boundaries for durable shared state.\n- Keep AI actions scoped, auditable and human-reviewable; distinguish AI-generated material from verified evidence.\n- Use open data formats, versioned schemas, portable export/import and migrations.\n- Avoid hidden telemetry and undisclosed network calls.\n- Never claim untested offline, security, accessibility or synchronization behavior.\n- Include tooltips and progressive explanations: one-minute summary → actionable steps → advanced concepts → implementation detail.\n\n## Required delivery\nReturn: (1) architecture overview, (2) interaction/data-flow diagram, (3) feature-fusion rationale, (4) file tree, (5) schemas/events, (6) implementation code or patches, (7) test plan and executed checks, (8) deployment instructions, (9) limitations/fallbacks, (10) Zero-Harm / Anti-Inversion review, (11) attribution/licensing notes.\n`;
}

export function stagePrompt(mode,base,instruction=''){
  const shared=`You are improving an implementation prompt for a serious collaborative web platform. Preserve user agency, provenance, accessibility, privacy and graceful fallbacks. Do not invent test results.\n\nSOURCE PROMPT:\n${base}\n\nADDITIONAL CONSTRAINT:\n${instruction}`;
  if(mode==='critic') return `${shared}\n\nAct as an architecture critic. Identify hidden coupling, missing failure modes, vague requirements, security/privacy gaps, browser compatibility risks, and anything that would cause an AI coding model to output a shallow prototype. Then produce a revised prompt.`;
  if(mode==='fusion') return `${shared}\n\nAct as a feature-fusion architect. Find combinations that should share events, schemas, state or UI; eliminate redundant mechanisms; explicitly define fallbacks; then produce a more coherent implementation prompt.`;
  if(mode==='redteam') return `${shared}\n\nRed-team the architecture for abuse, gamification manipulation, P2P failure, prompt injection, stale evidence, identity misuse, cost explosions and inaccessible realtime interaction. Produce concrete mitigations and a revised prompt.`;
  return shared;
}
