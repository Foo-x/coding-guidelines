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
    "revision": "bdaba871641f740c081b3b7ff5875dda"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "091a6fa7cdbf78e07dd153a0899010ad"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "816bdc4c7fb1a440eb3214164b13bc36"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "2152f1594e7b0a62237146b4f55a7374"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "a23ec8f984f4e84f2c4e5cd39e963300"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "6de94211695a9a7d02b5c4bda1f0eb71"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "b2e7ad4a3e1a877bc71ab1d602133830"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "0478780ceb7db59c6468a452e50d57b9"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "47a46b539419b93bc4604a0b59803a34"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "9066589f5bd36135dcd0b448d7504ce0"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "b791e999d41d337f60e93262077a4c0b"
  },
  {
    "url": "architecture/REP.html",
    "revision": "7e8729b49f956639dc07547519302008"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "7cd8446aa74ea6361b464ed58c1d8f41"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "1ab0539f507e8bcff68df6dc942da64e"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "3b7274164424485457b5852629049860"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "fb691fa069a068c4f447caacec6fcecd"
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
    "url": "assets/js/13.50007764.js",
    "revision": "be648d4f31a588d4abb52c7609bb65fe"
  },
  {
    "url": "assets/js/14.fb698e5b.js",
    "revision": "49235f0245523791501ebad4cbbe1461"
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
    "url": "assets/js/17.5b391e41.js",
    "revision": "9e9dc6df904ee6797ded4df62a5d2eff"
  },
  {
    "url": "assets/js/18.9fbf7229.js",
    "revision": "9d0ca52dd0f3831144718dd266883efc"
  },
  {
    "url": "assets/js/19.f3615cc5.js",
    "revision": "a03e54d2a5471d886cadb740ed49b936"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/20.28b9f984.js",
    "revision": "aca5f80e4148af949ed0d7e2d58b513f"
  },
  {
    "url": "assets/js/21.98c46902.js",
    "revision": "637253e8e92bc3ccf5d2c32ecabd0ebe"
  },
  {
    "url": "assets/js/22.9de9c896.js",
    "revision": "768760f08afbce0ec2fb58c6789a1609"
  },
  {
    "url": "assets/js/23.9fe92889.js",
    "revision": "a07548c50b09be869aaec88727c57b93"
  },
  {
    "url": "assets/js/24.1f7a49a5.js",
    "revision": "533b3fc54617705440c627351e946919"
  },
  {
    "url": "assets/js/25.08e072d7.js",
    "revision": "f6ab7d71978cf3f552bd9fc3975f5317"
  },
  {
    "url": "assets/js/26.026a4a69.js",
    "revision": "64824c2bf7b33ab29e166e4be3b2b8d3"
  },
  {
    "url": "assets/js/27.ffbfb958.js",
    "revision": "c28989a73ede8065288027590d515eb4"
  },
  {
    "url": "assets/js/28.db433100.js",
    "revision": "fdddceb20c123275cd2b11e3c1097da3"
  },
  {
    "url": "assets/js/29.8422d9e9.js",
    "revision": "148d20adead01f23097e332cac1b8c76"
  },
  {
    "url": "assets/js/3.41b4b053.js",
    "revision": "826fdd107c6e9742959d1cc08ffc1a10"
  },
  {
    "url": "assets/js/30.dc3c2da3.js",
    "revision": "8563c52d215c3e18ee5f4049ae879dab"
  },
  {
    "url": "assets/js/31.354b2871.js",
    "revision": "64e24c6e6526514d90abf9d394ac5a5b"
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
    "url": "assets/js/35.98509d69.js",
    "revision": "05b30cbd4e3c54cdb4528893b991f480"
  },
  {
    "url": "assets/js/36.b31d1e20.js",
    "revision": "dcd3f30a6c3315ca2859d442cabc5811"
  },
  {
    "url": "assets/js/37.6c7d72ae.js",
    "revision": "3ae016abbb241ded24f3bef5e31390c4"
  },
  {
    "url": "assets/js/38.8ce11a7f.js",
    "revision": "b654705d8924310b3bcbedc4d4bb02d5"
  },
  {
    "url": "assets/js/39.515a47fc.js",
    "revision": "e2c62df609b8efd71b2cb19b6d0a4c8a"
  },
  {
    "url": "assets/js/4.f1e4f9df.js",
    "revision": "1b3135a397bb64cbb99a554385cc4e86"
  },
  {
    "url": "assets/js/40.8a417b3b.js",
    "revision": "61e46e6af78fc40372d2e708f40a0603"
  },
  {
    "url": "assets/js/41.8cd26aab.js",
    "revision": "d0b1323b06e8d6abad2a1a88652b45f2"
  },
  {
    "url": "assets/js/5.f18217ed.js",
    "revision": "7f9e3259c7a219cb94cc60387c440b75"
  },
  {
    "url": "assets/js/6.dbe373fd.js",
    "revision": "f0a71448748b0ce05da67fc83e1de54c"
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
    "url": "assets/js/app.9006710b.js",
    "revision": "2aad3c9230f1d73afdfde74b2857f43f"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "ccaa29f8c4577053142af682f406503a"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "f5cd7de01c65c47840833044847945f7"
  },
  {
    "url": "comment/kinds.html",
    "revision": "dc4cee5051f8410da28acc37424e1a12"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "297f0c9b37829038a9b08a8b83351983"
  },
  {
    "url": "consistency/index.html",
    "revision": "b36a2fd89bdbb6fc00c23fd0ef08de69"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "bf91729893839e53caff3df807c44154"
  },
  {
    "url": "favicon.png",
    "revision": "ceb76f9b7ceeea6b9c2dd0c53bbdba5a"
  },
  {
    "url": "index.html",
    "revision": "85c029e42e806f3fa6dd2101378d1852"
  },
  {
    "url": "logic/declarative.html",
    "revision": "792a33baa0818a8b26c18b2f72f6d5ed"
  },
  {
    "url": "logic/early-return.html",
    "revision": "3e3e0be79a13d4b63b366ac01f2f6bdc"
  },
  {
    "url": "logic/immutability.html",
    "revision": "9e39bbaf82d0caddb86f36368368d776"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "a66af2b13e45e57bf34a9ed6ddee7919"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "bccf9985e6d500eb45341f2d3d679c2e"
  },
  {
    "url": "logic/use-library.html",
    "revision": "d76641a1a2578afb0c62f1acc967fba9"
  },
  {
    "url": "name/concreteness.html",
    "revision": "89afbf02f063decf2d6287615f6c299a"
  },
  {
    "url": "name/index.html",
    "revision": "b2c3bc6d6ba5ad2b95a17b435d71ce10"
  },
  {
    "url": "name/prejudice.html",
    "revision": "13e025cba17385778b1368917938677b"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "8c77aaa97f7c5e6f87f927c38576bb14"
  },
  {
    "url": "principles/DRY.html",
    "revision": "75b7c487f43cb8724b8a114c2ce567bc"
  },
  {
    "url": "principles/KISS.html",
    "revision": "a7906a7ebed8ddc7fcaa0076c852e8e4"
  },
  {
    "url": "principles/PIE.html",
    "revision": "9e3b9a58dc259d3bb3954b29b4a45ce5"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "6e7b1ca4de2a56b10b991cc9a9de526c"
  },
  {
    "url": "test/index.html",
    "revision": "e72049496dc0ca9e4b3de42dfc4e0bf4"
  },
  {
    "url": "test/test-first.html",
    "revision": "5dbe4236367a8e2d0ddcf6b22fbdf730"
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
