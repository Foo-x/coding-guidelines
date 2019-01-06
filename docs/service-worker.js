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
    "revision": "7e7119903e7d4b7150936d67d7dee7fd"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "1452ebb713aefa00f5afd37f9d6818c9"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "6d49519fd3ccc12ece141934fb794953"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "bd9177bd7bb30281584ea1f605a2d289"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "82b47383538275bfd845dea77ffdaeac"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "5db24a70f7ae819d1b3eda7dbe9b3953"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "2aafc7662dc99a7f126c5ce511a43351"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "fcf72e71d5ecb779f094237d3e43d9cd"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "93022dd0b6cff7aee8f401003fa83861"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "97ac1c743bc4f1fb807cc9c02c5266cf"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "cfe4b30669979ad3069827b78051e355"
  },
  {
    "url": "architecture/REP.html",
    "revision": "a64f4b74d131871cf0ebbe2b76d27ffe"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "362bc80bee9f8ef35ac22405ef74e5e1"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "36df745ba8a979f90073bdd08b168e6d"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "003e48912a4afe86d70009c65f9cbc32"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "a0d1dbcafcbf80a838088c6fd6ed388c"
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
    "url": "assets/js/26.a13fbcfa.js",
    "revision": "387842b04fedcca8252c85d5bf484de8"
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
    "url": "assets/js/app.7a034bb3.js",
    "revision": "a3d958215d2319bfe00e366833bfba8c"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "4f7d3987f03ff294911cd3d27b412ed1"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "bd72d234d1168ecf6472e06b73ed4895"
  },
  {
    "url": "comment/kinds.html",
    "revision": "f128eb360f41ac5890dcb4fa4ed1ec2e"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "e27daa580a6e665406493beed2bcdd6c"
  },
  {
    "url": "consistency/index.html",
    "revision": "8a836898fd3a3ca6a6124eb6e6c0b282"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "81ff118115cf42673a2b48981f51a7a8"
  },
  {
    "url": "favicon.png",
    "revision": "ceb76f9b7ceeea6b9c2dd0c53bbdba5a"
  },
  {
    "url": "index.html",
    "revision": "34211a16dbb9993391082f6940b39e41"
  },
  {
    "url": "logic/declarative.html",
    "revision": "159934fea8e7a7b45eb69be6cff3bc91"
  },
  {
    "url": "logic/early-return.html",
    "revision": "31a1d3cd39c4553ff2d50c0eb18604cd"
  },
  {
    "url": "logic/immutability.html",
    "revision": "29547f15a8f92c85b76b5bceda85ae5d"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "fa19764fb830fa2850e1d55f57c31a55"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "f4c88ef3fa529d302c6b130a84308b34"
  },
  {
    "url": "logic/prohibit-redundancy-arguments-check.html",
    "revision": "4343d1277cb7eb4826fdc6000aabe0ba"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "a9411efddf30e8981263891f73a7ed02"
  },
  {
    "url": "logic/use-library.html",
    "revision": "0bca65d25dbac22a338ebbb9479c5dbc"
  },
  {
    "url": "name/concreteness.html",
    "revision": "cc35e0e9acd1947e771ad86dbcd23c33"
  },
  {
    "url": "name/index.html",
    "revision": "a26491a87f8a8e3cf4e4cfabbff968c8"
  },
  {
    "url": "name/prejudice.html",
    "revision": "906379bba3b30f5c230ffef1e42b6882"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "ffd17efb024560c281450e95d83dff5c"
  },
  {
    "url": "principles/DRY.html",
    "revision": "40e5b187743fb8d57e58f437f01b041e"
  },
  {
    "url": "principles/KISS.html",
    "revision": "1376239749d0cb0a2040fedfa864d4f5"
  },
  {
    "url": "principles/PIE.html",
    "revision": "5f04562472d71a05b041ee56f941453b"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "6a66b17ed3da30caf42e5b2c8a3f3dba"
  },
  {
    "url": "test/index.html",
    "revision": "ae46530da2921760ed8e64a15a89e290"
  },
  {
    "url": "test/refactoring.html",
    "revision": "bc67e504a173d5d8e770e53262245adc"
  },
  {
    "url": "test/test-first.html",
    "revision": "f25307266495b697c2f8b19a7df5b119"
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
