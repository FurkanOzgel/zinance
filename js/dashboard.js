function filterByKeyName(dataList, keyName) {
  let filteredList = [];

  for (let i = 0; i < dataList.length; i++) {
    let data = dataList[i];

    if (data.hasOwnProperty(keyName)) {
      filteredList.push(data[keyName]);
    }
  }

  return filteredList;
}

const app = Vue.createApp({
  template: `
  <div class="invests scrollable-div">
    <div class="invests-title">Kapalı İşlemler</div>
    <hr>
    
    <div v-for="order in user_data.closed_orders" style="padding-bottom:20px; border-bottom: 1px solid gray">
        <div class="invests-item">
            <div class="symbol">
                <img :src="get_img_source(order.symbol)" class="icon">
                <div style="margin-left: 10px;">{{order.symbol}}</div>
            </div>
            <div class="change" :class="get_order_type(order.profit_text)">{{order.profit_text}}</div>
        </div>
        <div>
            <div class="order-info">Piyasa Değeri <span>{{format_number(closed_market_value(order))}}₺</span></div>
            <div class="order-info">{{order.buy_date}} <span>{{order.buy_price}}₺</span></div>
            <div class="order-info">{{order.sell_date}} <span>{{order.sell_price}}₺</span></div>
        </div>
    </div>
  </div>

  <div id="graph-container" class="scrollable-div">
    <canvas id="graph1"></canvas>
    <canvas id="graph2"></canvas>
  </div>

  <div class="invests scrollable-div">
    <div class="invests-title">Açık İşlemler</div>
    
    <hr>
    <div v-for="order in user_data.open_orders" style="padding-bottom:20px; border-bottom: 1px solid gray">
        <div class="invests-item">
            <div class="symbol">
                <img :src="get_img_source(order.symbol)" class="icon">
                <div style="margin-left: 10px;">{{order.symbol}}</div>
            </div>
            <div class="change" :class="get_order_type(order.profit_text)">{{order.profit_text}}</div>
        </div>
        <div>
            <div class="order-info" >Piyasa Değeri <span>{{format_number(order.market_value)}}₺</span></div>
            <div class="order-info">{{order.buy_date}} <span>{{order.buy_price}}₺</span></div>
        </div>
    </div>
  </div>
  `,
  data() {
    return{
      user_data : null
    }
  },
  methods: {
    get_img_source(symbol) {
      return "../images/crypto_icons/"+symbol.toLowerCase()+".png" 
    },
    closed_market_value(data) {
      return data.amount * data.sell_price;
    },
    format_number(number) {
      if (Number.isInteger(number)) {
        return number.toFixed(0);
      } else {
        return number.toFixed(2);
      }
    },
    get_order_type(text) {
      if(text[0] == "+"){
        return "increase"
      }else{
        return "falling"
      }
    }
  },
  created() {
    fetch('../data/userData.json')
    .then(response => response.json())
    .then(async data => {
  
      data.closed_orders.forEach((item, index) => {
        let profit = item.amount * item.sell_price - item.amount * item.buy_price
        let profit_percentage = profit * 100 / (item.amount * item.buy_price)
  
        if (Number.isInteger(profit)) {
          profit = profit.toFixed(0);
        } else {
          profit = profit.toFixed(2);
        }
  
        if (profit > 0) {
          profit = "+" + profit
        }
  
        if (Number.isInteger(profit_percentage)) {
          profit_percentage = profit_percentage.toFixed(0);
        } else {
          profit_percentage = profit_percentage.toFixed(2);
        }
  
        if (profit_percentage > 0) {
          profit_percentage = "+" + profit_percentage
        }
  
        const profit_text = `${profit} (${profit_percentage}%)`
        data.closed_orders[index].profit_text = profit_text
      })
  
      for (let i = 0; i < data.open_orders.length; i++) {
        try {
          let response = await fetch('../data/coinList.json');
          let coin_data = await response.json();
  
          let item = data.open_orders[i];
          let target_coin = coin_data.find(coin => coin.symbol.slice(0, -3) === item.symbol);
  
          let market_value = item.amount * target_coin.price
  
          let profit = item.amount * target_coin.price - item.amount * item.buy_price
          let profit_percentage = profit * 100 / (item.amount * item.buy_price)
  
          if (Number.isInteger(profit)) {
            profit = profit.toFixed(0);
          } else {
            profit = profit.toFixed(2);
          }
  
          if (profit > 0) {
            profit = "+" + profit
          }
  
          if (Number.isInteger(profit_percentage)) {
            profit_percentage = profit_percentage.toFixed(0);
          } else {
            profit_percentage = profit_percentage.toFixed(2);
          }
  
          if (profit_percentage > 0) {
            profit_percentage = "+" + profit_percentage
          }
  
          let profit_text = `${profit} (${profit_percentage}%)`
          data.open_orders[i].profit_text = profit_text
          data.open_orders[i].market_value = market_value
        } catch (error) {
          console.log(error);
        }
      }
  
      this.user_data = data;
    })
    .catch(error => {
      console.log(error);
    });
  },

  mounted() {

    const budget = document.getElementById('graph1');
    Chart.defaults.borderColor = "#5a5a5a"
    Chart.defaults.color = 'white';

    new Chart(budget, {
        type: 'doughnut',
        data: {
          labels: filterByKeyName(this.user_data.open_orders, "symbol"),
          datasets: [{
            label: 'Bütçedeki Değeri',
            data: filterByKeyName(this.user_data.open_orders, "market_value"),
            borderWidth: 0
          }]
        },
        options: {
          maintainAspectRatio: true, // Boyutun korunması
            responsive: true,
            plugins:{
              title: {
                display: true,
                text: 'Bütçe Dağılımı',
                font: {
                  size: 18,
                  weight:"bold"
              },
              }
            },
            scales: {
                x: {
                  ticks: {
                    color: "white"
                  }
                },
                y: {
                  ticks: {
                    color: "white"
                  }
                }
              }
        }
    });



    const self_improvement = document.getElementById('graph2');
    this.user_data.budget_history
    new Chart(self_improvement, {
        type: 'line',
        data: {
            labels : this.user_data.budget_date,
            datasets : [
                {
                    label: "Bütçe Değeri",
                    fillColor : "rgba(255, 89, 114, 0.6)",
                    strokeColor : "rgba(51, 51, 51, 1)",
                    pointColor : "rgba(255, 89, 114, 1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(151,187,205,1)",
                    maintainAspectRatio: false,
                    data : this.user_data.budget_history
                }
            ]
        },
        options: {
            scales: {
                x: {
                  ticks: {
                    color: "white"
                  }
                },
                y: {
                  ticks: {
                    color: "white"
                  }
                }
              }
        }
    });
  }

})

app.mount(".main-container")
