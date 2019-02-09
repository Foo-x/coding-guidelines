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
    "revision": "a92026df1eb60d450779ba1f0fbfb639"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "c306346fc6e450b237a1ac98e5d2c708"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "b9181262f86736203dbfd8f9825fe054"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "f6a02d1047e6ac09c7cfda3cef48a8c2"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "3ba969bf5d73639d956874324cd19b76"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "4e787c05c84827b05557d8281488f23d"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "cbe8f16c8a405495f6dbc28adc1a1460"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "4b7a2a5d1962d9dcbe1e6d47d5badcf7"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "6b67e020ef287e31d9cc463f40389b9a"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "25b6a55b550e94248d9333cbcfba709f"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "9d98276fe4006fc648856608fcb9bcfa"
  },
  {
    "url": "architecture/REP.html",
    "revision": "337300fcc666ba1a6d26ce7a9d3a49e5"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "178d6838822075a2431e793c5c4b34be"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "5a20cce1ac6aefb17e4949b53a63cd16"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "b887ac3ec81aebc1190f6a9c3a113a63"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "dc80e42594acd8810498d21b4e6e45d8"
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
    "url": "assets/js/10.0b8b8f3a.js",
    "revision": "700a89d90c697f0abbcf5e96114d6f1c"
  },
  {
    "url": "assets/js/11.17fe9906.js",
    "revision": "276a250be1c6da58356cb1a2b15b17a0"
  },
  {
    "url": "assets/js/12.712ede69.js",
    "revision": "d3cf76b06def55bd5c49a31ee1ca1003"
  },
  {
    "url": "assets/js/13.47a3fb50.js",
    "revision": "462e70e6fd20147c5ecadb3d8cec3318"
  },
  {
    "url": "assets/js/14.df151ebf.js",
    "revision": "d43d76bf6b4f93e18410f7cf1d36d13d"
  },
  {
    "url": "assets/js/15.9647fd00.js",
    "revision": "c897743058eb627071d99a26c5501877"
  },
  {
    "url": "assets/js/16.6fa81c50.js",
    "revision": "b6cb76240e6a50ea9b7abf6837e4c5ef"
  },
  {
    "url": "assets/js/17.31afd74d.js",
    "revision": "0cc6add505b822f4e3f0047952e911e8"
  },
  {
    "url": "assets/js/18.e5109cfd.js",
    "revision": "640154834495961930c759fdb0741a8c"
  },
  {
    "url": "assets/js/19.664f9f72.js",
    "revision": "0e276ec220b099cb41383db97405cb39"
  },
  {
    "url": "assets/js/2.0d817f2c.js",
    "revision": "2f2fb7670ff48105b06da9c9006c34cd"
  },
  {
    "url": "assets/js/20.f2948da5.js",
    "revision": "af5a630c82df2809f95fca7dde4b44d8"
  },
  {
    "url": "assets/js/21.bd1d3636.js",
    "revision": "22fd5d65676da1665e881ae56019d832"
  },
  {
    "url": "assets/js/22.735cbc41.js",
    "revision": "e5641fe09109b333158dc901a587d38b"
  },
  {
    "url": "assets/js/23.aa1a95e9.js",
    "revision": "68dec9c6e8c4c2719454ce5beb149391"
  },
  {
    "url": "assets/js/24.f76695da.js",
    "revision": "49d48ac7a54b1053317ed5c5a0ed1507"
  },
  {
    "url": "assets/js/25.b8d7696d.js",
    "revision": "487a8a99b6e231d5983fe5525aa4d14c"
  },
  {
    "url": "assets/js/26.316fa0fb.js",
    "revision": "f44ec13d51162dcc87dc482f89a5bcbc"
  },
  {
    "url": "assets/js/27.daf807e4.js",
    "revision": "6b7aad1f376b35ba4d2202a091785c5d"
  },
  {
    "url": "assets/js/28.dcb7deca.js",
    "revision": "3a23e964cb6d53c41239729a3c9799ac"
  },
  {
    "url": "assets/js/29.875ee1fa.js",
    "revision": "1a8c2ced23722143d30fd52ecc229f3b"
  },
  {
    "url": "assets/js/3.51cf7b33.js",
    "revision": "4560d5a48e28003e555e4255c1bbf10f"
  },
  {
    "url": "assets/js/30.bf810837.js",
    "revision": "84a3b1744dec8160a3ec53868573f6b2"
  },
  {
    "url": "assets/js/31.a96011d1.js",
    "revision": "1fe5ff2e147a73a99ceb2595744ea3cf"
  },
  {
    "url": "assets/js/32.1ed0a04e.js",
    "revision": "5e33e982f544069a6bd90e2aaaa3843d"
  },
  {
    "url": "assets/js/33.caf6c28e.js",
    "revision": "4498b4b8bb583868b481989b2a6bb55a"
  },
  {
    "url": "assets/js/34.d32fbb47.js",
    "revision": "f32dd9cb2184551bc81879f36d690f0a"
  },
  {
    "url": "assets/js/35.7ccd7a8c.js",
    "revision": "9a23fc27d6749901aaf3eabaf945d43b"
  },
  {
    "url": "assets/js/36.14c579bb.js",
    "revision": "49bddb3b92f20b6fa3f0e11678e066ca"
  },
  {
    "url": "assets/js/37.48acca64.js",
    "revision": "2cc453c4a9098c0f8dc352d92637c20b"
  },
  {
    "url": "assets/js/38.18e3f91f.js",
    "revision": "83ae576555ffc189e785227877a0a0c4"
  },
  {
    "url": "assets/js/39.ae42b48f.js",
    "revision": "124ef7a56132f2a775ed33e554422605"
  },
  {
    "url": "assets/js/4.87f83b10.js",
    "revision": "fc4815d1951bfec257f45d22c78b74d4"
  },
  {
    "url": "assets/js/40.5cd8e971.js",
    "revision": "49dc930c75207cd1defc393af2c3b933"
  },
  {
    "url": "assets/js/41.55a54b1f.js",
    "revision": "c8743fe5f0ba84867f0151a82dd77b98"
  },
  {
    "url": "assets/js/42.42cc1c35.js",
    "revision": "8cd006d0319358a6458982f4608c731e"
  },
  {
    "url": "assets/js/43.27dc04c0.js",
    "revision": "f3d7d51a4a3662e72569f409503ce303"
  },
  {
    "url": "assets/js/44.d99e0f5d.js",
    "revision": "65c7da9cbf398f982fce11d558afdac8"
  },
  {
    "url": "assets/js/45.0dfe4509.js",
    "revision": "15ccc90668430466ee44aab9cd9dcfcc"
  },
  {
    "url": "assets/js/46.0cb4dc6a.js",
    "revision": "61698aa19ea53f51be6c778ffe9d13a8"
  },
  {
    "url": "assets/js/5.ba322b71.js",
    "revision": "eb2af688711f08e8ba4940bccc585ac5"
  },
  {
    "url": "assets/js/6.d82f6552.js",
    "revision": "7be5e453e27de26782e3d14ad0d152b9"
  },
  {
    "url": "assets/js/7.2ea5c2ee.js",
    "revision": "be76fcd4a442822f177d4f4910bbe7a8"
  },
  {
    "url": "assets/js/8.fc4a6855.js",
    "revision": "54624b16430c1beae020e6e16c5c3d24"
  },
  {
    "url": "assets/js/9.7cf515f4.js",
    "revision": "fc9f9823b22348f2a49bb374b0244236"
  },
  {
    "url": "assets/js/app.1b2dee6b.js",
    "revision": "3e0f96bd538001cf39fda7335a01bf2a"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "84891654e9a5fc3874f5c0299584b385"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "4a0a59aabb0423c5ff1d103071336d1d"
  },
  {
    "url": "comment/kinds.html",
    "revision": "b862984e886edfb5d99035eb5292396f"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "b01a1bcd3b694059d1e384b6ed70f0ac"
  },
  {
    "url": "consistency/index.html",
    "revision": "45d2846c533ea3e0d5dbce42b50e31a1"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "2e6ffdd815021ce9b92b0e471bd10597"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "1df88ce44c903548f7bab4c7d55f7966"
  },
  {
    "url": "logic/declarative.html",
    "revision": "3224fe712f529ffe55ac4f340cb68f2b"
  },
  {
    "url": "logic/early-return.html",
    "revision": "840843a613e3f4723365d27f60262498"
  },
  {
    "url": "logic/immutability.html",
    "revision": "093d7d4f7b7e74d983e11d79f377bacd"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "08f06d4a59f63c33321448447aec61dd"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "f8cac95d533ea28c8d1bfcccbe1eba24"
  },
  {
    "url": "logic/prohibit-redundancy-arguments-check.html",
    "revision": "c34093377afb10cb18b030a4145d924c"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "2af9a20eacd09e5ae011477bd0ef5aab"
  },
  {
    "url": "logic/use-library.html",
    "revision": "0b2c2c1501162daf6f0e0f63371384ec"
  },
  {
    "url": "name/concreteness.html",
    "revision": "7a611757ca5cf549e6fd1685805fb45f"
  },
  {
    "url": "name/index.html",
    "revision": "1ce35f6c5a59c55197cc77151bde8145"
  },
  {
    "url": "name/prejudice.html",
    "revision": "dcd44ba3da90327f2429dc0ad4ef3e09"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "7b5f476f689c8d5d01800a5d847a904a"
  },
  {
    "url": "principles/DRY.html",
    "revision": "e684bac5c0c9095249c8c8d7b63d3002"
  },
  {
    "url": "principles/KISS.html",
    "revision": "860472502741aa40c15e6388daae5f52"
  },
  {
    "url": "principles/PIE.html",
    "revision": "476cfcb1a3479a05256e5b002b25a445"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "76b565a0593ce1dbc511c82adf2fbbff"
  },
  {
    "url": "test/index.html",
    "revision": "6412d54a650683aeaff6b1f781bf7a10"
  },
  {
    "url": "test/refactoring.html",
    "revision": "63581a5468df96f2ea90ed223358352d"
  },
  {
    "url": "test/test-first.html",
    "revision": "3a0cd9c0d9866f5c36261d4cff46272e"
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
