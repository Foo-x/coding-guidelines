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
    "revision": "3b475caf8e9edd496308b751d6e658ca"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "7b8f28ca52487ba0c76f7ab599caa2e8"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "4e1f9d12655f4ac6f4673568ed88a873"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "4b2491246337c5f9a1144ee3795ef0f6"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "dd5e725c10fa7bc83378043a6f6ea536"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "0d9fee0259032ee6949e7d9906b15577"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "da0576630a9afdbbe0e9b978458a2210"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "7ed89f3a9cb06feee1673d3118c60288"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "1fa14b16227e6c4c9b5add53929379c8"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "70d21810e4799567a3b0747cc55ec459"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "22aa5124a60cf2c23d8d6fe525091189"
  },
  {
    "url": "architecture/REP.html",
    "revision": "b5da8abaf95037a1e41335746d917555"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "6df9b75fff6d62c6f311d36b6e22a53a"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "a697e33b8c1250ec2c2115a6c14b44a2"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "4e2586beedf43359770ae8595afc9dc1"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "96f3d1553d990715e825dc2b7e6ca3a8"
  },
  {
    "url": "assets/css/0.styles.ce59f25f.css",
    "revision": "440ac85c3312c188f6ccc7c1fa00f0bd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4a52cc53.js",
    "revision": "2d7409eaa491c087ca383839ac6fc678"
  },
  {
    "url": "assets/js/11.0dbe9566.js",
    "revision": "d33cbd62a821b0ffc9ef2baf0ec3435c"
  },
  {
    "url": "assets/js/12.6c4bad2f.js",
    "revision": "4835df101e59f769e66b1c109b9f6835"
  },
  {
    "url": "assets/js/13.67e2e2bb.js",
    "revision": "8913eb0f6b6c7431dbc74f8eb99224ba"
  },
  {
    "url": "assets/js/14.c393a4cf.js",
    "revision": "a5c2c19d0bc9f8894bd9837bb4a05c56"
  },
  {
    "url": "assets/js/15.f7c7e5fb.js",
    "revision": "989c3c50fcd10b20dcb3bd505591832d"
  },
  {
    "url": "assets/js/16.cc6d3e0c.js",
    "revision": "15a9dca9e3f9904d6ccf4d77054b4b03"
  },
  {
    "url": "assets/js/17.45a44ea3.js",
    "revision": "073cd685df773ca9eb03a7692539b7bb"
  },
  {
    "url": "assets/js/18.b7cda497.js",
    "revision": "a1d60ceb80d51ee5528a8c2d77fff60a"
  },
  {
    "url": "assets/js/19.acd519d4.js",
    "revision": "32c814b237299bb346b6ef4171e7129f"
  },
  {
    "url": "assets/js/2.614cf17f.js",
    "revision": "1bb3cca24f818ce2577b6c986d05a896"
  },
  {
    "url": "assets/js/20.516adfd7.js",
    "revision": "de9c8d1a5b847ac728091c720c9d5e4d"
  },
  {
    "url": "assets/js/21.37c5b42f.js",
    "revision": "110d65025057bf19755a1a6a922deeaf"
  },
  {
    "url": "assets/js/22.8faac17d.js",
    "revision": "3bb4c53a7054129a1ebf3671bcf9a432"
  },
  {
    "url": "assets/js/23.9de95451.js",
    "revision": "85dea6ba24afc6211676b26901fffeba"
  },
  {
    "url": "assets/js/24.d6b1709c.js",
    "revision": "407d6ac579373e614261ff93f4f5c76d"
  },
  {
    "url": "assets/js/25.37cadf90.js",
    "revision": "dacfeb4728b92574755947ad75f50a3a"
  },
  {
    "url": "assets/js/26.8d0aa66b.js",
    "revision": "0706cd37df63db69ce186e0ba7fb654e"
  },
  {
    "url": "assets/js/27.1c922380.js",
    "revision": "b7b9c6b40ec0caff35471c08f9388634"
  },
  {
    "url": "assets/js/28.655dce73.js",
    "revision": "31c819439c8cde030a7bb944d6ed5806"
  },
  {
    "url": "assets/js/29.bebf76c6.js",
    "revision": "e2ae900b966a6029bc707f30d2f7b093"
  },
  {
    "url": "assets/js/3.866685d4.js",
    "revision": "29b3a9cfe1ca8df3c45ca6e93456ca6a"
  },
  {
    "url": "assets/js/30.3332657b.js",
    "revision": "b8fd0dfb4e7ff548f7039408a1f98bbe"
  },
  {
    "url": "assets/js/31.626bf332.js",
    "revision": "e451a0df6f135a9ea840af6575718111"
  },
  {
    "url": "assets/js/32.52facb39.js",
    "revision": "ae5c409a4dc0089789cdacdee7b02d8e"
  },
  {
    "url": "assets/js/33.5af5574b.js",
    "revision": "7d5ad7593adf0f0301c6c370b313b1a2"
  },
  {
    "url": "assets/js/34.354e6a10.js",
    "revision": "c9d09acf314c1f9dd954bdd0fc20546e"
  },
  {
    "url": "assets/js/35.6a1b9747.js",
    "revision": "2a6a882184612eac2baf5525533049f0"
  },
  {
    "url": "assets/js/36.a072404e.js",
    "revision": "45a55fcff656245d5de57a5f45415f33"
  },
  {
    "url": "assets/js/37.0c182d80.js",
    "revision": "dfb74a4e7dad847069548fdcef519bea"
  },
  {
    "url": "assets/js/38.b50be4e1.js",
    "revision": "a5c7e56d0d7b0664cf9d06bc7409f9d3"
  },
  {
    "url": "assets/js/39.b98db421.js",
    "revision": "a8e34c9009f8170ff8319f1621cf5972"
  },
  {
    "url": "assets/js/4.a7446e28.js",
    "revision": "85238cdf2225f31aed0aa5da38c53e64"
  },
  {
    "url": "assets/js/40.563827e8.js",
    "revision": "f4cced0c2ac77af4f530aa3522130021"
  },
  {
    "url": "assets/js/41.3a0db3aa.js",
    "revision": "1be39d6324b395f2c1b676ba8530811b"
  },
  {
    "url": "assets/js/42.cc6ff873.js",
    "revision": "3fde33447ef4e5c6e3fa4a4afdb079ec"
  },
  {
    "url": "assets/js/43.1cd24582.js",
    "revision": "dbbe2887822b1d39c7073e65397ccf97"
  },
  {
    "url": "assets/js/44.f93d3ce4.js",
    "revision": "8a046d9d5e034ec13832918124e26f6c"
  },
  {
    "url": "assets/js/5.90da7904.js",
    "revision": "a0b069be37ff32f7b6f9782e7cf74fa9"
  },
  {
    "url": "assets/js/6.1531ba81.js",
    "revision": "25ea0bae5acb065b2dba0e5a9da20292"
  },
  {
    "url": "assets/js/7.46fa3499.js",
    "revision": "31981e63dcfd8627be64bd406dab4ae4"
  },
  {
    "url": "assets/js/8.17c384b3.js",
    "revision": "9876d6f179a976dc012fb52d1f419711"
  },
  {
    "url": "assets/js/9.ab0ae449.js",
    "revision": "b5d30b0defea07568e14a73f8a85899b"
  },
  {
    "url": "assets/js/app.4ed1bee4.js",
    "revision": "d464db26b2751e810c4a2394264aca79"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "f28e5a279149a0150ccc4cccbe9f9fda"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "d2d4281daa9d0d0421936200155208fa"
  },
  {
    "url": "comment/kinds.html",
    "revision": "90ae6fc0a59828ac45c6b990d01ccfa2"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "591eb781969b459c5e800f36ae467297"
  },
  {
    "url": "consistency/index.html",
    "revision": "695a18a14a239eae83a54af40ae5661f"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "19a8e59f3401da501d7ec19eff260091"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "09289c1a8feddea91845e799f5fd1ad1"
  },
  {
    "url": "logic/declarative.html",
    "revision": "fde587b3dfc1519db2225fbe3b52a90c"
  },
  {
    "url": "logic/early-return.html",
    "revision": "5807590f89d1ca7f11a11e370aec41d7"
  },
  {
    "url": "logic/immutability.html",
    "revision": "13303fb02e89ec5b37f5b6c113a17ea9"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "9db613de3bd5ab98a84dc0d148e6016f"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "e3586eb69560ae2d688cb1ee84d89711"
  },
  {
    "url": "logic/prohibit-redundancy-arguments-check.html",
    "revision": "6bc226e8ee1cd8b272b427bb8a1dae7a"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "bf36689170d4f43d0e882418fa13ee3f"
  },
  {
    "url": "logic/use-library.html",
    "revision": "b01fd0ca97e05efa722d3881e535519e"
  },
  {
    "url": "name/concreteness.html",
    "revision": "62e55d79f37ab88f0a677f7217cdd387"
  },
  {
    "url": "name/index.html",
    "revision": "567a6306e1a9cea3fd0fa5f2c9a026b0"
  },
  {
    "url": "name/prejudice.html",
    "revision": "71643c68217c086b72ce8073456d9e6d"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "b34b7136577d7c57687b1b3e2c6470ef"
  },
  {
    "url": "principles/DRY.html",
    "revision": "a908ae7b4a688cb942b990a81a5cdd5f"
  },
  {
    "url": "principles/KISS.html",
    "revision": "0edcec445aba5a8f696e1cab413437a3"
  },
  {
    "url": "principles/PIE.html",
    "revision": "e04fc813c2e47e4cc58977627a7cff08"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "eb4a751fdd24ea5a9947dc7927f78aa2"
  },
  {
    "url": "test/index.html",
    "revision": "01c6483016690c51c2008df936bd6418"
  },
  {
    "url": "test/refactoring.html",
    "revision": "2329f0c2a7769bc97ba7a5285437954b"
  },
  {
    "url": "test/test-first.html",
    "revision": "8fe8f00a6df05fdf5513a0f7e92ff533"
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
