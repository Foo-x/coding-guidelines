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
    "revision": "41f38c54fa497dd7271f09c42e276f78"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "74252106a64203db6468054d90542a6c"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "a8e8b65888eff0646ffcf71373757769"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "7ce4d6d81dfde5377c85d85a33b65421"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "069d93476320d3b9700e1f89a9cc0ebf"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "2a8e873885f2c9f6392e2673bbdb4e18"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "7ab41f2b788db08491e85cf136c218e4"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "42a34536995793136d6a508ed30aa4dc"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "7245be0deff0b940a62601ff599aabf7"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "7a05fda58be3383f347afb69ce2cc051"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "000bb8905168270f5c936e871e5915e4"
  },
  {
    "url": "architecture/REP.html",
    "revision": "523c8e8f4cca17de3e149f883a72927f"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "ec54d3a94b7400dc3fbaeb60e72c704b"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "68da4ee5994e232591d7c90f82808067"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "3ac6e151e6630d75822779f9bafcb7f7"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "bf064376a6d35a0c94be4ff8fede4e3f"
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
    "url": "assets/js/10.c310172a.js",
    "revision": "4b9dc6b7a0edb61576918cf9464f4456"
  },
  {
    "url": "assets/js/11.59130a8d.js",
    "revision": "9fec84e20eae979f692d70bdc7c86674"
  },
  {
    "url": "assets/js/12.7481e7da.js",
    "revision": "3fd98f5bd3321614e308e5212dae069d"
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
    "url": "assets/js/15.24439bfd.js",
    "revision": "c7bb098e9f8f76e15ea3aba5243b3d78"
  },
  {
    "url": "assets/js/16.b87af39f.js",
    "revision": "e625519a77eba560733188056f8c7e6c"
  },
  {
    "url": "assets/js/17.f0ef4210.js",
    "revision": "384dfb014a1060bcd8d375b491bf34d8"
  },
  {
    "url": "assets/js/18.c34b42f3.js",
    "revision": "ebe57273094ec1f7fa34276d29e2ec3a"
  },
  {
    "url": "assets/js/19.a0d6b78b.js",
    "revision": "b6fb6543a08630a69c999b20d4165eac"
  },
  {
    "url": "assets/js/2.c45a676a.js",
    "revision": "0f5678a1f33b3ff8012faaa81c4d243e"
  },
  {
    "url": "assets/js/20.ccbfe072.js",
    "revision": "64b769dc1e730cb5c31f50bf4d064ea8"
  },
  {
    "url": "assets/js/21.535ff29c.js",
    "revision": "3db7fcb0aa978d0f26ac949af41ee527"
  },
  {
    "url": "assets/js/22.a5a07178.js",
    "revision": "01c909af47d8aac877067994b2031cca"
  },
  {
    "url": "assets/js/23.8fcde090.js",
    "revision": "fb766bfd3b588245c2bfd64a3005885f"
  },
  {
    "url": "assets/js/24.11a83392.js",
    "revision": "09261bbb9855481a39f667144c098614"
  },
  {
    "url": "assets/js/25.c2814eb9.js",
    "revision": "e6c9177943fa1348a10086dc27e526e0"
  },
  {
    "url": "assets/js/26.40eac4d0.js",
    "revision": "203ae65a82bf6003cb8c50e879f97c38"
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
    "url": "assets/js/3.7cffca6d.js",
    "revision": "f733a8928be7a6d7b838344be71bb179"
  },
  {
    "url": "assets/js/30.0d89672e.js",
    "revision": "a3f7aeb6d25ced30877b41ebda11ffad"
  },
  {
    "url": "assets/js/31.a0cf665c.js",
    "revision": "50716016fd44ce7371f49300c3c9b993"
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
    "url": "assets/js/34.e59e48c4.js",
    "revision": "c80d66963479dfe9497a3a61a089ea05"
  },
  {
    "url": "assets/js/35.ba792064.js",
    "revision": "1d9648f4f7f2e1e7f7d27d0055661b18"
  },
  {
    "url": "assets/js/36.82ea764e.js",
    "revision": "2cb3ccb3fb9400af68821c54b36e6008"
  },
  {
    "url": "assets/js/37.1391b199.js",
    "revision": "577d82b55b1bff876f6594907be3279e"
  },
  {
    "url": "assets/js/38.883e02d6.js",
    "revision": "236752d89d7989d8e3a490da904527d1"
  },
  {
    "url": "assets/js/39.8512598a.js",
    "revision": "91f17f5c37c92e31974c9f58fe5b03db"
  },
  {
    "url": "assets/js/4.fbb2a572.js",
    "revision": "fbe0841e9d6e07f494bb73e16b2fa7d2"
  },
  {
    "url": "assets/js/40.c05b4898.js",
    "revision": "0bb0c85c59b06ee65ee7144d8eca9367"
  },
  {
    "url": "assets/js/41.8159a6f4.js",
    "revision": "8910d04e0cb180b46c788bb99ad51d30"
  },
  {
    "url": "assets/js/42.b76a1e39.js",
    "revision": "bac40e1d363b3d9a8a7ed932098c73ab"
  },
  {
    "url": "assets/js/43.0b220bb1.js",
    "revision": "79928f620d817407769d600cd47e2dc9"
  },
  {
    "url": "assets/js/44.4c7b2181.js",
    "revision": "fccc8e1970dbbddd545fca82658fd4dc"
  },
  {
    "url": "assets/js/45.d6d95eea.js",
    "revision": "80315b49c2a78c4467c42da1f757b719"
  },
  {
    "url": "assets/js/46.5ac17a3e.js",
    "revision": "21a8343fd2cafd2c627bd910c0a89c28"
  },
  {
    "url": "assets/js/47.4c3194cd.js",
    "revision": "fd28034be7f3aa7d55a8015bfd195ba1"
  },
  {
    "url": "assets/js/48.f3abac29.js",
    "revision": "b7acaa74a6c32ecb6fdbdbfa33dce265"
  },
  {
    "url": "assets/js/49.63c005de.js",
    "revision": "dd9ec3e4515a966026d3f1a7c0b8efbd"
  },
  {
    "url": "assets/js/5.326e75d1.js",
    "revision": "63ecc404da9aff86a9fe62daa84a7cc0"
  },
  {
    "url": "assets/js/50.e45298d5.js",
    "revision": "1bdbc6a7937076d366a6c28754c79218"
  },
  {
    "url": "assets/js/51.bfab19d4.js",
    "revision": "e72fc17ca6b842d9068c5cfe125278e0"
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
    "url": "assets/js/8.d3fa6931.js",
    "revision": "10822ac92dc9366dcb9d6e7ce40ae130"
  },
  {
    "url": "assets/js/9.c990d9b3.js",
    "revision": "669c9d7c9c2739309fdc3e255f96e2f8"
  },
  {
    "url": "assets/js/app.246994f7.js",
    "revision": "9413501ec38ad46292e4f11f0839c2e8"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "831645688a19ac8a43baa7039e1b2a62"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "1bbe5d0647f930f72497e53b4a8b0e86"
  },
  {
    "url": "comment/kinds.html",
    "revision": "4f4b3887d16f2609d210d4692e11a581"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "d6658e1316607cbc9f1e9b21be4b6db5"
  },
  {
    "url": "consistency/index.html",
    "revision": "4f7ff9e2263875e44e8eea2f621caee3"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "ce4c1b9f1b1766040d1fd344e1670a32"
  },
  {
    "url": "logic/CQS.html",
    "revision": "3032876086e7b52033d5cd4f26ff0be3"
  },
  {
    "url": "logic/declarative.html",
    "revision": "235a3b17628a1fe09c87ef3ffeed8b64"
  },
  {
    "url": "logic/early-return.html",
    "revision": "dcac3bfb0f7ecc198cad306132cf98fb"
  },
  {
    "url": "logic/immutability.html",
    "revision": "2f0b2849bd99149f28cdddded8fa017c"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "e964c1de0ddb3055c298aef1d6970145"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "d40832a2fee3ff000a06bc58e2184ba7"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "1ba1cdf976abb2071a83da241b20628d"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "4bea54dd1863718cfa7fca216691982e"
  },
  {
    "url": "logic/use-library.html",
    "revision": "70d00a10d785fb8a48c9aae8623f66c8"
  },
  {
    "url": "name/concreteness.html",
    "revision": "1c270e9af46c9e368e99951ef2b9795e"
  },
  {
    "url": "name/index.html",
    "revision": "d19ed700ed62776a26bf79b149d963dc"
  },
  {
    "url": "name/prejudice.html",
    "revision": "ca26adc3099d8c8186a7f9c12dc0324c"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "ad36a3d0ae23de34a7c182ffaf48bbf6"
  },
  {
    "url": "principles/DRY.html",
    "revision": "fba8937801c48f6bfe60f6dc1331a681"
  },
  {
    "url": "principles/KISS.html",
    "revision": "62d572c920f9c3fd419a1ddabb0d8219"
  },
  {
    "url": "principles/PIE.html",
    "revision": "d360922914968bf46948afb5dd141e12"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "54af3a9ef5afa2bf1bd2998b279a1f05"
  },
  {
    "url": "test/AAA.html",
    "revision": "46540952c28a08fc08c5dfabbca86ebc"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "230be0eb363802258a96bd3e3944ce8a"
  },
  {
    "url": "test/index.html",
    "revision": "52715234ff5ccd31741c004a21dfb64b"
  },
  {
    "url": "test/naming.html",
    "revision": "b6895678ffd072ceb0db986f38157bbf"
  },
  {
    "url": "test/refactoring.html",
    "revision": "4a9696b8b3da19252731eaa25e3ca0c4"
  },
  {
    "url": "test/test-first.html",
    "revision": "58a6354b6ed08579c03d13000fa572ee"
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
