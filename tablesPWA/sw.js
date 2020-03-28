//installing 

//caches.open
//cache addAll and cache.all

// To store the static files in the cache for offline chaching and synching
const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/css/bootstrap.css',
    '/css/bootstrap.js',
    '/css/popper.min.js',
    '/css/tooltip.min.js',
    '/css/jquery-3.4.0.slim.min.js',
    '/icon-384x384.png',
];

//The begining two lines are for the installation of the service worker
//It works only if the serviceWorker is present in the browser
//It is registered and installed
self.addEventListener('install', event =>{
    console.log('service worker has been installed');
    event.waitUntil(
    caches.open(staticCacheName).then(cache => {
        console.log('caching shell assets');
        cache.addAll(assets);
     })
    );
});

//activation - activated service worker and if it is running or stopped the info is displayed in the inspect

self.addEventListener('activate',event =>{
    console.log('Serive workering has been activated');
});

//fetch event
//Button to add on home screen
// The offline caching and synching done with the option to download the app
self.addEventListener('fetch', event => {
    console.log('Fetch event fired', event);
    event.respondWith(
        caches.match(event.request).then(cacheRes => {
            return cacheRes || fetch(event.request);
        })
    );
});
