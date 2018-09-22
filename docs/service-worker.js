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
    "revision": "15a3a994c0e54204ddc37e907f66e30a"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "eef479c21a279958b3411336b26c3369"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "ca801d41878aac9a5fdac090baab93a0"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "07502d3d19469aa6534146a459c8b8b8"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "0211c4d107c8ac20ce30e0a520b439e3"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "328991ea439f6db1a995787f26963f95"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "19f6c38e90d1ac37eb49d6adbcc3333f"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "ef7449a2a5d84f8ed22686ed934d501e"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "28dc03783503a2cdf23ca0d524862153"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "cc93139a3f18ea0ad8e31f8a5a8041db"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "629bfe50deaa7ff30b294ea4baefe56a"
  },
  {
    "url": "architecture/REP.html",
    "revision": "bf584665f94dcc3cb95978f3d370bd85"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "5c7d3dab248ad3e36b0370d4c041c3bd"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "744b2b5704386d9e662f35c1936c0c04"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "2b2867f989f9ed2cd519dc2f519b6b1e"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "6bb39a6d5dc215c8718c7028b669b40d"
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
    "url": "assets/js/app.03aff9d0.js",
    "revision": "7d574ed610074069a40d95e680491d6a"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "352aadbb7bfc8b0ba2ff3eacea921e3c"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "027f24779ac8ddda8bfbef936e4f3890"
  },
  {
    "url": "comment/kinds.html",
    "revision": "b21437c8ba758468755fb807875f13d6"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "f2ae15263e88d3065dcdf7bbd63f495d"
  },
  {
    "url": "consistency/index.html",
    "revision": "3c4004dfecaf152bb2172e625478b36a"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "747ddd73a3813d6634da2b8df4f566ca"
  },
  {
    "url": "favicon.png",
    "revision": "ceb76f9b7ceeea6b9c2dd0c53bbdba5a"
  },
  {
    "url": "index.html",
    "revision": "f43a0fbb4d682a8441ed230ceb533859"
  },
  {
    "url": "logic/declarative.html",
    "revision": "3fad86981c7bb1496f4111a7194c3876"
  },
  {
    "url": "logic/early-return.html",
    "revision": "6a662b8acacd9c378d25be2f8a2790e0"
  },
  {
    "url": "logic/immutability.html",
    "revision": "236b6342fa17891ce686f8b3029e39d3"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "2e50e442f11220d252410cb14ffd55d6"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "19b82323a04d7d6c2b49fb0da1dff5eb"
  },
  {
    "url": "logic/use-library.html",
    "revision": "47cb87e2a173cde60c7af210e2b3d46d"
  },
  {
    "url": "name/concreteness.html",
    "revision": "a17f15a2548b59bc1bec8678c7ad411e"
  },
  {
    "url": "name/index.html",
    "revision": "b7ae33a0fa297449607dcba98acb7881"
  },
  {
    "url": "name/prejudice.html",
    "revision": "d3a6f9028d477f1ca922ec84bf96d158"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "947692412c00367cdbd998d20a50c45d"
  },
  {
    "url": "principles/DRY.html",
    "revision": "511daad764ff9a4a11dba34013283ea5"
  },
  {
    "url": "principles/KISS.html",
    "revision": "7f9dd6cb6295b46a53c84508c03233ce"
  },
  {
    "url": "principles/PIE.html",
    "revision": "1fdd4f08374a8201cb6f3cc944795c87"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "5e33578ad4b26b500986d9d8d450bea0"
  },
  {
    "url": "test/index.html",
    "revision": "0ad221219d334a1ce3667e9f16a6a6cd"
  },
  {
    "url": "test/refactoring.html",
    "revision": "bf38c8e7b041293a1aaa238fa2e1ca6d"
  },
  {
    "url": "test/test-first.html",
    "revision": "4968bfd906bf1974474be6cb6dfa3b3a"
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
