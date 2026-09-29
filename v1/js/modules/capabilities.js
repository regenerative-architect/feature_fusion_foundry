export async function detectCapabilities(){
  const caps=[];
  const add=(id,label,supported,note='')=>caps.push({id,label,supported:!!supported,note});
  add('secure','Secure context',globalThis.isSecureContext,'Required by many advanced APIs. localhost also counts as secure.');
  add('idb','IndexedDB','indexedDB' in globalThis,'Structured local persistence.');
  add('sw','Service Worker','serviceWorker' in navigator,'PWA caching/background foundation.');
  add('worker','Web Worker','Worker' in globalThis,'Move expensive compute off the main thread.');
  add('sharedworker','SharedWorker','SharedWorker' in globalThis,'Share one worker across same-origin tabs.');
  add('broadcast','BroadcastChannel','BroadcastChannel' in globalThis,'Cross-tab/worker messaging.');
  add('locks','Web Locks',!!navigator.locks,'Coordinate exclusive resources across same-origin contexts.');
  add('webrtc','WebRTC','RTCPeerConnection' in globalThis,'Direct browser-to-browser media/data.');
  add('webtransport','WebTransport','WebTransport' in globalThis,'Emerging HTTP/3 realtime server transport.');
  add('webgpu','WebGPU',!!navigator.gpu,'Required by WebLLM local inference.');
  add('wasm','WebAssembly','WebAssembly' in globalThis,'High-performance portable compute.');
  add('opfs','OPFS',!!navigator.storage?.getDirectory,'Origin-private file storage.');
  add('fsaccess','File System Access','showOpenFilePicker' in globalThis,'Direct user-approved local file access.');
  add('webauthn','WebAuthn','PublicKeyCredential' in globalThis,'Passkeys/public-key authentication.');
  add('crypto','Web Crypto',!!globalThis.crypto?.subtle,'Hashes, signatures and encryption primitives.');
  add('compression','CompressionStream','CompressionStream' in globalThis,'Native streaming compression.');
  add('notifications','Notifications','Notification' in globalThis,'Permission-gated system notifications.');
  add('share','Web Share',!!navigator.share,'Native share sheet.');
  add('media','Media Devices',!!navigator.mediaDevices?.getUserMedia,'Camera/microphone with permission.');
  add('clipboard', 'Clipboard',!!navigator.clipboard,'Modern clipboard API.');
  add('offscreen','OffscreenCanvas','OffscreenCanvas' in globalThis,'Worker-based canvas rendering.');
  add('viewtransition','View Transitions','startViewTransition' in document,'Optional route/DOM transition effects.');
  add('translator','Translator API','Translator' in globalThis,'Emerging browser-native translation where available.');
  add('languageDetector','Language Detector API','LanguageDetector' in globalThis,'Emerging browser-native language detection.');
  if(navigator.gpu){try{const adapter=await navigator.gpu.requestAdapter();const info=adapter?.info||{};const cap=caps.find(c=>c.id==='webgpu');cap.note+=adapter?` Adapter available${info.description?`: ${info.description}`:''}.`:' No adapter returned.';}catch{}}
  return caps;
}

export async function runSelfTests(features,promptFactory){
  const tests=[];const push=(name,pass,detail='')=>tests.push({name,pass:!!pass,detail});
  push('Feature registry loaded',features.length>=350,`${features.length} feature records`);
  push('Feature IDs unique',new Set(features.map(f=>f.id)).size===features.length);
  push('Feature metadata complete',features.every(f=>f.name&&f.summary&&f.tooltip&&f.category&&f.example));
  push('Crypto random UUID',typeof crypto?.randomUUID==='function');
  try{const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode('fusion'));push('SHA-256 digest',digest.byteLength===32);}catch(e){push('SHA-256 digest',false,e.message)}
  try{localStorage.setItem('__fusion_test','1');push('localStorage round-trip',localStorage.getItem('__fusion_test')==='1');localStorage.removeItem('__fusion_test')}catch(e){push('localStorage round-trip',false,e.message)}
  try{const p=promptFactory(features.slice(0,3));push('Prompt generator',typeof p==='string'&&p.length>200,`${p.length} chars`)}catch(e){push('Prompt generator',false,e.message)}
  if('indexedDB' in globalThis){
    try{await new Promise((resolve,reject)=>{const r=indexedDB.open('__fusion_selftest',1);r.onupgradeneeded=()=>r.result.createObjectStore('x');r.onsuccess=()=>{r.result.close();indexedDB.deleteDatabase('__fusion_selftest');resolve()};r.onerror=()=>reject(r.error)});push('IndexedDB open/upgrade',true)}catch(e){push('IndexedDB open/upgrade',false,e.message)}
  else push('IndexedDB open/upgrade',false,'API unavailable');
  return tests;
}
