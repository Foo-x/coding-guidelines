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
    "revision": "c40c7bd97a093cf5d927c92e20ef38f4"
  },
  {
    "url": "architecture/ADP.html",
    "revision": "815bdc0c30db1f8e24c4378b7ad716ae"
  },
  {
    "url": "architecture/CCP.html",
    "revision": "d354527aa683bf5417bafce0bfad9930"
  },
  {
    "url": "architecture/CRP.html",
    "revision": "ea0d7dbcdb8cf73e5a68823d89b12ce0"
  },
  {
    "url": "architecture/DIP.html",
    "revision": "dd9608526e76c40ccd508314087044d2"
  },
  {
    "url": "architecture/hiding-information.html",
    "revision": "7a772db05de65f2f06e9f6e1319fffb4"
  },
  {
    "url": "architecture/ISP.html",
    "revision": "e95761c962ff1f6d62ae9ac1fb3db684"
  },
  {
    "url": "architecture/LSP.html",
    "revision": "1cb2312d7e452024d74488cba3e05733"
  },
  {
    "url": "architecture/minimize-fields.html",
    "revision": "3c3706646989d801a5fcf7fe0415477a"
  },
  {
    "url": "architecture/OCP.html",
    "revision": "a5458d78e70f7a40b0fe91804dd73a99"
  },
  {
    "url": "architecture/one-method-one-task.html",
    "revision": "8f441f0f2c41a8b43a947fd6ad33aae8"
  },
  {
    "url": "architecture/REP.html",
    "revision": "07c6435dddb04c472edce00e006f73dc"
  },
  {
    "url": "architecture/SAP.html",
    "revision": "661de249417a622e76d01da6607ea8f0"
  },
  {
    "url": "architecture/SDP.html",
    "revision": "aa1a7f8c005943c860b4530e849b51ff"
  },
  {
    "url": "architecture/SOLID.html",
    "revision": "998abec16e4265e4289a763324280492"
  },
  {
    "url": "architecture/SRP.html",
    "revision": "9fbdfdad69c5d8c7ace0f7f7ac1c50fc"
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
    "url": "assets/js/41.9c4d742e.js",
    "revision": "191a43a5fa19ee34710f73cad6fca8b6"
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
    "url": "assets/js/app.d0fad05e.js",
    "revision": "8f405621de2ca3a08d83593e4169e141"
  },
  {
    "url": "comment/elimination-of-explanation.html",
    "revision": "77eefc2f11b562838c5dc87ded138852"
  },
  {
    "url": "comment/elimination-of-redundancy.html",
    "revision": "e9284c0239fa35c012a53a3a0c1d8669"
  },
  {
    "url": "comment/kinds.html",
    "revision": "8bbd798b9b01821332d227bba904af0d"
  },
  {
    "url": "consistency/conventions.html",
    "revision": "1fd8af9cdd383e7cdf7728133b7e0fae"
  },
  {
    "url": "consistency/index.html",
    "revision": "3ae404cbfeebfed489d2670aa940c844"
  },
  {
    "url": "consistency/vertical-line.html",
    "revision": "6010be5653bf1cbc7ec3e4d9dfe26051"
  },
  {
    "url": "favicon.png",
    "revision": "ceb76f9b7ceeea6b9c2dd0c53bbdba5a"
  },
  {
    "url": "index.html",
    "revision": "d4147974862ec269563aed5926f09072"
  },
  {
    "url": "logic/declarative.html",
    "revision": "0ed8f6fad4ac68058ccb354a63a9a914"
  },
  {
    "url": "logic/early-return.html",
    "revision": "8e01e8de73d0fcfd48a7774086ab406d"
  },
  {
    "url": "logic/immutability.html",
    "revision": "8bdf54abef70ad8878d9710960929fb1"
  },
  {
    "url": "logic/order-of-if-expression.html",
    "revision": "b97eb914d807072d6a0c4f384aed3092"
  },
  {
    "url": "logic/shrink-scope.html",
    "revision": "c891e913768d05402465398ec304f537"
  },
  {
    "url": "logic/use-library.html",
    "revision": "86af0002e275de3a73d14cd1a31a394f"
  },
  {
    "url": "name/concreteness.html",
    "revision": "8c5df62f4019e85456fb7c84a1a9e2e3"
  },
  {
    "url": "name/index.html",
    "revision": "8a654d121ca253f97e0caca1db40891e"
  },
  {
    "url": "name/prejudice.html",
    "revision": "af5a35e081df6d1f6ced696339b1dee0"
  },
  {
    "url": "name/prohibit-abbreviation.html",
    "revision": "31c26dee4d0aa7007e5e17c8228433e1"
  },
  {
    "url": "principles/DRY.html",
    "revision": "ec240c81b92833f95cfcd271aeeb031f"
  },
  {
    "url": "principles/KISS.html",
    "revision": "7870339c75963b6b399bf2273e3ee6cf"
  },
  {
    "url": "principles/PIE.html",
    "revision": "d7379ffcdf0750f7fc04328e68d4f940"
  },
  {
    "url": "principles/YAGNI.html",
    "revision": "7cf43bd2e75e87730f88db1d57800869"
  },
  {
    "url": "test/index.html",
    "revision": "66b4e19448895a62e8ba61446aebad28"
  },
  {
    "url": "test/test-first.html",
    "revision": "119ec9fb095adb61d746d096c30ba7eb"
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
