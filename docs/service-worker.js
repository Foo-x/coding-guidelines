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
    "revision": "5d9c7a9170173ef0dd993dc92003bb7d"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "95f37228d69494c6d93939944b0394cd"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "af01ae60e6d77af6470f922b70e317e5"
  },
  {
    "url": "architecture/clean-architecture.html",
    "revision": "e05686c80fe293a748f8c86f12e8c1bc"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "23c8a5b148f7163c4ea97bcce26fae10"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "6c8a679dc311d41f41407025d75b72b5"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "02da180310af11d1b21e187cfd96601b"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "336e843a56b37f8ab5119cf05f7f1534"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "0b99c41cc95f308d90ce53815ad86d70"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "df0425181ba97253042cd40de0a9a0cf"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "5f1b6988a51cba17b4dd8f6fea23edb3"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "f68616349272448f544299b7687f443d"
  },
  {
    "url": "architecture/REP.html",
    "revision": "edad83961a4ba7719844607dab8462f8"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "42ec31a8aa377d4e84f41086d03a8585"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "6277495e2f3afb9862eedc514a33bcc8"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "862935351d74b49f6fbc4fb98f3c5180"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "347bcda41f6524d5c305adff0a0ba751"
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
    "url": "assets/js/25.74c9e91e.js",
    "revision": "ac269cc565fac88935d61c61134d6f72"
  },
  {
    "url": "assets/js/26.f4e289e7.js",
    "revision": "aca82ead1025d9ee2849f7646e56b98b"
  },
  {
    "url": "assets/js/27.0f49095a.js",
    "revision": "ff11cabeb8c17a099c6a6acc1c32c87b"
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
    "url": "assets/js/32.e3d2746f.js",
    "revision": "097742ad48e22d92508a50a8f36ed4cc"
  },
  {
    "url": "assets/js/33.f4ffedb0.js",
    "revision": "a6d4c55147a086295c4094b49296ff09"
  },
  {
    "url": "assets/js/34.85c0d3ba.js",
    "revision": "14992aca93fb0d45f54bc6cd81a77bfe"
  },
  {
    "url": "assets/js/35.5b3fe493.js",
    "revision": "db5919c2023f0e82b5a9f82ea8c426ff"
  },
  {
    "url": "assets/js/36.78b5a46c.js",
    "revision": "672a586362ddc447af9cafeb6e710b47"
  },
  {
    "url": "assets/js/37.643d45cf.js",
    "revision": "de4e1d2490fddc4a8891240805ced506"
  },
  {
    "url": "assets/js/38.c1df1d60.js",
    "revision": "abaca0f40747b85edd345c8e7ae38d01"
  },
  {
    "url": "assets/js/39.2a4fe760.js",
    "revision": "4e730beb21d1fe2d5810d76cc1959fc7"
  },
  {
    "url": "assets/js/4.c79ccb25.js",
    "revision": "7a859fa90401f0573ce535752c2ce143"
  },
  {
    "url": "assets/js/40.304dfc07.js",
    "revision": "aa03295bf4f9d7a225945aca9fd07878"
  },
  {
    "url": "assets/js/41.09f1d32b.js",
    "revision": "494d9356ef678440620af98519fa1280"
  },
  {
    "url": "assets/js/42.a669f79a.js",
    "revision": "8f99edd0bd44de9b5056c0bcb8e2d99c"
  },
  {
    "url": "assets/js/43.51a2dec2.js",
    "revision": "8966a21907bf411c3aa90300131e0163"
  },
  {
    "url": "assets/js/44.6c2f705e.js",
    "revision": "8e7f6aec64374a6c2238951bb4437275"
  },
  {
    "url": "assets/js/45.32c6e929.js",
    "revision": "452356e21f7776695e2c8df2916a9400"
  },
  {
    "url": "assets/js/46.7db174b5.js",
    "revision": "107e69cb326053896bd1ec2e790ad273"
  },
  {
    "url": "assets/js/47.840a041c.js",
    "revision": "81a84b1b0c34fd75c7fe3452eb66caea"
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
    "url": "assets/js/51.3852db9b.js",
    "revision": "3d8016b547e501cbcf7b5e585a710ca4"
  },
  {
    "url": "assets/js/52.ccde860c.js",
    "revision": "7e798432b9e903ff15f0e8c1f9e81842"
  },
  {
    "url": "assets/js/53.621f7590.js",
    "revision": "338ebedff2d45d8be538954224c88081"
  },
  {
    "url": "assets/js/54.36932f85.js",
    "revision": "1a80efd6574318342a7218e6a1f1fc2a"
  },
  {
    "url": "assets/js/55.703aa6b0.js",
    "revision": "81f5d645f85e189f004d834660e323dc"
  },
  {
    "url": "assets/js/56.2957d685.js",
    "revision": "8a462854f926e5a90c77b4e0134115e6"
  },
  {
    "url": "assets/js/57.bab9ecb8.js",
    "revision": "baf0f03812b28dd2f1f81be2fcafb3e1"
  },
  {
    "url": "assets/js/58.6d2045d2.js",
    "revision": "80d0663467f297ea74b26a45fadf5255"
  },
  {
    "url": "assets/js/59.05a61d4b.js",
    "revision": "6148cb49a084c0e2999ff6e5fc193b7a"
  },
  {
    "url": "assets/js/6.cbce414c.js",
    "revision": "bfd322073d6ca4c808d0c0e30bda3edd"
  },
  {
    "url": "assets/js/60.2cda351a.js",
    "revision": "9b2fed5d724e6e8fb24e4e7cc340eb73"
  },
  {
    "url": "assets/js/61.4dfd1569.js",
    "revision": "bb705a05d2d97c6270b92a23ad3093f3"
  },
  {
    "url": "assets/js/62.82a9fcf7.js",
    "revision": "c8acd763e57168a04932be7739a03d14"
  },
  {
    "url": "assets/js/63.6d112f6d.js",
    "revision": "9e9e4c1a6b1ceea16e395bc1491a0110"
  },
  {
    "url": "assets/js/64.84bdaa5a.js",
    "revision": "bd4cbbd2c927dd4835e59adf1cfcb8fa"
  },
  {
    "url": "assets/js/65.a2e0db99.js",
    "revision": "1d21dc58fa47dd4acf74175eebf677d1"
  },
  {
    "url": "assets/js/66.1dfc3386.js",
    "revision": "770991254d92f6d3de3b99c9ded3cdd3"
  },
  {
    "url": "assets/js/67.ded49011.js",
    "revision": "17c7136c442877e0739c228ccf84da72"
  },
  {
    "url": "assets/js/68.953c89a6.js",
    "revision": "8144889aa49ba1a278b50daf22e3af66"
  },
  {
    "url": "assets/js/69.ad769e91.js",
    "revision": "3fd4d080e553a4660db774f4179682dd"
  },
  {
    "url": "assets/js/7.36a911e3.js",
    "revision": "0fa763882fb38d50aaaeb47ea5392c67"
  },
  {
    "url": "assets/js/70.d6c39616.js",
    "revision": "3a43c627e28e11468130cd575b543813"
  },
  {
    "url": "assets/js/71.ac999398.js",
    "revision": "6b4cd59baab1c75cf0adec05b5fd7f70"
  },
  {
    "url": "assets/js/app.9541ec25.js",
    "revision": "854124c31dff566426156f1e4f51991d"
  },
  {
    "url": "assets/js/vendors~docsearch.d7e70b8a.js",
    "revision": "2fe8562dae5a049c6495decbe13e29aa"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "2f9fa95f07414dd1e80ca3feca5f9560"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "41e4318721741b8097512dc381b8662f"
  },
  {
    "url": "comment/kinds.html",
    "revision": "9bc8ed9ca73c05b50cc73275df2ab438"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "c66dd08ec3809f27f9cd8530f59f1ba1"
  },
  {
    "url": "consistency/index.html",
    "revision": "185f49707ee9d2a7102c100409b0217f"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "9dbb40a1568d5fcd9b78c9266b521e4e"
  },
  {
    "url": "logic/CQS.html",
    "revision": "39d9d4e2fb49eed3239d770dbc620f48"
  },
  {
    "url": "logic/declarative.html",
    "revision": "f1eee1fae8d119da6a10b742ac9feb43"
  },
  {
    "url": "logic/early-return.html",
    "revision": "0ab66be068802f7ddb47b51006d006ac"
  },
  {
    "url": "logic/immutability.html",
    "revision": "6ca3a7b45e2d5cfdc7378f1af3ec302c"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "34d782107ea135948e56c27c6440ec05"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "f5508902b5b55583519a247e89c4403d"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "38119dc02eecabea63a43d52865c86a3"
  },
  {
    "url": "logic/pure-function.html",
    "revision": "9d840df2686f28cd36a1e23fc6d8cfd6"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "7734cf1edeae6be820441556bc856880"
  },
  {
    "url": "logic/use-library.html",
    "revision": "50182587a16c63cd071f06bc203d8a35"
  },
  {
    "url": "name/concreteness.html",
    "revision": "6c7e9f40abd15fbcfea6e94a1041bfcf"
  },
  {
    "url": "name/index.html",
    "revision": "153859bd86e1ffb9e00e9dbe0ffe70df"
  },
  {
    "url": "name/prejudice.html",
    "revision": "99f8c15df5de88967b2ecced295e918c"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "76e4099041e625e8a76023ae643a0009"
  },
  {
    "url": "principles/DRY.html",
    "revision": "edf5a50abbffd02790f3c7d712eb6013"
  },
  {
    "url": "principles/KISS.html",
    "revision": "c837e9e2521978378cdc22c8c7276167"
  },
  {
    "url": "principles/PIE.html",
    "revision": "86f996b29c98a6c214e8890cca00f9a5"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "bb3481007895ca44532e361e1ebd1ec1"
  },
  {
    "url": "test/AAA.html",
    "revision": "206dc4ddc4dfb94a627d99e9465c48ee"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "67a125377fb65d020d7f78dade35070d"
  },
  {
    "url": "test/cross-check.html",
    "revision": "54d5ee21004c808e67b4fdf53837b50f"
  },
  {
    "url": "test/index.html",
    "revision": "adaf9a9c45885687a3be5f006d174092"
  },
  {
    "url": "test/naming.html",
    "revision": "c68008862cdba12a59ab165521722e5b"
  },
  {
    "url": "test/one-test-one-point.html",
    "revision": "d790114f1838d3339ab4326b3acd8fc6"
  },
  {
    "url": "test/refactoring.html",
    "revision": "8b9cf0fd56d4fdbad879e12e22ea09ca"
  },
  {
    "url": "test/test-data-builder.html",
    "revision": "db2647bdad289928b70a8f9e1c0f8d97"
  },
  {
    "url": "test/test-first.html",
    "revision": "ca8d40306b19c1ec927fe0d2b35b49de"
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
