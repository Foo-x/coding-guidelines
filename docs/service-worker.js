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
    "revision": "a94bd5b86bb855ca2de8451a0cf636e2"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "848af68d5fabae36c7791d7dba2ca092"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "a34fe1bf3109a227f089b3f59cf99a7b"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "962834d182d274acd29dd458f6964bd9"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "27bae149b1f52b02dd122e0136c3ffb4"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "26654fc889b081bd042c95df480d1708"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "308bc7930902b0cc9537528321278041"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "bd13cb27b5de5620636722bb29471e3b"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "c51553a5e041af573817909a6829bd63"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "88093756548f2733747a4a9de5d48e3f"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "f6d2c7aac1df99eaf7069dadf4e93800"
  },
  {
    "url": "architecture/REP.html",
    "revision": "e3c741a4f261739f169901454327c930"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "fa6df18e62e14c709518f0a8ea7fed35"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "559bc7f09bf10891e01af7a09306ff8a"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "c770971a77c7d5475c21eb103a21de30"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "86168cf3d4b0afecc73c5e664927b98b"
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
    "url": "assets/js/28.c3a79269.js",
    "revision": "a656738f77fc1e03a98b15605a770a44"
  },
  {
    "url": "assets/js/29.ba4fc91f.js",
    "revision": "fd97eabe381b11b172d1eec1b5c7bd25"
  },
  {
    "url": "assets/js/3.708dc5d3.js",
    "revision": "ceedd2246bff882d00a026f5033579ea"
  },
  {
    "url": "assets/js/30.533c318a.js",
    "revision": "49c96564c9f144c53606aef253d555db"
  },
  {
    "url": "assets/js/31.a0cf665c.js",
    "revision": "50716016fd44ce7371f49300c3c9b993"
  },
  {
    "url": "assets/js/32.ba02afa0.js",
    "revision": "fa0d40a6ff5d7a5785d162e4c1cfa0ab"
  },
  {
    "url": "assets/js/33.5396a567.js",
    "revision": "287940828268148cae23675c2ce2361b"
  },
  {
    "url": "assets/js/34.6079faf1.js",
    "revision": "cf28790b5ebf18336a122f4871fcdfe3"
  },
  {
    "url": "assets/js/35.ba792064.js",
    "revision": "1d9648f4f7f2e1e7f7d27d0055661b18"
  },
  {
    "url": "assets/js/36.82ea764e.js",
    "revision": "2cb3ccb3fb9400af68821c54b36e6008"
  },
  {
    "url": "assets/js/37.1391b199.js",
    "revision": "577d82b55b1bff876f6594907be3279e"
  },
  {
    "url": "assets/js/38.883e02d6.js",
    "revision": "236752d89d7989d8e3a490da904527d1"
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
    "url": "assets/js/47.a7ea8058.js",
    "revision": "fe20afa9ebc51e9cdc346e0986c82d43"
  },
  {
    "url": "assets/js/48.cb46c327.js",
    "revision": "76e76b7cdc47d5adef5c1ebdf14ae50f"
  },
  {
    "url": "assets/js/49.e463525b.js",
    "revision": "93dd85460f935c0da066546fb54bd110"
  },
  {
    "url": "assets/js/5.326e75d1.js",
    "revision": "63ecc404da9aff86a9fe62daa84a7cc0"
  },
  {
    "url": "assets/js/50.3edc30d4.js",
    "revision": "d581e06427017249e9c3aae29caa156d"
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
    "url": "assets/js/app.62fb0be9.js",
    "revision": "f8a5fe05e6706a2051b89df49431c95a"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "d7555deac7ca8beb3c0270c2d3a27fbd"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "35568330abf0bf0f959c2f9dc98c2af7"
  },
  {
    "url": "comment/kinds.html",
    "revision": "81cb9d2c10e824ccf9db2e1997db5201"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "768de9a7f50bdeda53818df330a2e70f"
  },
  {
    "url": "consistency/index.html",
    "revision": "2a6e89412353072b87227423a44a3572"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "d39d06eabe7fffd208a26746bda9ee15"
  },
  {
    "url": "logic/CQS.html",
    "revision": "0743bed330fe7d5b3eddfbc79ac63251"
  },
  {
    "url": "logic/declarative.html",
    "revision": "b381a13f1f765678a25825128ae81657"
  },
  {
    "url": "logic/early-return.html",
    "revision": "70a30ff5bb0ce2024431bc032ea3216a"
  },
  {
    "url": "logic/immutability.html",
    "revision": "043de88bd773265ac526aec92c47c6cd"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "2b311cd73b65a347e87147e372c1044b"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "bd31458950d2362cbbc72b0fad4bf2f4"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "f7d9dda2e4f6bd8d5a2ca0bb2edfc732"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "c3059eecd26ea59ea5bec7ac36bc6e99"
  },
  {
    "url": "logic/use-library.html",
    "revision": "3d82a827ec27eb9fe44b395af2968c82"
  },
  {
    "url": "name/concreteness.html",
    "revision": "ab21d2172281d9a1094c93b344bae1fc"
  },
  {
    "url": "name/index.html",
    "revision": "bb999949354c3258ebfb478f117e1254"
  },
  {
    "url": "name/prejudice.html",
    "revision": "adc5405f3f31287e738ff590b970235d"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "093d8ba252f23602bbdc49024aca8895"
  },
  {
    "url": "principles/DRY.html",
    "revision": "d90db4a0512297216c17b19d3e613ae8"
  },
  {
    "url": "principles/KISS.html",
    "revision": "ff60060d4c998a556e1e63c667517654"
  },
  {
    "url": "principles/PIE.html",
    "revision": "100c8e6ff8c6a73bf1187d0a424660f2"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "f3faa2da000d96af4806527203e1ac23"
  },
  {
    "url": "test/AAA.html",
    "revision": "d4675a3533c47ae781b05b0a4ac34ece"
  },
  {
    "url": "test/index.html",
    "revision": "2a1f0fb392fcd2e427db9e8479371329"
  },
  {
    "url": "test/naming.html",
    "revision": "7d470079b46515b7ee52d4f8670ca54c"
  },
  {
    "url": "test/refactoring.html",
    "revision": "55f1bc5c20c8e4f8c07032c539d5c477"
  },
  {
    "url": "test/test-first.html",
    "revision": "c4b1ea01d917b7b49ab5694b57957b48"
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
