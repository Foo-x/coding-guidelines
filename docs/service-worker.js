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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6e6f35633b593170ada684226a39aaf1"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "9860fb9cf7b3f7bdf0c86614d532472b"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "eed629a264298258da30cdc3ebd70699"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "85b4dcfa32915d0149d145c5b5880ff5"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "ff6a4b7e78048499a839c4fd52c30b8a"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "5c19683e0e14116883d16bf454656ab7"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "b38f9f1873026bb37bffa4997c23849d"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "0b14599bef06fefa40fbc81aae575a58"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "7fdcfd4411ed56b538efa75185bc73d1"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "d586c300c64f8c605edc0b2a843c783c"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "c167a9e2bef318a46569e7c6071b3688"
  },
  {
    "url": "architecture/REP.html",
    "revision": "b2fe2def09a8c63a8e2680b06cceb504"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "559e2f71d6c6cd027e32b03b6c6a115c"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "265b1b55df95a55232434c0f40b76b52"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "53d1d87cbcc737f46c1b931a42e8abce"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "2495ba7dd35226e0614e226ebbf31ac9"
  },
  {
    "url": "assets/css/0.styles.a3e0b06a.css",
    "revision": "dc8465169bb040c32b5beeb8da69061a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.66d73a2b.js",
    "revision": "fe8ef31f9518967f5cd6c54d22808b22"
  },
  {
    "url": "assets/js/11.59130a8d.js",
    "revision": "9fec84e20eae979f692d70bdc7c86674"
  },
  {
    "url": "assets/js/12.a2167b62.js",
    "revision": "4adf29f8dd9ba85de46a4af515d442d2"
  },
  {
    "url": "assets/js/13.6b3c4c9e.js",
    "revision": "19141dd6dccf88d4771d33b022ce07fb"
  },
  {
    "url": "assets/js/14.009d3e96.js",
    "revision": "26563313729b1fb71232acf02d918534"
  },
  {
    "url": "assets/js/15.4bf64bf9.js",
    "revision": "86ac31426a190d48de2667b3e357f86d"
  },
  {
    "url": "assets/js/16.82b66d56.js",
    "revision": "efc5aab84b41445fbb1842da59205a2a"
  },
  {
    "url": "assets/js/17.9240a898.js",
    "revision": "3fcd91b737420b604c34a991d203f160"
  },
  {
    "url": "assets/js/18.c34b42f3.js",
    "revision": "ebe57273094ec1f7fa34276d29e2ec3a"
  },
  {
    "url": "assets/js/19.a0d6b78b.js",
    "revision": "b6fb6543a08630a69c999b20d4165eac"
  },
  {
    "url": "assets/js/2.c45a676a.js",
    "revision": "0f5678a1f33b3ff8012faaa81c4d243e"
  },
  {
    "url": "assets/js/20.2f14aa94.js",
    "revision": "e7d030112fb0805749afe1fae160787e"
  },
  {
    "url": "assets/js/21.51391572.js",
    "revision": "7aa103f8e33f7b5096758b5bb38c9304"
  },
  {
    "url": "assets/js/22.5ba1c5fe.js",
    "revision": "f8acc702b667467519b68998b37054cd"
  },
  {
    "url": "assets/js/23.8fcde090.js",
    "revision": "fb766bfd3b588245c2bfd64a3005885f"
  },
  {
    "url": "assets/js/24.63fa0e89.js",
    "revision": "6976c31febac08d3cfc253ebb1f05c44"
  },
  {
    "url": "assets/js/25.39e1d564.js",
    "revision": "8eda5a9a44395fedb33e4a0d6bb5e3fa"
  },
  {
    "url": "assets/js/26.248b6c22.js",
    "revision": "1805faf7be65b5465b90e6da4d3c4275"
  },
  {
    "url": "assets/js/27.e145d69f.js",
    "revision": "07736d4eb69fe93baadfab3995af891b"
  },
  {
    "url": "assets/js/28.87136b38.js",
    "revision": "ed145445a3915297369de27f9dfd179c"
  },
  {
    "url": "assets/js/29.2f730985.js",
    "revision": "2ae551f15f508fe902229d4630b81686"
  },
  {
    "url": "assets/js/3.9d855385.js",
    "revision": "4d25ebf7a20d12f892db7aef0410c681"
  },
  {
    "url": "assets/js/30.e1241ee6.js",
    "revision": "379bd5819831f4481ad39bf9eee9ee75"
  },
  {
    "url": "assets/js/31.94b3a388.js",
    "revision": "6fe6eac875e7f7c1df3464da8930a66f"
  },
  {
    "url": "assets/js/32.64dcb26d.js",
    "revision": "172b59149d2612eadaa71f835e916bf1"
  },
  {
    "url": "assets/js/33.64e48004.js",
    "revision": "9d4da52da03220fdefd96669796e2867"
  },
  {
    "url": "assets/js/34.ca1ac3f3.js",
    "revision": "e5b65e6f4e3e1f1c55d0e53122bdb8fa"
  },
  {
    "url": "assets/js/35.8accf070.js",
    "revision": "3b2a7dae60a895dca7ef68defd71baac"
  },
  {
    "url": "assets/js/36.403f1aff.js",
    "revision": "abf93d9ee54f793b036a116f9ced903d"
  },
  {
    "url": "assets/js/37.fcb048f5.js",
    "revision": "a8e62628476baaba90e86d4506dbb060"
  },
  {
    "url": "assets/js/38.d0be0321.js",
    "revision": "2e32f572545211d70e8e14f7fe6dea98"
  },
  {
    "url": "assets/js/39.b7cdb789.js",
    "revision": "7d5602efc73a17fe5b59e9729e3d681f"
  },
  {
    "url": "assets/js/4.fbb2a572.js",
    "revision": "fbe0841e9d6e07f494bb73e16b2fa7d2"
  },
  {
    "url": "assets/js/40.9040c343.js",
    "revision": "852c0109d432d589f5355a4459db6fdd"
  },
  {
    "url": "assets/js/41.c7db62c9.js",
    "revision": "ab8469abbd2c74481ac65641b9be884f"
  },
  {
    "url": "assets/js/42.278aa977.js",
    "revision": "5db4316637dac215ab3414f55b44dd9d"
  },
  {
    "url": "assets/js/43.0960031b.js",
    "revision": "55075a43739f4195faafdb41f7352d5e"
  },
  {
    "url": "assets/js/44.e98a8737.js",
    "revision": "bd3bf9c412da9aeecba34a765d03b0af"
  },
  {
    "url": "assets/js/45.8a58c415.js",
    "revision": "047e0d53dce161d506416cd0c8d15271"
  },
  {
    "url": "assets/js/46.69779a8b.js",
    "revision": "62178c77d4af89256a747b992a58a366"
  },
  {
    "url": "assets/js/47.037afd83.js",
    "revision": "c85822638b7dd3bb0ce3ddda5e443d10"
  },
  {
    "url": "assets/js/48.b4bdea8f.js",
    "revision": "60ff55630cdbf2e1a135f96e9dbeadd1"
  },
  {
    "url": "assets/js/49.20b7fc15.js",
    "revision": "1dea7870728912dada7acee4adc3cb3a"
  },
  {
    "url": "assets/js/5.326e75d1.js",
    "revision": "63ecc404da9aff86a9fe62daa84a7cc0"
  },
  {
    "url": "assets/js/50.42537426.js",
    "revision": "04eed5fee75db109cb001cd3655b641b"
  },
  {
    "url": "assets/js/51.8ffb297b.js",
    "revision": "4a3ce5784c41ad62a456d2aff85cf759"
  },
  {
    "url": "assets/js/52.cd59237e.js",
    "revision": "2b9c094ba3ffaadd38e32a3f3e4fbb66"
  },
  {
    "url": "assets/js/6.4cb9ef16.js",
    "revision": "f940c140fdd7ea46598f16e5ff720434"
  },
  {
    "url": "assets/js/7.740fb97a.js",
    "revision": "f77da6bb6c3c66c71fce396702db816b"
  },
  {
    "url": "assets/js/8.5d4b33b0.js",
    "revision": "7e8dd99369f10692be252296bc78788e"
  },
  {
    "url": "assets/js/9.b139491b.js",
    "revision": "16e5ddce685b6ea7341e3ebc7c1a9d4b"
  },
  {
    "url": "assets/js/app.45117810.js",
    "revision": "bd1f8e257c203d3e45e8251e4d7302dd"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "32555ea10afb86a2b98c211f0ab28cf0"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "036c5d0b26532ae9534ff71526e98bfe"
  },
  {
    "url": "comment/kinds.html",
    "revision": "e713577db3bca4b68505921508900d38"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "e298461f481ce460e4976449a1826c49"
  },
  {
    "url": "consistency/index.html",
    "revision": "acd85c75d578c5b82bfdb46a5a1bc911"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "015ccdc0a2f01c14f58e3e09b794b8d2"
  },
  {
    "url": "logic/CQS.html",
    "revision": "e0ea41d09adbdb898f73a8e2bb43dad7"
  },
  {
    "url": "logic/declarative.html",
    "revision": "ca572b9fddb060a0ce895e50f8724414"
  },
  {
    "url": "logic/early-return.html",
    "revision": "656c5cf29543c13f28833f6939f4c11e"
  },
  {
    "url": "logic/immutability.html",
    "revision": "38dbd683527e9b593a22aa9945b32076"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "c08b39297bfee68091b09950a1dc4b1c"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "a3b208eeab895dce0a20a625c1ab8809"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "d14d7b0bce2c105a22ca6a2574e47878"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "a7cfcd6e4c625636240656b1268bc59f"
  },
  {
    "url": "logic/use-library.html",
    "revision": "c3a5dc5781f845255f9177a2cd81c662"
  },
  {
    "url": "name/concreteness.html",
    "revision": "16892a483a26c2d35c99286ee2f9450f"
  },
  {
    "url": "name/index.html",
    "revision": "79a0b242d276c2abbf8b5a8b183a5c66"
  },
  {
    "url": "name/prejudice.html",
    "revision": "b6fb3956755918c349298a9375233a89"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "777e8c3fb1ba433bc2be9eedbb37647f"
  },
  {
    "url": "principles/DRY.html",
    "revision": "a1dfb6fcc03e250d657e9c11ce363d88"
  },
  {
    "url": "principles/KISS.html",
    "revision": "fb1cfb33308b32591ebb2ef3d761321e"
  },
  {
    "url": "principles/PIE.html",
    "revision": "4ff3e2bbf84ffe70858f7c94b4f19b0e"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "27da65d83de379050ad04d2591732ea5"
  },
  {
    "url": "test/AAA.html",
    "revision": "76881cd2f17e21cd698a3ba4f29dcbc6"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "4bb90c49fe215cdbb3230866f0ea7b8a"
  },
  {
    "url": "test/index.html",
    "revision": "dba16ca48536e582e20d3ae2d733f0fc"
  },
  {
    "url": "test/naming.html",
    "revision": "43d6fe89469503f60c4e499718d68d59"
  },
  {
    "url": "test/one-test-one-assert.html",
    "revision": "14868be786c671b919292c60d54ecd88"
  },
  {
    "url": "test/refactoring.html",
    "revision": "b21d5b7c339b51526b769d9c001ac833"
  },
  {
    "url": "test/test-first.html",
    "revision": "ced5cf00d3dea3b4e2b1ba0e2f0282eb"
  }
].concat(self.__precacheManifest || []);
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
