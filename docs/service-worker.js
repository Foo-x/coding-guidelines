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
    "revision": "2b39104498992844d620b5ed367c58d5"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "6b2b0014eeffa9ee7c6cb81afa564aa8"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "8f3c62ab117185c7d678dfc09fd09145"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "bfe9ea21a913f2e3b2637d5d1df3d60a"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "7711e51252142a7b741ccce17723bb45"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "67faa1344aae1485320b2a53b3cffc7a"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "43d7091c73b0835cb20f3108911d77e7"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "38d6b887f344afcdb5395a7fea018ca7"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "e3c8b0e8b73c8e0d473d8143ea313dfa"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "17c278f57916c6f589013eea8d7a2f9a"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "9278a7a0690db77ea833c393a6dbc277"
  },
  {
    "url": "architecture/REP.html",
    "revision": "2e9c693b8f6e5c70704d01a7ddc23ba0"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "661cf5e74033721583645588dac3b9d3"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "769d99e8d3731c3c91912df7e03063ac"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "24e74e18dcf6b7fd84699cf2b656d3e3"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "d151c89b2ea2172b35c98ec826e23bca"
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
    "url": "assets/js/10.7c26329b.js",
    "revision": "61ef40cf7413809b807eb57b331bc76a"
  },
  {
    "url": "assets/js/11.c37175f9.js",
    "revision": "010bc96a1b83afb210228fd8919e9875"
  },
  {
    "url": "assets/js/12.de5246bc.js",
    "revision": "9290d3f2471dc6c3ec96b79f5aafb33c"
  },
  {
    "url": "assets/js/13.72331d00.js",
    "revision": "0dd5fdeb51f934d0bf9235931d1c3dc2"
  },
  {
    "url": "assets/js/14.b502aaea.js",
    "revision": "f4acbadaa537d63361c627e356624ee3"
  },
  {
    "url": "assets/js/15.f3536297.js",
    "revision": "efce53032db6abe648814acb30152733"
  },
  {
    "url": "assets/js/16.79ee180d.js",
    "revision": "1d9628ad37fdb317e4e0b5bae5b19998"
  },
  {
    "url": "assets/js/17.d1629b4e.js",
    "revision": "584132861a3462aaa8ab7cdafc43834d"
  },
  {
    "url": "assets/js/18.9fbf7229.js",
    "revision": "9d0ca52dd0f3831144718dd266883efc"
  },
  {
    "url": "assets/js/19.7c453861.js",
    "revision": "301573d759919d22fa9dff3aad8a2c55"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.7c857591.js",
    "revision": "36431f61c82c7a9a72ed0ef81cd4ad15"
  },
  {
    "url": "assets/js/21.df54f81c.js",
    "revision": "c7667d314ec9219bf84f289b025c5491"
  },
  {
    "url": "assets/js/22.a12639ee.js",
    "revision": "5c828e5190572c883e0e64a15faa344e"
  },
  {
    "url": "assets/js/23.f4d2b6c7.js",
    "revision": "708cfeab88b162ace704f751961da1c1"
  },
  {
    "url": "assets/js/24.00ee0b88.js",
    "revision": "4c8c697bd826f73ec6e7af5c20d739e8"
  },
  {
    "url": "assets/js/25.c68d032d.js",
    "revision": "613d909a551bfabc91f6290a05eff3e7"
  },
  {
    "url": "assets/js/26.0056f647.js",
    "revision": "4ac293f73ffa785fbbba78e585de6547"
  },
  {
    "url": "assets/js/27.37abdc06.js",
    "revision": "9498ee06224524c0519ce7817f5487b6"
  },
  {
    "url": "assets/js/28.aef0080d.js",
    "revision": "42b4a6eae6984ba4e2bdab64f23a1d9f"
  },
  {
    "url": "assets/js/29.5bd6ecb6.js",
    "revision": "1c8611b82f8ba1328d1f37b8b05bfd91"
  },
  {
    "url": "assets/js/3.d72e7965.js",
    "revision": "74dbe416a5b070b19612ef90393a54b6"
  },
  {
    "url": "assets/js/30.8c8cc0fe.js",
    "revision": "cb0c71a98413277ae1f6def892006d2f"
  },
  {
    "url": "assets/js/31.b617b1fc.js",
    "revision": "f3cf502e743db638926acac63b162872"
  },
  {
    "url": "assets/js/32.782e8f3d.js",
    "revision": "08e4720b06fca3b58f5dbf4940f13d0d"
  },
  {
    "url": "assets/js/33.bf2b1218.js",
    "revision": "8193bd3ce9b38f8c0e6b2d91522fbda6"
  },
  {
    "url": "assets/js/34.2a2c04c6.js",
    "revision": "5091c3863c525ac0a14bddf749a39834"
  },
  {
    "url": "assets/js/35.78f8cf66.js",
    "revision": "37040c27822e30daca110441b1b6326c"
  },
  {
    "url": "assets/js/36.09f89aa2.js",
    "revision": "499488c809876911323d7287afd67e79"
  },
  {
    "url": "assets/js/37.338aa17f.js",
    "revision": "92444f2354d483e48dc91731b7f87e93"
  },
  {
    "url": "assets/js/38.27b80760.js",
    "revision": "807c3ebcecded9711cd2575a0fc5b2aa"
  },
  {
    "url": "assets/js/39.705efbbd.js",
    "revision": "48205a07d1ed6ee38708cb225c597cf7"
  },
  {
    "url": "assets/js/4.cb3c7502.js",
    "revision": "499c3eca7e048959c491760515609474"
  },
  {
    "url": "assets/js/40.598937a5.js",
    "revision": "35a0e83c8b37ac1c630e3cf26cf6a328"
  },
  {
    "url": "assets/js/5.396119c0.js",
    "revision": "87e03801f21cf6d4feab013a771dad68"
  },
  {
    "url": "assets/js/6.27b0df4f.js",
    "revision": "405bba8f38ad3a47d26f28104d646898"
  },
  {
    "url": "assets/js/7.ab17775a.js",
    "revision": "ffc9662303acac1839d575fcb277a832"
  },
  {
    "url": "assets/js/8.c6a61c0e.js",
    "revision": "6d3e00418ae8582817beb5f9a1d9e8ea"
  },
  {
    "url": "assets/js/9.0cf4de5e.js",
    "revision": "c3dec99dd870b6e135db39c27fa49521"
  },
  {
    "url": "assets/js/app.11bedf6c.js",
    "revision": "7e2ce7a21081d1f0d04a7f779bad9f82"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "3bf9560c7a06dcb3fe6e7e6bed7b8359"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "8b8d31f8388b4a6c08c1038a492cd40d"
  },
  {
    "url": "comment/kinds.html",
    "revision": "5f90486081b2e8a5e8472d002ddb9194"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "29aae74ba2decbdc30f0e6270bce317d"
  },
  {
    "url": "consistency/index.html",
    "revision": "9a2c4032723f1919821f82ff495dfac6"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "5cf6df11473573f4cf74bc944fd973f6"
  },
  {
    "url": "favicon.png",
    "revision": "ceb76f9b7ceeea6b9c2dd0c53bbdba5a"
  },
  {
    "url": "index.html",
    "revision": "9647974c6d21df2761ecd1001066ad11"
  },
  {
    "url": "logic/declarative.html",
    "revision": "6b41211f585bbfab53f887a00d82c3ed"
  },
  {
    "url": "logic/early-return.html",
    "revision": "b2758404e14672a7a0bad7aeeacdea33"
  },
  {
    "url": "logic/immutability.html",
    "revision": "eb3cf18a09265163bbc7a80bbd08c884"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "62199d05f53f8d7077f6f0abf9af6f29"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "a717cacdc9fae32353aa1482908f305f"
  },
  {
    "url": "logic/use-library.html",
    "revision": "d03084c1c440baca052105efc61c9b07"
  },
  {
    "url": "name/concreteness.html",
    "revision": "fac42fb424be3be5e3918b7c96061ccd"
  },
  {
    "url": "name/index.html",
    "revision": "41de1d4bf2bb3b876a0a12f48bb8b5ea"
  },
  {
    "url": "name/prejudice.html",
    "revision": "4b95952ff35a88d463befe6ee6dd9bdf"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "fd3c05fa6c618dec88ca693ce61d89ac"
  },
  {
    "url": "principles/DRY.html",
    "revision": "ded9ab88be31544afb0ec1bbf4edb7fc"
  },
  {
    "url": "principles/KISS.html",
    "revision": "b07709162c659fc0123c835cf097da28"
  },
  {
    "url": "principles/PIE.html",
    "revision": "5c7aecff082dc5c94aabd13f35255951"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "928f5b986c7df3bab6bb8f96ce37c8de"
  },
  {
    "url": "test/index.html",
    "revision": "26272fcbb42dc0eebc2239a1629e7311"
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
