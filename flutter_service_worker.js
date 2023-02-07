'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ce79ac68871cdff64e80da77048774bb",
"index.html": "036e929c32e2b4a853b4441053986c15",
"/": "036e929c32e2b4a853b4441053986c15",
"main.dart.js": "c1b9c9cdcc10f0df118924cba0be8047",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2ab1b343c1142b7cbc40eb6b94b865b2",
"assets/AssetManifest.json": "8b9e7caf58e90320ad119bd4cb0ed280",
"assets/NOTICES": "3ae12512470d1873b62d1971554436c3",
"assets/FontManifest.json": "4d3dfd3fa5fb15b9f505b6ffafd681f6",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/home_background.png": "84b2f6eae8a2293a94a72459e0d3f602",
"assets/assets/images/farmrevv_anurag.png": "0f7a3f743fc51bfc2e21d8feb88c7ae7",
"assets/assets/images/hola_anurag.png": "390979ff43c3045516574c21755f1829",
"assets/assets/images/huddl_anurag.png": "7f4cebc291fbe9b7b4d9748fc4e0fa77",
"assets/assets/images/farmer.png": "ae8493450278b5c886c67c1e6679a175",
"assets/assets/images/hola_curves.png": "ccb507d2f5b514a7d9903f5eee6d2a69",
"assets/assets/fonts/plus_jakarta_sans/PlusJakartaSans-MediumItalic.ttf": "c9db2e5f4a4866f129d712fbbdf64524",
"assets/assets/fonts/plus_jakarta_sans/PlusJakartaSans-Light.ttf": "7269d597a1420ab80a2da6d56a164e35",
"assets/assets/fonts/plus_jakarta_sans/PlusJakartaSans-Medium.ttf": "86c690cf3c5fa19ac4d644e3179d726e",
"assets/assets/fonts/plus_jakarta_sans/PlusJakartaSans-ExtraBoldItalic.ttf": "22eeeb6a7c008eda0058782c42084146",
"assets/assets/fonts/plus_jakarta_sans/PlusJakartaSans-SemiBold.ttf": "888a09fc349fd86b358f8bf1d343c69f",
"assets/assets/fonts/plus_jakarta_sans/PlusJakartaSans-SemiBoldItalic.ttf": "e6d69a1ed4caf566a56081325a60c7e7",
"assets/assets/fonts/plus_jakarta_sans/PlusJakartaSans-ExtraLightItalic.ttf": "b39e85ca784a3ae488150295de20214d",
"assets/assets/fonts/plus_jakarta_sans/PlusJakartaSans-Regular.ttf": "1c53607464229476dd0241bcc71235f6",
"assets/assets/fonts/plus_jakarta_sans/PlusJakartaSans-LightItalic.ttf": "daa03e8eb69be9838e86ad8f23a5ff25",
"assets/assets/fonts/plus_jakarta_sans/PlusJakartaSans-Bold.ttf": "202ed785290892875b3c8b3d0584efc5",
"assets/assets/fonts/plus_jakarta_sans/PlusJakartaSans-ExtraLight.ttf": "b7fd3439fdab34c69996aee603636384",
"assets/assets/fonts/plus_jakarta_sans/PlusJakartaSans-ExtraBold.ttf": "55f30d7e9678fbfe3d7ba0fb85a8fefd",
"assets/assets/fonts/plus_jakarta_sans/PlusJakartaSans-Italic.ttf": "41b3de12d8988511b5ba72ae41b853ca",
"assets/assets/fonts/plus_jakarta_sans/PlusJakartaSans-BoldItalic.ttf": "6c608c3de429869af8f1208dcc527c1e",
"assets/assets/fonts/inter/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/inter/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/assets/fonts/inter/Inter-Thin.ttf": "2dce622147cace7b467d9929b7708430",
"assets/assets/fonts/inter/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/inter/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/inter/Inter-ExtraBold.ttf": "c9709fb8e32755490795ce5bd226c3a0",
"assets/assets/fonts/inter/Inter-ExtraLight.ttf": "0f3ac0692901f70f1ac32cf079355051",
"assets/assets/fonts/inter/Inter-Black.ttf": "980c7e8757e741bb49c7c96513924c61",
"assets/assets/fonts/inter/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
