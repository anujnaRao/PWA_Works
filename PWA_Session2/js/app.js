let fetchJSONButton = document.getElementById('fetchjson');
fetchJSONButton.addEventListener('click', fetchFunction);


let fetchTEXTButton = document.getElementById('fetchtext');
fetchTEXTButton.addEventListener('click', fetchTextFunction);

let fetchIMGButton = document.getElementById('fetchimg');
fetchIMGButton.addEventListener('click', fetchImgFunction);

function fetchFunction(){
    fetch('data.json')
    .then( result =>{
        return result.json()
    })
    .then(res =>{
        console.log(res);
    })
    .catch(err =>{
        console.error(err);
    })
}

function fetchTextFunction(){
    fetch('data.txt')
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

function fetchImgFunction(){
    fetch('/2.jpg')
    .then( result =>{
        return result.blob()
    })
    .then(res =>{
        let container = document.getElementById('cont');
        let img = document.createElement('img');
        container.appendChild(img);
        const imgURL = URL.createObjectURL(res);
        img.src = imgURL;
    })
    .catch(err =>{
        console.error(err);
    })
}