import fs from 'node:fs';
const root=new URL('../',import.meta.url);
const required=['index.html','assets/styles.css','assets/earth-cosmic-splash.webp','js/app.bundle.js','js/app.js','js/features.js','js/modules/storage.js','js/modules/capabilities.js','js/modules/prompts.js','js/modules/webllm.js','js/modules/p2p.js','js/modules/discovery.js','sw.js','manifest.webmanifest','docs/CHAT_COMPENDIUM.md','docs/FEATURE_CATALOG.md','docs/ALL_FEATURE_NAMES_COMMA_ONLY.txt','docs/FOUNDRY_INTELLIGENCE.md'];
let fail=0;
for(const file of required){const p=new URL(file,root);if(!fs.existsSync(p)){console.error('MISSING',file);fail++}else console.log('OK',file)}
const html=fs.readFileSync(new URL('index.html',root),'utf8');
for(const id of ['feature-list','archetype-matrix','prompt-output','concise-output','right-hud','bottom-hud','webllm-model','room-id','capability-grid','splash','enter-app','splash-progress','discovery-brief','analyze-project','discovery-results','hardware-profile','model-recommendations','analyze-hardware','recommend-models','discovery-plan','discovery-supporting','discovery-strategy','discovery-focus','discovery-diagnostics']){if(!html.includes(`id="${id}"`)){console.error('MISSING UI ID',id);fail++}}
for(const marker of ['window.FusionSplash','hardTimer=setTimeout','is-closing','earth-cosmic-splash.webp']){const source=marker==='earth-cosmic-splash.webp'?fs.readFileSync(new URL('assets/styles.css',root),'utf8'):html;if(!source.includes(marker)){console.error('MISSING splash fail-safe marker',marker);fail++}}
const discovery=fs.readFileSync(new URL('js/modules/discovery.js',root),'utf8');for(const marker of ['analyzeProject','deterministic','negative relevance','capability lane','supporting']){if(!discovery.toLowerCase().includes(marker.toLowerCase())){console.error('MISSING discovery marker',marker);fail++;}}
const prompts=fs.readFileSync(new URL('js/modules/prompts.js',root),'utf8');if(!prompts.includes('buildConcisePrompt')){console.error('MISSING concise prompt builder');fail++}
const data=fs.readFileSync(new URL('js/features.js',root),'utf8');const count=(data.match(/"id": "f\d+"/g)||[]).length;console.log('Feature records:',count);if(count<900)fail++;
const staticCount=(html.match(/data-feature="f\d+"/g)||[]).length;console.log('Static feature cards:',staticCount);if(staticCount<900)fail++;
for(const marker of ['longDescription','implementation','fusion','risks','fallback']){if(!data.includes(marker)){console.error('MISSING rich field',marker);fail++;}}
process.exitCode=fail?1:0;
