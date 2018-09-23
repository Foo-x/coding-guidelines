/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c67dc19b58535b5774a929beb093fc43"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "2f57c6f42552689a85482014b5b2bd7d"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "f1f470c93bff4e720905cba8a70a87a1"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "847d6f68ee61eb36d5c4d576a8ae34d3"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "af774d3c59e228b26977d77d65a685d6"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "2a763b374daefbe19e9692ac0c44038f"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "e60d63baf5eda5ce55854c262845007c"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "3a2180970bd000cd549331141b69e71c"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "28958c5e796c2385b10cac63db205ae3"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "7ce563a69666b1e406b83e20fa9c93e7"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "87de7bdb3333b2575d05e9ad631f7334"
  },
  {
    "url": "architecture/REP.html",
    "revision": "ff13256f9cf5058d35d384e40e82a3de"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "c8333b1f2d118088b82918b0c9f38b79"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "4540854368e0e3e54761bab5449388d6"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "4a909ffdf3c34f7c47399156f360cdd4"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "b75fc712e3f353d988d3afac8b642c5e"
  },
  {
    "url": "assets/css/0.styles.7104308a.css",
    "revision": "440ac85c3312c188f6ccc7c1fa00f0bd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fdf6aaa1.js",
    "revision": "0645684a482a2273d22396686e3ebc39"
  },
  {
    "url": "assets/js/11.f3755e02.js",
    "revision": "38ebf947ee932caf95285afa09a57a3f"
  },
  {
    "url": "assets/js/12.57d7b824.js",
    "revision": "9cab6ed2acc93af7aca134c3790c6463"
  },
  {
    "url": "assets/js/13.060625d1.js",
    "revision": "c3fdb341d0ec1205a7a79be69b45c13f"
  },
  {
    "url": "assets/js/14.2e43aada.js",
    "revision": "7db07dffb8a77a213577a49ca4188bd6"
  },
  {
    "url": "assets/js/15.8e0c7809.js",
    "revision": "b87aa711130071b76cfbb41f62580a8b"
  },
  {
    "url": "assets/js/16.2367d84b.js",
    "revision": "a3c1ce2d14f7fb400502bc08c3dcd704"
  },
  {
    "url": "assets/js/17.d1863311.js",
    "revision": "f62183b9aff491d595d5e081913602e5"
  },
  {
    "url": "assets/js/18.6d35a200.js",
    "revision": "2160b276545888bc35ec5d150a07fc8d"
  },
  {
    "url": "assets/js/19.e96e1d35.js",
    "revision": "4769dffce5b8bf97886bc9089558a61a"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.8aed17aa.js",
    "revision": "f32e59646b04baf1b307c285e2222dd8"
  },
  {
    "url": "assets/js/21.abbee5ab.js",
    "revision": "f290d8fac3ced050cce2b35a76ca7512"
  },
  {
    "url": "assets/js/22.b2cec5ec.js",
    "revision": "1d3463cc1b686e2791fae865cfa7c698"
  },
  {
    "url": "assets/js/23.40bdaaba.js",
    "revision": "1c80f27fd8750473ac56d3d823a698f5"
  },
  {
    "url": "assets/js/24.ea119c85.js",
    "revision": "c2b13cbe8f0ac09ac58c5e281c8ed466"
  },
  {
    "url": "assets/js/25.e5a69cea.js",
    "revision": "3f65dc442fab4529e4d65fde7c4ef42b"
  },
  {
    "url": "assets/js/26.52ff0d3b.js",
    "revision": "03e26d70207002806d410152791ad634"
  },
  {
    "url": "assets/js/27.9c8ad82a.js",
    "revision": "9857dc1137601ef8bd01df6a5a65e9db"
  },
  {
    "url": "assets/js/28.89eea87c.js",
    "revision": "5e87565b43a1d592c6be5363624a4d50"
  },
  {
    "url": "assets/js/29.c6db07c8.js",
    "revision": "1fa6af9347cb9cb85ec0041f79337583"
  },
  {
    "url": "assets/js/3.5a891d27.js",
    "revision": "c359ca3c6c0c61d08c822b101cc01a49"
  },
  {
    "url": "assets/js/30.11ebba0e.js",
    "revision": "adac8e470c524dc8321ee1a01137f2fc"
  },
  {
    "url": "assets/js/31.cba61d94.js",
    "revision": "5fdcf5dede5ed34b7aac4a8105b239ba"
  },
  {
    "url": "assets/js/32.3c09196e.js",
    "revision": "2d3448ede5bfa2549ffa7ee8a86a50f4"
  },
  {
    "url": "assets/js/33.385fdf54.js",
    "revision": "830f9039fc467352ed4404daea373691"
  },
  {
    "url": "assets/js/34.c5a23c56.js",
    "revision": "12ad8cb5619fb1322930f4097faf261b"
  },
  {
    "url": "assets/js/35.0d679673.js",
    "revision": "d2f485e034b4b904d32dae96f027bcd8"
  },
  {
    "url": "assets/js/36.762edc88.js",
    "revision": "b74e463266f980cdf1634730e50aa02b"
  },
  {
    "url": "assets/js/37.e19509c6.js",
    "revision": "9389c348e3b7fb44e22a066e3c5bb153"
  },
  {
    "url": "assets/js/38.8b6f0ecf.js",
    "revision": "c82e217120b45521328d3a114c88f1eb"
  },
  {
    "url": "assets/js/39.7d487f83.js",
    "revision": "fc9e40dc39d7eeff2da9e4ce26259861"
  },
  {
    "url": "assets/js/4.d7ebd5d7.js",
    "revision": "db0b5af359ed10466f90c159ce1d1868"
  },
  {
    "url": "assets/js/40.be2c2c62.js",
    "revision": "98b6b0de4f63804662892d4076cb4147"
  },
  {
    "url": "assets/js/41.fa442dd4.js",
    "revision": "5d7bc1b6903923c48804eebfa97a49e6"
  },
  {
    "url": "assets/js/42.e35e52db.js",
    "revision": "192480afeac9e1c0b6b0fb0df1e99a68"
  },
  {
    "url": "assets/js/43.bb09e6da.js",
    "revision": "1f907232c50b2a5b13cb3446772e5329"
  },
  {
    "url": "assets/js/44.1e119999.js",
    "revision": "133eec47fdaa2f4b68c791fa49104dd3"
  },
  {
    "url": "assets/js/5.8a020bd9.js",
    "revision": "1f0489b3e325104a60342c9c6d3442a1"
  },
  {
    "url": "assets/js/6.43ab2d2b.js",
    "revision": "7ac2459c1c912017e9a3c3995889c68c"
  },
  {
    "url": "assets/js/7.144cb0be.js",
    "revision": "356735ce4f803ae8b7f2d37042b8f4ab"
  },
  {
    "url": "assets/js/8.bccadf37.js",
    "revision": "6c76914e6c2735d5b8a1c5696f4a8f5e"
  },
  {
    "url": "assets/js/9.d8bfc568.js",
    "revision": "5fe6d250a64060602e4051f66c34f79c"
  },
  {
    "url": "assets/js/app.3d5f3261.js",
    "revision": "119411529b50e79e62f5d2c012057434"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "679b913901fa7e2d8c29265d4e54ec4c"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "4765562b1073d021a1224120b964ab34"
  },
  {
    "url": "comment/kinds.html",
    "revision": "0ab19ae5555d0a40994f901ea758efd0"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "351c48a86694b0c4fece22a4e70fd1ad"
  },
  {
    "url": "consistency/index.html",
    "revision": "0b57893b70cd152a90f9534c43d67a8e"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "0bcfdddab95d88d0fac7cc2e3c157fa5"
  },
  {
    "url": "favicon.png",
    "revision": "ceb76f9b7ceeea6b9c2dd0c53bbdba5a"
  },
  {
    "url": "index.html",
    "revision": "94875254675da5c9b3ba461e8931a9ce"
  },
  {
    "url": "logic/declarative.html",
    "revision": "75d2d1d6f63ebca2d954fba520033476"
  },
  {
    "url": "logic/early-return.html",
    "revision": "127bbfb08d8ff048f56fd6b6d66a6a4b"
  },
  {
    "url": "logic/immutability.html",
    "revision": "bf3a8a3c5d5a5384da00698fd2a336c8"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "70afec6a6337bcda7ceaeacdc308c57b"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "a479909a8f87269856050b7756d9afab"
  },
  {
    "url": "logic/prohibit-redundancy-arguments-check.html",
    "revision": "a042a6c38fc41b4509e079d4482beaaf"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "0c35d25a49e2dfd5d96acc39e5092400"
  },
  {
    "url": "logic/use-library.html",
    "revision": "1611765024ffdf9f1281297a2d6934c0"
  },
  {
    "url": "name/concreteness.html",
    "revision": "3f53b27351f9dd4a06467b291d5b1a51"
  },
  {
    "url": "name/index.html",
    "revision": "903a1a322d8f76d853a674dec0dd924b"
  },
  {
    "url": "name/prejudice.html",
    "revision": "815475e19ce761e78eaef9f3a29b5341"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "7c1c4f9e5cb2ee3b13a1c7cc2f899099"
  },
  {
    "url": "principles/DRY.html",
    "revision": "7d165365f1f4031da74c28ff0c8d6c7a"
  },
  {
    "url": "principles/KISS.html",
    "revision": "7c2ca654475feb39dc9743305956e15b"
  },
  {
    "url": "principles/PIE.html",
    "revision": "39c780577bee9a921caa7aeadc166786"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "e2f3a8216177e6f34f269cd14daa6732"
  },
  {
    "url": "test/index.html",
    "revision": "69e677fa1a9869064103b3fb2d590ac8"
  },
  {
    "url": "test/refactoring.html",
    "revision": "0406588b774f1ac392b45eadb5720d65"
  },
  {
    "url": "test/test-first.html",
    "revision": "744ab863b3098a551f6236848fbc1783"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
