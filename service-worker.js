!function(){"use strict";const e=1614571674352,t=`cache${e}`,c=["/client/client.6a15a013.js","/client/inject_styles.5607aec6.js","/client/index.e71ca6ca.js","/client/Chart.95c5016c.js"].concat(["/service-worker-index.html","/.gitkeep"]),a=new Set(c);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(c))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const c of e)c!==t&&await caches.delete(c);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const c=new URL(t.request.url),n=c.protocol.startsWith("http"),s=c.hostname===self.location.hostname&&c.port!==self.location.port,i=c.host===self.location.host&&a.has(c.pathname),o="only-if-cached"===t.request.cache&&!i;!n||s||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const c=await caches.open(`offline${e}`);try{const e=await fetch(t);return c.put(t,e.clone()),e}catch(e){const a=await c.match(t);if(a)return a;throw e}}(t.request))())}))}();
