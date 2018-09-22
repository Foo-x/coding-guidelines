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
    "revision": "0b1c200256bbf687574917fe5f92ffdb"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "02672af39e5ced33616c34ebde3a9dea"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "97419bbb6c0ce5572a5a2fcc89016508"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "328583ba09f1e7f5e3ba896a5fc351c9"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "559c0886544eeb6c53d540b17f4a3d01"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "3ed85f6f16ddf723691af81617024a25"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "1ae2b528f034cc7c1542be71915a3776"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "01d52e14c83754263ba2472994cac5e8"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "7295f4ecb0cd30763a36f1c44cdfbd80"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "27e5aee9b3fa9b76d1ffe2d65e9c006c"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "a17e49d883d56368c081d6f88811b53c"
  },
  {
    "url": "architecture/REP.html",
    "revision": "b9c6fbca532a47b371ba5889d7a54ba7"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "7fe2d865c55cd542aca70ae6aba41478"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "a525a8a6205c03f2ea05a62d14409c26"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "33c92c324495a769a7ddcfd803383d5c"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "37bb6043dc6c190b1195a263eab5bf3b"
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
    "url": "assets/js/4.f1e4f9df.js",
    "revision": "1b3135a397bb64cbb99a554385cc4e86"
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
    "url": "assets/js/app.af20e05b.js",
    "revision": "692b917540e0d690905f0b87bd3dd0ae"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "3aee1cd448f77b8ba463c0c056f2abda"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "026793e19f90e77f23525029777fde20"
  },
  {
    "url": "comment/kinds.html",
    "revision": "70be5ea3e68a1123d04863258873a802"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "c7590b6c2cec2db984b605e11f546c02"
  },
  {
    "url": "consistency/index.html",
    "revision": "f887ecf88da677c11f67d3388c17c950"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "b04718048aebfcb34e802a8ab2cb56f9"
  },
  {
    "url": "favicon.png",
    "revision": "ceb76f9b7ceeea6b9c2dd0c53bbdba5a"
  },
  {
    "url": "index.html",
    "revision": "c793adaaf3253cee411a887d926c4884"
  },
  {
    "url": "logic/declarative.html",
    "revision": "efd43e60504b7923208099ef1163078f"
  },
  {
    "url": "logic/early-return.html",
    "revision": "5d9faad1626d65ac7a4762e83edf040d"
  },
  {
    "url": "logic/immutability.html",
    "revision": "7ac9352f60153640a295775f5acb66bf"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "4028a85d7893293e7e5f019dc7ff13ee"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "bb8a2512338791b015f04db208b82848"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "bbd4d6246e2f89d6984cccea21406b9d"
  },
  {
    "url": "logic/use-library.html",
    "revision": "63e5ac32802498a7b8b7fd196abf6cc5"
  },
  {
    "url": "name/concreteness.html",
    "revision": "ce3b74ace993011d891787bd6947be34"
  },
  {
    "url": "name/index.html",
    "revision": "3c8e8d6f14df5553a6925c097177cb89"
  },
  {
    "url": "name/prejudice.html",
    "revision": "b2f164d8e90641ed3bcdd151c364673d"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "da97989a7e185add1dc3f846f1ae0a30"
  },
  {
    "url": "principles/DRY.html",
    "revision": "175fb559642c45e5df5b41e880355b0a"
  },
  {
    "url": "principles/KISS.html",
    "revision": "44356a212c14155d643c6e41ad723adb"
  },
  {
    "url": "principles/PIE.html",
    "revision": "9326b9b1a5462862ab661700f96a801e"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "136b04a31ca293a8c12ea174655910d2"
  },
  {
    "url": "test/index.html",
    "revision": "46d5146a4178c03853e72c63151740cd"
  },
  {
    "url": "test/refactoring.html",
    "revision": "5f04817d09f946663505c87a53bb9d99"
  },
  {
    "url": "test/test-first.html",
    "revision": "482b7ca9e657af8b5060e7e80282f960"
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
