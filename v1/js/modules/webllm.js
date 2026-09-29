const VERSION='0.2.85';
const CDN=`https://esm.run/@mlc-ai/web-llm@${VERSION}`;
let api=null,engine=null,worker=null,abortController=null,currentModel=null;
export function getWebLLMVersion(){return VERSION}
export async function loadCatalog(){api=api||await import(CDN);return api.prebuiltAppConfig.model_list.map(m=>({id:m.model_id,label:m.model_id,record:m}));}
export async function initEngine(modelId,onProgress=()=>{}){
  if(!navigator.gpu) throw new Error('WebGPU unavailable in this browser.');
  api=api||await import(CDN);
  if(engine) await unloadEngine();
  worker=new Worker(new URL('../webllm-worker.js',import.meta.url),{type:'module'});
  engine=await api.CreateWebWorkerMLCEngine(worker,modelId,{initProgressCallback:onProgress});
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
