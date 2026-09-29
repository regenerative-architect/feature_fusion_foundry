const mpUniq=a=>[...new Set(a.filter(Boolean))];
const mpNorm=s=>String(s||'').toLowerCase();
const mpHas=(text,re)=>re.test(text);

const DEPENDENCY_RULES=[
  {when:/webllm|local ai|local inference/i,need:['WebGPU','Web Workers','Hardware-aware model selection','AI provenance'],why:'Local WebLLM needs GPU capability detection, isolation from the UI thread, model-fit checks and provenance.'},
  {when:/webrtc|trystero|peer[- ]?to[- ]?peer|multiplayer/i,need:['Transport abstraction','Late-join snapshots','Protocol/version negotiation','Presence service'],why:'Realtime transport alone does not provide durable synchronization, reconnect semantics or protocol compatibility.'},
  {when:/crdt|collaborative edit|concurrent edit/i,need:['Snapshot synchronization','Schema versioning','Conflict provenance'],why:'CRDT convergence still needs durable snapshots, schema evolution and inspectable conflict history.'},
  {when:/public|open community|anonymous/i,need:['Report/block/mute','Rate limiting','Rollback','Object-level ACLs'],why:'Public collaboration needs abuse controls, scoped writes and recovery.'},
  {when:/github pages|static host|static hosting/i,need:['Transport abstraction','Portable workspace bundles','Progressive enhancement'],why:'Static hosting cannot provide authoritative durable coordination by itself; client/P2P paths need explicit fallbacks.'},
  {when:/offline|intermittent|low[- ]?bandwidth/i,need:['Offline mutation queue','Freshness indicators','Incremental synchronization','Conflict-resolution UI'],why:'Offline work needs queued mutations, freshness state and explicit reconciliation.'},
  {when:/gamif|xp|quest|achievement|leaderboard/i,need:['Contribution ledger','Anti-Goodhart safeguards','Achievement provenance'],why:'Gamification should derive rewards from auditable work and resist metric gaming.'},
  {when:/evidence|citation|research|provenance/i,need:['Claim-evidence linking','Data lineage graph','Source freshness tracking'],why:'Evidence-heavy work benefits from explicit traceability and staleness handling.'},
  {when:/webgpu|shader|3d|particle|render/i,need:['Render-loop and frame-pacing architecture','Responsive visual quality ladder'],why:'GPU-heavy visuals need frame-budget and adaptive-quality controls.'},
  {when:/map|geospatial|geojson|location/i,need:['GeoJSON layers','Location privacy controls'],why:'Geospatial systems need interoperable geometry plus explicit location privacy.'},
  {when:/federat|multi-instance/i,need:['Schema registry','Signed server-to-server messages','Federation policy'],why:'Federation requires compatible schemas, origin verification and policy boundaries.'},
];

const RISK_RULES=[
  {re:/webllm|local ai|llm|agent/i,title:'AI availability and provenance',detail:'Keep deterministic/no-AI operation available; label AI-derived material; bound tool permissions and retrieved-content influence.'},
  {re:/webgpu|webllm|shader|3d/i,title:'GPU/device loss',detail:'Treat GPU device loss as recoverable infrastructure failure. Preserve state, recommend lower-resource paths, and never loop requestDevice retries after a fatal device-removal signature.'},
  {re:/webrtc|trystero|multiplayer|websocket|webtransport/i,title:'Realtime partition/reconnect',detail:'Define late-join snapshots, idempotent events, reconnect/backoff, authority boundaries and transport fallback.'},
  {re:/crdt|offline|sync/i,title:'Convergence versus semantic validity',detail:'CRDT convergence does not validate permissions or domain correctness; use explicit business rules and conflict provenance.'},
  {re:/public|open community|anonymous|chat/i,title:'Abuse and spam',detail:'Use scoped permissions, rate limits, report/block/mute, reversible history and moderator audit trails.'},
  {re:/gamif|xp|quest|leaderboard/i,title:'Metric gaming',detail:'Reward verified outcomes rather than clicks; use diminishing returns, provenance and anti-spam constraints.'},
  {re:/evidence|citation|research/i,title:'Stale or misapplied evidence',detail:'Track dates, applicability, limitations, transformation lineage and review state.'},
  {re:/map|geo|location/i,title:'Location sensitivity',detail:'Minimize precision, gate sharing by consent, and separate public location from private working coordinates.'},
  {re:/federat/i,title:'Federated trust boundary',detail:'Remote instances are not inherently trustworthy; sign exchanges, define allow/deny policy and preserve source-instance provenance.'},
  {re:/file|upload|import/i,title:'Untrusted content',detail:'Validate type/size/schema, sanitize rendered content, and keep imports transactional/reversible.'},
];

