// this service worker is only used in dev builds, workbox-webpack-plugin generates the prod service worker.
// this removes any previous caches, allowing fresh content and HMR to work again.

self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => {
  event.waitUntil(async () => {
    const keys = await caches.keys()
    await Promise.all(keys.map(key => caches.delete(key)))
    console.log('worker caches cleared!')
  })
})
