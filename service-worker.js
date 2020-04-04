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
    "revision": "850ade709af927160e2075089b57e4a4"
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
    "url": "assets/js/10.80e09bf3.js",
    "revision": "183e96642c5d51f4548ecb4aef391672"
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
    "url": "assets/js/13.ee57a46b.js",
    "revision": "13ff43d4ccba58078ad4772fb210f13c"
  },
  {
    "url": "assets/js/14.88d71c97.js",
    "revision": "5d1cfe31fb2d82d527085d9ff25dbe23"
  },
  {
    "url": "assets/js/15.6d121179.js",
    "revision": "bda3b5853708855b51a7e708767b4038"
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
    "url": "assets/js/30.c78c3605.js",
    "revision": "71ecce6cdf7fb69a5cbff5a76531fd1c"
  },
  {
    "url": "assets/js/31.df848121.js",
    "revision": "42874b53ffa064360e6ddaa2edf4aa02"
  },
  {
    "url": "assets/js/32.b9a1a697.js",
    "revision": "c025c0acc963a9ad1094969784ca3529"
  },
  {
    "url": "assets/js/33.b02e007c.js",
    "revision": "a6a7509478d96b1bca28def099a7c5d9"
  },
  {
    "url": "assets/js/34.08cda01d.js",
    "revision": "8bf1662ecead485a35a598bd80574731"
  },
  {
    "url": "assets/js/35.09132175.js",
    "revision": "e67481ff87aa3d8a720660b5e2a6122a"
  },
  {
    "url": "assets/js/36.be313d50.js",
    "revision": "6bf40939a0cd6c59033ac5de8581759b"
  },
  {
    "url": "assets/js/37.b15550a1.js",
    "revision": "efa5524120a7b74a84b320402d0244ff"
  },
  {
    "url": "assets/js/38.87c081b5.js",
    "revision": "ce980cd4513be79609df74bd04c06d29"
  },
  {
    "url": "assets/js/39.a25e7756.js",
    "revision": "49e2c082a32f2d1a5a6a1f9e4a736f3a"
  },
  {
    "url": "assets/js/40.7bc1f56d.js",
    "revision": "a88ea45c49efc579542f5d63c1412465"
  },
  {
    "url": "assets/js/41.07f6ed2f.js",
    "revision": "697e94a17ae5ce533d516a0d995723bb"
  },
  {
    "url": "assets/js/42.d0344dcb.js",
    "revision": "afc59b0d282e76ee8c66aa23fd4cd3c1"
  },
  {
    "url": "assets/js/43.eb9effe0.js",
    "revision": "bcc982ab1e2dfb202687097f127866ec"
  },
  {
    "url": "assets/js/44.7f3dfdb5.js",
    "revision": "41d1065e68193aa628bf4fecd638da8a"
  },
  {
    "url": "assets/js/5.51d8d53e.js",
    "revision": "1bcc0cb71a19a4b65410cac6dd4bd06c"
  },
  {
    "url": "assets/js/6.a9b18062.js",
    "revision": "526a61cae120c2c01991a73c0385ecc2"
  },
  {
    "url": "assets/js/7.4a6ac7ca.js",
    "revision": "5aba9adff88e33f9a94b535f392170d0"
  },
  {
    "url": "assets/js/8.3039d914.js",
    "revision": "f9a684154becf4e80cb7a207700e4f44"
  },
  {
    "url": "assets/js/9.cd0ef29a.js",
    "revision": "c1f319c99acdf47265e5e17c04b1c431"
  },
  {
    "url": "assets/js/app.6349dd5e.js",
    "revision": "0c746aac0e0b8a63e50d8a4bcffc7393"
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
    "revision": "37a8ad28665d312f2a9b24ffc1bd40e2"
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
    "revision": "98c9fc9564742e115f3a01d5b6b5f336"
  },
  {
    "url": "zh/db/hbase.html",
    "revision": "be20bf75a54f88b0f72cc0e226647218"
  },
  {
    "url": "zh/db/index.html",
    "revision": "dbed9928a765885c32c399169a8f7288"
  },
  {
    "url": "zh/db/mongodb.html",
    "revision": "0af213bdab8a0c4b7f2fb5326f1b5ef1"
  },
  {
    "url": "zh/db/mysql.html",
    "revision": "2db25f0c67bbf7e9df1dcce9f5d82795"
  },
  {
    "url": "zh/db/neo4j.html",
    "revision": "76b9a10a113db410451f74bb0daa19b5"
  },
  {
    "url": "zh/db/postgreSQL.html",
    "revision": "5cdfc8bcf9a0bcd9c1bcfecb8f909f70"
  },
  {
    "url": "zh/db/redis.html",
    "revision": "417fcb7be636a2eae8e9d9ac3dd424ac"
  },
  {
    "url": "zh/devops/index.html",
    "revision": "6aacef83a3660cd509bd2c1d38dff9a7"
  },
  {
    "url": "zh/distributed/index.html",
    "revision": "d8e556221d98578c4572fe8bcf5a1579"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "d7760a849460e14e047aa21c6624d424"
  },
  {
    "url": "zh/index.html",
    "revision": "0728ea3930d2454bb2c1e65fb59404c0"
  },
  {
    "url": "zh/math/index.html",
    "revision": "b31dc586c3423e71777a42998034c136"
  },
  {
    "url": "zh/os/coroutines.html",
    "revision": "679813d48d0d7e3212d154a9dd8bbff3"
  },
  {
    "url": "zh/os/cpu.html",
    "revision": "74aee86d743fe35e0731d8a4c5fff932"
  },
  {
    "url": "zh/os/index.html",
    "revision": "973d172580f090a1a3aa68cf6f815e57"
  },
  {
    "url": "zh/os/io.html",
    "revision": "27566fdb11da148d2ad7157dd5f247b2"
  },
  {
    "url": "zh/os/linux.html",
    "revision": "276b0c0ba0838d23408ed66cfa77bd69"
  },
  {
    "url": "zh/os/process.html",
    "revision": "7cc99316060af899cbd03260a5ba7ed0"
  },
  {
    "url": "zh/os/thread.html",
    "revision": "4a25828d10341c894e809a4522da0ecd"
  },
  {
    "url": "zh/program/c.html",
    "revision": "b998c0de61042733261f552b35d4ba8f"
  },
  {
    "url": "zh/program/golang.html",
    "revision": "a0254b7f610fc3eba5342b352d449fbc"
  },
  {
    "url": "zh/program/index.html",
    "revision": "bc06fddcdbbc1646df00b2805e9d4e8c"
  },
  {
    "url": "zh/program/javascript.html",
    "revision": "daef7c4e90688a60e25a4491c15bccda"
  },
  {
    "url": "zh/program/php.html",
    "revision": "04dc5583cefe6896ae4700a03a1d70a3"
  },
  {
    "url": "zh/program/python.html",
    "revision": "04db23b647f626054c029bd15ab3c3ae"
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
