import {FEATURES,SYNERGIES} from '../js/features.js';
import {analyzeProject} from '../js/modules/discovery.js';
let fail=0;
const visual=analyzeProject({
  brief:'advanced visual implementations, cinematic animated HUD, 3D globe, particles, shader effects, parallax, fluid motion, galaxy clusters, transitions, photorealistic rendering',
  features:FEATURES,synergies:SYNERGIES,limit:20,includeSafeguards:true,expandSynergies:true,strategy:'precise'
});
const top=visual.recommendations.slice(0,15).map(x=>x.feature.name);
const topCats=new Set(visual.recommendations.slice(0,15).map(x=>x.feature.category));
const bannedPrimary=['Accessibility tests','Semantic landmark architecture','Audit log','Rate limiting'];
if(visual.primaryIntents?.[0]?.id!=='visual'){console.error('FAIL primary visual intent',visual.primaryIntents);fail++;}
if(!top.some(n=>/shader|animation|render|particle|parallax|scene|camera|visual/i.test(n))){console.error('FAIL no visual primitives in top results',top);fail++;}
if(bannedPrimary.some(n=>top.includes(n))){console.error('FAIL generic safeguard leaked into primary visual results',top);fail++;}
if(!visual.supporting.some(x=>x.feature.name==='Reduced motion')){console.error('FAIL visual supporting constraint missing');fail++;}
if(!visual.plan?.length){console.error('FAIL deterministic plan missing');fail++;}
console.log('Primary intent:',visual.primaryIntents.map(x=>x.label).join(', '));
console.log('Top visual recommendations:',top.join(', '));
console.log('Top categories:',[...topCats].join(', '));
console.log('Supporting:',visual.supporting.map(x=>x.feature.name).join(', '));
console.log('Suppressed:',visual.diagnostics.suppressed);
process.exitCode=fail?1:0;
