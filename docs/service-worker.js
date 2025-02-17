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
    "revision": "b57057415fe99751575060d5f2e32efc"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "f0db0fe18033a149a85eb5e3c98c082f"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "bf9f2d8e9ee7d1b54f2b5b2112aa8ec3"
  },
  {
    "url": "architecture/clean-architecture.html",
    "revision": "0e013b7d895541c92eaf69bb51fe0ee3"
  },
  {
    "url": "architecture/cohesion.html",
    "revision": "a3957a233a08ef912c99dd30e0f56b2d"
  },
  {
    "url": "architecture/connascence.html",
    "revision": "253960d7c9bf372d47d2fceb7dc6fcd9"
  },
  {
    "url": "architecture/coupling.html",
    "revision": "0319964372552627aeb2f6b10cbc16cd"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "de81de7e8891feb1fef6d43ada9da000"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "567438c3eda38edd79fe43bc2ed8a451"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "d5fb10bfe89a088b5e929d548f1a62b6"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "39ab5883e72a2ca691751a01bf0b58b2"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "f2c5b55458b4410bf994d1f42d335b7a"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "7ab7dd01f5b465b53895bf24f9793d4e"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "155da089e54aad40ee0933aa7e61baf9"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "c272536b55cff247c9e6a87a0b752b3d"
  },
  {
    "url": "architecture/primitive-obsession.html",
    "revision": "6f5373fb8bf2aa9a6ca013881f2f4e21"
  },
  {
    "url": "architecture/principles-of-package-design.html",
    "revision": "9ca9fbf4cd9b876d3985150c3103cd5e"
  },
  {
    "url": "architecture/REP.html",
    "revision": "3b78463d5f11a5dad33a85f017aff82b"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "f61e7546966bf3344a8549bc392b12a0"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "c6c6cb8d3e36a650e1943517d3f9ebb9"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "9a9866b1e63a8e69c659c5a3b94d26c1"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "d75120dfb9885c9b6eda65368303a8b6"
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
    "url": "assets/js/24.01b8f4ef.js",
    "revision": "148b78043c70f91532856cdee65b720c"
  },
  {
    "url": "assets/js/25.145cdd21.js",
    "revision": "f2f8db6ff7033a59469eddfc59be4154"
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
    "url": "assets/js/28.055b515f.js",
    "revision": "ab235b9fe67cf084ffefb516a812d8da"
  },
  {
    "url": "assets/js/29.35531350.js",
    "revision": "90cac294e5045d146b6a3445383a3160"
  },
  {
    "url": "assets/js/3.d9d2318e.js",
    "revision": "f7461c5b1ba242e5d743a1a514ea5f46"
  },
  {
    "url": "assets/js/30.f3a48aee.js",
    "revision": "92121be307528feac2bfe5bea8a285ce"
  },
  {
    "url": "assets/js/31.2ec316e9.js",
    "revision": "0534cd4ac6666238c5163367a8bfd927"
  },
  {
    "url": "assets/js/32.0626da97.js",
    "revision": "62f4b1f08fd79d46be1de06b0d9cfcbd"
  },
  {
    "url": "assets/js/33.359f6353.js",
    "revision": "8057512cda3c929ea3f0fe7253896946"
  },
  {
    "url": "assets/js/34.13988c54.js",
    "revision": "f41b74cbfdc075f544c95eb938b29e63"
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
    "url": "assets/js/38.1c4c8303.js",
    "revision": "ae5033adf22807d6a64e39b8313dd487"
  },
  {
    "url": "assets/js/39.44cf6ec7.js",
    "revision": "6983418a6c4ee0feb57a96b4ceaa3273"
  },
  {
    "url": "assets/js/4.973b9865.js",
    "revision": "be021585ae7c1b155fa7bcb1bf2f1976"
  },
  {
    "url": "assets/js/40.c01aa810.js",
    "revision": "c190d5e71f6a683cbac977233c05ca60"
  },
  {
    "url": "assets/js/41.ffe74a28.js",
    "revision": "4001af6a61ec3ac808a259a4ef97559f"
  },
  {
    "url": "assets/js/42.8db1982a.js",
    "revision": "8cb208566deed5fbff537dbd4b2f313a"
  },
  {
    "url": "assets/js/43.32de1c8f.js",
    "revision": "252c9a3a315af43c0c82c1457973bd03"
  },
  {
    "url": "assets/js/44.eee08c1e.js",
    "revision": "8ea1d822a3098b40ea9be2f6191afa63"
  },
  {
    "url": "assets/js/45.ddb10131.js",
    "revision": "20528c66c5f60687d7a622a60e715f9c"
  },
  {
    "url": "assets/js/46.2ba5adca.js",
    "revision": "243cf9680ce9be0bf0640a150a0b0e69"
  },
  {
    "url": "assets/js/47.826fdc7c.js",
    "revision": "8db7f13730394e244d53ab4097e37776"
  },
  {
    "url": "assets/js/48.1e1066d1.js",
    "revision": "4aab032d5d1b713d212336934faf50a6"
  },
  {
    "url": "assets/js/49.a4a161b7.js",
    "revision": "617d7a317d585025af6347985902fa21"
  },
  {
    "url": "assets/js/5.092c3d16.js",
    "revision": "2bba873d9a88a781c364c0c4b66b6b97"
  },
  {
    "url": "assets/js/50.d79ba67e.js",
    "revision": "62f4e4f6ec3e8e393a97b2277bdc8632"
  },
  {
    "url": "assets/js/51.2cb5eec7.js",
    "revision": "7eafdfcd32bed53382e0124a1109fc93"
  },
  {
    "url": "assets/js/52.a155a85d.js",
    "revision": "a99c72d2c2b7840c2f7ec0d8bed4850f"
  },
  {
    "url": "assets/js/53.23b2bb5e.js",
    "revision": "58ad40de2b6f39b65a9d97abe2785950"
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
    "url": "assets/js/56.48601e34.js",
    "revision": "ce893ff6ff4786199689817403af87e1"
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
    "url": "assets/js/59.b922826e.js",
    "revision": "e8611f10403600597b3842d638362acb"
  },
  {
    "url": "assets/js/6.f49acde3.js",
    "revision": "9feab4954d76b63be3d79d7b710811dc"
  },
  {
    "url": "assets/js/60.95b2a97d.js",
    "revision": "431a99c5951cced1afa73d183227c035"
  },
  {
    "url": "assets/js/61.2c4cc7e7.js",
    "revision": "a261772c700f61cc39b6992d9352234f"
  },
  {
    "url": "assets/js/62.7ac032ac.js",
    "revision": "583a91f723a397136a424390a62cc33b"
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
    "url": "assets/js/65.398a8832.js",
    "revision": "80144cd534d4a88b567eca339b2726b0"
  },
  {
    "url": "assets/js/66.7043e86f.js",
    "revision": "fdbc989a28385f0b11700c44b5935495"
  },
  {
    "url": "assets/js/67.18507efa.js",
    "revision": "d26676ae65af82c7ce5dab706eee1264"
  },
  {
    "url": "assets/js/68.7b9332c8.js",
    "revision": "f0aafcb5c3ab018f13244ef6c6d49acf"
  },
  {
    "url": "assets/js/69.59650966.js",
    "revision": "18dfbdaf22e6e5007ff6fea41b9d955a"
  },
  {
    "url": "assets/js/7.7b3ae920.js",
    "revision": "b7bf79f8adeeced8147481672a2212b1"
  },
  {
    "url": "assets/js/70.cd8f6b87.js",
    "revision": "35efe3df463af1b241b4f2bed244b5a7"
  },
  {
    "url": "assets/js/71.52f422e4.js",
    "revision": "4bbb88b392dedb721b9bbfcc41dd263b"
  },
  {
    "url": "assets/js/72.51999311.js",
    "revision": "a7ac65bc135351d319181742d74b69dd"
  },
  {
    "url": "assets/js/73.5987535b.js",
    "revision": "210566232af2b07fb01a166c26d0bb11"
  },
  {
    "url": "assets/js/74.cf7c2401.js",
    "revision": "3b545e073b9a6918f3979430cd3d6170"
  },
  {
    "url": "assets/js/75.5a488859.js",
    "revision": "5e3da9e3badc91a2c0001cb0cc3c93f5"
  },
  {
    "url": "assets/js/76.292a2304.js",
    "revision": "40b98d048eac14f2a5e8f5c3a845c3a7"
  },
  {
    "url": "assets/js/77.eb160352.js",
    "revision": "eea9c19ba7075c1f6a776679694bc8b7"
  },
  {
    "url": "assets/js/78.5fb632ef.js",
    "revision": "8143da8209136315b855c0bde93394b0"
  },
  {
    "url": "assets/js/79.47bb5e62.js",
    "revision": "60cd46b5a170e64feba06dc13a2c6d12"
  },
  {
    "url": "assets/js/80.4da52599.js",
    "revision": "7b8c6b666e765d45733b0e7e92a33808"
  },
  {
    "url": "assets/js/81.c75e7f9c.js",
    "revision": "0dff0bf043eacd7340249a5f671d9f8e"
  },
  {
    "url": "assets/js/82.f1d7b2fe.js",
    "revision": "e0aecd02a5613acda749c420a530b185"
  },
  {
    "url": "assets/js/app.1d667c9f.js",
    "revision": "7760761ab7609f5a03355a479457d153"
  },
  {
    "url": "assets/js/vendors~docsearch.b5698a5f.js",
    "revision": "c0303f1d57daa80b9fa5078edba516d3"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "9ed753c906e3b0a27d3a48b9f8109a4e"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "abd27337c2018399046c245dc2538c9c"
  },
  {
    "url": "comment/kinds.html",
    "revision": "aed83b6c43eb94e527c27c6421ac4787"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "3f6ef8ee8a75d19bd3c2ecdf996f92de"
  },
  {
    "url": "consistency/index.html",
    "revision": "92fd49f1d4d59c2fb2519f48df4c852a"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "938e3b73de07b97a94ac3176bbe66c26"
  },
  {
    "url": "logic/CQS.html",
    "revision": "60fba6ded509e3f878a51d1ca6058ec4"
  },
  {
    "url": "logic/declarative.html",
    "revision": "8b9093ef1d98db7bae7ca02022b125cf"
  },
  {
    "url": "logic/early-return.html",
    "revision": "cb65b0676e601438e08c78efb668ee16"
  },
  {
    "url": "logic/immutability.html",
    "revision": "2ea0fa003d109f957d8dcc0ad766c9cc"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "6bbcb1310cc0cb269b352e2718fad4a5"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "987483e572cb755c2557770bc691b69a"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "9c0913ed0bb746fba5bc320ff9f59ff9"
  },
  {
    "url": "logic/pure-function.html",
    "revision": "0307f7b3cd618d665bf5b1f0b9900e78"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "44c916c0de724e2a7d5de4f821d17186"
  },
  {
    "url": "logic/use-library.html",
    "revision": "a345a4627499fd3cc5eb4ba748178436"
  },
  {
    "url": "name/concreteness.html",
    "revision": "c8db443461b06b809233b9db782d0148"
  },
  {
    "url": "name/index.html",
    "revision": "ae84dee5dde48655794481b85f2a0baa"
  },
  {
    "url": "name/magic-value.html",
    "revision": "50eda8ea2a0e6a7ddeaa0f517885a90e"
  },
  {
    "url": "name/prejudice.html",
    "revision": "61a3e0869e2125e3b1203019a4066ab8"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "2788da09a4a994da5bc6efaed0ab4662"
  },
  {
    "url": "principles/DRY.html",
    "revision": "8e2c13271a737f10ef041194f940cb5c"
  },
  {
    "url": "principles/KISS.html",
    "revision": "82e2f4cf6e949cbe79e67b20ce0e702c"
  },
  {
    "url": "principles/PIE.html",
    "revision": "ff6294e9598045ba6cc2d7a96e8a82de"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "34bdd5391309557051a66ddd2b6ee8ba"
  },
  {
    "url": "test/AAA.html",
    "revision": "a81dc424fcaff2e23353aa13448d3675"
  },
  {
    "url": "test/avoid-dependence-between-tests.html",
    "revision": "f1aceff1fab59467d7c520ad2e1adfc4"
  },
  {
    "url": "test/avoid-excessive-DRY.html",
    "revision": "7af7ba020983ae7d03ea5dde428c3104"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "82bc829ddb6ed63b112cde9643f80ae4"
  },
  {
    "url": "test/cross-check.html",
    "revision": "30a3fec45785a0125e2672d331bdc11c"
  },
  {
    "url": "test/index.html",
    "revision": "09f2a881c14005798017057427de8107"
  },
  {
    "url": "test/minimize-test-doubles.html",
    "revision": "40b77d37926c22fdc4612763ac02ddf3"
  },
  {
    "url": "test/naming.html",
    "revision": "d871b5b3c86e5fe63f628fa11c5787fd"
  },
  {
    "url": "test/one-test-one-point.html",
    "revision": "e434de2027f20b3cd6923bd8933fcf10"
  },
  {
    "url": "test/reduce-execution-time.html",
    "revision": "46c098bbda770f4c4e7ebd6633e9afec"
  },
  {
    "url": "test/refactoring.html",
    "revision": "1cc62b779c50f3fdb6803407623693d8"
  },
  {
    "url": "test/test-data-builder.html",
    "revision": "62bc4b3ad87c6219a42f8bb3a55ab278"
  },
  {
    "url": "test/test-first.html",
    "revision": "b6f6bd1ae429dc7390f0867ed80d6695"
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
