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
    "revision": "3c02013d37bd4591f074ff95b660eb21"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "5adf964793439513db1a9fd2b62f80de"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "51441f69ce65dfc4428cd60fad984eed"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "752e8fce777e9e0e55fcdb39fc2e44a7"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "bc035b546624fd5c6a2d48aa73ceed0c"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "7c07dfb36aaa42cc3abc8a9253d4f261"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "ffaa22a20342e83a0db7269b382ee227"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "a70f653418730a20f0ddf126fc05158c"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "448b1d9c61e783fe09ea2485837ef6be"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "e2f527f82a19fbbfc50eeb34885f7fdd"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "97857f7723987ec26162aeefb6e81a5a"
  },
  {
    "url": "architecture/REP.html",
    "revision": "48d5001be92f055210c55d488e321084"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "0f547e3c9c969ef1773f146615aa9f8c"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "0ae5fe766fa9dd1e84dc1ba000d55074"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "a9f89f0343a5f008b32ec342262a78e1"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "bc5792ed32dd9a241e51c46f72672510"
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
    "url": "assets/js/28.84258517.js",
    "revision": "4447f5f907d18c62de104e2d725ece09"
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
    "url": "assets/js/app.b635a5e5.js",
    "revision": "f1d0d0fbff25939fa3336327ac0578a4"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "e57dc74b8f43b689022a78064edbb427"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "67f29de7f3f878b59f2a597b63d4521e"
  },
  {
    "url": "comment/kinds.html",
    "revision": "8c5cc9eb0033cbb06a0793563f2b0b0c"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "2c54f84c3d243f023d67e6bc6a968b60"
  },
  {
    "url": "consistency/index.html",
    "revision": "a2b4406080b0c9bbf3bd34a90b42333d"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "2c4d27c484acbd77ceedb084bb2d11a8"
  },
  {
    "url": "favicon.png",
    "revision": "ceb76f9b7ceeea6b9c2dd0c53bbdba5a"
  },
  {
    "url": "index.html",
    "revision": "78681ae12020ec346cf0f011a60be285"
  },
  {
    "url": "logic/declarative.html",
    "revision": "7855edec2c8574a1784bc145ad4d5177"
  },
  {
    "url": "logic/early-return.html",
    "revision": "124ba5816651b372e4ea7141ce7bb00a"
  },
  {
    "url": "logic/immutability.html",
    "revision": "65148c87bf5aba244faa2c4111079c4f"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "6803972e8a0333ec00c2f458aa9380f4"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "46fe75400e85d2dd966a3a3df73ba13d"
  },
  {
    "url": "logic/use-library.html",
    "revision": "99dad24f7bcaf919c2e6750986bf0485"
  },
  {
    "url": "name/concreteness.html",
    "revision": "2fc7389ca346dfcccf44b33df18899a0"
  },
  {
    "url": "name/index.html",
    "revision": "e21847b3bed37234c2b2814245f43991"
  },
  {
    "url": "name/prejudice.html",
    "revision": "790681ba6e32fa7019033a2c22288928"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "fd581ad7ee67aa9f1cd43a370b05e2d7"
  },
  {
    "url": "principles/DRY.html",
    "revision": "c55fc4ab2b1bc9b1c39b0d1ecc5e4e97"
  },
  {
    "url": "principles/KISS.html",
    "revision": "84d652ae1eddb7fb613918ea399670af"
  },
  {
    "url": "principles/PIE.html",
    "revision": "c60e174892abf611453a3c76f911c3ca"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "e2f5894170754bd49cb93f3ffdaa83c2"
  },
  {
    "url": "test/index.html",
    "revision": "0e7a8d8b0c47dd770e8b788104396f42"
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