const MODE_TITLES={critic:'Architecture critic',fusion:'Feature fusion optimizer',redteam:'Risk / failure-mode review',three:'Architect → red-team → integrator'};

function mpSelectedContext(selectedFeatures){
  const names=selectedFeatures.map(f=>f.name);
  const text=selectedFeatures.map(f=>[f.name,f.summary,f.categoryTitle,...(f.tags||[])].join(' ')).join(' ');
  const byCat=new Map();
  for(const f of selectedFeatures){if(!byCat.has(f.categoryTitle))byCat.set(f.categoryTitle,[]);byCat.get(f.categoryTitle).push(f.name)}
  return {names,text,byCat};
}

function mpSynergyHits(selectedNames,synergies){
  const set=new Set(selectedNames);
  return (synergies||[]).map(s=>{
    const members=s.slice(0,3).filter(Boolean);const hit=members.filter(n=>set.has(n));const missing=members.filter(n=>!set.has(n));
    return {members,hit,missing,why:s[3]||'Curated feature-fusion pattern.'};
  }).filter(x=>x.hit.length>=2).sort((a,b)=>b.hit.length-a.hit.length).slice(0,12);
}

function mpDependencyGaps(baseText,selectedNames,features){
  const selected=new Set(selectedNames);const text=mpNorm(baseText+' '+selectedNames.join(' '));const out=[];
  for(const rule of DEPENDENCY_RULES){if(!rule.when.test(text))continue;const missing=rule.need.filter(n=>!selected.has(n)&&features.some(f=>f.name===n));if(missing.length)out.push({missing,why:rule.why})}
  return out;
}

function mpRisks(baseText,selectedText){
  const t=baseText+' '+selectedText;return RISK_RULES.filter(r=>r.re.test(t)).map(r=>({title:r.title,detail:r.detail}));
}

function mpStageLines(discovery){
  const plan=discovery?.plan||[];
  if(!plan.length)return ['1. Establish a minimal coherent core and explicit state ownership.','2. Integrate optional capabilities behind feature-detected adapters.','3. Add failure recovery, tests and deployment checks.'];
  return plan.map((s,i)=>`${i+1}. ${s.title}: ${s.goal} Features: ${(s.features||[]).map(f=>f.name).join(', ')}.`);
}

function mpCompactFeatureClusters(byCat){
  return [...byCat.entries()].slice(0,16).map(([cat,names])=>`- ${cat}: ${names.slice(0,14).join(', ')}${names.length>14?' …':''}`).join('\n')||'- No capabilities selected yet.';
}

function mpMakePromptPatch({mode,discovery,gaps,synergies,risks,instruction}){
  const rec=(discovery?.recommendations||[]).slice(0,14).map(r=>r.feature.name);
  return `## Deterministic planner directives\n- Execution mode: ${MODE_TITLES[mode]||mode}.\n- Primary intent: ${discovery?.primaryIntents?.map(x=>x.label).join(', ')||'not classified'}.\n- Preserve this core capability lane before optional expansion: ${rec.join(', ')||'derive from explicit project requirements'}.\n- Resolve dependency gaps before implementation: ${gaps.flatMap(g=>g.missing).join(', ')||'none detected'}.\n- Explicitly implement these feature synergies: ${synergies.map(s=>s.members.join(' + ')).join('; ')||'none detected from current selection'}.\n- Test these risk classes: ${risks.map(r=>r.title).join(', ')||'general failure, recovery and compatibility'}.\n- Do not require WebLLM or any remote model for the core workflow. AI may refine this plan only as an optional adapter.\n${instruction?`- Additional user constraint: ${instruction.replace(/\s+/g,' ').trim()}\n`:''}`;
}

