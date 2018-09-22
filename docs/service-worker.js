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
    "revision": "55996e76e6427d1f0b596b53ba10d17a"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "12c079f484db232e58bf0851506a64f1"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "ae14ce2a9f101ccf9e598ee67fecf51c"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "ce66d8b81f5ef794abdf6dea41c5aca1"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "31b921ae2ae559ad9b7c87be25f0fd97"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "329a268db6ffa04f2312e1f360e8f11d"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "1c66ec741fc5e282ffb237cc4837abee"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "7c9a34cc7e19ba14247b3806db36f5b1"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "65dca710088ca8f656940c66ab597c13"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "2524a1ad0734a53d24eeca09d911238f"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "24400c947aa2ae962495cbdab5f6843b"
  },
  {
    "url": "architecture/REP.html",
    "revision": "f5d0ea56616802a482b909ca3a7437c7"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "86700b2d83b4e5a276332725dc38a678"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "e5b945fb2a6699ffef4f54846f893063"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "bc2989fe74412170b8cf6306d590c7ed"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "f2a3454f37e0fb4971ed17b62265bf02"
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
    "url": "assets/js/10.457cb0de.js",
    "revision": "2ba4b25a15ad7b032bf004f83201e7f7"
  },
  {
    "url": "assets/js/11.005c94ab.js",
    "revision": "59b3662dbf4e969962dd8a01782f38ef"
  },
  {
    "url": "assets/js/12.bec93ecc.js",
    "revision": "0c15ab95bd8db6566d6cdb71e4dd2196"
  },
  {
    "url": "assets/js/13.48a60594.js",
    "revision": "eaaad73de0a57c0bb0538ac4151408dc"
  },
  {
    "url": "assets/js/14.22bbba79.js",
    "revision": "224dc6714d1fe9c17dbfb2e55259c74f"
  },
  {
    "url": "assets/js/15.ba12b0af.js",
    "revision": "ea9db4f8023675853e7bf2dc8497f885"
  },
  {
    "url": "assets/js/16.a93f3ac7.js",
    "revision": "a9f5e11cec2b34911d6f628cd0693c10"
  },
  {
    "url": "assets/js/17.66aa3492.js",
    "revision": "b06421b8b420b0d4b53b219ed29ab072"
  },
  {
    "url": "assets/js/18.a22c5f34.js",
    "revision": "2d2123664873bf78c0613d9361047890"
  },
  {
    "url": "assets/js/19.89844e72.js",
    "revision": "eb5b6337bd10d4af09dbb08778f2d3b5"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.27ce67bc.js",
    "revision": "8f8d16641ffa9eea8911bc46b1d0b7d3"
  },
  {
    "url": "assets/js/21.4ebfc17a.js",
    "revision": "8ca0cfad2f5919be512fc6bee275058c"
  },
  {
    "url": "assets/js/22.bafeb5f9.js",
    "revision": "40a42cc077edd07c15ac5ae8f462f118"
  },
  {
    "url": "assets/js/23.b354e9dc.js",
    "revision": "5363ce85f31d2848cc602fb8b6921560"
  },
  {
    "url": "assets/js/24.0d8a3584.js",
    "revision": "2091cfaed609ac94a9a67393cc13bffd"
  },
  {
    "url": "assets/js/25.726a9c47.js",
    "revision": "332db67e7de0f75aaac028cfa063d1d1"
  },
  {
    "url": "assets/js/26.a222ae22.js",
    "revision": "a3e4e43126db29302d82137f89a423ac"
  },
  {
    "url": "assets/js/27.5b5ab0c0.js",
    "revision": "469e1008aff18cdfc60e6e39197e0188"
  },
  {
    "url": "assets/js/28.ce2f27f0.js",
    "revision": "50c08070a5941995bb436a17d68df73f"
  },
  {
    "url": "assets/js/29.0e072929.js",
    "revision": "e32da1684b35091c94dc80687633df1b"
  },
  {
    "url": "assets/js/3.41b4b053.js",
    "revision": "826fdd107c6e9742959d1cc08ffc1a10"
  },
  {
    "url": "assets/js/30.9930e410.js",
    "revision": "37f80c3aadb95a43e94c1e9755c40922"
  },
  {
    "url": "assets/js/31.8c1f5259.js",
    "revision": "ec39d84726432166f908c742c4450355"
  },
  {
    "url": "assets/js/32.5d4a0b8c.js",
    "revision": "51695970cdb7c80df7b4770de6ce0503"
  },
  {
    "url": "assets/js/33.71481d9e.js",
    "revision": "f302099987b0104b2c3387c6a5fe2641"
  },
  {
    "url": "assets/js/34.672ee999.js",
    "revision": "a49b3800ca173676221adcb41841666d"
  },
  {
    "url": "assets/js/35.761e162c.js",
    "revision": "5d8a364324a442d9cb57e1a943c5fa67"
  },
  {
    "url": "assets/js/36.d7056ab0.js",
    "revision": "f091685856397bb5ad3eea426b2e02af"
  },
  {
    "url": "assets/js/37.cf7b913f.js",
    "revision": "2dca211af2182150686438f80b218768"
  },
  {
    "url": "assets/js/38.4af1d2a1.js",
    "revision": "e87c53cd6c563c22006b57536a0c7e6f"
  },
  {
    "url": "assets/js/39.3f7458ea.js",
    "revision": "9c648591d3fb31faae438e70664b136c"
  },
  {
    "url": "assets/js/4.8ae9c7a4.js",
    "revision": "9c9d039bb785f99843b05db2e270366e"
  },
  {
    "url": "assets/js/40.606e2e68.js",
    "revision": "4a8cd869692ad33e23b58547ccdedc7e"
  },
  {
    "url": "assets/js/41.a7a23630.js",
    "revision": "63acb2029bc758b84eec3495ef702504"
  },
  {
    "url": "assets/js/42.6237074e.js",
    "revision": "9d4a00bc1b79a7043f6bb5185aeddb19"
  },
  {
    "url": "assets/js/5.dc81bf12.js",
    "revision": "36e81d7d542a75a5a135ad3a7b3434ea"
  },
  {
    "url": "assets/js/6.2b8556f3.js",
    "revision": "131574f80ca6255353f1cc6e0511ce53"
  },
  {
    "url": "assets/js/7.e33580b5.js",
    "revision": "34b3863c4f6757a4b0aea9858567efae"
  },
  {
    "url": "assets/js/8.c9d44f75.js",
    "revision": "8b5b5378d47fb77cd27aeb7fc2590b2e"
  },
  {
    "url": "assets/js/9.cd2ea8e8.js",
    "revision": "2e59f0d8e123cfc9d1cc430935ec7a7d"
  },
  {
    "url": "assets/js/app.ecc55df4.js",
    "revision": "7c47a9f48dcc3c57d861478e09309aa5"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "92362b0e105b0d700792af095256af8c"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "21c5071f34829750ddd1cc5fee5c075e"
  },
  {
    "url": "comment/kinds.html",
    "revision": "82170c1ed087ea691a60fef4b6af4822"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "ddcaa7a33fedccf3ce7ee3b4eb88010c"
  },
  {
    "url": "consistency/index.html",
    "revision": "727b97802f8c4cb8ecad6f186f3586a3"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "c884786d0233baeea4c9f3d0106c142d"
  },
  {
    "url": "favicon.png",
    "revision": "ceb76f9b7ceeea6b9c2dd0c53bbdba5a"
  },
  {
    "url": "index.html",
    "revision": "aeb4707ebe8bae268bcb79f510df986d"
  },
  {
    "url": "logic/declarative.html",
    "revision": "6e08bd80aab6103fa50399fef25bc4d5"
  },
  {
    "url": "logic/early-return.html",
    "revision": "8f3ef3160fd8286495ddd47139382242"
  },
  {
    "url": "logic/immutability.html",
    "revision": "8cadf094ae97c4eef1230b18f00e17c8"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "8334b593d1d975ad4dd75b59e0ea3fcd"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "d675b13b183fbf2b8a921426a30c791c"
  },
  {
    "url": "logic/use-library.html",
    "revision": "dd53ead67ab37315f5c4d31a8455020f"
  },
  {
    "url": "name/concreteness.html",
    "revision": "1187e3f340f13a4cb68652c96d65e8eb"
  },
  {
    "url": "name/index.html",
    "revision": "e33e07b41a14e7a49138d717b3fe0c2a"
  },
  {
    "url": "name/prejudice.html",
    "revision": "658c61eb8605441388fa7414f88a039a"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "b8bcc913d7191852b5eb9f26fd753861"
  },
  {
    "url": "principles/DRY.html",
    "revision": "f7e31725cda07311301e73aeb7db93f0"
  },
  {
    "url": "principles/KISS.html",
    "revision": "0f12bd11b58c6483a286c5a10bd26ab0"
  },
  {
    "url": "principles/PIE.html",
    "revision": "733660f26107b2b697a5bf3845153d7d"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "86b04cb8cd0bb3a354bd1396ac411a13"
  },
  {
    "url": "test/index.html",
    "revision": "3b79f956c3af83701ae30998c8ea7dcc"
  },
  {
    "url": "test/refactoring.html",
    "revision": "e04b026023673a72d67d45769a93cf88"
  },
  {
    "url": "test/test-first.html",
    "revision": "f69e85f1eb8dc5d1db451debcb87f936"
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
