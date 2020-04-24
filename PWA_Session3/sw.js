const CACHE_NAME = 'V1';

const filesCache =[
    '/',
    'index.html',
    'offline.html',
    '404.html',
    '/css/style.css',
    'icon-384x384.png'
];


this.addEventListener('install', event => {
    console.log('Attempting to install service worker and cache static cache')
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(filesCache)
            })
    );
});

self.addEventListener('fetch', event =>{
    console.log('Fetch event for', event.request.url);
    event.respondWith(
        caches.match(event.request)
        .then(response =>{
            if(response){
                console.log('Found', event.request.url,'in cache');
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

// We have to do the replacement of old cahce with new one