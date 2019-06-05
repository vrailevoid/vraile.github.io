self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app').then(function(cache) {
      return cache.addAll([
          '/index.html',
          '/highscore.html',
          '/src/css/styles.css',
          '/src/js/script.js',
          '/src/js/app.js',
          '/manifest.json',
          '/bootstrap/bootstrap-4.3.1-dist/css/bootstrap.min.css',
          '/bootstrap/bootstrap-4.3.1-dist/js/bootstrap.min.js'
        // etc
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(function(response) {
      // Fall back to network
      return response || fetch(event.request);
    })
  );
});
