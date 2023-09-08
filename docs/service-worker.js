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
    "revision": "36f10bda7f4f08e431c37b35b81b61b0"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "493caeb33921595d519255e8d491565a"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "679203176930fcaf69341cc473556304"
  },
  {
    "url": "architecture/clean-architecture.html",
    "revision": "9656aad72d08c6a516d4183d9ef951a1"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "20eb84d773a19a5424a4bd44929cf064"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "1546aef190bfe57c033dc1a60d4a7019"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "c68ccfe4857bd71db3398d8863eb6764"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "676f6d486284f3f78839b328364759e3"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "511b06b08f28fc630cc83584aff95967"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "0e55e82db04f5e470475ffe90d38d48f"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "a475bdb9daf1dc4d769874c22e5b8596"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "0ee7657e9eb37605eca36571a67daba0"
  },
  {
    "url": "architecture/REP.html",
    "revision": "f10a514c775c214fc48de6ea63b2519d"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "8bccbced0d6c29623e68ad9dca654c04"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "1a70d2af1c344d6d1eeed0c912588c4c"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "006aa328e489ed4d9b85315c9dbe7577"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "7aff2297663319a03b6bf34bebe28c0b"
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
    "url": "assets/js/1.723aa446.js",
    "revision": "105393ac7ffc8808e375ae099e48748b"
  },
  {
    "url": "assets/js/10.be225316.js",
    "revision": "ab3dcc9aae147b44e0096fd9fcb5d6ef"
  },
  {
    "url": "assets/js/11.bc8e3b43.js",
    "revision": "e5a864d8bd5a1c4b175c64553bffdccd"
  },
  {
    "url": "assets/js/12.b06a29de.js",
    "revision": "da40e997046ccd7f1eceef957b69f903"
  },
  {
    "url": "assets/js/13.c131c2e0.js",
    "revision": "b75b9f7b45d55b0d07e395f61b592307"
  },
  {
    "url": "assets/js/14.c4dedce0.js",
    "revision": "9a39988048afc82bfcdc3434e08e3d60"
  },
  {
    "url": "assets/js/15.d87a48fa.js",
    "revision": "80f27350704667f893bbc1d4805af585"
  },
  {
    "url": "assets/js/16.4edb132c.js",
    "revision": "53500afcda2378232fdaeffc24ccd3e2"
  },
  {
    "url": "assets/js/17.fefe20fd.js",
    "revision": "42a3c0568d68e22a408ae6ea8d27612b"
  },
  {
    "url": "assets/js/18.bf26e052.js",
    "revision": "a99db5cc1ec0db83f19d957cd834ebd5"
  },
  {
    "url": "assets/js/19.3ddef596.js",
    "revision": "81985d3103b96997e75d458e5fcf0f35"
  },
  {
    "url": "assets/js/2.1065c7f1.js",
    "revision": "1ba42b82fecb52cff5e23852b3e35c99"
  },
  {
    "url": "assets/js/20.f0f85464.js",
    "revision": "9d26a9a0fc03fa1bb9a438ae76c495fa"
  },
  {
    "url": "assets/js/21.47ba9ce1.js",
    "revision": "c8280f12cefb2c58286ed364112529d5"
  },
  {
    "url": "assets/js/22.1441333a.js",
    "revision": "beb4f1afc99d7c160ac90759784a818c"
  },
  {
    "url": "assets/js/23.28941339.js",
    "revision": "e72d325e1de047aca80e98faa24ddb4f"
  },
  {
    "url": "assets/js/24.19b80904.js",
    "revision": "9a25df8dbba36b3e54ff298fc9a05b84"
  },
  {
    "url": "assets/js/25.44f73755.js",
    "revision": "10e189dcde730ffff94464f01400c1bd"
  },
  {
    "url": "assets/js/26.66853a56.js",
    "revision": "442f5f841a34b9d8895a9bce5f16b1af"
  },
  {
    "url": "assets/js/27.47070c52.js",
    "revision": "cfb579093e84d999e6fe518ffc2a9f41"
  },
  {
    "url": "assets/js/28.8012778a.js",
    "revision": "466dfd9c7e21638c747caf8972228f6e"
  },
  {
    "url": "assets/js/29.14582831.js",
    "revision": "049c2929b93c56a44e1576084c705405"
  },
  {
    "url": "assets/js/3.cdf087dc.js",
    "revision": "579155dee4f6b340b31babbc94b3f9be"
  },
  {
    "url": "assets/js/30.18821149.js",
    "revision": "1ac37c3f905d46b32a69e27545b5c541"
  },
  {
    "url": "assets/js/31.5846d37f.js",
    "revision": "027245fe9306a4a5ca727c7d54305678"
  },
  {
    "url": "assets/js/32.7315d07c.js",
    "revision": "1679a6ebc19b508474695db1b7092bff"
  },
  {
    "url": "assets/js/33.7a1e1dc4.js",
    "revision": "cf8ca997a07966d714a36372a526d098"
  },
  {
    "url": "assets/js/34.93e2f67d.js",
    "revision": "34579a7cd63cd698a376aee1126d9f4f"
  },
  {
    "url": "assets/js/35.a1603441.js",
    "revision": "336d90ba3758cb3923b5c248aa4c2de2"
  },
  {
    "url": "assets/js/36.3a321cd9.js",
    "revision": "ea49adffb83b891f0a7f7e97709e1192"
  },
  {
    "url": "assets/js/37.4d943c31.js",
    "revision": "43855919f3abd3d77608bec744310485"
  },
  {
    "url": "assets/js/38.c1df1d60.js",
    "revision": "abaca0f40747b85edd345c8e7ae38d01"
  },
  {
    "url": "assets/js/39.4ca4e7bf.js",
    "revision": "4c1616a65ffc3c1e8d56c7bbf18ea0e4"
  },
  {
    "url": "assets/js/4.c79ccb25.js",
    "revision": "7a859fa90401f0573ce535752c2ce143"
  },
  {
    "url": "assets/js/40.69d47783.js",
    "revision": "9c18c540d8962cb09e2186d9defdc170"
  },
  {
    "url": "assets/js/41.5ad20a80.js",
    "revision": "98767c51569dbd11bfbca4d9096c0585"
  },
  {
    "url": "assets/js/42.6b50d202.js",
    "revision": "93e6ac20e12416df3cb7ea848c149a0d"
  },
  {
    "url": "assets/js/43.27df9654.js",
    "revision": "05632c3dc82c92f847445dbc7e6f7a33"
  },
  {
    "url": "assets/js/44.69acd5bd.js",
    "revision": "25a751266de880307513db98be9f6d06"
  },
  {
    "url": "assets/js/45.396fc6e6.js",
    "revision": "ab2a8513a7ea6a2c20baf0a84c2e5e02"
  },
  {
    "url": "assets/js/46.5409f2d2.js",
    "revision": "d623fe351104c88a77f6188005273187"
  },
  {
    "url": "assets/js/47.7784785c.js",
    "revision": "518ca4edc6919ba11d203df6ea4c9fd3"
  },
  {
    "url": "assets/js/48.1b070a23.js",
    "revision": "0c3c957754596fca48738f349743636d"
  },
  {
    "url": "assets/js/49.c35dcf69.js",
    "revision": "307b1fb9af52a92073ea1812fab36c2b"
  },
  {
    "url": "assets/js/5.2ebcd94b.js",
    "revision": "1df5a86a2f92833feebc03d7498d9133"
  },
  {
    "url": "assets/js/50.29aaa259.js",
    "revision": "3c036663b4ca995a7bb15637a19be93c"
  },
  {
    "url": "assets/js/51.69d33a31.js",
    "revision": "d685a8f060ccc960d5484a84dd2f1d1a"
  },
  {
    "url": "assets/js/52.34fb0955.js",
    "revision": "805c182051dcbb70da563c398e27ff8d"
  },
  {
    "url": "assets/js/53.396d7496.js",
    "revision": "878efbe0e3977b62f5db649c845d115f"
  },
  {
    "url": "assets/js/54.6923b043.js",
    "revision": "6a1ce1bf25e6d0a30d4ddd0e63693895"
  },
  {
    "url": "assets/js/55.247d3d30.js",
    "revision": "94e0f1005e36b5cde7e59da0286ad71a"
  },
  {
    "url": "assets/js/56.5e1869f1.js",
    "revision": "87baf266d68a9554a14de5dfeb2c903c"
  },
  {
    "url": "assets/js/57.b223d24b.js",
    "revision": "21ba37cffb00fda4e6c90061e346dcb5"
  },
  {
    "url": "assets/js/58.878f0285.js",
    "revision": "bd68833d6016ca7922e296de557b2977"
  },
  {
    "url": "assets/js/59.c6147128.js",
    "revision": "b79d26b9501cafc830eaae11a88a2764"
  },
  {
    "url": "assets/js/6.cbce414c.js",
    "revision": "bfd322073d6ca4c808d0c0e30bda3edd"
  },
  {
    "url": "assets/js/60.cd1a9eea.js",
    "revision": "9f07db073f280d59b202ff278ee3321d"
  },
  {
    "url": "assets/js/61.b027e61c.js",
    "revision": "96c543070c1a8f8d164645ff713a4d0b"
  },
  {
    "url": "assets/js/62.5d6f9ede.js",
    "revision": "58eaf2c7bd662b534f12ce7d841f2c79"
  },
  {
    "url": "assets/js/63.a561f068.js",
    "revision": "44580a3eb029774d4d2c1614b194e1bc"
  },
  {
    "url": "assets/js/64.8691936d.js",
    "revision": "7f9d984c28f55cfb40f4446ee9017c21"
  },
  {
    "url": "assets/js/65.28722ded.js",
    "revision": "9f01c95334321ccd8f132fa87694bd2f"
  },
  {
    "url": "assets/js/66.b3ec615f.js",
    "revision": "2be88849e35d02eeebcb6644facf76d3"
  },
  {
    "url": "assets/js/67.599f6763.js",
    "revision": "4b319c429d49978c982b79175431c6f9"
  },
  {
    "url": "assets/js/68.b9a0122b.js",
    "revision": "a90f969d6c6f46bfac2a7f0126607aa8"
  },
  {
    "url": "assets/js/7.36a911e3.js",
    "revision": "0fa763882fb38d50aaaeb47ea5392c67"
  },
  {
    "url": "assets/js/app.ec302a19.js",
    "revision": "b1a973b8ae86f23fb40497d892f927f0"
  },
  {
    "url": "assets/js/vendors~docsearch.d7e70b8a.js",
    "revision": "2fe8562dae5a049c6495decbe13e29aa"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "a9b4a7c7946e0f0fb292b3de6c884ddc"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "bde3037d00e0d4cfae2446d7ae8bbfd9"
  },
  {
    "url": "comment/kinds.html",
    "revision": "3469e6e1cc6bbfe3531b0890c6be91a1"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "a71fbc63a45dc717d4dd71a0d67bd577"
  },
  {
    "url": "consistency/index.html",
    "revision": "9937cc5d603e195156a6fd8c527addea"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "e227f7bbcd7df5f1ed0c3e2a2fe3d409"
  },
  {
    "url": "logic/CQS.html",
    "revision": "ecda6d90bbfc16629c5c9d8b429de9ce"
  },
  {
    "url": "logic/declarative.html",
    "revision": "3efef874f937c8c25516a06eb25f0e96"
  },
  {
    "url": "logic/early-return.html",
    "revision": "aa4c851229920da133c102452276332b"
  },
  {
    "url": "logic/immutability.html",
    "revision": "70a55a11df67461167e0d49de6407d19"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "e58702e737ca301acc331582a3c5a8b6"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "c9951e25118394274389e0798f15255a"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "1c7350ebaec17b9ffa5733567dff417b"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "631399cf807c31e64de02d8ef6d22f7a"
  },
  {
    "url": "logic/use-library.html",
    "revision": "9d111da315fb360d438e195c3e4b64fb"
  },
  {
    "url": "name/concreteness.html",
    "revision": "839d863d83dd25010016a00e97d1cbd6"
  },
  {
    "url": "name/index.html",
    "revision": "60735fe66812935fef4308c69450dfa2"
  },
  {
    "url": "name/prejudice.html",
    "revision": "79bd3c056f56d798b7f33495494c0368"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "43e7dc71df5da30a1c1290fd9d66402a"
  },
  {
    "url": "principles/DRY.html",
    "revision": "7c6c1520404b1af2971d256b11b5a430"
  },
  {
    "url": "principles/KISS.html",
    "revision": "d9e00ebfa6848ddd3100455074192538"
  },
  {
    "url": "principles/PIE.html",
    "revision": "27aa92ed42979b4761d0b2dc24d6a760"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "52b07b5cb3d5b514cda5984948676177"
  },
  {
    "url": "test/AAA.html",
    "revision": "b82188dcad5c378df9c67be498d30e9e"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "aa9c089ee55444acee9206a5e5b35409"
  },
  {
    "url": "test/index.html",
    "revision": "b0cbd0ddfa60d4b552ea679738cff4e8"
  },
  {
    "url": "test/naming.html",
    "revision": "0038662be63fb192abfddd3d32e98cc7"
  },
  {
    "url": "test/one-test-one-point.html",
    "revision": "cd991f3f3f9b55a03ff0070b019fd29c"
  },
  {
    "url": "test/refactoring.html",
    "revision": "8807dce1c84f20366d3e00a05e650534"
  },
  {
    "url": "test/test-first.html",
    "revision": "e815e24eab1202d2e5eb99675ecb4277"
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
