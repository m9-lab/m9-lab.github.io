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
    "revision": "300a6683a2fe959d95a2f10cbc9ef877"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.a479ca9d.css",
    "revision": "e1c1d1cbf44c1fb20c78292379e672af"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cc998fb0.js",
    "revision": "d21b8fa657e506c571f6c05451bb0789"
  },
  {
    "url": "assets/js/11.f023b7f4.js",
    "revision": "a0093c501f3c1c390b856c53dc048d73"
  },
  {
    "url": "assets/js/12.20d44d7b.js",
    "revision": "18995bf6c15dca38d2b4ec7aedb65fd0"
  },
  {
    "url": "assets/js/13.fd5df4ac.js",
    "revision": "ebb1642840f3c3a8820792a702bb2012"
  },
  {
    "url": "assets/js/14.fb118e9b.js",
    "revision": "377463a29fe6d04da2d1795ce40cd84b"
  },
  {
    "url": "assets/js/15.894c7a98.js",
    "revision": "8ff882ccaf0ae36526a77e98933e3533"
  },
  {
    "url": "assets/js/16.301bc249.js",
    "revision": "663106ee76a174d32fa62efe122b7960"
  },
  {
    "url": "assets/js/17.a176933f.js",
    "revision": "597729b32ac0f269a66314ace5f82081"
  },
  {
    "url": "assets/js/18.5bdc5564.js",
    "revision": "185352c650af548c84be647892147209"
  },
  {
    "url": "assets/js/19.63dcfbc9.js",
    "revision": "81fbf5efd8342b9c52d163467875d261"
  },
  {
    "url": "assets/js/20.d0aaa2a5.js",
    "revision": "edee4c72fd3bffc8f691eb12a46f2a4f"
  },
  {
    "url": "assets/js/21.d1700e22.js",
    "revision": "8fedfadb4034048992925ebb54b9bf55"
  },
  {
    "url": "assets/js/22.0c709000.js",
    "revision": "aa9371aa4bcae6f607ab772e22c6b0d9"
  },
  {
    "url": "assets/js/23.7e2b7654.js",
    "revision": "69e0c00fb5dc67f46de44d2d43f604a8"
  },
  {
    "url": "assets/js/24.a0790756.js",
    "revision": "e221d56db69d5bd38befc6d6ac1c1b63"
  },
  {
    "url": "assets/js/25.401baa94.js",
    "revision": "5f24d31f96fca770cfdf8c685f171835"
  },
  {
    "url": "assets/js/26.577ce506.js",
    "revision": "ed0d48e048a7d8229f2c9ff6aced49c5"
  },
  {
    "url": "assets/js/27.65d57b55.js",
    "revision": "cb50961aa6682cc49d1f2b23bcb449e5"
  },
  {
    "url": "assets/js/28.d1385a7d.js",
    "revision": "f5805a1c37870bc326a148f453b5227d"
  },
  {
    "url": "assets/js/29.ca05e00e.js",
    "revision": "31c59353c50e52c37da427639e977cf6"
  },
  {
    "url": "assets/js/30.2681a3d7.js",
    "revision": "7a3faeba99e6776aca90d30468fa4b70"
  },
  {
    "url": "assets/js/31.454e04cb.js",
    "revision": "baf4453928e3101a4c72b59f5a282e2d"
  },
  {
    "url": "assets/js/32.c81d92a1.js",
    "revision": "cf8d8f827055d6ccabb325133ed66f6a"
  },
  {
    "url": "assets/js/33.cee7ba23.js",
    "revision": "554a2034c640ebaeeda826db7618e878"
  },
  {
    "url": "assets/js/34.247deaac.js",
    "revision": "7022573ccf7fcca0c74322ca28b8e7cf"
  },
  {
    "url": "assets/js/35.8fcac5ea.js",
    "revision": "30efcf319dade9fd625bb1f4ce1a9ad2"
  },
  {
    "url": "assets/js/36.9be36a01.js",
    "revision": "9f5954a5f1b368dce73d529a91d1af38"
  },
  {
    "url": "assets/js/37.dcc81078.js",
    "revision": "6295b1ddcf7baa8c615ebd0386853dfe"
  },
  {
    "url": "assets/js/38.de823e05.js",
    "revision": "fc933ffbd547c0b6d4622981324de23f"
  },
  {
    "url": "assets/js/39.5931052a.js",
    "revision": "8b91f322d778a398b857714b333d83dc"
  },
  {
    "url": "assets/js/40.ac1e6d11.js",
    "revision": "64a09b984ee3cbbbe0e8493aafae50d9"
  },
  {
    "url": "assets/js/41.eb918535.js",
    "revision": "160e608ea330838ffe33f9af6ff598b4"
  },
  {
    "url": "assets/js/42.067ba92e.js",
    "revision": "0a8ef515162f1f02c12675b5c49b0e5e"
  },
  {
    "url": "assets/js/43.914bca83.js",
    "revision": "6202221c61922e4814e93401919d91a1"
  },
  {
    "url": "assets/js/44.6a207d70.js",
    "revision": "cf83e5590c81531390506e8813f08c6b"
  },
  {
    "url": "assets/js/45.a2c9f6cb.js",
    "revision": "0e31756e64d0f98f368a496ab6b723b4"
  },
  {
    "url": "assets/js/46.c1d9825a.js",
    "revision": "08b5eadcfe1854268e58136b859e4338"
  },
  {
    "url": "assets/js/47.9f0c55b5.js",
    "revision": "9911d0d57b7c5c93778eb08c483e1983"
  },
  {
    "url": "assets/js/48.01973582.js",
    "revision": "dc3c9bb5da95e39aecf92e08f1eb0131"
  },
  {
    "url": "assets/js/5.696c01fa.js",
    "revision": "d7abe38c8f860705c9b882c868b370df"
  },
  {
    "url": "assets/js/6.149f9901.js",
    "revision": "5e1d8198738ddcbc931906a8210c6a20"
  },
  {
    "url": "assets/js/7.45a69049.js",
    "revision": "68a44be848f10ed8a002729183d6cda2"
  },
  {
    "url": "assets/js/8.ce4f0aaf.js",
    "revision": "cc43b6287fb8d08afe54f5d3a8ee1afe"
  },
  {
    "url": "assets/js/9.cfdfd6ec.js",
    "revision": "1d92ab3e7210557e1ec1c53953d288d0"
  },
  {
    "url": "assets/js/app.a21ac236.js",
    "revision": "e7b265608da28dc96808efab3bdb4729"
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
    "revision": "f4ed9812d5ca458fae6cf983e5cd5229"
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
    "revision": "e3ecd2af4dd638d4dc7563f54c3f22aa"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "0c4b91e46ba68b47b34fe518bb6450dc"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "2b1044a36235d4dab58bf20ea85ffc6e"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "b63cb2af093b1d5287367185789fccc3"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "ede1e52648c8099274465d9248eb6599"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "1ec1aacb328f9ce729a18c4709e59ac8"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "11a91c7a0e17d51630f7820e30efdf21"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "c76be225bb21d3d8db64e8c2fca8bdc7"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "c20958c5d9df783f2e18119299979816"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "a3b0cb524654f169e9a992e5cb552c42"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "6bcee025fef6b658bbf35b12117a222f"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "1689f17a758e43a8bd157e94026fa8bd"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "03c526b09a272d35abdbd6c1b35f15f5"
  },
  {
    "url": "zh/index.html",
    "revision": "2f3d7ef6f087c411651da818937880eb"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "527922d96d50e41b80c7d3882ea870fd"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "ab4b9c9b1e1d4ca98685cc9c92191e4a"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "66f34f9a5d21bd70bcdbd18a2102c1c4"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "ba0ad24cb94ac56c9bfe9994eb4c63cd"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "4ac18af2f2faecde56fc2b8e21d354ca"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "3a3007ed606980bca90281b6361ea1dc"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "a537764e0ba2a55fc3815ab0760d441d"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "515562f6e3c482820bef8c192c8679e8"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "3c79fa80cc9b739447479375b1827457"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "7f501a68d172bdf7ffa5232f9fdef2d2"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "e740f2ef3242b625bfe440140b2ff150"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "71028882d6b2fb297528a95eb8311310"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "ae4243eaf9769026ab4a9c732249a1fd"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "48b66de63eeb45107f3f5d6c6dceb7d8"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "aa078554445dfded7c96333d453450f7"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "b262270dc6fe0b81cbbdb32a18a1a15a"
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
