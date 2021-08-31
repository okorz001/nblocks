// this service worker is only used in dev builds, workbox-webpack-plugin generates the prod service worker.
// this removes any previous service worker and reloads the page, allowing fresh content and HMR to work again.
// https://medium.com/@nekrtemplar/self-destroying-serviceworker-73d62921d717

self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  self.registration.unregister()
    .then(function() {
      return self.clients.matchAll();
    })
    .then(function(clients) {
      clients.forEach(client => client.navigate(client.url))
    });
});
