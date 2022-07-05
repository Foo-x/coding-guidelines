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
    "revision": "e8722fe577d8e6b6d7844d38e537080b"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "a339692023d76cdc1af96f5f051aab5f"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "c92d33344e0c650b9e29e4538d917fe2"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "ecd100333072d2557613314e743570fe"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "9e29ff082e4e8351b067888232233815"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "0617de7b61b52b2f59475048d99c1061"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "d3e797d53c68ac692e8dda6dc9c74317"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "9fa53e6ccceb48a52750a1fc20482790"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "f73deb8524c8eb2fb2511774ef8d3674"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "6494781ea61edf7da18a890c7b59193d"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "3425a15b160c111231a56f165520995a"
  },
  {
    "url": "architecture/REP.html",
    "revision": "5f9be6adf66f5e4f24df2617ffd29c6a"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "1d918efba44fb4674c311abf18ded8a6"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "1a76a29d5e3132419910817adcc7a161"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "7ec7efa02eec26b349a36b5402819839"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "fda551ad3209532d766857dddb191d1a"
  },
  {
    "url": "assets/css/0.styles.b30a817b.css",
    "revision": "96e6c749b44a2f28233fa566ef5c1653"
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
    "url": "assets/js/3.adb24576.js",
    "revision": "ae6f5d4dfe1c546c3d36b930154600d9"
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
    "url": "assets/js/4.78b31d22.js",
    "revision": "dec4bcf6bf5af66edfa6d4908e72e79e"
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
    "url": "assets/js/48.b4bdea8f.js",
    "revision": "60ff55630cdbf2e1a135f96e9dbeadd1"
  },
  {
    "url": "assets/js/49.20b7fc15.js",
    "revision": "1dea7870728912dada7acee4adc3cb3a"
  },
  {
    "url": "assets/js/5.18391f23.js",
    "revision": "08fe32c55972a7602e5bfaffae4feab9"
  },
  {
    "url": "assets/js/50.72fffd6f.js",
    "revision": "50e955a82dbf323d70dfaa7a806889df"
  },
  {
    "url": "assets/js/51.11e1a811.js",
    "revision": "b794957ea7197204433959a82442faa3"
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
    "url": "assets/js/app.6d271b57.js",
    "revision": "6f6911c8e829c0a68fe80ec4f0548045"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "b910473dac008c9b31ab611d5bf84f1a"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "7e1f5d4071714c76a773062986c7a0e6"
  },
  {
    "url": "comment/kinds.html",
    "revision": "cbb179abbf627396fe32c65a87b8691e"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "cd048362577fe21fdea2850d70471719"
  },
  {
    "url": "consistency/index.html",
    "revision": "1eec2a9bb652e5b10ca55d020362dbaa"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "953a25291d54c6e3918034a2219ed25f"
  },
  {
    "url": "logic/CQS.html",
    "revision": "11b656a8ffd07a4513f96f38ea9c53e5"
  },
  {
    "url": "logic/declarative.html",
    "revision": "8206e1e4fb001cb8bea20e7f318990d1"
  },
  {
    "url": "logic/early-return.html",
    "revision": "9285c416adaeea5d4ce224413df2a04f"
  },
  {
    "url": "logic/immutability.html",
    "revision": "8c4b272cf7730ded7ad86b8b494ac748"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "341d517ffa4db5220a035d5a6b9b61e7"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "763a21dbe8c134beedc2e3d0312d0d5e"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "55f109b112f4ac82b272f54ddc8cfec5"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "ed4227480c3e5201e7a37dcaeea5b3a9"
  },
  {
    "url": "logic/use-library.html",
    "revision": "a740070cd690b288c9718c0f4453f4af"
  },
  {
    "url": "name/concreteness.html",
    "revision": "ab2aac8eab214fb6969ba187af03b0b6"
  },
  {
    "url": "name/index.html",
    "revision": "bf1d1c7eb78740d3862294a40c0dd744"
  },
  {
    "url": "name/prejudice.html",
    "revision": "df00684152f6a1a8a5c420f2e1d12875"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "2b8596bf49ab58cd988cdc5da51b40d5"
  },
  {
    "url": "principles/DRY.html",
    "revision": "21066b9c961a7edd6967d1eb79e32bab"
  },
  {
    "url": "principles/KISS.html",
    "revision": "28ba9d55c0bed969baabeb2533eb9188"
  },
  {
    "url": "principles/PIE.html",
    "revision": "3c62ab5e9c1debe585cad2b80154a597"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "990ddc2214e523823452bd9ca1c18ee3"
  },
  {
    "url": "test/AAA.html",
    "revision": "ece96f3901db60f02b7f99fa68970546"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "65fa28b06bf9b359030a04dbbac09da5"
  },
  {
    "url": "test/index.html",
    "revision": "04cc31d94a68f097be64d791ec6544fc"
  },
  {
    "url": "test/naming.html",
    "revision": "e5bb856a5f376309b81f5b1f946e723a"
  },
  {
    "url": "test/one-test-one-assert.html",
    "revision": "32faa94d2da2debc0cdb919568f42b62"
  },
  {
    "url": "test/refactoring.html",
    "revision": "5f5beaaf504f2ee355e9429a8d0860db"
  },
  {
    "url": "test/test-first.html",
    "revision": "22a35800483055ccfb43bccdcd1203fd"
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
