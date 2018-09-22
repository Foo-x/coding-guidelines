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
    "revision": "7795a95c8dfb1c00263a17253b0af7d1"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "e8d15b7661f7b1f623a778f5be2ae793"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "c11268526ff1b61a11634889698242bc"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "c5d08c46538616dbacb6dd0af25b947f"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "0ab502fb09e8a7f3c8c9a6b29bcf42fe"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "cfae4c1bc84a705e54ed424ed508b761"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "6f3bd6880fe2cffd3d6897e09b00eedc"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "1e92faf369243bef0d3190d519b35ff3"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "839e44b2d5df2fd6d57b1bdad839d503"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "ffa2c6df6975ef8f1f353bafc832ede4"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "e156031c076ebc6bba64ea885b3ac76f"
  },
  {
    "url": "architecture/REP.html",
    "revision": "fe1e34d8c963fd3b807b11e12d6745c1"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "5da8303635d72563e67544a73a74edff"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "f0e1c8ef5179864360886900ea04c59a"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "020eb5aa93808f1da2e5e699215c1218"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "e61e8bc230815f7c0e82979173cb467d"
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
    "url": "assets/js/17.4c1afd3e.js",
    "revision": "7ea770a7d02fe5fb9f63a3acf6d8013c"
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
    "url": "assets/js/30.68000855.js",
    "revision": "d1d42801a0f71e2b9cefea32fd70c964"
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
    "url": "assets/js/app.68b92327.js",
    "revision": "13bee9c2016804f78e1f854983da5949"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "ea0a1d0dfeeaa79569bbf1cfc080950c"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "58e7714f39af2d0195be02bb966c47bd"
  },
  {
    "url": "comment/kinds.html",
    "revision": "2f4b7e1c5b8a18dd7e0a5ec0d7970774"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "a9a3f6bb053a95ba6c87d93b1c08be54"
  },
  {
    "url": "consistency/index.html",
    "revision": "ad6874b680a006dc61fb8de2593e5e77"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "834a7451643c88ee62eafe4f65800651"
  },
  {
    "url": "favicon.png",
    "revision": "ceb76f9b7ceeea6b9c2dd0c53bbdba5a"
  },
  {
    "url": "index.html",
    "revision": "0437efff5882c92dc4e78ecb700d41cb"
  },
  {
    "url": "logic/declarative.html",
    "revision": "2c4287da06271564bac5fa89eebaabc0"
  },
  {
    "url": "logic/early-return.html",
    "revision": "698fb8bc08cf3df491d1622ef8040a05"
  },
  {
    "url": "logic/immutability.html",
    "revision": "8416a6a330cca808c53ae94c9ac4694e"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "c135fadd9844adf886307322240b5da7"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "f8f923bc0f5331b0f23f2f9c027620d6"
  },
  {
    "url": "logic/use-library.html",
    "revision": "656c82f58b20ba2c206d260677132e54"
  },
  {
    "url": "name/concreteness.html",
    "revision": "3cf494bbc20a25d18fd4f1849a592316"
  },
  {
    "url": "name/index.html",
    "revision": "7ede47d981950645d92a054436729f71"
  },
  {
    "url": "name/prejudice.html",
    "revision": "6ec51b35f6c924336d4210bf876d6b17"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "90d26fb994e38d112b8ec61ef73d4caf"
  },
  {
    "url": "principles/DRY.html",
    "revision": "65de50083f16eb105f92f6dd471f3e32"
  },
  {
    "url": "principles/KISS.html",
    "revision": "c302c564768a725365da4239a97f0d85"
  },
  {
    "url": "principles/PIE.html",
    "revision": "a9a05a9ef6d1eaf0614f7294a0bb65b3"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "4fa816e4ada7ee1353817b0f0abbde4e"
  },
  {
    "url": "test/index.html",
    "revision": "568732725c38d9dad57cb5f581416025"
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
