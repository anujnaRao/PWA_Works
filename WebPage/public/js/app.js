if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(registration =>{
        console.log('Service worker registered in scope : ',registration.scope);
    })
    .catch(err => {
        console.error(err);
    })
}

//to display in next page

let fetchTEXTButton = document.getElementById('mysorebtn');
fetchTEXTButton.addEventListener('click', fetchMysoreFunction);

function fetchMysoreFunction(){
    fetch('mysore.txt')
    .then( result =>{
        return result.text()
    })
    .then(res =>{
        console.log(res)
        let displaydiv = document.getElementById('display');
        displaydiv.appendChild(res);
    })
    .catch(err =>{
        console.error(err);
    })
}