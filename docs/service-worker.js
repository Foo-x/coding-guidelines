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
    "revision": "624632f70acfa2f029132a4cfb044aca"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "bb7261ab1515d7d1cae4195ef0af20bb"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "74f398a74b202db30562fc1a23628653"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "659d55ca5fa16b0c380262c95356813f"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "66d7c0a25dd3d71d3543e1f91151d219"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "bc934ffd2cf2e656ad0316c1288ec2d4"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "5eb49c1e000f820c53840314bb51d83d"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "f3db75a992b0ca67db5c82c264b3c156"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "6177967fd04a5bdcfc5237d36e3cdffb"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "132c27ae2b2a4b049e07f8dda9bc937b"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "ec978e9d1f4cf7605927fd210e8d000c"
  },
  {
    "url": "architecture/REP.html",
    "revision": "1fed251a5a2d70d79aedd2310fc1bb63"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "3adf8e6602337ea082d1ceda20177201"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "e18f99a946d062455e934524ef716cee"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "958cc54f70f3808b099c00a7f3a0d0b2"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "267cb8e94dfbf244a0d08626756ef3fc"
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
    "url": "assets/js/20.c3578005.js",
    "revision": "428e445f28be5b3fa6ce7e0d5a50b14f"
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
    "url": "assets/js/30.b21002b1.js",
    "revision": "686db4e01b51a5dd79039030e3b9dcde"
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
    "url": "assets/js/app.2364c4c6.js",
    "revision": "74d304a8423f75be9e76888e816c3b34"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "e6c5e2dcd4879ea992f3aa69f27e06fd"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "6275c7cba1c8e6f90138f591f8aeec4b"
  },
  {
    "url": "comment/kinds.html",
    "revision": "fe63dd002a7cbf166c4654d76a2686ba"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "d8182e36b660ff3f0935edcebe02fbf5"
  },
  {
    "url": "consistency/index.html",
    "revision": "fc1af7a8b6533fc5a72080d91e5db76a"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "5ea319792db18a9339cb494ce89f4362"
  },
  {
    "url": "favicon.png",
    "revision": "ceb76f9b7ceeea6b9c2dd0c53bbdba5a"
  },
  {
    "url": "index.html",
    "revision": "387b52858edbd2e1a43dbe1dfc72a602"
  },
  {
    "url": "logic/declarative.html",
    "revision": "5a78a187a1a6521d2242e0ab3c1e68ac"
  },
  {
    "url": "logic/early-return.html",
    "revision": "a99738c543f54f43e24182dfdaf83b9f"
  },
  {
    "url": "logic/immutability.html",
    "revision": "77d30ad9b29f889cea0cc8c0a9d8550d"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "0079d9c2b50da0dbdbcdec52ba79d967"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "7db305621ce2413ed46f2d9938f1e94e"
  },
  {
    "url": "logic/prohibit-redundancy-arguments-check.html",
    "revision": "a10936478cabcdf53c8dcd59ec476d51"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "c3fee6a1ade176fda07fdd5164167f03"
  },
  {
    "url": "logic/use-library.html",
    "revision": "257af57b0810491b1cf50fbd87d128af"
  },
  {
    "url": "name/concreteness.html",
    "revision": "7943fbcbc342882ec3ddd73a7f860a2a"
  },
  {
    "url": "name/index.html",
    "revision": "fd1a89e5845e60f06c4a215e40d927a0"
  },
  {
    "url": "name/prejudice.html",
    "revision": "4d76092c0cd179576dba8e6b68ab4290"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "393091cf94f1395733b6c9db884d6800"
  },
  {
    "url": "principles/DRY.html",
    "revision": "947ced27a6802e0cae21d23bc4b682aa"
  },
  {
    "url": "principles/KISS.html",
    "revision": "ed4bfd112f92ed8262aa860717d3434a"
  },
  {
    "url": "principles/PIE.html",
    "revision": "e0d4d1c1e5145265236ded1d552b74d3"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "4942293706717dd0b7813f19d1707da0"
  },
  {
    "url": "test/index.html",
    "revision": "87af28582b307d4b6299be2787ab95b3"
  },
  {
    "url": "test/refactoring.html",
    "revision": "bb6ab05da527633a2d4545ee78938686"
  },
  {
    "url": "test/test-first.html",
    "revision": "45e2a6a26610df302d0ed10417d6e2a5"
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
