import fs from 'node:fs';
const root=new URL('../',import.meta.url);
const required=['index.html','assets/styles.css','js/app.js','js/features.js','js/modules/storage.js','js/modules/capabilities.js','js/modules/prompts.js','js/modules/webllm.js','js/modules/p2p.js','sw.js','manifest.webmanifest','docs/CHAT_COMPENDIUM.md'];
let fail=0;
for(const file of required){const p=new URL(file,root);if(!fs.existsSync(p)){console.error('MISSING',file);fail++}else console.log('OK',file)}
const html=fs.readFileSync(new URL('index.html',root),'utf8');
for(const id of ['feature-list','archetype-matrix','prompt-output','webllm-model','room-id','capability-grid']){if(!html.includes(`id="${id}"`)){console.error('MISSING UI ID',id);fail++}}
const data=fs.readFileSync(new URL('js/features.js',root),'utf8');const count=(data.match(/"id": "f\d+"/g)||[]).length;console.log('Feature records:',count);if(count<350)fail++;
process.exitCode=fail?1:0;
