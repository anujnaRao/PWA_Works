if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(registration => {
            console.log('Service worker registered in scope : ', registration.scope);
        })
        .catch(err => {
            console.error(err);
        })
}



let fetchTEXTButton = document.getElementById('fetchDetails');
fetchTEXTButton.addEventListener('click', fetchFunction);

// Using Form Request
function fetchFunction() {
    let user = document.getElementById("username").value;
    fetch('https://api.github.com/users/' + user)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById('uid').innerHTML = data.login;
            document.getElementById('uname').innerHTML = data.name;
            document.getElementById('userimg').src = data.avatar_url;
            document.getElementById('profile').innerHTML = data.html_url;
            document.getElementById('pro').href = data.html_url;
            document.getElementById('location').innerHTML = data.location;
            document.getElementById('bio').innerHTML = data.bio;
            document.getElementById('company').innerHTML = data.company;
            document.getElementById('created').innerHTML = data.created_at;
            document.getElementById('updated').innerHTML = data.updated_at;

        })
        .catch(error => console.error(error))
}

// let val = Object.values(data)
//     let key = Object.keys(data)
//     for(let i=0; i< key.length; i++){
//         console.log(key[i])
//         console.log(val[i])