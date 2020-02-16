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
    "revision": "db62f3f96b338da404db3a824a90a81b"
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
    "url": "assets/js/23.504d2f5d.js",
    "revision": "511ff004e9736f5080ca4cddb46a8279"
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
    "url": "assets/js/app.9ba46a81.js",
    "revision": "df8756895bfe16b6b388aa4d9bb443a3"
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
    "url": "db/mysql/mysql-02.jpg",
    "revision": "8ee408ae948af53c13eca0dcd23334b1"
  },
  {
    "url": "db/mysql/mysql-03.jpg",
    "revision": "cd094ea55ed5ef72c7bd2b91f7c7da46"
  },
  {
    "url": "db/mysql/mysql-04.jpg",
    "revision": "856a0be969dd3eca6e3d441bf782031a"
  },
  {
    "url": "db/mysql/mysql-05.jpg",
    "revision": "b59e807dbcfb7d4c3b8e3289540c8e50"
  },
  {
    "url": "db/mysql/mysql-06.jpg",
    "revision": "4ef054a45ee00d4f6c8a93f5451cec5f"
  },
  {
    "url": "db/mysql/mysql-07.jpg",
    "revision": "416a1b17f4bc9055db554500393f6e2c"
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
    "revision": "21dc3949f4cb671b10fde2f823a3411d"
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
    "revision": "3e8d26c0215833ae4ecf479c69d33f35"
  },
  {
    "url": "zh/db/hbase.html",
    "revision": "a83a248870d108aea329397313bec8bb"
  },
  {
    "url": "zh/db/index.html",
    "revision": "cf474002741d7a85313e90b99368be07"
  },
  {
    "url": "zh/db/mongodb.html",
    "revision": "fd2399e442bc64cec1bd91b1a5e73b85"
  },
  {
    "url": "zh/db/mysql.html",
    "revision": "6c9df4706363ac6963dad40ae3252322"
  },
  {
    "url": "zh/db/neo4j.html",
    "revision": "56656a37f52191a75310a2ab3c272c72"
  },
  {
    "url": "zh/db/postgreSQL.html",
    "revision": "58cc3144c33e975100b8f3e444d90adc"
  },
  {
    "url": "zh/db/redis.html",
    "revision": "daa23ca50e68600a5d1f5fce9db20ba8"
  },
  {
    "url": "zh/devops/index.html",
    "revision": "d8bb8e95d6c5faf4614feceb5b21b7c8"
  },
  {
    "url": "zh/distributed/index.html",
    "revision": "27fd8a9fffb129040497231f81bb212e"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "ef0c7ecf2fd0594277492d4661b7212e"
  },
  {
    "url": "zh/index.html",
    "revision": "93fef7e935569169402c84771dfcfe72"
  },
  {
    "url": "zh/os/computer.html",
    "revision": "d31dc57c5bad74484498716ee2bfcfeb"
  },
  {
    "url": "zh/os/coroutines.html",
    "revision": "228767e52ae44bc842c40db44ce7934e"
  },
  {
    "url": "zh/os/cpu.html",
    "revision": "5aa86f8c8275706aad007cc0b03040b5"
  },
  {
    "url": "zh/os/index.html",
    "revision": "d04242b1f3daff31d25c047bbfe4d111"
  },
  {
    "url": "zh/os/linux.html",
    "revision": "85dacdc4a8baad2193e6037d859e084f"
  },
  {
    "url": "zh/os/process.html",
    "revision": "547bad6e2c5e0bb4bd093e6596bc365e"
  },
  {
    "url": "zh/os/thread.html",
    "revision": "fa956d74960364affd0b1550e30c19cc"
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
