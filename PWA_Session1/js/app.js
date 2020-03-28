if('serviceWorker' in navigator){
    try{
        let serviceWorker = navigator.serviceWorker.register('sw.js');
        console.log('Service worker registered');
    }
    catch(err){
        console.error(err);
    }
}


let artHistory = [];

function buildArticleMarkup(article){
    return `<div class ="article_item">
            <h2>${article.title}</h2>
            <p>${article.body}</p></div> `;
}

function updateHistory(article){
    artHistory.push(article);
    document.getElementById("history").innerHTML =
    document.getElementById("history").innerHTML + 
    buildArticleMarkup(article)
}

async function onOkButtonClickledAsync(){
    let targetEleId = "main_article";
    let artId = document.getElementById('id').value;
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${artId}`)
        let article = await response.json();
        document.getElementById(targetEleId).innerHTML = buildArticleMarkup(article);
        updateHistory(article);
    }
    catch(err){
        console.error(`error ${err}`)
    }
}
