const CACHE_NAME = 'version1';

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
];

//Installing
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

// self.addEventListener('fetch', function (event) {
// 	event.respondWith(
// 		fetch(event.request).catch(function () {
// 			return caches.match(event.request).then(function (response) {
// 				if (response) {
// 					return response;
// 				} else if (event.request.headers.get('accept').includes('text/html')) {
// 					return caches.match('./offline.html');
// 				} else if (response.status === 404) {
// 					return caches.match('./404.html');
// 				}
// 			});
// 		})
// 	);
// });


//Dynamic and Static Caching
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
