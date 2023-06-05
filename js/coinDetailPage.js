
var url_string = document.URL
var url = new URL(url_string);
var symbol = url.searchParams.get("coin");

document.title = symbol + " | Zinance"


fetch('../../data/coinList.json')
    .then((response) => response.json())
    .then((json) => {
        let div = document.createElement("div")
        let p = document.createElement("p")
        json.forEach((item) => {
            if(item.symbol.slice(0,-3) == symbol){
                p.innerHTML = symbol.toUpperCase()
                document.getElementsByClassName("input-container")[1].appendChild(p)
                if(item.percentage >= 0){
                    div.innerHTML = `
                    <span class="item-symbol">
                        <img class="icon" src="../../images/crypto_icons/`+item.symbol.slice(0,-3).toLocaleLowerCase()+`.png">
                        `+item.symbol.slice(0,-3)+`</span>
                    <span class="item-price">₺`+ Number(item.price)+`</span>
                    <div class="item-change increase"><div id="item-change-div">`+Math.round(item.percentage*100)/100+`%</div></div>
                    <span class="item-volume">₺`+Math.round(item.volume*100)/100+`</span>
                    
                    `
                }else{
                    div.innerHTML = `
                    <span class="item-symbol">
                        <img class="icon" src="../../images/crypto_icons/`+item.symbol.slice(0,-3).toLocaleLowerCase()+`.png">
                        `+item.symbol.slice(0,-3)+`</span>
                    <span class="item-price">₺`+ Number(item.price)+`</span>
                    <div class="item-change down"><div id="item-change-div">`+Math.round(item.percentage*100)/100+`%</div></div>
                    <span class="item-volume">₺`+Math.round(item.volume*100)/100+`</span>
                    `
                }
                div.classList.add( "coin-list-item")
                document.getElementsByClassName("coin-list")[0].appendChild(div)
            }
        })

    })

let coin_data;

fetch('../../data/coinDetails.json')
    .then((response) => response.json())
    .then((json) => {
        json.every(item => {
            if (item.symbol.slice(0,-3) == symbol) {
                coin_data = item;
                return false;
            }
            return true;
          });

        let data = JSON.parse(coin_data.data)
        let chart_data = [];
        let list;
        

        for(let i = 0; i < Object.keys(data.O).length; i ++){
            let myDate = new Date(data.Close_Time[i]);
            let year = myDate.getFullYear()
            let month = myDate.getMonth()
            let day = myDate.getDate()

            let json_data = {x: new Date(year, month, day) ,y:[Number(data.O[i]), Number(data.h[i]), Number(data.l[i]), Number(data.C[i])]}
            chart_data.push(json_data)
        }


        
            var chart = new CanvasJS.Chart("chartContainer",
            {
                backgroundColor: "#15202B",
                zoomEnabled: true,
                exportEnabled: false,
                axisY: {
                    labelFontColor: "white",
                    includeZero:false,
                    prefix: "₺ ",
                },
                axisX: {
                    interval:8,
                    intervalType: "day",
                    valueFormatString: "DD-MMM",
                    labelAngle: -45,
                    labelFontColor: "white",
                    
                },
                data: [
                {
                    type: "candlestick",
                    risingColor: "green",
                    fallingColor:"red",
                    color:"white",
                    dataPoints: chart_data
                }
                ]
            });
            chart.render();
        }

    );


document.getElementsByClassName("order-type-container")[0].addEventListener("click", () => {
    document.getElementsByClassName("order-type-container")[0].classList.add("buy-active")
    document.getElementsByClassName("order-type-container")[1].classList.remove("sell-active")
    document.getElementById("order-btn").innerHTML = "Satın Al";
    document.getElementById("order-btn").style.backgroundColor = "green";

})

document.getElementsByClassName("order-type-container")[1].addEventListener("click", () => {
    document.getElementsByClassName("order-type-container")[1].classList.add("sell-active")
    document.getElementsByClassName("order-type-container")[0].classList.remove("buy-active")
    document.getElementById("order-btn").innerHTML = "Sat";
    document.getElementById("order-btn").style.backgroundColor = "red"
})

function give_order(order) {
    if(order.innerHTML == "Satın Al") {
        console.log("satın al")
    }else{
        console.log("sat")
    }
}


