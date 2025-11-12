function getJavascriptNews() {
    const allNews = getNewsFromWeb();
    const news = [];
 
    for (let i = allNews.length - 1; i >= 0; i--){
        if (allNews[i].type === "javascript") {
            news.push(allNews[i]);
        }
    }
 
    return news;
}
 
function getRustNews() {
    const allNews = getNewsFromWeb();
    const news = [];
 
    for (let i = allNews.length - 1; i >= 0; i--){
        if (allNews[i].type === "rust") {
            news.push(allNews[i]);
        }
    }
 
    return news;
}

function getGolangNews() {
  const news = [];
  const allNews = getNewsFromWeb();

  for (let i = allNews.length - 1; i >= 0; i--) {
    if (allNews[i].type === 'golang') {
      news.push(allNews[i]);
    }
  }

  return news;
}