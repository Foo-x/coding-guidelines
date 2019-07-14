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
    "revision": "cf84f706956a3dd59703932e8944a92c"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "2588c79cf8c3d485001b749088b09040"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "45e4ee43459e70c2ea8e16bcc50eb23f"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "19a34cf1865f98cc97c7e4dbc25fea8f"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "2417bdc5e5be048ea57810de85d9dc9f"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "0749485646f1aa2ce3910cb614de9832"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "4de7b1a18ecaf41f5284ce8b13b60589"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "d4cae38a3ca61d72808a6f9f171c1a53"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "e99dd7fde154068781573993c859f383"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "c47332c9046b6870b2f855e4b8678ac3"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "cee877614ba49ad5593f13976381c0f7"
  },
  {
    "url": "architecture/REP.html",
    "revision": "78640bd5bd4385570e49b59425e01ed6"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "a8b2fe8379cc157389958b9bc0fdec49"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "bed2fbb8c7f799c0e0dc7f0c046c4e85"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "6af3f747326f7d3d2abbbfa1a4b2a584"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "071dee4d1982e5fbc5017bdea5757c2f"
  },
  {
    "url": "assets/css/0.styles.1d36a92b.css",
    "revision": "7569a990ff24722cbbe1c285591f913d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.41845d10.js",
    "revision": "3431e697511e28665257d4c0a4115bcf"
  },
  {
    "url": "assets/js/11.367a8d17.js",
    "revision": "dc62f4af9d71d35b68a45ca38b98fb51"
  },
  {
    "url": "assets/js/12.8e20f4db.js",
    "revision": "3f7d76b1f1511f01a71b7aacb3378828"
  },
  {
    "url": "assets/js/13.5866b796.js",
    "revision": "95f0c31617dd004cfdbc5c8f8d5800cc"
  },
  {
    "url": "assets/js/14.6be95679.js",
    "revision": "6774af3517874be5201f2f1293b0f9fe"
  },
  {
    "url": "assets/js/15.7afbec85.js",
    "revision": "56b30d7cc9e45ad0eabbf5fe4d31cbd6"
  },
  {
    "url": "assets/js/16.aa4dc227.js",
    "revision": "1a0790e290a71d6a5baa30405bc2ef56"
  },
  {
    "url": "assets/js/17.e654d81c.js",
    "revision": "63b9d819a8b8f3d87ceaad4522ca6391"
  },
  {
    "url": "assets/js/18.39fec294.js",
    "revision": "229eee72c4523d25ebb2b1da1de62bc2"
  },
  {
    "url": "assets/js/19.4b30d5e4.js",
    "revision": "2e8ed88c708a9df15b3096d8f69f0d1d"
  },
  {
    "url": "assets/js/2.cf8cb465.js",
    "revision": "32d1cf5d5b7a030f56c490d236232432"
  },
  {
    "url": "assets/js/20.22cac54e.js",
    "revision": "7ed8f4efbb8ed8b7dd861c917cbe6896"
  },
  {
    "url": "assets/js/21.fd637afa.js",
    "revision": "d4be93c41fe575c56fd9e618c1ddf7b3"
  },
  {
    "url": "assets/js/22.3ccb7662.js",
    "revision": "3ee55ebda84f29eb1277f2d89446f840"
  },
  {
    "url": "assets/js/23.7f7a4c64.js",
    "revision": "6b0a42a32631da767924bf3edca7cc0c"
  },
  {
    "url": "assets/js/24.22e14974.js",
    "revision": "db0ee9d7c6865795287bb01c20b0826a"
  },
  {
    "url": "assets/js/25.978e9040.js",
    "revision": "899c5998ee5cf73aa906fc119586e938"
  },
  {
    "url": "assets/js/26.90f3c053.js",
    "revision": "d4854536e3cf9118d08f5e04b83e5664"
  },
  {
    "url": "assets/js/27.90855f90.js",
    "revision": "8a8730dfce532d55e49ce1c00c23f15f"
  },
  {
    "url": "assets/js/28.301619eb.js",
    "revision": "69d6003a91706c988f73345dc5c73095"
  },
  {
    "url": "assets/js/29.7f7f6d74.js",
    "revision": "ee2a53b703f9777f15fe8d83f5795fff"
  },
  {
    "url": "assets/js/3.e8a38142.js",
    "revision": "b2b81997532b4934b4354b6cde6e14c2"
  },
  {
    "url": "assets/js/30.5a106a1d.js",
    "revision": "eaf3ec93f2b6b606c48b46ec52e63deb"
  },
  {
    "url": "assets/js/31.083bbace.js",
    "revision": "36af3797569597f95ba7e3ea9401ea37"
  },
  {
    "url": "assets/js/32.db1c02af.js",
    "revision": "3522bf3ba08f9198100f64e4fa01d50f"
  },
  {
    "url": "assets/js/33.64688397.js",
    "revision": "a5bd1bfcc5812bd8ca49024c922d061c"
  },
  {
    "url": "assets/js/34.d89e875a.js",
    "revision": "48d51c799cde76cccc35cdc04bc39aa0"
  },
  {
    "url": "assets/js/35.7139731f.js",
    "revision": "873385ee96feebe3253a946da71c19d7"
  },
  {
    "url": "assets/js/36.646bbc14.js",
    "revision": "e64c6003dbb5f9a789be4e2116edcde6"
  },
  {
    "url": "assets/js/37.0fb17987.js",
    "revision": "2fe7c25a6fdfc1901ed17a4f3852fa8a"
  },
  {
    "url": "assets/js/38.86455a47.js",
    "revision": "78ba561dcd9292ba08afbe9bdaf313f0"
  },
  {
    "url": "assets/js/39.afd3c114.js",
    "revision": "94079e369e3875d51705bccb8c194870"
  },
  {
    "url": "assets/js/4.291b3e9b.js",
    "revision": "9d626f4cfa76cd8d9ed9d24ab8191fe1"
  },
  {
    "url": "assets/js/40.7385d19b.js",
    "revision": "e7e9d720970e8d5332822f52abcbde5a"
  },
  {
    "url": "assets/js/41.0c3ff00c.js",
    "revision": "cc39f2ad37854b4c75f0fe5724acaab7"
  },
  {
    "url": "assets/js/42.60f85998.js",
    "revision": "95e9309dcb3bf4221617fdf4539acfec"
  },
  {
    "url": "assets/js/43.01b114f9.js",
    "revision": "d85587c66d766cd1d5067132814fe3e3"
  },
  {
    "url": "assets/js/44.6f7ba6e3.js",
    "revision": "3d7924ff8243862a2ed5e5cdf61e6912"
  },
  {
    "url": "assets/js/45.2c639146.js",
    "revision": "cb186299273d0ed01e103efbae2d14cb"
  },
  {
    "url": "assets/js/46.5fc3eeee.js",
    "revision": "7a93ff666256056a151b7a5eeeb00c5c"
  },
  {
    "url": "assets/js/5.65ac9e9e.js",
    "revision": "ee516c4c51259ea728f04e4de14d5e80"
  },
  {
    "url": "assets/js/6.fbdc6d10.js",
    "revision": "1376742294872cbec0fb02ea8f306bed"
  },
  {
    "url": "assets/js/7.54c9f2c3.js",
    "revision": "bf3cc82aed294d7a8e87bd50dc923c06"
  },
  {
    "url": "assets/js/8.0b1a97ce.js",
    "revision": "bec0a13902e502642fc436a48c7b21dd"
  },
  {
    "url": "assets/js/9.647258c3.js",
    "revision": "71a24b4f5f2ef151d254a98895346f15"
  },
  {
    "url": "assets/js/app.c9c0b59f.js",
    "revision": "daf074112a6a20078c6dfadae698bbc6"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "262fda4a34ef5a3df77183c6efc43b1f"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "a6549c83bc11290a7174e121df3e1a73"
  },
  {
    "url": "comment/kinds.html",
    "revision": "3f54638d32658d53d4a4bc373d8c64a8"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "6b9baec99a10cb9e0862564b27991f21"
  },
  {
    "url": "consistency/index.html",
    "revision": "935ed5008327c61458be0aaf52778577"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "e57a2fba3f4ab6b4e6feaeaf4570cf25"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "4c230118fcd852fd39e8bce169f59b7b"
  },
  {
    "url": "logic/declarative.html",
    "revision": "886cf141093a3408bd8974153b9d283b"
  },
  {
    "url": "logic/early-return.html",
    "revision": "f58479b2ef05f470f9f88b81325b33e4"
  },
  {
    "url": "logic/immutability.html",
    "revision": "e761c37459d7ba3d01b9502f131ea690"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "8d825cae90a6e74a039fb7c5644a8744"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "ea25388076e69f52f418f51b269d9815"
  },
  {
    "url": "logic/prohibit-redundancy-arguments-check.html",
    "revision": "0d57b889296dc9e31a69b1e9a743d9e6"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "45c53f835e00254aeb630cf42ba025b3"
  },
  {
    "url": "logic/use-library.html",
    "revision": "a115ed4b4cd062534e944db30a2994d6"
  },
  {
    "url": "name/concreteness.html",
    "revision": "85c848f624ea3affe83b410ab36f84cc"
  },
  {
    "url": "name/index.html",
    "revision": "2b33dfb49d1d55180bc95147b102583b"
  },
  {
    "url": "name/prejudice.html",
    "revision": "3d2d63cda5f1441e3f105c6d6fbc6dfb"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "af344bd5c73328184e5642b4a28469ca"
  },
  {
    "url": "principles/DRY.html",
    "revision": "b0573ee3b99a88170ec51455754f0b2d"
  },
  {
    "url": "principles/KISS.html",
    "revision": "85c8b37d374afd8c1d1259c91ea77a78"
  },
  {
    "url": "principles/PIE.html",
    "revision": "f5f551e71c52f543e7e980f4f16bb1fa"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "7d76072909b7b4b63bc372be08b76218"
  },
  {
    "url": "test/index.html",
    "revision": "28c4d2adc5d1b50b688c2ff126f2229c"
  },
  {
    "url": "test/refactoring.html",
    "revision": "0442d3b252b2f3e329b2d7e458da63c8"
  },
  {
    "url": "test/test-first.html",
    "revision": "83629a6c35108ad9b8b1fdb29c4ecfcc"
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
