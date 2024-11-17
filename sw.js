const CACHE_NAME = 'pce-calc-v1.0.2';
const CACHE_FILES = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/i18n.js',
    '/manifest.json'
];

// 安装 Service Worker
self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Caching files');
                return cache.addAll(CACHE_FILES);
            })
            .then(() => self.skipWaiting()) // 强制新 Service Worker 立即激活
    );
});

// 激活 Service Worker
self.addEventListener('activate', (event) => {
    console.log('Service Worker activating...');
    event.waitUntil(
        Promise.all([
            // 清理旧缓存
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cache => {
                        if (cache !== CACHE_NAME) {
                            console.log('Service Worker: Clearing old cache:', cache);
                            return caches.delete(cache);
                        }
                    })
                );
            }),
            // 立即接管所有页面
            self.clients.claim()
        ])
    );
});

// 处理请求
self.addEventListener('fetch', (event) => {
    event.respondWith(
        // 先尝试从网络获取
        fetch(event.request)
            .then(response => {
                // 如果成功获取到网络响应，更新缓存
                const responseClone = response.clone();
                caches.open(CACHE_NAME)
                    .then(cache => {
                        cache.put(event.request, responseClone);
                    });
                return response;
            })
            .catch(() => {
                // 如果网络请求失败，尝试从缓存获取
                return caches.match(event.request);
            })
    );
});

// 监听消息
self.addEventListener('message', (event) => {
    if (event.data === 'skipWaiting') {
        self.skipWaiting();
    }
}); 