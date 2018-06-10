var staticCacheName = "restaurant-static-v2";
self.addEventListener("install", function (event) {
    var urlsToCache = [
        '/',
        '/index.html',
        '/restaurant.html',
        '/css/styles.css',
        '/data/restaurants.json',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
        './img/6.jpg',
        './img/7.jpg',
        './img/8.jpg',
        './img/9.jpg',
        './img/10.jpg',
    ]

    event.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            console.log("Cache Successful");
            return cache.addAll(urlsToCache);
        })
    )
})

self.addEventListener('fetch', function (event) {
    if (event.pathname === '/') {
        event.respondWith(
            caches.open(dataCacheName).then(function (cache) {
                return fetch(event.request).then(function (response) {
                    cache.put(event.request.url, response.clone());
                    return response;
                });
            })
        );
    } else {
        event.respondWith(
            caches.match(event.request).then(function (response) {
                return response || fetch(event.request);
            })
        );
    }
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                    return cacheName.startsWith('restaurant-') && cacheName !== staticCacheName;
                }).map(function (cacheName) {
                    return caches.delete(cacheName)
                })
            )
        })
    )
})
