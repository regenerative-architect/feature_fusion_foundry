export const WEBLLM_RUNTIMES={
  latest:{version:'0.2.85',label:'0.2.85 · current',worker:'./js/webllm-worker.js'},
  compatibility:{version:'0.2.82',label:'0.2.82 · compatibility fallback',worker:'./js/webllm-worker-0.2.82.js'}
};
let activeRuntime='latest';
const apis=new Map();
let api=null,engine=null,worker=null,abortController=null,currentModel=null,currentMode=null;
let gpuSessionFaulted=false,lastError=null,lastModelRecord=null,lastUnloadAt=0;
const diagnosticEvents=[];
const MAX_EVENTS=160;
const now=()=>new Date().toISOString();
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const runtime=()=>WEBLLM_RUNTIMES[activeRuntime]||WEBLLM_RUNTIMES.latest;
const cdn=v=>`https://esm.run/@mlc-ai/web-llm@${v}`;

function record(type,message,data=null){diagnosticEvents.push({ts:now(),type,message,data});if(diagnosticEvents.length>MAX_EVENTS)diagnosticEvents.splice(0,diagnosticEvents.length-MAX_EVENTS)}
function safeObject(value,depth=0){
  if(depth>3)return '[depth-limit]';
  if(value==null||['string','number','boolean'].includes(typeof value))return value;
  if(typeof value==='function')return `[function ${value.name||'anonymous'}]`;
  if(Array.isArray(value))return value.slice(0,30).map(x=>safeObject(x,depth+1));
  const out={};
  try{for(const key of Object.getOwnPropertyNames(value).slice(0,40)){try{out[key]=safeObject(value[key],depth+1)}catch{out[key]='[unreadable]'}}}catch{}
  return out;
}
export function serializeWebLLMError(error){
  if(error==null)return {name:'UnknownError',message:'No error object was supplied.',string:'undefined',raw:null};
  if(typeof error==='string')return {name:'Error',message:error,string:error,raw:error};
  const name=String(error.name||error.constructor?.name||'Error');
  const message=String(error.message??error.reason?.message??error.error?.message??'').trim();
  let string='';try{string=String(error)}catch{string='[unstringifiable error]'}
  const stack=typeof error.stack==='string'?error.stack:'';
  const cause=error.cause?safeObject(error.cause):null;
  const raw=safeObject(error);
  return {name,message:message||string||'Unknown WebLLM error',string,stack,cause,raw};
}
export function classifyWebLLMError(error){
  const e=serializeWebLLMError(error);const text=[e.name,e.message,e.string,e.stack,JSON.stringify(e.raw||{})].join(' ');
  let code='webllm-error',severity='error',fatalGPU=false,title='WebLLM operation failed',advice=['Review the diagnostic report and try a smaller model or shorter context.'];
  if(/DXGI_ERROR_DEVICE_REMOVED|0x887A0005/i.test(text)){code='gpu-device-removed';severity='fatal';fatalGPU=true;title='Windows GPU device removed';advice=['Stop retrying in the current GPU session.','Fully restart the browser if WebGPU remains unavailable; a page refresh may not be sufficient after a D3D12 device removal.','Try a smaller model and/or lower context window.','If using WebLLM 0.2.83+ and this signature repeats, try the optional 0.2.82 compatibility runtime.'];}
  else if(/DXGI_ERROR_DEVICE_HUNG|0x887A0006/i.test(text)){code='gpu-device-hung';severity='fatal';fatalGPU=true;title='Windows GPU device hung';advice=['Stop generation and avoid immediate reload loops.','Fully restart the browser if WebGPU remains unavailable.','Try a smaller model/lower context window.','Consider the 0.2.82 compatibility runtime for this specific regression signature.'];}
  else if(/DeviceLostError|device was lost|GPUDeviceLostInfo|device lost/i.test(text)){code='gpu-device-lost';severity='fatal';fatalGPU=true;title='WebGPU device lost';advice=['Unload the AI session and preserve project state.','Recreate the GPU device only after recovery; use a smaller model if memory pressure is plausible.'];}
  else if(/out of memory|\bOOM\b|insufficient memory|allocation/i.test(text)){code='gpu-memory-pressure';severity='high';title='GPU memory pressure';advice=['Choose a lower-VRAM model.','Lower the context-window cap.','Close other GPU-heavy tabs/apps before retrying.'];}
  else if(/shader-f16|FeatureSupportError|required feature|missing WebGPU feature/i.test(text)){code='gpu-feature-missing';severity='high';title='Required WebGPU feature unavailable';advice=['Choose a model without the missing feature requirement.','Use the hardware advisor to filter the live catalog.'];}
  else if(/requestDevice/i.test(text)){code='gpu-request-device-failed';severity='high';title='WebGPU requestDevice failed';advice=['Run the WebGPU diagnostic probe.','If this follows a device-lost/removed event, restart the browser before retrying.'];}
  else if(/WebGPU.*unavailable|Cannot find WebGPU|WebGPUNotAvailable/i.test(text)){code='webgpu-unavailable';severity='high';title='WebGPU unavailable';advice=['Use the deterministic meta-planner instead of WebLLM.','Verify browser/OS WebGPU support and hardware acceleration.'];}
  else if(/worker|postMessage|message port|module script|SecurityError|NetworkError/i.test(text)){code='worker-runtime-failure';severity='medium';title='WebLLM worker/runtime failure';advice=['The app can try main-thread WebLLM only when the error is not a GPU fault.','Check network/CSP/module loading in the diagnostic report.'];}
  else if(/undefined|Unknown WebLLM error|\[object Object\]/i.test(text)){code='opaque-webllm-error';severity='medium';title='Opaque WebLLM error';advice=['Use the structured diagnostic report: it records raw enumerable fields, stack/cause where available, model/runtime and the last progress event.'];}
  return {...e,code,severity,fatalGPU,title,advice};
}
function noteError(error,operation){const c=classifyWebLLMError(error);lastError={...c,operation,ts:now()};if(c.fatalGPU)gpuSessionFaulted=true;record('error',`${operation}: ${c.title}`,lastError);return c}
function shouldMainThreadFallback(error){const c=classifyWebLLMError(error);if(c.fatalGPU)return false;if(/^gpu-/.test(c.code)||c.code==='webgpu-unavailable')return false;return c.code==='worker-runtime-failure'||/Worker|worker|SecurityError|NetworkError/i.test(c.message+' '+c.string)}
async function loadAPI(){const v=runtime().version;if(apis.has(v)){api=apis.get(v);return api}record('runtime',`Importing WebLLM ${v}`);api=await import(cdn(v));apis.set(v,api);return api}

