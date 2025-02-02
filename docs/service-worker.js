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
    "revision": "2713122720087ba8d7488a9900a0d688"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "35c781bf8079dab60da68456ba59ff90"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "bcb36cce4c6aaf9562ba3e711741a63f"
  },
  {
    "url": "architecture/clean-architecture.html",
    "revision": "a6a331209800d80c0c495e1d55dd6fa1"
  },
  {
    "url": "architecture/cohesion.html",
    "revision": "e6cac576a5909ad13043c47c100c11db"
  },
  {
    "url": "architecture/connascence.html",
    "revision": "5a5014950ca83698c42368d208f64c25"
  },
  {
    "url": "architecture/coupling.html",
    "revision": "a9faa631e601718b9f82b9e16c31d11e"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "75c73134e35f89dbd315d6f23d8b03a4"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "d9b238f6bd23b35e11f3d6acd8abcbee"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "b28124fc92444f7573e07bad4574a12b"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "34979cd688d50ea7bfb0f728c80b9ac7"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "409839ed8c5753f1aa847fc142f68ce6"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "8ee1a4828772f3e141230e8cc7641e05"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "e68a650dbe864c08340da3b4a02f1dda"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "0e4989d446e2f26caf56fb77d9c46b04"
  },
  {
    "url": "architecture/principles-of-package-design.html",
    "revision": "514e02aeaa6bc259d2d584be26776fc1"
  },
  {
    "url": "architecture/REP.html",
    "revision": "6b85ec7cf2e015344d73d2569b9b0751"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "6c2db7c914a86006df8d39eccd7c18ef"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "ba8fb3b489b36b23113d0767f4b1f991"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "de0282597a7361f163c608a0cb049696"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "1e7f6323c2d5d4bac30e5090e159285a"
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
    "url": "assets/js/23.f5b6c41d.js",
    "revision": "e419a930551fde81b11f90f176546950"
  },
  {
    "url": "assets/js/24.1b31c195.js",
    "revision": "ec006fe1f988e7dcbf9c53c126da6820"
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
    "url": "assets/js/28.1a0bdd5e.js",
    "revision": "ba553c9b0652c5df318dfae3a91fbb22"
  },
  {
    "url": "assets/js/29.554daa1e.js",
    "revision": "9970d545b05622d7f40b6ea51b1b6c67"
  },
  {
    "url": "assets/js/3.c7ba9505.js",
    "revision": "579155dee4f6b340b31babbc94b3f9be"
  },
  {
    "url": "assets/js/30.17d7cc21.js",
    "revision": "b0f88be16e2643aa7ddedb559dd9581d"
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
    "url": "assets/js/33.4c255dde.js",
    "revision": "78364ebdc7f0e7bf9c115ac05eaeac3b"
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
    "url": "assets/js/36.c24156bc.js",
    "revision": "4b40ad9a306bdcf8b6f5ad7f50c06e3d"
  },
  {
    "url": "assets/js/37.74ee6f4b.js",
    "revision": "54b297b5074cb027294395819dc3946c"
  },
  {
    "url": "assets/js/38.0b488e27.js",
    "revision": "d383891825f951dfe99a2f0d1993a9f3"
  },
  {
    "url": "assets/js/39.f58cce59.js",
    "revision": "7ddb9ad1224aedd0a3a5201a3600714a"
  },
  {
    "url": "assets/js/4.3c860fdc.js",
    "revision": "7a859fa90401f0573ce535752c2ce143"
  },
  {
    "url": "assets/js/40.8c2bb5bd.js",
    "revision": "a90ed6966237b1493e1ffc22d74cc3be"
  },
  {
    "url": "assets/js/41.49d03c24.js",
    "revision": "065066367915dff5ea43404ded1aafe0"
  },
  {
    "url": "assets/js/42.31835719.js",
    "revision": "4184c5fabf1610740f23d32cb714a122"
  },
  {
    "url": "assets/js/43.3f038abe.js",
    "revision": "1abf3d37f585647641f86d972baef1a7"
  },
  {
    "url": "assets/js/44.d48c89c8.js",
    "revision": "2cd13eace2b7cf24c7cceb1693ea01d2"
  },
  {
    "url": "assets/js/45.4b1ae971.js",
    "revision": "9bc0703b9e69e2d7aee1498685fdc46c"
  },
  {
    "url": "assets/js/46.153ba7b6.js",
    "revision": "c48bdb4b52bcf578d947308d71fb3ca3"
  },
  {
    "url": "assets/js/47.6cf9d379.js",
    "revision": "f75244bd6332e98cfcc911e4e9ea2978"
  },
  {
    "url": "assets/js/48.d63f59ac.js",
    "revision": "caa90c37fb8c5658942572329dcaf11e"
  },
  {
    "url": "assets/js/49.279d3778.js",
    "revision": "335d485b0384aa9d83d29142f866e479"
  },
  {
    "url": "assets/js/5.30f61c1e.js",
    "revision": "1df5a86a2f92833feebc03d7498d9133"
  },
  {
    "url": "assets/js/50.72f8a280.js",
    "revision": "80c897d7622183676bcb60b57b76898f"
  },
  {
    "url": "assets/js/51.f53e608d.js",
    "revision": "316b6d6e698dd22c24ad2eae88b7e99c"
  },
  {
    "url": "assets/js/52.741bab61.js",
    "revision": "3302de7b4ae76a94cd9df3149bf76055"
  },
  {
    "url": "assets/js/53.e5a4acf7.js",
    "revision": "d57f82b9f256f927a2dc06b34da40299"
  },
  {
    "url": "assets/js/54.c997ed7f.js",
    "revision": "d05c3c8faed461b2be06b0ae635c2c71"
  },
  {
    "url": "assets/js/55.b73c873b.js",
    "revision": "dae8e0f5f720958fa9a1840accb3bb0c"
  },
  {
    "url": "assets/js/56.bcd0fddc.js",
    "revision": "b524a55597722e5f1eb5ce3887052dbb"
  },
  {
    "url": "assets/js/57.5946f8f3.js",
    "revision": "2a7b2537df7d9116bb2853f2da6af60e"
  },
  {
    "url": "assets/js/58.5c631551.js",
    "revision": "735287e664edf270abecb5b1bd9d746e"
  },
  {
    "url": "assets/js/59.94a6d9f6.js",
    "revision": "f60299f6bb12f25a25a4f5fdb3741f88"
  },
  {
    "url": "assets/js/6.4760b562.js",
    "revision": "bfd322073d6ca4c808d0c0e30bda3edd"
  },
  {
    "url": "assets/js/60.9c041ce5.js",
    "revision": "668c14facec658e6fab05705e8416211"
  },
  {
    "url": "assets/js/61.cf8681d5.js",
    "revision": "61f2f594fd3d44ff4cbd6f08d0c9d0b5"
  },
  {
    "url": "assets/js/62.305cbc06.js",
    "revision": "cec23eab9ab5ef93a75f18faa7a13eb1"
  },
  {
    "url": "assets/js/63.55021aeb.js",
    "revision": "30f0e4284e217d80e97cbd9b2f39b7b6"
  },
  {
    "url": "assets/js/64.cc89c147.js",
    "revision": "c544660afa38bb12bc8c3ea9f0442be6"
  },
  {
    "url": "assets/js/65.8be51d3c.js",
    "revision": "b70c2db3fd280b25d2a35fc32a51240c"
  },
  {
    "url": "assets/js/66.1ada5bba.js",
    "revision": "fc78b981d1ed1f73f8ba09f9d6b052ef"
  },
  {
    "url": "assets/js/67.ab76ede2.js",
    "revision": "63f533db2eef251d43429b5b3e55b419"
  },
  {
    "url": "assets/js/68.6a38d628.js",
    "revision": "d548988842a7ac9434e366e957857cf2"
  },
  {
    "url": "assets/js/69.51d814cf.js",
    "revision": "c79b4ad6bae043103a8c0ba1b52ac424"
  },
  {
    "url": "assets/js/7.c8f73533.js",
    "revision": "0fa763882fb38d50aaaeb47ea5392c67"
  },
  {
    "url": "assets/js/70.028980ba.js",
    "revision": "d458cd84065d1e68b26a1be771836c87"
  },
  {
    "url": "assets/js/71.9e6c0e1e.js",
    "revision": "693f90cbc3676c1485afe43a263ff981"
  },
  {
    "url": "assets/js/72.68074656.js",
    "revision": "159d9896a08fda0c0563b99467087230"
  },
  {
    "url": "assets/js/73.f616dcb6.js",
    "revision": "e05b59b91650fd9b8c1074ec90ca1c98"
  },
  {
    "url": "assets/js/74.72c4f00f.js",
    "revision": "f3941a69f81e61ed88eef02ea032daa2"
  },
  {
    "url": "assets/js/75.cf1c9ed6.js",
    "revision": "6bf6215f71ae2fd681f80489e133cc31"
  },
  {
    "url": "assets/js/app.de1c5dd6.js",
    "revision": "efb367e8397b835e14a17b058ff978c4"
  },
  {
    "url": "assets/js/vendors~docsearch.50a7a736.js",
    "revision": "2fe8562dae5a049c6495decbe13e29aa"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "66af682c10bd0e2b457bf43e63232d8a"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "f09331e1b3e634d21531fc939edfb362"
  },
  {
    "url": "comment/kinds.html",
    "revision": "105732167804d6a6d1d1806d4ab866fc"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "7eaa5f53af99cf74c6fe3e9758701ec3"
  },
  {
    "url": "consistency/index.html",
    "revision": "cdc0bea8fe72d0f4a33fa47295a97bcb"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "daca72e76410c407a995a106affa7668"
  },
  {
    "url": "logic/CQS.html",
    "revision": "dda278af2731348bc94e7dddccca842b"
  },
  {
    "url": "logic/declarative.html",
    "revision": "a379705ce62ac92eb15fd5103258bb5f"
  },
  {
    "url": "logic/early-return.html",
    "revision": "10c287c2d718edea51daeba013d82d86"
  },
  {
    "url": "logic/immutability.html",
    "revision": "060c93abf09573205f4c32f9cfa09133"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "8a882516c479a18e32ab359c44718056"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "bf3ad5b45be18655d287eaa97ac1c92d"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "b029b3c161be3b30a4f421067e57d00c"
  },
  {
    "url": "logic/pure-function.html",
    "revision": "42c9848e4efe8250766f6a68abedcb33"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "ae515931ca7420b12a8112b0804d4e2e"
  },
  {
    "url": "logic/use-library.html",
    "revision": "4b3b04b8ee8803598a09cb07ff00efa8"
  },
  {
    "url": "name/concreteness.html",
    "revision": "303d5ecb65a415595589c54265d0f51f"
  },
  {
    "url": "name/index.html",
    "revision": "275fbc1ce91dc2a48d1440fa581cdca5"
  },
  {
    "url": "name/prejudice.html",
    "revision": "628286f58018366e3c113e9e75306fbc"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "64d80de6d1f3768da6c79d072da24987"
  },
  {
    "url": "principles/DRY.html",
    "revision": "736ea0c13d9780233c7c36c85797f43c"
  },
  {
    "url": "principles/KISS.html",
    "revision": "dd650c9b64a2e1517f720d76f596e232"
  },
  {
    "url": "principles/PIE.html",
    "revision": "f800323ce7e403c5a50f770c7c5f66a4"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "01ae633cb2a1fb7829831979767bc5f8"
  },
  {
    "url": "test/AAA.html",
    "revision": "e2a31ac2c1104967adcbf750a1595721"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "a6e3130479369582225f30f60ee61fcb"
  },
  {
    "url": "test/cross-check.html",
    "revision": "d139953ffcebedef65f546519245a4ea"
  },
  {
    "url": "test/index.html",
    "revision": "623dbdec637c28727be328b9ff32ebe5"
  },
  {
    "url": "test/naming.html",
    "revision": "8d5d97fdfa02671d28ea7856b08d41c3"
  },
  {
    "url": "test/one-test-one-point.html",
    "revision": "56e701c6a2651ec17cb18638d0bf790c"
  },
  {
    "url": "test/refactoring.html",
    "revision": "b44b0b522b84f247619ee3647581f575"
  },
  {
    "url": "test/test-data-builder.html",
    "revision": "0dc63496aa87a635b815f09ee3a1fe45"
  },
  {
    "url": "test/test-first.html",
    "revision": "f6d8ba93753594e2eea01633ea0757d5"
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
