"use strict";var precacheConfig=[["/Me/index.html","f9769c7a40b67e1155a6aecd08e62a23"],["/Me/static/css/main.c8223d06.css","e260a7355a5b6954b4a318f4b913faf6"],["/Me/static/js/0.f43ea9d1.chunk.js","a77577a2eadd4bd5ffefcec351ec4bbd"],["/Me/static/js/1.5a6fc3d8.chunk.js","6869e21c2f79a37bb6846f8b58029e52"],["/Me/static/js/main.6a9de6b8.js","265c80c0eb14849c46b582dfdd096438"],["/Me/static/media/Agustina.21f233e1.woff","21f233e19402cc4a66866a7f31191f0d"],["/Me/static/media/BiamLogo.dacad9c5.jpg","dacad9c56c73c38cbe4e61eba134039d"],["/Me/static/media/ComingSoon.8761e506.jpg","8761e506408309d84676359e1022533d"],["/Me/static/media/DCLogo.8da7c666.png","8da7c666e611f01fdd99410b85981c1b"],["/Me/static/media/Montserrat-Regular.ee653992.ttf","ee6539921d713482b8ccd4d0d23961bb"],["/Me/static/media/contactMailDark.51cf7192.svg","51cf7192327488da3d2a171280680c16"],["/Me/static/media/developerActivity.59389695.svg","59389695208d7454c6607bed51ed4316"],["/Me/static/media/manOnTable.52be3144.svg","52be31441c8cf8a8a16bd7a228d428bf"],["/Me/static/media/skill.34409398.svg","3440939881da8339d1597e8d77cdf850"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/Me/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});