export function getWebLLMVersion(){return runtime().version}
export function getWebLLMRuntime(){return {key:activeRuntime,...runtime()}}
export function setWebLLMRuntime(key){if(!WEBLLM_RUNTIMES[key])throw new Error(`Unsupported WebLLM runtime: ${key}`);if(engine)throw new Error('Unload the current model before changing WebLLM runtime.');activeRuntime=key;api=apis.get(runtime().version)||null;lastModelRecord=null;record('runtime',`Runtime selected: ${runtime().label}`);return getWebLLMRuntime()}
export async function loadCatalog(){const a=await loadAPI();const list=a.prebuiltAppConfig.model_list.map(m=>({id:m.model_id,label:m.model_id,record:m}));record('catalog',`Loaded ${list.length} model records from WebLLM ${runtime().version}`);return list;}

export async function inspectHardware({knownVramGB=0}={}){
  const profile={webgpu:!!navigator.gpu,deviceMemoryGB:Number(navigator.deviceMemory)||null,logicalCores:Number(navigator.hardwareConcurrency)||null,knownVramGB:Number(knownVramGB)||null,adapterInfo:null,limits:{},features:[],wgslFeatures:[]};
  if(!navigator.gpu)return profile;
  try{
    try{profile.wgslFeatures=[...(navigator.gpu.wgslLanguageFeatures||[])]}catch{}
    const adapter=await navigator.gpu.requestAdapter({powerPreference:'high-performance'});
    if(!adapter)return profile;
    try{const info=adapter.info||await adapter.requestAdapterInfo?.();if(info)profile.adapterInfo={vendor:info.vendor||'',architecture:info.architecture||'',device:info.device||'',description:info.description||''}}catch{}
    for(const k of ['maxStorageBufferBindingSize','maxBufferSize','maxComputeWorkgroupStorageSize','maxComputeInvocationsPerWorkgroup','maxBindingsPerBindGroup']){try{profile.limits[k]=Number(adapter.limits?.[k])||null}catch{}}
    try{profile.features=[...adapter.features]}catch{}
  }catch(e){noteError(e,'inspect-hardware')}
  return profile;
}

