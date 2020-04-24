if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(registration =>{
        console.log('Service worker registered in scope : ',registration.scope);
    })
    .catch(err => {
        console.error(err);
    })
}