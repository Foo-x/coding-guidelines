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
    "revision": "215198d3ee5f4a1182f3230877fd7f26"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "e7ac4d18f3bc880f98589c9ecd1fc745"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "d9028c50d0f040c318a9a44babd1064a"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "020dc73d971c2d5bf224ac64e7a28ee9"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "27fd0cc395e04ed27e5cbc84279f41ed"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "5e445d5f6f465b5d62291ffef7f45c76"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "ca00570fa954b50a3fffcaa1f1c3413f"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "9ccff94d07818621c0afaffedbc10ea3"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "3d226e02532d18599000a8b155150816"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "114cd027b9e0ce3c8960857c5b68431f"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "ae3ba202f2e3294203b285f7d6dc3214"
  },
  {
    "url": "architecture/REP.html",
    "revision": "870d72691a0db0d8de9d6032333b6210"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "70e2b78b709bddcf86102d4c87b49f74"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "28b7d48ae2a35a5786a457b1dd57954e"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "d9fe35babbeca39bfd1ae4434de2505e"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "044f629726a091c6a657cb540309c857"
  },
  {
    "url": "assets/css/0.styles.858a4262.css",
    "revision": "7675c26d3dcebe1c54caebc75446c9cd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.42c0305e.js",
    "revision": "e65e2412e177af81b095fdf15f81dc8e"
  },
  {
    "url": "assets/js/11.a253316e.js",
    "revision": "f32a75e04a49ed7acd7877dcc75674d9"
  },
  {
    "url": "assets/js/12.209e77d4.js",
    "revision": "6b38aa958c6f6b44a15b840aed2f43f5"
  },
  {
    "url": "assets/js/13.70d3a009.js",
    "revision": "0d034210d2edeea41349692203b081ac"
  },
  {
    "url": "assets/js/14.d4da6d1b.js",
    "revision": "a597ec849afb0eae3bae98379050a206"
  },
  {
    "url": "assets/js/15.b8494a11.js",
    "revision": "ba56eeb67eba2c6da5257f3fc9c7dd5d"
  },
  {
    "url": "assets/js/16.ed2beea5.js",
    "revision": "5f10f220aa9c82521d2e1ffc49541dc1"
  },
  {
    "url": "assets/js/17.9b04e7ae.js",
    "revision": "62e748c0aba089766bd3f984db3e8e40"
  },
  {
    "url": "assets/js/18.ce3dbf32.js",
    "revision": "bac34fcfe8c85b437e935ee624afd28d"
  },
  {
    "url": "assets/js/19.953cfc6d.js",
    "revision": "f6404321f1eb4648dd17bdb6a8704aa2"
  },
  {
    "url": "assets/js/2.61f59fc2.js",
    "revision": "2c82f1b50497501c95037825b7269157"
  },
  {
    "url": "assets/js/20.14b5e204.js",
    "revision": "b6966efd3b5707ebd7afe7419e2fb297"
  },
  {
    "url": "assets/js/21.e40e4181.js",
    "revision": "dd4e939bd070e7aeccf12691d117a263"
  },
  {
    "url": "assets/js/22.de02f575.js",
    "revision": "57953997817a6c4927d60ce2a2b8e5db"
  },
  {
    "url": "assets/js/23.2f734c26.js",
    "revision": "01934bce1714cebeb60a316df2f49bb4"
  },
  {
    "url": "assets/js/24.e1cdc7c6.js",
    "revision": "8becf882cf24b9b6978a711d3028629a"
  },
  {
    "url": "assets/js/25.578814b4.js",
    "revision": "96f687a81b47285adab2ca281f0bb31e"
  },
  {
    "url": "assets/js/26.3c2cfc18.js",
    "revision": "5a49d81997d3414de961c99115e43959"
  },
  {
    "url": "assets/js/27.14594f37.js",
    "revision": "e3b2c8ea6cfcd3a57ef4c0bf85795435"
  },
  {
    "url": "assets/js/28.b9803739.js",
    "revision": "1382f8bb35cf67a33eaeedde5b5d9842"
  },
  {
    "url": "assets/js/29.acc9d4b0.js",
    "revision": "d4996e22273354ee8d12b75689b79bb5"
  },
  {
    "url": "assets/js/3.7dce26f2.js",
    "revision": "9692da0733df96083849b7ded95c1278"
  },
  {
    "url": "assets/js/30.dbd41348.js",
    "revision": "d1df599e5f58a4e82801ce74ab2d473a"
  },
  {
    "url": "assets/js/31.44d51ce4.js",
    "revision": "077c4b271d52dad3337cfcfd0c5d8db1"
  },
  {
    "url": "assets/js/32.9a609277.js",
    "revision": "67367e92c8b1eae6c4865bdc82974db1"
  },
  {
    "url": "assets/js/33.7d8cad19.js",
    "revision": "bd0932a9ecb0de379f77104eaac8b3ed"
  },
  {
    "url": "assets/js/34.3db618cc.js",
    "revision": "8dfcc3bbd8e837b63cab044865df5066"
  },
  {
    "url": "assets/js/35.43628439.js",
    "revision": "f920677f9f392dc16bdf6a2b75e86263"
  },
  {
    "url": "assets/js/36.c5967f49.js",
    "revision": "9590609970faf12c01961fb0de256a07"
  },
  {
    "url": "assets/js/37.7cbd01b0.js",
    "revision": "42d684c8ff09e0cd75668c7368171409"
  },
  {
    "url": "assets/js/38.eca9b2d0.js",
    "revision": "aa2caf27ecf9d3b430439d1f62761fbc"
  },
  {
    "url": "assets/js/39.92873d24.js",
    "revision": "0fe10031582a81dcd47abc19d3326264"
  },
  {
    "url": "assets/js/4.31c0c38e.js",
    "revision": "5724af56408522b2183168a38124dba5"
  },
  {
    "url": "assets/js/40.7d39a777.js",
    "revision": "2b606d4b47b260f337e736ce0e3c2444"
  },
  {
    "url": "assets/js/41.0cc39a4c.js",
    "revision": "047adf47afb8f833a43937787c8e66dd"
  },
  {
    "url": "assets/js/42.6f40f632.js",
    "revision": "08c920b1c8af776dcd756839a10b4d87"
  },
  {
    "url": "assets/js/43.53722010.js",
    "revision": "15f0296e7fb2606e4a549cc2464b5a8f"
  },
  {
    "url": "assets/js/44.eceebc9d.js",
    "revision": "40eb112f242505bacb58f1ab1e53717b"
  },
  {
    "url": "assets/js/45.f8b36751.js",
    "revision": "ea0904d45dde1b6fc5754e0b7ef1412b"
  },
  {
    "url": "assets/js/46.00dbe8de.js",
    "revision": "753f28d9a5ea01329152d9a6e1dc6a18"
  },
  {
    "url": "assets/js/47.12ac4524.js",
    "revision": "d70b0ad4b4b18e87611611f0bec66d8b"
  },
  {
    "url": "assets/js/48.4bf0494e.js",
    "revision": "d947ec7f27dea5bd2dcf539ab4e3c656"
  },
  {
    "url": "assets/js/5.1c1523c7.js",
    "revision": "1a23fdcb4ce9ee01493ed629af9f6e54"
  },
  {
    "url": "assets/js/6.6ccc1642.js",
    "revision": "83f7d8e02c09d7b25ff6694b3a4b0ce3"
  },
  {
    "url": "assets/js/7.f42876b6.js",
    "revision": "9d50797d1572473d124fdb3ef1117f60"
  },
  {
    "url": "assets/js/8.977521b7.js",
    "revision": "655537d98f51b7bd6f09fff18584afc4"
  },
  {
    "url": "assets/js/9.b7ddf4c3.js",
    "revision": "863922ee07ae59e8b2cb0a870df9aa06"
  },
  {
    "url": "assets/js/app.69edc847.js",
    "revision": "9abd7e2653d3910ab024b1d8a65cac80"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "8d986745b838fec4c997c5813a499506"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "973c68be410a0cbf5f5c38ddb1e133fd"
  },
  {
    "url": "comment/kinds.html",
    "revision": "9d93cd505261573b1d8db800eac8bdbc"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "acef37e5331aeb58e54763c593a3ff6c"
  },
  {
    "url": "consistency/index.html",
    "revision": "042810d2028620efa37d16e06cbb43e7"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "197ed1f55261b169392e9da5acd07ad9"
  },
  {
    "url": "logic/CQS.html",
    "revision": "d7e431d8b8b1be076da2c5a57b3dbafa"
  },
  {
    "url": "logic/declarative.html",
    "revision": "555eb8bda107a4ea7f2036e6c284e163"
  },
  {
    "url": "logic/early-return.html",
    "revision": "f0649daa38fd844888935d5e92f9ff62"
  },
  {
    "url": "logic/immutability.html",
    "revision": "f93dbddcd4bd8362079c484c83c5887a"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "9e0d51e2b810004e19c9763a7bd62529"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "3e7fdee960e340f41180b43b95496cf6"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "4c692c8e188a6413af8ecd30b8ceb9e8"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "985541388c79e2a0f9d2b6440626901f"
  },
  {
    "url": "logic/use-library.html",
    "revision": "da38dab3a4c4dffc4b20457775fa798c"
  },
  {
    "url": "name/concreteness.html",
    "revision": "3ee2ef8ce9373ad88d8cf3303813512e"
  },
  {
    "url": "name/index.html",
    "revision": "1b130bcfb567b6cdf9373254f2548646"
  },
  {
    "url": "name/prejudice.html",
    "revision": "93b0801c7ea29908e440d9e6a2cdfbb9"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "bfb7ea50607cb4c771d1fbc05f27d977"
  },
  {
    "url": "principles/DRY.html",
    "revision": "7b48940611a536612e335b5a88be834a"
  },
  {
    "url": "principles/KISS.html",
    "revision": "30640536ae261cf3dc9d18e7ce27ecfe"
  },
  {
    "url": "principles/PIE.html",
    "revision": "f710aea5744e535ff197e1949db36d0d"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "9e678bc86b94fabc37e239ca923b5232"
  },
  {
    "url": "test/index.html",
    "revision": "adafa9eedb8e7164aa518bc309dae919"
  },
  {
    "url": "test/refactoring.html",
    "revision": "8b9f73f1254b043000e3c39b9641bca3"
  },
  {
    "url": "test/test-first.html",
    "revision": "42370a1ddefda76b8673ffd48c0a84be"
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
