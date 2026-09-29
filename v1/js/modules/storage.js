const DB_NAME='feature-fusion-foundry';
const DB_VERSION=1;
const STORE='kv';
let dbPromise;
function openDB(){
  if(!('indexedDB' in globalThis)) return Promise.reject(new Error('IndexedDB unavailable'));
  if(dbPromise) return dbPromise;
  dbPromise=new Promise((resolve,reject)=>{
    const req=indexedDB.open(DB_NAME,DB_VERSION);
    req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE)};
    req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);
  });
  return dbPromise;
}
export async function getValue(key,fallback=null){try{const db=await openDB();return await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readonly');const req=tx.objectStore(STORE).get(key);req.onsuccess=()=>resolve(req.result??fallback);req.onerror=()=>reject(req.error)});}catch{return fallback}}
export async function setValue(key,value){try{const db=await openDB();await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).put(value,key);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error)});return true}catch{return false}}
export async function deleteValue(key){try{const db=await openDB();await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).delete(key);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error)});return true}catch{return false}}
export async function getAllState(){try{const db=await openDB();return await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readonly');const store=tx.objectStore(STORE);const keys=store.getAllKeys();const vals=store.getAll();tx.oncomplete=()=>{const out={};keys.result.forEach((k,i)=>out[k]=vals.result[i]);resolve(out)};tx.onerror=()=>reject(tx.error)});}catch{return {}}}
export async function replaceState(obj){const db=await openDB();return new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');const store=tx.objectStore(STORE);store.clear();Object.entries(obj||{}).forEach(([k,v])=>store.put(v,k));tx.oncomplete=()=>resolve(true);tx.onerror=()=>reject(tx.error)})}
export async function storageEstimate(){if(navigator.storage?.estimate) return navigator.storage.estimate();return null}
