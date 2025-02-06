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
    "revision": "ca15d86522edf628877b8943577973c7"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "ab968e748cd9ec9744584be69ed4850e"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "0652a664dafc88904fb98ea4c7208228"
  },
  {
    "url": "architecture/clean-architecture.html",
    "revision": "ccc359d4b530b83808b4f9fea77f2347"
  },
  {
    "url": "architecture/cohesion.html",
    "revision": "7d94bbfbfa7947d3c82961fcd422b2c1"
  },
  {
    "url": "architecture/connascence.html",
    "revision": "c69e254145654ec6041523ffd3638cd8"
  },
  {
    "url": "architecture/coupling.html",
    "revision": "f1cf9f36fc5b4f9374b0a4d360d8c3ef"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "15edb2d5695b6f445ff2b938b7c2c73c"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "b12eedadb8d799185d6d610740cda9bf"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "5bd34fc65ce7c7a9be42a57569759340"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "7a915f24be928749abbb0561de465efc"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "7955701b1b0790a461493754af2d2138"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "6c3d39c0e0df4afbc60ab536463184a1"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "67189b535e87ccad3ebb711fd79a5116"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "097f8feeed28753e1ea0ee3dd9e080ba"
  },
  {
    "url": "architecture/primitive-obsession.html",
    "revision": "7a82eca655e547a26d6ed443a654fa14"
  },
  {
    "url": "architecture/principles-of-package-design.html",
    "revision": "5c22e3c30f41e90d4a7c2031bf3964e0"
  },
  {
    "url": "architecture/REP.html",
    "revision": "4c3df2b78a84b282954ccc526abcd79f"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "0c675a85183ea4b4dff2f3556575b948"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "99fd9036452db969cfe35c39e7d5fdc8"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "ddce21c7ec2358bd39a8587996baccd2"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "07a5687c21aa710a884053d2e4659026"
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
    "url": "assets/js/25.81647314.js",
    "revision": "a0cf34093ea0d50b214d69a61b5d7cfb"
  },
  {
    "url": "assets/js/26.390bbb39.js",
    "revision": "6e994191f7240fb7fed1f0741e3adaf9"
  },
  {
    "url": "assets/js/27.c23556dd.js",
    "revision": "ebd550c6d576f44f6f1bdb7e3071e4bd"
  },
  {
    "url": "assets/js/28.f2c48334.js",
    "revision": "4f09583ca74761954b3b345ef9a20d12"
  },
  {
    "url": "assets/js/29.067f773c.js",
    "revision": "32765315d4eee188678c833120406286"
  },
  {
    "url": "assets/js/3.c7ba9505.js",
    "revision": "579155dee4f6b340b31babbc94b3f9be"
  },
  {
    "url": "assets/js/30.172d5217.js",
    "revision": "6f75a7a3b37efff5491aa705ea9de39b"
  },
  {
    "url": "assets/js/31.2b6fd50c.js",
    "revision": "428b497dcce1b19e9c92daa598dc175f"
  },
  {
    "url": "assets/js/32.27ee0cc7.js",
    "revision": "e8a858fbe0fa85f6f63104b91e2c5ec7"
  },
  {
    "url": "assets/js/33.c8f33282.js",
    "revision": "a6d4c55147a086295c4094b49296ff09"
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
    "url": "assets/js/36.aa4fbdea.js",
    "revision": "93dde231fa4e9d337b938ac604cc63ac"
  },
  {
    "url": "assets/js/37.c7b3fec3.js",
    "revision": "4f9ae3ad9b0c9ba544d704da0ecddad8"
  },
  {
    "url": "assets/js/38.e626ec77.js",
    "revision": "10694cce446255bdc4b4c154301b6b1e"
  },
  {
    "url": "assets/js/39.f83c085c.js",
    "revision": "d75047f2ea35be1894d1650a06baf5ae"
  },
  {
    "url": "assets/js/4.3c860fdc.js",
    "revision": "7a859fa90401f0573ce535752c2ce143"
  },
  {
    "url": "assets/js/40.1802101b.js",
    "revision": "db2f674506bb9f51eff98a776dde2ec6"
  },
  {
    "url": "assets/js/41.49d03c24.js",
    "revision": "065066367915dff5ea43404ded1aafe0"
  },
  {
    "url": "assets/js/42.561589ef.js",
    "revision": "53dac176cf2b703c4f61ede938a9c024"
  },
  {
    "url": "assets/js/43.d479b662.js",
    "revision": "d195d6be629f9b842665660bfae87b7a"
  },
  {
    "url": "assets/js/44.c7916a8c.js",
    "revision": "3f82262288ab1ccbc889c21f1cec5002"
  },
  {
    "url": "assets/js/45.63b5f02b.js",
    "revision": "02d957aa97ffeb1eab49f7d9e856e724"
  },
  {
    "url": "assets/js/46.6aa4435c.js",
    "revision": "4a4259a26bd8bb6b4684724916924504"
  },
  {
    "url": "assets/js/47.8fccd7a7.js",
    "revision": "b4f16c0fcf71a68ab77ee5810b46c0af"
  },
  {
    "url": "assets/js/48.bd012b88.js",
    "revision": "b73c02438d9ec47b5be4a8dc24bb8f58"
  },
  {
    "url": "assets/js/49.8b9833fb.js",
    "revision": "d61b340d59e435639542629c6985a780"
  },
  {
    "url": "assets/js/5.30f61c1e.js",
    "revision": "1df5a86a2f92833feebc03d7498d9133"
  },
  {
    "url": "assets/js/50.5d136d1a.js",
    "revision": "ca31f254ace29159817b9073e7ce64d8"
  },
  {
    "url": "assets/js/51.95e79e7b.js",
    "revision": "08d97befa8eba88952f5c4b3586e87d6"
  },
  {
    "url": "assets/js/52.670a61f3.js",
    "revision": "7d36a2be5ea669acaa5ef50cab3595de"
  },
  {
    "url": "assets/js/53.fc5e6a4e.js",
    "revision": "3e00f28b2990172ed74c5752406dc099"
  },
  {
    "url": "assets/js/54.47c0c9a6.js",
    "revision": "c865b37820c851d7120df2580ca85ec2"
  },
  {
    "url": "assets/js/55.188df777.js",
    "revision": "bd8c5c7a37e1a1b15f52cd20bb79da66"
  },
  {
    "url": "assets/js/56.2e810694.js",
    "revision": "cccdb8b9729e8ffa684d046ca0a29b76"
  },
  {
    "url": "assets/js/57.dbf8237a.js",
    "revision": "02781e57997d9381d254a849ac395abe"
  },
  {
    "url": "assets/js/58.3d9fc028.js",
    "revision": "19bc46fa26056c081b441fbb34732c59"
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
    "url": "assets/js/60.117cd8cb.js",
    "revision": "b3f1c2dcda2cb7821422f318054b8f7d"
  },
  {
    "url": "assets/js/61.4946efda.js",
    "revision": "ad8dc3ffbdb9775ca36ae55fa9c1ea00"
  },
  {
    "url": "assets/js/62.c7d57b11.js",
    "revision": "01f64787e8a8faded12ab3e9baed5649"
  },
  {
    "url": "assets/js/63.f6664eba.js",
    "revision": "20025f2734cb659d692c1a013a3ea0fb"
  },
  {
    "url": "assets/js/64.6fd6f879.js",
    "revision": "56ce18d9d11daf6a6981dd04a395bf74"
  },
  {
    "url": "assets/js/65.174f10d0.js",
    "revision": "b52bcffd4541bc2eb88ac0854522ced8"
  },
  {
    "url": "assets/js/66.3bd07e4b.js",
    "revision": "3cbe1dc02f1f0f44255eb83386b95548"
  },
  {
    "url": "assets/js/67.863b2d85.js",
    "revision": "116aa85def6f40e9911e8e927ebb0ef8"
  },
  {
    "url": "assets/js/68.22b5c5fe.js",
    "revision": "ab765b699d323c16e20de0a5d95eac9d"
  },
  {
    "url": "assets/js/69.d73fa3a1.js",
    "revision": "0c64766aa786491c80c670159da53fe1"
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
    "url": "assets/js/71.46069349.js",
    "revision": "02dcdf4c66bf9b9b865a5190894f64eb"
  },
  {
    "url": "assets/js/72.cc1140f2.js",
    "revision": "1a7f73b4c67273a111b53b5db600021c"
  },
  {
    "url": "assets/js/73.34469140.js",
    "revision": "b6dccde07ec8bf10128b2dd0856b0c6f"
  },
  {
    "url": "assets/js/74.6412fe22.js",
    "revision": "04d5da46d30ab37d02541614878c59d6"
  },
  {
    "url": "assets/js/75.7eed5dcd.js",
    "revision": "a41d685fa7c43c82d0b6c946af1278fe"
  },
  {
    "url": "assets/js/76.bde9bd03.js",
    "revision": "d7e947fd370f8082cd06e0b7b407eb57"
  },
  {
    "url": "assets/js/77.72840f76.js",
    "revision": "422ae84ba09cf1691fe59fcac30769c4"
  },
  {
    "url": "assets/js/app.975761c3.js",
    "revision": "acc5ed913cb0e542e5ffdfce53b59a17"
  },
  {
    "url": "assets/js/vendors~docsearch.50a7a736.js",
    "revision": "2fe8562dae5a049c6495decbe13e29aa"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "f05f428aa7cfb08c734d880fae476ae1"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "8bee3a271977304e93346cd6f2ffbb7e"
  },
  {
    "url": "comment/kinds.html",
    "revision": "c653343d938e2cb1dd665dfc688b4e9d"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "19779fe3ced44505356fd80da85c77a1"
  },
  {
    "url": "consistency/index.html",
    "revision": "6b8d803ceb364361eb5bcd2f29b4ab5f"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "c185683bbc9c97321e250c18550038f7"
  },
  {
    "url": "logic/CQS.html",
    "revision": "fcad750b80b820ccdf3d38acc05bf46e"
  },
  {
    "url": "logic/declarative.html",
    "revision": "2be55b51d696845969737d5d29159690"
  },
  {
    "url": "logic/early-return.html",
    "revision": "2fa3d6c73bb16b4bc9a5f8a982911181"
  },
  {
    "url": "logic/immutability.html",
    "revision": "27a3ffc470627a09da15848a8dffb3ec"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "fc284c9ecf5554d90ecb3037d9bedae9"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "04281188e7f9c26ba64d375e3b4a87d0"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "0f7fede97e54f513451448901b0a08d2"
  },
  {
    "url": "logic/pure-function.html",
    "revision": "b736e0e45b3a4527ccfa0b63fe41e985"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "cca1f2024381adea967711b38ae36da8"
  },
  {
    "url": "logic/use-library.html",
    "revision": "54e689d642447a163eb636b817ab4a20"
  },
  {
    "url": "name/concreteness.html",
    "revision": "a0424e6456c4c54cf14d5abea2a3188e"
  },
  {
    "url": "name/index.html",
    "revision": "44d7a509300bddf275f7f50fa99a0c25"
  },
  {
    "url": "name/magic-value.html",
    "revision": "514e7004ab93e624a7e1132393d4f8a1"
  },
  {
    "url": "name/prejudice.html",
    "revision": "dd3f075806fbbd77184a0b75005c6e0e"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "1d18ce1908d237a8da7f3619b3b167ff"
  },
  {
    "url": "principles/DRY.html",
    "revision": "3a885055322899ca678d84539df94908"
  },
  {
    "url": "principles/KISS.html",
    "revision": "8c756edb10881266b50974b7e05e059f"
  },
  {
    "url": "principles/PIE.html",
    "revision": "de7deefb137acded76f9282ca3535df5"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "7885e9d5e1a3dc479bf460e1559f73aa"
  },
  {
    "url": "test/AAA.html",
    "revision": "7327d5e353ca2ed0c399d020e3a33b1f"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "5a8c2148ee602579068e6088f451a01e"
  },
  {
    "url": "test/cross-check.html",
    "revision": "00d2e7cccfe24e3038997b7ec7a4e6d8"
  },
  {
    "url": "test/index.html",
    "revision": "31dbec803a12f00e82160e53bd6e6734"
  },
  {
    "url": "test/naming.html",
    "revision": "178e69bb8681f464091545b4eb4fab61"
  },
  {
    "url": "test/one-test-one-point.html",
    "revision": "604bee68bfa64afe3bbaaff0f5cb94ea"
  },
  {
    "url": "test/refactoring.html",
    "revision": "5f2dec246e117e8f183c4d8d432a3a72"
  },
  {
    "url": "test/test-data-builder.html",
    "revision": "9f0fa919220e4452f5c690adb2a25697"
  },
  {
    "url": "test/test-first.html",
    "revision": "0ce9f1fe92704721bf1c80ccabcab63e"
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
