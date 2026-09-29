const VERSION='0.2.85';
const CDN=`https://esm.run/@mlc-ai/web-llm@${VERSION}`;
let api=null,engine=null,worker=null,abortController=null,currentModel=null;
export function getWebLLMVersion(){return VERSION}
export async function loadCatalog(){api=api||await import(CDN);return api.prebuiltAppConfig.model_list.map(m=>({id:m.model_id,label:m.model_id,record:m}));}

export async function inspectHardware({knownVramGB=0}={}){
  const profile={webgpu:!!navigator.gpu,deviceMemoryGB:Number(navigator.deviceMemory)||null,logicalCores:Number(navigator.hardwareConcurrency)||null,knownVramGB:Number(knownVramGB)||null,adapterInfo:null,limits:{},features:[]};
  if(!navigator.gpu)return profile;
  try{
    const adapter=await navigator.gpu.requestAdapter({powerPreference:'high-performance'});
    if(!adapter)return profile;
    try{const info=adapter.info||await adapter.requestAdapterInfo?.();if(info)profile.adapterInfo={vendor:info.vendor||'',architecture:info.architecture||'',device:info.device||'',description:info.description||''}}catch{}
    for(const k of ['maxStorageBufferBindingSize','maxBufferSize','maxComputeWorkgroupStorageSize','maxComputeInvocationsPerWorkgroup']){try{profile.limits[k]=Number(adapter.limits?.[k])||null}catch{}}
    try{profile.features=[...adapter.features]}catch{}
  }catch{}
  return profile;
}

export function recommendModels(models,profile,{workload='balanced'}={}){
  const knownMB=profile?.knownVramGB?profile.knownVramGB*1024:null;
  const deviceMB=profile?.deviceMemoryGB?profile.deviceMemoryGB*1024:null;
  // Browsers generally do not expose usable dedicated GPU-memory totals. If users do not provide VRAM,
  // this is only a conservative ranking signal, not a compatibility guarantee.
  const softBudget=knownMB||(deviceMB?Math.max(900,Math.min(6500,deviceMB*.45)):null);
  const pref={fast:0.72,balanced:0.92,quality:1.18}[workload]||.92;
  return models.map(m=>{
    const r=m.record||{};const vram=Number(r.vram_required_MB)||null;const buffer=Number(r.buffer_size_required_bytes)||null;const required=Array.isArray(r.required_features)?r.required_features:[];
    const missingFeatures=required.filter(x=>!(profile?.features||[]).includes(x));
    const bufferOK=!buffer||!profile?.limits?.maxStorageBufferBindingSize||buffer<=profile.limits.maxStorageBufferBindingSize;
    let score=100;const reasons=[];
    if(!profile?.webgpu){score=0;reasons.push('WebGPU unavailable')}
    if(missingFeatures.length){score-=55;reasons.push(`missing WebGPU feature: ${missingFeatures.join(', ')}`)}
    if(!bufferOK){score-=55;reasons.push('required storage-buffer limit exceeds adapter limit')}
    if(vram&&softBudget){const ratio=vram/(softBudget*pref);if(ratio<=.65){score+=8;reasons.push('comfortable memory tier')}else if(ratio<=1){reasons.push('within estimated memory tier')}else if(ratio<=1.35){score-=24;reasons.push('memory may be tight')}else{score-=48;reasons.push('likely too large for estimated memory tier')}}
    else if(vram)reasons.push(`${Math.round(vram)} MB model VRAM requirement; browser GPU-memory total unknown`);
    if(r.low_resource_required){score+=6;reasons.push('marked low-resource compatible by WebLLM')}
    const id=String(m.id);if(workload==='fast'&&/(360M|0\.5B|1B|1\.5B|2B|3B)/i.test(id))score+=8;if(workload==='quality'&&/(7B|8B|9B)/i.test(id))score+=8;
    score=Math.max(0,Math.min(100,Math.round(score)));
    const verdict=score>=82?'recommended':score>=62?'plausible':score>=40?'caution':'avoid';
    return {...m,score,verdict,vramMB:vram,missingFeatures,bufferOK,reasons};
  }).sort((a,b)=>b.score-a.score||(a.vramMB||1e9)-(b.vramMB||1e9));
}
export async function initEngine(modelId,onProgress=()=>{}){
  if(!navigator.gpu) throw new Error('WebGPU unavailable in this browser.');
  api=api||await import(CDN);
  if(engine) await unloadEngine();
  try{worker=new Worker(new URL('./js/webllm-worker.js',document.baseURI),{type:'module'});engine=await api.CreateWebWorkerMLCEngine(worker,modelId,{initProgressCallback:onProgress});}
  catch(workerError){try{worker?.terminate()}catch{};worker=null;onProgress({progress:0,text:'Worker mode unavailable; trying main-thread WebLLM fallback…'});if(!api.CreateMLCEngine)throw workerError;engine=await api.CreateMLCEngine(modelId,{initProgressCallback:onProgress});}
  currentModel=modelId;return engine;
}
export async function unloadEngine(){try{if(engine?.unload) await engine.unload()}catch{};try{worker?.terminate()}catch{};engine=null;worker=null;currentModel=null;}
export function engineInfo(){return {loaded:!!engine,model:currentModel,version:VERSION}}
export function stopGeneration(){try{engine?.interruptGenerate?.()}catch{};abortController?.abort();abortController=null;}
export async function generate({prompt,onToken=()=>{},resumable=false,maxTokens=1200,temperature=.25}){
  if(!engine) throw new Error('Load a WebLLM model first.');
  abortController=new AbortController();
  const sessionId=crypto.randomUUID();
  const options={messages:[{role:'system',content:'You are a precise systems architect. Return concrete, implementation-oriented output and distinguish requirements from optional enhancements.'},{role:'user',content:prompt}],stream:true,max_tokens:maxTokens,temperature};
  if(resumable) options.extra_body={resumable:{enabled:true,sessionId,strictPersistence:false}};
  let text='';
  const chunks=await engine.chat.completions.create(options);
  for await (const chunk of chunks){if(abortController.signal.aborted) throw new DOMException('Generation stopped','AbortError');const delta=chunk.choices?.[0]?.delta?.content||'';text+=delta;onToken(delta,text)}
  abortController=null;return {text,sessionId:resumable?sessionId:null};
}
