const CACHE_NAME = 'ver1';

let filesCache =[
    './',
    './templates/index.html',
    './js/app.js',
    './bootstrap/css/bootstrap.css',
    './bootstrap/css/bootstrap.js',
    './bootstrap/css/popper.min.js',
    './bootstrap/css/tooltip.min.js',
    './template/404.html',
    './template/offline.html'
];

// // //Installing
this.addEventListener('install', event => {
    console.log('Attempting to install service worker and cache static cache')
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(filesCache)
            })
    );
 self.skipWaiting()
});

self.addEventListener('activate', eve =>{
    console.log("Activated");
})


// // Dynamic and Static Caching
self.addEventListener('fetch', event =>{
    console.log('Fetch event for', event.request.url);
    event.respondWith(
        caches.match(event.request)
        .then(response =>{
            if(response){
                return response;
            }
            console.log('Network request for',event.request.url);
            return fetch(event.request)
            .then( response =>{
                if( response.status === 404){
                    return caches.match('404.html');
                }
                return caches.open(CACHE_NAME)
                .then( cache =>{
                    cache.put(event.request.url, response.clone());
                })
            })
        })
        .catch( err =>{
            console.error(err);
            return caches.match('offline.html')
        })
    )
})