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
    "revision": "757b3aa76d0906a297d98a1b576b3541"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "6b656c37a356811cfd07ada9237e0c93"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "2b66feca0c65607d2fcbdfb06a4422cd"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "bd72b012053684dc86a36d9dc6320b79"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "af3e418f27cdabd3d18d666d80bf5eb0"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "ca4858828527e24288a5b8b1e53930e7"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "b54962122ff5767381f5282199b09047"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "a36fa14bcd366c274e467b1d8000df12"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "e98e50b8bf953c4aac5ab8f4a0156a94"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "ee82d52dbc48a0f1564f72360ee0aad6"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "fc1d5f9886d87992ee926141f0b70c3d"
  },
  {
    "url": "architecture/REP.html",
    "revision": "b404c65e082718eb7c8e6584d2f61f21"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "b2bdec609f96fa341e632545ad34d73a"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "c4778984d50a3545a20a5768d401b712"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "7eb9decc00cc694547e1656146e9bd90"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "b920186b737f54b142313d4c772d7c52"
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
    "url": "assets/js/10.f763f46b.js",
    "revision": "abfc191c424e95a58ce2d1fb93806806"
  },
  {
    "url": "assets/js/11.712c29e4.js",
    "revision": "c4cf434efa75a404fbc720298f2f32a6"
  },
  {
    "url": "assets/js/12.4c456bd8.js",
    "revision": "87d235f8a706db1a918888fe00be1f6a"
  },
  {
    "url": "assets/js/13.dac6c0ac.js",
    "revision": "acd9a5087ec88e2f06716cf8977c8608"
  },
  {
    "url": "assets/js/14.4dd477d9.js",
    "revision": "629ef5ecf2b05b9340bc28b39978123b"
  },
  {
    "url": "assets/js/15.df125602.js",
    "revision": "76d7fe5adcbda8c83f90a386175cc6fc"
  },
  {
    "url": "assets/js/16.53731315.js",
    "revision": "84e8bac0cd0ffad600c7e3adfd6689db"
  },
  {
    "url": "assets/js/17.c8bdc8c7.js",
    "revision": "fd999392e5c65aaeb76fc8ef05309da4"
  },
  {
    "url": "assets/js/18.1da5ad50.js",
    "revision": "d53133e1d8c81a79ee7f4dba98eceb4c"
  },
  {
    "url": "assets/js/19.7f6a6061.js",
    "revision": "07e6b2e93cbe81aa5be4a85a4806437e"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.08b30c90.js",
    "revision": "6fb445355c4862cb4e3e8c54ef17c67d"
  },
  {
    "url": "assets/js/21.e83f46f1.js",
    "revision": "a2044e131ae491bf30adcf557d8770a0"
  },
  {
    "url": "assets/js/22.e0a0b337.js",
    "revision": "3ef054e373cb75d13b58e13cd331994a"
  },
  {
    "url": "assets/js/23.6e955455.js",
    "revision": "0e7e6832941e69fb093e869ec47dca99"
  },
  {
    "url": "assets/js/24.5add7228.js",
    "revision": "f27f2ada658802dd65b55fdb4e64c648"
  },
  {
    "url": "assets/js/25.d7f05342.js",
    "revision": "c4f8510c391d624388cf9aea91f3d9e9"
  },
  {
    "url": "assets/js/26.91e2299e.js",
    "revision": "ad6d41bd5f047ad659db26a7888e3c31"
  },
  {
    "url": "assets/js/27.881a0d1f.js",
    "revision": "c5c8530d7d8e9cbe9af53a9a7eba8062"
  },
  {
    "url": "assets/js/28.45332202.js",
    "revision": "9fc3c6a9002de3d58016fd2af3ada60d"
  },
  {
    "url": "assets/js/29.122d243c.js",
    "revision": "e94c211de1f4fca42016b75d92137211"
  },
  {
    "url": "assets/js/3.5a891d27.js",
    "revision": "c359ca3c6c0c61d08c822b101cc01a49"
  },
  {
    "url": "assets/js/30.995ec3f6.js",
    "revision": "5fce7dd354cfeb53be15afa992651f99"
  },
  {
    "url": "assets/js/31.930b17a0.js",
    "revision": "7980370680cd47ecfcfdcf07cd68547c"
  },
  {
    "url": "assets/js/32.06f224d1.js",
    "revision": "0a52f71762cb9e8fbc29a5e42ae348ed"
  },
  {
    "url": "assets/js/33.853487a3.js",
    "revision": "4a311752fa8ddeef59fee07397a3302c"
  },
  {
    "url": "assets/js/34.152cc949.js",
    "revision": "7a53f68da58b1835a5b7735c4a217878"
  },
  {
    "url": "assets/js/35.7f28686c.js",
    "revision": "9a395d849d334b573cc6b7e3fee811b8"
  },
  {
    "url": "assets/js/36.2004e3af.js",
    "revision": "ad6986bcc62c8ff914c8c24062154ae5"
  },
  {
    "url": "assets/js/37.b2b981a8.js",
    "revision": "685467e9eb2cd35c609d70606978e474"
  },
  {
    "url": "assets/js/38.7a8e30e9.js",
    "revision": "ea34a8d6c7d74357c27f30832875ef54"
  },
  {
    "url": "assets/js/39.2e5c0efb.js",
    "revision": "65d625cc61f04e065dd34f0856e6e10d"
  },
  {
    "url": "assets/js/4.9e17b04c.js",
    "revision": "1122812cf74c8047c9e0514769ee099d"
  },
  {
    "url": "assets/js/40.f1c06e00.js",
    "revision": "e3435dcb02e6139678f53260b864a095"
  },
  {
    "url": "assets/js/41.bffd8fbb.js",
    "revision": "0e3cdb8d9e56286d540e855b0a439717"
  },
  {
    "url": "assets/js/42.adea10d4.js",
    "revision": "01384bf3c8af7a3972d1b39d80f12e75"
  },
  {
    "url": "assets/js/43.ef15a26c.js",
    "revision": "c0947626b1d0e8784d8d796fcdc95747"
  },
  {
    "url": "assets/js/5.f18217ed.js",
    "revision": "7f9e3259c7a219cb94cc60387c440b75"
  },
  {
    "url": "assets/js/6.a5a40ae9.js",
    "revision": "206441c59053058a1e93af9a303fe9b3"
  },
  {
    "url": "assets/js/7.e33580b5.js",
    "revision": "34b3863c4f6757a4b0aea9858567efae"
  },
  {
    "url": "assets/js/8.6433c23c.js",
    "revision": "56ea695f894c326472907395655033db"
  },
  {
    "url": "assets/js/9.5678e949.js",
    "revision": "75bfc0d364e3f3ab51a33608328b64e1"
  },
  {
    "url": "assets/js/app.1db71d48.js",
    "revision": "251ef6e2b9b69acb447ef6d28776d6ab"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "8ed9430757fbdad05e7c25a531ec6365"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "ecd0f5100eefcd8601a5df14d74d9fc5"
  },
  {
    "url": "comment/kinds.html",
    "revision": "51fe82bec3468dd21020efe457ec057f"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "4ba644773db7733709330027d512ef7c"
  },
  {
    "url": "consistency/index.html",
    "revision": "8405d0df80d3fab39186eb13e1b2dd9e"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "e541d5c877ebeb30987bf5f1653086c7"
  },
  {
    "url": "favicon.png",
    "revision": "ceb76f9b7ceeea6b9c2dd0c53bbdba5a"
  },
  {
    "url": "index.html",
    "revision": "50e7e3e264329a85c2589af328fbe442"
  },
  {
    "url": "logic/declarative.html",
    "revision": "2946433310d41128de495cc2b80b8be2"
  },
  {
    "url": "logic/early-return.html",
    "revision": "d410a58929aeab51a5da851517f81e8c"
  },
  {
    "url": "logic/immutability.html",
    "revision": "1a82a140ae8fe6bdd3602a996cf5cff8"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "2150a3e518a8411763a02c09a530dd60"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "65572c97906644e73feec95f24c27379"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "5a042643af08b8a898b694a705381734"
  },
  {
    "url": "logic/use-library.html",
    "revision": "97de7199b13f98e3e5115e05317583d7"
  },
  {
    "url": "name/concreteness.html",
    "revision": "9ab98a4adcc046898d921662da410618"
  },
  {
    "url": "name/index.html",
    "revision": "a43ae99e83de19821dec55b3241d029e"
  },
  {
    "url": "name/prejudice.html",
    "revision": "0ceeb86e0bbac35d1decd8e8e08db13d"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "9544003d53bd2eea88f2257537ce33dd"
  },
  {
    "url": "principles/DRY.html",
    "revision": "fd0ed2ae1f8442bdbdc7d33e0c005271"
  },
  {
    "url": "principles/KISS.html",
    "revision": "f4414236b9b1c6172d6bd5a93a66e295"
  },
  {
    "url": "principles/PIE.html",
    "revision": "e433dfbaad53d7a3f967311e0d7a8cb5"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "705c3a570576e29e1dcb90d266d4747f"
  },
  {
    "url": "test/index.html",
    "revision": "8af7bd434092a389b354ec20478f1f31"
  },
  {
    "url": "test/refactoring.html",
    "revision": "8ef9c9e65dde9ee32637d26a044b4e44"
  },
  {
    "url": "test/test-first.html",
    "revision": "670f01079d66c5f5d8223fcb435bf07e"
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
