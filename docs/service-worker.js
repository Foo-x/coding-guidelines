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
    "revision": "5e799ab1b3e43cad05ec9044b89310cf"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "5842b7fd70ad4fa7224a37a50f9a1562"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "b39eba18c1ae9c2afb437f2226ade80f"
  },
  {
    "url": "architecture/clean-architecture.html",
    "revision": "15a70c2ff9ff476f2be1faa5b624b14d"
  },
  {
    "url": "architecture/cohesion.html",
    "revision": "89322cda0057c0d8d94c169247d7c130"
  },
  {
    "url": "architecture/connascence.html",
    "revision": "6435292ae7485bf80771ad39c053dcae"
  },
  {
    "url": "architecture/coupling.html",
    "revision": "f55f60353d8420ef7f0b8bd07dbef6f9"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "69d2f86d52609ba27e1798ad35caf80a"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "687ed38ac7adf92f367661304351ff6a"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "a10d89e438524d05c9ed6c7e9496c423"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "ecdeda14e980402b01b3a79e59d9a614"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "93a307cd21e2dbecca75d9a1c6b1f87e"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "f100cad9113ffd5755c87c66669d9f2d"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "43aedbafa2f66f8f5834ec930329155c"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "347477073cc63e1e10c1070ed2354e78"
  },
  {
    "url": "architecture/primitive-obsession.html",
    "revision": "9634b02ff9df50f7e42d8c8541474f9b"
  },
  {
    "url": "architecture/principles-of-package-design.html",
    "revision": "e132c137b6a894e4d4985447e3f04ac4"
  },
  {
    "url": "architecture/REP.html",
    "revision": "570cf879de61f80326c0b6fb321a6aa5"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "bdc9df4d32b5c155c75b41911d4ddc5f"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "4a67a5c67ecda272d60ba04cdb16ed40"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "ee4a2f60ee3acff455e806c6ad4a439a"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "29dfe86bbc21f03cad9c9b3948cde44e"
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
    "url": "assets/js/26.8d53b51b.js",
    "revision": "ad10704d6dacaffebfd7524b61228879"
  },
  {
    "url": "assets/js/27.70712155.js",
    "revision": "8a221bf5f869bfc3b7956a23562a4b24"
  },
  {
    "url": "assets/js/28.24a85761.js",
    "revision": "077a499d16f70f8d191d3059a30efec3"
  },
  {
    "url": "assets/js/29.7c2e624a.js",
    "revision": "320069eb5c89e385f74c2bd5a2bb1017"
  },
  {
    "url": "assets/js/3.d9d2318e.js",
    "revision": "f7461c5b1ba242e5d743a1a514ea5f46"
  },
  {
    "url": "assets/js/30.6447d413.js",
    "revision": "2236b77d11fdc4a42322bab1b45ac729"
  },
  {
    "url": "assets/js/31.5e904ddc.js",
    "revision": "eb468ba0a1687335f5f1196925c5a3ad"
  },
  {
    "url": "assets/js/32.fe137e55.js",
    "revision": "ae5a514c155f3011c073dbb3ec454ae1"
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
    "url": "assets/js/35.c7dfe7f6.js",
    "revision": "70623dbff3fe6a875796e48fcb5f1e9a"
  },
  {
    "url": "assets/js/36.05cf9a29.js",
    "revision": "010431c2bc169a014133652d9ec9b88a"
  },
  {
    "url": "assets/js/37.bf68dffe.js",
    "revision": "b01de39a9bfd88fa26ffeb2cfd595434"
  },
  {
    "url": "assets/js/38.7366a595.js",
    "revision": "bea0177a65c0ea3e61a7538b9c714ef1"
  },
  {
    "url": "assets/js/39.f8445205.js",
    "revision": "c946b9079835427ed76f8a3e9c35120f"
  },
  {
    "url": "assets/js/4.973b9865.js",
    "revision": "be021585ae7c1b155fa7bcb1bf2f1976"
  },
  {
    "url": "assets/js/40.6d1b1325.js",
    "revision": "69fba10b6cdbf7c57593eeeb46412b9b"
  },
  {
    "url": "assets/js/41.9a723da0.js",
    "revision": "d24145f41e332bbfdb1aeab8d38dcd63"
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
    "url": "assets/js/44.4abf8ac3.js",
    "revision": "0534ca20daeefd381bb88962ab4acd32"
  },
  {
    "url": "assets/js/45.6df48642.js",
    "revision": "21e59a0c3800177b4019b936ac644811"
  },
  {
    "url": "assets/js/46.d8861eeb.js",
    "revision": "cb33c2e5367baeabe08245e5478d96cd"
  },
  {
    "url": "assets/js/47.d08db9fa.js",
    "revision": "12050a3939b27f696a2aee128ff6c57f"
  },
  {
    "url": "assets/js/48.47e2c342.js",
    "revision": "086031ba9a7001196fb5d3bfba0776b7"
  },
  {
    "url": "assets/js/49.6b470cfb.js",
    "revision": "747b493ea677747e4cbfbcf2ac3eca8d"
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
    "url": "assets/js/51.2cb5eec7.js",
    "revision": "7eafdfcd32bed53382e0124a1109fc93"
  },
  {
    "url": "assets/js/52.1b359f68.js",
    "revision": "6c100594c36eb5c11939610754989378"
  },
  {
    "url": "assets/js/53.2a4ad84f.js",
    "revision": "8a2f575beaebe6f3bf2373b875349368"
  },
  {
    "url": "assets/js/54.fca7257a.js",
    "revision": "2af7f27f620aaa306976dbf1f0dbf889"
  },
  {
    "url": "assets/js/55.4ab9035c.js",
    "revision": "786046d8b54a8e3649d8065422177d61"
  },
  {
    "url": "assets/js/56.50ef3ebb.js",
    "revision": "8809176bf4688ee5be71ac7893c60210"
  },
  {
    "url": "assets/js/57.55d5fea9.js",
    "revision": "2be30da523b4a5d2c63f1712f89f9c44"
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
    "url": "assets/js/60.95b2a97d.js",
    "revision": "431a99c5951cced1afa73d183227c035"
  },
  {
    "url": "assets/js/61.2c4cc7e7.js",
    "revision": "a261772c700f61cc39b6992d9352234f"
  },
  {
    "url": "assets/js/62.219a34d3.js",
    "revision": "5f7f15a598e226967dd2ce71b13e7f66"
  },
  {
    "url": "assets/js/63.10ae316b.js",
    "revision": "bf3781cdc83d39937515776d1b853d22"
  },
  {
    "url": "assets/js/64.3b4504f4.js",
    "revision": "0d0d7a71ca67fe411b705e1455271223"
  },
  {
    "url": "assets/js/65.4961b51b.js",
    "revision": "1293aa6a42bf672a12e492ab47230652"
  },
  {
    "url": "assets/js/66.8755b350.js",
    "revision": "676883c60c7ce7b33617e2c45d0efa93"
  },
  {
    "url": "assets/js/67.9b6d5f87.js",
    "revision": "de52a6bde7c7416426f22964ae07163f"
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
    "url": "assets/js/70.3f210234.js",
    "revision": "c50dc0fcd331a3ef8de49d8770313195"
  },
  {
    "url": "assets/js/71.beed3100.js",
    "revision": "bb2737735ea28c67990bf606945662bf"
  },
  {
    "url": "assets/js/72.2d7d4bf1.js",
    "revision": "5aeda1456c4c525cc1f3441008f98c9f"
  },
  {
    "url": "assets/js/73.f7026c68.js",
    "revision": "fba420ff1fa962a1af72844475df76e8"
  },
  {
    "url": "assets/js/74.30fae732.js",
    "revision": "c848152289a1066ec0f9b0a191bb45fd"
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
    "url": "assets/js/77.c0dc3193.js",
    "revision": "7a40ee70a3b5b8fce421cb61c3cb74cc"
  },
  {
    "url": "assets/js/78.1f198649.js",
    "revision": "44557e10978010bf195a58213b616ea4"
  },
  {
    "url": "assets/js/app.2f2a6758.js",
    "revision": "06b14ba804732a62fbc07795655358d8"
  },
  {
    "url": "assets/js/vendors~docsearch.b5698a5f.js",
    "revision": "c0303f1d57daa80b9fa5078edba516d3"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "59c858927d31f6189a13e74d764be15b"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "aae66d02e4ba5749ed49f6ee7dc971a1"
  },
  {
    "url": "comment/kinds.html",
    "revision": "ef2a38b8b4611db707194bd2f10a556e"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "59796324cfb93ba35d9f5633dbb1dd91"
  },
  {
    "url": "consistency/index.html",
    "revision": "ed70ac65a86473f4800b3d7d7d16927c"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "e33208805338f5b58f0f5ef0e5d5a7c0"
  },
  {
    "url": "logic/CQS.html",
    "revision": "590b209a4003afb7a24701a96ae4dfeb"
  },
  {
    "url": "logic/declarative.html",
    "revision": "5c74f63d5a0f8f962aaebccdbbb7f466"
  },
  {
    "url": "logic/early-return.html",
    "revision": "3135f11223562771ea82110176489109"
  },
  {
    "url": "logic/immutability.html",
    "revision": "2cb79a65a9431a6c821241b6adea1484"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "b069e60e8c46de549f42f09110a1be3d"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "f43d4f6e7f1de25b0f62889b5cec7ff2"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "3b80ae4b86f3ee0f374a27d6970d6479"
  },
  {
    "url": "logic/pure-function.html",
    "revision": "ac732fcd8d27165b0ca0b8f6efa7114f"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "c4ffc40f60dc251aed63bed31fe583de"
  },
  {
    "url": "logic/use-library.html",
    "revision": "77608672058932a4249a797721b8043a"
  },
  {
    "url": "name/concreteness.html",
    "revision": "157021c3fd278549b45b0f914f13c958"
  },
  {
    "url": "name/index.html",
    "revision": "5db8dbaebee88e62ab280005ee1dda47"
  },
  {
    "url": "name/magic-value.html",
    "revision": "5dd1ed37301d0e7126f0726da7413a59"
  },
  {
    "url": "name/prejudice.html",
    "revision": "d1174ab6e08901da55f6f438d3052be6"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "5f484443794d0100a4cb58c25528693c"
  },
  {
    "url": "principles/DRY.html",
    "revision": "657823bd9c1f433d458d76ac5b05d30a"
  },
  {
    "url": "principles/KISS.html",
    "revision": "229cfa9aa552f5711687b5e7a8638a95"
  },
  {
    "url": "principles/PIE.html",
    "revision": "643ce854c820490e7c7f615188c117ff"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "7f674498879bdba4031732f253eebda7"
  },
  {
    "url": "test/AAA.html",
    "revision": "472a088d3fbf23941e2d2ea1de70f20e"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "1c0e2a7b183b3ab7a4bec84f8de85c1a"
  },
  {
    "url": "test/cross-check.html",
    "revision": "e3e1b336ef0cd81fa6a42314f9d8ff9d"
  },
  {
    "url": "test/index.html",
    "revision": "007f21291592d5365d2935d401946d24"
  },
  {
    "url": "test/naming.html",
    "revision": "ae1214037501c10d568db60ac25148c1"
  },
  {
    "url": "test/one-test-one-point.html",
    "revision": "78b4beb12a7f8efd3dbea6479ae0ebb7"
  },
  {
    "url": "test/refactoring.html",
    "revision": "c1b026958bea2b3473e549c11df8b9c8"
  },
  {
    "url": "test/test-data-builder.html",
    "revision": "b01582b762587bb6d2191a2d9987ce57"
  },
  {
    "url": "test/test-first.html",
    "revision": "7425ff2e964abac174586bdef6653b26"
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
