
let filesCache =[
    './',
    './index.html',
    './js/app.js',
    './css/bootstrap.css',
    './css/bootstrap.js',
    './css/popper.min.js',
    './css/tooltip.min.js',
    './css/style.css',
    './css/jquery-3.4.0.slim.min.js',
    './404.html',
    './offline.html',
    './img/pictures/gateway-india.jpg',
    './img/pictures/harmandir-sahib.jpg',
    './img/pictures/mysore-palace.jpg',
    './img/pictures/red-fort.jpg',
    './img/pictures/taj-mahal.jpg',
    './img/pictures/varanasi.jpg'
];

const CACHE_NAME = 'our-second-cache';

// //Installing
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

// Dynamic and Static Caching
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


self.addEventListener('activate', event => {
    console.log('activating a new service worker');

    const cacheWhiteList = [filesCache];
    

    event.waitUntil(
        caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhiteList.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            )
        })
    )
})