export function runDeterministicMetaPlanner({mode='three',basePrompt='',instruction='',selectedFeatures=[],allFeatures=[],synergies=[],discovery=null}={}){
  const ctx=mpSelectedContext(selectedFeatures);const fullText=[basePrompt,instruction,ctx.text,discovery?.brief||''].join(' ');
  const syn=mpSynergyHits(ctx.names,synergies);const gaps=mpDependencyGaps(fullText,ctx.names,allFeatures);const riskList=mpRisks(fullText,ctx.text);
  const primary=discovery?.primaryIntents?.map(x=>x.label)||[];const secondary=discovery?.secondaryIntents?.map(x=>x.label)||[];
  const constraints=discovery?.constraints||[];const support=(discovery?.supporting||[]).slice(0,10).map(x=>x.feature?.name).filter(Boolean);
  const rec=(discovery?.recommendations||[]).slice(0,18);
  const lines=[];
  lines.push('DETERMINISTIC META-PLANNER');
  lines.push(`Mode: ${MODE_TITLES[mode]||mode}`);
  lines.push('Method: intent classification → capability-lane gating → catalog retrieval → dependency rules → synergy graph → risk rules → staged integration. No neural model required.');
  lines.push('');
  lines.push('1. PROJECT SIGNALS');
  lines.push(`Primary intent: ${primary.join(', ')||'not confidently classified'}`);
  if(secondary.length)lines.push(`Secondary intent: ${secondary.join(', ')}`);
  if(discovery?.keywords?.length)lines.push(`Keywords: ${discovery.keywords.slice(0,24).join(', ')}`);
  for(const c of constraints)lines.push(`Constraint: ${c}`);
  lines.push('');
  lines.push('2. CURRENT FEATURE CLUSTERS');
  lines.push(mpCompactFeatureClusters(ctx.byCat));
  lines.push('');
  lines.push('3. INTENT-MATCHED CAPABILITIES');
  if(rec.length)rec.forEach((r,i)=>lines.push(`${i+1}. ${r.feature.name} — fit ${r.fit??'?'}; ${(r.reasons||[]).slice(0,2).join(' / ')}`));else lines.push('- Run Foundry Intelligence or provide a richer project brief to populate intent-matched recommendations.');
  lines.push('');
  lines.push('4. DEPENDENCY / GAP CHECK');
  if(gaps.length)gaps.forEach(g=>lines.push(`- Add/verify ${g.missing.join(', ')}. ${g.why}`));else lines.push('- No deterministic dependency gaps detected from the current rule set.');
  lines.push('');
  lines.push('5. FEATURE-FUSION OPPORTUNITIES');
  if(syn.length)syn.forEach(s=>lines.push(`- ${s.members.join(' + ')} — ${s.why}${s.missing.length?` Missing: ${s.missing.join(', ')}.`:''}`));else lines.push('- No curated multi-feature synergy reached the two-member activation threshold.');
  lines.push('');
  if(mode==='critic'||mode==='three'){
    lines.push('6. ARCHITECTURE CRITIC');
    lines.push('- Separate durable domain state, ephemeral presence, derived/cache state and authoritative shared state.');
    lines.push('- Keep transport independent from synchronization semantics and business validation.');
    lines.push('- Every optional capability must declare initialization, cleanup, permission, failure and fallback behavior.');
    lines.push('- Avoid making AI, WebGPU, P2P, push/background APIs or a single third-party CDN a single point of failure.');
    lines.push('');
  }
  if(mode==='redteam'||mode==='three'){
    lines.push(mode==='three'?'7. RED-TEAM / FAILURE-MODE PASS':'6. RED-TEAM / FAILURE-MODE PASS');
    if(riskList.length)riskList.forEach(r=>lines.push(`- ${r.title}: ${r.detail}`));else lines.push('- Test malformed input, partial initialization, stale state, offline transitions, version skew and rollback.');
    lines.push('');
  }
  const stageNum=mode==='three'?8:7;
  lines.push(`${stageNum}. DETERMINISTIC IMPLEMENTATION ORDER`);
  mpStageLines(discovery).forEach(x=>lines.push(x));
  if(support.length)lines.push(`Supporting obligations (do not displace primary intent): ${support.join(', ')}.`);
  lines.push('');
  lines.push(`${stageNum+1}. REVISED META-PROMPT PATCH`);
  lines.push(mpMakePromptPatch({mode,discovery,gaps,synergies:syn,risks:riskList,instruction}));
  lines.push('');
  lines.push(`${stageNum+2}. REVISED SOURCE PROMPT`);
  lines.push(basePrompt.trim()||'[No source prompt supplied]');
  lines.push('');
  lines.push(mpMakePromptPatch({mode,discovery,gaps,synergies:syn,risks:riskList,instruction}));
  return {text:lines.join('\n'),gaps,synergies:syn,risks:riskList,patch:mpMakePromptPatch({mode,discovery,gaps,synergies:syn,risks:riskList,instruction})};
}
