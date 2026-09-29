import {FEATURES,CATEGORIES,SYNERGIES,ARCHETYPES} from './features.js';
import {getValue,setValue,getAllState,replaceState,storageEstimate} from './modules/storage.js';
import {detectCapabilities,runSelfTests} from './modules/capabilities.js';
import {CHAIN_STAGES,buildPrompt,buildConcisePrompt,stagePrompt} from './modules/prompts.js';
import {loadCatalog,initEngine,unloadEngine,generate,stopGeneration,engineInfo,getWebLLMVersion,inspectHardware,recommendModels} from './modules/webllm.js';
import {joinP2PRoom,sendP2P,leaveP2PRoom,isJoined} from './modules/p2p.js';
import {analyzeProject,discoveryContextText,discoveryFocusOptions} from './modules/discovery.js';

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const safeLocalGet=(k,f=null)=>{try{return localStorage.getItem(k)??f}catch{return f}};
const safeLocalSet=(k,v)=>{try{localStorage.setItem(k,v);return true}catch{return false}};
const state={selected:new Set(),theme:'dark',reduceMotion:false,route:'overview',caps:[],peers:new Set(),prompt:'',settings:{},discovery:null,modelCatalog:[],hardwareProfile:null};
const ROUTES=[
  {id:'overview',label:'Overview',icon:'⌂',group:'Workspace',edges:['top','left'],related:['library','fusion','architecture']},
  {id:'library',label:'Feature Library',icon:'◇',group:'Build',edges:['top','left','bottom'],related:['fusion','prompt','guides']},
  {id:'fusion',label:'Fusion Lab',icon:'✣',group:'Build',edges:['top','left','bottom'],related:['library','prompt','architecture']},
  {id:'prompt',label:'Prompt Foundry',icon:'⌘',group:'Build',edges:['top','left','bottom'],related:['fusion','ai','library']},
  {id:'ai',label:'WebLLM Lab',icon:'✦',group:'Intelligence',edges:['top','left','bottom'],related:['prompt','capabilities','architecture']},
  {id:'multiplayer',label:'Multiplayer',icon:'⇄',group:'Collaboration',edges:['top','left','bottom'],related:['architecture','capabilities','integrity']},
  {id:'capabilities',label:'Capabilities',icon:'◉',group:'System',edges:['left'],related:['architecture','integrity','ai']},
  {id:'architecture',label:'Architecture',icon:'▦',group:'System',edges:['left'],related:['capabilities','fusion','guides']},
  {id:'guides',label:'Guides',icon:'?',group:'Reference',edges:['left'],related:['library','architecture','prompt']},
  {id:'integrity',label:'Integrity',icon:'✓',group:'Reference',edges:['left'],related:['capabilities','architecture','multiplayer']}
];
const routeById=id=>ROUTES.find(r=>r.id===id);
const PRESETS={
 multiplayer:['CRDTs','WebRTC DataChannels','Trystero peer discovery','WebSockets','Transport abstraction','Late-join snapshots','Presence service','Authoritative room state','Object-level ACLs','Report/block/mute','Contribution ledger','Universal event envelope','PWA','Offline mutation queue'],
 agentic:['WebLLM','Local RAG','AI tool calling','Agent planner/executor/verifier','AI provenance','Meta-prompt chain','Tool-scoped agents','Human-in-the-loop approval','Knowledge graph','Claim-evidence linking','Hybrid retrieval','Workflow templates','Capability registry'],
 field:['IndexedDB','OPFS','Offline mutation queue','GeoJSON layers','Offline map packs','Geolocation','Local image compression','Portable workspace bundles','Background Sync','Freshness indicators','Progressive enhancement','Zero-Harm / Anti-Inversion'],
 learning:['Quest engine','Skill trees','Team XP','Achievement provenance','Just-in-time primers','Competency pathways','Mentor matching','Adaptive explanations','Reduced motion','Caption/transcript support','Translation dictionaries','AI provenance'],
 institution:['Passkeys/WebAuthn','RBAC','Object-level ACLs','Versioned proposals','Human approval gates','Claim-evidence linking','Data lineage graph','OpenTelemetry server tracing','Signed webhooks','Stateful room objects','Relational database','Audit system']
};

function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove('show'),2800)}
function escapeHTML(v=''){return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}

async function copyText(text){try{if(navigator.clipboard?.writeText&&globalThis.isSecureContext){await navigator.clipboard.writeText(text);return true}}catch{}const ta=document.createElement('textarea');ta.value=text;ta.setAttribute('readonly','');ta.style.position='fixed';ta.style.opacity='0';document.body.append(ta);ta.select();let ok=false;try{ok=document.execCommand('copy')}catch{}ta.remove();return ok}

