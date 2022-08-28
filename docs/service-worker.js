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
    "revision": "e29d1d257870f62ee522d8f6c34842b2"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "6021edaf41920999303daa226296685b"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "8df85197fd8ba360df0ce6555f528026"
  },
  {
    "url": "architecture/clean-architecture.html",
    "revision": "dd70113496063f127013af72997c67aa"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "c701df269a18bb932e779c7ae561e2e3"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "79a8b86580666c9778ab048f6d6e933c"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "a4d870d78db3b72f144ed6edc684687a"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "cebd812c510b4efb4dbf4675499c71b6"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "7c606f15c1e73e4c80e9226341c0b670"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "f75b7c8f37544f334e1ec717ac46cea8"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "70913ba117e3d470ff0343369b0d4011"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "e671557b3e7d6082adb8df08161e611b"
  },
  {
    "url": "architecture/REP.html",
    "revision": "5586f276f8f55ceeb4a717cedb297913"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "57a318de62041af4dfc9fbcfef0c1b5f"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "92102ad1dabeec9b198e4a23a345bd62"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "780e6dec25bdda26f55bbe1c6c3f92c2"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "5319e59056dff69afb0c94c3ac8c0179"
  },
  {
    "url": "assets/css/0.styles.1355772a.css",
    "revision": "a5d107cf709d7e4b173870b2c39ac693"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.12e93e34.js",
    "revision": "7136194f714153d76543ca8f58e6d7a7"
  },
  {
    "url": "assets/js/11.f503e3c7.js",
    "revision": "4964733a452d11ac63e932b25c8d92be"
  },
  {
    "url": "assets/js/12.d6d233dd.js",
    "revision": "d4ebc274bea14b20ee1b15a003ed8894"
  },
  {
    "url": "assets/js/13.19a5fc87.js",
    "revision": "64d2361c487c0a595663238ca4690d6f"
  },
  {
    "url": "assets/js/14.b3b2fca4.js",
    "revision": "6eff102c5386972f91941d942113d1d3"
  },
  {
    "url": "assets/js/15.0acaf25d.js",
    "revision": "ac49ebb8a4ef7f080f48b13ca9a3b6a5"
  },
  {
    "url": "assets/js/16.1ae47b2e.js",
    "revision": "73abb45bfb6d34f2d8eb52639098c4bd"
  },
  {
    "url": "assets/js/17.e01c5a16.js",
    "revision": "5cd0b99f0f29641a49fd602807ae8727"
  },
  {
    "url": "assets/js/18.5bb8c773.js",
    "revision": "e8a743186057230cbfc180a2ba219fa1"
  },
  {
    "url": "assets/js/19.e4c91662.js",
    "revision": "57c70739141d0529659b8129cfa366ee"
  },
  {
    "url": "assets/js/2.65c3bf9f.js",
    "revision": "ba1d680204f82818fdbc2d364f678a81"
  },
  {
    "url": "assets/js/20.abce4cdb.js",
    "revision": "5e362cdf431ed2453dcae27f3365d0f6"
  },
  {
    "url": "assets/js/21.875a7425.js",
    "revision": "a179bb7aecc62e66bde622036fd97f58"
  },
  {
    "url": "assets/js/22.d254fec5.js",
    "revision": "34d468bbc9d3366b7d842e26d8c6345d"
  },
  {
    "url": "assets/js/23.c0a6ac05.js",
    "revision": "8bb598289905ce7fa0e1933d6ed9e341"
  },
  {
    "url": "assets/js/24.0ba38299.js",
    "revision": "2df1bdb2bb6d44978e2ce0b8bce736e6"
  },
  {
    "url": "assets/js/25.539df32c.js",
    "revision": "30d74f82406e1ce3d55f791b3b85f3a0"
  },
  {
    "url": "assets/js/26.00199302.js",
    "revision": "c55e8dad28a7b0f99ff7cb1acac83594"
  },
  {
    "url": "assets/js/27.d8b96b8d.js",
    "revision": "5c35b70669d55c93631618bd5733e8a0"
  },
  {
    "url": "assets/js/28.4a73a475.js",
    "revision": "c85afc0b5d0f9c5aa09fc9ecf77f2135"
  },
  {
    "url": "assets/js/29.2cacf273.js",
    "revision": "09c2ba92eac4771f6ca4f162391114e2"
  },
  {
    "url": "assets/js/3.fdded237.js",
    "revision": "5d3d9b3802d92c546089b6191de2b4de"
  },
  {
    "url": "assets/js/30.bbea93ca.js",
    "revision": "7332b6bdade1ac82077cbcf658050eb6"
  },
  {
    "url": "assets/js/31.6b4d89a6.js",
    "revision": "a8b4b1dd0fb5a740a0eb2b71fc6a31ef"
  },
  {
    "url": "assets/js/32.670b6050.js",
    "revision": "5c432b780df7ead2ecc23ec4e2bbd47e"
  },
  {
    "url": "assets/js/33.1aee291f.js",
    "revision": "f089f95b526edc662f6edd17a13f3b94"
  },
  {
    "url": "assets/js/34.8d00a0c9.js",
    "revision": "5fdaa0c1881e8b2485df06bb63f38227"
  },
  {
    "url": "assets/js/35.20c08ea8.js",
    "revision": "d92af709c65879d71f7f697d4f27ef4d"
  },
  {
    "url": "assets/js/36.dc6e87d3.js",
    "revision": "040c2065e8c6404c498a3ef92d957988"
  },
  {
    "url": "assets/js/37.e5f1c394.js",
    "revision": "0ea3de648d0c4bbf88b3cab9df998c50"
  },
  {
    "url": "assets/js/38.0830ba82.js",
    "revision": "ceeb8557e8f24ca20f29c5d4a70a0a42"
  },
  {
    "url": "assets/js/39.d1ac12a2.js",
    "revision": "011cb15aa75c98349138aed9c11d7791"
  },
  {
    "url": "assets/js/4.4732a51a.js",
    "revision": "9599a544b1d3cc88fd7e5587b999c3fd"
  },
  {
    "url": "assets/js/40.5528be3a.js",
    "revision": "edb217626cbf00035175cbf0e8f44203"
  },
  {
    "url": "assets/js/41.9cbad495.js",
    "revision": "2787bc0d5ea2005e2836bfc9b0f9f92e"
  },
  {
    "url": "assets/js/42.eaf847c1.js",
    "revision": "c506062f6400b765b5c5affcf8d18043"
  },
  {
    "url": "assets/js/43.3361d80d.js",
    "revision": "e5a2be6ec5c6e3e9f48215d57f526dd1"
  },
  {
    "url": "assets/js/44.e15fd1f5.js",
    "revision": "c7e908c1f9692ca640c6e5859ffe383a"
  },
  {
    "url": "assets/js/45.5c46df59.js",
    "revision": "e9222edadb22018d2dbec68d7810f7f5"
  },
  {
    "url": "assets/js/46.baef2546.js",
    "revision": "666ee125116a7344c52c65d8fb7c209f"
  },
  {
    "url": "assets/js/47.db01e4b5.js",
    "revision": "dcccad5dee2d1c717db7b86e63f449b4"
  },
  {
    "url": "assets/js/48.d3e2f3a3.js",
    "revision": "d40426a8e65a478e69e4a61fa175639b"
  },
  {
    "url": "assets/js/49.595402a2.js",
    "revision": "d21395f04eebf01459cebc98d5d9c8c8"
  },
  {
    "url": "assets/js/5.db83cfa0.js",
    "revision": "468d3c8751ff1cd3b14ad0d493293903"
  },
  {
    "url": "assets/js/50.dbd35c01.js",
    "revision": "d8d4ba741c46b9487b463a5015d86b09"
  },
  {
    "url": "assets/js/51.c66892d1.js",
    "revision": "71931c87bac60c6065f998d723f3fd5a"
  },
  {
    "url": "assets/js/52.3596d956.js",
    "revision": "45cd92addee3dfd86af23d0fe81e1d7f"
  },
  {
    "url": "assets/js/53.d9e5565a.js",
    "revision": "91fb63df6623b1212946d033d41951dd"
  },
  {
    "url": "assets/js/6.713a79f0.js",
    "revision": "e2fca6d17d5e02ea4f4f9645a1b32380"
  },
  {
    "url": "assets/js/7.9e286ee8.js",
    "revision": "28b6a7c629f0f39295f8513708b6639e"
  },
  {
    "url": "assets/js/8.5d034ec8.js",
    "revision": "082350ce44c9d7787af3a4887debdcba"
  },
  {
    "url": "assets/js/9.7bfdff2b.js",
    "revision": "c90f1e64353b9ad8a5aa7706e058e0df"
  },
  {
    "url": "assets/js/app.c812f026.js",
    "revision": "5a63bcc1d67bce18d5f5a1e247660f3c"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "66f20af8a2320fb116e4beb7253b4405"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "57513028043eadbcd0ea07e98b84a760"
  },
  {
    "url": "comment/kinds.html",
    "revision": "90bf09ecb55de63ea921c190d4817ea8"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "26a856e312c37fd801185253639e2d9d"
  },
  {
    "url": "consistency/index.html",
    "revision": "1bfbba7f0974523110d3cca333444c7d"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "fc295a4f9919964750dad21c5772b3e3"
  },
  {
    "url": "logic/CQS.html",
    "revision": "286205c4b0b328359141a8cc6f140855"
  },
  {
    "url": "logic/declarative.html",
    "revision": "8d02f2df35e154f2094fd9b1128b06a7"
  },
  {
    "url": "logic/early-return.html",
    "revision": "ba6d7c3e3df1119b69461d98df09a263"
  },
  {
    "url": "logic/immutability.html",
    "revision": "a6e04fe37ba3b594ee081524105e0e1b"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "8b06a9a842116d0bf2829572d8776359"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "f78ca35f50cd9d1e8f744532d966c684"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "aadd0a7207e28293273767ac4bd46c6a"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "648df4ea8ff1242af4e33067f68201d1"
  },
  {
    "url": "logic/use-library.html",
    "revision": "1dc1e307a99c3ca4cb7c36578b0bc251"
  },
  {
    "url": "name/concreteness.html",
    "revision": "6f19531ffde44afde2536daa9207766b"
  },
  {
    "url": "name/index.html",
    "revision": "d9c62ea7ff03baad21064ff4de2f1e95"
  },
  {
    "url": "name/prejudice.html",
    "revision": "1ed25b7a3ecbf118d56c0ece4b6d8e95"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "344c4623ca81b8253de3a94d52f317ce"
  },
  {
    "url": "principles/DRY.html",
    "revision": "4dbc76f9fcf6ab5a0808eedd5fdaf41b"
  },
  {
    "url": "principles/KISS.html",
    "revision": "dc0ea6773bfad68e6602e02a4a5dc0b1"
  },
  {
    "url": "principles/PIE.html",
    "revision": "f37abc1050636c613fbb1c614a55464e"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "4ba82b1485775bb0dc18100364ded98b"
  },
  {
    "url": "test/AAA.html",
    "revision": "a119dbce0ca3c9e8702fddfb05ab46d2"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "065570b273a3cd694bc947fb0ec01704"
  },
  {
    "url": "test/index.html",
    "revision": "79968beef782597322c84d66f4f63252"
  },
  {
    "url": "test/naming.html",
    "revision": "ec9582380dfbb9f64f1812dc5a095f39"
  },
  {
    "url": "test/one-test-one-assert.html",
    "revision": "becabc49fc880dcbb6bb3c4a653b4f9b"
  },
  {
    "url": "test/refactoring.html",
    "revision": "d4741520e9ce046b5b13a475e9227cc6"
  },
  {
    "url": "test/test-first.html",
    "revision": "014dfb03a6e19fd2b682ae46531cf837"
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
