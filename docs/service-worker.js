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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b2fa033c43df3b81eb656cc201a3619a"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "1f961b038f5faafe956223f17e945ab6"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "2c8f514efd4d2e151ba731d54246b8f3"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "5c3ff2db2a9e45d435356ce5ffbb5a7d"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "002790522b7727ac70f18a23681daf0a"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "3760fa9646659bbc4e93f99f400d13af"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "4c3352c3c42c3a0b634008a066e305ec"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "6b159c50c49232e907af37d692534abf"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "e55c3495f76d42d6a939a2577e7e66ff"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "845a5416b752249137de54765dc76b1d"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "fb391492ae12b5a5604efdcee7ba95bc"
  },
  {
    "url": "architecture/REP.html",
    "revision": "952d239ea14911b5a3bedd39773ef597"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "6c6fb1642e1ceaad15d6af16f0745a23"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "f4a2b68fcc3f5811d55f3fe2fc8391f4"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "35d7b95904eb52cba8bd4ea68e6239ee"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "e9343a4d919464a86e99d547a5028668"
  },
  {
    "url": "assets/css/0.styles.7d90148d.css",
    "revision": "89d34e8763b060af9e6dd0edbcad51d6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.61524948.js",
    "revision": "1999feaae9fd2ea00c3dacf0dd97e718"
  },
  {
    "url": "assets/js/11.285a6ada.js",
    "revision": "481659b4790c62a5199bf2dee9915d08"
  },
  {
    "url": "assets/js/12.b745a8f8.js",
    "revision": "78fc30b4158198a57b868ecb8e2c6f02"
  },
  {
    "url": "assets/js/13.0972cb2a.js",
    "revision": "831c591efd41d6a8a6876ab340e80adb"
  },
  {
    "url": "assets/js/14.78573c21.js",
    "revision": "0cee5a38cac89203d8ce21ed47eb5280"
  },
  {
    "url": "assets/js/15.edd10bea.js",
    "revision": "1f97e25f87efa619901e769b29ccf7ba"
  },
  {
    "url": "assets/js/16.283827d6.js",
    "revision": "f7061403d778845fe87e2eb74ada6298"
  },
  {
    "url": "assets/js/17.30f26056.js",
    "revision": "ad96d51ddbf6f68647e46da3ede6cec2"
  },
  {
    "url": "assets/js/18.87d34df0.js",
    "revision": "065174101ed6a9177ace2c511c663ca8"
  },
  {
    "url": "assets/js/19.bce31fb9.js",
    "revision": "fe61940cd430ff79be1263370a6c73ad"
  },
  {
    "url": "assets/js/2.19ec941c.js",
    "revision": "5ff8ec966f2f1e9d55fac3110ce27dbb"
  },
  {
    "url": "assets/js/20.14cf1333.js",
    "revision": "7bc855adba3546ad2e82ba0a9247d883"
  },
  {
    "url": "assets/js/21.934bce5b.js",
    "revision": "0dc0385f1a38f8d3915bff3054805715"
  },
  {
    "url": "assets/js/22.05fe6d94.js",
    "revision": "1a0ee697c1b5d4d6664a30897fa63d51"
  },
  {
    "url": "assets/js/23.5765d9e4.js",
    "revision": "f36511c4032c89c09ac31e13a9430308"
  },
  {
    "url": "assets/js/24.bdcf5731.js",
    "revision": "1013a014d2e100ea2460f9cc30a2bde9"
  },
  {
    "url": "assets/js/25.fb720738.js",
    "revision": "35af18cc878f92d3476bf1dfcb796d70"
  },
  {
    "url": "assets/js/26.aa45db2f.js",
    "revision": "f45c7d0089803ee6658501ccf700adf5"
  },
  {
    "url": "assets/js/27.333f747c.js",
    "revision": "1c9bda90636df0cb18f5e4ac2480f486"
  },
  {
    "url": "assets/js/28.b3edfcae.js",
    "revision": "8d05835c8ec2cf638cb2418e35fe5794"
  },
  {
    "url": "assets/js/29.416f2d9e.js",
    "revision": "f26e33443b2dccc13c30a4df1975e681"
  },
  {
    "url": "assets/js/3.743c1399.js",
    "revision": "5b2c08f61e1a3b637783f5717645bd7e"
  },
  {
    "url": "assets/js/30.11eef825.js",
    "revision": "5ecb36cfb93739cbcdd7450d2a048235"
  },
  {
    "url": "assets/js/31.76800f38.js",
    "revision": "42f3361f62ff202bf0a019b3c7c76395"
  },
  {
    "url": "assets/js/32.ec4db019.js",
    "revision": "70050190bb9b317b641eda4e1124f908"
  },
  {
    "url": "assets/js/33.7df16ba7.js",
    "revision": "cbe6590c506439deaa8875f8528671dd"
  },
  {
    "url": "assets/js/34.7951076c.js",
    "revision": "c697f5d173257c622780a515c6a602fa"
  },
  {
    "url": "assets/js/35.98623776.js",
    "revision": "0b2da577a5462c918cb3b852f1fc07de"
  },
  {
    "url": "assets/js/36.c3256e33.js",
    "revision": "11c3bbd9e689ae0410f115279246db5b"
  },
  {
    "url": "assets/js/37.e51f968a.js",
    "revision": "18a2aff0acc2e5434bffa36d979b11fe"
  },
  {
    "url": "assets/js/38.31385b2c.js",
    "revision": "fe331076dcf7176744837b826201444e"
  },
  {
    "url": "assets/js/39.3fe042ca.js",
    "revision": "995812a5dc9c72b154508ca1f62098e0"
  },
  {
    "url": "assets/js/4.7b721b2b.js",
    "revision": "12b019965af9de7b4e7f734d36536fca"
  },
  {
    "url": "assets/js/40.c3181556.js",
    "revision": "28b2eed38dc964e5dab009c3c799eeda"
  },
  {
    "url": "assets/js/41.a68c6de6.js",
    "revision": "0276a00aa2f9f9ec7fce755c8b0ac326"
  },
  {
    "url": "assets/js/42.4163cd4f.js",
    "revision": "127a8be14c79443d4e3f3d8cc5cf72dc"
  },
  {
    "url": "assets/js/43.463e96aa.js",
    "revision": "5bfa850f650c4bbfc5e60de95da429f3"
  },
  {
    "url": "assets/js/44.5277b134.js",
    "revision": "45fdb6e36fabf30261301cd8f54a2205"
  },
  {
    "url": "assets/js/5.4441a53b.js",
    "revision": "9c0d2ed894f460a415a75165ec9d3208"
  },
  {
    "url": "assets/js/6.bf473181.js",
    "revision": "3e659cab0d44f9c7e53c6c8828661a43"
  },
  {
    "url": "assets/js/7.e7681445.js",
    "revision": "f362cfbeba02ff093c466f9eaa922e12"
  },
  {
    "url": "assets/js/8.70a166f0.js",
    "revision": "5c689ce49b6f14578a0d48916dcafa3c"
  },
  {
    "url": "assets/js/9.0fccb942.js",
    "revision": "8abc2dd6b9174b27c3608fb63b333b1b"
  },
  {
    "url": "assets/js/app.e01c7f20.js",
    "revision": "b990cf2b484cde84144b3e75774bebc5"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "397a0d058e96aec0ee8b440d8076abe1"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "6abd12902da668ba315864412c251969"
  },
  {
    "url": "comment/kinds.html",
    "revision": "f17ef5dbe5c29219b7af0954d5e83d77"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "86b8eaf44c257b326549f0a081af1c38"
  },
  {
    "url": "consistency/index.html",
    "revision": "194d248a9e5a9a56ba8c35069a94ce7c"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "b5b9fe9accc8530d7d3cbb26a5a5d268"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "bc95a435a1cce789a3cfc513843eeb36"
  },
  {
    "url": "logic/declarative.html",
    "revision": "bf53488d73034f8915afdbba577c270a"
  },
  {
    "url": "logic/early-return.html",
    "revision": "f6681de2257091dc45d4b82f8237e033"
  },
  {
    "url": "logic/immutability.html",
    "revision": "9b31d012f425404a06da06ea7fec393e"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "8080e937accbea08274f0babeec5c2bf"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "bf58ca5e7874645a37a9453b900cba72"
  },
  {
    "url": "logic/prohibit-redundancy-arguments-check.html",
    "revision": "7c63d257678b14c3cd5431c5466b975c"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "369fdf49a6cde39b991d56dc18a94f58"
  },
  {
    "url": "logic/use-library.html",
    "revision": "607d0aa4080a1083aeff2e4834891dc0"
  },
  {
    "url": "name/concreteness.html",
    "revision": "a6188b1ac3804a681ff905aa0f83fa04"
  },
  {
    "url": "name/index.html",
    "revision": "e2b280318b998720a27eecef404ee53e"
  },
  {
    "url": "name/prejudice.html",
    "revision": "1ec40be52d33fdffea6d0d79c2fb8d43"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "2cb9fde2f91c1eb3e7635237fdef79ea"
  },
  {
    "url": "principles/DRY.html",
    "revision": "57bdc205dd87d69ae9ca5e0db9962277"
  },
  {
    "url": "principles/KISS.html",
    "revision": "08539ddadce62504e3e2b12d1ff6cd6d"
  },
  {
    "url": "principles/PIE.html",
    "revision": "885083fb6b48ca830106d38116f97ead"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "ce4f2f80274a936323f61037caa2b702"
  },
  {
    "url": "test/index.html",
    "revision": "1994ada98de20d201724b86f08d86ca9"
  },
  {
    "url": "test/refactoring.html",
    "revision": "b6a540b88a153d5669fc2de286a5fb2f"
  },
  {
    "url": "test/test-first.html",
    "revision": "339cf1cb7bb7687ce1dd570eeb69ca79"
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
