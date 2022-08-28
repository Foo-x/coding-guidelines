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
    "revision": "2268327e48d215c5b35767fc1900da7f"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "93f05c498c23b2479daf72cbfc4bc61a"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "cabe7bb6397d05f381af8733a0d3ee51"
  },
  {
    "url": "architecture/clean-architecture.html",
    "revision": "c65b8f626f8b184c60fe78e7f6739f9b"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "77cec9b74a515ec443e269125a5f4151"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "ef928a3cd7f268bfa44d7e882fba6f17"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "2b7ef5be087d13280a4ad159064f32fb"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "9ec715df68c855ba29671c4739866670"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "211bd0d0c39060b47b758746ae751e44"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "14b78bc1e202a9a826998e3a2c4ebed5"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "38c39a579a16562c47f8905dab6620f8"
  },
  {
    "url": "architecture/one-function-one-task.html",
    "revision": "9f99d436b1a398eed822ea1dcd8c9ac9"
  },
  {
    "url": "architecture/REP.html",
    "revision": "bf0a4249c814ada8403246144cf4970e"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "33254d01ef18944465b59ddd5e059dfa"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "7e9aa3383789251cf83e20ede4930fb1"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "2096f14b5f53ca472bc79af41b44c125"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "cb58c5c907087ad50a9eb25be98a533b"
  },
  {
    "url": "assets/css/0.styles.1355772a.css",
    "revision": "a5d107cf709d7e4b173870b2c39ac693"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5a736c94.js",
    "revision": "6679fa1b926e321b4413d8f0993a0587"
  },
  {
    "url": "assets/js/11.37bfd805.js",
    "revision": "3f00e20741e69e86c53252849d6983bf"
  },
  {
    "url": "assets/js/12.d6d233dd.js",
    "revision": "d4ebc274bea14b20ee1b15a003ed8894"
  },
  {
    "url": "assets/js/13.19a5fc87.js",
    "revision": "64d2361c487c0a595663238ca4690d6f"
  },
  {
    "url": "assets/js/14.b3b2fca4.js",
    "revision": "6eff102c5386972f91941d942113d1d3"
  },
  {
    "url": "assets/js/15.117b5bfb.js",
    "revision": "79867de2effebbdc4bee3bef041d01bc"
  },
  {
    "url": "assets/js/16.0200225b.js",
    "revision": "bed7af62f4bc7d0987f9c330ada3c33a"
  },
  {
    "url": "assets/js/17.19837e0f.js",
    "revision": "4f7543c77d3c953c422933ac62dad99e"
  },
  {
    "url": "assets/js/18.e8f75b94.js",
    "revision": "b4aef14f1f0b0a7fe89f057db79e60f4"
  },
  {
    "url": "assets/js/19.e4c91662.js",
    "revision": "57c70739141d0529659b8129cfa366ee"
  },
  {
    "url": "assets/js/2.65c3bf9f.js",
    "revision": "ba1d680204f82818fdbc2d364f678a81"
  },
  {
    "url": "assets/js/20.a51eb4d9.js",
    "revision": "ad6653ec1c2a6051228508b96cb475da"
  },
  {
    "url": "assets/js/21.24a876d7.js",
    "revision": "6715fe6f4070617de134b7feed67fbfb"
  },
  {
    "url": "assets/js/22.e5f65ddc.js",
    "revision": "92b15d48bb3d5e7376b2cde5f0b24b2c"
  },
  {
    "url": "assets/js/23.f065d7d4.js",
    "revision": "f5798192003648910da2e39144c3af59"
  },
  {
    "url": "assets/js/24.0d95bfca.js",
    "revision": "eb1f85d6a286d87b46c9bf3d9e6926a7"
  },
  {
    "url": "assets/js/25.f34e7596.js",
    "revision": "763fae396979e00b8f12d7ebdabb03cb"
  },
  {
    "url": "assets/js/26.62239754.js",
    "revision": "429f6a7dbb2ab980d7c2d1ff032fe2f1"
  },
  {
    "url": "assets/js/27.75978437.js",
    "revision": "981d585a0d8e8263bad3097b7f2e7f59"
  },
  {
    "url": "assets/js/28.d364cf2b.js",
    "revision": "5475c4ecfd19c5cea32ea7466da7bdea"
  },
  {
    "url": "assets/js/29.f20e0494.js",
    "revision": "54412d8953f36a64824056f769749200"
  },
  {
    "url": "assets/js/3.fdded237.js",
    "revision": "5d3d9b3802d92c546089b6191de2b4de"
  },
  {
    "url": "assets/js/30.ecee7053.js",
    "revision": "7d78584f23eaf3a853dee9cdb0ef19c5"
  },
  {
    "url": "assets/js/31.701e4abe.js",
    "revision": "aa936f9391478a4df03aadf1eda3a817"
  },
  {
    "url": "assets/js/32.b13436d9.js",
    "revision": "0409d2126536d1a2aa1dec2ca1409e03"
  },
  {
    "url": "assets/js/33.4a6c04fe.js",
    "revision": "4ae48866a8bac98d93f844708c70bc46"
  },
  {
    "url": "assets/js/34.f62c38c3.js",
    "revision": "e2dc1045da72c45a1d6c1ee51676a2d8"
  },
  {
    "url": "assets/js/35.cd40502a.js",
    "revision": "c44da3ab66c2cf659d2d7b6ce2c687dd"
  },
  {
    "url": "assets/js/36.a5e5d79e.js",
    "revision": "8d229940677c884ff4b7c604e68010fc"
  },
  {
    "url": "assets/js/37.328e994e.js",
    "revision": "3ef4bea8238d1b2f549fece4a6f23db8"
  },
  {
    "url": "assets/js/38.58d3b28d.js",
    "revision": "4271d67385b9ac10a47dc02db39c5d46"
  },
  {
    "url": "assets/js/39.d54d80be.js",
    "revision": "47de2311f14e778eec33b6747e8ec0eb"
  },
  {
    "url": "assets/js/4.4732a51a.js",
    "revision": "9599a544b1d3cc88fd7e5587b999c3fd"
  },
  {
    "url": "assets/js/40.3f7046cf.js",
    "revision": "a6a145660a399eab0e6aa247e32f3cf5"
  },
  {
    "url": "assets/js/41.9cbad495.js",
    "revision": "2787bc0d5ea2005e2836bfc9b0f9f92e"
  },
  {
    "url": "assets/js/42.e2a84129.js",
    "revision": "641df417df5f5e7381d2990099e12ca5"
  },
  {
    "url": "assets/js/43.aba501f9.js",
    "revision": "f08066cd26006d52ae2d4569ebdf20fb"
  },
  {
    "url": "assets/js/44.4315f7af.js",
    "revision": "f99275b28d4e2dd99662b4929082789d"
  },
  {
    "url": "assets/js/45.50810340.js",
    "revision": "c29a8f05ea2439c00178f14d78ca2056"
  },
  {
    "url": "assets/js/46.8dfbe4ce.js",
    "revision": "f1158be024a4b5cf5fd4f44c1189391b"
  },
  {
    "url": "assets/js/47.656684d6.js",
    "revision": "fac70cdfc6d804fd3011bbedbd735860"
  },
  {
    "url": "assets/js/48.d3e2f3a3.js",
    "revision": "d40426a8e65a478e69e4a61fa175639b"
  },
  {
    "url": "assets/js/49.25c4d0a4.js",
    "revision": "f22cfae4095623aa65c0bb11d855b2ad"
  },
  {
    "url": "assets/js/5.db83cfa0.js",
    "revision": "468d3c8751ff1cd3b14ad0d493293903"
  },
  {
    "url": "assets/js/50.dbd35c01.js",
    "revision": "d8d4ba741c46b9487b463a5015d86b09"
  },
  {
    "url": "assets/js/51.cbeef780.js",
    "revision": "24632fa9f3963c0bcbf4f318a94fefc7"
  },
  {
    "url": "assets/js/52.0767b382.js",
    "revision": "4b6f7b26762013f20e3059bda8400f64"
  },
  {
    "url": "assets/js/53.d9e5565a.js",
    "revision": "91fb63df6623b1212946d033d41951dd"
  },
  {
    "url": "assets/js/6.713a79f0.js",
    "revision": "e2fca6d17d5e02ea4f4f9645a1b32380"
  },
  {
    "url": "assets/js/7.fe697b84.js",
    "revision": "b5c2b58ef98317532a270f146e337c32"
  },
  {
    "url": "assets/js/8.9757480d.js",
    "revision": "0893778b72e806edbc84e0784fc49921"
  },
  {
    "url": "assets/js/9.7bfdff2b.js",
    "revision": "c90f1e64353b9ad8a5aa7706e058e0df"
  },
  {
    "url": "assets/js/app.87fc30e1.js",
    "revision": "98449205cefbee083c310d1ae05b9938"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "00fd3a5511861f435059dbc402be6563"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "a46402bd6a5a80f3086d4779aa228b47"
  },
  {
    "url": "comment/kinds.html",
    "revision": "a538e2d2a7927dff88aa9d3f64c2c0ef"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "0e2273cff0e5b7d4387920be59cedb99"
  },
  {
    "url": "consistency/index.html",
    "revision": "9670d9ec34b0a3ad8d0fb8145b5cea88"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "7af1bf2c7c1efcae5a4b7bbca9c8dcf8"
  },
  {
    "url": "logic/CQS.html",
    "revision": "12a34b08ef7dd7e46b1ccc8934f0cc23"
  },
  {
    "url": "logic/declarative.html",
    "revision": "1be238dcb153e5e2be072d9ff8acbace"
  },
  {
    "url": "logic/early-return.html",
    "revision": "78f220c00270830867e61bbd00b306bb"
  },
  {
    "url": "logic/immutability.html",
    "revision": "962508e12b7e36c22e801a337bff4f52"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "ce4d69c57a3c9cf883b59ab06dfebc5b"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "1585b5f8182e4b5dbd8fa8406370db26"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "128b75c2ee8fae2b62361d27e9e12514"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "ba201fd51da32063440dc05a4406570f"
  },
  {
    "url": "logic/use-library.html",
    "revision": "50d983d9507d7cd9027f2d4f409f3007"
  },
  {
    "url": "name/concreteness.html",
    "revision": "11256fb2c455e5b3ed0e5c681b0b3b28"
  },
  {
    "url": "name/index.html",
    "revision": "9d2c3c624c190cdd87d4525bfa969523"
  },
  {
    "url": "name/prejudice.html",
    "revision": "0b2041c5a7d2915a0c00b137a3e647b4"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "cf46dc35e15a298cce6539d4bae4a8b6"
  },
  {
    "url": "principles/DRY.html",
    "revision": "c4dfa649f3ebf044f81eb1cd8fc2c3f5"
  },
  {
    "url": "principles/KISS.html",
    "revision": "706968eb39a7bea454c4f3efcff2f035"
  },
  {
    "url": "principles/PIE.html",
    "revision": "d71ed71af03e032a44e8de22c71963cd"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "1b8531d8ce370ed5bb862b02181a6e5d"
  },
  {
    "url": "test/AAA.html",
    "revision": "a3b545513e0988ce29ce0973676eb2c2"
  },
  {
    "url": "test/avoid-logic.html",
    "revision": "b60a251bcb860fc48279f20df62d3f84"
  },
  {
    "url": "test/index.html",
    "revision": "e51d0bcc4c2ee742369f4f4aca024c4b"
  },
  {
    "url": "test/naming.html",
    "revision": "73b6b8069725004c42b8409db56990ea"
  },
  {
    "url": "test/one-test-one-assert.html",
    "revision": "64ed5033024acbf5a516a452819327e0"
  },
  {
    "url": "test/refactoring.html",
    "revision": "6de32fe33966686e0219ce3220e5609f"
  },
  {
    "url": "test/test-first.html",
    "revision": "20c353e19ff8c78de114431a545f5d32"
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
