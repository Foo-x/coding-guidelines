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
    "revision": "1cc598e8348090fae1890246c0e5914d"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "d635b217d921b95ad41fe0353e8973e1"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "cb371d9d905dae8e99532845fa9e2004"
  },
  {
    "url": "architecture/clean-architecture.html",
    "revision": "67fcb9df2047222bcea75b265e6740a0"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "48d967427c3ee835245e784a33c9e919"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "6e8e68cf06465b502129fae62197dbba"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "5085acd7f9a004156ec83a9bd8670949"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "efa92392eb14b2f782d59ed9e7b5b2f9"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "2e8372a487308b0e427bcbd97433301e"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "21f2ba1d8410292c520856b3d52ece9d"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "06d6044934ce756dec33d55428445a53"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "3183c4cc0358e42d93a69234e7e190fe"
  },
  {
    "url": "architecture/principles-of-package-design.html",
    "revision": "80ac549b97b0bedad5b8060a5f8522fe"
  },
  {
    "url": "architecture/REP.html",
    "revision": "29dee476fe8fd85d62ab974415a0d45e"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "971b5f5144f9298d71a020d4b561bf11"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "5e3711e84edb191ad9321fa3f9f21631"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "5cc749fc9224bcb1e1ab0d6090f44237"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "26815509a2e114a3b30ea6234dd03eee"
  },
  {
    "url": "assets/css/0.styles.d4de62e0.css",
    "revision": "b536fddf998353dd4daef00190b5deb8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.cee86e9c.js",
    "revision": "105393ac7ffc8808e375ae099e48748b"
  },
  {
    "url": "assets/js/10.30bdf77c.js",
    "revision": "ab3dcc9aae147b44e0096fd9fcb5d6ef"
  },
  {
    "url": "assets/js/11.f1e89fcb.js",
    "revision": "e5a864d8bd5a1c4b175c64553bffdccd"
  },
  {
    "url": "assets/js/12.8ffab9f1.js",
    "revision": "da40e997046ccd7f1eceef957b69f903"
  },
  {
    "url": "assets/js/13.addaa91f.js",
    "revision": "b75b9f7b45d55b0d07e395f61b592307"
  },
  {
    "url": "assets/js/14.911bb3b2.js",
    "revision": "9a39988048afc82bfcdc3434e08e3d60"
  },
  {
    "url": "assets/js/15.6ea5c4b8.js",
    "revision": "80f27350704667f893bbc1d4805af585"
  },
  {
    "url": "assets/js/16.6dc16aa5.js",
    "revision": "53500afcda2378232fdaeffc24ccd3e2"
  },
  {
    "url": "assets/js/17.584deeb2.js",
    "revision": "42a3c0568d68e22a408ae6ea8d27612b"
  },
  {
    "url": "assets/js/18.80ab81b9.js",
    "revision": "a99db5cc1ec0db83f19d957cd834ebd5"
  },
  {
    "url": "assets/js/19.75c12db6.js",
    "revision": "81985d3103b96997e75d458e5fcf0f35"
  },
  {
    "url": "assets/js/2.f15895a2.js",
    "revision": "1ba42b82fecb52cff5e23852b3e35c99"
  },
  {
    "url": "assets/js/20.a3978ebc.js",
    "revision": "9d26a9a0fc03fa1bb9a438ae76c495fa"
  },
  {
    "url": "assets/js/21.a1e57d67.js",
    "revision": "c8280f12cefb2c58286ed364112529d5"
  },
  {
    "url": "assets/js/22.3987f270.js",
    "revision": "cfd13ba2318ab833497e659b24baa20a"
  },
  {
    "url": "assets/js/23.98d3bc70.js",
    "revision": "5b3bb78834ee522794923eef304de5c6"
  },
  {
    "url": "assets/js/24.fbc59170.js",
    "revision": "53025f54ce5980fd651ee264f9be57b2"
  },
  {
    "url": "assets/js/25.dd2b8818.js",
    "revision": "ffb0977293f0505369e3eaa364190442"
  },
  {
    "url": "assets/js/26.8c21364f.js",
    "revision": "7df775cfeda9d68f9f862592af16d61d"
  },
  {
    "url": "assets/js/27.f9a5861c.js",
    "revision": "70899145b7b054af174bd7422d4bb429"
  },
  {
    "url": "assets/js/28.f2c48334.js",
    "revision": "4f09583ca74761954b3b345ef9a20d12"
  },
  {
    "url": "assets/js/29.308b7061.js",
    "revision": "97b539bc5bcf2971eaf4c8f389fe6174"
  },
  {
    "url": "assets/js/3.c7ba9505.js",
    "revision": "579155dee4f6b340b31babbc94b3f9be"
  },
  {
    "url": "assets/js/30.2b020150.js",
    "revision": "17de6b156e1f505ad025449a00833aae"
  },
  {
    "url": "assets/js/31.70f435d3.js",
    "revision": "133ebf7ed458119a28466361a15c3860"
  },
  {
    "url": "assets/js/32.27ee0cc7.js",
    "revision": "e8a858fbe0fa85f6f63104b91e2c5ec7"
  },
  {
    "url": "assets/js/33.c8f33282.js",
    "revision": "a6d4c55147a086295c4094b49296ff09"
  },
  {
    "url": "assets/js/34.d647ef2e.js",
    "revision": "4359acf420a4e81ace150728e0be5d97"
  },
  {
    "url": "assets/js/35.2b7df8c3.js",
    "revision": "9341d999e8f96e4330a03315a559bdcf"
  },
  {
    "url": "assets/js/36.04e8d529.js",
    "revision": "695bf2098c995591ed3b4fb75ada8ad6"
  },
  {
    "url": "assets/js/37.a4f4cf4f.js",
    "revision": "228e118ee88d99568e80f86ef9922116"
  },
  {
    "url": "assets/js/38.dbbec7e4.js",
    "revision": "0e1139a7e88466b2be510a635bb61a54"
  },
  {
    "url": "assets/js/39.0dcad807.js",
    "revision": "e58fed316ce3696a6f2970df7b73fd51"
  },
  {
    "url": "assets/js/4.3c860fdc.js",
    "revision": "7a859fa90401f0573ce535752c2ce143"
  },
  {
    "url": "assets/js/40.a46ab759.js",
    "revision": "4db1d7de7bef445e55fd4bd72db7204b"
  },
  {
    "url": "assets/js/41.180e17da.js",
    "revision": "bbd54aee749e78d5c26e711ff3d7ae65"
  },
  {
    "url": "assets/js/42.2c9d9fce.js",
    "revision": "0ca558744789da2285ca2ef9946e9664"
  },
  {
    "url": "assets/js/43.5c79678c.js",
    "revision": "19c27c4983aa1615999d84a8044999fe"
  },
  {
    "url": "assets/js/44.d35d0d1f.js",
    "revision": "d9a19386872701f3a41f6a64553748e2"
  },
  {
    "url": "assets/js/45.448596a6.js",
    "revision": "a69d1819eb5458bf43e50380f6da7176"
  },
  {
    "url": "assets/js/46.deb7e5d3.js",
    "revision": "ecc5e7d0bae47a8660aebe8de816fc5e"
  },
  {
    "url": "assets/js/47.42556731.js",
    "revision": "a8ab7e90738f00d33d523d97a0bbe35e"
  },
  {
    "url": "assets/js/48.1996dca5.js",
    "revision": "12558c4631a2916d5607ca4d0360c555"
  },
  {
    "url": "assets/js/49.643a83fd.js",
    "revision": "598fb53b765add1349b54136b2e147db"
  },
  {
    "url": "assets/js/5.30f61c1e.js",
    "revision": "1df5a86a2f92833feebc03d7498d9133"
  },
  {
    "url": "assets/js/50.45d4bc22.js",
    "revision": "85c2c1cffaaefae4ada970cec6d9c615"
  },
  {
    "url": "assets/js/51.1e4fbe3d.js",
    "revision": "e9a37c69acccb528d1b1824cb89ac382"
  },
  {
    "url": "assets/js/52.695d26e5.js",
    "revision": "393d99835112e86c1655daf4f29380df"
  },
  {
    "url": "assets/js/53.e01c3ad1.js",
    "revision": "3c3c7a49bcbaaceda1d934f7dd8053dd"
  },
  {
    "url": "assets/js/54.ff3b7ad8.js",
    "revision": "66bf42017f12a5cee777dda043ca1381"
  },
  {
    "url": "assets/js/55.5c6addf0.js",
    "revision": "37047e50445f7149e982542b43421fc7"
  },
  {
    "url": "assets/js/56.372bdfff.js",
    "revision": "c2b7d1f5da69bb1e5e91e5f854e95739"
  },
  {
    "url": "assets/js/57.9a451505.js",
    "revision": "99357930cbd90725c593a4c622e5466f"
  },
  {
    "url": "assets/js/58.195c023d.js",
    "revision": "1216ee0aed24402853fb53f4799e2192"
  },
  {
    "url": "assets/js/59.485171c9.js",
    "revision": "f0da0a85bff2305538daa2d36bc252fa"
  },
  {
    "url": "assets/js/6.4760b562.js",
    "revision": "bfd322073d6ca4c808d0c0e30bda3edd"
  },
  {
    "url": "assets/js/60.8d0dc11b.js",
    "revision": "9d6c0deee2179fadc798bf76e0cbbcc0"
  },
  {
    "url": "assets/js/61.8b026a78.js",
    "revision": "55430d8996a285fc7cc74acfaf8536e8"
  },
  {
    "url": "assets/js/62.70816d64.js",
    "revision": "a0573ea085609c8ceccc8aef0cf67094"
  },
  {
    "url": "assets/js/63.3842cbd2.js",
    "revision": "d2bda9fb98dbf7ecd4680e07d03546b9"
  },
  {
    "url": "assets/js/64.561ace8f.js",
    "revision": "275e145af95f0d919a9496b3e7b48fc6"
  },
  {
    "url": "assets/js/65.dc206bfb.js",
    "revision": "b7b9aa368529341e8ab10ec1874e70a3"
  },
  {
    "url": "assets/js/66.2594f0c5.js",
    "revision": "2fca1e06f126a3a6b8e16e55898b32f7"
  },
  {
    "url": "assets/js/67.fd9f4126.js",
    "revision": "4113c39cc419fa10391cd8a86fda835b"
  },
  {
    "url": "assets/js/68.d7e5e638.js",
    "revision": "1b6f1e638463c1bee43c59920000084b"
  },
  {
    "url": "assets/js/69.17afc975.js",
    "revision": "864e8ffceae8571cc563637c83a36faa"
  },
  {
    "url": "assets/js/7.c8f73533.js",
    "revision": "0fa763882fb38d50aaaeb47ea5392c67"
  },
  {
    "url": "assets/js/70.7bd99cf6.js",
    "revision": "f5b56ff5636376f1f286db53a766d82c"
  },
  {
    "url": "assets/js/71.b3445504.js",
    "revision": "0702fbf97bebe60e8fb8b1f9e05ccd5f"
  },
  {
    "url": "assets/js/72.79dcd517.js",
    "revision": "4204e7f3d60d8ca10380068d715022e8"
  },
  {
    "url": "assets/js/app.6dd6d4dc.js",
    "revision": "3220ebf9e8bc31869962c764cc17c858"
  },
  {
    "url": "assets/js/vendors~docsearch.50a7a736.js",
    "revision": "2fe8562dae5a049c6495decbe13e29aa"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "a3f001f5d3435a404c62dc07badc9e28"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "b1d76bb892fdc9b6c1b5cdf44f321de0"
  },
  {
    "url": "comment/kinds.html",
    "revision": "ecb813d3b32faf1349c99d7f6a2da1ca"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "fef24465cc400aa713b75e12b0c2d931"
  },
  {
    "url": "consistency/index.html",
    "revision": "482a64ba7d671bf0da71c18537ae0f49"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "cd75ff5fa9fc93349f828504c31d8c38"
  },
  {
    "url": "logic/CQS.html",
    "revision": "310d403a7acbaa9b93c5c0abbef37b51"
  },
  {
    "url": "logic/declarative.html",
    "revision": "ffca2360d68eb75712495ad0a2d9d4b8"
  },
  {
    "url": "logic/early-return.html",
    "revision": "3cb3606ec15c41b7d08b57837e66c86e"
  },
  {
    "url": "logic/immutability.html",
    "revision": "357b6f85a14b5ecd8243df24437cdc82"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "cec33a08a761937f6ebdb732a9f7bf0f"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "5a587348b38e130859cd9e7831664e32"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "c1016a688dab25aff9a0910719dfa4dd"
  },
  {
    "url": "logic/pure-function.html",
    "revision": "4211321f9cec46532a756936e1097636"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "ecf7195a516962a0c3a35bfca18366c2"
  },
  {
    "url": "logic/use-library.html",
    "revision": "dbfda56af4ac0b116933ce82432d238d"
  },
  {
    "url": "name/concreteness.html",
    "revision": "15e6393eddd9905f6b763405f0ee0828"
  },
  {
    "url": "name/index.html",
    "revision": "e00e0a00bd28591ccc9184a8028dddee"
  },
  {
    "url": "name/prejudice.html",
    "revision": "cec53bd97694c3410cc8d6f5ea7b1a66"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "80b538c314f4da1a154249a247eba0f6"
  },
  {
    "url": "principles/DRY.html",
    "revision": "bb9d04d37c36e80c63eab79cd914d7e9"
  },
  {
    "url": "principles/KISS.html",
    "revision": "1b938282069b6044de026dc3e31d3594"
  },
  {
    "url": "principles/PIE.html",
    "revision": "e9bdf972d9bfd1c72f764864b1f7a93d"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "6c3a22f57d4ed2fe38489da8ef7617ac"
  },
  {
    "url": "test/AAA.html",
    "revision": "434025e404a16e82090aba1851171fc7"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "f2c50486434715611d73a044a0a9ca78"
  },
  {
    "url": "test/cross-check.html",
    "revision": "dc039233d8656a0f94cfb5c9218bff1f"
  },
  {
    "url": "test/index.html",
    "revision": "c40b3c29f2e58cb53a48b9984102844c"
  },
  {
    "url": "test/naming.html",
    "revision": "72f55e4c8cbccdfc08ebf50975584861"
  },
  {
    "url": "test/one-test-one-point.html",
    "revision": "bdf789ed8025fcf3f082a3c4dca29b87"
  },
  {
    "url": "test/refactoring.html",
    "revision": "3aed20d5371b0cddf17dfc7efcdf0af8"
  },
  {
    "url": "test/test-data-builder.html",
    "revision": "280f20d88c8143db4cf66506772465ac"
  },
  {
    "url": "test/test-first.html",
    "revision": "b2369495a7ebd528f057b52ae13944c5"
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
