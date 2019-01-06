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
    "revision": "cd1b7fb18dcfaa8064230cd25f9a392e"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "b4b99d748144dc6531bd18d970e5f082"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "14820eb9fbbde95b834e2d7895ec7448"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "3079cac4c38f21efa49d06483005ed8b"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "d8ff8790189f970a2ccf25f7f37feae7"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "bf86f375cc496478477edb669bfe0f8d"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "61e0e06cfc57d3383e700c71144b5cbe"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "3d317c41c76572e8d14a546a142a0454"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "c22dde8c79d2d6415f0d5744fa9e4725"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "0398964fc283986dda25208b549ce924"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "5576383062f599e00bd062bcb531138d"
  },
  {
    "url": "architecture/REP.html",
    "revision": "80c6a6dd0230b72dfa9c073f18d106b3"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "883d7a48229131c9c7059a263c5284b3"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "6a80f560d7123e6f7da7860427f7d934"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "0eecb6684a7f0bb2653478a68b4c4fe2"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "44c158f0a58f1b470f4b672a234a7032"
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
    "url": "assets/js/app.69baeecd.js",
    "revision": "b8332d723c4496eb9d578e9d7f4a9749"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "17d61d0907f7dcc08892f1c4c84fe15c"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "ced033dcbc2877fc768647671fbc20a3"
  },
  {
    "url": "comment/kinds.html",
    "revision": "c726dadae1b90facdd59382287340a82"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "153538da93e71a2bbda7beb252e41fac"
  },
  {
    "url": "consistency/index.html",
    "revision": "bb4bf79c7672528303712865e9e271e3"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "54d90597ee2837859e45fc1d9ecc7158"
  },
  {
    "url": "favicon.png",
    "revision": "ceb76f9b7ceeea6b9c2dd0c53bbdba5a"
  },
  {
    "url": "index.html",
    "revision": "22963db1d7282f3f323417bd4ed5a5f7"
  },
  {
    "url": "logic/declarative.html",
    "revision": "f3b6f697461f9b317542d617d017157d"
  },
  {
    "url": "logic/early-return.html",
    "revision": "37fc961d7e1d8ae1f18b1ae29399ea1b"
  },
  {
    "url": "logic/immutability.html",
    "revision": "20d7d3a8dcd6cdb711c88f84bf50763a"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "8dd73b3bbcb4d0fc3d326ddde3c060bf"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "8dbd893bce455c411d8b336c81940e86"
  },
  {
    "url": "logic/prohibit-redundancy-arguments-check.html",
    "revision": "3ab7f0a993b756dc120fbedc6d51f9b3"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "dacc5104a75c844df2f0aa6639a0e9cb"
  },
  {
    "url": "logic/use-library.html",
    "revision": "a1cc711f1053cc238aefed04e9255627"
  },
  {
    "url": "name/concreteness.html",
    "revision": "8223f6f6e3a9b006de4e04771fa2d928"
  },
  {
    "url": "name/index.html",
    "revision": "2b4ec49b463bf2b80626b3658752a7bd"
  },
  {
    "url": "name/prejudice.html",
    "revision": "ece5b5439fcdd32aa30101676db643f0"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "e20e74f3f681e98d8e10bb27f9156366"
  },
  {
    "url": "principles/DRY.html",
    "revision": "7f4b9c721e90eb565d5f6530a594316d"
  },
  {
    "url": "principles/KISS.html",
    "revision": "e120acb4b8b016e54e0e744d9f51613f"
  },
  {
    "url": "principles/PIE.html",
    "revision": "5ee4115c1264796b8992b33ab4bfe754"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "4b346eb8f2878a048c45b5e90df78c13"
  },
  {
    "url": "test/index.html",
    "revision": "2e4df71de20518659f41273262c5475c"
  },
  {
    "url": "test/refactoring.html",
    "revision": "823142f979f7909ae956aea4cd74eda8"
  },
  {
    "url": "test/test-first.html",
    "revision": "0b1611bcb285d1000e072d5b4572090e"
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
