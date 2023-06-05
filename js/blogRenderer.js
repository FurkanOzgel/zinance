fetch('../data/blogs.json')
    .then((response) => response.json())
    .then((json) => {
        document.getElementsByClassName("main-container")[0].style.display = "flex"
        json.forEach((element, index) => {
            let div = document.createElement("div");
            div.innerHTML = `
                <div>
                    <div class="chart-container" id="chartContainer`+index+`"> </div>
                    <div class="blog-title">`+element.name+`</div>
                    <div class="blog-author">`+element.author+`</div>
                    <div class="blog-symbol"><span>`+element.symbol+`</span><span class="percentage-span">`+element.in_time+` `+element.percentage+`%</span></div>
                    <div class="blog-in_time"></div>
                    <div class="blog-date">10 Gün Önce</div>
                </div>
            `;

            div.className = "blog-container"
            document.getElementsByClassName("blog-list")[0].appendChild(div)

            let span = document.getElementsByClassName("percentage-span");
            span = document.getElementsByClassName("percentage-span")[span.length - 1];
            console.log(span)

            if(element.percentage > 0) {
                span.classList.add("increase-price")
            }else{
                span.classList.add("falling-price")

            }

            let data = element.price_data
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
            
                var chart = new CanvasJS.Chart("chartContainer"+index,
                {
                    backgroundColor: "#1E2732",
                    zoomEnabled: false,
                    exportEnabled: false,
                    toolTip:{
                        enabled: false,       
                        animationEnabled: false 
                      },
                    axisY: {
                        gridThickness: 0,
                        tickLength: 0,
                        lineThickness: 0,
                        labelFormatter: function(){
                        return " ";
                        }
                        
                    },
                    axisX: {
                        
                        gridThickness: 0,
                        tickLength: 0,
                        lineThickness: 0,
                        labelFormatter: function(){
                        return " ";
                        }
                        
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
        });

    })