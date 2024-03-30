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
    "revision": "b20b9e7d79737a7928aa4da53f4f5bf6"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "48ee17d363617d1c19128e32de57b674"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "a57a62bb1f8d58ffebe457d0bd05124d"
  },
  {
    "url": "architecture/clean-architecture.html",
    "revision": "84be3fd4d3dad8f076a859b4954aa84d"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "f6f94e89e21d902e8bc9d959018cfc31"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "a2852e23a3df5cca75b3114fc3a08e57"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "fe84c23967957c20162b80210cc6f447"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "821bd06c4b83e5a5638ecebc60354dce"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "6ad7b11a03d41467c8aeb4130557667b"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "ce057a19e16e028097527fd81dc058c4"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "03f9258ccdcc3f9cc9dd0a2ee0307faa"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "1e737891eea31c67874f8cde075960b8"
  },
  {
    "url": "architecture/REP.html",
    "revision": "e5f54e5acf137f3e7cf08e42757e1890"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "5e147ff551b99f22cf8f1865d7e7371d"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "b8aa61694913ab4d606d2b991c7e5c48"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "35d0856a3719ae34080b5ee3f6d6732e"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "3358731e7059ac3c0fb6603d5c22448b"
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
    "url": "assets/js/22.087ce44e.js",
    "revision": "cfd13ba2318ab833497e659b24baa20a"
  },
  {
    "url": "assets/js/23.1462bba7.js",
    "revision": "5b3bb78834ee522794923eef304de5c6"
  },
  {
    "url": "assets/js/24.766dc060.js",
    "revision": "3620dd48738de813ee4a48a51b9ca457"
  },
  {
    "url": "assets/js/25.c0ac41c9.js",
    "revision": "10f3ba4c37005dbfad419afa6d06edcf"
  },
  {
    "url": "assets/js/26.39023432.js",
    "revision": "ad8f1d3b0cb15120bdb0722855311627"
  },
  {
    "url": "assets/js/27.991cd938.js",
    "revision": "5d70e74bed954d41d816c77cc58af508"
  },
  {
    "url": "assets/js/28.ae06e125.js",
    "revision": "4392f2b2d059fcc1de08843b1282099b"
  },
  {
    "url": "assets/js/29.2fb6d419.js",
    "revision": "2a916c11a29a7656a6962be3a2a58bb4"
  },
  {
    "url": "assets/js/3.cdf087dc.js",
    "revision": "579155dee4f6b340b31babbc94b3f9be"
  },
  {
    "url": "assets/js/30.f7ff4860.js",
    "revision": "17de6b156e1f505ad025449a00833aae"
  },
  {
    "url": "assets/js/31.f3eb44f3.js",
    "revision": "945c499b3091ea13c6e09ed011a94555"
  },
  {
    "url": "assets/js/32.94914cec.js",
    "revision": "1ae009ebef21af8d5b36073238fd6818"
  },
  {
    "url": "assets/js/33.7a1e1dc4.js",
    "revision": "cf8ca997a07966d714a36372a526d098"
  },
  {
    "url": "assets/js/34.d9a2e954.js",
    "revision": "4359acf420a4e81ace150728e0be5d97"
  },
  {
    "url": "assets/js/35.83126a8c.js",
    "revision": "9341d999e8f96e4330a03315a559bdcf"
  },
  {
    "url": "assets/js/36.765f0e98.js",
    "revision": "2b8a0da2d02f8c4178119c72f72d2c83"
  },
  {
    "url": "assets/js/37.8e9dcab3.js",
    "revision": "6988fd18a627be73496552acc9c5155c"
  },
  {
    "url": "assets/js/38.dffafa74.js",
    "revision": "0e1139a7e88466b2be510a635bb61a54"
  },
  {
    "url": "assets/js/39.59457b95.js",
    "revision": "fdb6e465643cadf064b7b5692be0bead"
  },
  {
    "url": "assets/js/4.c79ccb25.js",
    "revision": "7a859fa90401f0573ce535752c2ce143"
  },
  {
    "url": "assets/js/40.205002dd.js",
    "revision": "4f5fbb31683bea2168a04f90e1d3992e"
  },
  {
    "url": "assets/js/41.44d1abc4.js",
    "revision": "c2293e1f97be75015e5eef3dcdfdfd05"
  },
  {
    "url": "assets/js/42.92491495.js",
    "revision": "70b5f29cda841ed1c3f19abc02f242a9"
  },
  {
    "url": "assets/js/43.3d651212.js",
    "revision": "78b19e8753f3fefbbadeb5270b5bd378"
  },
  {
    "url": "assets/js/44.34d9e3d8.js",
    "revision": "4bf034bf0d9b2f9e919aef91c4bd13fd"
  },
  {
    "url": "assets/js/45.ffcccea9.js",
    "revision": "aadb7ad38a7430e7df9db93d9b187571"
  },
  {
    "url": "assets/js/46.61ca471e.js",
    "revision": "bd57e6733850a77c85f153f553a044f9"
  },
  {
    "url": "assets/js/47.f6e2370f.js",
    "revision": "2fafb1d949c48603b9cb813cc036a407"
  },
  {
    "url": "assets/js/48.7ef5865a.js",
    "revision": "f26e0e39bc374a82373939aec49e0c4e"
  },
  {
    "url": "assets/js/49.b594c060.js",
    "revision": "8b8a1093dc3ce201c78452ae4eef92ef"
  },
  {
    "url": "assets/js/5.2ebcd94b.js",
    "revision": "1df5a86a2f92833feebc03d7498d9133"
  },
  {
    "url": "assets/js/50.71611a8d.js",
    "revision": "72402ae8fa2011587849e53926bcb151"
  },
  {
    "url": "assets/js/51.ad13a61c.js",
    "revision": "7cb1456d851c0f136f7287e576432d7d"
  },
  {
    "url": "assets/js/52.04ab6cfe.js",
    "revision": "1fbd2c88039c73ee4a45d1093a5c8471"
  },
  {
    "url": "assets/js/53.5bd4c4bb.js",
    "revision": "1d7acb3c596ca33713b76c8f8f486f41"
  },
  {
    "url": "assets/js/54.5ed91825.js",
    "revision": "6b16ba2038d0b274c5ae6616457cfe56"
  },
  {
    "url": "assets/js/55.b5678100.js",
    "revision": "5f6b0983f9c5443f4a73e729a5cf3630"
  },
  {
    "url": "assets/js/56.fc1fb6c5.js",
    "revision": "487478e5354ffeee4ec15c1967b18af8"
  },
  {
    "url": "assets/js/57.f923f990.js",
    "revision": "47271dfb34244f0784c775a841552cc1"
  },
  {
    "url": "assets/js/58.52d7c639.js",
    "revision": "0523d1e643245fe06e08cfa501abe0cc"
  },
  {
    "url": "assets/js/59.0ed622ca.js",
    "revision": "b0f0ff7f0dc9f27ba95c6412f476d2a3"
  },
  {
    "url": "assets/js/6.cbce414c.js",
    "revision": "bfd322073d6ca4c808d0c0e30bda3edd"
  },
  {
    "url": "assets/js/60.e7193ff0.js",
    "revision": "0abaf31ce7df15d228e08b1e976c9bc0"
  },
  {
    "url": "assets/js/61.6c8e8d60.js",
    "revision": "63120dd2a4c7c25d83396e36a0ad77bb"
  },
  {
    "url": "assets/js/62.e436c0ba.js",
    "revision": "ddd0517d3f79aeb63e777fef2b661299"
  },
  {
    "url": "assets/js/63.22bdfc83.js",
    "revision": "30bf2b63923d44f8fa24bca9600091fc"
  },
  {
    "url": "assets/js/64.56c608fb.js",
    "revision": "8dd54b6517a6f2ad3ced5fb2dc6fc5ae"
  },
  {
    "url": "assets/js/65.8436fd41.js",
    "revision": "c9af372adb2fb956c832d142392cdaae"
  },
  {
    "url": "assets/js/66.5434a205.js",
    "revision": "e58699c82d29af1026d32d04fc4480d1"
  },
  {
    "url": "assets/js/67.552a2f9f.js",
    "revision": "9f78091ffefb186aef6c3ac33dbf93f4"
  },
  {
    "url": "assets/js/68.649e7836.js",
    "revision": "32d95d1c174b0e5a3340f5f72cba674a"
  },
  {
    "url": "assets/js/69.1a245b28.js",
    "revision": "1900e784fdf3ea99fbd74576d48995e7"
  },
  {
    "url": "assets/js/7.36a911e3.js",
    "revision": "0fa763882fb38d50aaaeb47ea5392c67"
  },
  {
    "url": "assets/js/70.0728bc12.js",
    "revision": "a7a620a242f5c609da364b95866a1e83"
  },
  {
    "url": "assets/js/71.ac999398.js",
    "revision": "6b4cd59baab1c75cf0adec05b5fd7f70"
  },
  {
    "url": "assets/js/app.ff03bced.js",
    "revision": "6d138796fd0050da7197ec98c8e9d379"
  },
  {
    "url": "assets/js/vendors~docsearch.d7e70b8a.js",
    "revision": "2fe8562dae5a049c6495decbe13e29aa"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "334bb75c6c55005f85bc452a52029135"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "d7db7047026699b50bfd96a6cb59b33e"
  },
  {
    "url": "comment/kinds.html",
    "revision": "7dc0afd75b37ef96cfd1f955f1eff773"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "51858bca863f52b6c040205252e3b548"
  },
  {
    "url": "consistency/index.html",
    "revision": "2bae7ecbe5e823b2fae6694ec11abaa7"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "d244291bfff9e51cd989544904e43b0a"
  },
  {
    "url": "logic/CQS.html",
    "revision": "4f479738cdb79e17580649dd8ebb6a66"
  },
  {
    "url": "logic/declarative.html",
    "revision": "6033c65bdde400d89f3d86f40336d8b9"
  },
  {
    "url": "logic/early-return.html",
    "revision": "d83b7aae807a61ab869f59a6fa16ab89"
  },
  {
    "url": "logic/immutability.html",
    "revision": "89f4c8d066dbfc1e4a39c08b8e346699"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "6c96e02970b2365780f9b8371536fc6f"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "fac06d758878d920186db8b948fc4b12"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "6b00f7daf837862290498814aded1df0"
  },
  {
    "url": "logic/pure-function.html",
    "revision": "c5fb44f6c0c9c43207b1a3b90238867e"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "f38971d1360f25e58307ce983f5b512d"
  },
  {
    "url": "logic/use-library.html",
    "revision": "fd867b1af1540f4b1002f5d02c6dd46d"
  },
  {
    "url": "name/concreteness.html",
    "revision": "2a40f67e4e50411a80cb97ac8894199f"
  },
  {
    "url": "name/index.html",
    "revision": "5fc09fa330480c89279bde778b0853d9"
  },
  {
    "url": "name/prejudice.html",
    "revision": "2c5ea759c71b1072d02e976f75b90536"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "b6f4a80d2a30a3f1f926668fae5fd07f"
  },
  {
    "url": "principles/DRY.html",
    "revision": "218d31a11ce95348adb127e6bcfdb602"
  },
  {
    "url": "principles/KISS.html",
    "revision": "000983984cb14cbbe26f2d4b8749533d"
  },
  {
    "url": "principles/PIE.html",
    "revision": "583e85298bd906f151affadb238451ba"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "3949193f0e70c0968423f558fe1d7214"
  },
  {
    "url": "test/AAA.html",
    "revision": "acb7f691cca6fe85fa71fc47c72e890f"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "1682a77a3ab3f1f42ab7b79e606266af"
  },
  {
    "url": "test/cross-check.html",
    "revision": "098ad1f732b8694b8ae708f723e5a4e1"
  },
  {
    "url": "test/index.html",
    "revision": "f5ccc451f8ef4c9b626b892054186fa1"
  },
  {
    "url": "test/naming.html",
    "revision": "d44d1864a2e21dd4475d8682ea509829"
  },
  {
    "url": "test/one-test-one-point.html",
    "revision": "8b184dcfa6b1be3fd0150f98b955338b"
  },
  {
    "url": "test/refactoring.html",
    "revision": "3ec620a6df08385e2bb92e986ec79eec"
  },
  {
    "url": "test/test-data-builder.html",
    "revision": "f3dd51f0fc293cb505a708d185c57f19"
  },
  {
    "url": "test/test-first.html",
    "revision": "a239ab0b1e37cd9057299f357093039c"
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
