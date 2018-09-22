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
    "revision": "b9524f9b91b413d58e8b3870f1e647e1"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "76000f6253eca759a3d97b1a396db698"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "337bdd5e15cff6e06a0a7fa22e0427e9"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "dfbfb040265c74d3bbbfe50862f00ffd"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "d74cf786f84b01c6d1a132e948af2f58"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "5763c157a9a48550fd6a005bd3af4e4f"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "cbed16a004bc874b1151eed75a08687e"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "0c2bc4db16cd9b66c1c48e9c760825bb"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "2d22d1eef33678c362e7833846350d6f"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "da6a8c9f2c264a952267b8c275374ec1"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "c09e3cbcf8720752487d5f241a775cc0"
  },
  {
    "url": "architecture/REP.html",
    "revision": "ac489dd060d1d924f8932ab367e42a88"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "6ea112beb5793c96098493da2ea1b1e7"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "f6b6deab6d08eb35bd38a76cff502baa"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "dfd1d71e43afd718075ea38c7c0a6c54"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "1a21cf579efb3a45d99d1e30162a3436"
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
    "url": "assets/js/21.528f54dd.js",
    "revision": "9ba5d4c8329c0567d140fc1d26dad967"
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
    "url": "assets/js/app.8f5243fa.js",
    "revision": "e37ad0368f8c36fde2ccfc352c1d6af2"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "62d7601c06cfb4a994518676356b134a"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "deff3a1e1e7023a4f204bd3f8321d435"
  },
  {
    "url": "comment/kinds.html",
    "revision": "ef284b9acd741d8c1f0539dad673d571"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "cc3df756d47bc4c87d0c667c1819532f"
  },
  {
    "url": "consistency/index.html",
    "revision": "eca8eeabe5effdff49aa20832d685187"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "aa058c4f47e361dc6abe0f315a838467"
  },
  {
    "url": "favicon.png",
    "revision": "ceb76f9b7ceeea6b9c2dd0c53bbdba5a"
  },
  {
    "url": "index.html",
    "revision": "7621da2e016b449f0f102c70b85f7c19"
  },
  {
    "url": "logic/declarative.html",
    "revision": "c428c4dc5a8218a7794f637ba4d351e2"
  },
  {
    "url": "logic/early-return.html",
    "revision": "a39f8ae8142dbd308941dcf58cbb6007"
  },
  {
    "url": "logic/immutability.html",
    "revision": "a4d26ac46ff1bf1c7ffee5a0cee19330"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "9b3546e49078c1b5a85f61244419bd23"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "6c64bb4c6bd6707a5aceb8ee06625403"
  },
  {
    "url": "logic/use-library.html",
    "revision": "0af7d00e606f0a7f2a1a75ef87228c5b"
  },
  {
    "url": "name/concreteness.html",
    "revision": "166d344082a394fa37684b3eb390f30e"
  },
  {
    "url": "name/index.html",
    "revision": "8d810ebacb8fb029ae22d3a6faee888e"
  },
  {
    "url": "name/prejudice.html",
    "revision": "c2ebbf104f548a6d9f55e815d7af185a"
  },
  {
    "url": "principles/DRY.html",
    "revision": "6240bb9d951b523186864f7cae78f297"
  },
  {
    "url": "principles/KISS.html",
    "revision": "989c2067cc599028ad5e2eea4be87523"
  },
  {
    "url": "principles/PIE.html",
    "revision": "330c581720d64a44d913d96d9df7ab68"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "1cd46d556cabe69650bac2eb81c0dfd5"
  },
  {
    "url": "test/index.html",
    "revision": "c2d0305f7de9cd46f9dc7eda05f1d595"
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
