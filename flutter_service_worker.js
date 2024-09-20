'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "68bfd1e99a56df8522145366e6f2b2bd",
".git/config": "e97f104fc95ce52648fdae4195a05d1d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e46cdf72fccfd516cf8739dcc90dbc22",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b16989c20f0237742832e0a9eb7e2a2e",
".git/logs/refs/heads/master": "b16989c20f0237742832e0a9eb7e2a2e",
".git/logs/refs/remotes/origin/master": "991e5b697624bb5f4b6899ba36a73a4c",
".git/objects/02/0909156dd081cc8b39a622af8517e054a478ce": "0a5fa2ba81caf46d69fd11e1c1a3dff8",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0b/c1077ec3fa0ab0b75b44363a38c7e19161a355": "63e6cc832420d551b4ec1c0a93cb1c12",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2b/8b4141a995373cb395660f40e5739d072c3e45": "c16ef64190ef1ed70c668dbbea827c1d",
".git/objects/2e/b6aa196411021e2ba7568c2f55026660fe5a43": "0b5779b30f38f068935443810716e5b3",
".git/objects/38/0cb9ffd71d6c01841eccd29ec8c4d96b017f08": "9be1bac2e7bc84e0fde75bb1b87b7b03",
".git/objects/3d/b150c1742bc2c08fc5722919e8956b81a1d19f": "d78bffe4943e5c080d35a3fbe49c1f7b",
".git/objects/3e/9d718f7992ce3080fed60521b648c131070485": "3b769888a74dc3c2ac90ac5ad3dc7fcd",
".git/objects/41/6d96942250011d528bd12cc303cdfaf44ffae5": "bfabec39b8f4a5759fdd0678dae493c0",
".git/objects/42/1e8e19d734e4c3512b6640f1d79b4ab5473814": "a986088fa3929d75163074e63bfe1313",
".git/objects/43/d0bac6769c72e0555d983efdb4c735cea5bc58": "b393a351b813bb149e62d1bde3801997",
".git/objects/44/6cd9cb7b69b7b70d2273f9abd66a4b05d2159e": "bba437443621b97db7e57aa63207867b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/50/23a363e9372ad47e2f1df91defb1e61d9a9c02": "25a6f496aa4a4bb5b5991fab5d21e778",
".git/objects/53/881ef5c2f13f03795352562bbc1a5aa0af0897": "cc83a012ee7b019acf42c0ce3b636d9d",
".git/objects/54/1c7938a74c5ca5ef1b0baf6817e5e3f285618b": "3178db7fcd34d283081c3a2064d9d7c5",
".git/objects/57/7637f537081cf83a7b9b8e6e873177ed937f8c": "84952f0b32156fc57ec4fab01243ea17",
".git/objects/5d/9e55b4a2f9176568d113a2cfa651d206ed9f36": "77f94a0c5a85b8f9539afea3910084d7",
".git/objects/60/5f5ef60f154bd4ed76f7e96b1a28d2ab430a30": "1cf0c125994a449cef42604625b16261",
".git/objects/60/7e732f685aab1e1c1033b66213072c79e4a159": "28d31ec83484f3b78e337615912e5d13",
".git/objects/68/71101a8556a6d54f203292f175acca5a44b6da": "bac48b2d609a97dda217b2badedbf31f",
".git/objects/68/893addaa6c3eeeb09f76f7d9c2796dcaa57a2c": "4cc2558c9e12addcb402656321450f48",
".git/objects/71/f923b495291499fd97a9cc86b20a38ee60e2da": "f99616014adf4620d55ce9c5c60410f4",
".git/objects/74/0d0b0806304ae58386c6a226b656115265015f": "17b115a3efca1deac9198fa7f5805925",
".git/objects/75/65cf8d33a0dd5aefb537e05c78c0c4d219a75e": "6c9a2f642e8993eb5e9ea186cd447aec",
".git/objects/76/45d76231a96c9d6b0d1a92fd0b1eef6614911c": "30b0d9ed83a1e678bb59747ff42d39b8",
".git/objects/76/552a5de79c3ee1a4ceffda853d9e828224d9b4": "a1536481ef3bfc045e5bfb1802ed865d",
".git/objects/7f/f06dc9b23cdafb3d6db6c134564415799fb106": "3e374da38370d350649c22bdebe78274",
".git/objects/84/250d8846dab4f64a077e05818ffc80d772bfee": "5078a0be35852253005f6e4cc71802d1",
".git/objects/84/ecde57d5b2c980bf7304ba740b3cccb423c87e": "f4fa719205da5d99e6df07d4221890d6",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/5bb2a24c3a79543a894af100161bf1258323e3": "42b6863ad2dac280cfeaaae6c183b8df",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/08e8628b73d05bf77714f628e4933c45110a52": "7c7be068e1bb1c3e5b7fa8fd5555c9c2",
".git/objects/95/75b4aa9e4a0aa51ef1e0cfae7118c64a455fd8": "e0ce77d501e329081ef1f5a4436b296b",
".git/objects/a7/b0b1b8ebc729931abf8b98f8317d967787cb37": "d2c9cc33dfa4f2fa47b151a2f04e25f8",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/18bb52fc1041fd5e9f32e367e04e27ca354c63": "d1fe6be8521865a63a2f77ec5453bd12",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/69766f04015e110e569cee425c1ec9584dd453": "01926cb74df80b8bdae8682c32eb7c12",
".git/objects/cc/1ff502f91426ef3130815f108af7b76817c0fd": "50f1e2567d6bc096f4a15886ca680885",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/cfcd6a8f1e8b5b383da18e3c162b509b530fed": "5bc8dd5f2da7c6692f2c956b9fedab12",
".git/objects/d6/822fc3fb1369635e492922ab4da0ce354c9783": "cde810578d3729255d22e2e4901a8f71",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/da3fd2d29bee7e0ec794eed448bde3bde20fe8": "ed310b1af04f0c79482b60c448199e6c",
".git/objects/da/327b28bcccac54a806228a9b7c1857810a5bd2": "843777b6e06e03fb489f230185e7113b",
".git/objects/e0/bede7dcb3f4ba17398a4bdce27000a0bd75430": "53b74b20a1020310dec4cb8c060e04dc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/e965f08a4a5e17e2f632ab48c54f733af041ad": "291a35668d1f77bba7395c1ebeeeb141",
".git/objects/ee/3ec7082ef68d7eb077fc8764733170a358665b": "333fe43f61528b3b7acd573c6c703609",
".git/objects/ef/f8a37669add419b8f59e8bb56e8c1d55c53552": "1bd3a228992932cdadc914208a5fe03a",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "5f4f42dd298a0e20689a81bdea08cf70",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/0395cfa4800efa558c1b435554c9330ecc7a3e": "37967859be0355cb536f66f9ae3f161d",
".git/objects/fc/7113d81db4427225df997bf3331a12ebc78f73": "4e152d364d10a531cd23297e332cf0bd",
".git/objects/ff/4babb9094d096e220dead735c46c647ae18cea": "35151edb234193db3b9216894a779741",
".git/refs/heads/master": "c299a85666d511e5c8f98deabb101caf",
".git/refs/remotes/origin/master": "c299a85666d511e5c8f98deabb101caf",
"assets/AssetManifest.bin": "b095b2907ce6f8839c537e87e1387813",
"assets/AssetManifest.bin.json": "06693a16bccdc831275b80db8669dcce",
"assets/AssetManifest.json": "d3ebc25334b8fd10e397ebeeee189158",
"assets/assets/images/bamba.png": "6432603754c459a5f12558bef91c500e",
"assets/assets/images/batman.png": "d8e0103951d4f112c619bf3611ab282b",
"assets/assets/images/bayne.png": "4f6b3a2515ab5b00d5d5564af805f385",
"assets/assets/images/blob.png": "c25941ddb18e1fab16caa5b64e08343c",
"assets/assets/images/coldy.png": "3932cd6f82042d2b0b6b24a80479d99c",
"assets/assets/images/dragon.png": "4ce0a20bce98e8f96e3f9d2e129b0aeb",
"assets/assets/images/frogprince.png": "7a73404d8f9497893c7cac7326be5bb4",
"assets/assets/images/graviton.png": "870283298df556aa8eeaca32fe836fc7",
"assets/assets/images/indy.png": "a7752b356a6ac89964481d473ec47bfa",
"assets/assets/images/ironmeow.png": "3947236679e74ef0b4ed35d353d1613d",
"assets/assets/images/kittymage.png": "5b925d47a307f2762a8e23abb23be60a",
"assets/assets/images/lancelot.png": "dda32edc6b62d848cb07c31341d3181c",
"assets/assets/images/mama.png": "c834ba08a8b3c18e057b93c8f480e286",
"assets/assets/images/monopolyman.png": "f8a348a70d3f0f4941d7ace734a76e6b",
"assets/assets/images/ninja.png": "95dbcd7f35ae1c2bcdc5622b417ddf00",
"assets/assets/images/orcshaman.png": "c07d7613a71744ab951901ecb10fec2e",
"assets/assets/images/pulsegenerator.png": "86729ac21cb82ee43048a9e5cf0def8e",
"assets/assets/images/rocketchu.png": "4772d9a27f240b65876c048173eef6cc",
"assets/assets/images/tar.png": "5baea14eb7d65a29ed6c0bfdb87395d2",
"assets/assets/images/watt.png": "32ef122e90972b1170f4841b62a80af1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9df683a9609eab104785c4fdfd19a72d",
"assets/NOTICES": "dc985bf662ea50bada29e03af3777735",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "9a39ab8aa3d828142935da9efe99b3a2",
"canvaskit/canvaskit.wasm": "afdcccf150b5cba228e27c813548b842",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "43ec75ce562f82c5dc5be1a738d87e37",
"canvaskit/chromium/canvaskit.wasm": "3909da2fbccad1a2e4a1f42750d24977",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "0b8baeff2b4484d2d6be67a7e082f9db",
"canvaskit/skwasm.wasm": "ee4afa1790abb925360fd9519c5194f7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "cd6b14ca6f05f91d2dc7d163160558fa",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f8f22b3c0f277df5ee1a4d56d830c926",
"/": "f8f22b3c0f277df5ee1a4d56d830c926",
"main.dart.js": "34ad6ca03b503544325ddb50377c0300",
"manifest.json": "513dfa61ea9530e12b2e979124bd27f7",
"version.json": "ad28aff4e2c6f81703653c3e03316c3e"};
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
