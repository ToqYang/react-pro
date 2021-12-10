importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js"
);
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst } = workbox.strategies;

registerRoute(
  new RegExp(
    "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  ),
  new CacheFirst()
);

registerRoute(
  new RegExp(
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css"
  ),
  new CacheFirst()
);

registerRoute(new RegExp("/api/auth"), new NetworkFirst());
registerRoute(new RegExp("/api/auth"), new NetworkFirst());