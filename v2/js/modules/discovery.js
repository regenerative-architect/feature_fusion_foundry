/* Foundry Intelligence: local, explainable project-intent → feature discovery.
   This is deliberately model-free so it works offline/file:// and never implies
   that a remote OpenAI model is embedded. It combines weighted lexical retrieval,
   ontology expansion, intent rules, curated synergy propagation and architecture
   coverage balancing. */

const STOP=new Set('a an and are as at be by for from has have how i if in into is it its of on or our should that the their them they this to use using want we what when where which who with you your build create make add include project app platform system website users user'.split(' '));
const INTENTS=[
  {id:'multiplayer',label:'Realtime multiplayer',rx:/multiplayer|real[- ]?time|live collaborat|shared room|peer[- ]?to[- ]?peer|p2p|webrtc|websocket|presence|room traffic/i,terms:['multiplayer','realtime','webrtc','websocket','presence','room','transport','peer','sync','crdt'],tags:['multiplayer','realtime','network'],features:['WebRTC DataChannels','WebSockets','Transport abstraction','Presence service','CRDTs','Late-join snapshots','Authoritative room state']},
  {id:'interdisciplinary',label:'Cross-domain collaboration',rx:/interdisciplin|multidisciplin|cross[- ]?domain|cross[- ]?disciplin|institution|government|university|school|business|famil|community|stakeholder|expert/i,terms:['skills','expertise','organization','collaboration','roles','matching','knowledge','workflow'],tags:['collaboration','knowledge','workflow'],features:['Skills graph','Project-to-skill matching','Expertise-gap detection','Knowledge graph','Shared-resource graph','Universal event envelope']},
  {id:'gamification',label:'Gamified progression',rx:/gamif|quest|xp\b|badge|achievement|skill tree|progression|collectible|level|streak/i,terms:['quest','skill','achievement','xp','progression','team','reward','gamification'],tags:['gamification','learning'],features:['Quest engine','Skill trees','Team XP','Achievement provenance','Anti-exploitation scoring']},
  {id:'ai',label:'AI / agent assistance',rx:/\bai\b|llm|webllm|agent|rag\b|model|prompt|inference|copilot|semantic search/i,terms:['ai','webllm','rag','agent','prompt','semantic','vector','provenance','tool'],tags:['ai','webllm','rag'],features:['WebLLM','Local RAG','AI tool calling','AI provenance','Human approval gates','Hardware-aware model selection','Model capability registry']},
  {id:'offline',label:'Offline / low-connectivity resilience',rx:/offline|low[- ]?bandwidth|intermittent|field|remote area|disconnected|resilien|store[- ]?and[- ]?forward/i,terms:['offline','resilience','queue','sync','local','cache','pwa','service worker','fallback'],tags:['offline','resilience'],features:['PWA','Service Worker','Offline mutation queue','IndexedDB','OPFS','Progressive enhancement','Capability fallback ladder']},
  {id:'evidence',label:'Evidence & provenance',rx:/evidence|research|citation|source|provenance|verify|verification|scientific|dataset|claim|integrity/i,terms:['evidence','provenance','citation','claim','source','data','integrity','lineage','review'],tags:['evidence','provenance','data'],features:['Claim-evidence linking','Evidence quality fields','Data lineage graph','AI provenance','Content-addressed storage']},
  {id:'governance',label:'Governance & deliberation',rx:/governance|proposal|decision|vote|consensus|deliberat|approval|policy|quorum|stakeholder/i,terms:['governance','decision','proposal','approval','audit','workflow','stakeholder'],tags:['governance','workflow'],features:['Versioned proposals','Human approval gates','Review workflow','Audit trail','Blocking/dependency detection']},
  {id:'public',label:'Public-community hardening',rx:/public|open community|global|internet[- ]?facing|anonymous|social platform|large community/i,terms:['moderation','security','rate','identity','audit','report','privacy','abuse'],tags:['security','privacy'],features:['Report/block/mute','Rate limiting','Content review queue','Object-level ACLs','Content Security Policy','Trusted Types']},
  {id:'institutional',label:'Institutional deployment',rx:/institution|enterprise|organization|government|municipal|school district|university|corporat|ngo|agency/i,terms:['organization','identity','permissions','audit','sso','workflow','schema','api'],tags:['identity','governance','data'],features:['Passkeys/WebAuthn','RBAC','Object-level ACLs','Organization SSO','Audit trail','Schema registry','API schema documentation']},
  {id:'privacy',label:'Privacy / sensitive data',rx:/privacy|private|sensitive|confidential|sovereign|local[- ]?only|personal data|pii|health data/i,terms:['privacy','consent','local','encryption','redaction','permission','retention'],tags:['privacy','security'],features:['Local-only mode','PII detection before export','Sensitive-state expiration','Capability-based permissions','Signed exports']},
  {id:'accessibility',label:'Accessibility & inclusive UX',rx:/accessib|wcag|screen reader|reduced motion|high contrast|inclusive|keyboard|caption|transcript/i,terms:['accessibility','screen-reader','keyboard','motion','contrast','caption','semantic'],tags:['accessibility'],features:['Reduced motion','High contrast','Screen-reader presence announcements','Accessibility tests','Semantic landmark architecture']},
  {id:'geospatial',label:'Maps / geospatial',rx:/map|gis\b|geo\b|geospatial|location|watershed|route|regional|coordinates|spatial/i,terms:['geojson','map','spatial','location','geospatial','routing'],tags:['maps','geospatial'],features:['GeoJSON layers','Offline map packs','Geolocation','GeoJSON/GPX/KML interchange']},
  {id:'simulation',label:'Simulation & scenario analysis',rx:/simulation|scenario|monte carlo|digital twin|what[- ]?if|sensitivity|forecast|modeling/i,terms:['simulation','scenario','monte','carlo','sensitivity','forecast','model'],tags:['simulation','analysis'],features:['Monte Carlo simulation','Scenario comparison','Sensitivity analysis']},
  {id:'learning',label:'Learning / mentorship',rx:/education|learning|teacher|student|school|mentor|curriculum|lesson|training|competenc/i,terms:['learning','mentor','competency','skill','education','primer'],tags:['learning'],features:['Just-in-time primers','Competency pathways','Mentor matching','Skill trees']},
  {id:'workflow',label:'Workflow automation',rx:/workflow|automation|task|project management|approval|pipeline|trigger|condition|action/i,terms:['workflow','task','automation','approval','event','state','dag'],tags:['workflow'],features:['Workflow templates','DAG workflow engine','Finite-state workflows','Human approval gates']},
  {id:'federation',label:'Federation / decentralization',rx:/federat|decentraliz|distributed node|independent instance|instance[- ]?to[- ]?instance|activitypub|matrix/i,terms:['federated','distributed','instance','signed','replication','identity'],tags:['federation','distributed'],features:['Federated instances','Federated search','Federated project sharing','Selective federation','Federated identity']},
  {id:'static',label:'Static-host compatibility',rx:/github pages|static host|static site|pages only|no backend|serverless frontend/i,terms:['static','p2p','local','portable','fallback','edge'],tags:['browser','offline'],features:['PWA','Trystero peer discovery','WebRTC DataChannels','Portable workspace bundles','Progressive enhancement']},
  {id:'scale',label:'Scale / large rooms',rx:/scale|thousand|million|large room|many users|high concurrency|massive|global network/i,terms:['scale','room','rate','queue','server','observability','cost'],tags:['performance','realtime'],features:['Authoritative multiplayer server','Rate limiting','OpenTelemetry server tracing','Cost monitoring']},
  {id:'mobile',label:'Mobile / constrained hardware',rx:/mobile|phone|android|ios|tablet|low[- ]?power|modest device|battery/i,terms:['mobile','low-resource','performance','adaptive','battery','fallback'],tags:['performance','resilience'],features:['Hardware-aware model selection','Adaptive quality','Reduced motion','Capability fallback ladder']}
];

