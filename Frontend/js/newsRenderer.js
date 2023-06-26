import data from '../data/news.json' assert { type: 'json' };


let list_div = document.getElementsByClassName("news-list")[0];
let news_container;
let news_title;
let news_image;
let news_date;

data.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
});

data.forEach((item)=>{
    news_container = document.createElement("a");
    news_title = document.createElement("p");
    news_image = document.createElement("img");
    news_date = document.createElement("p");

    news_container.className = "news-container"
    news_container.classList.add(item.category)
    news_container.href = item.url
    
    news_image.src = item.img;
    news_image.className = "news-img"
    news_container.appendChild(news_image);
    
    news_title.innerHTML = item.title;
    news_title.className = "news-title"
    news_container.appendChild(news_title);
    
    news_date.innerHTML = item.date;
    news_date.className = "news-date"
    news_container.appendChild(news_date);

    list_div.appendChild(news_container);
})
