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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/bungy-blog.json",
    "revision": "3485c547e5785bf693a9df162d3a8dd9"
  },
  {
    "url": "assets/img/book-default.svg",
    "revision": "723c742a837c84a122e0fd3d9cf1167d"
  },
  {
    "url": "assets/img/favicon.png",
    "revision": "2fc93336e5f1dc5d00b6423eff6d2ba0"
  },
  {
    "url": "assets/img/header4.png",
    "revision": "74412cc4c6adb86cb77f7c557208874a"
  },
  {
    "url": "bucketlist/index.html",
    "revision": "cdcc50fc0a01e8e57287b76e4ad0e885"
  },
  {
    "url": "build/app.css",
    "revision": "3c8a6c7a9fb229c6219ac79e6bb92c52"
  },
  {
    "url": "build/app.js",
    "revision": "80446d436e5638d5ec24433a845920ea"
  },
  {
    "url": "build/app/287iyw7r.es5.js",
    "revision": "bac8eb031a50a8b400f5220eed4a71fb"
  },
  {
    "url": "build/app/287iyw7r.js",
    "revision": "26c2d5efc5b4780e14d2d155e045dce9"
  },
  {
    "url": "build/app/6nh1acd7.es5.js",
    "revision": "78a70a02c2837333d4c6cfd1c4c981a3"
  },
  {
    "url": "build/app/6nh1acd7.js",
    "revision": "cd47cb87dabed610152fdddf4e535978"
  },
  {
    "url": "build/app/app.bkya1ua1.js",
    "revision": "4174891ff38a57c660cbdc0beabc48a6"
  },
  {
    "url": "build/app/app.tmw8ri9y.js",
    "revision": "85ba475d8fe10d9882971955d429dbf5"
  },
  {
    "url": "build/app/bq6rb8mn.es5.js",
    "revision": "d0a236cd3d375f7c2512932e707ee82d"
  },
  {
    "url": "build/app/bq6rb8mn.js",
    "revision": "a02c26e55a314b93cd6c6ff299782a94"
  },
  {
    "url": "build/app/chunk-0064697c.js",
    "revision": "e93604b48beefd3f597170d8ab1fda53"
  },
  {
    "url": "build/app/chunk-27a2b96a.js",
    "revision": "050b877dac0f9b96d50c458782df75a5"
  },
  {
    "url": "build/app/chunk-7d177aa5.es5.js",
    "revision": "2b4709d8015f7c8d76a9ca02571b4790"
  },
  {
    "url": "build/app/chunk-8620c05a.es5.js",
    "revision": "21f942ed7df345817a93fd42fb700a6a"
  },
  {
    "url": "build/app/chunk-c93aabbb.js",
    "revision": "b1573c86cfe0bcfa66c5592e76bab4a4"
  },
  {
    "url": "build/app/chunk-f8d8f6ab.es5.js",
    "revision": "cfcfd4d2c54ee6843f9678513c2063f3"
  },
  {
    "url": "build/app/cuq5cixn.es5.js",
    "revision": "1ef7b2865c9b44f0bb9e819c352456db"
  },
  {
    "url": "build/app/cuq5cixn.js",
    "revision": "51719e4b199cebf6cb9afab3a14462a6"
  },
  {
    "url": "build/app/ghupxgl9.es5.js",
    "revision": "18e86fd82ae115e500e2c45b6e089a2a"
  },
  {
    "url": "build/app/ghupxgl9.js",
    "revision": "bbc2f4359cec0cf11650eda5a65dabfa"
  },
  {
    "url": "build/app/oqzrvjux.es5.js",
    "revision": "cfe477e3ba91093689cfeba7a64dfbea"
  },
  {
    "url": "build/app/oqzrvjux.js",
    "revision": "a4ccf6ce645ba44d084e37eafbb50039"
  },
  {
    "url": "build/app/s0zyzbg0.es5.js",
    "revision": "c742810765b5ec271a29fded2f7b9798"
  },
  {
    "url": "build/app/s0zyzbg0.js",
    "revision": "215f175edddbcf7c1c91f5b9860a1d07"
  },
  {
    "url": "event/index.html",
    "revision": "65f4c46c8d9c5a42f6abbaee473aa685"
  },
  {
    "url": "index.html",
    "revision": "8c496e65ab2fd7b76e86461e67a6a11d"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
