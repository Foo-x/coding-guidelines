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
    "revision": "7439937aba1cd02c8de97437d1125e47"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "8bffca417a8bb51147a91e53f8ce8354"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "da0ff0b078220b59554677b0ac6703c2"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "7aa3583b5e8210ec845b2daef2b1fb78"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "7a0cb1fe6b4721a4e3613cbebbbcd57e"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "38b031f7ecd54630c697f2f480030830"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "8e13b4e0bd7eb6a622857ea5773aa448"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "f04108440cc9750ed6b2f58f56219655"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "ddc8e67b4ba581575e51b844984bc760"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "c6e69a431f701399ca797013179c6e18"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "5104f2a7abeaa5b246d1c9fb7c0c6f0d"
  },
  {
    "url": "architecture/REP.html",
    "revision": "4ffd11e8ad505f8d42362b96ff7c8c43"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "f78ba63a22ba9a9a95a639226b20ccf3"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "f9e32df88136f4a24ccef1d80792a82c"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "f8ffcea4a5b8d5787de657501c126c28"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "1416132e311f750b310e7d43b9000313"
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
    "url": "assets/js/17.b4ec53f0.js",
    "revision": "a93ea9c4f6a54d11816d9843bf313290"
  },
  {
    "url": "assets/js/18.c34b42f3.js",
    "revision": "ebe57273094ec1f7fa34276d29e2ec3a"
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
    "url": "assets/js/3.58f2dc4d.js",
    "revision": "c5b8d5f91b77fb0ef87220cf9cc9d7ce"
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
    "url": "assets/js/45.5934d6cc.js",
    "revision": "c17050de48fd8e53202744df5b7f4926"
  },
  {
    "url": "assets/js/46.0f3f0143.js",
    "revision": "4dc43b0ea26c8b26ae6d4f9531639d6d"
  },
  {
    "url": "assets/js/47.5c20e9cd.js",
    "revision": "3a8bbca47fc8f5e5ccd55df15c1dd025"
  },
  {
    "url": "assets/js/48.8eb3689a.js",
    "revision": "308fefb21b80a81b72875247aae9f36f"
  },
  {
    "url": "assets/js/5.326e75d1.js",
    "revision": "63ecc404da9aff86a9fe62daa84a7cc0"
  },
  {
    "url": "assets/js/6.4cb9ef16.js",
    "revision": "f940c140fdd7ea46598f16e5ff720434"
  },
  {
    "url": "assets/js/7.84e404db.js",
    "revision": "813712d1fc10d6808d04daa0e9364746"
  },
  {
    "url": "assets/js/8.37669a92.js",
    "revision": "3f469d7c308b797296c44b9141a04cf5"
  },
  {
    "url": "assets/js/9.c990d9b3.js",
    "revision": "669c9d7c9c2739309fdc3e255f96e2f8"
  },
  {
    "url": "assets/js/app.765f8ce4.js",
    "revision": "e91d5e1b5b4e4ea9dc7321483cbc7bc4"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "c518c6cb9668ac42cb6a0e76d90b5441"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "d75ed80a216b5d0046ebb1bc4cc3ddc2"
  },
  {
    "url": "comment/kinds.html",
    "revision": "1c345bbd81c8c2e789e1a11cf0e1ad1c"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "02472004c52e76d264599325f5e95857"
  },
  {
    "url": "consistency/index.html",
    "revision": "08d7f6ad4ad21fe26c0af82155b9c0e7"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "047dc96ed1783f19ee4fe1f072dfa288"
  },
  {
    "url": "logic/CQS.html",
    "revision": "5eabfebae95fb6c6bfda214f3e2bbef3"
  },
  {
    "url": "logic/declarative.html",
    "revision": "94e15b1ae3ec219d247259af20866c4c"
  },
  {
    "url": "logic/early-return.html",
    "revision": "befbca750b54218c4e4f79bc1e0700f3"
  },
  {
    "url": "logic/immutability.html",
    "revision": "21e6a65a79f32c7f12e1f4fa1899e998"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "e69371bc7ee9e3a828cd46c039717117"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "89b0a4db1e1da30333336aa86021372e"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "00064a0e3f92bc2b7314c7ac6819e270"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "beda98b8813507a742ad70d8675a9879"
  },
  {
    "url": "logic/use-library.html",
    "revision": "41d73a2392140ed3e286c80c9882ac8e"
  },
  {
    "url": "name/concreteness.html",
    "revision": "c819192c56936553b27411f78fc07dd2"
  },
  {
    "url": "name/index.html",
    "revision": "ef052af387b8caf77a1706f33140f2da"
  },
  {
    "url": "name/prejudice.html",
    "revision": "c3bc2a20ce78d067dc39c72ad836c116"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "d17fdf8a88f1589ed67b9a013f8d7604"
  },
  {
    "url": "principles/DRY.html",
    "revision": "b8c51715c5602140e9f6ec536eb6b124"
  },
  {
    "url": "principles/KISS.html",
    "revision": "e095124c75e2a76756a7000c4ab40151"
  },
  {
    "url": "principles/PIE.html",
    "revision": "a110027101cc60ac5c72eebffda8436b"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "658043214e4587b45ac5d0e0c7d4be74"
  },
  {
    "url": "test/index.html",
    "revision": "c8dc1993094a2addb0f6a626303201d2"
  },
  {
    "url": "test/refactoring.html",
    "revision": "4235a9b8c886f687323ec34abf5ecd95"
  },
  {
    "url": "test/test-first.html",
    "revision": "bb1c4e4153e79504d6edfbec4c8d9753"
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
