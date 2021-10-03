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
    "revision": "f95a8a4e4623a4bf976293f2f54a2af8"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "680a80d5fef05d898ea027a43595af11"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "ce6ac46d4f4db5283195fed59ea6ac92"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "071b9afedd3ebc320cbb1e8c2099790f"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "20fa7cb7577d5cd564ff3bcffc791f17"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "7abc0042d726b564ca6d22b318f65555"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "269b7c280c49ba75d07e0b86c0e2e71a"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "5a88adb7e6ed3ca24f8357c6c27d9f61"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "c87005c20c5098f5ca7c29b50679d69d"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "39fd387446c42e9536b4ee7fe5395a85"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "c3063bff586e8b71b88ed831ce25a388"
  },
  {
    "url": "architecture/REP.html",
    "revision": "195829022dc5b51fd10f98d7f6af8e69"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "3547d1e20ff20d22aa1051d8f2221d61"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "f15dc4671489da4fd74f82b5d86e6087"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "d2f150980dac4c812cbcaf2210dc5a52"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "deadc1ea438728c55fc2d5d67e2e4fdb"
  },
  {
    "url": "assets/css/0.styles.a3e0b06a.css",
    "revision": "dc8465169bb040c32b5beeb8da69061a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.684b0755.js",
    "revision": "caebbcb4927f4827fa0bc2eb25845005"
  },
  {
    "url": "assets/js/11.8be78f63.js",
    "revision": "dbe0cad90f167ee9fe19a16141c000ce"
  },
  {
    "url": "assets/js/12.a2167b62.js",
    "revision": "4adf29f8dd9ba85de46a4af515d442d2"
  },
  {
    "url": "assets/js/13.b415bf99.js",
    "revision": "37b4f42177cc9e647a998a9bb802dd55"
  },
  {
    "url": "assets/js/14.0bdb73a6.js",
    "revision": "75f24c0064f92103260716ba80fcfb32"
  },
  {
    "url": "assets/js/15.463d9354.js",
    "revision": "64f78740f0ca45372414a4ba407e6e24"
  },
  {
    "url": "assets/js/16.a0fb6b29.js",
    "revision": "55b6e9817083df9d775b3412ee67f22d"
  },
  {
    "url": "assets/js/17.3ed33f57.js",
    "revision": "c68e978de33a193597e0a253a20f61b3"
  },
  {
    "url": "assets/js/18.1f2e81b6.js",
    "revision": "217e16066cf602b9a7725cf9ea3dacbd"
  },
  {
    "url": "assets/js/19.5c39aaaf.js",
    "revision": "9269da57660845649772ecb6d7721c22"
  },
  {
    "url": "assets/js/2.c45a676a.js",
    "revision": "0f5678a1f33b3ff8012faaa81c4d243e"
  },
  {
    "url": "assets/js/20.2f14aa94.js",
    "revision": "e7d030112fb0805749afe1fae160787e"
  },
  {
    "url": "assets/js/21.51391572.js",
    "revision": "7aa103f8e33f7b5096758b5bb38c9304"
  },
  {
    "url": "assets/js/22.5ba1c5fe.js",
    "revision": "f8acc702b667467519b68998b37054cd"
  },
  {
    "url": "assets/js/23.8fcde090.js",
    "revision": "fb766bfd3b588245c2bfd64a3005885f"
  },
  {
    "url": "assets/js/24.63fa0e89.js",
    "revision": "6976c31febac08d3cfc253ebb1f05c44"
  },
  {
    "url": "assets/js/25.39e1d564.js",
    "revision": "8eda5a9a44395fedb33e4a0d6bb5e3fa"
  },
  {
    "url": "assets/js/26.248b6c22.js",
    "revision": "1805faf7be65b5465b90e6da4d3c4275"
  },
  {
    "url": "assets/js/27.e145d69f.js",
    "revision": "07736d4eb69fe93baadfab3995af891b"
  },
  {
    "url": "assets/js/28.87136b38.js",
    "revision": "ed145445a3915297369de27f9dfd179c"
  },
  {
    "url": "assets/js/29.2f730985.js",
    "revision": "2ae551f15f508fe902229d4630b81686"
  },
  {
    "url": "assets/js/3.9d855385.js",
    "revision": "4d25ebf7a20d12f892db7aef0410c681"
  },
  {
    "url": "assets/js/30.e1241ee6.js",
    "revision": "379bd5819831f4481ad39bf9eee9ee75"
  },
  {
    "url": "assets/js/31.94b3a388.js",
    "revision": "6fe6eac875e7f7c1df3464da8930a66f"
  },
  {
    "url": "assets/js/32.64dcb26d.js",
    "revision": "172b59149d2612eadaa71f835e916bf1"
  },
  {
    "url": "assets/js/33.64e48004.js",
    "revision": "9d4da52da03220fdefd96669796e2867"
  },
  {
    "url": "assets/js/34.ca1ac3f3.js",
    "revision": "e5b65e6f4e3e1f1c55d0e53122bdb8fa"
  },
  {
    "url": "assets/js/35.8accf070.js",
    "revision": "3b2a7dae60a895dca7ef68defd71baac"
  },
  {
    "url": "assets/js/36.403f1aff.js",
    "revision": "abf93d9ee54f793b036a116f9ced903d"
  },
  {
    "url": "assets/js/37.fcb048f5.js",
    "revision": "a8e62628476baaba90e86d4506dbb060"
  },
  {
    "url": "assets/js/38.d0be0321.js",
    "revision": "2e32f572545211d70e8e14f7fe6dea98"
  },
  {
    "url": "assets/js/39.b7cdb789.js",
    "revision": "7d5602efc73a17fe5b59e9729e3d681f"
  },
  {
    "url": "assets/js/4.fbb2a572.js",
    "revision": "fbe0841e9d6e07f494bb73e16b2fa7d2"
  },
  {
    "url": "assets/js/40.9040c343.js",
    "revision": "852c0109d432d589f5355a4459db6fdd"
  },
  {
    "url": "assets/js/41.c7db62c9.js",
    "revision": "ab8469abbd2c74481ac65641b9be884f"
  },
  {
    "url": "assets/js/42.278aa977.js",
    "revision": "5db4316637dac215ab3414f55b44dd9d"
  },
  {
    "url": "assets/js/43.0960031b.js",
    "revision": "55075a43739f4195faafdb41f7352d5e"
  },
  {
    "url": "assets/js/44.e98a8737.js",
    "revision": "bd3bf9c412da9aeecba34a765d03b0af"
  },
  {
    "url": "assets/js/45.8a58c415.js",
    "revision": "047e0d53dce161d506416cd0c8d15271"
  },
  {
    "url": "assets/js/46.69779a8b.js",
    "revision": "62178c77d4af89256a747b992a58a366"
  },
  {
    "url": "assets/js/47.037afd83.js",
    "revision": "c85822638b7dd3bb0ce3ddda5e443d10"
  },
  {
    "url": "assets/js/48.d6c37603.js",
    "revision": "4d13957452ab575fa6362804b8b0b119"
  },
  {
    "url": "assets/js/49.20b7fc15.js",
    "revision": "1dea7870728912dada7acee4adc3cb3a"
  },
  {
    "url": "assets/js/5.326e75d1.js",
    "revision": "63ecc404da9aff86a9fe62daa84a7cc0"
  },
  {
    "url": "assets/js/50.42537426.js",
    "revision": "04eed5fee75db109cb001cd3655b641b"
  },
  {
    "url": "assets/js/51.8ffb297b.js",
    "revision": "4a3ce5784c41ad62a456d2aff85cf759"
  },
  {
    "url": "assets/js/52.cd59237e.js",
    "revision": "2b9c094ba3ffaadd38e32a3f3e4fbb66"
  },
  {
    "url": "assets/js/6.4cb9ef16.js",
    "revision": "f940c140fdd7ea46598f16e5ff720434"
  },
  {
    "url": "assets/js/7.740fb97a.js",
    "revision": "f77da6bb6c3c66c71fce396702db816b"
  },
  {
    "url": "assets/js/8.5d4b33b0.js",
    "revision": "7e8dd99369f10692be252296bc78788e"
  },
  {
    "url": "assets/js/9.b139491b.js",
    "revision": "16e5ddce685b6ea7341e3ebc7c1a9d4b"
  },
  {
    "url": "assets/js/app.84a86bfe.js",
    "revision": "0040c8e4e88382ddb7f1b8b1b51f80ec"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "e632c7a187e08924ba70226c91b4fae3"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "958604856dca6c364489a52a93bdbb6c"
  },
  {
    "url": "comment/kinds.html",
    "revision": "91e19ee92b1ed921efdd3c096e80cf85"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "760589d9b6afac8d7baabf591f187297"
  },
  {
    "url": "consistency/index.html",
    "revision": "895a7e25105bf75d1199d3204613d4ee"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "9386a68ac1603faa95db6366130e9c36"
  },
  {
    "url": "logic/CQS.html",
    "revision": "3cbfd70460607928fc2b0467bf764fc6"
  },
  {
    "url": "logic/declarative.html",
    "revision": "ab3217c3f0c9de21f8b7485b98e9539f"
  },
  {
    "url": "logic/early-return.html",
    "revision": "1d9b8d49f88e221630599ddbb0730378"
  },
  {
    "url": "logic/immutability.html",
    "revision": "a91536423d8c0c79f0821f77d5108f41"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "07fe31b6d73f27f8924bd11c32eb4387"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "a60b58cc4c8426eaa80baa19f2471dc4"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "cf3abfdfe9c10428b0dc002c3e9e4923"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "0521fdb3cbac02a1311a60e1cf0f033f"
  },
  {
    "url": "logic/use-library.html",
    "revision": "99878340588527e1e8ee6180c6fd071b"
  },
  {
    "url": "name/concreteness.html",
    "revision": "e17bd61bf9e7648495cd248c1aa64806"
  },
  {
    "url": "name/index.html",
    "revision": "cc3f6a2369a803ff3f60128f5ec9caf0"
  },
  {
    "url": "name/prejudice.html",
    "revision": "9ca38c0d3a1a30570a1521c9caa10904"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "71b0c521ccb53044ba5bf676d135e7f0"
  },
  {
    "url": "principles/DRY.html",
    "revision": "b90b10082965ee6f80ed20d8d9ff9d42"
  },
  {
    "url": "principles/KISS.html",
    "revision": "060af0283020e6be679f5dbf145000ad"
  },
  {
    "url": "principles/PIE.html",
    "revision": "4780fb1c5000bd79ca5ff5d2041b119b"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "b2fa22e930ec36301427c138f0a0885c"
  },
  {
    "url": "test/AAA.html",
    "revision": "bf5b590717a6fdd7976b0030c4cdc210"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "4c0447697c441e231160aee257d0b837"
  },
  {
    "url": "test/index.html",
    "revision": "c427ea7f2597b38073431583cea9f928"
  },
  {
    "url": "test/naming.html",
    "revision": "a17ce6b9e33d7f2b4aba6b7cb70ac898"
  },
  {
    "url": "test/one-test-one-assert.html",
    "revision": "3b5578c73179c086289e89f3628c0961"
  },
  {
    "url": "test/refactoring.html",
    "revision": "14a87a63d8805a0a7373a39fe6411b3b"
  },
  {
    "url": "test/test-first.html",
    "revision": "d766ea312ced75c4d006e162b1ac4b1f"
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
