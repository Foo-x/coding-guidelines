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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3ec5963bf06e1e6d35030e3767a5620f"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "8aa374c097ab4b0d22a4d59fce773416"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "8dfdb1e8b71b4e27de542ff5d704a819"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "e6dbed6ef69cb72d1c0196c616e3c399"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "e0dc192ea755e0a261901d5a72654b0c"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "c409db316d80b574f15ceb3e18fe9a88"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "07290c28498399276e706e0665c32d5f"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "c98a283c49b5f29cb0137cbbf9d4c8a1"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "99cfcaf96c3f5c599703470d408fc229"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "3f1dcb89ea145f205a966373cab04c62"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "895d7e3011fba88d3a432cd38be2d00b"
  },
  {
    "url": "architecture/REP.html",
    "revision": "09b2806c12bfb3c9681f6fcd0c9820c0"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "dd94b84e84994f3b6324ca4a83fe17c5"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "d31bb9c596e2e3a0d67a3594c9710d3b"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "abeb334f2693d0b37ea47449fbd3f8b7"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "0b90cb3200bf9c3991b5395ec3fa9b80"
  },
  {
    "url": "assets/css/0.styles.a523c392.css",
    "revision": "76036eb479a7038d22b76d1223e8eece"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.66705841.js",
    "revision": "b534ffd4cf1015c88f9249679ea3e37c"
  },
  {
    "url": "assets/js/11.41498d29.js",
    "revision": "bdd129ce6357506530afd6e77c729b12"
  },
  {
    "url": "assets/js/12.a917781b.js",
    "revision": "18a155bb947bcfdf0624e33cc3585fd0"
  },
  {
    "url": "assets/js/13.7ec2a224.js",
    "revision": "1f3e7651216d513981e2c9a3d7d09c35"
  },
  {
    "url": "assets/js/14.4b39449d.js",
    "revision": "49b70ce99f67c9fe683bb61e629acc73"
  },
  {
    "url": "assets/js/15.513a4880.js",
    "revision": "0974f30dd134353c67f010e595d7aba9"
  },
  {
    "url": "assets/js/16.4f85173b.js",
    "revision": "f8fc6c2dad01a75fd7d8ad326496fcab"
  },
  {
    "url": "assets/js/17.9c13556f.js",
    "revision": "b0d19f0b322d39ccef266f3301273da5"
  },
  {
    "url": "assets/js/18.ea8f3b27.js",
    "revision": "18bac9e2da503f08d70a9b929596c292"
  },
  {
    "url": "assets/js/19.d303ff27.js",
    "revision": "a2f5c6e229c1517f8411bb357b6ab891"
  },
  {
    "url": "assets/js/2.7fb7b645.js",
    "revision": "3378058965ce36cde9f6122d173f24ee"
  },
  {
    "url": "assets/js/20.a0d684e4.js",
    "revision": "57472b65ffbab6f276edf6dadc2260f9"
  },
  {
    "url": "assets/js/21.3bf2716d.js",
    "revision": "ff27ec2e5f7a753c906af70eb5012aec"
  },
  {
    "url": "assets/js/22.1842cfcd.js",
    "revision": "1dcb794c3d7dc6753f441ad4cc53405f"
  },
  {
    "url": "assets/js/23.c7a958b7.js",
    "revision": "8dddb7e09dedb6f7ab434658ad95d9d7"
  },
  {
    "url": "assets/js/24.f3028587.js",
    "revision": "62f15c0129144b7fc0285c085a5343eb"
  },
  {
    "url": "assets/js/25.9bd17035.js",
    "revision": "1ccb241dbf4e3aff65b174e0ba96a3d4"
  },
  {
    "url": "assets/js/26.5b0cd25b.js",
    "revision": "85693de9d66c362b8a0a258389c12a56"
  },
  {
    "url": "assets/js/27.3ed47e97.js",
    "revision": "37d354613769d27b67350c284b6603ba"
  },
  {
    "url": "assets/js/28.a7b29b3f.js",
    "revision": "c522a61ae138f72e3e1afe978b666303"
  },
  {
    "url": "assets/js/29.cf1ac0ad.js",
    "revision": "8a9f0e1b1fca6d369b51cc4af6c86494"
  },
  {
    "url": "assets/js/3.46dc2c0f.js",
    "revision": "7a12a912ae95e2461dfe36729c8abf08"
  },
  {
    "url": "assets/js/30.0d364d64.js",
    "revision": "b2f0756df8529a5f2909036af35de37b"
  },
  {
    "url": "assets/js/31.3af19b2c.js",
    "revision": "c0aa6b32b6bb72e8f7302984d0c1867f"
  },
  {
    "url": "assets/js/32.fb229161.js",
    "revision": "4fb810b8165fee49450ae36776611154"
  },
  {
    "url": "assets/js/33.96871e3e.js",
    "revision": "77fd767431b3299809a95c075a305d0f"
  },
  {
    "url": "assets/js/34.c0005757.js",
    "revision": "93928b41b5f9f2c8eb9f8885942e6dae"
  },
  {
    "url": "assets/js/35.b202476e.js",
    "revision": "4f5bed7c41ccd9153301245c092eb1bc"
  },
  {
    "url": "assets/js/36.cdd0a6f9.js",
    "revision": "274578836cb67f2c9d7b068294dad8c5"
  },
  {
    "url": "assets/js/37.e273cf47.js",
    "revision": "cfc1b55d203f8ddf45329165f86873aa"
  },
  {
    "url": "assets/js/38.9b6cc2e3.js",
    "revision": "f7a24be71d5efa0f9dccbd9f9f8bbb2c"
  },
  {
    "url": "assets/js/39.fc5fc587.js",
    "revision": "39b94a86751412c7ff9de7f01237f11d"
  },
  {
    "url": "assets/js/4.00a7a62d.js",
    "revision": "fc4815d1951bfec257f45d22c78b74d4"
  },
  {
    "url": "assets/js/40.0c36febb.js",
    "revision": "f09ccb98bcc57a25699bf1870edf5444"
  },
  {
    "url": "assets/js/41.757cd3f5.js",
    "revision": "c8743fe5f0ba84867f0151a82dd77b98"
  },
  {
    "url": "assets/js/42.cf4b3ed6.js",
    "revision": "cb372132599a3f9846bb11fafa601522"
  },
  {
    "url": "assets/js/43.f57bf52a.js",
    "revision": "85fd8c73bd1f2987c585053e1fb74fbf"
  },
  {
    "url": "assets/js/44.2ac05239.js",
    "revision": "0bb544d5ae75c332c6b5a330b806e785"
  },
  {
    "url": "assets/js/45.9afdc7c9.js",
    "revision": "80bd2be087bad7162c13300d6a823674"
  },
  {
    "url": "assets/js/46.0cb4dc6a.js",
    "revision": "61698aa19ea53f51be6c778ffe9d13a8"
  },
  {
    "url": "assets/js/5.880b2576.js",
    "revision": "c1a69434bc4b76e2953387c0ab0fe8e9"
  },
  {
    "url": "assets/js/6.a21d5a7d.js",
    "revision": "69ea32f66d6f662375ea7e8cdd4411e8"
  },
  {
    "url": "assets/js/7.e76554b4.js",
    "revision": "990bd9070a7b34a0ffa9c945818f8279"
  },
  {
    "url": "assets/js/8.f251d4ed.js",
    "revision": "ebe806a0de982b21c83f9abbda551e3f"
  },
  {
    "url": "assets/js/9.2f3b6003.js",
    "revision": "828883ddbe87520b1c6cc09fd16e9b24"
  },
  {
    "url": "assets/js/app.5b23dc97.js",
    "revision": "60bd2b90afc03529f0f5fe0d7716643a"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "730101ff7bad26be488054c4b41ffd7e"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "5b80980f158acd4451a3ac6c1046e387"
  },
  {
    "url": "comment/kinds.html",
    "revision": "77f5c651abb2edfcecf9af18524709ea"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "20afc4b59847a2eb2e11b7cb11e4ab98"
  },
  {
    "url": "consistency/index.html",
    "revision": "9416dfa42f5caef0595c9c1312493608"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "9b27f59ff62f371e28b6dcbcb18f5808"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "4eee601cf213c166b3f3b123adaf9a4a"
  },
  {
    "url": "logic/declarative.html",
    "revision": "ebde1ddb03330537cdb498fcc4f8e3b7"
  },
  {
    "url": "logic/early-return.html",
    "revision": "3492de0b6a533205c545b35b874b4f08"
  },
  {
    "url": "logic/immutability.html",
    "revision": "9526d8b7219efc9ec426ad7a78e6d31d"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "3b2376b79a910e18b9dc4df1e7e5342f"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "ace2c3335cf0eb435e330d507d04efad"
  },
  {
    "url": "logic/prohibit-redundancy-arguments-check.html",
    "revision": "8018b2a925365ba47f8dfbed86aced73"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "31fa95fd31179ed56f859a78ee84c816"
  },
  {
    "url": "logic/use-library.html",
    "revision": "7759dd382deab8183e16edcc0d3fc7df"
  },
  {
    "url": "name/concreteness.html",
    "revision": "a1482819152b2a29ec95783f9bc31e81"
  },
  {
    "url": "name/index.html",
    "revision": "817ff77ae150acd1645e71e3ac7357e8"
  },
  {
    "url": "name/prejudice.html",
    "revision": "61b73efb39d3d5efc545e56c9b85e419"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "d1c63f4992e6dad7cce0667b57ad27a7"
  },
  {
    "url": "principles/DRY.html",
    "revision": "0bc792a447bb4bc72fd6489c33a87443"
  },
  {
    "url": "principles/KISS.html",
    "revision": "70eadaa7a4316f68d18d0219b5927cc8"
  },
  {
    "url": "principles/PIE.html",
    "revision": "ef4f406fd073a471edbdea10e8fb7b90"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "8c19d041df51caf10f2a80b6c3d0b44f"
  },
  {
    "url": "test/index.html",
    "revision": "0ab6d141dbb43be3e23d188aea18c6ee"
  },
  {
    "url": "test/refactoring.html",
    "revision": "9c2fee529bd58b5b7c9be268eae8bccc"
  },
  {
    "url": "test/test-first.html",
    "revision": "2221e240dbaec5e326a1808a97221c98"
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
