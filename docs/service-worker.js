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
    "revision": "cdf36b30c3dd1a3f7682ebfee4be8661"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "4a6238819dffdc6593c700301ca4a598"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "6bd05cf052f217075568ab1309d0af52"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "697adcac3ee2edb5f0dff93935b05500"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "91b24e6e4c18136a4e2e841517593b81"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "1985535b76c87b9ca4c86ede01ce5ed3"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "55da28079017e555430b845058718342"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "6125695c7efb1d7786b064474946eee8"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "888e87b16e190acdbbd61848bb367b92"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "09c15bcb24f277e217f0f6a719f626cf"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "837d5afac80802e4e966c3c934d5023d"
  },
  {
    "url": "architecture/REP.html",
    "revision": "9e4ed729c8c99fa90af174f7eb5ab1c4"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "7efe8c7b270f0ebb4265c5b89571b806"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "a4c79cb009800dd2e6a6a2072a52b71c"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "69b954c3871cad004d18339689ca316c"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "b56e7665884c5847ab86ae5e6706c04e"
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
    "url": "assets/js/28.24434063.js",
    "revision": "b7b1451b052d98e410b29eabc94d5150"
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
    "url": "assets/js/app.e27847be.js",
    "revision": "d5141c4734f638bc6ead59abf3a832e0"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "0e8252ea17bcc5453fd499b93124a330"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "b22bda5df953369a1c2e9ef1ede8a1dd"
  },
  {
    "url": "comment/kinds.html",
    "revision": "a03f3689714fc463bbf168ea4e7f4cc6"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "e0f13acea578666a3622ec93c73c5871"
  },
  {
    "url": "consistency/index.html",
    "revision": "f4ca6cd43d431b2a83fade24d4e042bb"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "ab0f29a81e0864314896fcea09315de8"
  },
  {
    "url": "favicon.png",
    "revision": "ceb76f9b7ceeea6b9c2dd0c53bbdba5a"
  },
  {
    "url": "index.html",
    "revision": "775eb720534ea4807506ce71bf617d1b"
  },
  {
    "url": "logic/declarative.html",
    "revision": "31b74810318e237f695a9cc3c1c45956"
  },
  {
    "url": "logic/early-return.html",
    "revision": "59eb439e53a5f4f80696a6384f2ae175"
  },
  {
    "url": "logic/immutability.html",
    "revision": "94bfad5e05e4a5d702e6ff88bd7ae08f"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "9b6b6f68b6dd3a33684c043d09be8dd5"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "57b9921cc069c09049a3ddc3e749576b"
  },
  {
    "url": "logic/use-library.html",
    "revision": "852ee7f521d11a848f54956f7df84ac9"
  },
  {
    "url": "name/concreteness.html",
    "revision": "501ebb4eb0ea901856761405b56a7331"
  },
  {
    "url": "name/index.html",
    "revision": "30deb8745f25f1244cf2e6f65883fb9e"
  },
  {
    "url": "name/prejudice.html",
    "revision": "cbef1e2828d43f274a8c3ed600aaefec"
  },
  {
    "url": "principles/DRY.html",
    "revision": "a22caf2c78c90d8081c23cdf5a2b4cc7"
  },
  {
    "url": "principles/KISS.html",
    "revision": "e63c4ea1b0a80c84e26174e565af670b"
  },
  {
    "url": "principles/PIE.html",
    "revision": "447ffc427a9cef49fe012c10634b15f1"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "3f9735dbffc522e24ad28f8da450e7c3"
  },
  {
    "url": "test/index.html",
    "revision": "02e840494a0c33e9037a537dbfdf202a"
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
