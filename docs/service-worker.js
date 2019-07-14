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
    "revision": "674877c2292fa3172c0433fd204f25c2"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "62bf64412813b660ec2fa120e2cf153d"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "10f9269fb3898a37fdc100e2cb926d93"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "9f2723350f39c8799a462546bc1b7917"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "4988b538033f22921fc3fba3fb7fa451"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "bf3f73f7ff7f7b95ed3b0416abc8cb5e"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "0dceaa399d7ac6e24dda2d981334af24"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "4d1f41ec38ebe674cb066885000be694"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "dc415d6c471bc08e8bc20ac74a7d83d8"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "bddf14ef8300fcd190256189fd2ba935"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "e915af73350a1f0468566a275afbd997"
  },
  {
    "url": "architecture/REP.html",
    "revision": "4df02e2a716f04466f5cb8af112754e5"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "e1beaf9f087a582e74b6fbc6c8390afe"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "cc20e8a3a4167f951bb4e2a2ca189ff9"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "06a910fc4316c4f3cf48b1bb3999f1b6"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "5fe3d76e86309c60a89d154a3da242dc"
  },
  {
    "url": "assets/css/0.styles.1d36a92b.css",
    "revision": "7569a990ff24722cbbe1c285591f913d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.48445887.js",
    "revision": "3eceb6b3aad4ce9b531b2ce7ccc57b2e"
  },
  {
    "url": "assets/js/11.ecda5651.js",
    "revision": "ade5613931271c6bec0308c2c38533a8"
  },
  {
    "url": "assets/js/12.70e160a3.js",
    "revision": "55c86bc808640d9e4046790fa13bd796"
  },
  {
    "url": "assets/js/13.a6a63f73.js",
    "revision": "f26b21ecd40b727207ef04258a75498e"
  },
  {
    "url": "assets/js/14.afc19c71.js",
    "revision": "c969eb6eafa5445ac85e13eda99533eb"
  },
  {
    "url": "assets/js/15.8f980e7e.js",
    "revision": "623cbd4611e71ea7579292b824a6128f"
  },
  {
    "url": "assets/js/16.aa4dc227.js",
    "revision": "1a0790e290a71d6a5baa30405bc2ef56"
  },
  {
    "url": "assets/js/17.e654d81c.js",
    "revision": "63b9d819a8b8f3d87ceaad4522ca6391"
  },
  {
    "url": "assets/js/18.39fec294.js",
    "revision": "229eee72c4523d25ebb2b1da1de62bc2"
  },
  {
    "url": "assets/js/19.4b30d5e4.js",
    "revision": "2e8ed88c708a9df15b3096d8f69f0d1d"
  },
  {
    "url": "assets/js/2.cf8cb465.js",
    "revision": "32d1cf5d5b7a030f56c490d236232432"
  },
  {
    "url": "assets/js/20.22cac54e.js",
    "revision": "7ed8f4efbb8ed8b7dd861c917cbe6896"
  },
  {
    "url": "assets/js/21.fd637afa.js",
    "revision": "d4be93c41fe575c56fd9e618c1ddf7b3"
  },
  {
    "url": "assets/js/22.3ccb7662.js",
    "revision": "3ee55ebda84f29eb1277f2d89446f840"
  },
  {
    "url": "assets/js/23.7f7a4c64.js",
    "revision": "6b0a42a32631da767924bf3edca7cc0c"
  },
  {
    "url": "assets/js/24.22e14974.js",
    "revision": "db0ee9d7c6865795287bb01c20b0826a"
  },
  {
    "url": "assets/js/25.978e9040.js",
    "revision": "899c5998ee5cf73aa906fc119586e938"
  },
  {
    "url": "assets/js/26.90f3c053.js",
    "revision": "d4854536e3cf9118d08f5e04b83e5664"
  },
  {
    "url": "assets/js/27.90855f90.js",
    "revision": "8a8730dfce532d55e49ce1c00c23f15f"
  },
  {
    "url": "assets/js/28.301619eb.js",
    "revision": "69d6003a91706c988f73345dc5c73095"
  },
  {
    "url": "assets/js/29.7f7f6d74.js",
    "revision": "ee2a53b703f9777f15fe8d83f5795fff"
  },
  {
    "url": "assets/js/3.e8a38142.js",
    "revision": "b2b81997532b4934b4354b6cde6e14c2"
  },
  {
    "url": "assets/js/30.5a106a1d.js",
    "revision": "eaf3ec93f2b6b606c48b46ec52e63deb"
  },
  {
    "url": "assets/js/31.7f3490b4.js",
    "revision": "3e4a99e2cbec82db54e17545df3cc04d"
  },
  {
    "url": "assets/js/32.0ad053ce.js",
    "revision": "0fccc16fb55d78e98a287371c25ecfd9"
  },
  {
    "url": "assets/js/33.64688397.js",
    "revision": "a5bd1bfcc5812bd8ca49024c922d061c"
  },
  {
    "url": "assets/js/34.3a73f031.js",
    "revision": "c84258bf57212d1140963529f213c3a4"
  },
  {
    "url": "assets/js/35.c1f06103.js",
    "revision": "204fbe70f9829de14068b8a1602dfd3d"
  },
  {
    "url": "assets/js/36.7babd833.js",
    "revision": "685a4d72ca767b9bb74ef41e51a5c062"
  },
  {
    "url": "assets/js/37.847b8d5c.js",
    "revision": "ea455f2f2ec84c3e8893d83c5f42b739"
  },
  {
    "url": "assets/js/38.a64e6a3d.js",
    "revision": "eda55d582cf0f8d2bf31ba09b01200a1"
  },
  {
    "url": "assets/js/39.9a78572e.js",
    "revision": "534c7fc4dceb50905d50524c8891a7f2"
  },
  {
    "url": "assets/js/4.291b3e9b.js",
    "revision": "9d626f4cfa76cd8d9ed9d24ab8191fe1"
  },
  {
    "url": "assets/js/40.80993b19.js",
    "revision": "e5074fa034abbb466b37f53e3c3fdbf3"
  },
  {
    "url": "assets/js/41.a7bf40ff.js",
    "revision": "3f7cbc55fbacda469d840a689db6bda8"
  },
  {
    "url": "assets/js/42.0740a657.js",
    "revision": "405df1edc9befec09629d4f66c150180"
  },
  {
    "url": "assets/js/43.3f1fe500.js",
    "revision": "73a313aa6a35a90b689da67133629b7e"
  },
  {
    "url": "assets/js/44.ab551529.js",
    "revision": "0468ed35bccfe39a0b9c18e37dfa8479"
  },
  {
    "url": "assets/js/45.4a0e57fd.js",
    "revision": "9648e20a790d90d8ebf96cf58380b260"
  },
  {
    "url": "assets/js/46.5fc3eeee.js",
    "revision": "7a93ff666256056a151b7a5eeeb00c5c"
  },
  {
    "url": "assets/js/5.0df2ee85.js",
    "revision": "8c8dc40222ca82bd1d9360d8e8b8bd70"
  },
  {
    "url": "assets/js/6.f89ce823.js",
    "revision": "4cbe08ff78128cc93ee26b059d2e9c62"
  },
  {
    "url": "assets/js/7.54c9f2c3.js",
    "revision": "bf3cc82aed294d7a8e87bd50dc923c06"
  },
  {
    "url": "assets/js/8.a6521754.js",
    "revision": "5bf8e78c9b0e2916d534fa684fc81553"
  },
  {
    "url": "assets/js/9.9c67e0ae.js",
    "revision": "5bb5352ee6306e29276d9e30177fccf7"
  },
  {
    "url": "assets/js/app.a98780ad.js",
    "revision": "3df04fe50d7892d586dfc5ac570d39b8"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "d5225a1c8567d1b82fe6d0c3399b4175"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "42cf39e7265b5c4111f726bb91c6fcbe"
  },
  {
    "url": "comment/kinds.html",
    "revision": "978a30594de2e034873b8e55f17ca28b"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "11edfbe77ec8c156769fec855976948c"
  },
  {
    "url": "consistency/index.html",
    "revision": "eff9a3ba2e802bcdc2705a99f8792b30"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "f3a92471ca5de65d2472c446bb703cf3"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "4ceb67990a5617ff6a1bbc95896893c3"
  },
  {
    "url": "logic/declarative.html",
    "revision": "26b076220a709a63f79f83e1cd7d4aac"
  },
  {
    "url": "logic/early-return.html",
    "revision": "79d1afcd9e55ea378971a7711402ae13"
  },
  {
    "url": "logic/immutability.html",
    "revision": "20ddefeb66e814abb2ef7106d669518b"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "64e4747a281c84e283363b56d4788b20"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "b5f9ae6a23bcc8dea86c7ffdcb1a5b2d"
  },
  {
    "url": "logic/prohibit-redundancy-arguments-check.html",
    "revision": "236f86d414b31fe61f4ce2f3b296a37b"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "5cdb84c1766d33f6574416a1430b2bf7"
  },
  {
    "url": "logic/use-library.html",
    "revision": "3b3015b0b6b17fba598d124e0e2b13e9"
  },
  {
    "url": "name/concreteness.html",
    "revision": "371b04f871aa682ad46879a189a1d085"
  },
  {
    "url": "name/index.html",
    "revision": "b8b96b44d8a1bf2b73504e5bd30ab124"
  },
  {
    "url": "name/prejudice.html",
    "revision": "5038b0b6eddcc4b47dc8fa74b27c61e0"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "835a5bfb5cd440c2a5eabcbd60dcbc67"
  },
  {
    "url": "principles/DRY.html",
    "revision": "7ac76e6e8406eb2f3679a06884a21e8e"
  },
  {
    "url": "principles/KISS.html",
    "revision": "ab65a3f11c40bc774d7842d99723587b"
  },
  {
    "url": "principles/PIE.html",
    "revision": "cd9125d5f7b55a160a77b5a896680c3d"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "bf469723507cd053f1291319094c902d"
  },
  {
    "url": "test/index.html",
    "revision": "22166d61ff2d4f7d1f5ac612d669731f"
  },
  {
    "url": "test/refactoring.html",
    "revision": "e2ff5920a9692e1a7f9e946617c759c0"
  },
  {
    "url": "test/test-first.html",
    "revision": "2d25481a1466af4035f1053a874a6673"
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
