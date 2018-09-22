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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3a3bd4c28a0421310292089a9e88668e"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "bdb0623163e718209d0ca9e8f1258313"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "b03e17d01d7c4da904f0841847f23697"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "ad4695cd2495f436cf1619076aa6bdf8"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "e6c987278ce610983daf0d320255bf4e"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "1042b34856eabdcf1473c3f288d8ba5f"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "4a5e138ecbc5c570f42fc430d5b10088"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "ac0a63cff474f53ff79074928d402033"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "3dfc8e2fc5b576d96f4615b3ba01884f"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "6f4478504edd65d126938f55f93f5d18"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "89a6d4c6ce6db9cc7655650aca5de71d"
  },
  {
    "url": "architecture/REP.html",
    "revision": "0e67ce9ff12526be09de9ef8fa54a681"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "c7fdb61eff96e3ca878d439dda1c2bf5"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "786d0e95f7007c35d41b2c97b4583048"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "9f4dd3c7a5da1e2766b24cc64643a91c"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "fa45f66db4e290aeb8d9886d30e7bb21"
  },
  {
    "url": "assets/css/0.styles.7104308a.css",
    "revision": "440ac85c3312c188f6ccc7c1fa00f0bd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.34509711.js",
    "revision": "3c2033519ba5e8cb5afa0c118d200650"
  },
  {
    "url": "assets/js/11.406a86bd.js",
    "revision": "fa64fc2d905e12adb687cff6d54d58cd"
  },
  {
    "url": "assets/js/12.eac9ccd5.js",
    "revision": "a64f2619056a51bc2e9c9ca513c09c55"
  },
  {
    "url": "assets/js/13.14941c1a.js",
    "revision": "17bcb82028b5c928e15a84dc6a5a61e8"
  },
  {
    "url": "assets/js/14.a9f1ab11.js",
    "revision": "e5e5567be0debc2a9670944b86b586cc"
  },
  {
    "url": "assets/js/15.7cb924b4.js",
    "revision": "7efc14c323f49bc3f8251773e3131ad8"
  },
  {
    "url": "assets/js/16.484c3be9.js",
    "revision": "6be4b581af69ce6a4da8ebfb39aefed9"
  },
  {
    "url": "assets/js/17.4c75ee7f.js",
    "revision": "1509623318f9c09d9d2005bf7b623a1c"
  },
  {
    "url": "assets/js/18.e4a8787c.js",
    "revision": "6a051654375ef1c22eea1d4130342dae"
  },
  {
    "url": "assets/js/19.d8f214ef.js",
    "revision": "76b52d4ad4807c54e4fd97c07ee2a3fc"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.0da07798.js",
    "revision": "0fed94161745601578df65360506b29b"
  },
  {
    "url": "assets/js/21.bfcead0b.js",
    "revision": "9439506bf21548e80cc8f48663af1f4a"
  },
  {
    "url": "assets/js/22.7b2c3611.js",
    "revision": "11a63458bb5493252b358cd0c8c51753"
  },
  {
    "url": "assets/js/23.8f6434ad.js",
    "revision": "6f472793ace91691c13e796a3b4ccce5"
  },
  {
    "url": "assets/js/24.ac2eaf6e.js",
    "revision": "7986da7dded736a5cf440cfc1dd033fa"
  },
  {
    "url": "assets/js/25.8a902495.js",
    "revision": "bbe9ba04e3b28583e5d3d8b50c5917d8"
  },
  {
    "url": "assets/js/26.68faf4ae.js",
    "revision": "9be63e6fa916da9f5321cafa27485136"
  },
  {
    "url": "assets/js/27.44ca3ef9.js",
    "revision": "c8df11f08946900d85f3ef72abcb8e2e"
  },
  {
    "url": "assets/js/28.4cb677a1.js",
    "revision": "b4b5de1c7566ebe814d71454ee026906"
  },
  {
    "url": "assets/js/29.fa3a2e2f.js",
    "revision": "00d91b6aa0031e5fc4b7c491a39634dd"
  },
  {
    "url": "assets/js/3.d72e7965.js",
    "revision": "74dbe416a5b070b19612ef90393a54b6"
  },
  {
    "url": "assets/js/30.1b649d29.js",
    "revision": "211180d5c82f6bb54858ce627b7428ae"
  },
  {
    "url": "assets/js/31.b3ba35ad.js",
    "revision": "52ea213d49cf6bd6776d38e11a878748"
  },
  {
    "url": "assets/js/32.d33408f8.js",
    "revision": "965127c988bbe7fd6883c7de69f86b77"
  },
  {
    "url": "assets/js/33.a20ba3e6.js",
    "revision": "a26660d6a0a00ed60dd81da309370493"
  },
  {
    "url": "assets/js/34.ef25f23f.js",
    "revision": "b793fb04ce76e4a0cc83b38270d50a41"
  },
  {
    "url": "assets/js/35.1e0dcf70.js",
    "revision": "6f87b0a6631bb0efc26ba6907456290c"
  },
  {
    "url": "assets/js/36.698ca122.js",
    "revision": "61ab1e664ee3bb700ba9243bf85a591b"
  },
  {
    "url": "assets/js/37.028e4b07.js",
    "revision": "8d7d6ad63cbd78c8f14ebb2095381d54"
  },
  {
    "url": "assets/js/38.2340c488.js",
    "revision": "ad1b16354ff9e6428c7c07e487be913e"
  },
  {
    "url": "assets/js/39.bb200f5b.js",
    "revision": "0e12449d122cc22262d9b5ef387154b4"
  },
  {
    "url": "assets/js/4.9cc31210.js",
    "revision": "2d26896cfad675abc90b15911f4f6195"
  },
  {
    "url": "assets/js/5.e991c6b5.js",
    "revision": "a5674f402593896cac250689dbc316d4"
  },
  {
    "url": "assets/js/6.b3e8d8c1.js",
    "revision": "c2653f0aef351b7fc2fdbc9775120fff"
  },
  {
    "url": "assets/js/7.0749a943.js",
    "revision": "02e99d4383550f5a672b8eee1f7101df"
  },
  {
    "url": "assets/js/8.2deee513.js",
    "revision": "19f2807354da84a891ea84062e85e168"
  },
  {
    "url": "assets/js/9.23e6f016.js",
    "revision": "76ae821a61b3defde325469b7296e959"
  },
  {
    "url": "assets/js/app.266f5776.js",
    "revision": "887d82ecacd6699dec24982d87819da6"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "997092bb3b370992d296e4c8a6de103e"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "730090f34b9565aa6f9417d0c4c54bdc"
  },
  {
    "url": "comment/kinds.html",
    "revision": "2564fa027ff74467e0a3db93a7bbd2d2"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "6abd9d9881c501215319deebe99a11e2"
  },
  {
    "url": "consistency/index.html",
    "revision": "7f09009b2f85f4ab23e464428931d7a4"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "9bace9070be306df92079243561fda11"
  },
  {
    "url": "favicon.png",
    "revision": "ceb76f9b7ceeea6b9c2dd0c53bbdba5a"
  },
  {
    "url": "index.html",
    "revision": "7498aa5d6353e212628a2dabcef4d7e2"
  },
  {
    "url": "logic/declarative.html",
    "revision": "de5d99b3f55019453a88e20cc0fa3fd3"
  },
  {
    "url": "logic/early-return.html",
    "revision": "6dfc2ee7594c022548031243dce7f86d"
  },
  {
    "url": "logic/immutability.html",
    "revision": "8edf11fcf9c12bd7922b3f332b960097"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "dc9dff06b10e4a1030637e5c04ac21ff"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "46122578a17ee29d7752042156a724b9"
  },
  {
    "url": "logic/use-library.html",
    "revision": "5aa0facbe16df8b217c1557776c85424"
  },
  {
    "url": "name/concreteness.html",
    "revision": "2b37bc47e8a2839cd9d90477b75e50d4"
  },
  {
    "url": "name/index.html",
    "revision": "6410b76ec8355ce76c847d72d7f472de"
  },
  {
    "url": "name/prejudice.html",
    "revision": "1e0c86ce50a146e771d6c4c57fd48549"
  },
  {
    "url": "principles/DRY.html",
    "revision": "bf49de336045066f002dd1fd54eaeacb"
  },
  {
    "url": "principles/KISS.html",
    "revision": "865a48a4754ebb2c2c7e9855cb0a9c9d"
  },
  {
    "url": "principles/PIE.html",
    "revision": "2853e9593882008413a9f89ae6708b4e"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "04cc44571a05e63daa6161ed684e3772"
  },
  {
    "url": "test/index.html",
    "revision": "a903c272954485f86a3e082d5c9828f7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
