
var url_string = document.URL
var url = new URL(url_string);
var id = url.searchParams.get("id");


fetch('../../data/blogDetails.json')
    .then((response) => response.json())
    .then((json) => {
        document.title = json[id].blog_title + " | Zinance";
        document.getElementById("blog-content").innerHTML = json[id].blog_innterHTML;
        document.getElementById("blog-top").innerHTML = json[id].blog_title;
        document.getElementById("profile").src = json[id].author.profile_img;
        document.getElementById("author-name").innerHTML = json[id].author.name;

        document.getElementById("total-budget").innerHTML = json[id].author.total_budget+"₺";
        if(json[id].author.total_budget > 10000) {
            document.getElementById("total-budget").className = "increase";
        }else{
            document.getElementById("total-budget").className = "falling";
        }

        document.getElementById("annual-change").innerHTML = json[id].author.annual_change+"%";
        if(json[id].author.annual_change > 0) {
            document.getElementById("annual-change").className = "increase";
        }else{
            document.getElementById("annual-change").className = "falling";
        }

        document.getElementById("monthly-change").innerHTML = json[id].author.monthly_change+"%";
        if(json[id].author.monthly_change > 0) {
            document.getElementById("monthly-change").className = "increase";
        }else{
            document.getElementById("monthly-change").className = "falling";
        }

        document.getElementById("weekly-change").innerHTML = json[id].author.weekly_change+"%";
        if(json[id].author.weekly_change > 0) {
            document.getElementById("weekly-change").className = "increase";
        }else{
            document.getElementById("weekly-change").className = "falling";
        }

        document.getElementById("icon").innerHTML = json[id].order_info.symbol;

        const budget_change = json[id].order_info.end_price - json[id].order_info.start_price
        document.getElementById("order-change").innerHTML = budget_change.toFixed(2)+"₺ ("+(budget_change*100/json[id].order_info.start_price).toFixed(2)+"%)";
        if(budget_change > 0) {
            document.getElementById("order-change").className = "increase";
        }else{
            document.getElementById("order-change").className = "falling";
        }

        document.getElementById("market-value").innerHTML = json[id].order_info.market_value+"₺";

        document.getElementById("start-price").innerHTML = json[id].order_info.start_price+"₺";
        document.getElementById("end-price").innerHTML = json[id].order_info.end_price+"₺";

        const comment_container = document.getElementById("comment-container")
        json[id].comments.forEach((item, index)=>{
            const comment = document.createElement("div");
            comment.className = "comment";
            comment.innerHTML = `
            <img src="`+item.profile_img+`" style=" margin:10px; border-radius: 100%; width: 40px; height: 40px">
            <div style="display: flex; justify-content: center; font-size: 14px; flex-direction: column">
                <span style="font-weight: bold;">`+item.name+`</span>
                <span style="color:whitesmoke">`+item.comment_content+`</span>
            </div>
            `
            comment_container.appendChild(comment)
        })


    })
