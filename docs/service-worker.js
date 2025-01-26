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
    "revision": "74d8d871ff381604a6c5273d970c78b8"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "dc91873de7fb209cf1fb5bc27e07a27c"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "e08cc2447a909f3660bb2c6408d24e95"
  },
  {
    "url": "architecture/clean-architecture.html",
    "revision": "bc1cddf6d0d228abb120fdf30b9837d3"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "4fd4125bfe1846dbd06a4dd817e4cc93"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "b11f1ff753fc838f22f66df04be4b1eb"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "0af5d2724fa7fec1e27ddc2b3beb53f5"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "4c7ab9269571778e19bcbaa616a604ef"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "b18b1ab80c61e66a5d73e349a32c6216"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "4875e7a9382c83590b4cd7d6e589825b"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "6704c8ebdb439797565e5f19676b391d"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "52a83789ef120824613e86fdfbe2c138"
  },
  {
    "url": "architecture/principles-of-package-design.html",
    "revision": "b67edf730b40e1a03377286069f06ab5"
  },
  {
    "url": "architecture/REP.html",
    "revision": "87267a307ae39604f93afe65dcc833d6"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "a8ec28565f3563857ca441b2506cab69"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "057a141a6b94be5c813af4868d8706a2"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "425f9651f58d69b5d3dd181fadb51357"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "1d608beaf7d7f21d5798baf495907d55"
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
    "url": "assets/js/24.fbc59170.js",
    "revision": "53025f54ce5980fd651ee264f9be57b2"
  },
  {
    "url": "assets/js/25.c34165af.js",
    "revision": "8f657572cfee2faedd7f0b297548e7db"
  },
  {
    "url": "assets/js/26.469a32de.js",
    "revision": "be468ab985a61d053315f2aa6a1b6b1c"
  },
  {
    "url": "assets/js/27.2b1b292c.js",
    "revision": "c1fed2d2567caf2e1318d180bbd2f4f4"
  },
  {
    "url": "assets/js/28.14809f2b.js",
    "revision": "dedd128c15c56c0e8639847e99e7c5cf"
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
    "url": "assets/js/33.040ee096.js",
    "revision": "cf8ca997a07966d714a36372a526d098"
  },
  {
    "url": "assets/js/34.d647ef2e.js",
    "revision": "4359acf420a4e81ace150728e0be5d97"
  },
  {
    "url": "assets/js/35.9f3e5b95.js",
    "revision": "4548ab58ef36eb9e5051f7d508a5a499"
  },
  {
    "url": "assets/js/36.c145fc67.js",
    "revision": "2b8a0da2d02f8c4178119c72f72d2c83"
  },
  {
    "url": "assets/js/37.ffa9d1e7.js",
    "revision": "6988fd18a627be73496552acc9c5155c"
  },
  {
    "url": "assets/js/38.dbbec7e4.js",
    "revision": "0e1139a7e88466b2be510a635bb61a54"
  },
  {
    "url": "assets/js/39.8f6277ed.js",
    "revision": "79b55b2384358ab2d22d2a54994a2e93"
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
    "url": "assets/js/41.dcf4e712.js",
    "revision": "bee5e4cd774bd2345de026acb840661d"
  },
  {
    "url": "assets/js/42.a4867b02.js",
    "revision": "aefab8623f336aadf54a3c779c45e9dc"
  },
  {
    "url": "assets/js/43.a8267a18.js",
    "revision": "8f436762003649fac98c442b931c59fa"
  },
  {
    "url": "assets/js/44.73557de2.js",
    "revision": "8275455e0811de7260e41263faeeca43"
  },
  {
    "url": "assets/js/45.6276c049.js",
    "revision": "92d99fe382619350ac6ab936f64a7f8c"
  },
  {
    "url": "assets/js/46.56495b81.js",
    "revision": "e48aebb2f6d988c620e1e7827063e1e8"
  },
  {
    "url": "assets/js/47.37106925.js",
    "revision": "dc3395df54fcf242af84e187c9f0a930"
  },
  {
    "url": "assets/js/48.9caa2c7e.js",
    "revision": "8f50d85a62e6e599f8b20351b0fb11f3"
  },
  {
    "url": "assets/js/49.643a83fd.js",
    "revision": "598fb53b765add1349b54136b2e147db"
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
    "url": "assets/js/51.1e4fbe3d.js",
    "revision": "e9a37c69acccb528d1b1824cb89ac382"
  },
  {
    "url": "assets/js/52.16b80ed1.js",
    "revision": "f782fde0a576ec8e0b392ff8251e37d1"
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
    "url": "assets/js/56.dc886b86.js",
    "revision": "22b7e0dcbb91d5197e3e63d3d34eeb37"
  },
  {
    "url": "assets/js/57.466a6451.js",
    "revision": "af6aef98cf2c81c22b28cd669a5b3b4a"
  },
  {
    "url": "assets/js/58.044e256c.js",
    "revision": "5f4c2a5ac495f2b3b64adbb4251da2c8"
  },
  {
    "url": "assets/js/59.4fe7fc23.js",
    "revision": "804af0af6fb6cf935c121257706e6bdb"
  },
  {
    "url": "assets/js/6.4760b562.js",
    "revision": "bfd322073d6ca4c808d0c0e30bda3edd"
  },
  {
    "url": "assets/js/60.05fd7f3c.js",
    "revision": "73ecc593f68a8ca62e18eda0d8641700"
  },
  {
    "url": "assets/js/61.c3b4e42c.js",
    "revision": "e4055031638f29cbe4d9916ff3c8e040"
  },
  {
    "url": "assets/js/62.90dc13b0.js",
    "revision": "51e0880505907aa82136e441791b570d"
  },
  {
    "url": "assets/js/63.1ec33d0f.js",
    "revision": "12b6ab500dce23970142c284f37ff5db"
  },
  {
    "url": "assets/js/64.7f5d681c.js",
    "revision": "4f08a22d41d8b715dabc6b438ed47cc5"
  },
  {
    "url": "assets/js/65.dc206bfb.js",
    "revision": "b7b9aa368529341e8ab10ec1874e70a3"
  },
  {
    "url": "assets/js/66.2594f0c5.js",
    "revision": "2fca1e06f126a3a6b8e16e55898b32f7"
  },
  {
    "url": "assets/js/67.b0834b81.js",
    "revision": "966cdc33c7772d31954a5ffdd2c94099"
  },
  {
    "url": "assets/js/68.35b10a9c.js",
    "revision": "5612f2930ae0da461d7f249e30aff3c8"
  },
  {
    "url": "assets/js/69.5695b2b1.js",
    "revision": "6da1b3caf1a4b0917c5d13f006d3cb45"
  },
  {
    "url": "assets/js/7.c8f73533.js",
    "revision": "0fa763882fb38d50aaaeb47ea5392c67"
  },
  {
    "url": "assets/js/70.1e790d1f.js",
    "revision": "5573635ffe4a916ac8ce6f86d9511d26"
  },
  {
    "url": "assets/js/71.b3445504.js",
    "revision": "0702fbf97bebe60e8fb8b1f9e05ccd5f"
  },
  {
    "url": "assets/js/72.79dcd517.js",
    "revision": "4204e7f3d60d8ca10380068d715022e8"
  },
  {
    "url": "assets/js/app.63d0d959.js",
    "revision": "6ec5b71d023106ca1dc48ec3d2c1ec8e"
  },
  {
    "url": "assets/js/vendors~docsearch.50a7a736.js",
    "revision": "2fe8562dae5a049c6495decbe13e29aa"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "1c16a822788601502bacf3cd32309fd1"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "824b5f20dcea460c1a4766081ffcb13c"
  },
  {
    "url": "comment/kinds.html",
    "revision": "ab82ec3783b84959ed705b73b72ddbd1"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "2850619a3813b608539ff82bf58df31f"
  },
  {
    "url": "consistency/index.html",
    "revision": "4c209d359d4c4ca3db7d64bc07659e9d"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "804beb0c9654de1d3f099b9628177280"
  },
  {
    "url": "logic/CQS.html",
    "revision": "252fe33342773032308e32dac6a0af4e"
  },
  {
    "url": "logic/declarative.html",
    "revision": "2803807ae47ed5bd2f0cbcd748301c88"
  },
  {
    "url": "logic/early-return.html",
    "revision": "ee1ba2bca462521fb8670325f083a136"
  },
  {
    "url": "logic/immutability.html",
    "revision": "73f506218be3f82daf1e3ded67f9d239"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "012ade07196b974a402202b48c21a375"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "b51246c3e28487c7bc3f6cd236500608"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "6763a157485e72e4c08a516c6cdd3bfe"
  },
  {
    "url": "logic/pure-function.html",
    "revision": "c0b120edb863b9fba15095b8efc9d1d7"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "691d4b2b7f77faec1504cefc3c80916b"
  },
  {
    "url": "logic/use-library.html",
    "revision": "59bf8b6bf1deb57a7e3d2a50b6203e4a"
  },
  {
    "url": "name/concreteness.html",
    "revision": "1737a73f54e593a17b5743958ac99c05"
  },
  {
    "url": "name/index.html",
    "revision": "12a998f3d681847c358acf676c037552"
  },
  {
    "url": "name/prejudice.html",
    "revision": "791242185b1528b36a968507120c389a"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "d7ac45a942c21010fce99529354d46bb"
  },
  {
    "url": "principles/DRY.html",
    "revision": "314d137cb28dd18d61869232c4efdcda"
  },
  {
    "url": "principles/KISS.html",
    "revision": "720138bc3470c667c063b3abcc76955b"
  },
  {
    "url": "principles/PIE.html",
    "revision": "73c83079128713dbfe6f50513eb79309"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "8bd90030bb29fcc35ab04f80be4d1465"
  },
  {
    "url": "test/AAA.html",
    "revision": "f868c4da45978bef79cf0fd2eb1346af"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "a1cf62d9bbed98faca3894aa402d661c"
  },
  {
    "url": "test/cross-check.html",
    "revision": "6fc80bc11013b37edecb9c6e6f2c08b3"
  },
  {
    "url": "test/index.html",
    "revision": "deb52dadb58be7a9315f38ab3c2c32fb"
  },
  {
    "url": "test/naming.html",
    "revision": "733530dce339d37a8da36c6449e200af"
  },
  {
    "url": "test/one-test-one-point.html",
    "revision": "dd9e580423f32289aa9b2753a3221301"
  },
  {
    "url": "test/refactoring.html",
    "revision": "8d8836cc1a07008ba1b6a9b7f5633750"
  },
  {
    "url": "test/test-data-builder.html",
    "revision": "7e7e2708a4a855b841e4dc6cdc833a9b"
  },
  {
    "url": "test/test-first.html",
    "revision": "da1e990568105bc34ecc7cd4341d90b5"
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
