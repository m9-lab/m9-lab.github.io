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
    "revision": "96d455ec8c7f25064d616ffe3403e4a2"
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
    "url": "assets/js/app.225089c8.js",
    "revision": "72570effb6bf26e7e5b394e2704ac1ff"
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
    "revision": "d641e2445ce427e5d98837b5520dab8d"
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
    "revision": "5292db95f4ede6af0cf28d8d7782dfa4"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "36b1244199adeb8946a040e4395596f8"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "4de02888adeffe034ad86cf9289e5e93"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "bd78b303799ccf4a32604527cf2e6d69"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "19ac120e7d2223823dc5d43b7450497b"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "e3ecc8f1ae3b41b1033a343692852b92"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "ea42fe19cc38208844870d6a94994cb6"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "97e00b7de27107cc6b5881d899741713"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "91b97d522798e8adaf48714c5e8cd281"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "156366bfbf25ec48e4e8e65a09e88ad6"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "15f225d345d6937374da6f5969a4bbf1"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "2e7e35dd1a3a53b86c2ab3e6d08a20d1"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "057aa2077f7c5cab052ad0af43bd7245"
  },
  {
    "url": "zh/index.html",
    "revision": "8e4e75b0b48c88e28c32b84f3153100b"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "22ef8210963d80e028df794faf6838b3"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "294aa434e4ec6c8ff8d57fe06869ca56"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "234e0881e8d5c681b310d8430e7c75ab"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "1627eb2d1a917dcd021f6b6fa1711f9f"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "9f26b3ad6eff784ec1c4d34f9cb861d0"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "6f7ef2e88d8cf312256b054308ebf315"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "5b6293755bd395c78fad61d0a0549599"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "a59b70533ea7cbff1ecb3387baa9d543"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "f34e1d7e6ba239def69464d5430fc06a"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "3a38d0633a6270575d00741f045a164e"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "514b208ded53b6f88a4e6d9f58255fd6"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "a782d7ca55096ac4358e2988a13de3ca"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "5f183daf380636af6dbc1a72e56b4772"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "f6a6d409b41f087d044a1c2cf7ef52db"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "54a5b26f66765973495cacd6aa214fbd"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "384ea332a847b80427a7a0c5e73e5c70"
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
