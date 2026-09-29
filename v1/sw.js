const CACHE='fusion-foundry-core-v1.2.1';
const CORE=['./','./index.html','./offline.html','./assets/styles.css','./assets/icon.svg','./assets/earth-cosmic-splash.webp','./js/app.js','./js/features.js','./js/modules/storage.js','./js/modules/capabilities.js','./js/modules/prompts.js','./js/modules/webllm.js','./js/modules/p2p.js','./js/webllm-worker.js','./manifest.webmanifest'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin) return; // External AI/P2P modules remain network-controlled.
  // Navigations are network-first so deployed UI fixes are not masked by a stale app shell.
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request).then(response=>{
      const copy=response.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));return response;
    }).catch(()=>caches.match(event.request).then(hit=>hit||caches.match('./index.html')).then(hit=>hit||caches.match('./offline.html'))));
    return;
  }
  event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));return response;})));
});
