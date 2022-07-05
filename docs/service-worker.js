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
    "revision": "eea5d2234449a5a1b8e17d45f4fa2e45"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "1befcefaab9d6b3bd87a6089ab78cfba"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "f7bc6fdff24e5aef8a1664b3cb607334"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "4e8ca074c2dcd183d8b1a39ae5130de2"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "565a7c687974b1566785a6fe8a2a3a9e"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "fccb19e1d424f4bb687f23cf795d16ca"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "182248724134a0a2026233a202ed4d34"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "ccdc8390c88a83705ea256d2aa06bbca"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "9201bbc348f44124ac38a703fe2831b0"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "4d8ab7792b2dbf49a1d039c4e0550b9d"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "6003c6fc4b3201428de22bd062ec7326"
  },
  {
    "url": "architecture/REP.html",
    "revision": "a1cbde163066a6deff183d7fed400a4e"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "aa7cc1cd2746221a487ded5aeafa69c6"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "f1ece5da79c8a9475d25b7eb986296fc"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "d1ba8e5da6cebbaa80aa9a9ae6c010f3"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "3de83cacc713ff89d1ea8e1a8f0f99b8"
  },
  {
    "url": "assets/css/0.styles.81d1f55c.css",
    "revision": "a5d107cf709d7e4b173870b2c39ac693"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5a76886b.js",
    "revision": "6679fa1b926e321b4413d8f0993a0587"
  },
  {
    "url": "assets/js/11.1f45a64e.js",
    "revision": "3f00e20741e69e86c53252849d6983bf"
  },
  {
    "url": "assets/js/12.b17af28f.js",
    "revision": "d4ebc274bea14b20ee1b15a003ed8894"
  },
  {
    "url": "assets/js/13.9b470e17.js",
    "revision": "64d2361c487c0a595663238ca4690d6f"
  },
  {
    "url": "assets/js/14.6d1f6618.js",
    "revision": "6eff102c5386972f91941d942113d1d3"
  },
  {
    "url": "assets/js/15.a2de72ec.js",
    "revision": "ac49ebb8a4ef7f080f48b13ca9a3b6a5"
  },
  {
    "url": "assets/js/16.16dd3451.js",
    "revision": "19f820dbbe75b68eda3d49acfc6ff92d"
  },
  {
    "url": "assets/js/17.b3934684.js",
    "revision": "d5faf12c3d9771d2e0ab7c89c59f7cfa"
  },
  {
    "url": "assets/js/18.8da1d7ef.js",
    "revision": "a27472514bff12242082da6dad40b5c9"
  },
  {
    "url": "assets/js/19.fdf774c1.js",
    "revision": "e4536e9fad04aed7886fcd605e47e634"
  },
  {
    "url": "assets/js/2.bcea7845.js",
    "revision": "ba1d680204f82818fdbc2d364f678a81"
  },
  {
    "url": "assets/js/20.d37a7ec5.js",
    "revision": "4b3c28ecbd18fbe8cde0122e52d4d93b"
  },
  {
    "url": "assets/js/21.1a943531.js",
    "revision": "116b0b8307b6c83e6dd5a8073690148a"
  },
  {
    "url": "assets/js/22.9a1cdaae.js",
    "revision": "d98f985f2ce9b9f4285789df7fc51c03"
  },
  {
    "url": "assets/js/23.dcedad3f.js",
    "revision": "755221ee11cbb72a76401d3b90a3d15d"
  },
  {
    "url": "assets/js/24.ae0b27e3.js",
    "revision": "fb7de1e24b080a50518429b1db8740fa"
  },
  {
    "url": "assets/js/25.ee8d7aaf.js",
    "revision": "a02679df10c0994bbefeaa0abec7872b"
  },
  {
    "url": "assets/js/26.a67bf11d.js",
    "revision": "b55b964ecbda18eb295f07ff126d4b26"
  },
  {
    "url": "assets/js/27.1a04e093.js",
    "revision": "a0818b4d52f486f6dc2e94b45009cecc"
  },
  {
    "url": "assets/js/28.bea4ccb8.js",
    "revision": "5217ca0e406816aba517e307c0d6c7f5"
  },
  {
    "url": "assets/js/29.63002526.js",
    "revision": "72e660663b9837390f24e94a10b096c7"
  },
  {
    "url": "assets/js/3.6f32f82f.js",
    "revision": "a5d29224c04a3d61742478049591d1dc"
  },
  {
    "url": "assets/js/30.908c7821.js",
    "revision": "308c5b4f35712a8707e6e8045fa93cd8"
  },
  {
    "url": "assets/js/31.736efa33.js",
    "revision": "33a529e26c4f8e4f9d92c24415438dfa"
  },
  {
    "url": "assets/js/32.82d3111d.js",
    "revision": "81871d039c4930b588c651fdf7ba8cb7"
  },
  {
    "url": "assets/js/33.7e414a77.js",
    "revision": "639e9d099ed086e0e29b3568272dd221"
  },
  {
    "url": "assets/js/34.9713c320.js",
    "revision": "2fb6944f6026c91023ad8a8136020622"
  },
  {
    "url": "assets/js/35.7257ce1d.js",
    "revision": "0ee74a53a34e6b42670861edd887ad7c"
  },
  {
    "url": "assets/js/36.ad0918bd.js",
    "revision": "5dd085a685bb605f5f425debdb7d882c"
  },
  {
    "url": "assets/js/37.e173e270.js",
    "revision": "f5f9aca4e78414e90bc1890b721ed405"
  },
  {
    "url": "assets/js/38.1046292c.js",
    "revision": "07db451469cfd21fc141d008b85079a7"
  },
  {
    "url": "assets/js/39.549b1bf6.js",
    "revision": "59ddf99954bef1b24dca42bbd13cd91f"
  },
  {
    "url": "assets/js/4.297c7a05.js",
    "revision": "9599a544b1d3cc88fd7e5587b999c3fd"
  },
  {
    "url": "assets/js/40.c78042ac.js",
    "revision": "e610b0b9b140ee33f929a14223960f9f"
  },
  {
    "url": "assets/js/41.08f0a4fc.js",
    "revision": "696a49bb0b9df3a55434e61a6e0a06ba"
  },
  {
    "url": "assets/js/42.de63fd42.js",
    "revision": "2d3ccdc850c9b6efd0dfeffe5f15351c"
  },
  {
    "url": "assets/js/43.8662ed41.js",
    "revision": "16cf175ac364aea7a5865932cb3a6577"
  },
  {
    "url": "assets/js/44.4c61bd7d.js",
    "revision": "2dbdc0313afa4d623846f5a56cec052e"
  },
  {
    "url": "assets/js/45.4d9ae424.js",
    "revision": "814824deb3c00c62205105b33ec567bb"
  },
  {
    "url": "assets/js/46.9e443898.js",
    "revision": "149f033c108faf976fb160b56969098f"
  },
  {
    "url": "assets/js/47.022b8b03.js",
    "revision": "00100167790417e2f24ce463013e9800"
  },
  {
    "url": "assets/js/48.c495e640.js",
    "revision": "af98752f81e95c1ecdf8c71b71bbb7fa"
  },
  {
    "url": "assets/js/49.1b2827fa.js",
    "revision": "901a2ba9e47f41499b362436e9864d3c"
  },
  {
    "url": "assets/js/5.f3217df7.js",
    "revision": "468d3c8751ff1cd3b14ad0d493293903"
  },
  {
    "url": "assets/js/50.cb5cfb6f.js",
    "revision": "e271634a10feb4358be32cd0b133f715"
  },
  {
    "url": "assets/js/51.85134cde.js",
    "revision": "7075f4570882c906600ba911c2108871"
  },
  {
    "url": "assets/js/52.d22459bd.js",
    "revision": "a3ee24d248b91982a0470a64a4ac7c77"
  },
  {
    "url": "assets/js/6.4a627f12.js",
    "revision": "e2fca6d17d5e02ea4f4f9645a1b32380"
  },
  {
    "url": "assets/js/7.8fbe8c2b.js",
    "revision": "28b6a7c629f0f39295f8513708b6639e"
  },
  {
    "url": "assets/js/8.9a0a4ea5.js",
    "revision": "082350ce44c9d7787af3a4887debdcba"
  },
  {
    "url": "assets/js/9.9870a147.js",
    "revision": "c90f1e64353b9ad8a5aa7706e058e0df"
  },
  {
    "url": "assets/js/app.e00466f6.js",
    "revision": "ae081cfe6d4ed41a80e6d46537f97c00"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "40c21a48424eee4d6169092ea2fcdd0e"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "e621947b1a108593c21e1d8faae8480b"
  },
  {
    "url": "comment/kinds.html",
    "revision": "6823be1648e5327e4befa54ccb1250bf"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "6387644bdaac3ea0cb21df10bd3cde46"
  },
  {
    "url": "consistency/index.html",
    "revision": "5298dda8231ccd271903ebb486438fa3"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "90417a40b519b4a88cf637eab8e10b8a"
  },
  {
    "url": "logic/CQS.html",
    "revision": "394cc4850429bd248452c3a43e98159a"
  },
  {
    "url": "logic/declarative.html",
    "revision": "9ba3107d8ae3841d9dc7eadf226dc962"
  },
  {
    "url": "logic/early-return.html",
    "revision": "f2b159aae85177afab3dc701c42aed99"
  },
  {
    "url": "logic/immutability.html",
    "revision": "b3232bcd97497faea0086bcb0a5aec1a"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "802499e7848c44d2add7c9efcb16ca32"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "fce0325247bc10773e5906972b0680e6"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "e39b4dd0d386f2295a1032598a0fbafd"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "afe0d5eaecde1f05bcdbc67961d42b3c"
  },
  {
    "url": "logic/use-library.html",
    "revision": "da0be0911113b04fbfca0923bd5fdc51"
  },
  {
    "url": "name/concreteness.html",
    "revision": "5560ee142ca4c32bd37eaa0ff2136395"
  },
  {
    "url": "name/index.html",
    "revision": "93765be7b0d16b3f4264440a3761667e"
  },
  {
    "url": "name/prejudice.html",
    "revision": "978ce303cbd7b31f5f06f7b0e086ab7d"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "26005a6c2029bf19be56721e691613e8"
  },
  {
    "url": "principles/DRY.html",
    "revision": "f95b779392e504ec1a55670047214c81"
  },
  {
    "url": "principles/KISS.html",
    "revision": "676b5348bf55f59bae2d60c11e622660"
  },
  {
    "url": "principles/PIE.html",
    "revision": "eb7108b9414e600a6dc440e029f8abed"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "ca243baad0ad8cf12890bad975b55f5d"
  },
  {
    "url": "test/AAA.html",
    "revision": "d6e16a8ed8d197101db613ca7abe4c92"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "4a4c6e07805c7173b8e1787e7282d348"
  },
  {
    "url": "test/index.html",
    "revision": "ea1f7a421fa6a472b508a5bf7838cc86"
  },
  {
    "url": "test/naming.html",
    "revision": "ebb5cf0d36d009161fd512f908c2941c"
  },
  {
    "url": "test/one-test-one-assert.html",
    "revision": "0418b9083517ce174f9c15d49a861aef"
  },
  {
    "url": "test/refactoring.html",
    "revision": "301f6f68eb89ad0baaa4708bda158d1c"
  },
  {
    "url": "test/test-first.html",
    "revision": "d0171045742c3e4e6af7e4caab4d41ec"
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
