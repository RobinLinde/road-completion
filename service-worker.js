!function(){"use strict";const e=1604250662186,t="cache"+e,n=["/client/client.4a262200.js","/client/inject_styles.5607aec6.js","/client/index.51a9bf13.js"].concat(["/service-worker-index.html","/.gitkeep"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),a=n.protocol.startsWith("http"),c=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&s.has(n.pathname),o="only-if-cached"===t.request.cache&&!i;!a||c||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open("offline"+e);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
