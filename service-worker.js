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
    "revision": "68296817dfbcc92f0c820d11e55976b4"
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
    "url": "assets/js/app.b70d8706.js",
    "revision": "3787a6fa855459bebf0d268126b48f86"
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
    "revision": "abee54c29f8c7f6a0d6631d14be86418"
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
    "revision": "1c72150a5e0248c00ceb3ca2cb846b7d"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "672964f10d11658ecef93e8ee2c3d585"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "9bc027af9c050455e0b00c7a8de6de40"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "f31f98d80a49b7f2e5c45d683ca1ac85"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "2aa0f77bcececda0a3bc4f13ade9d6e5"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "0af79cdbc22ee32d0b851fa097f09a11"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "ab9812f26cc802641d43d6a4c4a7c8c3"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "b9d266e660757ffe824458a32e48135b"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "9fe9c3f7c09018255fea687e18044996"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "4b8f731bd193c7c786a95bcd72be9191"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "148b05032a737e212075747053c2712a"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "5fc428afc6e0636e18f81877213b7dcf"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "eb5aef12bb157c9da8f8cc0ccf3fe3f6"
  },
  {
    "url": "zh/index.html",
    "revision": "fbec3308c3f1ccc776ae88374e85cf61"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "6ea688869f2d2c8d37a06a45657aa260"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "31459ac7f01606ba308912ac54bb61a5"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "6140b019550a6cf3815094c2c09a385d"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "a0ed62c432e9995cd75c45540295ed05"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "287ddf06184c4f42f524705f130555e0"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "2e8b6dd39757aa3f484547e5483b15e7"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "9ede03d545b11f35e19a63693402f71b"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "b5231f20350b43fdc60d7c58f9c710dc"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "939f9d48387683c07172df7d84f00f29"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "16b7b6047600b71a7ba23290cd0d3f1b"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "cacef881a3f11791ae66b24418b3c6d3"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "7627593230268e636597cfe45dc19f69"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "99ae462b0dd90f06b249d2da6becadd9"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "68abf22d7c65c6c4328a38fc6aaaa4e5"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "ce4c5e5e0305c42cd6bbd475f270127a"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "bab51ec27c8dc5477df41e3350a4468e"
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
