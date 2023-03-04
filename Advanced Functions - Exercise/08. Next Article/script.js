function getArticleGenerator(articles) {
    let  div = document.getElementById('content'); 
    return function(){
        let article = articles.shift();
        if (article !== undefined){
            let articleEl = document.createElement('article'); 
            articleEl.textContent = article;
            div.appendChild(articleEl);
        }
    };
}
