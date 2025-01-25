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
    "revision": "eeb57e0be8d4903e045cb4d04750c91a"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "99726560487f51d29a45979f9efa84ff"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "0a940e253850c68a219d70e3c78202f9"
  },
  {
    "url": "architecture/clean-architecture.html",
    "revision": "6f85b8f85fe0a0ce781c67dff7787265"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "39d70c26b87ee9e13a42f5c8ebdda081"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "889cd4afe12809892c4364b6daa93b50"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "a41b6cb66518b3c4d6f91e2ebd31b781"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "789941065fcbb80ebbbee5cde1afc0d7"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "626898b2fb303424941a2a85248c7548"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "d28f3d577852ad5efc570cc659c31452"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "54955c5f3c3924abca5720a83b122102"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "baf714de193747c831eb856e4aa4c55d"
  },
  {
    "url": "architecture/principles-of-package-design.html",
    "revision": "129eabe11865efa7b99fb93cfc5a37e1"
  },
  {
    "url": "architecture/REP.html",
    "revision": "ceefa59f09cbfc5a4388717605ae9a71"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "e94532c37510449f34e8995d5c135063"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "885d646d2848f93c9bb6013fef184a0e"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "073745c0407ff162f01d2b47c8599eb6"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "ba6d3fe4fe223fab0b9b94b5e73be467"
  },
  {
    "url": "assets/css/0.styles.d4de62e0.css",
    "revision": "b536fddf998353dd4daef00190b5deb8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.cee86e9c.js",
    "revision": "105393ac7ffc8808e375ae099e48748b"
  },
  {
    "url": "assets/js/10.30bdf77c.js",
    "revision": "ab3dcc9aae147b44e0096fd9fcb5d6ef"
  },
  {
    "url": "assets/js/11.f1e89fcb.js",
    "revision": "e5a864d8bd5a1c4b175c64553bffdccd"
  },
  {
    "url": "assets/js/12.8ffab9f1.js",
    "revision": "da40e997046ccd7f1eceef957b69f903"
  },
  {
    "url": "assets/js/13.addaa91f.js",
    "revision": "b75b9f7b45d55b0d07e395f61b592307"
  },
  {
    "url": "assets/js/14.911bb3b2.js",
    "revision": "9a39988048afc82bfcdc3434e08e3d60"
  },
  {
    "url": "assets/js/15.6ea5c4b8.js",
    "revision": "80f27350704667f893bbc1d4805af585"
  },
  {
    "url": "assets/js/16.6dc16aa5.js",
    "revision": "53500afcda2378232fdaeffc24ccd3e2"
  },
  {
    "url": "assets/js/17.584deeb2.js",
    "revision": "42a3c0568d68e22a408ae6ea8d27612b"
  },
  {
    "url": "assets/js/18.80ab81b9.js",
    "revision": "a99db5cc1ec0db83f19d957cd834ebd5"
  },
  {
    "url": "assets/js/19.75c12db6.js",
    "revision": "81985d3103b96997e75d458e5fcf0f35"
  },
  {
    "url": "assets/js/2.f15895a2.js",
    "revision": "1ba42b82fecb52cff5e23852b3e35c99"
  },
  {
    "url": "assets/js/20.a3978ebc.js",
    "revision": "9d26a9a0fc03fa1bb9a438ae76c495fa"
  },
  {
    "url": "assets/js/21.a1e57d67.js",
    "revision": "c8280f12cefb2c58286ed364112529d5"
  },
  {
    "url": "assets/js/22.3987f270.js",
    "revision": "cfd13ba2318ab833497e659b24baa20a"
  },
  {
    "url": "assets/js/23.9ad01c53.js",
    "revision": "6107e1fcc57b46da160dcce994821505"
  },
  {
    "url": "assets/js/24.1b31c195.js",
    "revision": "ec006fe1f988e7dcbf9c53c126da6820"
  },
  {
    "url": "assets/js/25.b31af4ff.js",
    "revision": "a8485daa8779d418fdc5dccf04f1b337"
  },
  {
    "url": "assets/js/26.d0823a0e.js",
    "revision": "92cdaec258d8fd0c530aed74705fa9ce"
  },
  {
    "url": "assets/js/27.dcc72f17.js",
    "revision": "1d423a82fbef715be5c5792c77c731d2"
  },
  {
    "url": "assets/js/28.f2c48334.js",
    "revision": "4f09583ca74761954b3b345ef9a20d12"
  },
  {
    "url": "assets/js/29.067f773c.js",
    "revision": "32765315d4eee188678c833120406286"
  },
  {
    "url": "assets/js/3.c7ba9505.js",
    "revision": "579155dee4f6b340b31babbc94b3f9be"
  },
  {
    "url": "assets/js/30.f42f15c3.js",
    "revision": "45ffa05f709ac926e2394858946863c7"
  },
  {
    "url": "assets/js/31.36f17178.js",
    "revision": "dab05042909d82f4f15c5770afc4fb3a"
  },
  {
    "url": "assets/js/32.f3d99ae3.js",
    "revision": "ba0d15ebd918e978a566155147d80731"
  },
  {
    "url": "assets/js/33.7d7481e6.js",
    "revision": "077a7305ea8baa43358778f92e5a1f15"
  },
  {
    "url": "assets/js/34.b4a7b071.js",
    "revision": "d5b3c1b06ee74b3d0cb273bb9c6d5f78"
  },
  {
    "url": "assets/js/35.c2d1db53.js",
    "revision": "6b3e8d3a4c5431b9ec4bfba3480ed70f"
  },
  {
    "url": "assets/js/36.81fc5fd8.js",
    "revision": "fcb69859e528c2d7485a777422e13c69"
  },
  {
    "url": "assets/js/37.92fa9942.js",
    "revision": "747e1f2827a9ca25b031632245aa5b01"
  },
  {
    "url": "assets/js/38.8212da6c.js",
    "revision": "ac8ca51b063de9d9e3a6a75a2300e7ec"
  },
  {
    "url": "assets/js/39.0dcad807.js",
    "revision": "e58fed316ce3696a6f2970df7b73fd51"
  },
  {
    "url": "assets/js/4.3c860fdc.js",
    "revision": "7a859fa90401f0573ce535752c2ce143"
  },
  {
    "url": "assets/js/40.848641cb.js",
    "revision": "cd63f4d6f6125110a9cb0a7152a3791e"
  },
  {
    "url": "assets/js/41.90762c45.js",
    "revision": "486030ce5180cd8d6cfdd2bacc9cb8ef"
  },
  {
    "url": "assets/js/42.9a9bfbc1.js",
    "revision": "c8ed65b5b2c49df2bd303a730d1f6cd3"
  },
  {
    "url": "assets/js/43.9d5be1e5.js",
    "revision": "cb08bd3e39839aba2238f459cd29a5f1"
  },
  {
    "url": "assets/js/44.5486992f.js",
    "revision": "ea0b5dcea1c006421b8d8cfbdda8333f"
  },
  {
    "url": "assets/js/45.48360116.js",
    "revision": "cfcd275f0478feddd13bdaa612f40c26"
  },
  {
    "url": "assets/js/46.deb7e5d3.js",
    "revision": "ecc5e7d0bae47a8660aebe8de816fc5e"
  },
  {
    "url": "assets/js/47.7d5e2b86.js",
    "revision": "1688e6145fd60ec51c4990bf54a5cb23"
  },
  {
    "url": "assets/js/48.14ae35b1.js",
    "revision": "fec5348753ce96688f16d00d724d2e66"
  },
  {
    "url": "assets/js/49.16a310b7.js",
    "revision": "f8399655f3afcc7d905f556079226947"
  },
  {
    "url": "assets/js/5.30f61c1e.js",
    "revision": "1df5a86a2f92833feebc03d7498d9133"
  },
  {
    "url": "assets/js/50.45d4bc22.js",
    "revision": "85c2c1cffaaefae4ada970cec6d9c615"
  },
  {
    "url": "assets/js/51.9b19f1a5.js",
    "revision": "528fd48a24d8906cd8ec127f8241937f"
  },
  {
    "url": "assets/js/52.75dddf88.js",
    "revision": "b123683852e7ce288cacba9eed25a2e4"
  },
  {
    "url": "assets/js/53.e01c3ad1.js",
    "revision": "3c3c7a49bcbaaceda1d934f7dd8053dd"
  },
  {
    "url": "assets/js/54.ff3b7ad8.js",
    "revision": "66bf42017f12a5cee777dda043ca1381"
  },
  {
    "url": "assets/js/55.5c6addf0.js",
    "revision": "37047e50445f7149e982542b43421fc7"
  },
  {
    "url": "assets/js/56.372bdfff.js",
    "revision": "c2b7d1f5da69bb1e5e91e5f854e95739"
  },
  {
    "url": "assets/js/57.a1dbfb15.js",
    "revision": "1ad181efdfac7503a1f0928d96a75931"
  },
  {
    "url": "assets/js/58.56aa58d8.js",
    "revision": "d9ca7e74f6c74a140acd81df4b5277d2"
  },
  {
    "url": "assets/js/59.88acd9b5.js",
    "revision": "40cc3d256398f14c8eddc223404439ee"
  },
  {
    "url": "assets/js/6.4760b562.js",
    "revision": "bfd322073d6ca4c808d0c0e30bda3edd"
  },
  {
    "url": "assets/js/60.929ffb1b.js",
    "revision": "30f79afc6658dfb200bf6ff7c97ca6a8"
  },
  {
    "url": "assets/js/61.8b026a78.js",
    "revision": "55430d8996a285fc7cc74acfaf8536e8"
  },
  {
    "url": "assets/js/62.70816d64.js",
    "revision": "a0573ea085609c8ceccc8aef0cf67094"
  },
  {
    "url": "assets/js/63.255359d6.js",
    "revision": "c9e4af3084dedbbeb5eee965b9fb9c1d"
  },
  {
    "url": "assets/js/64.180d73be.js",
    "revision": "943609df13fb79dbebae31a91b09b189"
  },
  {
    "url": "assets/js/65.2337584e.js",
    "revision": "4555945672c8c9c89ac47393293df886"
  },
  {
    "url": "assets/js/66.d398fffb.js",
    "revision": "47f9c6c95b361b406010e704650819f1"
  },
  {
    "url": "assets/js/67.b0834b81.js",
    "revision": "966cdc33c7772d31954a5ffdd2c94099"
  },
  {
    "url": "assets/js/68.1fe6c3b0.js",
    "revision": "56f7c2155573677264e3ef52a19acee7"
  },
  {
    "url": "assets/js/69.17afc975.js",
    "revision": "864e8ffceae8571cc563637c83a36faa"
  },
  {
    "url": "assets/js/7.c8f73533.js",
    "revision": "0fa763882fb38d50aaaeb47ea5392c67"
  },
  {
    "url": "assets/js/70.b8b75086.js",
    "revision": "72009ef06f632bd97743f5751bbe8c6f"
  },
  {
    "url": "assets/js/71.8420e2d1.js",
    "revision": "09ad172436ddea5a0155368881ee06d1"
  },
  {
    "url": "assets/js/72.79dcd517.js",
    "revision": "4204e7f3d60d8ca10380068d715022e8"
  },
  {
    "url": "assets/js/app.3f6130b1.js",
    "revision": "664dc8567e207002be69ed9efb64649a"
  },
  {
    "url": "assets/js/vendors~docsearch.50a7a736.js",
    "revision": "2fe8562dae5a049c6495decbe13e29aa"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "d4e01ba6f60900e22b4873575da97671"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "e58276d986feb5d5612c41249cde8277"
  },
  {
    "url": "comment/kinds.html",
    "revision": "9bf44bd4f05901283ba26111768eb442"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "2df3cc460c4ea64164772df5384551f6"
  },
  {
    "url": "consistency/index.html",
    "revision": "2dffb7abbc2b8ee46c84fbca30471d11"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "60a74db07d5b36e3d20dd117687e68d9"
  },
  {
    "url": "logic/CQS.html",
    "revision": "d5b0dfdfce7ab79e52399f130c3ead52"
  },
  {
    "url": "logic/declarative.html",
    "revision": "434aca0bec3c356575e6eacdeaeba265"
  },
  {
    "url": "logic/early-return.html",
    "revision": "d50c4c61a894da3c633d3540740519ed"
  },
  {
    "url": "logic/immutability.html",
    "revision": "f74838563a7a7e87f117ea4be64fffd1"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "02a9a691e90c80c12d73c4abe3c45dc5"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "8e4bb03fed7d3f3626a6f861011fd139"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "45ca367531edec83c7a9a1e3c3ad18fb"
  },
  {
    "url": "logic/pure-function.html",
    "revision": "2c40bfcd47ab6a69ed976217d1d9240f"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "e7fa0a6f56e2673f050805d842be8917"
  },
  {
    "url": "logic/use-library.html",
    "revision": "a62808863485c9c7bed34879b17c2a19"
  },
  {
    "url": "name/concreteness.html",
    "revision": "663032521c8bb3a7154da7fecc83de9a"
  },
  {
    "url": "name/index.html",
    "revision": "5f5208526207f744d8fbf29c71591819"
  },
  {
    "url": "name/prejudice.html",
    "revision": "6cdd55bf90b005b862823156b0e36161"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "43682d1af03c5d23ba9496832c4e817e"
  },
  {
    "url": "principles/DRY.html",
    "revision": "9f7e766520d7e99ee3876a8adfa3e59d"
  },
  {
    "url": "principles/KISS.html",
    "revision": "53a501019cf50ed2a182d070d8f31f39"
  },
  {
    "url": "principles/PIE.html",
    "revision": "0302669fb3286c9dcdd9c0daad229791"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "d2bc70042701becc8eec1bfeb327c73a"
  },
  {
    "url": "test/AAA.html",
    "revision": "0f5dcd6616e8a761ba52f591c0976962"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "13fe2c2edc9122df76a7519525ad1224"
  },
  {
    "url": "test/cross-check.html",
    "revision": "1cf2859a41714a097a8d4926aae2879d"
  },
  {
    "url": "test/index.html",
    "revision": "3cadeb5cc190762477d945216c012fe2"
  },
  {
    "url": "test/naming.html",
    "revision": "a06230aa7a11600bfe2ed786d9b35ccb"
  },
  {
    "url": "test/one-test-one-point.html",
    "revision": "ff8cab7169875de8d563a60195796570"
  },
  {
    "url": "test/refactoring.html",
    "revision": "0c6eb765a1a0a7a861f358d13d7c1678"
  },
  {
    "url": "test/test-data-builder.html",
    "revision": "6d14baa176b19e4ab3ccf09d50ad2182"
  },
  {
    "url": "test/test-first.html",
    "revision": "acb3b2e38505e1362826469913f24889"
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
