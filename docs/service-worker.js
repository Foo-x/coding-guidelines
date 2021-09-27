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
    "revision": "80dd2cddaba24e1b35d3f4bbb30eb98f"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "c12cff5c7290db735c3d72243e642df2"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "4ccce1e3a649dd9a3ab46d4c9e86d4f6"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "9b9d4ccab46527c2230746667a11c075"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "a7617ffb354e4be2906b0ac0751739fb"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "08002d73fe622ba3425efeb2d9f13d01"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "614e28b42b98408869aeaa1f4f34ea60"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "4af14efa50e70e6d6f64e8d1dc8f4557"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "9e940c9174e5c24a4111a021b3e8144c"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "dfcfb444d03a5444436d3807272415cd"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "dd5e462191a5fb10c5199942d0bfdda0"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "260c0b7b05b1cd89c55c4192da53c2c4"
  },
  {
    "url": "architecture/REP.html",
    "revision": "c62711b5e8dfbeac293cf1397b301165"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "6006a927aeca17a62cef75c05024be4c"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "43dfcd7c6f74e5fb76a1031ef3892c1b"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "5ee9d1e3a64ea08ee28fdaf396ae8fe6"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "c17ceb7e65181aae1bcfae6061127872"
  },
  {
    "url": "assets/css/0.styles.a3e0b06a.css",
    "revision": "dc8465169bb040c32b5beeb8da69061a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.684b0755.js",
    "revision": "caebbcb4927f4827fa0bc2eb25845005"
  },
  {
    "url": "assets/js/11.150a59f0.js",
    "revision": "d9e1152041503442dbd765792db677af"
  },
  {
    "url": "assets/js/12.bb4c59b8.js",
    "revision": "1f93113ec465ff459c4f66bf954ac0a1"
  },
  {
    "url": "assets/js/13.b415bf99.js",
    "revision": "37b4f42177cc9e647a998a9bb802dd55"
  },
  {
    "url": "assets/js/14.0bdb73a6.js",
    "revision": "75f24c0064f92103260716ba80fcfb32"
  },
  {
    "url": "assets/js/15.463d9354.js",
    "revision": "64f78740f0ca45372414a4ba407e6e24"
  },
  {
    "url": "assets/js/16.a0fb6b29.js",
    "revision": "55b6e9817083df9d775b3412ee67f22d"
  },
  {
    "url": "assets/js/17.3ed33f57.js",
    "revision": "c68e978de33a193597e0a253a20f61b3"
  },
  {
    "url": "assets/js/18.1f2e81b6.js",
    "revision": "217e16066cf602b9a7725cf9ea3dacbd"
  },
  {
    "url": "assets/js/19.5c39aaaf.js",
    "revision": "9269da57660845649772ecb6d7721c22"
  },
  {
    "url": "assets/js/2.c45a676a.js",
    "revision": "0f5678a1f33b3ff8012faaa81c4d243e"
  },
  {
    "url": "assets/js/20.2dcc169c.js",
    "revision": "fa56915dbef207e460a71e2a4c453aa5"
  },
  {
    "url": "assets/js/21.6181a9f8.js",
    "revision": "63af0dd25dc2bb3738fbd915d7752f43"
  },
  {
    "url": "assets/js/22.b2a8933c.js",
    "revision": "56b45a36e060e3a0cb505d9f65d969cf"
  },
  {
    "url": "assets/js/23.8fcde090.js",
    "revision": "fb766bfd3b588245c2bfd64a3005885f"
  },
  {
    "url": "assets/js/24.905b5538.js",
    "revision": "a902cb82bea65822438351eb1041e01d"
  },
  {
    "url": "assets/js/25.e3533583.js",
    "revision": "0786473477a170d04e52cbb1504dc7fb"
  },
  {
    "url": "assets/js/26.248b6c22.js",
    "revision": "1805faf7be65b5465b90e6da4d3c4275"
  },
  {
    "url": "assets/js/27.e145d69f.js",
    "revision": "07736d4eb69fe93baadfab3995af891b"
  },
  {
    "url": "assets/js/28.1f403e96.js",
    "revision": "d2d99a61eba5e388c563399ac28a670f"
  },
  {
    "url": "assets/js/29.270d5808.js",
    "revision": "e745d1c66f68751225740a7bf8503283"
  },
  {
    "url": "assets/js/3.58f2dc4d.js",
    "revision": "c5b8d5f91b77fb0ef87220cf9cc9d7ce"
  },
  {
    "url": "assets/js/30.db4c890a.js",
    "revision": "d1df0635d36aebfdd0c0f2245aecec22"
  },
  {
    "url": "assets/js/31.e70c6ab8.js",
    "revision": "5dadc059487a7858bce4ca7771faa6a1"
  },
  {
    "url": "assets/js/32.1c305381.js",
    "revision": "aff93124862fe7dba8afe15e03aa5ff3"
  },
  {
    "url": "assets/js/33.64e48004.js",
    "revision": "9d4da52da03220fdefd96669796e2867"
  },
  {
    "url": "assets/js/34.b76b4adc.js",
    "revision": "ccfef439adc5513db728ab09edf8ca0a"
  },
  {
    "url": "assets/js/35.82717e9e.js",
    "revision": "ee4fdb853cfdc2ef4155b3f470fe654d"
  },
  {
    "url": "assets/js/36.094adedc.js",
    "revision": "1f42d2db9e3ebd02d386a6f5d430976c"
  },
  {
    "url": "assets/js/37.d0ba99ec.js",
    "revision": "73e8b40d8b893f900baef6df998cf5ed"
  },
  {
    "url": "assets/js/38.d0be0321.js",
    "revision": "2e32f572545211d70e8e14f7fe6dea98"
  },
  {
    "url": "assets/js/39.926a72a6.js",
    "revision": "39c63ffaf36dbf45ac02b9b18dd2d71a"
  },
  {
    "url": "assets/js/4.fbb2a572.js",
    "revision": "fbe0841e9d6e07f494bb73e16b2fa7d2"
  },
  {
    "url": "assets/js/40.9040c343.js",
    "revision": "852c0109d432d589f5355a4459db6fdd"
  },
  {
    "url": "assets/js/41.fbb0d820.js",
    "revision": "0a0f9fac90210eb2098231d54a854ee6"
  },
  {
    "url": "assets/js/42.68d98f41.js",
    "revision": "21384ca8dc9e9128abdfc21ebe84cde4"
  },
  {
    "url": "assets/js/43.81cf2bd5.js",
    "revision": "223ac4e85267e5ded18e50e772381e56"
  },
  {
    "url": "assets/js/44.e98a8737.js",
    "revision": "bd3bf9c412da9aeecba34a765d03b0af"
  },
  {
    "url": "assets/js/45.5934d6cc.js",
    "revision": "c17050de48fd8e53202744df5b7f4926"
  },
  {
    "url": "assets/js/46.0f3f0143.js",
    "revision": "4dc43b0ea26c8b26ae6d4f9531639d6d"
  },
  {
    "url": "assets/js/47.5c20e9cd.js",
    "revision": "3a8bbca47fc8f5e5ccd55df15c1dd025"
  },
  {
    "url": "assets/js/48.8eb3689a.js",
    "revision": "308fefb21b80a81b72875247aae9f36f"
  },
  {
    "url": "assets/js/5.326e75d1.js",
    "revision": "63ecc404da9aff86a9fe62daa84a7cc0"
  },
  {
    "url": "assets/js/6.4cb9ef16.js",
    "revision": "f940c140fdd7ea46598f16e5ff720434"
  },
  {
    "url": "assets/js/7.63037ef1.js",
    "revision": "514bd0317527a5b8ffb074a0465985bb"
  },
  {
    "url": "assets/js/8.5d4b33b0.js",
    "revision": "7e8dd99369f10692be252296bc78788e"
  },
  {
    "url": "assets/js/9.b139491b.js",
    "revision": "16e5ddce685b6ea7341e3ebc7c1a9d4b"
  },
  {
    "url": "assets/js/app.6c8699ce.js",
    "revision": "194e493f95740dc3e510aac98b9d3d29"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "5e5f0e5f603a45dcc417131c94cccf12"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "930b18aa95c8c49b68956d0949d04f3f"
  },
  {
    "url": "comment/kinds.html",
    "revision": "c8ceec15353da5123b4708ae38943eda"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "324c8d880174c88fd522536f2f01aafb"
  },
  {
    "url": "consistency/index.html",
    "revision": "9b417f663b91a2b4e19f229d95ce5614"
  },
  {
    "url": "favicon.png",
    "revision": "79950d6acd0cbee8b721e1ffff0c335f"
  },
  {
    "url": "index.html",
    "revision": "0be11b1c42dfc26dd8fa581cdb18b4fd"
  },
  {
    "url": "logic/CQS.html",
    "revision": "7abf4925f495e960d956e5e9fc9377f1"
  },
  {
    "url": "logic/declarative.html",
    "revision": "a9ea62199190cdf6caa6ac82dd2486c5"
  },
  {
    "url": "logic/early-return.html",
    "revision": "6682f027b9702539626a900f50126f5a"
  },
  {
    "url": "logic/immutability.html",
    "revision": "fcd64c3e74036d9f4ba8895bfbc41ff4"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "5da4c0701dedbb6e895c89b8e40d4acf"
  },
  {
    "url": "logic/premature-optimization.html",
    "revision": "3c0746405845ab9d9fb99fe5040de5b1"
  },
  {
    "url": "logic/programming-by-contract.html",
    "revision": "41b6edeadaeb802b18d044c3186229ff"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "8bbde100781be8ead37043ea8ee4b313"
  },
  {
    "url": "logic/use-library.html",
    "revision": "ffbcc9b3d6b364887d21a88ba6b1cee6"
  },
  {
    "url": "name/concreteness.html",
    "revision": "404d1907cb2ba94da57ac92134e57770"
  },
  {
    "url": "name/index.html",
    "revision": "14b6ec1b136c4041e2e914c454fd6e97"
  },
  {
    "url": "name/prejudice.html",
    "revision": "ae1af6f5e2261bde037b48ae40017b4c"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "bfab830ba7c439da484f81f5f258fb5f"
  },
  {
    "url": "principles/DRY.html",
    "revision": "22ca6be3833c1562c1de6c9e205edd11"
  },
  {
    "url": "principles/KISS.html",
    "revision": "84a832b37b1859860c07fd0cfac46780"
  },
  {
    "url": "principles/PIE.html",
    "revision": "763485a5ff3ec5191cbf578fc6dea9d2"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "699ee6dd6420adee954e9f4b29f9969e"
  },
  {
    "url": "test/index.html",
    "revision": "89c0f21a3e80ccb2614ee9caa80c319b"
  },
  {
    "url": "test/refactoring.html",
    "revision": "ebb1c601bf3ca260bc3e374e8bb65863"
  },
  {
    "url": "test/test-first.html",
    "revision": "d2d7073b491dde43f42acdc227b0aaa2"
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
