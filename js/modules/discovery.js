/* Foundry Intelligence v2: deterministic project planner + explainable retrieval.
   It is deliberately model-free, offline-capable and file:// safe.

   Pipeline:
   1) classify dominant intent(s) from weighted phrase/signals;
   2) construct an allowed/adjacent capability lane for each dominant intent;
   3) retrieve lexically across the full catalog;
   4) apply category affinity + negative-relevance penalties;
   5) expand only synergies compatible with active lanes;
   6) keep generic safeguards in a separate supporting list;
   7) emit a deterministic staged implementation plan.

   This prevents generic cross-cutting features from crowding out the thing the user
   actually asked for (for example, advanced visual effects). */

const STOP=new Set('a an and are as at be by for from has have how i if in into is it its of on or our should that the their them they this to use using want we what when where which who with you your build create make add include project app platform system website users user lot lots advanced feature features implementation implementations'.split(' '));

const INTENTS=[
  {
    id:'visual',label:'Advanced visuals / motion / 3D',
    signals:[
      [/\bvisuals?\b|visual implementation|visual effect|visual fx|vfx/i,7],
      [/animation|animated|motion fx|motion design|transition|morph|parallax|cinematic/i,6],
      [/3d\b|webgl|webgpu|shader|wgsl|three\.js|threejs|babylon|render(?:ing)?\b/i,7],
      [/particle|starfield|galaxy|nebula|glow|bloom|volumetric|lighting|pbr|texture|camera/i,5],
      [/hud|glassmorph|spatial interface|immersive|scene graph|splash/i,4]
    ],
    terms:['visualization','animation','motion','rendering','shader','3d','webgl','webgpu','particles','scene','camera','effects','cinematic','responsive quality'],
    tags:['visualization','animation','motion','gpu','3d'],
    primaryCategories:['visualization','compute'],adjacentCategories:['performance','concurrency','ux','media'],
    features:['Web Animations API','CSS Scroll-Driven Animations','View Transitions','FLIP animation architecture','Spring and inertial motion engine','WebGL custom shader pipeline','WebGPU render pipeline','GPU particle fields','3D scene graph architecture','Camera rigs and orbital controls','Render-loop and frame-pacing architecture','Responsive visual quality ladder'],
    plan:[
      ['Rendering foundation',['3D scene graph architecture','WebGL custom shader pipeline','WebGPU render pipeline','Three.js rendering adapter','Babylon.js rendering adapter']],
      ['Motion & interaction',['Web Animations API','View Transitions','FLIP animation architecture','Spring and inertial motion engine','Pointer and gesture choreography','Camera rigs and orbital controls','Raycasting and scene hit-testing']],
      ['Cinematic effects',['Post-processing effect graph','Bloom and emissive glow','Procedural noise and materials','GPU particle fields','Procedural starfield and galaxy shaders','Shader distortion and liquid effects']],
      ['Performance & scaling',['Render-loop and frame-pacing architecture','Instanced rendering','Level-of-detail rendering','Frustum culling','Responsive visual quality ladder','Adaptive quality']]
    ]
  },
  {id:'multiplayer',label:'Realtime multiplayer',signals:[[/multiplayer|real[- ]?time|live collaborat|shared room/i,7],[/peer[- ]?to[- ]?peer|p2p|webrtc|websocket|webtransport|presence|room traffic/i,6],[/crdt|sync|late join|host migration/i,4]],terms:['multiplayer','realtime','webrtc','websocket','presence','room','transport','peer','sync','crdt'],tags:['multiplayer','realtime','network'],primaryCategories:['network','sync','authority','presence'],adjacentCategories:['moderation','identity','backend','performance'],features:['WebRTC DataChannels','WebSockets','Transport abstraction','Presence service','CRDTs','Late-join snapshots','Authoritative room state']},
  {id:'interdisciplinary',label:'Cross-domain collaboration',signals:[[/interdisciplin|multidisciplin|cross[- ]?domain|cross[- ]?disciplin/i,7],[/institution|government|university|school|business|famil|community|stakeholder|expert/i,3]],terms:['skills','expertise','organization','collaboration','roles','matching','knowledge','workflow'],tags:['collaboration','knowledge','workflow'],primaryCategories:['roles','matchmaking','projectgraph','knowledge'],adjacentCategories:['workflow','governance','presence','search'],features:['Skills graph','Project-to-skill matching','Expertise-gap detection','Knowledge graph','Shared-resource graph','Universal event envelope']},
  {id:'gamification',label:'Gamified progression',signals:[[/gamif|quest|\bxp\b|badge|achievement|skill tree|progression|collectible|level|streak/i,7],[/reward|leaderboard|cooperative game|serious game/i,4]],terms:['quest','skill','achievement','xp','progression','team','reward','gamification'],tags:['gamification','learning'],primaryCategories:['game'],adjacentCategories:['learning','roles','analytics','presence'],features:['Quest engine','Skill trees','Team XP','Achievement provenance','Anti-exploitation scoring']},
  {id:'ai',label:'AI / agent assistance',signals:[[/\bai\b|llm|webllm|agent|rag\b|inference|copilot/i,7],[/prompt|semantic search|vector search|embedding|rerank/i,4]],terms:['ai','webllm','rag','agent','prompt','semantic','vector','tool'],tags:['ai','webllm','rag'],primaryCategories:['ai','agents'],adjacentCategories:['search','compute','workflow','api'],features:['WebLLM','Local RAG','AI tool calling','AI provenance','Hardware-aware model selection','Model capability registry']},
  {id:'offline',label:'Offline / low-connectivity resilience',signals:[[/offline|low[- ]?bandwidth|intermittent|disconnected|store[- ]?and[- ]?forward/i,7],[/field|remote area|resilien/i,3]],terms:['offline','resilience','queue','sync','local','cache','pwa','service worker','fallback'],tags:['offline','resilience'],primaryCategories:['storage','resilience','sync','pwa'],adjacentCategories:['performance','files','concurrency'],features:['PWA','Service Worker','Offline mutation queue','IndexedDB','OPFS','Progressive enhancement','Capability fallback ladder']},
  {id:'evidence',label:'Evidence & provenance',signals:[[/evidence|citation|source|provenance|verification|claim|integrity|lineage/i,6],[/research|scientific|dataset/i,3]],terms:['evidence','provenance','citation','claim','source','data','integrity','lineage','review'],tags:['evidence','provenance','data'],primaryCategories:['evidence'],adjacentCategories:['search','knowledge','testing','interop'],features:['Claim-evidence linking','Evidence quality fields','Data lineage graph','Content-addressed storage']},
  {id:'governance',label:'Governance & deliberation',signals:[[/governance|proposal|decision|vote|consensus|deliberat|quorum/i,7],[/approval|policy|stakeholder/i,3]],terms:['governance','decision','proposal','approval','audit','workflow','stakeholder'],tags:['governance','workflow'],primaryCategories:['governance'],adjacentCategories:['workflow','systems','evidence','identity'],features:['Versioned proposals','Human approval gates','Review workflow','Audit trail','Blocking/dependency detection']},
  {id:'privacy',label:'Privacy / sensitive data',signals:[[/privacy|private|sensitive|confidential|sovereign|personal data|\bpii\b|health data/i,7],[/local[- ]?only|encryption|redact|retention/i,4]],terms:['privacy','consent','local','encryption','redaction','permission','retention'],tags:['privacy','security'],primaryCategories:['privacy','security'],adjacentCategories:['identity','storage'],features:['Local-only mode','PII detection before export','Sensitive-state expiration','Capability-based permissions','Signed exports']},
  {id:'accessibility',label:'Accessibility & inclusive UX',signals:[[/accessib|wcag|screen reader|reduced motion|high contrast/i,8],[/keyboard|caption|transcript|inclusive ux/i,4]],terms:['accessibility','screen-reader','keyboard','motion','contrast','caption','semantic'],tags:['accessibility'],primaryCategories:['accessibility'],adjacentCategories:['ux','i18n','testing'],features:['Reduced motion','High contrast','Screen-reader presence announcements','Accessibility tests','Semantic landmark architecture']},
  {id:'geospatial',label:'Maps / geospatial',signals:[[/\bmap(?:s|ping)?\b|\bgis\b|geospatial|geojson|coordinates|spatial/i,7],[/location|watershed|route|regional/i,3]],terms:['geojson','map','spatial','location','geospatial','routing'],tags:['maps','geospatial'],primaryCategories:['geospatial'],adjacentCategories:['visualization','compute','performance','files'],features:['GeoJSON layers','Offline map packs','Geolocation','GeoJSON/GPX/KML interchange']},
  {id:'simulation',label:'Simulation & scenario analysis',signals:[[/simulation|digital twin|monte carlo|what[- ]?if|sensitivity/i,7],[/scenario|forecast|modeling/i,4]],terms:['simulation','scenario','monte','carlo','sensitivity','forecast','model'],tags:['simulation','analysis'],primaryCategories:['lab','decision'],adjacentCategories:['compute','visualization','analytics'],features:['Monte Carlo simulation','Scenario comparison','Sensitivity analysis']},
  {id:'learning',label:'Learning / mentorship',signals:[[/education|learning|teacher|student|curriculum|lesson|competenc/i,6],[/mentor|training|primer/i,4]],terms:['learning','mentor','competency','skill','education','primer'],tags:['learning'],primaryCategories:['learning'],adjacentCategories:['game','roles','knowledge'],features:['Just-in-time primers','Competency pathways','Mentor matching','Skill trees']},
  {id:'workflow',label:'Workflow automation',signals:[[/workflow|automation|pipeline|trigger|condition|action/i,7],[/task|project management|approval/i,3]],terms:['workflow','task','automation','approval','event','state','dag'],tags:['workflow'],primaryCategories:['workflow','events'],adjacentCategories:['projectgraph','api','backend'],features:['Workflow templates','DAG workflow engine','Finite-state workflows','Human approval gates']},
  {id:'federation',label:'Federation / decentralization',signals:[[/federat|decentraliz|independent instance|activitypub|matrix/i,7],[/distributed node|instance[- ]?to[- ]?instance/i,5]],terms:['federated','distributed','instance','signed','replication','identity'],tags:['federation','distributed'],primaryCategories:['federation','decentralized'],adjacentCategories:['interop','identity','backend'],features:['Federated instances','Federated search','Federated project sharing','Selective federation','Federated identity']},
  {id:'scale',label:'Scale / large rooms',signals:[[/thousand|million|large room|many users|high concurrency|massive/i,7],[/scale|global network/i,3]],terms:['scale','room','rate','queue','server','observability','cost'],tags:['performance','realtime'],primaryCategories:['performance','backend','authority'],adjacentCategories:['observability','analytics','network'],features:['Authoritative multiplayer server','Rate limiting','OpenTelemetry server tracing','Cost monitoring']},
  {id:'mobile',label:'Mobile / constrained hardware',signals:[[/mobile|phone|android|ios|tablet/i,6],[/low[- ]?power|modest device|battery/i,5]],terms:['mobile','low-resource','performance','adaptive','battery','fallback'],tags:['performance','resilience'],primaryCategories:['performance','resilience','ux'],adjacentCategories:['compute','visualization'],features:['Hardware-aware model selection','Adaptive quality','Reduced motion','Capability fallback ladder']},
  {id:'static',label:'Static-host compatibility',signals:[[/github pages|static host|static site|pages only|no backend/i,8],[/serverless frontend/i,4]],terms:['static','p2p','local','portable','fallback','edge'],tags:['browser','offline'],primaryCategories:['pwa','files','decentralized'],adjacentCategories:['network','storage','resilience'],features:['PWA','Trystero peer discovery','WebRTC DataChannels','Portable workspace bundles','Progressive enhancement']}
];

