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
    "revision": "5c691582e928830b672b4edb736012cb"
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
    "url": "assets/js/10.69d952c4.js",
    "revision": "486ee051dbe7bb3c36763d49de199ce0"
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
    "url": "assets/js/13.92b3c17b.js",
    "revision": "2692aafb08e3b272b5824f69c6b222d1"
  },
  {
    "url": "assets/js/14.88d71c97.js",
    "revision": "5d1cfe31fb2d82d527085d9ff25dbe23"
  },
  {
    "url": "assets/js/15.fcf4bdae.js",
    "revision": "09b6401e1329905fac614ed6c0d8e294"
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
    "url": "assets/js/19.2aa38084.js",
    "revision": "d569ff51a63f3059ebdeb41ad83b584d"
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
    "url": "assets/js/23.3b91481f.js",
    "revision": "09aeaf4c0833214e823b2bc6f43fb317"
  },
  {
    "url": "assets/js/24.9a3abbc6.js",
    "revision": "56df2757105168d6989f41af98dd0f49"
  },
  {
    "url": "assets/js/25.9165907b.js",
    "revision": "cbdb1a9c20e0c65e46931ef7c746c828"
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
    "url": "assets/js/31.1c6ee22e.js",
    "revision": "7f7ba98f8c709c30aa5972d9149f26c5"
  },
  {
    "url": "assets/js/32.521a2668.js",
    "revision": "e3e64ca1acb0e5f3b2735e713392f25c"
  },
  {
    "url": "assets/js/33.1f6d0230.js",
    "revision": "2e8c929752aac362bc30e48d9aa32054"
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
    "url": "assets/js/37.8f027709.js",
    "revision": "17b0ed607881f3abe2830ece0909978f"
  },
  {
    "url": "assets/js/38.f8b53b41.js",
    "revision": "c9d639bdb7850d4979896fede2ab9e4b"
  },
  {
    "url": "assets/js/39.ec9e947d.js",
    "revision": "fd164f2f0c97d3bbbd7bdb145f03f2a6"
  },
  {
    "url": "assets/js/40.15cf22df.js",
    "revision": "9903c03b3c858f1c419f528f2fef1e05"
  },
  {
    "url": "assets/js/41.dfbb6170.js",
    "revision": "4abe6728dcf1d6b10d9c5faa5e124db7"
  },
  {
    "url": "assets/js/42.fa2e0aad.js",
    "revision": "f75e544d671ef12fad3204b6a405ef57"
  },
  {
    "url": "assets/js/43.7090d9d7.js",
    "revision": "e3c59a46419cd60673dbf6d23e5cec5a"
  },
  {
    "url": "assets/js/5.51d8d53e.js",
    "revision": "1bcc0cb71a19a4b65410cac6dd4bd06c"
  },
  {
    "url": "assets/js/6.8d02da18.js",
    "revision": "630227194478a92452eccb82ae5e70be"
  },
  {
    "url": "assets/js/7.125b3905.js",
    "revision": "a75dc91ffdc070a477d323266bf711c0"
  },
  {
    "url": "assets/js/8.6181a86d.js",
    "revision": "0ca45c451ca95feb2864977989ce563d"
  },
  {
    "url": "assets/js/9.cd0ef29a.js",
    "revision": "c1f319c99acdf47265e5e17c04b1c431"
  },
  {
    "url": "assets/js/app.de81a621.js",
    "revision": "69d92376a4fece2322933271adace70b"
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
    "url": "db/mysql/mysql-08.png",
    "revision": "291daaf6f952e100727c4ef5cf5e680f"
  },
  {
    "url": "db/mysql/mysql-09.png",
    "revision": "6f6c9472b695263d30c665fb795290ca"
  },
  {
    "url": "db/postgresql/postgresql-01.png",
    "revision": "67635cd276286d0b14aa3917466ec08f"
  },
  {
    "url": "db/postgresql/postgresql-02.png",
    "revision": "ac0a50769fd3d8ee4cec55d9a8a71ce2"
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
    "revision": "f5daff5e867b834bbe1842b8a8e0b0ab"
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
    "url": "os_cp/os/os-io-01.png",
    "revision": "d87f971fd7e8de94d0c3ea2a57467d54"
  },
  {
    "url": "os_cp/os/os-io-02.png",
    "revision": "8deebd76afa69410d5db8b8e4717a686"
  },
  {
    "url": "os_cp/os/os-io-03.png",
    "revision": "f4d5597a1244af98420ce619cf36b7c2"
  },
  {
    "url": "os_cp/os/os-io-04.png",
    "revision": "430ea1b1e4cbd9fd85a5a111b2ccf4be"
  },
  {
    "url": "os_cp/os/os-io-05.png",
    "revision": "19cfde95abb6fbc960051fc8f944328d"
  },
  {
    "url": "os_cp/os/os-io-06.png",
    "revision": "211892537f0f4f6df0b6f90844e2113e"
  },
  {
    "url": "os_cp/os/os-io-07.png",
    "revision": "71971fd9834678261e8462ec5d9ecf19"
  },
  {
    "url": "os_cp/os/os-io-08.png",
    "revision": "06371dd34c204af5a5663a3949ee2506"
  },
  {
    "url": "os_cp/os/os-io-09.png",
    "revision": "9f8d7ae00538f91147794fdc01bc1a6f"
  },
  {
    "url": "os_cp/os/os-io-10.png",
    "revision": "480c87c78d4c7628e0464959ca82c388"
  },
  {
    "url": "os_cp/os/os-io-11.png",
    "revision": "5b9dd2fba8a658017031c939d8f8500d"
  },
  {
    "url": "os_cp/os/os-io-12.png",
    "revision": "49065d0da0593d36dcb1d5abd83f8534"
  },
  {
    "url": "os_cp/os/os-io-13.png",
    "revision": "ae9a6036032338478ad80aaee6b6391e"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "program/compile/basis-01.png",
    "revision": "d4e068ca263dfc924089f1fc36962dd5"
  },
  {
    "url": "program/runtime/program-php-01.png",
    "revision": "1972f418181047cef67aa755b2189cc0"
  },
  {
    "url": "program/runtime/program-php-02.png",
    "revision": "30cc08637391aa56b06681559b4f5048"
  },
  {
    "url": "zh/db/clickhouse.html",
    "revision": "29dac2771e8133bebd934a411039a43c"
  },
  {
    "url": "zh/db/hbase.html",
    "revision": "ce783cfa39ea759b4013e50f173bea16"
  },
  {
    "url": "zh/db/index.html",
    "revision": "230663f7d37ae3a8dd1a67924cf8f546"
  },
  {
    "url": "zh/db/mongodb.html",
    "revision": "656201205e6e204128753b012848c4c0"
  },
  {
    "url": "zh/db/mysql.html",
    "revision": "2598191da571c4243f2851086d7acb6e"
  },
  {
    "url": "zh/db/neo4j.html",
    "revision": "3e3b9a35cf59bd97320ddaff62de5ba4"
  },
  {
    "url": "zh/db/postgreSQL.html",
    "revision": "47746bbd42bd042b1279017558f24abb"
  },
  {
    "url": "zh/db/redis.html",
    "revision": "dcaa602b278d14f38ee82c6010b8d99e"
  },
  {
    "url": "zh/devops/index.html",
    "revision": "cb4f98dbce5dfe827ec318cf23e42790"
  },
  {
    "url": "zh/distributed/index.html",
    "revision": "005488d5937fb3c270829d90fe2986ee"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "100f55943c5cc987ee70e67212a26bcb"
  },
  {
    "url": "zh/index.html",
    "revision": "5ba03c6da89d018f8965b93f36697087"
  },
  {
    "url": "zh/os/coroutines.html",
    "revision": "04d43a6cb2499dbc547791c8075957f0"
  },
  {
    "url": "zh/os/cpu.html",
    "revision": "2334be7e1e96228128305bb5f1df708f"
  },
  {
    "url": "zh/os/index.html",
    "revision": "1ba91e130878ad3bff2baf27291268a9"
  },
  {
    "url": "zh/os/io.html",
    "revision": "698694559da51cbc2bd7594848b727b1"
  },
  {
    "url": "zh/os/linux.html",
    "revision": "4f4d0474c2faba1c3b356e4ae6dd620d"
  },
  {
    "url": "zh/os/process.html",
    "revision": "2d18181030e711219848609befa29224"
  },
  {
    "url": "zh/os/thread.html",
    "revision": "2f420d6f0ed883a79696ff32ee9fd54e"
  },
  {
    "url": "zh/program/c.html",
    "revision": "060262a17bda273d335b73a0aa2d6825"
  },
  {
    "url": "zh/program/golang.html",
    "revision": "0864f842206d7752f707ba6f409d894a"
  },
  {
    "url": "zh/program/index.html",
    "revision": "a3df97437dc63f7eaa2d1345b7e4863e"
  },
  {
    "url": "zh/program/javascript.html",
    "revision": "2a67444afa460c638fd4cd3a5a8169d6"
  },
  {
    "url": "zh/program/php.html",
    "revision": "76952705bffdf229c5d7d13c24b354e9"
  },
  {
    "url": "zh/program/python.html",
    "revision": "07f480ad1007bebd85f0d4ed14d7d77f"
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
