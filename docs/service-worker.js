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
    "revision": "5229480a2fac4337569c8ec6dcb8089f"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "320fe8916466e0ab35a0b3028eb2ffc6"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "9d3456036e4a21fa4d4eb20ed511cb25"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "598a3f5e54b3e6114ffeb336a885fe31"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "97009e5b796e4da7fb506d27d9724ff3"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "8b3fc5635d2a859dae8e9dedd90ba567"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "d42059a0cb254b376cdf566037190433"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "c243195205466127ef6c39f62b061048"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "fdc2f1a9a18cf7efcca2b023e6ef84e7"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "b39f666b8976dff73e43201f2690c023"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "05cde809f5dd2cf9ddec7ef8177b13b0"
  },
  {
    "url": "architecture/REP.html",
    "revision": "e0d4008efd106fa83f334bad0ce205d8"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "f69ca5b88e250d69a6f0c5bd33d7f44b"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "919363c65943f2b64d8a12849fd73967"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "a621ef33e571d44a5c69ae6f811e9225"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "2f93e9e813a45974982b2c59f7f07492"
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
    "url": "assets/js/app.6c666b70.js",
    "revision": "d1afa2168acbbd28c6d7261d0925ecf2"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "498732a011bc6ecb337506d7425eab6c"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "a9fb1c2105fb54cc95fa94208721eabd"
  },
  {
    "url": "comment/kinds.html",
    "revision": "cb05f96fa8df457b2707081552d0edf0"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "77b6cebb8c4863064cb49b6fa525dbfa"
  },
  {
    "url": "consistency/index.html",
    "revision": "4c4053fd4ee6bfa6eaa1a4e75269604a"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "a58574c1c3f244263526834209443ab4"
  },
  {
    "url": "favicon.png",
    "revision": "ceb76f9b7ceeea6b9c2dd0c53bbdba5a"
  },
  {
    "url": "index.html",
    "revision": "7d5cb647e454e5dc8e0a0fae7ed79e2d"
  },
  {
    "url": "logic/declarative.html",
    "revision": "85bfc237bc43c0891db85d5a2af459af"
  },
  {
    "url": "logic/early-return.html",
    "revision": "adab1de11a89d70842cfbd2912e823ae"
  },
  {
    "url": "logic/immutability.html",
    "revision": "ec9838c2f51162aee7b2bb155d1f0f18"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "75e2908f1f223af92aa4c0e620b67e4e"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "94c8eaa3a043668c3def300fa9e048cb"
  },
  {
    "url": "logic/prohibit-redundancy-arguments-check.html",
    "revision": "b049e78df0d713edd9ec0a928be267ff"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "d1e2c9585abfaaf2ae33fead1afdae26"
  },
  {
    "url": "logic/use-library.html",
    "revision": "7baeff06da5d5b2e36df927970dfcfcb"
  },
  {
    "url": "name/concreteness.html",
    "revision": "3420e62a74212090c2339beaef1bb306"
  },
  {
    "url": "name/index.html",
    "revision": "951c7a18d34c61190b240acd5c723842"
  },
  {
    "url": "name/prejudice.html",
    "revision": "11af80e967c6c74ac8190d4d234fa375"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "1c22b83398fdf7c381da1cf6cfcfb5eb"
  },
  {
    "url": "principles/DRY.html",
    "revision": "220669d845480a129dd16429b381805b"
  },
  {
    "url": "principles/KISS.html",
    "revision": "9fce44270c5522d25f8ff8fb1dc426d4"
  },
  {
    "url": "principles/PIE.html",
    "revision": "f2dd42c49c8bbfe850c3fcd1d18396db"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "bd66bcf4c4bcece59de926de902120d8"
  },
  {
    "url": "test/index.html",
    "revision": "3c5364782a9cad2c031df024dd2cbfae"
  },
  {
    "url": "test/refactoring.html",
    "revision": "0283d1b6c2ea94ea7587757784a6e973"
  },
  {
    "url": "test/test-first.html",
    "revision": "883ef3db94836c8b5b736217523fa66d"
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