const SUPPORT_BASE={
  online:['Input/schema validation','Content Security Policy','Rate limiting','Audit log'],
  public:['Report/block/mute','Content review queue','Object-level ACLs'],
  ai:['AI provenance','Human approval gates','Prompt injection isolation'],
  visual:['Reduced motion','Accessible data alternatives'],
  general:['Progressive enhancement']
};

const FOCUS_IDS=['auto',...INTENTS.map(i=>i.id)];
const INTENT_BY_ID=new Map(INTENTS.map(i=>[i.id,i]));

function norm(s=''){return String(s).toLowerCase().normalize('NFKD').replace(/[’']/g,'').replace(/[^a-z0-9.+#/-]+/g,' ').replace(/\s+/g,' ').trim()}
function tokens(s=''){return norm(s).split(' ').map(t=>t.replace(/^[-/]+|[-/]+$/g,'')).filter(t=>t.length>1&&!STOP.has(t))}
function uniq(a){return [...new Set(a)]}
function featureText(f){return [f.name,f.name,f.name,f.categoryTitle,...(f.tags||[]),...(f.tags||[]),f.summary,f.example,...(f.useCases||[]),f.advanced||'',f.implementation||'',f.fusion||''].join(' ')}
function scoreIntent(raw,intent){let score=0,hits=[];for(const [rx,w] of intent.signals||[]){if(rx.test(raw)){score+=w;hits.push(rx.source)}}return {intent,score,hits}}
function directMention(raw,f){const n=norm(f.name);if(n.length<3)return false;return norm(raw).includes(n)}

let INDEX_CACHE=null;
function buildIndex(features){
  if(INDEX_CACHE?.features===features)return INDEX_CACHE;
  const docs=features.map(f=>{const ts=tokens(featureText(f));const tf=new Map();for(const t of ts)tf.set(t,(tf.get(t)||0)+1);return {f,tf,len:ts.length,norm:norm(featureText(f))}});
  const df=new Map();for(const d of docs)for(const t of d.tf.keys())df.set(t,(df.get(t)||0)+1);
  INDEX_CACHE={features,docs,df,avg:docs.reduce((s,d)=>s+d.len,0)/Math.max(1,docs.length)};return INDEX_CACHE;
}

function findFeature(features,name){const n=norm(name);return features.find(f=>norm(f.name)===n)||features.find(f=>norm(f.name).includes(n)||n.includes(norm(f.name)))}
function activeCategorySets(primary,secondary,strategy){
  const p=new Set(),a=new Set();
  for(const x of primary){for(const c of x.primaryCategories||[])p.add(c);for(const c of x.adjacentCategories||[])a.add(c)}
  for(const x of secondary){for(const c of x.primaryCategories||[])a.add(c)}
  if(strategy==='exploratory')for(const x of secondary)for(const c of x.adjacentCategories||[])a.add(c);
  return {primary:p,adjacent:a};
}
function classify(raw,focus='auto'){
  const scored=INTENTS.map(i=>scoreIntent(raw,i)).filter(x=>x.score>0).sort((a,b)=>b.score-a.score);
  if(focus&&focus!=='auto'&&INTENT_BY_ID.has(focus)){
    const forced=INTENT_BY_ID.get(focus);const rest=scored.filter(x=>x.intent.id!==focus);
    return {primary:[forced],secondary:rest.slice(0,3).map(x=>x.intent),scores:[{intent:forced,score:99,hits:['manual focus']},...rest]};
  }
  if(!scored.length)return {primary:[],secondary:[],scores:[]};
  const top=scored[0].score;
  const primary=scored.filter((x,i)=>i<3&&x.score>=Math.max(5,top*.62)).map(x=>x.intent);
  const primaryIds=new Set(primary.map(x=>x.id));
  const secondary=scored.filter(x=>!primaryIds.has(x.intent.id)&&x.score>=3).slice(0,4).map(x=>x.intent);
  return {primary,secondary,scores:scored};
}

function makePlan({primary,recommendations,supporting,features}){
  const recIds=new Set(recommendations.map(r=>r.feature.id));
  const steps=[];
  for(const intent of primary){
    if(intent.plan){
      for(const [title,names] of intent.plan){
        const fs=names.map(n=>findFeature(features,n)).filter(Boolean).filter(f=>recIds.has(f.id));
        if(fs.length)steps.push({title,goal:`${intent.label}: ${title.toLowerCase()}`,features:fs.slice(0,8)});
      }
    }else{
      const cats=new Set(intent.primaryCategories||[]);const fs=recommendations.filter(r=>cats.has(r.feature.category)).slice(0,8).map(r=>r.feature);
      if(fs.length)steps.push({title:intent.label,goal:`Implement the primary ${intent.label.toLowerCase()} capability lane first.`,features:fs});
    }
  }
  if(!steps.length&&recommendations.length)steps.push({title:'Primary capability layer',goal:'Implement the highest-relevance capabilities before optional expansion.',features:recommendations.slice(0,8).map(r=>r.feature)});
  const used=new Set(steps.flatMap(s=>s.features.map(f=>f.id)));
  const integration=recommendations.filter(r=>!used.has(r.feature.id)).slice(0,8).map(r=>r.feature);
  if(integration.length)steps.push({title:'Integration & refinement',goal:'Connect compatible secondary capabilities after the primary experience works.',features:integration});
  if(supporting.length)steps.push({title:'Supporting obligations',goal:'Apply these as supporting constraints without allowing them to displace the requested feature set.',features:supporting.slice(0,8).map(x=>x.feature),supporting:true});
  return steps;
}

export function discoveryFocusOptions(){return FOCUS_IDS.map(id=>({id,label:id==='auto'?'Auto-detect primary intent':INTENT_BY_ID.get(id)?.label||id}))}

export function analyzeProject({brief='',features=[],synergies=[],limit=28,includeSafeguards=true,expandSynergies=true,focus='auto',strategy='precise'}={}){
  const raw=String(brief||'').trim();
  if(!raw)return {brief:'',intents:[],primaryIntents:[],secondaryIntents:[],recommendations:[],supporting:[],core:[],expanded:[],keywords:[],constraints:[],coverage:[],plan:[],diagnostics:{strategy,focus,suppressed:0}};
  strategy=['precise','balanced','exploratory'].includes(strategy)?strategy:'precise';
  const cls=classify(raw,focus),primary=cls.primary,secondary=cls.secondary;
  const lanes=activeCategorySets(primary,secondary,strategy);
  const index=buildIndex(features),N=features.length,baseTokens=tokens(raw);
  const expandedTerms=[];for(const i of [...primary,...secondary])expandedTerms.push(...(i.terms||[]),...(i.tags||[]));
  const qWeight=new Map();for(const t of baseTokens)qWeight.set(t,(qWeight.get(t)||0)+2.8);for(const t of expandedTerms)qWeight.set(t,(qWeight.get(t)||0)+(strategy==='exploratory'?1.0:.65));
  const scores=new Map(),reasons=new Map(),lexical=new Map();
  const add=(id,pts,why)=>{scores.set(id,(scores.get(id)||0)+pts);if(why){if(!reasons.has(id))reasons.set(id,[]);reasons.get(id).push(why)}};
  for(const d of index.docs){
    let score=0;const hits=[];
    for(const [t,qw] of qWeight){const tf=d.tf.get(t)||0;if(!tf)continue;const df=index.df.get(t)||1;const idf=Math.log(1+(N-df+.5)/(df+.5));const k1=1.35,b=.72;const bm=idf*((tf*(k1+1))/(tf+k1*(1-b+b*d.len/index.avg)));score+=bm*qw;if(idf>1.0)hits.push(t)}
    const qn=norm(raw);if(qn.length>2&&d.norm.includes(qn))score+=10;
    const nameNorm=norm(d.f.name);for(const t of baseTokens){if(nameNorm.includes(t))score+=4.2;if((d.f.tags||[]).some(x=>norm(x)===t))score+=2.5}
    if(directMention(raw,d.f))score+=18;
    lexical.set(d.f.id,score);
    if(score>0)add(d.f.id,score,hits.length?`direct keyword fit: ${uniq(hits).slice(0,6).join(', ')}`:'catalog text fit');
  }
  // Deterministic intent lane boosts.
  for(const intent of primary){
    for(const name of intent.features||[]){const f=findFeature(features,name);if(f)add(f.id,15,`primary intent: ${intent.label}`)}
    for(const f of features){if((intent.primaryCategories||[]).includes(f.category))add(f.id,7.5,`primary capability lane: ${intent.label}`);else if((intent.adjacentCategories||[]).includes(f.category))add(f.id,2.5,`adjacent capability lane: ${intent.label}`);const overlap=(f.tags||[]).filter(t=>(intent.tags||[]).includes(t)).length;if(overlap)add(f.id,2.2*overlap,`supports ${intent.label}`)}
  }
  for(const intent of secondary){
    for(const name of intent.features||[]){const f=findFeature(features,name);if(f)add(f.id,5.5,`secondary intent: ${intent.label}`)}
    for(const f of features){if((intent.primaryCategories||[]).includes(f.category))add(f.id,2.2,`secondary lane: ${intent.label}`)}
  }
  // Penalize unrelated categories when a dominant intent is clear. Direct user mentions remain exempt.
  const maxIntent=cls.scores[0]?.score||0;const narrow=primary.length>0&&maxIntent>=6;
  if(narrow&&strategy!=='exploratory'){
    for(const f of features){
      if(!scores.has(f.id)||directMention(raw,f))continue;
      if(lanes.primary.has(f.category))continue;
      if(lanes.adjacent.has(f.category)){scores.set(f.id,scores.get(f.id)*(strategy==='precise'?.78:.9));continue}
      const lx=lexical.get(f.id)||0;
      const multiplier=strategy==='precise'?(lx>8?.5:.16):(lx>8?.72:.36);
      scores.set(f.id,scores.get(f.id)*multiplier);
      if(multiplier<.5){if(!reasons.has(f.id))reasons.set(f.id,[]);reasons.get(f.id).push('down-ranked: outside dominant capability lane')}
    }
  }
  // Curated synergy expansion is lane-aware; popularity cannot drag unrelated domains into core results.
  if(expandSynergies){
    const seeds=[...scores.entries()].sort((a,b)=>b[1]-a[1]).slice(0,30).map(([id])=>features.find(f=>f.id===id)).filter(Boolean);
    const seedNames=new Set(seeds.map(f=>f.name));
    for(const s of synergies){
      const members=s.slice(0,3).filter(Boolean),hit=members.filter(n=>seedNames.has(n)).length;if(!hit)continue;
      for(const n of members){
        const f=findFeature(features,n);if(!f||seedNames.has(n))continue;
        const compatible=!narrow||lanes.primary.has(f.category)||lanes.adjacent.has(f.category)||(lexical.get(f.id)||0)>7;
        if(compatible)add(f.id,hit>=2?5.2:1.7,`compatible synergy: ${s[3]||members.join(' + ')}`);
      }
    }
  }
  // Safeguards are a separate list; they do not steal primary recommendation slots unless explicitly requested.
  const supportNames=new Set(SUPPORT_BASE.general);
  const online=/online|multiplayer|public|shared|community|institution|internet|realtime/i.test(raw),pub=/public|global|open community|anonymous|internet[- ]?facing/i.test(raw),ai=/\bai\b|llm|agent|rag|model|prompt/i.test(raw),visual=primary.some(i=>i.id==='visual');
  if(includeSafeguards){if(online)SUPPORT_BASE.online.forEach(x=>supportNames.add(x));if(pub)SUPPORT_BASE.public.forEach(x=>supportNames.add(x));if(ai)SUPPORT_BASE.ai.forEach(x=>supportNames.add(x));if(visual)SUPPORT_BASE.visual.forEach(x=>supportNames.add(x))}
  const explicitIntentIds=new Set([...primary,...secondary].map(i=>i.id));
  const supporting=[...supportNames].map(name=>findFeature(features,name)).filter(Boolean).filter(f=>!directMention(raw,f)&&!(explicitIntentIds.has('accessibility')&&f.category==='accessibility')).map(feature=>({feature,reasons:['supporting constraint; kept outside primary ranking']}));

  let ranked=[...scores.entries()].map(([id,score])=>({feature:features.find(x=>x.id===id),score,reasons:uniq(reasons.get(id)||[]),lexical:lexical.get(id)||0})).filter(x=>x.feature&&x.score>0).sort((a,b)=>b.score-a.score);
  const rawMax=ranked[0]?.score||1;
  // Hard relevance floor in precise mode; allowed lanes get more room than unrelated categories.
  const before=ranked.length;
  if(strategy==='precise'&&narrow)ranked=ranked.filter(r=>lanes.primary.has(r.feature.category)||lanes.adjacent.has(r.feature.category)||directMention(raw,r.feature)||r.lexical>=rawMax*.22||r.score>=rawMax*.32);
  else if(strategy==='balanced'&&narrow)ranked=ranked.filter(r=>lanes.primary.has(r.feature.category)||lanes.adjacent.has(r.feature.category)||r.score>=rawMax*.18);
  const suppressed=before-ranked.length;
  // Diversity only within relevant lanes; no forced category diversity.
  const max=ranked[0]?.score||1,pool=[...ranked],out=[],categoryCounts=new Map();
  while(pool.length&&out.length<Math.max(6,limit)){
    let bestI=0,best=-Infinity;
    for(let i=0;i<pool.length;i++){const r=pool[i],seen=categoryCounts.get(r.feature.category)||0;const penalty=seen*max*(strategy==='exploratory'?.045:.025);const laneBonus=lanes.primary.has(r.feature.category)?max*.055:lanes.adjacent.has(r.feature.category)?max*.015:0;const adjusted=r.score-penalty+laneBonus;if(adjusted>best){best=adjusted;bestI=i}}
    const [pick]=pool.splice(bestI,1);out.push(pick);categoryCounts.set(pick.feature.category,(categoryCounts.get(pick.feature.category)||0)+1);
  }
  out.forEach((r,i)=>{r.fit=Math.max(1,Math.min(100,Math.round(100*(r.score/max))));r.tier=i<Math.min(10,Math.ceil(limit*.36))?'core':i<limit?'recommended':'adjacent'});
  const recommendations=out,core=recommendations.filter(r=>r.tier==='core').map(r=>r.feature),coverage=[...new Set(recommendations.map(r=>r.feature.categoryTitle))];
  const constraints=[];
  if(/github pages|static host|no backend/i.test(raw))constraints.push('Static hosting detected: keep core flows client-side/P2P and treat durable shared authority as an optional service.');
  if(pub)constraints.push('Public-facing use detected: moderation, rate limits, rollback and scoped permissions remain supporting requirements, but they will not displace the requested capability lane.');
  if(/offline|low[- ]?bandwidth|intermittent|field/i.test(raw))constraints.push('Connectivity constraints detected: prioritize local-first state, resumable transfer, low-bandwidth modes and explicit freshness.');
  if(/child|children|youth|minor|student/i.test(raw))constraints.push('Youth/learner context detected: minimize data collection and avoid manipulative engagement mechanics.');
  if(visual)constraints.push('Visual-intensive request detected: prioritize rendering, motion, effects and frame-budget features; accessibility/performance fallbacks are tracked separately as supporting constraints.');
  const plan=makePlan({primary,recommendations,supporting,features});
  return {
    brief:raw,
    intents:[...primary,...secondary].map(x=>({id:x.id,label:x.label,role:primary.includes(x)?'primary':'secondary'})),
    primaryIntents:primary.map(x=>({id:x.id,label:x.label})),secondaryIntents:secondary.map(x=>({id:x.id,label:x.label})),
    recommendations,supporting,core,expanded:recommendations.map(r=>r.feature),keywords:uniq(baseTokens).slice(0,28),constraints,coverage,plan,
    diagnostics:{strategy,focus:focus||'auto',suppressed,primaryCategories:[...lanes.primary],adjacentCategories:[...lanes.adjacent],intentScores:cls.scores.slice(0,6).map(x=>({id:x.intent.id,label:x.intent.label,score:x.score}))}
  };
}

export function discoveryContextText(result){
  if(!result?.brief)return '';
  const top=result.recommendations?.slice(0,20)||[],support=result.supporting?.slice(0,8)||[];
  return [
    `Deterministic primary intent: ${result.primaryIntents?.map(x=>x.label).join(', ')||'general capability discovery'}.`,
    result.secondaryIntents?.length?`Secondary intent: ${result.secondaryIntents.map(x=>x.label).join(', ')}.`:'',
    `Detected keywords: ${result.keywords.join(', ')||'none'}.`,
    `Primary recommended feature set: ${top.map(x=>x.feature.name).join(', ')||'none'}.`,
    support.length?`Supporting constraints kept outside primary ranking: ${support.map(x=>x.feature.name).join(', ')}.`:'',
    result.constraints.length?`Detected constraints: ${result.constraints.join(' ')}`:'',
    `Planner method: weighted intent classification → capability-lane gating → lexical retrieval → negative relevance penalties → lane-aware synergy expansion → staged deterministic plan. Strategy: ${result.diagnostics?.strategy||'precise'}.`
  ].filter(Boolean).join('\n');
}
