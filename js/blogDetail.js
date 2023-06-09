
var url_string = document.URL
var url = new URL(url_string);
var id = url.searchParams.get("id");


fetch('../../data/blogDetails.json')
    .then((response) => response.json())
    .then((json) => {
        document.title = json[id].blog_title + " | Zinance";
        // document.getElementById("blog-content").innerHTML = json[id].blog_innterHTML;
        document.getElementById("blog-top").innerHTML = json[id].blog_title;
        
    })


fetch("../../data/blogDetails.json")
    .then((response) => response.json())
    .then((json) => {
        let coin_data = json[id]

        let data = coin_data.price_data
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


        
            var chart = new CanvasJS.Chart("chart",
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
                    risingColor: "#03A66D",
                    fallingColor:"#CF304A",
                    color:"white",
                    dataPoints: chart_data
                }
                ]
            });
            chart.render();
        }

    );
