fetch('../data/blogs.json')
    .then((response) => response.json())
    .then((json) => {
        document.getElementsByClassName("main-container")[0].style.display = "flex"
        json.forEach((element, index) => {
            let a= document.createElement("a");
            a.innerHTML = `
                <div>
                    <div class="blog-title">`+element.name+`</div>
                    <div class="blog-author"><img src="../images/profile.jpg" style="height:20px;width:20px;border-radius:100%; margin-right:5px;">`+element.author+`</div>
                    <div class="chart-container" id="chartContainer`+index+`"> </div>
                    <div class="chart-bottom-container">
                        <div class="blog-symbol"><span>`+element.symbol+`</span><span class="percentage-span">`+element.in_time+` `+element.percentage+`%</span></div>
                        <div class="blog-date">`+ Math.floor((Date.now() - new Date(element.publish_date * 1000)) / (24 * 60 * 60 * 1000))+` Gün Önce</div>
                    </div>
                </div>
            `;
            a.href = element.url;
            a.className = "blog-container"
            document.getElementsByClassName("blog-list")[0].appendChild(a)

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
                        risingColor: "#03A66D",
                        fallingColor:"#CF304A",
                        color:"white",
                        dataPoints: chart_data
                    }
                    ]
                });
            chart.render();
        });

    })