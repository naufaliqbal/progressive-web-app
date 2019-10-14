self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/src/app.js',
                '/src/App.vue',
                '/src/router.js',
                '/src/components',
                '/src/components/404.vue',
                '/src/components/Home.vue',
                '/src/components/Page1.vue',
                '/static/192.png',
                '/static/512.png',
                '/static/index.html',
                '/static/manifest.json',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).then(response => {
                return caches.open('v1').then(cache => {
                    cache.put(event.request, response.clone());
                    return response
                })
            }).catch(() => {
                return caches.match('/static/512.png')
            })
        })
    )
})

self.addEventListener('activate', (event) => {
    var cacheKeeplist = ['v1'];

    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (cacheKeeplist.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
});