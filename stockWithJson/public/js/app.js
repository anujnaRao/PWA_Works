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

fetch('../textfiles/mysore.txt')
.then(response => response.text())
.then(data=> {
    document.getElementById("displayText").innerHTML =""
    document.getElementById("displayText").innerHTML = data
})
.catch(error => console.error(error));
}


let fetchTEXTButton1 = document.getElementById('agrabtn');
fetchTEXTButton1.addEventListener('click', fetchAgraFunction);

function fetchAgraFunction(){

fetch('../textfiles/agrataj.txt')
.then(response => response.text())
.then(data=> {
    document.getElementById("displayText").innerHTML =""
    document.getElementById("displayText").innerHTML = data
    console.log(data)
})
.catch(error => console.error(error));
}


let fetchTEXTButton2 = document.getElementById('varanasibtn');
fetchTEXTButton2.addEventListener('click', fetchVarFunction);

function fetchVarFunction(){

fetch('../textfiles/varnasi.txt')
.then(response => response.text())
.then(data=> {
    document.getElementById("displayText").innerHTML =""
    document.getElementById("displayText").innerHTML = data
})
.catch(error => console.error(error));
}


let fetchTEXTButton3 = document.getElementById('delhibtn');
fetchTEXTButton3.addEventListener('click', fetchDelhiFunction);

function fetchDelhiFunction(){

fetch('../textfiles/delhi.txt')
.then(response => response.text())
.then(data=> {
    document.getElementById("displayText").innerHTML =""
    document.getElementById("displayText").innerHTML = data
})
.catch(error => console.error(error));
}


let fetchTEXTButton4 = document.getElementById('mumbaibtn');
fetchTEXTButton4.addEventListener('click', fetchMumFunction);

function fetchMumFunction(){

fetch('../textfiles/mumbai.txt')
.then(response => response.text())
.then(data=> {
    document.getElementById("displayText").innerHTML =""
    document.getElementById("displayText").innerHTML = data
})
.catch(error => console.error(error));
}


let fetchTEXTButton5 = document.getElementById('amritsarbtn');
fetchTEXTButton5.addEventListener('click', fetchAmtFunction);

function fetchAmtFunction(){

fetch('../textfiles/amritsar.txt')
.then(response => response.text())
.then(data=> {
    document.getElementById("displayText").innerHTML =""
    document.getElementById("displayText").innerHTML = data
})
.catch(error => console.error(error));
}