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
    "revision": "d37bf21f769bd472a28c137d18577e79"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.9469f394.css",
    "revision": "649051dc377116a3b15f2d2e63bb55d3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.823b53ac.js",
    "revision": "08a16e0973cbf7177a6f2cad28df0a21"
  },
  {
    "url": "assets/js/11.01bd84b8.js",
    "revision": "bc8a77f989f086e8fcdfcb3fccd70c74"
  },
  {
    "url": "assets/js/12.b854d006.js",
    "revision": "caf3553ccd52f6ed2fc18f86f3d23e40"
  },
  {
    "url": "assets/js/13.b0aac321.js",
    "revision": "1a2ced9f1594f560fbb394241d18de8a"
  },
  {
    "url": "assets/js/14.88d71c97.js",
    "revision": "5d1cfe31fb2d82d527085d9ff25dbe23"
  },
  {
    "url": "assets/js/15.b1922a98.js",
    "revision": "d8370a38bc451f70da5ccc88539da933"
  },
  {
    "url": "assets/js/16.61d87a6f.js",
    "revision": "337f5a14bf4d91147955a3b6204ddeed"
  },
  {
    "url": "assets/js/17.ebc1f63c.js",
    "revision": "4d1ae14a124816df1e53270020cf1d37"
  },
  {
    "url": "assets/js/18.e2798017.js",
    "revision": "ec3ac35925e27c05249678dae39f399e"
  },
  {
    "url": "assets/js/19.8177a563.js",
    "revision": "1fb2c9c8fe7fd51205d7b27bcb2dea91"
  },
  {
    "url": "assets/js/20.0a44368a.js",
    "revision": "44b7d27df67d2bc9c76c985e318b62be"
  },
  {
    "url": "assets/js/21.31e5b23c.js",
    "revision": "89c316b3e5a073ff3fe98c030853dbc5"
  },
  {
    "url": "assets/js/22.5fc85c4d.js",
    "revision": "aac6a89d5d33f593344c1f616d0e5f82"
  },
  {
    "url": "assets/js/23.f6342f1e.js",
    "revision": "59c9038ddfcb6b1f436ceac6047f322a"
  },
  {
    "url": "assets/js/24.9a3abbc6.js",
    "revision": "56df2757105168d6989f41af98dd0f49"
  },
  {
    "url": "assets/js/25.e734f04f.js",
    "revision": "daa557ff7488ec00d5fd9c84f6b64358"
  },
  {
    "url": "assets/js/26.0c6371a4.js",
    "revision": "14af9a29f1784c84f81b3a0d2425bbd3"
  },
  {
    "url": "assets/js/27.991b24f4.js",
    "revision": "7242cb07e648d444ce4e81d29f88bf74"
  },
  {
    "url": "assets/js/28.428342c8.js",
    "revision": "6f97103f323b8899b0bcef827433742f"
  },
  {
    "url": "assets/js/29.0e7bf6a7.js",
    "revision": "ce5b918aeac3c7cb195ccaea9fd7b460"
  },
  {
    "url": "assets/js/30.3f39aa81.js",
    "revision": "72120bd9773278be808b18dd02956a80"
  },
  {
    "url": "assets/js/31.468940ec.js",
    "revision": "249dd011f74f45db598514fe0a6ee6a5"
  },
  {
    "url": "assets/js/32.319dcfa3.js",
    "revision": "62ae9f9e33a47b5dbe8a2175f7c0d630"
  },
  {
    "url": "assets/js/33.b02e007c.js",
    "revision": "a6a7509478d96b1bca28def099a7c5d9"
  },
  {
    "url": "assets/js/34.1e1567cd.js",
    "revision": "2612cb594c9a22fc5968e0c54532b7af"
  },
  {
    "url": "assets/js/35.20562aea.js",
    "revision": "a86b424f80957fe460046025c5d3e50a"
  },
  {
    "url": "assets/js/36.5ddfd0d1.js",
    "revision": "dec90b0e1afb6019adbe4666df90445d"
  },
  {
    "url": "assets/js/37.f1ab4b74.js",
    "revision": "06710100bfd3fd03330020c0677ad48d"
  },
  {
    "url": "assets/js/5.51d8d53e.js",
    "revision": "1bcc0cb71a19a4b65410cac6dd4bd06c"
  },
  {
    "url": "assets/js/6.bd70c617.js",
    "revision": "937a0a5f4527d7db84e2f2fba7327652"
  },
  {
    "url": "assets/js/7.cde3f9c5.js",
    "revision": "9538a72efb8064a638c33e3b99d5fe1b"
  },
  {
    "url": "assets/js/8.3c1bf926.js",
    "revision": "af6314085152fa7904718fe0a07155ba"
  },
  {
    "url": "assets/js/9.cd0ef29a.js",
    "revision": "c1f319c99acdf47265e5e17c04b1c431"
  },
  {
    "url": "assets/js/app.64eec7d8.js",
    "revision": "e5385d2ccd1d8455e567894f4fea1bc3"
  },
  {
    "url": "assets/js/vendors~docsearch.87ae9561.js",
    "revision": "0f16438f952a9c243adcd59d950bc7f3"
  },
  {
    "url": "assets/js/vendors~flowchart.62647a97.js",
    "revision": "fe72d08d1479705babb3f13429a7be4b"
  },
  {
    "url": "assets/js/vendors~notification.19a5a576.js",
    "revision": "e5b69b3b87cdf0882e318bc65bc5c454"
  },
  {
    "url": "db/mysql/mysql-01.png",
    "revision": "88833ff35bae36dcf329ef2eab0c9ded"
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
    "revision": "9ccdd8f03779f8e786659ca17f4c6997"
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
    "url": "zh/db/clickhouse.html",
    "revision": "32561a7c5d94037758f4561f793d77cf"
  },
  {
    "url": "zh/db/hbase.html",
    "revision": "ae4af63806495f0d70752fe23bf7f422"
  },
  {
    "url": "zh/db/index.html",
    "revision": "67fe12f72336f49a4442f2125e25fe29"
  },
  {
    "url": "zh/db/mongodb.html",
    "revision": "aed8fc9663920a120d7de5f9d4098927"
  },
  {
    "url": "zh/db/mysql.html",
    "revision": "4d0f7b52328ffecbf5aa489d610d44e9"
  },
  {
    "url": "zh/db/neo4j.html",
    "revision": "3aa1e1b25368685e0c8d13a393de9892"
  },
  {
    "url": "zh/db/postgreSQL.html",
    "revision": "3dc36796db1d939e48006af908d51080"
  },
  {
    "url": "zh/db/redis.html",
    "revision": "7485b9807936794fcbeb505af9b5c354"
  },
  {
    "url": "zh/devops/index.html",
    "revision": "87fb887c50f22560df96eea7708efccb"
  },
  {
    "url": "zh/distributed/index.html",
    "revision": "c51f1e115092dcad9027ac2960061eff"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "20e5f348c7a32c31c6c24ee1001b9ed7"
  },
  {
    "url": "zh/index.html",
    "revision": "ea72bddce3292f321381f3a360252991"
  },
  {
    "url": "zh/os/computer.html",
    "revision": "3384168adb1b71dc83218c83e332985a"
  },
  {
    "url": "zh/os/coroutines.html",
    "revision": "0c3c51e2d86d661b0385588321d68a95"
  },
  {
    "url": "zh/os/cpu.html",
    "revision": "1000718ec7333aa7dc3ada3ed497ad82"
  },
  {
    "url": "zh/os/index.html",
    "revision": "931e65637ad2daed3a362852adf94796"
  },
  {
    "url": "zh/os/linux.html",
    "revision": "ac585aaa5c313dfbb7121edf6d493e39"
  },
  {
    "url": "zh/os/process.html",
    "revision": "bf94e725d1f907d380a25e9c15307dcb"
  },
  {
    "url": "zh/os/thread.html",
    "revision": "368a6542a5daddcf40dfb17c26ae8f8b"
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