export function recommendModels(models,profile,{workload='balanced'}={}){
  const knownMB=profile?.knownVramGB?profile.knownVramGB*1024:null;const deviceMB=profile?.deviceMemoryGB?profile.deviceMemoryGB*1024:null;
  const softBudget=knownMB||(deviceMB?Math.max(900,Math.min(6500,deviceMB*.45)):null);const pref={fast:.72,balanced:.92,quality:1.18}[workload]||.92;
  return models.map(m=>{const r=m.record||{};const vram=Number(r.vram_required_MB)||null;const buffer=Number(r.buffer_size_required_bytes)||null;const required=Array.isArray(r.required_features)?r.required_features:[];const missingFeatures=required.filter(x=>!(profile?.features||[]).includes(x));const bufferOK=!buffer||!profile?.limits?.maxStorageBufferBindingSize||buffer<=profile.limits.maxStorageBufferBindingSize;let score=100;const reasons=[];if(!profile?.webgpu){score=0;reasons.push('WebGPU unavailable')}if(missingFeatures.length){score-=55;reasons.push(`missing WebGPU feature: ${missingFeatures.join(', ')}`)}if(!bufferOK){score-=55;reasons.push('required storage-buffer limit exceeds adapter limit')}if(vram&&softBudget){const ratio=vram/(softBudget*pref);if(ratio<=.65){score+=8;reasons.push('comfortable memory tier')}else if(ratio<=1){reasons.push('within estimated memory tier')}else if(ratio<=1.35){score-=24;reasons.push('memory may be tight')}else{score-=48;reasons.push('likely too large for estimated memory tier')}}else if(vram)reasons.push(`${Math.round(vram)} MB model VRAM requirement; browser GPU-memory total unknown`);if(r.low_resource_required){score+=6;reasons.push('marked low-resource compatible by WebLLM')}const id=String(m.id);if(workload==='fast'&&/(360M|0\.5B|1B|1\.5B|2B|3B)/i.test(id))score+=8;if(workload==='quality'&&/(7B|8B|9B)/i.test(id))score+=8;score=Math.max(0,Math.min(100,Math.round(score)));const verdict=score>=82?'recommended':score>=62?'plausible':score>=40?'caution':'avoid';return {...m,score,verdict,vramMB:vram,missingFeatures,bufferOK,reasons}}).sort((a,b)=>b.score-a.score||(a.vramMB||1e9)-(b.vramMB||1e9));
}

export async function initEngine(modelId,onProgress=()=>{},options={}){
  if(!navigator.gpu)throw new Error('WebGPU unavailable in this browser.');
  if(gpuSessionFaulted){const e=new Error('GPU session is marked faulted after a device-loss/removal event. Run diagnostics or restart the browser before loading another model.');e.name='GPURecoveryRequired';throw e;}
  if(options.runtimeKey&&options.runtimeKey!==activeRuntime)setWebLLMRuntime(options.runtimeKey);
  const a=await loadAPI();if(engine)await unloadEngine({cooldown:true});
  if(Date.now()-lastUnloadAt<750)await sleep(750-(Date.now()-lastUnloadAt));
  const catalog=a.prebuiltAppConfig?.model_list||[];lastModelRecord=catalog.find(m=>m.model_id===modelId)||null;
  const contextWindow=Number(options.contextWindow)||0;const chatOpts=contextWindow?{context_window_size:contextWindow}:undefined;
  const progress=p=>{record('progress',p?.text||'WebLLM progress',{progress:p?.progress??null});onProgress(p||{})};
  record('load-start',`Loading ${modelId}`,{runtime:runtime().version,contextWindow:contextWindow||'model-default'});
  try{
    worker=new Worker(new URL(runtime().worker,document.baseURI),{type:'module'});currentMode='worker';
    try{engine=await a.CreateWebWorkerMLCEngine(worker,modelId,{initProgressCallback:progress},chatOpts);}
    catch(workerError){
      const classified=noteError(workerError,'worker-model-load');
      try{worker?.terminate()}catch{};worker=null;engine=null;
      if(!shouldMainThreadFallback(workerError)||options.allowMainThreadFallback===false)throw workerError;
      progress({progress:0,text:'Worker transport failed; trying main-thread WebLLM fallback…'});currentMode='main-thread';
      if(!a.CreateMLCEngine)throw workerError;
      engine=await a.CreateMLCEngine(modelId,{initProgressCallback:progress},chatOpts);
      record('fallback','Worker failed; main-thread engine initialized',{workerError:classified.code});
    }
    currentModel=modelId;lastError=null;record('load-ready',`Ready: ${modelId}`,{mode:currentMode,runtime:runtime().version});return engine;
  }catch(e){
    noteError(e,'model-load');try{worker?.terminate()}catch{};worker=null;engine=null;currentModel=null;currentMode=null;throw e;
  }
}

