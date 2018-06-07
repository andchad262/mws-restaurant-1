cconst version = "1.0.1";
const staticCacheName = `mws-restaurant-${version}`;

self.addEventListener("install", event => {
    event.waitUntil(
        caches
            .open(staticCacheName)
            .then(cache =>
                cache
                    .addAll([
                        "./",
                        "./index.html",
                        "./restaurant.html",
                        "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css",
                        "./css/styles.css",
                        "./css/styles-min.css",
                        "./js/main.js",
                        "./js/dbhelper.js",
                        "./js/restaurant_info.js",
                        "./img/1.jpg",
                        "./img/2.jpg",
                        "./img/3.jpg",
                        "./img/4.jpg",
                        "./img/5.jpg",
                        "./img/6.jpg",
                        "./img/7.jpg",
                        "./img/8.jpg",
                        "./img/9.jpg",
                        "./img/10.jpg"
                    ])
                    .then(() => self.skipWaiting())
            )
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches
            .keys()
            .then(cacheNames =>
                Promise.all(
                    cacheNames
                        .filter(
                            cacheName =>
                                cacheName.startsWith("mws-") && cacheName != staticCacheName
                        )
                        .map(cacheName => caches.delete(cacheName))
                )
            )
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(
            response =>
                response ||
                fetch(event.request).then(response =>
                    caches.open(staticCacheName).then(cache => {
                        cache.put(event.request.url, response.clone());

                        return response;
                    })
                )
        )
    );
});onst version = "1.0.1";
const staticCacheName = `mws-restaurant-${version}`;

self.addEventListener("install", e => {
    event.waitUntil(
        caches
            .open(staticCacheName)
            .then(cache =>
                cache
                    .addAll([
                        "./",
                        "./index.html",
                        "./restaurant.html",
                        "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css",
                        "./css/styles.css",
                        "./css/styles-min.css",
                        "./js/main.js",
                        "./js/dbhelper.js",
                        "./js/restaurant_info.js",
                        "./img/1.jpg",
                        "./img/2.jpg",
                        "./img/3.jpg",
                        "./img/4.jpg",
                        "./img/5.jpg",
                        "./img/6.jpg",
                        "./img/7.jpg",
                        "./img/8.jpg",
                        "./img/9.jpg",
                        "./img/10.jpg"
                    ])
                    .then(() => self.skipWaiting())
            )
    );
});

self.addEventListener("activate", e => {
    event.waitUntil(
        caches
            .keys()
            .then(cacheNames =>
                Promise.all(
                    cacheNames
                        .filter(
                            cacheName =>
                                cacheName.startsWith("mws-") && cacheName != staticCacheName
                        )
                        .map(cacheName => caches.delete(cacheName))
                )
            )
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(e.request).then(
            response =>
                response ||
                fetch(event.request).then(response =>
                    caches.open(staticCacheName).then(cache => {
                        cache.put(e.request.url, response.clone());

                        return response;
                    })
                )
        )
    );
});
