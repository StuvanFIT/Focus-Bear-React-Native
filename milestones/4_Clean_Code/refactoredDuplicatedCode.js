function getNewsByType(type) {
    const allNews = getNewsFromWeb();
    const filteredNews = [];
 
    for (let i = allNews.length - 1; i >= 0; i--){
        if (allNews[i].type === type) {
            filteredNews.push(allNews[i]);
        }
    }
    return filteredNews;
}

const javascriptNews = getNewsByType("javascript");
const rustNews = getNewsByType("rust");
const golangNews = getNewsByType("golang");