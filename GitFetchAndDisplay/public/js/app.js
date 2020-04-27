if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(registration =>{
        console.log('Service worker registered in scope : ',registration.scope);
    })
    .catch(err => {
        console.error(err);
    })
}



// document.getElementById("mysorebtn") 
//         .addEventListener('click', function() { 
      
//             fetch('mysore.txt')
//             .then(function (response) {
//                 return response.text();
//             })
//             .then(function (data) {
//                 console.log(data)
//                 append_to_div("displayText",data);
//             })
//             .catch(function (err) {
//                 console.log('error: ' + err);
//             });
// }); 

// function append_to_div(div_name, data){ 
//     document.getElementById(div_name).innerText += data; 
//     console.log(data)
// } 
  

// Using Form Request
// postRequest('http://example.com/api/v1/users', {user: 'Dan'})
//   .then(data => console.log(data)) // Result from the `response.json()` call
//   .catch(error => console.error(error))

// function postRequest(url, data) {
//   return fetch(url, {
//     credentials: 'same-origin', // 'include', default: 'omit'
//     method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
//     body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
//     headers: new Headers({
//       'Content-Type': 'application/json'
//     }),
//   })
//   .then(response => response.json())
// }

// Using Form Post
// postForm('http://example.com/api/v1/users')
//   .then(data => console.log(data))
//   .catch(error => console.error(error))

// function postForm(url) {
//   const formData = new FormData(document.querySelector('form.edit-user'))

//   return fetch(url, {
//     method: 'POST', // or 'PUT'
//     body: formData  // a FormData will automatically set the 'Content-Type'
//   })
//   .then(response => response.json())
// }