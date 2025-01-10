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
    "revision": "ec1fa5052ad13e5da92f89e2500e7028"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "eaa4568dab7095fd6844ac5c63f2db75"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "ab5a34187370e761dd631896f9754806"
  },
  {
    "url": "architecture/clean-architecture.html",
    "revision": "11c96ea29bf1677e4fc9f976b3bdf033"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "d856c3e58336649b4e82e22e077e8ec0"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "259a6759d2b0cb1a7a05a4aa04377576"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "7a70accc6cdfaa52ce23cc842eb35c12"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "e01a31af66e5ea2b5fddcf602dd360d5"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "3a873ffde2c89e66840c3ec9a06af254"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "0c14c72822a66e671d8ca2a79640423f"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "4a34ca9d3b61e217c14002d892346d88"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "d439eab620be55d779659d91277514fc"
  },
  {
    "url": "architecture/principles-of-package-design.html",
    "revision": "780d074298b4c50758a2eb4e4c1088e7"
  },
  {
    "url": "architecture/REP.html",
    "revision": "dec664ac5babb413e8d2b72416185251"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "e1ab65e22b52f8b41095ca04137b6278"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "95e5b9f1073b8ec777c0929bf39092f3"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "c814ea1872707d6948976431fcdb4bd9"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "504e01453017531decb92d432f21b1a7"
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
    "url": "assets/js/23.98d3bc70.js",
    "revision": "5b3bb78834ee522794923eef304de5c6"
  },
  {
    "url": "assets/js/24.a2fe3615.js",
    "revision": "3620dd48738de813ee4a48a51b9ca457"
  },
  {
    "url": "assets/js/25.f3016a12.js",
    "revision": "10f3ba4c37005dbfad419afa6d06edcf"
  },
  {
    "url": "assets/js/26.dcab5598.js",
    "revision": "ad8f1d3b0cb15120bdb0722855311627"
  },
  {
    "url": "assets/js/27.8f23627e.js",
    "revision": "5d70e74bed954d41d816c77cc58af508"
  },
  {
    "url": "assets/js/28.184f452e.js",
    "revision": "4392f2b2d059fcc1de08843b1282099b"
  },
  {
    "url": "assets/js/29.aa374743.js",
    "revision": "2a916c11a29a7656a6962be3a2a58bb4"
  },
  {
    "url": "assets/js/3.c7ba9505.js",
    "revision": "579155dee4f6b340b31babbc94b3f9be"
  },
  {
    "url": "assets/js/30.2b020150.js",
    "revision": "17de6b156e1f505ad025449a00833aae"
  },
  {
    "url": "assets/js/31.66e3c6da.js",
    "revision": "945c499b3091ea13c6e09ed011a94555"
  },
  {
    "url": "assets/js/32.d06054c6.js",
    "revision": "1ae009ebef21af8d5b36073238fd6818"
  },
  {
    "url": "assets/js/33.020d48cb.js",
    "revision": "8c5cd5dd5b5df459b093feea67e9d307"
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
    "url": "assets/js/37.a4f4cf4f.js",
    "revision": "228e118ee88d99568e80f86ef9922116"
  },
  {
    "url": "assets/js/38.0107a0f9.js",
    "revision": "9316090dfaa2aa29414c9e75646a6d42"
  },
  {
    "url": "assets/js/39.59f60053.js",
    "revision": "6f23bff19b72fc39ae8b3165d557298f"
  },
  {
    "url": "assets/js/4.3c860fdc.js",
    "revision": "7a859fa90401f0573ce535752c2ce143"
  },
  {
    "url": "assets/js/40.a46ab759.js",
    "revision": "4db1d7de7bef445e55fd4bd72db7204b"
  },
  {
    "url": "assets/js/41.dcf4e712.js",
    "revision": "bee5e4cd774bd2345de026acb840661d"
  },
  {
    "url": "assets/js/42.2c9d9fce.js",
    "revision": "0ca558744789da2285ca2ef9946e9664"
  },
  {
    "url": "assets/js/43.b7a2e9f3.js",
    "revision": "57a728550efba76869ee76c1ec96db64"
  },
  {
    "url": "assets/js/44.73557de2.js",
    "revision": "8275455e0811de7260e41263faeeca43"
  },
  {
    "url": "assets/js/45.448596a6.js",
    "revision": "a69d1819eb5458bf43e50380f6da7176"
  },
  {
    "url": "assets/js/46.b3485679.js",
    "revision": "6e9058fa934d2289bce4f943c6306660"
  },
  {
    "url": "assets/js/47.7b188c95.js",
    "revision": "84057c2edcbfa05ad1cc7fab1aa53395"
  },
  {
    "url": "assets/js/48.01fd65f5.js",
    "revision": "0874657c652187f2ef28adfa84e1a8da"
  },
  {
    "url": "assets/js/49.90b0f1c7.js",
    "revision": "af2484f4f3a45bd66b253e4200e20ed0"
  },
  {
    "url": "assets/js/5.30f61c1e.js",
    "revision": "1df5a86a2f92833feebc03d7498d9133"
  },
  {
    "url": "assets/js/50.28d61ae8.js",
    "revision": "5c56d25e7370c0d0f4ceef02c7e0f5df"
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
    "url": "assets/js/54.e45870fa.js",
    "revision": "82ac6146042afefc8f3365970e3c07ff"
  },
  {
    "url": "assets/js/55.d9ebfa9e.js",
    "revision": "e44774f2b93cb2f495c2a4a4702e2f69"
  },
  {
    "url": "assets/js/56.372bdfff.js",
    "revision": "c2b7d1f5da69bb1e5e91e5f854e95739"
  },
  {
    "url": "assets/js/57.f878a571.js",
    "revision": "65a918ac513c5801716a60dcaa164643"
  },
  {
    "url": "assets/js/58.195c023d.js",
    "revision": "1216ee0aed24402853fb53f4799e2192"
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
    "url": "assets/js/63.8abe42f2.js",
    "revision": "8d7a187967d1c5f6a08b720195b35a3d"
  },
  {
    "url": "assets/js/64.4896daaf.js",
    "revision": "aaa25af5b51ad34881bcc6c9cfc95c80"
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
    "url": "assets/js/69.dee83e26.js",
    "revision": "595f57c6e11215b9a671dcb55a839138"
  },
  {
    "url": "assets/js/7.c8f73533.js",
    "revision": "0fa763882fb38d50aaaeb47ea5392c67"
  },
  {
    "url": "assets/js/70.bb48cbe2.js",
    "revision": "c6a5f0c921a1920346a2eb58c9f93989"
  },
  {
    "url": "assets/js/71.adfab640.js",
    "revision": "3cc218102ce846131cf164f24a72e45a"
  },
  {
    "url": "assets/js/72.79dcd517.js",
    "revision": "4204e7f3d60d8ca10380068d715022e8"
  },
  {
    "url": "assets/js/app.60b009b5.js",
    "revision": "1352e26a21f2a8257554273c8bf00aa6"
  },
  {
    "url": "assets/js/vendors~docsearch.50a7a736.js",
    "revision": "2fe8562dae5a049c6495decbe13e29aa"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "0f5026411749638c11eda052c46778aa"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "5fb1428c58791dfd34ea045bb08166fe"
  },
  {
    "url": "comment/kinds.html",
    "revision": "619cfc0d3b884c15512f41d7ed566480"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "1014eadc8764e10a5c73d190c857bbee"
  },
  {
    "url": "consistency/index.html",
    "revision": "38886800917a19dd14dea79c0f7cc974"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "494adf7d3cefe5f22e425e25b0e9946a"
  },
  {
    "url": "logic/CQS.html",
    "revision": "338600106d670da6733aa171c35da0e3"
  },
  {
    "url": "logic/declarative.html",
    "revision": "ad3b290c03c583f6c6819b60ed5eb981"
  },
  {
    "url": "logic/early-return.html",
    "revision": "7aec3c80d45da239ab06ef105ef8f23b"
  },
  {
    "url": "logic/immutability.html",
    "revision": "629df4d0a9addfc36522ff2808e0df81"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "47e27458d14d72c99743eb22ee69e0a7"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "11859150042fe1e9f6ef25e26aed5e38"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "5d338ad7feb3799e36a52bdefa346117"
  },
  {
    "url": "logic/pure-function.html",
    "revision": "67846307a03c40b891cbbd2a95671693"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "627b55ac13bb762b432dbeda75c6c994"
  },
  {
    "url": "logic/use-library.html",
    "revision": "148111cd3de3e72975c520bf1a187e5e"
  },
  {
    "url": "name/concreteness.html",
    "revision": "1eb158ca23c6724adfceafa3b91552a3"
  },
  {
    "url": "name/index.html",
    "revision": "44d79a47fcbff9a50a5f59d0d71a984a"
  },
  {
    "url": "name/prejudice.html",
    "revision": "d088bad499429b982caa3945485ead67"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "e74ab8b3a712e604517d0c139e170148"
  },
  {
    "url": "principles/DRY.html",
    "revision": "e3d2ea1c6ff40a26dabb7aa61359ad37"
  },
  {
    "url": "principles/KISS.html",
    "revision": "56654ac6e373fbabb3d75b2b53fbf3ab"
  },
  {
    "url": "principles/PIE.html",
    "revision": "abeda6d69e4afa037015ee404400cd24"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "0ffd2e4eb6efae11b293102bee4dc35f"
  },
  {
    "url": "test/AAA.html",
    "revision": "e55f8370609d9af2cfe489df54b49cc7"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "211013a14587d039158ed19e044a11d0"
  },
  {
    "url": "test/cross-check.html",
    "revision": "ca9335217e1b64a36cabca119c7e5df3"
  },
  {
    "url": "test/index.html",
    "revision": "7ab536fa238fbe6c7cfdab7886583891"
  },
  {
    "url": "test/naming.html",
    "revision": "2179b6e376c72c6f96137a87d5e477da"
  },
  {
    "url": "test/one-test-one-point.html",
    "revision": "80a1b211fd9f227c00304de0a0582589"
  },
  {
    "url": "test/refactoring.html",
    "revision": "364b82915c78ba1032e06e46fbad9291"
  },
  {
    "url": "test/test-data-builder.html",
    "revision": "2c8c1f546c33c0f75678b7c8133ee7bb"
  },
  {
    "url": "test/test-first.html",
    "revision": "b9e830c726d816b9a923fb6ead1796ab"
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
