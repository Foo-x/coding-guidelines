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
    "revision": "5374c67a4891c087b97685250b8f3bfe"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "6fa33d628ef7ada5e3d53f0ee8dca7d9"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "10560fd75518da8c00a27d8725530ba8"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "ef004a0e418480277660ff3be81099d0"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "96a33115d54e9afda6dee63348d3a110"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "13eab7363c8d81d6ef46cca9d9dd690d"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "dbc8eddc714bc628307b19c75212a707"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "9ebcc5a69a0df0c9ebdc7c1e6bd85854"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "514deeae89c88b458b9f20ba678763f7"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "6d6f636c09cba2bee963f42c9a6035e1"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "518e7e8ed2459923355fb56a807e875b"
  },
  {
    "url": "architecture/REP.html",
    "revision": "241d332bbc6b80292f5fe7df4711b766"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "6a1e1265bede7690527f4f9084834425"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "2bcca126f6304e07d588033d9c1512d5"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "4f3414b95656be3b98a851da7b68c898"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "65a9926b82fd726a8bb220f7efe74b6c"
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
    "url": "assets/js/3.708dc5d3.js",
    "revision": "ceedd2246bff882d00a026f5033579ea"
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
    "url": "assets/js/47.9e6d7e2c.js",
    "revision": "52c9f3421275fba9721c07c8ab642c90"
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
    "url": "assets/js/app.fd07f745.js",
    "revision": "efc8b2feeefa45d87b3e95826302f45c"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "431a4d5d17583958c23b65193eac332b"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "b0dabda018074111a74895dada9a4c5d"
  },
  {
    "url": "comment/kinds.html",
    "revision": "a659b80bce1ba83280eee444f332631e"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "c81638bd547d8c4ae224466157ac393a"
  },
  {
    "url": "consistency/index.html",
    "revision": "966e1d91d13444e058d9a42ae496340b"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "c861a9b94544ce4d55348ca27f46603f"
  },
  {
    "url": "logic/CQS.html",
    "revision": "141ef29e072f08d4b9a563f2371ffff5"
  },
  {
    "url": "logic/declarative.html",
    "revision": "854e92ec5dd563447c3bce07e2547569"
  },
  {
    "url": "logic/early-return.html",
    "revision": "f9aa3d3e753ce138d7a12245dc5ecaa8"
  },
  {
    "url": "logic/immutability.html",
    "revision": "8f9243007068badf09781738cf7e26bb"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "830240f557e5a2bee8d4437583efa29c"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "61e86c447749718b8afc1cd28d5b14fd"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "c7b1cd47bc88ebfc7e32e68469aa8387"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "b97aa5ba4b675078aa3f65d985a2d4d9"
  },
  {
    "url": "logic/use-library.html",
    "revision": "f369a0c953fa5d380d1aa30c7793cd3d"
  },
  {
    "url": "name/concreteness.html",
    "revision": "fb245e63fe7c60bb4be9d52159017747"
  },
  {
    "url": "name/index.html",
    "revision": "b2f4afec8d83b41fecd901d6e282b4ff"
  },
  {
    "url": "name/prejudice.html",
    "revision": "b80ee3c6b871987769a4ed006ed38f19"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "54ec4c6e26026249d2092ec866e5d6fd"
  },
  {
    "url": "principles/DRY.html",
    "revision": "69ac4313cd2ce180c059b924c4afa5ea"
  },
  {
    "url": "principles/KISS.html",
    "revision": "24b8d8316375e1ef9cf3d167271ebcf4"
  },
  {
    "url": "principles/PIE.html",
    "revision": "c59e8aac3710985fb33d929b61a5116a"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "106d619b253bf5f149e9b589a9eb4405"
  },
  {
    "url": "test/AAA.html",
    "revision": "6a52476b7eb50094ea0b48ef783ec855"
  },
  {
    "url": "test/index.html",
    "revision": "e147ad6a09330b06cd4f4df996957c70"
  },
  {
    "url": "test/naming.html",
    "revision": "f03768f7a536d7efdcec679491a99c88"
  },
  {
    "url": "test/refactoring.html",
    "revision": "db7f05bcaec7da7b8f7620de9ca8ac97"
  },
  {
    "url": "test/test-first.html",
    "revision": "36a41a6476f996424d3880414971549f"
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
