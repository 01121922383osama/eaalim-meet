'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d214a1085bf1715246b9417138abfb83",
"assets/AssetManifest.bin.json": "dd79db81c74290dc44698b8f9dffd9d2",
"assets/AssetManifest.json": "187ac495ccd7bbd7326d7514f4a0cacc",
"assets/assets/google_logo.svg": "49b7d88dbbe4d3ce222045fbc55da37f",
"assets/assets/images/bg_imge.png": "55260eff32a9064337b9a416d815a2cf",
"assets/assets/images/eaalim.jpg": "1eaa43276283d091b67df411ca8eefd6",
"assets/assets/images/google.png": "6a834649522a287b4cf8d59fdd0aef77",
"assets/assets/images/logo_eaalim.png": "91ce4164ba9fc47723544332f76a812a",
"assets/assets/logo_camera.svg": "217cc6f0fb819b62a7d14c7c17a6f5f3",
"assets/assets/lottie/loading.json": "0a0b121ec84940f613d27b4d72c75048",
"assets/assets/lottie/page_not_found.json": "40b411caffc52d5a3a7e6107b4192994",
"assets/assets/shield_check.svg": "009a6af2e608975591a3caec6ce91b19",
"assets/assets/text_eaalimeet.svg": "92ce6da4349889903d52bdf21376a24c",
"assets/FontManifest.json": "a4ffe62594d67c393e77e5653f7d3b66",
"assets/fonts/MaterialIcons-Regular.otf": "d71bd81f92fd7f56d00c76c0865d0410",
"assets/NOTICES": "3f9cf686fc5c82a950a0b850a6976da2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "8801a3ec0e13f4b0ee88c5e6096fbf34",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4e3f905468cd147755d7f0389781dec6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "8076e1c51f907dfbd381fe030c4ef5a3",
"assets/packages/stream_video_flutter/fonts/StreamIcons.ttf": "ba91e91a4e3aef03b5bd34cce233ab66",
"assets/packages/stream_video_flutter/images/call_background.jpg": "036491bc8ddea81e3b0763d363a7ae6e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "88af9e50f625e14ff65189e2bb46b319",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e82d29c5fd58905212b780ec8be900c1",
"icons/Icon-192.png": "9d8107624dfaeca5ca029e62ac84b3e2",
"icons/Icon-512.png": "0bc3300fd9a493886bc6535a42af138f",
"icons/Icon-maskable-192.png": "9d8107624dfaeca5ca029e62ac84b3e2",
"icons/Icon-maskable-512.png": "0bc3300fd9a493886bc6535a42af138f",
"index.html": "ae147e9db9eeedd1e48105f218551335",
"/": "ae147e9db9eeedd1e48105f218551335",
"main.dart.js": "a498d749fce0547e25b2dc3d1c3ef90e",
"manifest.json": "c8729da4d20dfbc31a65e24ccf593f83",
"version.json": "9b37b253cd5cf1286dd529df04e2c6c8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
