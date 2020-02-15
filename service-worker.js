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
    "revision": "92657dd4f1b3d1a4ace315e12182f0d4"
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
    "url": "assets/js/10.25b2dc04.js",
    "revision": "cab2c9d75790f2d5ec20140102a9d5d5"
  },
  {
    "url": "assets/js/11.de513620.js",
    "revision": "d552ad7374e5b63cdc5691c33342816d"
  },
  {
    "url": "assets/js/12.20d44d7b.js",
    "revision": "18995bf6c15dca38d2b4ec7aedb65fd0"
  },
  {
    "url": "assets/js/13.fd678c64.js",
    "revision": "e2ff1d8e37df137a664e0e139590b06d"
  },
  {
    "url": "assets/js/14.bcd4dc1c.js",
    "revision": "8f02e7f6ad3777b087fe4596219cd500"
  },
  {
    "url": "assets/js/15.187ea0e3.js",
    "revision": "6a511c4a02b671376a34d6f7f4e49b58"
  },
  {
    "url": "assets/js/16.03f00949.js",
    "revision": "8376eb097d54788a1b8fd251d74dcb4e"
  },
  {
    "url": "assets/js/17.4b440b55.js",
    "revision": "ce06fa6e25d547d767ec16c16c80498a"
  },
  {
    "url": "assets/js/18.3cbb3f71.js",
    "revision": "912161a6b4e1e2c09d834601a0e6de33"
  },
  {
    "url": "assets/js/19.20a1f7fc.js",
    "revision": "81fbf5efd8342b9c52d163467875d261"
  },
  {
    "url": "assets/js/20.df76828e.js",
    "revision": "1e53123b955090e91f26491506dad0bd"
  },
  {
    "url": "assets/js/21.2481844e.js",
    "revision": "035a00bfa467d751261ad6f9dba62185"
  },
  {
    "url": "assets/js/22.894feda1.js",
    "revision": "fbe0b750dd857fec3f690ed42de60564"
  },
  {
    "url": "assets/js/23.ca173608.js",
    "revision": "ac241f2bb1f4cc6a65eadcabad5d098c"
  },
  {
    "url": "assets/js/24.15625f26.js",
    "revision": "ceda8e9f877859a11e843b8b8967f688"
  },
  {
    "url": "assets/js/25.36d3f075.js",
    "revision": "515d74eb9660d261b58de4d6bd89f6f1"
  },
  {
    "url": "assets/js/26.a697eb90.js",
    "revision": "dc655c402fcbb22912e37080dc98bd4d"
  },
  {
    "url": "assets/js/27.b5fdd752.js",
    "revision": "e8b1923ae34b308234939c224110eafb"
  },
  {
    "url": "assets/js/28.40ed215a.js",
    "revision": "ff5ba64fe11a028713e1a13c4e092e7a"
  },
  {
    "url": "assets/js/29.03681b90.js",
    "revision": "6648793f2dede380b2b39a7e62e4778a"
  },
  {
    "url": "assets/js/30.0202a343.js",
    "revision": "918fcc5bb8c79aaf1c4cd98a74dc7f25"
  },
  {
    "url": "assets/js/31.adf7057c.js",
    "revision": "f6341b2af81ca83ff7c50d7ffdbd7d46"
  },
  {
    "url": "assets/js/32.20b6f898.js",
    "revision": "17b2e8623f3e2bb7cb490ddbfb2a09c9"
  },
  {
    "url": "assets/js/33.ca18847d.js",
    "revision": "c04a5aef62ebb255fd62db0ca8becdf1"
  },
  {
    "url": "assets/js/34.b61730f8.js",
    "revision": "b92c22a7a4106f239a284bf8c308067e"
  },
  {
    "url": "assets/js/35.62e4925d.js",
    "revision": "d8cb2a99df3951a8e1ad557a214ce3c9"
  },
  {
    "url": "assets/js/36.1376cb54.js",
    "revision": "c538547b48003783243d31178bb250be"
  },
  {
    "url": "assets/js/37.80d96b74.js",
    "revision": "3775ecf15f06db237ecc8bd8b058ea01"
  },
  {
    "url": "assets/js/38.57161872.js",
    "revision": "90b5b7d0ff7e8bbdf1a3b8229e259041"
  },
  {
    "url": "assets/js/39.18261626.js",
    "revision": "49bf41a437b613a996d1cdf6af7a7b91"
  },
  {
    "url": "assets/js/40.51e65093.js",
    "revision": "eb86c16b2d5efb968e2b9088010b31c6"
  },
  {
    "url": "assets/js/41.920d6500.js",
    "revision": "45cb511409d24493a97e045d2d77f9a5"
  },
  {
    "url": "assets/js/42.854f21d5.js",
    "revision": "d92535719d4240e0caabe4e2cdd9fc10"
  },
  {
    "url": "assets/js/43.0744b68d.js",
    "revision": "5f5593ddf080f0edc7769fd7c5508586"
  },
  {
    "url": "assets/js/44.9c68aad4.js",
    "revision": "c25d14c1189ae0f5c66131f180937a74"
  },
  {
    "url": "assets/js/45.943fb881.js",
    "revision": "8ade24b2827929904684c38f64442a9c"
  },
  {
    "url": "assets/js/46.f59cf106.js",
    "revision": "4c8bdf160fc36532aefb101c5fd74cfa"
  },
  {
    "url": "assets/js/47.acc9dc24.js",
    "revision": "22a0ea447090b97a5aac4eb907fb19d3"
  },
  {
    "url": "assets/js/5.696c01fa.js",
    "revision": "d7abe38c8f860705c9b882c868b370df"
  },
  {
    "url": "assets/js/6.9090b3fc.js",
    "revision": "81bb6b890b82918a620cc09bfda9e867"
  },
  {
    "url": "assets/js/7.0696725a.js",
    "revision": "2125d3bb66fd29a1b423d8a2b4919786"
  },
  {
    "url": "assets/js/8.0ef043ad.js",
    "revision": "c6b36406355c121ac328949107b585eb"
  },
  {
    "url": "assets/js/9.cfdfd6ec.js",
    "revision": "1d92ab3e7210557e1ec1c53953d288d0"
  },
  {
    "url": "assets/js/app.afdfecc5.js",
    "revision": "403023727262aacd67f75d03e85be8fc"
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
    "revision": "bb5538c82e15a6f420ea3727c30d936f"
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
    "revision": "9f1b00a53f2a1b28725a2631b2e36517"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "b297c7d72d01e20a192b223f16cc2e87"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "734c43352e2d67237d26fcfcaab0b35b"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "973e6cad2406a55e94068395a680e67c"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "72c2a97ad63753ae96287afdd3bc80e3"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "d5d9d49282f07ec04b947db3f44a300b"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "0cb883a50c70bd1dc20ceb1ec7d9f2be"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "1ec4a06fdb85238f39abdc39eeb6bbb1"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "04d15e4b3ce9c2391772ed2fcfab749e"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "b802765aecfe50006857633b084f2a49"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "1e0d7fbab76a1b7d4eb90aed1f1c3774"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "825852cd9843b798423c0c383b8b3056"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "d3ec1da760324161f6a4e7a132e4a4b4"
  },
  {
    "url": "zh/index.html",
    "revision": "031a036a78004e7ed67300e399b276ee"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "93066327dc20c51631883b385ddeaaf5"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "196e0760f4042ba3a9b27cdb928644a5"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "3065be32d0ac1e91fb60b844d3f7745c"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "bae5c5b51ee71eb9d556940ce8430b0e"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "a8223b68736d332f703823ac1eba6d6b"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "ee6006070ed375b0703f0cf32834d9bd"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "766cec96a113dc826c72604b28523126"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "f0cffe32d3cacb77f81e48ff2a304707"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "dd9a2ff873030a6a2be99543989e4720"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "75934f580203a5e54c2981d1928e29f2"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "9e8a916762b260d0c4a9e56d69bf2d5a"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "84f21839d2c0ef8fdd76ae2f260c0e42"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "6da49b1c63af208ce8736bfac0cae0dc"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "df2fdb848bea4dfc516a76ec4061ff95"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "c9f7a2c0369f8f8d4ff3ab985dbd0a9c"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "b38385a3fd709d9272b5ad0e63b12db6"
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
