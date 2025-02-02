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
    "revision": "9cf44e29c6b6ffea20ea8e3f941e7886"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "cc85a2cf7837eaac108df964ef07357d"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "cee518af7af6187f51662c721877f267"
  },
  {
    "url": "architecture/clean-architecture.html",
    "revision": "28a104ad539b1d2f87e02722a93d8902"
  },
  {
    "url": "architecture/cohesion.html",
    "revision": "cca76f46867aef57c216702b2627f6c0"
  },
  {
    "url": "architecture/connascence.html",
    "revision": "151c1d3d9415431fc04f0d09773f410f"
  },
  {
    "url": "architecture/coupling.html",
    "revision": "a261af4405bb56df607fe3ed19595023"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "bc9cc7703c3c99f0c523436fe2be53c3"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "123b9af9007c0c89c716b0c33fc5f801"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "c5d77ef6b2e80e6601e79dacc57a961d"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "ea482eeff8a21efb1265ad2ae12928da"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "e8e62e00b92f66fc141149806e1142f3"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "8b48717a4ba33481f2963f9dc59c2975"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "7cb2ac8fd9cb798db64a9cbd1d80bb63"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "7988a76b10f4d1488baf402cf4a0f1ef"
  },
  {
    "url": "architecture/primitive-obsession.html",
    "revision": "60130a133d7e75d062e33c239621ce6a"
  },
  {
    "url": "architecture/principles-of-package-design.html",
    "revision": "cefee412cf1f2e32d80055a7a2630c03"
  },
  {
    "url": "architecture/REP.html",
    "revision": "66d3ce7ae253292eeed1e3cc4b69ad06"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "4e8c75950b3391e75f32c44a444bf11b"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "f767f8ad5ca4d5bcc694dea4ddcbd623"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "6bf3d961f8e4c4653f6fc280f630073a"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "fd88c7fd7689704cc53a9058e45142c3"
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
    "url": "assets/js/23.82fe2e1d.js",
    "revision": "0e4bc673caac65beb26f07d8108bff86"
  },
  {
    "url": "assets/js/24.1b31c195.js",
    "revision": "ec006fe1f988e7dcbf9c53c126da6820"
  },
  {
    "url": "assets/js/25.c34165af.js",
    "revision": "8f657572cfee2faedd7f0b297548e7db"
  },
  {
    "url": "assets/js/26.dcab5598.js",
    "revision": "ad8f1d3b0cb15120bdb0722855311627"
  },
  {
    "url": "assets/js/27.6aca703c.js",
    "revision": "c2eb9cb925e8b66ae898a8cebd60f6aa"
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
    "url": "assets/js/30.0fcc0174.js",
    "revision": "4c2d4366b8ad6af2a0b91fc64a9997a8"
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
    "url": "assets/js/33.95f76237.js",
    "revision": "df04770bcdb30f7410018613f829fc1b"
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
    "url": "assets/js/36.76bac485.js",
    "revision": "85be97e4e47b2ea41479a34785310b9c"
  },
  {
    "url": "assets/js/37.2a71ef51.js",
    "revision": "df3b118ee3e97a4c967dda7cc19ee1a8"
  },
  {
    "url": "assets/js/38.a984b39b.js",
    "revision": "192339a42c1b9b65c924f06839dce07c"
  },
  {
    "url": "assets/js/39.76721e10.js",
    "revision": "f27b3bd99d6ec5fa148933946bcbf47d"
  },
  {
    "url": "assets/js/4.3c860fdc.js",
    "revision": "7a859fa90401f0573ce535752c2ce143"
  },
  {
    "url": "assets/js/40.72218bbd.js",
    "revision": "c182e6eac7cf2a9d90c72eda7ae1843a"
  },
  {
    "url": "assets/js/41.42306b2f.js",
    "revision": "3dad3c32bfaf7307c946bd2fdee6712a"
  },
  {
    "url": "assets/js/42.561589ef.js",
    "revision": "53dac176cf2b703c4f61ede938a9c024"
  },
  {
    "url": "assets/js/43.b594d5ad.js",
    "revision": "033b6f8933cb7e9328cf07684a32c9ca"
  },
  {
    "url": "assets/js/44.f3f9f1ea.js",
    "revision": "b26796fc07ad6f81ee0aaf2684a7dc0f"
  },
  {
    "url": "assets/js/45.190c3f71.js",
    "revision": "b091ab4406fda8ecfe75b6a6e194f5c9"
  },
  {
    "url": "assets/js/46.47ce0cee.js",
    "revision": "287f24338c02953d4d4e6413557cf25f"
  },
  {
    "url": "assets/js/47.2bbb8c98.js",
    "revision": "462fcf39ab0a73aa9e365a2e3e5f13e6"
  },
  {
    "url": "assets/js/48.9b36e6eb.js",
    "revision": "42f57be335e12a2122d6493b1bfb148e"
  },
  {
    "url": "assets/js/49.5fdc59a2.js",
    "revision": "b84e67d6f8840de2a8d3cee4e9e36045"
  },
  {
    "url": "assets/js/5.30f61c1e.js",
    "revision": "1df5a86a2f92833feebc03d7498d9133"
  },
  {
    "url": "assets/js/50.d79ba77a.js",
    "revision": "a42e0bd784ce98a1919b3792f535782f"
  },
  {
    "url": "assets/js/51.4f3d1fa1.js",
    "revision": "0542d500dfc2d65ba512fb3d7f655f18"
  },
  {
    "url": "assets/js/52.919d3662.js",
    "revision": "c29b2f9eee417c69e64f2d7fdc548547"
  },
  {
    "url": "assets/js/53.fc5e6a4e.js",
    "revision": "3e00f28b2990172ed74c5752406dc099"
  },
  {
    "url": "assets/js/54.4bbbffe6.js",
    "revision": "e8a23791f5540b55afc96197afd73cb7"
  },
  {
    "url": "assets/js/55.b25efee3.js",
    "revision": "0df8ca5f5ce61f2ffd15751f8bb577fe"
  },
  {
    "url": "assets/js/56.aa6d5419.js",
    "revision": "8844d38289d7fda2a0076b3ab753ac24"
  },
  {
    "url": "assets/js/57.7e21975c.js",
    "revision": "6e182ceaaece4d0b3c4ab3497228ea8d"
  },
  {
    "url": "assets/js/58.ecd74b59.js",
    "revision": "544fc1491d625eb3410f01a42c92d5d9"
  },
  {
    "url": "assets/js/59.18b739d5.js",
    "revision": "cb070d01172f44bdd653497732e64d1c"
  },
  {
    "url": "assets/js/6.4760b562.js",
    "revision": "bfd322073d6ca4c808d0c0e30bda3edd"
  },
  {
    "url": "assets/js/60.12176512.js",
    "revision": "35eb0eb33277ea6dd20ff8d11b7b2a70"
  },
  {
    "url": "assets/js/61.e4cb0e86.js",
    "revision": "dc2f901837bbbead552f377d31b1085f"
  },
  {
    "url": "assets/js/62.877611e9.js",
    "revision": "ed54283d148aa4c701da8d26c0f37706"
  },
  {
    "url": "assets/js/63.1bb915d0.js",
    "revision": "8ee8dab02ae211f2178a1f3530106762"
  },
  {
    "url": "assets/js/64.12841ea8.js",
    "revision": "121618a1e48b8c07163644b8cc488e89"
  },
  {
    "url": "assets/js/65.c47effe2.js",
    "revision": "3acf948a53b85327b63fcad7d4426650"
  },
  {
    "url": "assets/js/66.8bd6fa19.js",
    "revision": "8355fc14b78d3953c0553b344014ca83"
  },
  {
    "url": "assets/js/67.de9db570.js",
    "revision": "c538fb80e0c109aebe53fee5aab27c02"
  },
  {
    "url": "assets/js/68.6780e779.js",
    "revision": "35d86193f8bda7f3ba3bd0e55105d255"
  },
  {
    "url": "assets/js/69.e112aea1.js",
    "revision": "8eb8111816d38d488af4d2989147be73"
  },
  {
    "url": "assets/js/7.c8f73533.js",
    "revision": "0fa763882fb38d50aaaeb47ea5392c67"
  },
  {
    "url": "assets/js/70.2d90479f.js",
    "revision": "b253e90a2b74afe34d0fb2f27c61d3ad"
  },
  {
    "url": "assets/js/71.75be88c4.js",
    "revision": "1c02de279afe774cd2fe70ba63f97f69"
  },
  {
    "url": "assets/js/72.5f01102f.js",
    "revision": "e0e9b228f1b12f86f4f71271221eb481"
  },
  {
    "url": "assets/js/73.7dfa78d1.js",
    "revision": "09c28efcdbf803a44b6aeaa9b0442aa8"
  },
  {
    "url": "assets/js/74.b6a5f675.js",
    "revision": "49a4de08636eb65f4f7a0874e86d7b59"
  },
  {
    "url": "assets/js/75.7eed5dcd.js",
    "revision": "a41d685fa7c43c82d0b6c946af1278fe"
  },
  {
    "url": "assets/js/76.76166bea.js",
    "revision": "063a8fff18fb59f07eb9e62a37010495"
  },
  {
    "url": "assets/js/77.72840f76.js",
    "revision": "422ae84ba09cf1691fe59fcac30769c4"
  },
  {
    "url": "assets/js/app.94333b2a.js",
    "revision": "cfd97d8068dd516eeb14ed2597b2744c"
  },
  {
    "url": "assets/js/vendors~docsearch.50a7a736.js",
    "revision": "2fe8562dae5a049c6495decbe13e29aa"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "6829dbcefe8c7af8f1b90aa5485a1584"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "78ec4317659b04545879f07aefba2b64"
  },
  {
    "url": "comment/kinds.html",
    "revision": "5bc70f9340240bedbf11bf8c89424bd7"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "b6972edd1a58fcb9bf80a4229aa69071"
  },
  {
    "url": "consistency/index.html",
    "revision": "a71d80a422b2f8e08fde18b7eb98d69d"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "d1d140af520d32b8d8b20b20791e8afb"
  },
  {
    "url": "logic/CQS.html",
    "revision": "7c6ff05ff832bb060a47f4125e174fc8"
  },
  {
    "url": "logic/declarative.html",
    "revision": "d61c156d1499b81eb9457da0ac81c143"
  },
  {
    "url": "logic/early-return.html",
    "revision": "3f5f28c1f65ef139833d41b97bcc8b4c"
  },
  {
    "url": "logic/immutability.html",
    "revision": "7d2a0270e4e37d257c48967d7eeec1c1"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "2f54127c51e2c472325309b39ddc17ca"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "63d34eaf78d90707b9bf152f6750ffe8"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "084304edd7935220aa56635ff479c952"
  },
  {
    "url": "logic/pure-function.html",
    "revision": "10ab31ea0cf1c92324185bc469c02fab"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "46cec00cbadf1224d48757e047296e65"
  },
  {
    "url": "logic/use-library.html",
    "revision": "3812652646d1dbb475b6e162cd4317da"
  },
  {
    "url": "name/concreteness.html",
    "revision": "4d2dbdf23378de7eb3db2c4215dcc7e6"
  },
  {
    "url": "name/index.html",
    "revision": "11cc907bc68df27416dd9a2243d68b77"
  },
  {
    "url": "name/magic-value.html",
    "revision": "0bc1d96d1cf78a152806f9c75d4e6271"
  },
  {
    "url": "name/prejudice.html",
    "revision": "b5f47e792957d6be4b606413bbae217e"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "302e853d1d4728e4eda580ff61d58a10"
  },
  {
    "url": "principles/DRY.html",
    "revision": "1a47b03058a4ccfd12941eaef69dc8cf"
  },
  {
    "url": "principles/KISS.html",
    "revision": "e6e4f31229755717e5ed6ce617bb38a5"
  },
  {
    "url": "principles/PIE.html",
    "revision": "6a4f0aa9d97cefa53f59400233678cbe"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "9f2bacd0a6030c313c9cc3a450082b1b"
  },
  {
    "url": "test/AAA.html",
    "revision": "9480517dce364c572a558da676d6c1a2"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "d05d8650e2f1d09c28cdda7093ceb351"
  },
  {
    "url": "test/cross-check.html",
    "revision": "010ddcf5e3038a1c240d93525b65013f"
  },
  {
    "url": "test/index.html",
    "revision": "efd18c134b4050223bdff6d48ac0eda4"
  },
  {
    "url": "test/naming.html",
    "revision": "75c1d915d50948e2f5fa54cc3a484eda"
  },
  {
    "url": "test/one-test-one-point.html",
    "revision": "2450ec774e674f42bb943b16e132dffa"
  },
  {
    "url": "test/refactoring.html",
    "revision": "685a48c36af067aec92f6cca00feeb87"
  },
  {
    "url": "test/test-data-builder.html",
    "revision": "5930f8b5944c02f26f7dd5a23866e71a"
  },
  {
    "url": "test/test-first.html",
    "revision": "00cb3933307dff9cfda34e0271320910"
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
