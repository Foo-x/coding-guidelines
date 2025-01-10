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
    "revision": "33eaf4e49ea5ec2f8d9e424f81876a48"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "14b1f6e67dc34f86c3e651aff88ee070"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "05fb7a896e07f7e18972ae04b7720891"
  },
  {
    "url": "architecture/clean-architecture.html",
    "revision": "b6d5473955ac4fd5efa9c5862f5a70ac"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "80f16cd0e4164e9e692044a2b7c5b59f"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "2e527f7b759a36becf2e5e1bba8371a6"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "41fb8f0a7978472090e7041b889918a6"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "2ca04bca634123c19a29d628217f7021"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "3a9f40cb2152f93e1f2c2119dd51a1fb"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "83a3ae751b0a80968ab7a3c1fa17df66"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "72b29c4e233060e4b437dcf39f6b50ea"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "e2aebd3810ab82d1270b0a0207dc853c"
  },
  {
    "url": "architecture/principles-of-package-design.html",
    "revision": "31cb6abf79d7c82e39c5be772247e63c"
  },
  {
    "url": "architecture/REP.html",
    "revision": "8eabf2185777f9317e7f29e317758163"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "01774b795de2ee474b340af0bf552a86"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "b4413ce6bc8368b75d7ee7cf7755936a"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "cf2311bc57d147994ea44a7f751dddb0"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "b7305b4492929a76ab9dc56239df8aee"
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
    "url": "assets/js/23.2b727ac7.js",
    "revision": "691b41fa9fdefb4848304dd6e575e62c"
  },
  {
    "url": "assets/js/24.1b31c195.js",
    "revision": "ec006fe1f988e7dcbf9c53c126da6820"
  },
  {
    "url": "assets/js/25.c34165af.js",
    "revision": "8f657572cfee2faedd7f0b297548e7db"
  },
  {
    "url": "assets/js/26.469a32de.js",
    "revision": "be468ab985a61d053315f2aa6a1b6b1c"
  },
  {
    "url": "assets/js/27.8f23627e.js",
    "revision": "5d70e74bed954d41d816c77cc58af508"
  },
  {
    "url": "assets/js/28.184f452e.js",
    "revision": "4392f2b2d059fcc1de08843b1282099b"
  },
  {
    "url": "assets/js/29.aa374743.js",
    "revision": "2a916c11a29a7656a6962be3a2a58bb4"
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
    "url": "assets/js/31.66e3c6da.js",
    "revision": "945c499b3091ea13c6e09ed011a94555"
  },
  {
    "url": "assets/js/32.d06054c6.js",
    "revision": "1ae009ebef21af8d5b36073238fd6818"
  },
  {
    "url": "assets/js/33.040ee096.js",
    "revision": "cf8ca997a07966d714a36372a526d098"
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
    "url": "assets/js/36.c145fc67.js",
    "revision": "2b8a0da2d02f8c4178119c72f72d2c83"
  },
  {
    "url": "assets/js/37.ffa9d1e7.js",
    "revision": "6988fd18a627be73496552acc9c5155c"
  },
  {
    "url": "assets/js/38.dbbec7e4.js",
    "revision": "0e1139a7e88466b2be510a635bb61a54"
  },
  {
    "url": "assets/js/39.61997a91.js",
    "revision": "0f5bc418c95e7aafa199366785b39e1e"
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
    "url": "assets/js/41.dcf4e712.js",
    "revision": "bee5e4cd774bd2345de026acb840661d"
  },
  {
    "url": "assets/js/42.ea404fbf.js",
    "revision": "50d37593204232b0e19008cbe87fc7fa"
  },
  {
    "url": "assets/js/43.a8267a18.js",
    "revision": "8f436762003649fac98c442b931c59fa"
  },
  {
    "url": "assets/js/44.d35d0d1f.js",
    "revision": "d9a19386872701f3a41f6a64553748e2"
  },
  {
    "url": "assets/js/45.666f2b22.js",
    "revision": "1daf22739eaa83e4d64148470df7cc07"
  },
  {
    "url": "assets/js/46.8ca51fd5.js",
    "revision": "f54252938d69eb0e4285702eee36c3cc"
  },
  {
    "url": "assets/js/47.fc757e24.js",
    "revision": "9bd5ac7940e1068b0f9edfb3c6312f7c"
  },
  {
    "url": "assets/js/48.faf68700.js",
    "revision": "24411b5c99f2cf8b1b5727313eb810b3"
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
    "url": "assets/js/50.708a597f.js",
    "revision": "1fd2f46e34b54bddbafb3c6625f3177d"
  },
  {
    "url": "assets/js/51.4b77d6f1.js",
    "revision": "a36efa0e5aec458905911a7abf823249"
  },
  {
    "url": "assets/js/52.6e190704.js",
    "revision": "35c0075709568b3afeeb99d8b163680c"
  },
  {
    "url": "assets/js/53.9c0db0f3.js",
    "revision": "5e680a707f66ca9d856c978c644815d7"
  },
  {
    "url": "assets/js/54.71dad921.js",
    "revision": "94728b3f773d1d385cd46d6e9bf6925b"
  },
  {
    "url": "assets/js/55.d9bef22e.js",
    "revision": "94595417a2a30a7ba9728e7a28540da8"
  },
  {
    "url": "assets/js/56.7de5d9ea.js",
    "revision": "e291d392df963b881d19cac0a6733dee"
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
    "url": "assets/js/60.ddea40f6.js",
    "revision": "6998d7864a14eeade8a4f5f475441c08"
  },
  {
    "url": "assets/js/61.c69267ab.js",
    "revision": "b21ba5061ecdae191eb1c3c63222700a"
  },
  {
    "url": "assets/js/62.1f6d924c.js",
    "revision": "afc033b9d27d6ccbd8298d4e3e0b70f7"
  },
  {
    "url": "assets/js/63.a0d522cb.js",
    "revision": "fe5c551cc37f0bb647a3dfe0f2387515"
  },
  {
    "url": "assets/js/64.974e91bf.js",
    "revision": "79308ea8722e16c0d3ed0885342245f2"
  },
  {
    "url": "assets/js/65.7fd79be4.js",
    "revision": "db7b4312a0eca149b06fc51b5f177b8c"
  },
  {
    "url": "assets/js/66.f2ed4059.js",
    "revision": "8338f314b17966f1ebd2350eaa754f68"
  },
  {
    "url": "assets/js/67.b0834b81.js",
    "revision": "966cdc33c7772d31954a5ffdd2c94099"
  },
  {
    "url": "assets/js/68.1fe6c3b0.js",
    "revision": "56f7c2155573677264e3ef52a19acee7"
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
    "url": "assets/js/70.bb48cbe2.js",
    "revision": "c6a5f0c921a1920346a2eb58c9f93989"
  },
  {
    "url": "assets/js/71.8420e2d1.js",
    "revision": "09ad172436ddea5a0155368881ee06d1"
  },
  {
    "url": "assets/js/72.79dcd517.js",
    "revision": "4204e7f3d60d8ca10380068d715022e8"
  },
  {
    "url": "assets/js/app.a715b9bd.js",
    "revision": "9509711747fc50d6840ed8a1eebcbb51"
  },
  {
    "url": "assets/js/vendors~docsearch.50a7a736.js",
    "revision": "2fe8562dae5a049c6495decbe13e29aa"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "17996779c3d6a7550487e153b50b8eaa"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "035c83dce93cc6ff485ad20066db2e24"
  },
  {
    "url": "comment/kinds.html",
    "revision": "2e7b0ee0648c4adb0ff30d666d94d83e"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "c68cf032772060a5d8ff613da7fcd414"
  },
  {
    "url": "consistency/index.html",
    "revision": "fe289072751113d82139c9ff4e920af4"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "11fdbe685ff8e3df01e1a3ef1bc369b7"
  },
  {
    "url": "logic/CQS.html",
    "revision": "121526ff5dcf5a223f64cda8ca3ff704"
  },
  {
    "url": "logic/declarative.html",
    "revision": "3407f2e2289f050765a300be1ce5e9eb"
  },
  {
    "url": "logic/early-return.html",
    "revision": "f409da0ee489301fb69520525f5a68ed"
  },
  {
    "url": "logic/immutability.html",
    "revision": "db92bfcb0c471bae03795cf387c081e6"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "a2d6a15119cd7721fc430d5c61198699"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "c0fd972ba2a2e1a8c46efc60055dd6c4"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "5d3d5e970206bb0280524fb4c5120727"
  },
  {
    "url": "logic/pure-function.html",
    "revision": "6d3395ce7866c9abe8a2241db71253b7"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "f6005fbd3a7f070bfce031363486f4e0"
  },
  {
    "url": "logic/use-library.html",
    "revision": "4df9f6e9abba8108f486178faccd2e93"
  },
  {
    "url": "name/concreteness.html",
    "revision": "9543eae5f6006504c60f2524e683352e"
  },
  {
    "url": "name/index.html",
    "revision": "361b415e4da4e50332f76c3d39a551df"
  },
  {
    "url": "name/prejudice.html",
    "revision": "40dee50c1ff0b4bc7d299e3e09b17301"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "2791bef11fa0961b9d7a0e33a48db1c6"
  },
  {
    "url": "principles/DRY.html",
    "revision": "fb25e86156c3f74ddaec514c39efe969"
  },
  {
    "url": "principles/KISS.html",
    "revision": "d7c7f44229e1bbbcb2057ad1048fbcee"
  },
  {
    "url": "principles/PIE.html",
    "revision": "4cde0a82d76dfe43d0e224f6c57013b8"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "46ba266bc2d32491e82fd8c6dc5d6571"
  },
  {
    "url": "test/AAA.html",
    "revision": "c83d3500726ccb052cf12951aaf326c1"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "15020384c820e1788dbfa8dd47842fe5"
  },
  {
    "url": "test/cross-check.html",
    "revision": "e67f45da93a137ba398af4d0b3f573f8"
  },
  {
    "url": "test/index.html",
    "revision": "252a79bcb898fb3dc5470e43995b18aa"
  },
  {
    "url": "test/naming.html",
    "revision": "52bd6a03808dc90df36d55ffc1ce5e6c"
  },
  {
    "url": "test/one-test-one-point.html",
    "revision": "8a6042892893f8933345c34c5666cad9"
  },
  {
    "url": "test/refactoring.html",
    "revision": "5d42374708d48ab3e4c691315905fa3a"
  },
  {
    "url": "test/test-data-builder.html",
    "revision": "dc564af38fe8a6ac1c9e5eff8f4b2055"
  },
  {
    "url": "test/test-first.html",
    "revision": "d8476d0702a2c0ef4dc184ef5e2eba29"
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