function norm(s=''){return String(s).toLowerCase().normalize('NFKD').replace(/[’']/g,'').replace(/[^a-z0-9.+#/-]+/g,' ').replace(/\s+/g,' ').trim()}
function tokens(s=''){return norm(s).split(' ').map(t=>t.replace(/^[-/]+|[-/]+$/g,'')).filter(t=>t.length>1&&!STOP.has(t))}
function uniq(a){return [...new Set(a)]}
function featureText(f){return [f.name,f.name,f.name,f.categoryTitle,...(f.tags||[]),...(f.tags||[]),f.summary,f.example,...(f.useCases||[]),f.advanced||'',f.implementation||''].join(' ')}

let INDEX_CACHE=null;
function buildIndex(features){
  if(INDEX_CACHE?.features===features)return INDEX_CACHE;
  const docs=features.map(f=>{const ts=tokens(featureText(f));const tf=new Map();for(const t of ts)tf.set(t,(tf.get(t)||0)+1);return {f,tf,len:ts.length,norm:norm(featureText(f))}});
  const df=new Map();for(const d of docs)for(const t of d.tf.keys())df.set(t,(df.get(t)||0)+1);
  INDEX_CACHE={features,docs,df,avg:docs.reduce((s,d)=>s+d.len,0)/Math.max(1,docs.length)};return INDEX_CACHE;
}

function findFeature(features,name){const n=norm(name);return features.find(f=>norm(f.name)===n)||features.find(f=>norm(f.name).includes(n)||n.includes(norm(f.name)))}

export function analyzeProject({brief='',features=[],synergies=[],limit=28,includeSafeguards=true,expandSynergies=true}={}){
  const raw=String(brief||'').trim();
  if(!raw)return {brief:'',intents:[],recommendations:[],core:[],expanded:[],keywords:[],constraints:[],coverage:[]};
  const index=buildIndex(features),N=features.length;
  const baseTokens=tokens(raw);const matchedIntents=INTENTS.filter(x=>x.rx.test(raw));
  const expandedTerms=[];for(const i of matchedIntents)expandedTerms.push(...i.terms,...i.tags);
  const query=baseTokens.concat(expandedTerms);
  const qWeight=new Map();for(const t of baseTokens)qWeight.set(t,(qWeight.get(t)||0)+2.2);for(const t of expandedTerms)qWeight.set(t,(qWeight.get(t)||0)+0.9);
  const scores=new Map(),reasons=new Map();
  const add=(id,pts,why)=>{scores.set(id,(scores.get(id)||0)+pts);if(why){if(!reasons.has(id))reasons.set(id,[]);reasons.get(id).push(why)}};
  for(const d of index.docs){
    let score=0;const hits=[];
    for(const [t,qw] of qWeight){const tf=d.tf.get(t)||0;if(!tf)continue;const df=index.df.get(t)||1;const idf=Math.log(1+(N-df+.5)/(df+.5));const k1=1.35,b=.72;const bm=idf*((tf*(k1+1))/(tf+k1*(1-b+b*d.len/index.avg)));score+=bm*qw;if(idf>1.1)hits.push(t)}
    const qn=norm(raw);if(qn.length>2&&d.norm.includes(qn))score+=9;
    for(const t of baseTokens){if(norm(d.f.name).includes(t))score+=3.5;if((d.f.tags||[]).some(x=>norm(x)===t))score+=2.2}
    if(score>0)add(d.f.id,score,hits.length?`keyword fit: ${uniq(hits).slice(0,5).join(', ')}`:'text similarity');
  }
  for(const intent of matchedIntents){
    for(const name of intent.features){const f=findFeature(features,name);if(f)add(f.id,8.5,`inferred need: ${intent.label}`)}
    for(const f of features){const overlap=(f.tags||[]).filter(t=>intent.tags.includes(t)).length;if(overlap)add(f.id,1.5*overlap,`supports ${intent.label}`)}
  }
  if(includeSafeguards){
    const online=/online|multiplayer|public|shared|community|institution|internet|realtime/i.test(raw);
    const ai=/\bai\b|llm|agent|rag|model|prompt/i.test(raw);
    const baseline=online?['Input/schema validation','Content Security Policy','Progressive enhancement','Report/block/mute','Rate limiting','Accessibility tests','Audit log']:['Progressive enhancement','Accessibility tests','Input/schema validation'];
    if(ai)baseline.push('AI provenance','Human approval gates','Prompt injection isolation','Hardware-aware model selection');
    for(const name of baseline){const f=findFeature(features,name);if(f)add(f.id,3.8,'cross-cutting safeguard')}
  }
  // Propagate through curated fusion patterns without letting graph popularity dominate relevance.
  if(expandSynergies){
    const seedNames=new Set([...scores.entries()].sort((a,b)=>b[1]-a[1]).slice(0,24).map(([id])=>features.find(f=>f.id===id)?.name).filter(Boolean));
    for(const s of synergies){const members=s.slice(0,3).filter(Boolean);const hit=members.filter(n=>seedNames.has(n)).length;if(!hit)continue;for(const n of members){const f=findFeature(features,n);if(f&&!seedNames.has(n))add(f.id,hit>=2?5.5:2.1,`synergy: ${s[3]||members.join(' + ')}`)}}
  }
  const ranked=[...scores.entries()].map(([id,score])=>{const f=features.find(x=>x.id===id);return {feature:f,score,reasons:uniq(reasons.get(id)||[])}}).filter(x=>x.feature).sort((a,b)=>b.score-a.score);
  // Diversity re-rank: keep strong relevance while preventing one domain from swallowing the whole result set.
  const max=ranked[0]?.score||1,pool=[...ranked],diverse=[],categoryCounts=new Map();
  while(pool.length&&diverse.length<Math.max(6,limit)){
    let bestI=0,best=-Infinity;
    for(let i=0;i<pool.length;i++){const r=pool[i],seen=categoryCounts.get(r.feature.category)||0;const adjusted=r.score-(seen*max*.075);if(adjusted>best){best=adjusted;bestI=i}}
    const [pick]=pool.splice(bestI,1);diverse.push(pick);categoryCounts.set(pick.feature.category,(categoryCounts.get(pick.feature.category)||0)+1);
  }
  diverse.forEach((r,i)=>{r.fit=Math.max(1,Math.min(100,Math.round(100*(r.score/max))));r.tier=i<Math.min(10,Math.ceil(limit*.38))?'core':i<limit?'recommended':'adjacent'});
  const recommendations=diverse;
  const core=recommendations.filter(r=>r.tier==='core').map(r=>r.feature);
  const coverage=[...new Set(recommendations.map(r=>r.feature.categoryTitle))];
  const constraints=[];
  if(/github pages|static host|no backend/i.test(raw))constraints.push('Static hosting detected: keep core flows client-side/P2P and treat durable shared authority as an optional service.');
  if(/public|global|community|internet/i.test(raw))constraints.push('Public-facing use detected: prioritize moderation, rate limits, rollback, scoped permissions and abuse recovery.');
  if(/offline|low[- ]?bandwidth|intermittent|field/i.test(raw))constraints.push('Connectivity constraints detected: prioritize local-first state, resumable transfer, low-bandwidth modes and explicit freshness.');
  if(/child|children|youth|minor|student/i.test(raw))constraints.push('Youth/learner context detected: minimize data collection, strengthen moderation/privacy defaults and avoid manipulative engagement mechanics.');
  return {brief:raw,intents:matchedIntents.map(x=>({id:x.id,label:x.label})),recommendations,core,expanded:recommendations.map(r=>r.feature),keywords:uniq(baseTokens).slice(0,24),constraints,coverage};
}

export function discoveryContextText(result){
  if(!result?.brief)return '';
  const top=result.recommendations?.slice(0,18)||[];
  return [
    `Project-intent analysis: ${result.intents.map(x=>x.label).join(', ')||'general capability discovery'}.`,
    `Detected keywords: ${result.keywords.join(', ')||'none'}.`,
    `Recommended feature set: ${top.map(x=>x.feature.name).join(', ')||'none'}.`,
    result.constraints.length?`Detected constraints: ${result.constraints.join(' ')}`:'',
    `Recommendation method: explainable local hybrid retrieval + ontology expansion + curated synergy propagation; scores are design aids, not empirical performance measurements.`
  ].filter(Boolean).join('\n');
}
