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
    "revision": "db972c8a871206624dce64d51824e216"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "14f416aa972d433d984ea38d84f1e5cf"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "0222d78cb3b8804782a2c0644d1cbdbf"
  },
  {
    "url": "architecture/clean-architecture.html",
    "revision": "4e5cd4017b07cc41bf5bd9d7e90cd74f"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "f03ee22b4fa731b8d9b1d2928490194d"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "f3e53eb31dbe5d3c0b069b251952ebda"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "85090e060d96f4ac0382a6099f4de38d"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "9e35642e3e6ac348a8843a58c95a7ed5"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "b2315d0f4c68865bd65045081e2dbada"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "aa80e16a6c86534cf624dca409382b8c"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "ff555886df68dac3f7822f7435a1285a"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "708dace30dd0ad434c0418c899fedba5"
  },
  {
    "url": "architecture/REP.html",
    "revision": "b66f2e01c782a841571e34955b11a916"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "ee4de0b99fe6ee6be4757dbf20d0e31a"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "f9e866a9a306cde54e52f553ebf3fac7"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "62f32b434a389f1ad6b3ab31b6327d4e"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "160e0e16566954665421eeda4eb044aa"
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
    "url": "assets/js/1.723aa446.js",
    "revision": "105393ac7ffc8808e375ae099e48748b"
  },
  {
    "url": "assets/js/10.be225316.js",
    "revision": "ab3dcc9aae147b44e0096fd9fcb5d6ef"
  },
  {
    "url": "assets/js/11.bc8e3b43.js",
    "revision": "e5a864d8bd5a1c4b175c64553bffdccd"
  },
  {
    "url": "assets/js/12.b06a29de.js",
    "revision": "da40e997046ccd7f1eceef957b69f903"
  },
  {
    "url": "assets/js/13.c131c2e0.js",
    "revision": "b75b9f7b45d55b0d07e395f61b592307"
  },
  {
    "url": "assets/js/14.c4dedce0.js",
    "revision": "9a39988048afc82bfcdc3434e08e3d60"
  },
  {
    "url": "assets/js/15.d87a48fa.js",
    "revision": "80f27350704667f893bbc1d4805af585"
  },
  {
    "url": "assets/js/16.4edb132c.js",
    "revision": "53500afcda2378232fdaeffc24ccd3e2"
  },
  {
    "url": "assets/js/17.fefe20fd.js",
    "revision": "42a3c0568d68e22a408ae6ea8d27612b"
  },
  {
    "url": "assets/js/18.bf26e052.js",
    "revision": "a99db5cc1ec0db83f19d957cd834ebd5"
  },
  {
    "url": "assets/js/19.3ddef596.js",
    "revision": "81985d3103b96997e75d458e5fcf0f35"
  },
  {
    "url": "assets/js/2.1065c7f1.js",
    "revision": "1ba42b82fecb52cff5e23852b3e35c99"
  },
  {
    "url": "assets/js/20.f0f85464.js",
    "revision": "9d26a9a0fc03fa1bb9a438ae76c495fa"
  },
  {
    "url": "assets/js/21.47ba9ce1.js",
    "revision": "c8280f12cefb2c58286ed364112529d5"
  },
  {
    "url": "assets/js/22.1441333a.js",
    "revision": "beb4f1afc99d7c160ac90759784a818c"
  },
  {
    "url": "assets/js/23.28941339.js",
    "revision": "e72d325e1de047aca80e98faa24ddb4f"
  },
  {
    "url": "assets/js/24.19b80904.js",
    "revision": "9a25df8dbba36b3e54ff298fc9a05b84"
  },
  {
    "url": "assets/js/25.74c9e91e.js",
    "revision": "ac269cc565fac88935d61c61134d6f72"
  },
  {
    "url": "assets/js/26.f4e289e7.js",
    "revision": "aca82ead1025d9ee2849f7646e56b98b"
  },
  {
    "url": "assets/js/27.0f49095a.js",
    "revision": "ff11cabeb8c17a099c6a6acc1c32c87b"
  },
  {
    "url": "assets/js/28.b2f14259.js",
    "revision": "efdeb0ff382b3112800f033d5129b7e1"
  },
  {
    "url": "assets/js/29.9ee9cfd7.js",
    "revision": "71fa512e2e3884130423ca8613a6ae5c"
  },
  {
    "url": "assets/js/3.cdf087dc.js",
    "revision": "579155dee4f6b340b31babbc94b3f9be"
  },
  {
    "url": "assets/js/30.8ddb4877.js",
    "revision": "0b2f96632079ac0e7576331f30584fe9"
  },
  {
    "url": "assets/js/31.68e83671.js",
    "revision": "ccf8ebc0ffdaaf85a9251155b7fa6e83"
  },
  {
    "url": "assets/js/32.0e8a1add.js",
    "revision": "844e2c861b206413946ec78bd2b7067b"
  },
  {
    "url": "assets/js/33.f4ffedb0.js",
    "revision": "a6d4c55147a086295c4094b49296ff09"
  },
  {
    "url": "assets/js/34.93e2f67d.js",
    "revision": "34579a7cd63cd698a376aee1126d9f4f"
  },
  {
    "url": "assets/js/35.d4b6d0c3.js",
    "revision": "fe503c32162ec6bf4f3a862cb3c71799"
  },
  {
    "url": "assets/js/36.78b5a46c.js",
    "revision": "672a586362ddc447af9cafeb6e710b47"
  },
  {
    "url": "assets/js/37.4d943c31.js",
    "revision": "43855919f3abd3d77608bec744310485"
  },
  {
    "url": "assets/js/38.c1df1d60.js",
    "revision": "abaca0f40747b85edd345c8e7ae38d01"
  },
  {
    "url": "assets/js/39.4ca4e7bf.js",
    "revision": "4c1616a65ffc3c1e8d56c7bbf18ea0e4"
  },
  {
    "url": "assets/js/4.c79ccb25.js",
    "revision": "7a859fa90401f0573ce535752c2ce143"
  },
  {
    "url": "assets/js/40.69d47783.js",
    "revision": "9c18c540d8962cb09e2186d9defdc170"
  },
  {
    "url": "assets/js/41.aca7154a.js",
    "revision": "700d2eb8a70c878f5226e50137b90b41"
  },
  {
    "url": "assets/js/42.a669f79a.js",
    "revision": "8f99edd0bd44de9b5056c0bcb8e2d99c"
  },
  {
    "url": "assets/js/43.27df9654.js",
    "revision": "05632c3dc82c92f847445dbc7e6f7a33"
  },
  {
    "url": "assets/js/44.69acd5bd.js",
    "revision": "25a751266de880307513db98be9f6d06"
  },
  {
    "url": "assets/js/45.396fc6e6.js",
    "revision": "ab2a8513a7ea6a2c20baf0a84c2e5e02"
  },
  {
    "url": "assets/js/46.5409f2d2.js",
    "revision": "d623fe351104c88a77f6188005273187"
  },
  {
    "url": "assets/js/47.7784785c.js",
    "revision": "518ca4edc6919ba11d203df6ea4c9fd3"
  },
  {
    "url": "assets/js/48.1b070a23.js",
    "revision": "0c3c957754596fca48738f349743636d"
  },
  {
    "url": "assets/js/49.c35dcf69.js",
    "revision": "307b1fb9af52a92073ea1812fab36c2b"
  },
  {
    "url": "assets/js/5.2ebcd94b.js",
    "revision": "1df5a86a2f92833feebc03d7498d9133"
  },
  {
    "url": "assets/js/50.69601aa1.js",
    "revision": "7cdbcd2713850b6e670e861fb858000a"
  },
  {
    "url": "assets/js/51.672bac8e.js",
    "revision": "4ce3913cfcde956ce49667ccc08828ff"
  },
  {
    "url": "assets/js/52.2abd070d.js",
    "revision": "d68c8c9623341f41e6c5335c33fb9979"
  },
  {
    "url": "assets/js/53.6a533b08.js",
    "revision": "290aeb18528144f5f7a03270e50861d1"
  },
  {
    "url": "assets/js/54.1ba2f38e.js",
    "revision": "49c6d0e3fda811bda382b3070d14d1fa"
  },
  {
    "url": "assets/js/55.2b1ac482.js",
    "revision": "07d09ec880fa9192372c1f390cbd65d6"
  },
  {
    "url": "assets/js/56.d0fbce16.js",
    "revision": "287491ae09c0954a222f8151a481c972"
  },
  {
    "url": "assets/js/57.b223d24b.js",
    "revision": "21ba37cffb00fda4e6c90061e346dcb5"
  },
  {
    "url": "assets/js/58.757e8fbb.js",
    "revision": "d3ddb9b2a4f5dfeaad83a2cea5aecf09"
  },
  {
    "url": "assets/js/59.5fc7b699.js",
    "revision": "c789a9f33fa46e31e1d31531f07db29f"
  },
  {
    "url": "assets/js/6.cbce414c.js",
    "revision": "bfd322073d6ca4c808d0c0e30bda3edd"
  },
  {
    "url": "assets/js/60.cd1a9eea.js",
    "revision": "9f07db073f280d59b202ff278ee3321d"
  },
  {
    "url": "assets/js/61.b189e0e4.js",
    "revision": "29e17b5e1dd2b2f37850aff405ae6714"
  },
  {
    "url": "assets/js/62.67686dc8.js",
    "revision": "a8a8b1040b0bc3e7f27b85da423a5990"
  },
  {
    "url": "assets/js/63.e1bb8401.js",
    "revision": "3e381b1c3b439a75d93d66be1f05d5ff"
  },
  {
    "url": "assets/js/64.b041062f.js",
    "revision": "4954e50cfbeca1a7e21ff96cfceff8fe"
  },
  {
    "url": "assets/js/65.61d902ef.js",
    "revision": "618320f73a6231537fb8de02971d9482"
  },
  {
    "url": "assets/js/66.dbbb1058.js",
    "revision": "b9131842545bce085f18c05a58afd22f"
  },
  {
    "url": "assets/js/67.599f6763.js",
    "revision": "4b319c429d49978c982b79175431c6f9"
  },
  {
    "url": "assets/js/68.b9a0122b.js",
    "revision": "a90f969d6c6f46bfac2a7f0126607aa8"
  },
  {
    "url": "assets/js/7.36a911e3.js",
    "revision": "0fa763882fb38d50aaaeb47ea5392c67"
  },
  {
    "url": "assets/js/app.c8c6ee75.js",
    "revision": "ec7406899ef6e542dde8b54ef53bd523"
  },
  {
    "url": "assets/js/vendors~docsearch.d7e70b8a.js",
    "revision": "2fe8562dae5a049c6495decbe13e29aa"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "162ca9b31c8b45df8f5fe7eb92dd4e9b"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "de9ab27399a183844c729af33daff530"
  },
  {
    "url": "comment/kinds.html",
    "revision": "19582a28ada56ffbd0e7aac193de8a9e"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "b9298824f4379cdc0ebd7d06c7a94ee0"
  },
  {
    "url": "consistency/index.html",
    "revision": "fade8f3d3b2e8d60be76385354a9a280"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "6b2c4bd23a6511efb92a8ffa1516383d"
  },
  {
    "url": "logic/CQS.html",
    "revision": "9346ea514394a3a851f0e516cbc1637c"
  },
  {
    "url": "logic/declarative.html",
    "revision": "3d2a7ab627b3a331ec12a09ea832b20e"
  },
  {
    "url": "logic/early-return.html",
    "revision": "fc691793a49828179775900aa261b4f6"
  },
  {
    "url": "logic/immutability.html",
    "revision": "5897b0111d2686f3dd448ebc2d894404"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "83467a1f2752518cf6389ab96ff926b3"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "42f875f25d081c47a91af1bb89f3d823"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "85f19c0b3c1e183ad3bb95c924e6af6a"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "7a4143dab6c074f67488591b282fdd67"
  },
  {
    "url": "logic/use-library.html",
    "revision": "4072a0fd406bfa8f0e7633c4f074508b"
  },
  {
    "url": "name/concreteness.html",
    "revision": "696172d104cddfcad87d224971792296"
  },
  {
    "url": "name/index.html",
    "revision": "969b699a21ec8efbc86e906966a35c06"
  },
  {
    "url": "name/prejudice.html",
    "revision": "fd5662ca8666409d526d90553e2f683c"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "fac3e53f3232cdd2df7b325648730fab"
  },
  {
    "url": "principles/DRY.html",
    "revision": "be17c0a94d4a48721f56bd655dfdb3e5"
  },
  {
    "url": "principles/KISS.html",
    "revision": "baa26fcf9e4a742da052e218896a2543"
  },
  {
    "url": "principles/PIE.html",
    "revision": "8daf720b189f1d08990468191b6a75ee"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "22f08983bb23b3010a6b18cd3401ed8c"
  },
  {
    "url": "test/AAA.html",
    "revision": "dd1e0dfb6005738bf66c0339a571a7c2"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "72f496c7b0b3d54b0d2b04735b86204c"
  },
  {
    "url": "test/index.html",
    "revision": "8d42bca280d3fe3c69ab705ddd7866f3"
  },
  {
    "url": "test/naming.html",
    "revision": "fd4758cadf2f95ab5a25e534099108e1"
  },
  {
    "url": "test/one-test-one-point.html",
    "revision": "d0fb0aaa20d29a5af619598693f4eb0a"
  },
  {
    "url": "test/refactoring.html",
    "revision": "6fb4ce758fe37ff35a435dc2388ba774"
  },
  {
    "url": "test/test-first.html",
    "revision": "310aeb7c05d0a53281bfd1014d826df6"
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
