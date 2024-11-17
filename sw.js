const CACHE_NAME = 'pce-calc-v1.0.1';
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
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('Service Worker: Clearing old cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
        .then(() => {
            console.log('Service Worker: Claiming clients');
            return self.clients.claim(); // 强制控制所有客户端
        })
    );
});

// 处理请求
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // 如果在缓存中找到响应，则返回缓存的版本
                if (response) {
                    return response;
                }
                // 否则发起网络请求
                return fetch(event.request)
                    .then(response => {
                        // 检查是否收到有效的响应
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        // 克隆响应，因为响应流只能使用一次
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        return response;
                    });
            })
    );
});

// 添加消息处理，用于接收更新通知
self.addEventListener('message', (event) => {
    if (event.data === 'skipWaiting') {
        self.skipWaiting();
    }
}); 