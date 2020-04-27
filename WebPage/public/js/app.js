if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(registration =>{
        console.log('Service worker registered in scope : ',registration.scope);
    })
    .catch(err => {
        console.error(err);
    })
}


let fetchIMGButton = document.getElementById('display');
fetchIMGButton.addEventListener('click', fetchImgFunction);

function fetchImgFunction(){
    fetch('./img/pictures/mysore-palace.jpg')
    .then( result =>{
        return result.blob()
    })
    .then(res =>{
        let container = document.getElementById('dispaly');
        let img = document.createElement('img');
        container.appendChild(img);
        const imgURL = URL.createObjectURL(res);
        img.src = imgURL;
    })
    .catch(err =>{
        console.error(err);
    })
}

let fetchTEXTButton = document.getElementById('fetchtext');
fetchTEXTButton.addEventListener('click', fetchTextFunction);

function fetchTextFunction(){
    fetch('./text.txt')
    .then( result =>{
        return result.text()
    })
    .then(res =>{
        console.log(res);
    })
    .catch(err =>{
        console.error(err);
    })
}