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
    "revision": "643517612a5180684bcf1a753ea7998d"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "fcf0c5ebab4054ca923684ef8c041ed5"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "0119daedcf10c25b94b1444545157d00"
  },
  {
    "url": "architecture/clean-architecture.html",
    "revision": "90b2e1f9571c8224c9216512dfc0ef9b"
  },
  {
    "url": "architecture/cohesion.html",
    "revision": "b7b98cf00400644cca0dbfa008606c77"
  },
  {
    "url": "architecture/connascence.html",
    "revision": "4cc4ab089d658811f7c10483ffd2f22e"
  },
  {
    "url": "architecture/coupling.html",
    "revision": "6508b6925b905dba02df772b8baf0f53"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "5785039784b52e6132f7c86facc22862"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "86a19c381ded8419ea8d9172b3c60693"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "3c37e57a5b04421e80076518a0650281"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "8b595fcf24e0c21cf587549f3a048d65"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "a4153a711f61dd1b399a399ce799fb94"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "6951a1e85e8bcfe6f4602d0ab08f4211"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "efcbd5b7948013c9763a9da7418ae044"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "ac619aa174dd8b10e2cdfba1aca422ce"
  },
  {
    "url": "architecture/primitive-obsession.html",
    "revision": "4bfb6b38c2c84bee5892cd7b8c1bb358"
  },
  {
    "url": "architecture/principles-of-package-design.html",
    "revision": "f11828000a77302a227d09bbdd3b9eae"
  },
  {
    "url": "architecture/REP.html",
    "revision": "4eeb3e27abdf71b7f73734b8530c5f58"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "4106d386b898cab732ad04cc11d0b26d"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "36dfe7386d5c1d085dfa2676d115d6c0"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "6e78d5714936fa0abd58adb963a6376b"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "17f8241210b327a8f0f306f16ec83d9f"
  },
  {
    "url": "assets/css/0.styles.963e6d69.css",
    "revision": "da91dc701cf9e37262ebf6c7ea70c528"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.138a213c.js",
    "revision": "b3596e0b1c9046adfb75804ba507c717"
  },
  {
    "url": "assets/js/10.cc9f0fb4.js",
    "revision": "da7c119063ae1435c97b20512748b1f5"
  },
  {
    "url": "assets/js/11.c9f66376.js",
    "revision": "dd3d98e4579ff91e7dad2cc7ed754222"
  },
  {
    "url": "assets/js/12.6c8c4b5d.js",
    "revision": "fc14de594742bbb2496ef984df149e48"
  },
  {
    "url": "assets/js/13.923c7353.js",
    "revision": "e87997fee657a9bb4ade4077325fc5dc"
  },
  {
    "url": "assets/js/14.97698f5a.js",
    "revision": "48261c1d585f62daecc7b3e7f225ae59"
  },
  {
    "url": "assets/js/15.1c6a9a10.js",
    "revision": "ca19fd3ef0d50a1cfb52359950c8543e"
  },
  {
    "url": "assets/js/16.f6f4c632.js",
    "revision": "48c6452c6b24db7afb44883f0ae5c9b2"
  },
  {
    "url": "assets/js/17.d08611e7.js",
    "revision": "c250ed7446564623e1dd9b3ff9f1b5c0"
  },
  {
    "url": "assets/js/18.b710eaf8.js",
    "revision": "497da30c2529e9b461c68cf25aac3366"
  },
  {
    "url": "assets/js/19.81cbe9cc.js",
    "revision": "b2ef4711512481956fb5973cb9e0d891"
  },
  {
    "url": "assets/js/2.8543ab7b.js",
    "revision": "8d3b016a3494641143bc834cf8c00e88"
  },
  {
    "url": "assets/js/20.ea07baf6.js",
    "revision": "1939d131b10d35d116404ab779e44d33"
  },
  {
    "url": "assets/js/21.2bb16e0b.js",
    "revision": "9074dbf1aa30faf0c9c8cbef44b10947"
  },
  {
    "url": "assets/js/22.2d3c36a8.js",
    "revision": "0cbd61103b00c50d1b060bccde7c8695"
  },
  {
    "url": "assets/js/23.8bb28d88.js",
    "revision": "f7459dd043fdf1916db74b2fe7311687"
  },
  {
    "url": "assets/js/24.191a6054.js",
    "revision": "a651c7812e0523da0a2ab62edc3cec36"
  },
  {
    "url": "assets/js/25.5d66a448.js",
    "revision": "9d0aa319d06e07823037f4c0de7d9a29"
  },
  {
    "url": "assets/js/26.ec7ef220.js",
    "revision": "0c36e6e2c7b4973f0d89e190787c8168"
  },
  {
    "url": "assets/js/27.70712155.js",
    "revision": "8a221bf5f869bfc3b7956a23562a4b24"
  },
  {
    "url": "assets/js/28.fa3ec35c.js",
    "revision": "0220c27c9139b473de29e101776dcc6d"
  },
  {
    "url": "assets/js/29.633811e4.js",
    "revision": "bc446d2e597ace7086d70566952d718d"
  },
  {
    "url": "assets/js/3.d9d2318e.js",
    "revision": "f7461c5b1ba242e5d743a1a514ea5f46"
  },
  {
    "url": "assets/js/30.688eea41.js",
    "revision": "f23b21e03d22064722dfe1de4ae2c78b"
  },
  {
    "url": "assets/js/31.a27d0ae0.js",
    "revision": "6edfd44b4e58a63667ab9f13d6c2e6f1"
  },
  {
    "url": "assets/js/32.ec95153b.js",
    "revision": "83edbf872cdf23f6e971fac685552088"
  },
  {
    "url": "assets/js/33.359f6353.js",
    "revision": "8057512cda3c929ea3f0fe7253896946"
  },
  {
    "url": "assets/js/34.af8ee4bc.js",
    "revision": "d2d853afe0fcd22df5738ee8ecf242d3"
  },
  {
    "url": "assets/js/35.56f74518.js",
    "revision": "ac037cc717255d81db152064af18c7d5"
  },
  {
    "url": "assets/js/36.05cf9a29.js",
    "revision": "010431c2bc169a014133652d9ec9b88a"
  },
  {
    "url": "assets/js/37.ae9ae790.js",
    "revision": "c32bf3aab93f2240bbfdcf8a49c9fc99"
  },
  {
    "url": "assets/js/38.f267f524.js",
    "revision": "8d011d76b955d78b8c6bc400e093a2fc"
  },
  {
    "url": "assets/js/39.e01f223c.js",
    "revision": "f968efa86a1564e2afb60171809b555c"
  },
  {
    "url": "assets/js/4.973b9865.js",
    "revision": "be021585ae7c1b155fa7bcb1bf2f1976"
  },
  {
    "url": "assets/js/40.e90ecd0b.js",
    "revision": "6d1aeb21f5e8abf7a2d44c454d3e2287"
  },
  {
    "url": "assets/js/41.0675c4aa.js",
    "revision": "824f013280d3eb5941a319d1b16f9a7a"
  },
  {
    "url": "assets/js/42.e97692f7.js",
    "revision": "821aef3d4581c5f4018f2eb23924aa06"
  },
  {
    "url": "assets/js/43.412d0979.js",
    "revision": "b979e4fdf6717475db31c39c89b11560"
  },
  {
    "url": "assets/js/44.910bd8a1.js",
    "revision": "b6ca56735a4d93c5928c8ad34f99c661"
  },
  {
    "url": "assets/js/45.6df48642.js",
    "revision": "21e59a0c3800177b4019b936ac644811"
  },
  {
    "url": "assets/js/46.c07285f4.js",
    "revision": "3035049c7dc854f03d794d9bcd887742"
  },
  {
    "url": "assets/js/47.4e9526d8.js",
    "revision": "b0f3cb48b0bb825bc292cfc666f432ec"
  },
  {
    "url": "assets/js/48.c6c7c761.js",
    "revision": "c9d3661014d3f9cbf6fe6852cdf94894"
  },
  {
    "url": "assets/js/49.acca81ce.js",
    "revision": "d88b618b69d1305d14e667b16a63d592"
  },
  {
    "url": "assets/js/5.092c3d16.js",
    "revision": "2bba873d9a88a781c364c0c4b66b6b97"
  },
  {
    "url": "assets/js/50.d8424825.js",
    "revision": "18e49a32d82bc0de2e2587dad5c748b0"
  },
  {
    "url": "assets/js/51.dfdf3bb7.js",
    "revision": "fe6e1ff68db80bef80b3e040d769df4c"
  },
  {
    "url": "assets/js/52.a155a85d.js",
    "revision": "a99c72d2c2b7840c2f7ec0d8bed4850f"
  },
  {
    "url": "assets/js/53.41e63fa7.js",
    "revision": "cb5538fe8f21750687fd15b949ece6ff"
  },
  {
    "url": "assets/js/54.55a9827d.js",
    "revision": "7ee192b6e81168199208bbe2e9f5eb5f"
  },
  {
    "url": "assets/js/55.7e5180cc.js",
    "revision": "c4c4a0a3ca0cc42d6675892a60f2869a"
  },
  {
    "url": "assets/js/56.066499a9.js",
    "revision": "7d3d4efe281e14c992bd4c2c5fe46b10"
  },
  {
    "url": "assets/js/57.62ae3d07.js",
    "revision": "54540d00c8967036cf03269208750854"
  },
  {
    "url": "assets/js/58.9508b4ba.js",
    "revision": "da995933e721dc94d8f6ca4dc657ed75"
  },
  {
    "url": "assets/js/59.93ef4e01.js",
    "revision": "11bc82abc346dc80d2b4220a61bfa98a"
  },
  {
    "url": "assets/js/6.f49acde3.js",
    "revision": "9feab4954d76b63be3d79d7b710811dc"
  },
  {
    "url": "assets/js/60.d443310c.js",
    "revision": "3c28be3e62d36cb311931253908da046"
  },
  {
    "url": "assets/js/61.bd38a00d.js",
    "revision": "2ce7f0320ba8ec3447522ac371889277"
  },
  {
    "url": "assets/js/62.5ee0582a.js",
    "revision": "d500861c6a5ecd9d3449dda9747a3c23"
  },
  {
    "url": "assets/js/63.10f701fd.js",
    "revision": "0701b28026a42748806134a60c357c7e"
  },
  {
    "url": "assets/js/64.ae17f1f8.js",
    "revision": "4124dfd6d9ccc2fc4ef2cb5d775bbc1d"
  },
  {
    "url": "assets/js/65.33f1f4bc.js",
    "revision": "2df444e819b200fbc9f89c15347f61f1"
  },
  {
    "url": "assets/js/66.d5bca90c.js",
    "revision": "a564ec8613dc89f2535f8a6f418137c2"
  },
  {
    "url": "assets/js/67.18507efa.js",
    "revision": "d26676ae65af82c7ce5dab706eee1264"
  },
  {
    "url": "assets/js/68.7a50358e.js",
    "revision": "c7cc36b5d81e85873b34d41d3d0d98f5"
  },
  {
    "url": "assets/js/69.1cdd7561.js",
    "revision": "07ef9d7f8bb8f62e0d460d0c4ee579b8"
  },
  {
    "url": "assets/js/7.7b3ae920.js",
    "revision": "b7bf79f8adeeced8147481672a2212b1"
  },
  {
    "url": "assets/js/70.d13dd4fc.js",
    "revision": "35ebe9c8860df981cc34e789e6ce18ae"
  },
  {
    "url": "assets/js/71.744fc2b3.js",
    "revision": "9d0a9757b3d290959efe660387f7ebeb"
  },
  {
    "url": "assets/js/72.2bf603ef.js",
    "revision": "3a7fbbad604580aca77c8b2eaeabfa0f"
  },
  {
    "url": "assets/js/73.356b038d.js",
    "revision": "c1386cde9221f79721a32f9553d95426"
  },
  {
    "url": "assets/js/74.37eb5e80.js",
    "revision": "a7c2069a9441a02ec4adceeb2381dbac"
  },
  {
    "url": "assets/js/75.42ea3f8c.js",
    "revision": "73ed76d67922cba2dacc347683946c64"
  },
  {
    "url": "assets/js/76.36443638.js",
    "revision": "b14add126fd037657d56d3b703e73c74"
  },
  {
    "url": "assets/js/77.ff121ec7.js",
    "revision": "037ae9aaf00bc37baa87c088e69aa87f"
  },
  {
    "url": "assets/js/78.1f198649.js",
    "revision": "44557e10978010bf195a58213b616ea4"
  },
  {
    "url": "assets/js/app.4aa7b714.js",
    "revision": "a164e39080013f0ac6c115368d9a5219"
  },
  {
    "url": "assets/js/vendors~docsearch.b5698a5f.js",
    "revision": "c0303f1d57daa80b9fa5078edba516d3"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "0e7e1420993daac149c99d31bf44111a"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "284a151fc37b3480d62f9a05656bae99"
  },
  {
    "url": "comment/kinds.html",
    "revision": "8acbfe6d002a77240be8164c91fb948d"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "7c9a8918fda3330cd31cdb44fc3902ba"
  },
  {
    "url": "consistency/index.html",
    "revision": "1dbde9e5d312392be2fe4a92e4805d5e"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "0be2604980caaf77b71d24feebb7db68"
  },
  {
    "url": "logic/CQS.html",
    "revision": "59f54fa22486a0e6bb2db0b876e34fb6"
  },
  {
    "url": "logic/declarative.html",
    "revision": "7bc5a24fbe7106cf976a9fd8b5a19129"
  },
  {
    "url": "logic/early-return.html",
    "revision": "0ad1d393c20266b2d54205b21dd6db28"
  },
  {
    "url": "logic/immutability.html",
    "revision": "697fa18b3e82650e9bf9842183a9c1c6"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "5efae2c27b03e222257c9577cb82339d"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "5a1ac7562e864dfc4bbcdd8345515ecd"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "f3aeb88e0e00aae8b8f6ef0dfbdfe931"
  },
  {
    "url": "logic/pure-function.html",
    "revision": "edc0db4fc96a7cf538be86dbe598aef3"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "8c587dc219498e82732fceb6b3b36257"
  },
  {
    "url": "logic/use-library.html",
    "revision": "f4fb8afbbc71944be43d8e0cf09e09d9"
  },
  {
    "url": "name/concreteness.html",
    "revision": "044227933cb127235b04b5073aaa158f"
  },
  {
    "url": "name/index.html",
    "revision": "8f09aad5349fd4ef1658edda189611cc"
  },
  {
    "url": "name/magic-value.html",
    "revision": "76806c381877d28268620e405d9a3208"
  },
  {
    "url": "name/prejudice.html",
    "revision": "4f54c6ecf2bd6cf707bc8d41ff524b8f"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "0be7a79dd066d3a42cebd35ab473014c"
  },
  {
    "url": "principles/DRY.html",
    "revision": "9b3e89bbea421c35b3afbca68d950fa6"
  },
  {
    "url": "principles/KISS.html",
    "revision": "81a5cd92b3df8408d5cb595d38476528"
  },
  {
    "url": "principles/PIE.html",
    "revision": "56b2875389fa32e5f07a41a6586375c0"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "48ee15e6ba8ffb8afb178eed890b332d"
  },
  {
    "url": "test/AAA.html",
    "revision": "63e9743012f392a86a62311bab128430"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "566b68b84001713057b136f0372b0621"
  },
  {
    "url": "test/cross-check.html",
    "revision": "b71ea1e41f43c8cc266ee9ca6964fc2f"
  },
  {
    "url": "test/index.html",
    "revision": "3df2f02c7f34fea2d8b9fbd18a501bac"
  },
  {
    "url": "test/naming.html",
    "revision": "30a3db2918115339fb0e5f2cfea7f147"
  },
  {
    "url": "test/one-test-one-point.html",
    "revision": "73ea41b90526b47b0f21ac1d49cace47"
  },
  {
    "url": "test/refactoring.html",
    "revision": "2182efd30d464eaa477caf79d6681cec"
  },
  {
    "url": "test/test-data-builder.html",
    "revision": "ad773b78cc29a0f99a371bc57b2fba68"
  },
  {
    "url": "test/test-first.html",
    "revision": "c0d88557b3034889c8db8dd32fbe79d6"
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
