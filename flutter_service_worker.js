'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "0e3aa7846a902ac62f218f9eda668089",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "406a09e5f089a3844acc7bf3e6dab579",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a03faf18af88c835df702275aa3489e2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a2f8069b78f2f3502c06a4478b5921fa",
".git/logs/refs/heads/main": "b7672254c34dfc8948a71bdffc688105",
".git/logs/refs/remotes/origin/main": "2e96982c34690ee60580bccbcfcb2e1f",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/b9ce5d753f96264f6ee4e6b76f5607bcdff7cf": "6b7d6491d22b633fbb2aa1396993c549",
".git/objects/0c/3604660f2827b7295c629a549d9b66fb7a860a": "7e2c8c822f0f0a84ce4cfe1905dfcd0e",
".git/objects/16/2b8e32e11eed8f5308d1e653a21e6fc14aa508": "8a9dcde9707b1addddb6c2855953b81d",
".git/objects/17/74361a048d8ecb337cdd989e79b41ac270fbac": "3e4f90fc494db8467ba4469927097952",
".git/objects/1c/1ee1cbb90577decb076c150b6333ec0da3bde5": "cf1acb03e9740fa5a46f3c6df91771ec",
".git/objects/1c/4bcfbaa457131956dfdc9a5f00aceb3f2a0c2b": "034f2566577137a886bf0dabf803fa3e",
".git/objects/1c/aa9ca3989a55b5a21f87d01c1bc6b22ab89589": "4408072548cc66e12ccb45b43ca7db8d",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/85f6d760143d8b6d0a77a99fe89fed67a0ea4f": "fd0c8ec256516bcbede8ccea88352276",
".git/objects/2b/4b4003445feeb2878ecf8e400524b3b90b11a3": "fb4367f322d7ada9dc09d39fb4dde7ac",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/10f57e25a3d25816c7f81e116c7d2d69a6a47a": "09cb81dfc4d222da5278183e2e1d0788",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/99790b8f7afea115e18eeee60eff6aa68268fd": "2b2e8407a66f6d814abcf548d8962a59",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/4e/f77bd117e9ce7fc50a47d82245ee9e6cc6a82c": "867252a1f553b64d4679e86f78acb575",
".git/objects/5a/3ce483f0b7f5da97a8ec10f5cd008c3ce90f0f": "8578cf54ff12b60fdf2c11b3705aa734",
".git/objects/62/2d2133075c6e5b2b4aa2b80e2c8445cf45bb70": "1528357aa7a710b917dabc63da4fc8ee",
".git/objects/62/e9796735ba2a5649998ace35df17b593fad41d": "457b9e55cec833e198aa63ce538c9c6e",
".git/objects/65/1c64f978fcbcbd87d9e3dc8316fba6ae6069c8": "9ddf779ee0639d1a35ad546f6fd8080f",
".git/objects/68/5be582f5d18a502f1e606c7ce4d3a942919e56": "ae028830ba83086a65e36bd68b3ed93d",
".git/objects/69/613d19827645b5bfb037e65bafd86224dec04f": "7df3eb79533d9ee68e2e20720486672e",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/e151cc8d1953355984450b8e2f38717824b582": "29e19bff9bb90d7b327e2087fe11d3bf",
".git/objects/76/2ca90033dfa67a375d79b5c4bb44f4892e35fd": "b362ae53b82b8196cdbe986bea5cd82e",
".git/objects/77/5a136ef4f8953a47d34373b16afea5ac703766": "01824cfab0cb5ef9839d8452eb19650c",
".git/objects/80/b602c06dc5a6ab85eba7f7f737316e8678cde3": "33cd99086fe2f800507ab12e6999f0d2",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/3c599cd333d2b096a94cb86b536c5977e5205f": "563d604b3f02cc4a11388a2c9b782fbb",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/97/bf1306192b3a16cb0e7b5252f5868170a76a90": "239e4a92734095325b03c0189008dbe3",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9c/cdc510afc72426112a9017b2f31d58347733ee": "2e914ed505b4552de3208e0f3f5dd7ce",
".git/objects/9d/878026f4b9a5020d54e362b8102bc737a7af48": "4ef190aa4e94e3b2fa50307910892ac6",
".git/objects/a8/33aaf353f9ab825158e61b2b7199e6346ac617": "c8b847bc60794317f3aa9a0e141ec66d",
".git/objects/ac/804f98cd2caab5da10383bddde8775bdb87b1a": "e878c71148446fac4223168bf127c042",
".git/objects/ad/e5db8111ac888840adea9da1f150eb1cb0b93f": "c0334ffe865760662e72ac2084c3981e",
".git/objects/ae/9b31fbe5b5d16f0019dfeed1015e7350a0d50b": "33704658ba4840d7ac2ec8515ac70fa4",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/ed739c6b9b3a837a7a48387a29cb129e42d5c1": "3791a94d2d7573fa5ded6411cf0456ee",
".git/objects/c6/0d2412de660aa3a2eee51e3d417e93f32511f6": "ef5fc260d4610790ced49f4ce1d66edd",
".git/objects/c6/3db65142ee4cfe8a5089bd017a3f63621fcae6": "1730fd7b2f6e3bab77a93aff76dc3b49",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/ca/8f6f5c935be53cb7336e3567c3e99fb335a256": "22d03f34aa7bb78f9ab16f53e43fbf89",
".git/objects/ca/ae27c563f28c40a728f4ee2ef3db3324050192": "39168880aa7f03d5ca542809697a880b",
".git/objects/ce/b5a377040fe4eb746dbc636fb3bda8bf9b763d": "a90737f1f7f221dd109baed37338d691",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/dc811d72a8279953e5e0373669edbe18f9172a": "5ddd46298d27c1cb62d30ea3f4d7decb",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e1/910335d4b2a2cff61629b9f3acc7c349cb19f6": "33eb89613ff83819f7dc2b22c34ea4c0",
".git/objects/e2/35d2941c2b25bccc2eeea5021d33566a0825a2": "027d78987c0c2bd92ce824b3ab232aad",
".git/objects/e2/b9476e3c22cd27c94dcdef26a10e1f06fc23cd": "43b01dd9126eb15b11be1da6eb551f21",
".git/objects/e9/5a6f80db780c1753cbabfa72b0301372948bd7": "d72567f99d8a61de18c91b15f5714954",
".git/objects/ea/ee4eb5153a56c4c3be1b5f89453e82b8be8fd5": "a975ec3089fe072275378587c3ea78ec",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/97748786e834a64381ea2f11b339bb0f18b159": "038a8a595b0c817e19584329196c9041",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/fe303946a172998f16ee45af8e54005ffdf828": "2ba3de6279ce09d34b5d8e18fbe85f8f",
".git/objects/f9/513a68f3a634fefed3dfd4ccdb9cedd10f6a63": "8605d13303114727addfe498d19b90f7",
".git/refs/heads/main": "0d6c5fd468b21d7ec42dca600f14b43f",
".git/refs/remotes/origin/main": "c5ed459d099933a3ea418aa227b8c2c6",
"assets/AssetManifest.bin": "06320c1a2c62b416cdace8877df8c8bd",
"assets/AssetManifest.bin.json": "edb2e5a696e771f9534d96e5421ac17d",
"assets/AssetManifest.json": "869ec4eb7ba67ceb4d0daf35b89e3099",
"assets/assets/global_network.svg": "377201eb3dc1dac6a6f9c50ab7b04736",
"assets/assets/google_logo.svg": "49b7d88dbbe4d3ce222045fbc55da37f",
"assets/assets/ic_launcher.png": "200b837977528f05b4474c8f1a786b1f",
"assets/assets/ic_launcher_background.png": "3e180aa3c141ad3e1bc192d3ff022115",
"assets/assets/ic_launcher_foreground.png": "d61ba19d10da3a51eebea3c3bed47620",
"assets/assets/images/google.png": "6a834649522a287b4cf8d59fdd0aef77",
"assets/assets/lottie/loading.json": "0a0b121ec84940f613d27b4d72c75048",
"assets/assets/shield_check.svg": "009a6af2e608975591a3caec6ce91b19",
"assets/assets/stream_logo.svg": "92b53cffd3f96cba18b7c1a3b58dd4c8",
"assets/assets/stream_video_icon.png": "6c648cdfddd9ef61f2a108e064e7ffdb",
"assets/assets/video_icon.png": "27946bb2411598beebddd0b7ebfcbd7c",
"assets/FontManifest.json": "a4ffe62594d67c393e77e5653f7d3b66",
"assets/fonts/MaterialIcons-Regular.otf": "badc50395f6b2a38c96ed697ed91f12e",
"assets/NOTICES": "43c0da1987332a53b32c3dd533a5c47d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f6805977077f6f7c42cc94d2423355c4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0fd8e1b04fc0cf4757cfbdcb3dd6458a",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "7d1e75433fef3eaf8911d59adc2a70cc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ae147e9db9eeedd1e48105f218551335",
"/": "ae147e9db9eeedd1e48105f218551335",
"main.dart.js": "1c9d52f5ebc0d107b2c0787b6761a8a8",
"manifest.json": "c8729da4d20dfbc31a65e24ccf593f83",
"README.md": "6ae85868cdc9072555f0e739b85863e9",
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