function download(name,text,type='text/plain'){const blob=new Blob([text],{type});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
function featureByName(name){return FEATURES.find(f=>f.name===name)}
function selectedFeatures(){return FEATURES.filter(f=>state.selected.has(f.id))}
function persistSelections(){setValue('selectedFeatures',[...state.selected]);renderSelectedDependent()}

async function init(){
  const saved=await getValue('selectedFeatures',[]);saved.forEach(id=>state.selected.add(id));
  state.theme=await getValue('theme',safeLocalGet('fusion-theme','dark')||'dark');state.reduceMotion=await getValue('reduceMotion',false);
  document.documentElement.dataset.theme=state.theme;document.documentElement.classList.toggle('reduce-motion',state.reduceMotion);
  buildNav();buildFilters();buildChainOptions();renderFeatures();renderGuides();renderArchitecture();drawConstellation();
  await refreshCapabilities();await updateStatePreview();bindEvents();route();updateConnectivity();renderSelectedDependent();
  window.addEventListener('hashchange',route);window.addEventListener('online',updateConnectivity);window.addEventListener('offline',updateConnectivity);
  if('serviceWorker' in navigator && location.protocol!=='file:') navigator.serviceWorker.register('./sw.js').then(()=>$('#pwa-label').textContent='PWA service worker registered').catch(e=>$('#pwa-label').textContent=`PWA registration failed: ${e.message}`);
  else $('#pwa-label').textContent=location.protocol==='file:'?'PWA requires HTTP(S), not file://':'Service Worker unavailable';
  splashController.ready();
}

const splashController=window.FusionSplash||{ready(){},fail(){},dismiss(){}};

function navLink(r,compact=false){return `<a href="#${r.id}" data-nav="${r.id}" title="${escapeHTML(r.label)}">${compact?`<span class="nav-icon">${r.icon}</span><small>${escapeHTML(r.label)}</small>`:`${r.icon} <span>${escapeHTML(r.label)}</span>`}</a>`}
function buildNav(){
  $('#top-nav').innerHTML=ROUTES.filter(r=>r.edges.includes('top')).map(r=>navLink(r)).join('');
  const groups=[...new Set(ROUTES.map(r=>r.group))];
  $('#side-nav').innerHTML=groups.map(group=>`<div class="nav-group"><small>${escapeHTML(group)}</small>${ROUTES.filter(r=>r.group===group&&r.edges.includes('left')).map(r=>navLink(r)).join('')}</div>`).join('');
  $('#bottom-nav').innerHTML=ROUTES.filter(r=>r.edges.includes('bottom')).map(r=>navLink(r,true)).join('');
  renderContextHud();
}
function renderContextHud(){
  const current=routeById(state.route)||ROUTES[0];
  $('#context-title').textContent=current.label;
  const related=(current.related||[]).map(routeById).filter(Boolean);
  $('#right-nav').innerHTML=related.length?`<div class="nav-group"><small>Related modules</small>${related.map(r=>navLink(r)).join('')}</div>`:'<p class="muted">No related modules.</p>';
  const actions={
    overview:[['library','Browse feature library'],['fusion','Open fusion lab']],
    library:[['select-visible','Select visible features'],['clear-selected','Clear selection'],['prompt','Build prompts']],
    fusion:[['analyze-project','Run Foundry Intelligence'],['preset-multiplayer','Apply multiplayer preset'],['prompt','Open Prompt Foundry']],
    prompt:[['generate-concise','Generate compact prompt'],['copy-concise','Copy compact prompt'],['generate-prompt','Generate full prompt']],
    ai:[['load-models','Load model catalog'],['prompt','Edit source prompt']],
    multiplayer:[['join-room','Join current room'],['architecture','Review architecture']],
    capabilities:[['rerun-tests','Rerun capability checks'],['architecture','Architecture']],
    architecture:[['fusion','Fusion Lab'],['guides','Implementation guides']],
    guides:[['library','Feature Library'],['prompt','Prompt Foundry']],
    integrity:[['export-state','Export workspace'],['capabilities','Run capability checks']]
  };
  $('#right-actions').innerHTML=(actions[current.id]||[]).map(([target,label])=>routeById(target)?`<a class="hud-action" href="#${target}">${escapeHTML(label)}</a>`:`<button class="hud-action" type="button" data-hud-action="${target}">${escapeHTML(label)}</button>`).join('');
  $$('[data-hud-action]').forEach(btn=>btn.onclick=()=>{const key=btn.dataset.hudAction;const target=key==='preset-multiplayer'?document.querySelector('.preset[data-preset="multiplayer"]'):$('#'+key);if(target)target.click();else toast('Action unavailable in this context')});
  updateHudStatus();
}
function closeEdgeDrawers(){if($('#side'))$('#side').classList.remove('open');if($('#right-hud'))$('#right-hud').classList.remove('open');$('#drawer-toggle')?.setAttribute('aria-expanded','false');$('#right-drawer-toggle')?.setAttribute('aria-expanded','false')}
function route(){let id=(location.hash||'#overview').slice(1);if(!routeById(id))id='overview';state.route=id;$$('.route').forEach(r=>r.classList.toggle('active',r.dataset.route===id));$$('[data-nav]').forEach(a=>a.classList.toggle('active',a.dataset.nav===id));const label=routeById(id)?.label||id;$('#breadcrumbs').textContent=`Foundry / ${label}`;$('#bottom-route').textContent=label;document.title=`${label} · Feature Fusion Foundry`;closeEdgeDrawers();renderContextHud();window.scrollTo({top:0,behavior:state.reduceMotion?'auto':'smooth'});if(id==='integrity')updateStatePreview()}

function buildFilters(){const select=$('#category-filter');CATEGORIES.forEach(c=>select.insertAdjacentHTML('beforeend',`<option value="${c.id}">${escapeHTML(c.title)}</option>`))}
function featureMatches(f){const q=$('#feature-search').value.trim().toLowerCase(),cat=$('#category-filter').value,mat=$('#maturity-filter').value,sel=$('#selected-only').checked;const hay=[f.name,f.summary,f.longDescription,f.advanced,f.implementation,f.fusion,f.risks,f.fallback,f.example,f.categoryTitle,...f.tags,...f.useCases].filter(Boolean).join(' ').toLowerCase();return(!q||hay.includes(q))&&(cat==='all'||f.category===cat)&&(mat==='all'||f.maturity===mat)&&(!sel||state.selected.has(f.id))}
function featureCardHTML(f){const long=(f.longDescription||f.advanced||f.summary).split(/\n\n+/).map(p=>`<p>${escapeHTML(p)}</p>`).join('');return `<article class="feature-card ${state.selected.has(f.id)?'selected':''}" data-feature="${f.id}"><span class="maturity ${f.maturity}">${f.maturity}</span><div class="feature-head"><input class="feature-select" type="checkbox" ${state.selected.has(f.id)?'checked':''} aria-label="Select ${escapeHTML(f.name)}"><div><h3>${escapeHTML(f.name)} <span class="tip" tabindex="0" data-tip="${escapeHTML(f.tooltip)}">?</span></h3><div class="summary">${escapeHTML(f.summary)}</div><div class="tag-row">${f.tags.slice(0,6).map(t=>`<span class="tag">${escapeHTML(t)}</span>`).join('')}</div></div></div><details><summary>Open full description & implementation guidance</summary><div class="feature-long">${long}</div><div class="feature-detail-grid"><div><strong>Implementation</strong><p>${escapeHTML(f.implementation||f.advanced)}</p></div><div><strong>Example</strong><p>${escapeHTML(f.example)}</p><strong>Recommended use</strong><p>${f.useCases.map(escapeHTML).join(', ')}</p></div><div><strong>Feature-fusion guidance</strong><p>${escapeHTML(f.fusion||`${f.categoryTitle} capabilities work best through explicit events, schemas and fallbacks.`)}</p></div><div><strong>Risks & failure modes</strong><p>${escapeHTML(f.risks||'Test unsupported capabilities, errors, permissions and degraded operation.')}</p></div><div class="wide"><strong>Graceful fallback</strong><p>${escapeHTML(f.fallback||'Preserve core workflow with a simpler standards-based fallback.')}</p></div></div></details></article>`}
function renderFeatures(){const visible=FEATURES.filter(featureMatches);$('#visible-count').textContent=visible.length;$('#feature-list').innerHTML=visible.map(featureCardHTML).join('')||'<div class="panel">No features match these filters.</div>';
  $$('.feature-select').forEach(box=>box.addEventListener('change',e=>{const card=e.target.closest('[data-feature]');const id=card.dataset.feature;e.target.checked?state.selected.add(id):state.selected.delete(id);card.classList.toggle('selected',e.target.checked);persistSelections()}));
}


function currentDiscoveryBrief(){return $('#discovery-brief')?.value.trim()||''}
function renderDiscovery(result){
  state.discovery=result;
  const intents=$('#discovery-intents'),constraints=$('#discovery-constraints'),results=$('#discovery-results'),coverage=$('#discovery-coverage'),support=$('#discovery-supporting'),plan=$('#discovery-plan'),detail=$('#discovery-intent-detail'),diag=$('#discovery-diagnostics');
  if(!intents||!results)return;
  intents.innerHTML=result?.intents?.length?result.intents.map(x=>`<span class="chip ${x.role==='primary'?'intent-primary':'intent-secondary'}">${x.role==='primary'?'★':'○'} ${escapeHTML(x.label)}</span>`).join(''):'<span class="muted">No project intents inferred yet.</span>';
  constraints.innerHTML=result?.constraints?.length?result.constraints.map(x=>`<div class="notice warning"><strong>Constraint:</strong> ${escapeHTML(x)}</div>`).join(''):'';
  coverage.innerHTML=result?.coverage?.length?result.coverage.map(x=>`<span class="chip">${escapeHTML(x)}</span>`).join(''):'<span class="muted">Run discovery to map architecture coverage.</span>';
  if(detail)detail.innerHTML=`<div class="planner-intent"><strong>Primary</strong><p>${escapeHTML(result?.primaryIntents?.map(x=>x.label).join(', ')||'General / not confidently classified')}</p></div>${result?.secondaryIntents?.length?`<div class="planner-intent"><strong>Secondary</strong><p>${escapeHTML(result.secondaryIntents.map(x=>x.label).join(', '))}</p></div>`:''}`;
  if(support)support.innerHTML=result?.supporting?.length?result.supporting.map(x=>`<div class="supporting-rec"><strong>${escapeHTML(x.feature.name)}</strong><small>${escapeHTML(x.feature.summary)}</small></div>`).join(''):'<p class="muted">No additional supporting constraints were inferred.</p>';
  if(plan)plan.innerHTML=result?.plan?.length?result.plan.map((step,i)=>`<div class="plan-step ${step.supporting?'supporting-step':''}"><div class="plan-index">${i+1}</div><div><strong>${escapeHTML(step.title)}</strong><p>${escapeHTML(step.goal)}</p><div class="chip-cloud">${step.features.map(f=>`<span class="chip">${escapeHTML(f.name)}</span>`).join('')}</div></div></div>`).join(''):'<p class="muted">No implementation plan yet.</p>';
  if(diag){const d=result?.diagnostics||{};diag.innerHTML=`<strong>${escapeHTML(d.strategy||'precise')} planner</strong><small>${d.suppressed||0} low-relevance candidates suppressed · primary lanes: ${escapeHTML((d.primaryCategories||[]).join(', ')||'none')} · adjacent lanes: ${escapeHTML((d.adjacentCategories||[]).join(', ')||'none')}</small>`}
  if(!result?.recommendations?.length){results.innerHTML='<p class="muted">No primary recommendations yet. Add more concrete project terms, switch to exploratory mode, or choose a primary focus.</p>';return}
  results.innerHTML=result.recommendations.map((r,i)=>`<div class="recommendation ${r.tier}"><div class="recommendation-rank">${i+1}</div><div class="recommendation-main"><div class="recommendation-title"><strong>${escapeHTML(r.feature.name)}</strong><span class="fit-badge">${r.fit}% fit</span><span class="tier-badge">${r.tier}</span></div><p>${escapeHTML(r.feature.summary)}</p><small>${escapeHTML(r.reasons.filter(x=>!x.startsWith('down-ranked')).slice(0,3).join(' · '))}</small></div><button class="secondary tiny" data-discovery-add="${r.feature.id}">${state.selected.has(r.feature.id)?'Selected':'Add'}</button></div>`).join('');
  $$('[data-discovery-add]').forEach(b=>b.onclick=()=>{state.selected.add(b.dataset.discoveryAdd);persistSelections();renderFeatures();b.textContent='Selected'});
  $('#apply-discovery-core').disabled=!result.core.length;$('#apply-discovery-all').disabled=!result.expanded.length;$('#discovery-to-prompt').disabled=!result.expanded.length;
}
function runDiscovery(){
  const brief=currentDiscoveryBrief();if(!brief){toast('Describe the project or use Prompt Foundry context first');return null}
  const result=analyzeProject({brief,features:FEATURES,synergies:SYNERGIES,limit:Number($('#discovery-depth')?.value)||28,includeSafeguards:$('#discovery-safeguards')?.checked!==false,expandSynergies:$('#discovery-synergies')?.checked!==false,focus:$('#discovery-focus')?.value||'auto',strategy:$('#discovery-strategy')?.value||'precise'});
  renderDiscovery(result);toast(`Found ${result.recommendations.length} compatible capabilities`);return result;
}
function applyDiscovery(which='all'){
  const result=state.discovery||runDiscovery();if(!result)return;const fs=which==='core'?result.core:result.expanded;fs.forEach(f=>state.selected.add(f.id));persistSelections();renderFeatures();renderDiscovery(result);toast(`${fs.length} ${which==='core'?'core':'recommended'} capabilities applied`)
}
function usePromptContextForDiscovery(){
  const parts=[$('#project-name')?.value,$('#project-goal')?.value,$('#project-audience')?.value,$('#deployment-target')?.value].filter(Boolean);$('#discovery-brief').value=parts.join('. ');runDiscovery();
}
function sendDiscoveryToPrompt(){
  const result=state.discovery||runDiscovery();if(!result)return;result.expanded.forEach(f=>state.selected.add(f.id));if($('#project-goal')&&!$('#project-goal').value.trim())$('#project-goal').value=result.brief;persistSelections();renderFeatures();location.hash='prompt';generatePrompt();toast('Discovery profile sent to Prompt Foundry')
}


function renderSelectedDependent(){const selected=selectedFeatures();$('#selected-count').textContent=selected.length;renderFusion(selected);updateOverviewStats();updateHudStatus();generateConcisePrompt();if(state.prompt)$('#prompt-metrics').innerHTML=promptMetrics(state.prompt,selected.length)}
function updateOverviewStats(){const selected=selectedFeatures();$('#overview-stats').innerHTML=[[FEATURES.length,'capabilities indexed'],[CATEGORIES.length,'architecture domains'],[selected.length,'features selected'],[SYNERGIES.length,'curated fusion patterns']].map(([v,l])=>`<div class="stat"><strong>${v}</strong><span>${l}</span></div>`).join('')}

function renderFusion(selected){
  const head=$('#archetype-matrix thead'),body=$('#archetype-matrix tbody');head.innerHTML=`<tr><th>Archetype</th><th>Fit</th><th>Matched tags / capabilities</th></tr>`;
  let projectRow='';if(state.discovery?.recommendations?.length){const target=state.discovery.recommendations.slice(0,Math.max(10,state.discovery.core.length));const ids=new Set(target.map(x=>x.feature.id));const hits=selected.filter(f=>ids.has(f.id));const denom=Math.max(1,Math.min(target.length,14));const score=Math.min(3,Math.round(Math.min(1,hits.length/denom)*3));projectRow=`<tr class="project-fit-row"><td><strong>Detected project brief</strong></td><td class="score score-${score}">${score}/3</td><td>${hits.slice(0,7).map(f=>escapeHTML(f.name)).join(', ')||'Run discovery, then apply recommendations'}</td></tr>`}
  body.innerHTML=projectRow+ARCHETYPES.map(a=>{const hits=new Set();selected.forEach(f=>f.tags.forEach(t=>{if(a.tags.includes(t))hits.add(t)}));const denom=Math.max(1,a.tags.length),score=Math.min(3,Math.round((hits.size/denom)*3));return `<tr><td>${a.name}</td><td class="score score-${score}">${score}/3</td><td>${[...hits].join(', ')||'—'}</td></tr>`}).join('');
  const names=new Set(selected.map(f=>f.name));const sy=SYNERGIES.filter(s=>s.slice(0,3).filter(n=>names.has(n)).length>=2);$('#synergy-list').innerHTML=sy.length?sy.map(s=>`<div class="synergy"><strong>${s[3]}</strong><div>${s.slice(0,3).map(n=>names.has(n)?`✓ ${escapeHTML(n)}`:`○ ${escapeHTML(n)}`).join(' · ')}</div></div>`).join(''):'<p class="muted">Select more complementary features to reveal curated synergy patterns.</p>';
  $('#selected-cloud').innerHTML=selected.length?selected.map(f=>`<span class="chip" title="${escapeHTML(f.summary)}">${escapeHTML(f.name)} <button data-remove="${f.id}" aria-label="Remove ${escapeHTML(f.name)}">×</button></span>`).join(''):'<span class="muted">No selected features yet.</span>';$$('[data-remove]').forEach(b=>b.onclick=()=>{state.selected.delete(b.dataset.remove);persistSelections();renderFeatures()});
  renderPairMatrix(selected.slice(0,12));
}
function renderPairMatrix(features){const table=$('#pair-matrix');if(!features.length){table.innerHTML='<tr><td>Select features to build a compatibility matrix.</td></tr>';return}const explicit=new Set();for(const s of SYNERGIES){for(const a of s.slice(0,3))for(const b of s.slice(0,3))if(a!==b)explicit.add(`${a}|||${b}`)};table.innerHTML=`<thead><tr><th>Feature</th>${features.map(f=>`<th title="${escapeHTML(f.name)}">${escapeHTML(f.name.slice(0,16))}${f.name.length>16?'…':''}</th>`).join('')}</tr></thead><tbody>${features.map(a=>`<tr><th>${escapeHTML(a.name)}</th>${features.map(b=>{if(a.id===b.id)return'<td>—</td>';const exp=explicit.has(`${a.name}|||${b.name}`),overlap=a.tags.filter(t=>b.tags.includes(t)).length,cls=exp?'pair-strong':overlap?'pair-hit':'';return `<td class="${cls}" title="${exp?'Curated synergy':overlap?`${overlap} shared tags`:'No explicit relation'}">${exp?'◎':overlap?overlap:'·'}</td>`}).join('')}</tr>`).join('')}</tbody>`}

function buildChainOptions(){const el=$('#chain-options');el.innerHTML=CHAIN_STAGES.map(s=>`<label class="stage-check"><input type="checkbox" value="${s.id}" checked><span><strong>${escapeHTML(s.title)}</strong><small>${escapeHTML(s.simple)}</small></span></label>`).join('');renderChainPreview()}
function renderChainPreview(){const ids=$$('#chain-options input:checked').map(x=>x.value);$('#chain-preview').innerHTML=CHAIN_STAGES.filter(s=>ids.includes(s.id)).map((s,i)=>`<div class="timeline-item"><div class="num">${i+1}</div><div><h3>${escapeHTML(s.title)}</h3><p>${escapeHTML(s.simple)}</p><details><summary>Implementation instruction</summary><p>${escapeHTML(s.instruction)}</p></details></div></div>`).join('')}
function generatePrompt(){const opts={selectedFeatures:selectedFeatures(),projectName:$('#project-name').value.trim()||'Feature Fusion Project',goal:$('#project-goal').value.trim(),audience:$('#project-audience').value.trim(),deployment:$('#deployment-target').value,stageIds:$$('#chain-options input:checked').map(x=>x.value),discoveryProfile:discoveryContextText(state.discovery)};state.prompt=buildPrompt(opts);$('#prompt-output').value=state.prompt;$('#prompt-metrics').innerHTML=promptMetrics(state.prompt,opts.selectedFeatures.length);setValue('lastPrompt',state.prompt);return state.prompt}
function promptMetrics(text,count){return `<span>${count} features</span><span>${text.length.toLocaleString()} chars</span><span>${text.trim().split(/\s+/).length.toLocaleString()} words</span><span>${$$('#chain-options input:checked').length} stages</span>`}
function parseCustomFeatureNames(){return ($('#concise-custom')?.value||'').split(',').map(x=>x.trim()).filter(Boolean)}
function generateConcisePrompt(){
  const output=$('#concise-output');if(!output)return '';
  const text=buildConcisePrompt({selectedFeatures:selectedFeatures(),customNames:parseCustomFeatureNames(),synergies:SYNERGIES,completeSynergies:$('#concise-synergies')?.checked,maxChars:$('#concise-budget')?.value||0});
  output.value=text;
  const names=text?text.split(', ').length:0;
  const approxTokens=text?Math.ceil(text.length/4):0;
  const budget=Math.max(0,Number($('#concise-budget')?.value)||0);
  $('#concise-metrics').innerHTML=`<span>${names} feature names</span><span>${text.length.toLocaleString()} chars${budget?` / ${budget}`:''}</span><span>≈${approxTokens.toLocaleString()} tokens</span><span>comma-only</span>`;
  return text;
}
function updateHudStatus(){
  const count=state.selected.size,on=navigator.onLine,engine=engineInfo();
  if($('#hud-selected-count'))$('#hud-selected-count').textContent=count;
  if($('#hud-network'))$('#hud-network').textContent=`${on?'Online':'Offline'} · AI ${engine.loaded?'ready':'idle'}`;
  if($('#bottom-selection'))$('#bottom-selection').textContent=`${count} selected`;
  if($('#bottom-network'))$('#bottom-network').textContent=on?'online':'offline';
}

async function refreshCapabilities(){state.caps=await detectCapabilities();renderCapabilities();const webgpu=state.caps.find(c=>c.id==='webgpu')?.supported;$('#webllm-capability').innerHTML=webgpu?`<span style="color:var(--good)">● WebGPU available</span> · WebLLM ${getWebLLMVersion()} can be loaded on demand.`:`<span style="color:var(--danger)">● WebGPU unavailable</span> · Local WebLLM inference cannot run here; prompt generation still works.`}
function renderCapabilities(){const el=$('#capability-grid');el.innerHTML=state.caps.map(c=>`<div class="cap ${c.supported?'yes':'no'}"><strong>${c.supported?'✓':'×'} ${escapeHTML(c.label)}</strong><small>${escapeHTML(c.note)}</small></div>`).join('');runTests()}
async function runTests(){const tests=await runSelfTests(FEATURES,fs=>buildPrompt({selectedFeatures:fs,goal:'test',audience:'test',deployment:'test'}));$('#test-results').innerHTML=tests.map(t=>`<div class="test"><span>${escapeHTML(t.name)} <small>${escapeHTML(t.detail||'')}</small></span><strong class="${t.pass?'pass':'fail'}">${t.pass?'PASS':'FAIL'}</strong></div>`).join('')}

function renderArchitecture(){const layers=[
 ['User Experience','routes · dashboards · maps · quests · workspaces · guided/expert modes'],['Collaboration','CRDT · presence · chat · boards · docs · deliberation'],['Game & Learning','quests · skills · team XP · mentorship · competency'],['Knowledge & Evidence','graph · citations · datasets · provenance · hybrid search'],['AI & Agents','WebLLM · RAG · tools · meta-prompts · human approval'],['Realtime Transport','WebRTC · Trystero · WebSocket · WebTransport · fallback'],['Coordination','rooms · authority · events · workflows · queues · admission'],['Identity & Trust','passkeys · RBAC/ABAC · object ACLs · moderation'],['Data','SQL · objects · events · search · vectors · cache'],['Local Resilience','IndexedDB · OPFS · PWA · service worker · reconciliation'],['Operations','testing · tracing · diagnostics · security · cost · rollback']
 ];$('#arch-stack').innerHTML=layers.map(([a,b])=>`<div class="arch-layer"><strong>${a}</strong><span>${b}</span></div>`).join('')}

function renderGuides(){const guides=[
 ['Feature fusion','Start with the problem and choose the smallest coherent capability set.','Select features that share objects/events. Define one source of truth per state type. Add fallbacks before decorative features.','Feature fusion is systems design: the value comes from interactions. A quest engine becomes more useful when it consumes verified events; AI becomes safer when it reads provenance-linked evidence; multiplayer becomes durable when transport is separated from synchronization semantics.','Create object schemas → universal event envelope → module contracts → capability/fallback registry → cross-module event map → integration tests.'],
 ['Realtime multiplayer','Choose which interactions truly need realtime behavior.','Use WebRTC for direct peers; WebSocket/room authority for durable coordination; CRDTs for mergeable shared state. Test TURN and reconnect paths.','Networking transport, application synchronization and authority are separate concerns. A direct WebRTC connection does not solve identity, moderation, late joins, persistence or conflict resolution.','Define protocol version, room admission, message schema, snapshot handshake, reconnection/backoff, transport fallback, moderation events and authoritative validations.'],
 ['WebLLM & local AI','Download a compatible model only when the user asks for local AI.','Detect WebGPU, show expected model download clearly, run inference in a Web Worker, preserve a no-AI path, and label outputs as AI-generated.','WebLLM exposes an OpenAI-style interface and worker support. Local inference improves privacy but still consumes significant GPU memory and power. Context quality and tool boundaries matter more than simply adding a model.','Use a provider adapter; stream output; budget context/tokens; optionally enable resumable generation; isolate retrieved content from instructions; record model/version/context provenance.'],
 ['CRDT & local-first sync','Let people edit immediately, then converge safely.','Choose CRDT types around domain semantics; persist local operations; exchange updates; snapshot periodically; test concurrent and offline edits.','CRDTs solve convergence, not business validity. Permission checks, semantic conflicts and destructive operations may still require application rules or an authority service.','Define replica IDs, document boundaries, awareness as ephemeral state, snapshot cadence, tombstone policy, protocol/schema versions and convergence test fixtures.'],
 ['Evidence & provenance','Every important claim should be traceable.','Store source, date, applicability, limitations and review state. Link derived outputs back to transformations and inputs.','A citation is not the same as evidence quality. Provenance should distinguish source material, transformation, model inference, human judgment and measured outcome.','Create evidence/claim/derivation schemas, content hashes, review workflow, stale-source checks, diff history and exportable provenance bundles.'],
 ['Security & moderation','Assume public multiplayer will receive malformed and adversarial input.','Validate network data, sanitize rendering, scope permissions, rate-limit writes, retain rollback history, add report/block/mute and appeals.','P2P encryption does not mean participants are trustworthy. Client-side checks cannot enforce authoritative rules against modified clients. Security boundaries must match threat models.','Threat model → CSP/Trusted Types → schemas → server validation → abuse budgets → moderation audit → recovery/rollback → dependency review.'],
 ['PWA & offline resilience','Keep essential work usable during network failure.','Cache the shell, queue edits, show freshness, never promise uncached APIs offline, and test service-worker upgrades.','A service worker is not a magic offline switch. External CDN modules, live data, identity services and multiplayer still require explicit caching or a fallback.','Version caches, separate immutable/runtime data, migration guard, update UX, queued writes, offline indicator, recovery page and test matrix for first-load-vs-cached behavior.'],
 ['Federation','Let independent communities interoperate without one database owning everything.','Agree on object schemas, identities, signatures, exchange policy and selective replication before building discovery.','Federation moves trust boundaries rather than eliminating them. Each instance needs moderation, retention and federation policies plus mechanisms to verify remote origin.','Instance identity → schema registry → signed messages → allow/deny policy → selective object exchange → federated search → conflict handling.'],
 ['Gamification tied to work','Reward meaningful contribution, learning and verification rather than clicks.','Drive XP from auditable domain events. Add diminishing returns, peer review and no-gamification mode.','Any metric becomes a target. Multidimensional progression and evidence-backed achievements reduce incentives to optimize meaningless activity.','Map events to rewards; define anti-spam caps; distinguish self-report from verified contribution; make team/community progress visible; audit for perverse incentives.'],
 ['Systems & anti-inversion','Check who benefits, who bears risk and what happens when the design fails.','Map stakeholders, unknowns, feedback loops and second-order effects. Run a pre-mortem and classify reversible versus irreversible actions.','High-quality implementation can still optimize the wrong objective. Anti-inversion means the platform keeps human welfare, consent, evidence and contestability visible alongside technical success.','Require review records for consequential actions, missing-stakeholder detector, pre-mortem, reversibility field, assumption registry, outcome monitoring and scheduled reassessment.']
 ];$('#guide-list').innerHTML=guides.map(([title,one,steps,adv,impl])=>`<details class="guide"><summary>${escapeHTML(title)}</summary><div class="guide-body"><div class="depth"><h3>One-minute explanation</h3><p>${escapeHTML(one)}</p></div><div class="depth"><h3>Actionable steps</h3><p>${escapeHTML(steps)}</p></div><div class="depth"><h3>Advanced explanation</h3><p>${escapeHTML(adv)}</p></div><div class="depth"><h3>Implementation detail</h3><p>${escapeHTML(impl)}</p></div></div></details>`).join('')}

async function updateStatePreview(){const s=await getAllState();const est=await storageEstimate();$('#state-preview').textContent=JSON.stringify({storedKeys:Object.keys(s),selectedFeatures:state.selected.size,theme:state.theme,storageEstimate:est?{usage:est.usage,quota:est.quota}:null,online:navigator.onLine,webLLM:engineInfo(),p2pJoined:isJoined()},null,2)}
function updateConnectivity(){const on=navigator.onLine;$('#online-label').textContent=on?'Online':'Offline';$('#online-dot').className='dot '+(on?'good':'bad');updateHudStatus()}
function drawConstellation(){const el=$('#constellation');let html='';const pts=[];for(let i=0;i<16;i++){const x=10+Math.random()*80,y=10+Math.random()*80;pts.push([x,y]);html+=`<i style="left:${x}%;top:${y}%;transform:scale(${.6+Math.random()})"></i>`}for(let i=0;i<10;i++){const [x1,y1]=pts[i],[x2,y2]=pts[(i+3)%pts.length],dx=x2-x1,dy=y2-y1,len=Math.hypot(dx,dy),angle=Math.atan2(dy,dx)*180/Math.PI;html+=`<b style="left:${x1}%;top:${y1}%;width:${len}%;transform:rotate(${angle}deg)"></b>`}el.innerHTML=html}

async function exportWorkspace(){const data={schema:'feature-fusion-foundry.workspace',version:1,exportedAt:new Date().toISOString(),selectedFeatures:[...state.selected],project:{name:$('#project-name').value,goal:$('#project-goal').value,audience:$('#project-audience').value,deployment:$('#deployment-target').value},prompt:$('#prompt-output').value,settings:{theme:state.theme,reduceMotion:state.reduceMotion}};download(`feature-fusion-workspace-${new Date().toISOString().slice(0,10)}.json`,JSON.stringify(data,null,2),'application/json');toast('Workspace exported')}
async function importWorkspace(file){const data=JSON.parse(await file.text());if(data.schema!=='feature-fusion-foundry.workspace'||data.version!==1)throw new Error('Unsupported workspace schema/version');state.selected=new Set((data.selectedFeatures||[]).filter(id=>FEATURES.some(f=>f.id===id)));if(data.project){$('#project-name').value=data.project.name||'';$('#project-goal').value=data.project.goal||'';$('#project-audience').value=data.project.audience||'';if([...$('#deployment-target').options].some(o=>o.value===data.project.deployment))$('#deployment-target').value=data.project.deployment}$('#prompt-output').value=data.prompt||'';state.prompt=data.prompt||'';await setValue('selectedFeatures',[...state.selected]);renderFeatures();renderSelectedDependent();toast('Workspace imported')}

async function hashSelectedFile(){const file=$('#hash-file').files[0];if(!file){toast('Choose a file first');return}const digest=await crypto.subtle.digest('SHA-256',await file.arrayBuffer());const hex=[...new Uint8Array(digest)].map(b=>b.toString(16).padStart(2,'0')).join('');$('#hash-output').textContent=`${file.name}\nSHA-256 ${hex}`}

async function setupWebLLM(){try{$('#load-models').disabled=true;$('#model-status').textContent='Loading WebLLM module and model catalog…';const models=await loadCatalog();state.modelCatalog=models;const select=$('#webllm-model');select.innerHTML=models.map(m=>`<option value="${escapeHTML(m.id)}">${escapeHTML(m.label)}</option>`).join('');const idx=models.findIndex(m=>/360M|0\.5B|1B|Smol/i.test(m.id));if(idx>=0)select.selectedIndex=idx;$('#load-webllm').disabled=!navigator.gpu;$('#model-status').textContent=`Catalog ready: ${models.length} models. Choose one and load it explicitly.`;if(state.hardwareProfile)renderModelRecommendations()}catch(e){$('#model-status').textContent=`Catalog error: ${e.message}`}finally{$('#load-models').disabled=false}}
async function analyzeHardware(){
  $('#hardware-profile').innerHTML='<span>Inspecting WebGPU adapter…</span>';
  state.hardwareProfile=await inspectHardware({knownVramGB:$('#known-vram')?.value||0});
  const p=state.hardwareProfile,desc=[p.webgpu?'WebGPU ✓':'WebGPU ×',p.deviceMemoryGB?`${p.deviceMemoryGB} GB reported system memory`:'system memory undisclosed',p.logicalCores?`${p.logicalCores} logical cores`:'cores undisclosed',p.knownVramGB?`${p.knownVramGB} GB user-supplied VRAM`:'GPU VRAM not exposed'];
  if(p.adapterInfo?.description||p.adapterInfo?.device)desc.push(p.adapterInfo.description||p.adapterInfo.device);
  $('#hardware-profile').innerHTML=desc.map(x=>`<span>${escapeHTML(x)}</span>`).join('');
  if(state.modelCatalog.length)renderModelRecommendations();else $('#model-recommendations').innerHTML='<p class="muted">Hardware profile ready. Load the WebLLM catalog to rank actual models.</p>';
  return p;
}
function renderModelRecommendations(){
  if(!state.hardwareProfile){$('#model-recommendations').innerHTML='<p class="muted">Analyze hardware first.</p>';return}
  if(!state.modelCatalog.length){$('#model-recommendations').innerHTML='<p class="muted">Load the WebLLM catalog first.</p>';return}
  const ranked=recommendModels(state.modelCatalog,state.hardwareProfile,{workload:$('#model-workload')?.value||'balanced'}).slice(0,8);
  $('#model-recommendations').innerHTML=`<div class="notice"><strong>Important:</strong> browsers usually do not expose dedicated GPU-memory totals. Recommendations are conservative unless you enter known VRAM; final compatibility is verified only when a model actually loads.</div>`+ranked.map((m,i)=>`<div class="model-rec ${m.verdict}"><div><strong>${i+1}. ${escapeHTML(m.id)}</strong><small>${m.vramMB?`${Math.round(m.vramMB)} MB declared VRAM · `:''}${escapeHTML(m.reasons.slice(0,3).join(' · '))}</small></div><span class="fit-badge">${m.score}/100</span><button class="secondary tiny" data-model-pick="${escapeHTML(m.id)}">Choose</button></div>`).join('');
  $$('[data-model-pick]').forEach(b=>b.onclick=()=>{const sel=$('#webllm-model');sel.value=b.dataset.modelPick;sel.dispatchEvent(new Event('change'));toast('Model selected; loading remains manual')});
}
async function recommendHardwareModels(){if(!state.hardwareProfile)await analyzeHardware();if(!state.modelCatalog.length)await setupWebLLM();renderModelRecommendations()}

async function loadSelectedModel(){const id=$('#webllm-model').value;if(!id)return;$('#load-webllm').disabled=true;$('#model-status').textContent=`Loading ${id}…`;try{await initEngine(id,p=>{const frac=Math.max(0,Math.min(1,p.progress??0));$('#model-progress').style.width=(frac*100)+'%';$('#model-status').textContent=p.text||`Loading ${(frac*100).toFixed(1)}%`});$('#run-ai').disabled=false;$('#unload-webllm').disabled=false;$('#model-status').textContent=`Ready: ${id}`;updateHudStatus();toast('Local model ready')}catch(e){$('#model-status').textContent=`Model load failed: ${e.message}`}finally{$('#load-webllm').disabled=false}}
async function runLocalAI(){const base=$('#prompt-output').value.trim()||generatePrompt();const mode=$('#ai-mode').value,instruction=$('#ai-instruction').value,resumable=$('#resumable-ai').checked;$('#run-ai').disabled=true;$('#stop-ai').disabled=false;$('#ai-output').textContent='';try{if(mode!=='three'){await generate({prompt:stagePrompt(mode,base,instruction),resumable,onToken:(_,full)=>$('#ai-output').textContent=full});}else{const stages=[['fusion','ARCHITECT'],['redteam','RED-TEAM'],['critic','INTEGRATOR']];let current=base,all='';for(const [m,label] of stages){all+=`\n\n===== ${label} =====\n`;$('#ai-output').textContent=all;const result=await generate({prompt:stagePrompt(m,current,instruction),resumable,onToken:(_,full)=>$('#ai-output').textContent=all+full,maxTokens:900});all+=result.text;current=result.text}$('#ai-output').textContent=all;}toast('Local AI chain complete')}catch(e){if(e.name==='AbortError')toast('Generation stopped');else{$('#ai-output').textContent+=`\n\n[Error] ${e.message}`;toast('AI generation error')}}finally{$('#run-ai').disabled=false;$('#stop-ai').disabled=true}}

async function joinRoom(){const id=$('#room-id').value.trim(),password=$('#room-password').value;if(!id){toast('Enter a room ID');return}$('#join-room').disabled=true;$('#room-status').textContent='Connecting…';try{const info=await joinP2PRoom({roomId:id,password,onPeerJoin:peer=>{state.peers.add(peer);renderPeers();logRoom(`Peer joined: ${peer.slice(0,10)}…`,true)},onPeerLeave:peer=>{state.peers.delete(peer);renderPeers();logRoom(`Peer left: ${peer.slice(0,10)}…`,true)},onMessage:data=>logRoom(data.system?data.text:`${data.name||data.peerId?.slice(0,8)||'Peer'}: ${data.text}`,!!data.system)});$('#room-status').textContent=`Joined “${id}” · self ${info.selfId.slice(0,10)}… · Trystero ${info.version}`;$('#leave-room').disabled=false;$('#send-room').disabled=false;logRoom('Joined decentralized room. Open the same deployed page in another browser/device to test peer messaging.',true)}catch(e){$('#room-status').textContent=`Connection failed: ${e.message}`;$('#join-room').disabled=false}}
function leaveRoom(){leaveP2PRoom();state.peers.clear();renderPeers();$('#join-room').disabled=false;$('#leave-room').disabled=true;$('#send-room').disabled=true;$('#room-status').textContent='Not connected.';logRoom('Left room.',true)}
function renderPeers(){$('#peer-list').innerHTML=state.peers.size?[...state.peers].map(p=>`<span class="chip">peer ${escapeHTML(p.slice(0,8))}</span>`).join(''):'<span class="muted">No remote peers yet.</span>'}
function logRoom(text,system=false){const d=document.createElement('div');d.className='chat-msg';d.innerHTML=`<small>${new Date().toLocaleTimeString()}${system?' · system':''}</small><div>${escapeHTML(text)}</div>`;$('#room-log').append(d);$('#room-log').scrollTop=$('#room-log').scrollHeight}
function sendRoom(){const text=$('#room-message').value.trim();if(!text)return;const name=$('#display-name').value.trim()||'Explorer';try{sendP2P({name,text,ts:Date.now()});logRoom(`${name} (you): ${text}`);$('#room-message').value=''}catch(e){toast(e.message)}}

function globalSearch(q){q=q.trim().toLowerCase();if(!q){$('#global-results').innerHTML='';return}const routeHits=ROUTES.filter(r=>r.label.toLowerCase().includes(q)).map(r=>({href:'#'+r.id,name:r.label,detail:'Workspace route'}));const featureHits=FEATURES.filter(f=>[f.name,f.summary,f.categoryTitle,...f.tags].join(' ').toLowerCase().includes(q)).slice(0,18).map(f=>({href:'#library',name:f.name,detail:f.summary,feature:f.id}));$('#global-results').innerHTML=[...routeHits,...featureHits].map(h=>`<a class="global-hit" href="${h.href}" ${h.feature?`data-global-feature="${h.feature}"`:''}><strong>${escapeHTML(h.name)}</strong><small>${escapeHTML(h.detail)}</small></a>`).join('')||'<p>No matches.</p>';$$('[data-global-feature]').forEach(a=>a.onclick=()=>{$('#feature-search').value=FEATURES.find(f=>f.id===a.dataset.globalFeature)?.name||'';renderFeatures();closeSearch()});$$('#global-results a:not([data-global-feature])').forEach(a=>a.onclick=closeSearch)}
function openSearch(){$('#search-modal').hidden=false;setTimeout(()=>$('#global-search').focus(),10)}function closeSearch(){$('#search-modal').hidden=true}

function bindEvents(){
  ['feature-search','category-filter','maturity-filter','selected-only'].forEach(id=>$('#'+id).addEventListener('input',renderFeatures));
  $('#expand-visible').onclick=()=>$$('#feature-list details').forEach(d=>d.open=true);$('#collapse-visible').onclick=()=>$$('#feature-list details').forEach(d=>d.open=false);
  $('#select-visible').onclick=()=>{FEATURES.filter(featureMatches).forEach(f=>state.selected.add(f.id));persistSelections();renderFeatures()};$('#clear-selected').onclick=()=>{state.selected.clear();persistSelections();renderFeatures()};
  $$('.preset').forEach(b=>b.onclick=()=>{const names=PRESETS[b.dataset.preset]||[];state.selected.clear();names.forEach(n=>{const f=featureByName(n);if(f)state.selected.add(f.id)});persistSelections();renderFeatures();toast(`${b.textContent} preset applied`)});
  $('#analyze-project').onclick=runDiscovery;$('#use-prompt-context').onclick=usePromptContextForDiscovery;$('#apply-discovery-core').onclick=()=>applyDiscovery('core');$('#apply-discovery-all').onclick=()=>applyDiscovery('all');$('#discovery-to-prompt').onclick=sendDiscoveryToPrompt;['discovery-depth','discovery-strategy','discovery-focus','discovery-safeguards','discovery-synergies'].forEach(id=>$('#'+id)?.addEventListener('change',()=>{if(currentDiscoveryBrief())runDiscovery()}));
  $$('#chain-options input').forEach(x=>x.onchange=renderChainPreview);$('#generate-prompt').onclick=()=>{generatePrompt();toast('Fusion prompt generated')};$('#copy-prompt').onclick=async()=>{const text=$('#prompt-output').value||generatePrompt();await copyText(text);toast('Prompt copied')};$('#download-prompt').onclick=()=>download('feature-fusion-build-prompt.md',$('#prompt-output').value||generatePrompt(),'text/markdown');
  $('#generate-concise').onclick=()=>{generateConcisePrompt();toast('Comma-only prompt generated')};$('#copy-concise').onclick=async()=>{const text=generateConcisePrompt();if(!text){toast('Select or enter at least one feature');return}await copyText(text);toast('Compact prompt copied')};$('#select-concise-source').onclick=()=>location.hash='library';['concise-budget','concise-custom','concise-synergies'].forEach(id=>$('#'+id).addEventListener(id==='concise-custom'?'input':'change',generateConcisePrompt));
  $('#theme-toggle').onclick=()=>{state.theme=state.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=state.theme;safeLocalSet('fusion-theme',state.theme);setValue('theme',state.theme)};$('#motion-toggle').onclick=()=>{state.reduceMotion=!state.reduceMotion;document.documentElement.classList.toggle('reduce-motion',state.reduceMotion);setValue('reduceMotion',state.reduceMotion);toast(`Motion ${state.reduceMotion?'reduced':'enabled'}`)};
  $('#drawer-toggle').onclick=()=>{const open=$('#side').classList.toggle('open');$('#right-hud').classList.remove('open');$('#drawer-toggle').setAttribute('aria-expanded',String(open));$('#right-drawer-toggle').setAttribute('aria-expanded','false')};$('#right-drawer-toggle').onclick=()=>{const open=$('#right-hud').classList.toggle('open');$('#side').classList.remove('open');$('#right-drawer-toggle').setAttribute('aria-expanded',String(open));$('#drawer-toggle').setAttribute('aria-expanded','false')};document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeEdgeDrawers();closeSearch()}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch()}});
  $('#export-state').onclick=exportWorkspace;$('#import-state').onchange=async e=>{try{if(e.target.files[0])await importWorkspace(e.target.files[0])}catch(err){toast(`Import failed: ${err.message}`)}e.target.value=''};
  $('#hash-button').onclick=hashSelectedFile;$('#rerun-tests').onclick=refreshCapabilities;
  $('#load-models').onclick=setupWebLLM;$('#analyze-hardware').onclick=analyzeHardware;$('#recommend-models').onclick=recommendHardwareModels;$('#model-workload').onchange=()=>{if(state.hardwareProfile&&state.modelCatalog.length)renderModelRecommendations()};$('#known-vram').onchange=()=>{if(state.hardwareProfile)analyzeHardware()};$('#load-webllm').onclick=loadSelectedModel;$('#unload-webllm').onclick=async()=>{await unloadEngine();$('#run-ai').disabled=true;$('#unload-webllm').disabled=true;$('#model-progress').style.width='0';$('#model-status').textContent='Engine unloaded.';updateHudStatus()};$('#run-ai').onclick=runLocalAI;$('#stop-ai').onclick=stopGeneration;
  $('#join-room').onclick=joinRoom;$('#leave-room').onclick=leaveRoom;$('#send-room').onclick=sendRoom;$('#room-message').addEventListener('keydown',e=>{if(e.key==='Enter'&&(e.ctrlKey||e.metaKey))sendRoom()});
  $('#global-search-button').onclick=openSearch;$('#search-close').onclick=closeSearch;$('#search-modal').onclick=e=>{if(e.target===$('#search-modal'))closeSearch()};$('#global-search').oninput=e=>globalSearch(e.target.value);
  window.addEventListener('beforeunload',()=>{try{leaveP2PRoom()}catch{}});
}

init().catch(err=>{console.error(err);splashController.fail(err);document.body.insertAdjacentHTML('afterbegin',`<div class="noscript">Startup error: ${escapeHTML(err.message)} · The workspace was opened in recovery mode.</div>`)})