export async function unloadEngine({cooldown=true}={}){
  record('unload','Unload requested',{model:currentModel,mode:currentMode});
  let unloadError=null;
  try{if(engine?.unload)await engine.unload()}catch(e){unloadError=noteError(e,'engine-unload')}
  try{worker?.terminate()}catch(e){record('warning','Worker termination warning',serializeWebLLMError(e))}
  engine=null;worker=null;currentModel=null;currentMode=null;lastUnloadAt=Date.now();abortController?.abort();abortController=null;
  if(cooldown)await sleep(650);
  record('unload','Engine references cleared');
  return unloadError;
}
export async function resetAISession({clearFault=true,cooldownMs=1200}={}){await unloadEngine({cooldown:false});await sleep(cooldownMs);if(clearFault)gpuSessionFaulted=false;lastError=null;record('recovery',`AI session reset after ${cooldownMs} ms cooldown`);return engineInfo()}
export function engineInfo(){return {loaded:!!engine,model:currentModel,version:runtime().version,runtimeKey:activeRuntime,mode:currentMode,gpuSessionFaulted,lastError:lastError?{code:lastError.code,title:lastError.title,ts:lastError.ts}:null}}
export function stopGeneration(){try{engine?.interruptGenerate?.()}catch(e){noteError(e,'interrupt-generation')}abortController?.abort();abortController=null;record('generation','Generation stop requested')}
export async function generate({prompt,onToken=()=>{},resumable=false,maxTokens=1200,temperature=.25}){
  if(!engine)throw new Error('Load a WebLLM model first.');if(gpuSessionFaulted)throw new Error('GPU session is faulted; use deterministic planning until the GPU session is recovered.');
  abortController=new AbortController();const sessionId=crypto.randomUUID();const options={messages:[{role:'system',content:'You are a precise systems architect. Return concrete, implementation-oriented output and distinguish requirements from optional enhancements.'},{role:'user',content:prompt}],stream:true,max_tokens:maxTokens,temperature};if(resumable)options.extra_body={resumable:{enabled:true,sessionId,strictPersistence:false}};let text='';record('generation','Generation started',{promptChars:String(prompt||'').length,maxTokens,resumable});
  try{const chunks=await engine.chat.completions.create(options);for await(const chunk of chunks){if(abortController.signal.aborted)throw new DOMException('Generation stopped','AbortError');const delta=chunk.choices?.[0]?.delta?.content||'';text+=delta;onToken(delta,text)}record('generation','Generation complete',{outputChars:text.length});return {text,sessionId:resumable?sessionId:null};}
  catch(e){noteError(e,'generation');throw e}finally{abortController=null}
}

export async function runWebGPUDiagnostic({requestDevice=true}={}){
  const report={ts:now(),secureContext:globalThis.isSecureContext,protocol:location.protocol,userAgent:navigator.userAgent,webgpu:!!navigator.gpu,runtime:getWebLLMRuntime(),engine:engineInfo(),adapter:null,deviceProbe:null};
  if(!navigator.gpu){report.deviceProbe={ok:false,error:'navigator.gpu unavailable'};record('diagnostic','WebGPU diagnostic: navigator.gpu unavailable');return report}
  try{
    const adapter=await navigator.gpu.requestAdapter({powerPreference:'high-performance'});if(!adapter){report.deviceProbe={ok:false,error:'requestAdapter returned null'};return report}
    let info={};try{info=adapter.info||await adapter.requestAdapterInfo?.()||{}}catch{}
    report.adapter={info:safeObject(info),features:[...adapter.features],limits:{maxStorageBufferBindingSize:Number(adapter.limits?.maxStorageBufferBindingSize)||null,maxBufferSize:Number(adapter.limits?.maxBufferSize)||null,maxComputeWorkgroupStorageSize:Number(adapter.limits?.maxComputeWorkgroupStorageSize)||null}};
    if(requestDevice){
      try{const device=await adapter.requestDevice();const probe={ok:true,lost:null,uncaptured:[]};report.deviceProbe=probe;device.addEventListener?.('uncapturederror',ev=>{probe.uncaptured.push(serializeWebLLMError(ev.error||ev));record('gpu-error','Uncaptured WebGPU error',probe.uncaptured.at(-1))});device.lost.then(info=>{probe.lost={reason:info.reason,message:info.message};record('gpu-lost','Diagnostic GPU device lost',probe.lost)});await sleep(60);try{device.destroy()}catch{};}
      catch(e){const c=noteError(e,'diagnostic-requestDevice');report.deviceProbe={ok:false,error:c};}
    }
  }catch(e){report.adapterError=noteError(e,'diagnostic-requestAdapter')}
  record('diagnostic','WebGPU diagnostic completed',{deviceProbe:report.deviceProbe?.ok??false});return report;
}
export function getWebLLMDiagnostics(extra={}){return {generatedAt:now(),runtime:getWebLLMRuntime(),engine:engineInfo(),selectedModelRecord:lastModelRecord?safeObject(lastModelRecord):null,lastError,events:[...diagnosticEvents],environment:{secureContext:globalThis.isSecureContext,protocol:location.protocol,online:navigator.onLine,userAgent:navigator.userAgent,deviceMemoryGB:Number(navigator.deviceMemory)||null,logicalCores:Number(navigator.hardwareConcurrency)||null,webgpu:!!navigator.gpu},...extra}}
export function clearWebLLMDiagnostics(){diagnosticEvents.length=0;lastError=null;record('diagnostic','Diagnostic log cleared')}
