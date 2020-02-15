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
    "revision": "9611def74c794ea07938ce5c8136f2cf"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.05cc16f2.css",
    "revision": "e1c1d1cbf44c1fb20c78292379e672af"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b8dd9372.js",
    "revision": "24cecc6e7bbcbf40dae068a8a5e41639"
  },
  {
    "url": "assets/js/11.15015007.js",
    "revision": "d1ef40b03a517de914a87be511f1a575"
  },
  {
    "url": "assets/js/12.28164a7c.js",
    "revision": "76cc9f2d4a4b6c0a37e7e9396a6c33ae"
  },
  {
    "url": "assets/js/13.205c410c.js",
    "revision": "1a84dd8bd6741804dae7fd8a7ceff40e"
  },
  {
    "url": "assets/js/14.0237e4c7.js",
    "revision": "e4a00e0d2f41cfa74a2ce003c52ded05"
  },
  {
    "url": "assets/js/15.6cd8954d.js",
    "revision": "2024d2c56a0a4e4dd307c9cd043c07da"
  },
  {
    "url": "assets/js/16.bfe28557.js",
    "revision": "700080dca7375382a8b4f3060f3238e0"
  },
  {
    "url": "assets/js/17.9f1806e0.js",
    "revision": "9cfbc09cbd861751d76fe0cad6f163ed"
  },
  {
    "url": "assets/js/18.b4aadebe.js",
    "revision": "febd5ce1c76751efdbbf6d0e0e7ac03c"
  },
  {
    "url": "assets/js/19.20a1f7fc.js",
    "revision": "81fbf5efd8342b9c52d163467875d261"
  },
  {
    "url": "assets/js/20.03158f43.js",
    "revision": "2d6c620633512f4fcef8c0ddc0792fa0"
  },
  {
    "url": "assets/js/21.2481844e.js",
    "revision": "035a00bfa467d751261ad6f9dba62185"
  },
  {
    "url": "assets/js/22.352ef839.js",
    "revision": "27b7fe4416482acf1c972e41fbd6bd34"
  },
  {
    "url": "assets/js/23.b0ba4184.js",
    "revision": "3faca835c3aa24fbc4d4e4abfd097ebb"
  },
  {
    "url": "assets/js/24.1cb66e30.js",
    "revision": "afd4e209215f17aa412234f627f4e328"
  },
  {
    "url": "assets/js/25.908294e2.js",
    "revision": "8068f304bc13f9f5e7c6b3115a071fec"
  },
  {
    "url": "assets/js/26.1358f6fa.js",
    "revision": "857abf158e0977003b2edef9cf915d56"
  },
  {
    "url": "assets/js/27.0241f793.js",
    "revision": "96f0e4da136cdce07ceb2e7d7e6729b6"
  },
  {
    "url": "assets/js/28.fb032155.js",
    "revision": "ff861d60a255383dcd5a195a185ca8e3"
  },
  {
    "url": "assets/js/29.3bfe2a34.js",
    "revision": "b7c0e8bb760b7449bd3359b1b2696ce7"
  },
  {
    "url": "assets/js/30.e353a3a1.js",
    "revision": "a187fc8c1bf57a92304f883e70e5f6a8"
  },
  {
    "url": "assets/js/31.db58431d.js",
    "revision": "71ce9f7be45290cdb6366859fd00a719"
  },
  {
    "url": "assets/js/32.22feab19.js",
    "revision": "48df69a8ebab9c6d6e4254598ae65aec"
  },
  {
    "url": "assets/js/33.8d1db9bf.js",
    "revision": "8a9544507abdfb5bd4692e6ef3ab056a"
  },
  {
    "url": "assets/js/34.446b418a.js",
    "revision": "fc1da7854497511233d3e5e86625f55b"
  },
  {
    "url": "assets/js/35.04469b0b.js",
    "revision": "11587fb0ed26b2d504af4a5576d211e9"
  },
  {
    "url": "assets/js/36.66c16d5f.js",
    "revision": "e09812ae14bf2c94dc58e53ad1d838bc"
  },
  {
    "url": "assets/js/37.78c00b39.js",
    "revision": "ca2a4b63a9dea662c832ab42fccf9d4d"
  },
  {
    "url": "assets/js/38.b967a661.js",
    "revision": "0830622fed7201b010908f419854a74c"
  },
  {
    "url": "assets/js/39.8ffd02dd.js",
    "revision": "01d35a4505e10f7bf42e39e94b373c2b"
  },
  {
    "url": "assets/js/40.00dafbcb.js",
    "revision": "bde2a4327eae8b8b383448777a7bd67d"
  },
  {
    "url": "assets/js/41.23d3f627.js",
    "revision": "3f1bb253135140141de53fd55e08247e"
  },
  {
    "url": "assets/js/42.4f0ba85a.js",
    "revision": "9b17dca86b611f4066afcb413222918a"
  },
  {
    "url": "assets/js/43.5bf48150.js",
    "revision": "1671ffe57fd35422ececcc920e7ce18a"
  },
  {
    "url": "assets/js/44.4bdf3b6f.js",
    "revision": "2012ce8c9a3bed1d56216a43a833cfc6"
  },
  {
    "url": "assets/js/45.b5550aa0.js",
    "revision": "2d4839223d889ffd74e278c2f5bccdd5"
  },
  {
    "url": "assets/js/46.65391fdb.js",
    "revision": "38b59f4e4e23cd036f675974be7b6126"
  },
  {
    "url": "assets/js/47.acc9dc24.js",
    "revision": "22a0ea447090b97a5aac4eb907fb19d3"
  },
  {
    "url": "assets/js/5.436630fa.js",
    "revision": "d7abe38c8f860705c9b882c868b370df"
  },
  {
    "url": "assets/js/6.d0d42734.js",
    "revision": "1ff63f98aefcfba8ba070c0b73107b28"
  },
  {
    "url": "assets/js/7.ce7f396e.js",
    "revision": "80c5c34f67ca518804db9b9021cf5fef"
  },
  {
    "url": "assets/js/8.588e0b3e.js",
    "revision": "b47362f343892f12ede8b21695116e53"
  },
  {
    "url": "assets/js/9.cfdfd6ec.js",
    "revision": "1d92ab3e7210557e1ec1c53953d288d0"
  },
  {
    "url": "assets/js/app.a96053d3.js",
    "revision": "5c9c8ab58b8edd7508ddbac32fd333ab"
  },
  {
    "url": "assets/js/vendors~docsearch.b5c6983c.js",
    "revision": "997b0d0377ba6c6c4fafdc697b15c0fb"
  },
  {
    "url": "assets/js/vendors~flowchart.54d14e41.js",
    "revision": "f2fd468ca687acdec709e4a79106dc37"
  },
  {
    "url": "assets/js/vendors~notification.942c8d9c.js",
    "revision": "477efabc9d7b7cb8c33078548ce83298"
  },
  {
    "url": "hero.png",
    "revision": "a77336361b60cc149e9ace8b8b4b0e0f"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "c43e39b763902305f3804a40dd159f3b"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "21a80f6ceac672c4a82930c9613a6605"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "2331c39670d1f341309feb68efb810dc"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "67175d6ec4dd6f8ee3940cfd3deba222"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "ff0b41cb3ef9840a70f7a6e3d7300a9e"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "fbc365349bcef573e5d0022e88807687"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "395d41cdac5985a7532effd9870e6579"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "9f124b61527cbe5d5af4f296dc7c875c"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "1391f8f9fc00bf52dfb1b562c34af3df"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "720e607a22e22860b5cc4003a8ca67e8"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "57ab7f29d6e98e62c0cea3a5265a19a0"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "6f3f0a47247ddf390b41d5e3f186007a"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "95637508ae0373b56c77b674e8862147"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "ad9f4441fb7af891c38d8165f876cb33"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "84e5edebbb4c7af4852a20f3ca4c918e"
  },
  {
    "url": "zh/index.html",
    "revision": "d27a828bd7aaed57679a25c2aa64109d"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "18e698bdfa98b6d76b8a5e03fa84a8e3"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "1800dd358c51a711a054c1f3c015f874"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "8793328f254650738ca61761c3cdce1c"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "e3e0f0516536f76c0783684f909404a0"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "85be49b3c666b98c09a3caf2415ddb27"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "e5fbf3aaa5b75e444d58f647d95573b1"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "bbb66ec010076271bbd669a7fef7d05b"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "9435ec5f1e1824f396643c9e7bb1392a"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "191890932e710f5755e748c6cd8cbbbb"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "c6a03122345854ee79a7f357ab05c360"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "43c1dd2a558847b2ee3a4917785adfba"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "459d8fc890f29c28db1362f0991a2cbe"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "1a8d0b13750f444cdc9ef2cfc2472b09"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "3167cfb114fbc29fb445d5223f117ec3"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "72cf4f38932f84f53e445eadf9236df2"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "f7d159042c927a57ec3c3e9eef792b5e"
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
