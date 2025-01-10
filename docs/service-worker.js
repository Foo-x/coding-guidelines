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
    "revision": "2e3378378ae5309bdc6c7302e247c10c"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "3b802fb7da52af14c8c395f994c6e0b0"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "2fb399358c57988951943b40473be4d7"
  },
  {
    "url": "architecture/clean-architecture.html",
    "revision": "c2f5ec2dacf144eb6c39451eabf38b0a"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "d9e612b9ec2a157c2ce7f2ba7d76d12a"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "496372f5503fb52b16535948509cbf6f"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "974bf04d1168ca52978a91b424a5a062"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "ed1ffc96cc58ac22a154bbcad186e011"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "fd9a69c7f7fe91123935caa4f54799ca"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "5ced0c33795bdf5a09a4eee891421633"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "e431234ba6242b4071e4b5499ce529aa"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "ff91426e66dbf1fe0cf1a3a5a395a402"
  },
  {
    "url": "architecture/principles-of-package-design.html",
    "revision": "f6a993d5073169c9ee3507cd717f27f6"
  },
  {
    "url": "architecture/REP.html",
    "revision": "4f20a489514ce6f55f9eeb5ba95399c0"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "f365769ef669803f59ea4d9209dfd0f4"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "a30baa851c401c7d8864101f13384b2c"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "66e588aed2f395c4a525a1b7a804cd3f"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "98a0f7cbfe4ed0a9e357544c1d82442b"
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
    "url": "assets/js/24.244517d9.js",
    "revision": "deb6bed57348b8571f836cdbbb8b4b88"
  },
  {
    "url": "assets/js/25.dd2b8818.js",
    "revision": "ffb0977293f0505369e3eaa364190442"
  },
  {
    "url": "assets/js/26.d0823a0e.js",
    "revision": "92cdaec258d8fd0c530aed74705fa9ce"
  },
  {
    "url": "assets/js/27.6aca703c.js",
    "revision": "c2eb9cb925e8b66ae898a8cebd60f6aa"
  },
  {
    "url": "assets/js/28.98f00d61.js",
    "revision": "2ace11dabafbf196818ac08a86e9d9c0"
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
    "url": "assets/js/30.172d5217.js",
    "revision": "6f75a7a3b37efff5491aa705ea9de39b"
  },
  {
    "url": "assets/js/31.b9104afb.js",
    "revision": "c93254ea97b99e2f7b7469028be7867b"
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
    "url": "assets/js/34.b4a7b071.js",
    "revision": "d5b3c1b06ee74b3d0cb273bb9c6d5f78"
  },
  {
    "url": "assets/js/35.c2d1db53.js",
    "revision": "6b3e8d3a4c5431b9ec4bfba3480ed70f"
  },
  {
    "url": "assets/js/36.81fc5fd8.js",
    "revision": "fcb69859e528c2d7485a777422e13c69"
  },
  {
    "url": "assets/js/37.a4f4cf4f.js",
    "revision": "228e118ee88d99568e80f86ef9922116"
  },
  {
    "url": "assets/js/38.0107a0f9.js",
    "revision": "9316090dfaa2aa29414c9e75646a6d42"
  },
  {
    "url": "assets/js/39.59f60053.js",
    "revision": "6f23bff19b72fc39ae8b3165d557298f"
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
    "url": "assets/js/42.1d42009a.js",
    "revision": "7a294384e8c8e93d2b789a1d75f69ab1"
  },
  {
    "url": "assets/js/43.b7a2e9f3.js",
    "revision": "57a728550efba76869ee76c1ec96db64"
  },
  {
    "url": "assets/js/44.5486992f.js",
    "revision": "ea0b5dcea1c006421b8d8cfbdda8333f"
  },
  {
    "url": "assets/js/45.666f2b22.js",
    "revision": "1daf22739eaa83e4d64148470df7cc07"
  },
  {
    "url": "assets/js/46.56495b81.js",
    "revision": "e48aebb2f6d988c620e1e7827063e1e8"
  },
  {
    "url": "assets/js/47.e3eb9f57.js",
    "revision": "8d62c4e878cf9b88fa43d10f09f539a2"
  },
  {
    "url": "assets/js/48.9caa2c7e.js",
    "revision": "8f50d85a62e6e599f8b20351b0fb11f3"
  },
  {
    "url": "assets/js/49.8a412baa.js",
    "revision": "fe88873fbbb23e806b35a6b1b4fb4661"
  },
  {
    "url": "assets/js/5.30f61c1e.js",
    "revision": "1df5a86a2f92833feebc03d7498d9133"
  },
  {
    "url": "assets/js/50.28d61ae8.js",
    "revision": "5c56d25e7370c0d0f4ceef02c7e0f5df"
  },
  {
    "url": "assets/js/51.d95813ff.js",
    "revision": "141ccaefa8983e2d3fa9668fcc55a715"
  },
  {
    "url": "assets/js/52.695d26e5.js",
    "revision": "393d99835112e86c1655daf4f29380df"
  },
  {
    "url": "assets/js/53.3d304939.js",
    "revision": "7ef4499e10f7c0c0c5ba35f477d11507"
  },
  {
    "url": "assets/js/54.488c1c74.js",
    "revision": "90138bb1c81f8bd497ac93dadae65469"
  },
  {
    "url": "assets/js/55.e6ae2441.js",
    "revision": "d35f79ea7a03c2b163b00369bae3b05e"
  },
  {
    "url": "assets/js/56.372bdfff.js",
    "revision": "c2b7d1f5da69bb1e5e91e5f854e95739"
  },
  {
    "url": "assets/js/57.3341d439.js",
    "revision": "57f3ff0952e5e8c5af3f0216b2098bd9"
  },
  {
    "url": "assets/js/58.195c023d.js",
    "revision": "1216ee0aed24402853fb53f4799e2192"
  },
  {
    "url": "assets/js/59.88acd9b5.js",
    "revision": "40cc3d256398f14c8eddc223404439ee"
  },
  {
    "url": "assets/js/6.4760b562.js",
    "revision": "bfd322073d6ca4c808d0c0e30bda3edd"
  },
  {
    "url": "assets/js/60.929ffb1b.js",
    "revision": "30f79afc6658dfb200bf6ff7c97ca6a8"
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
    "url": "assets/js/63.3666b546.js",
    "revision": "43958a2123d06bff9d5b11e7f8537fbb"
  },
  {
    "url": "assets/js/64.a7fa5386.js",
    "revision": "776f619bfcbf677324c58993c3fd7487"
  },
  {
    "url": "assets/js/65.a659e7a6.js",
    "revision": "000035c767fe085765a9eb2ee018997c"
  },
  {
    "url": "assets/js/66.e7554d03.js",
    "revision": "e4de8168317a2f2e4a0bc117744a6cf3"
  },
  {
    "url": "assets/js/67.fd9f4126.js",
    "revision": "4113c39cc419fa10391cd8a86fda835b"
  },
  {
    "url": "assets/js/68.35b10a9c.js",
    "revision": "5612f2930ae0da461d7f249e30aff3c8"
  },
  {
    "url": "assets/js/69.35cdcb6a.js",
    "revision": "34694e9a1df78746b81117f11c237af4"
  },
  {
    "url": "assets/js/7.c8f73533.js",
    "revision": "0fa763882fb38d50aaaeb47ea5392c67"
  },
  {
    "url": "assets/js/70.b8b75086.js",
    "revision": "72009ef06f632bd97743f5751bbe8c6f"
  },
  {
    "url": "assets/js/71.5af07ab5.js",
    "revision": "d54cc9cbe2fd4dfecc8fab2e1549b859"
  },
  {
    "url": "assets/js/72.79dcd517.js",
    "revision": "4204e7f3d60d8ca10380068d715022e8"
  },
  {
    "url": "assets/js/app.fe20eed1.js",
    "revision": "9f63dfa1cce80e65856f00d132582d1c"
  },
  {
    "url": "assets/js/vendors~docsearch.50a7a736.js",
    "revision": "2fe8562dae5a049c6495decbe13e29aa"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "73df9b471487998c1bffa03cdda5de0f"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "cd6645714301d95c16f3a0be90c5086d"
  },
  {
    "url": "comment/kinds.html",
    "revision": "5a2d614e6522d79995709274a6eb2f8d"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "d4125de5607a4dfb2ed89e6c0d2a4791"
  },
  {
    "url": "consistency/index.html",
    "revision": "3a07270719631a8de756b32b340bcb4d"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "e6424e03e6b1165c29d79914611abc38"
  },
  {
    "url": "logic/CQS.html",
    "revision": "a5778daf88f4f9c5a995daea3e0ad130"
  },
  {
    "url": "logic/declarative.html",
    "revision": "c70291ef63c14a33df0dc086b8adff60"
  },
  {
    "url": "logic/early-return.html",
    "revision": "d6a01aaf472269afd466194b3959b2ad"
  },
  {
    "url": "logic/immutability.html",
    "revision": "cc5724f513169a0465da66ebed3794f5"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "dc3bd02b9dd848d7118084cd4bae194b"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "89cf5223f832240ef1f51e95eb4c43e8"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "b5dc6e3ff4a47518fdeab289c0e5c78c"
  },
  {
    "url": "logic/pure-function.html",
    "revision": "7d6c91704602db58d7b5f908f9b09f24"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "da2b4d01e2fdfda1252f0e769f1b9e2c"
  },
  {
    "url": "logic/use-library.html",
    "revision": "573e53129cf47460e243e88449408912"
  },
  {
    "url": "name/concreteness.html",
    "revision": "8f8b41aa3e30f6bc0d5fec0f0b75dffe"
  },
  {
    "url": "name/index.html",
    "revision": "07ee97397262b8a85329e17e403b9b8c"
  },
  {
    "url": "name/prejudice.html",
    "revision": "312e817e5a35b9cd00da45ed9df3f284"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "6379e888a238e94d372ec5905747f0d3"
  },
  {
    "url": "principles/DRY.html",
    "revision": "dfc3fa85fd0b760c2365a6ca9d4a74ba"
  },
  {
    "url": "principles/KISS.html",
    "revision": "6f4399dd9e4cb778ca40a237f20fcbab"
  },
  {
    "url": "principles/PIE.html",
    "revision": "9c17ca34ad3b10f1733cb7b0a3e0b9be"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "e489b0e9349d5d6056df1815852c2043"
  },
  {
    "url": "test/AAA.html",
    "revision": "3b2a047a8d7b7313a3af0e0c9f109400"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "72357921b60efaa84bca4cf963b75ef1"
  },
  {
    "url": "test/cross-check.html",
    "revision": "e5071fcddf2fc73fee119b135698e5c2"
  },
  {
    "url": "test/index.html",
    "revision": "d4c11ed78aa73f33ea0f8997321dba60"
  },
  {
    "url": "test/naming.html",
    "revision": "46431e8de49ce34745c52804f81ffcd7"
  },
  {
    "url": "test/one-test-one-point.html",
    "revision": "9c034041b67ac1a6a04e458e5f0f17f0"
  },
  {
    "url": "test/refactoring.html",
    "revision": "ffac0df01e25976b445f01f69cc062a3"
  },
  {
    "url": "test/test-data-builder.html",
    "revision": "41c1361bb6f6fba1abbba388b0dfefbd"
  },
  {
    "url": "test/test-first.html",
    "revision": "5ac76e6d61705a35972494a64ca6de9d"
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
