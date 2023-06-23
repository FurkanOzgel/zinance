<style src="../assets/style/introduction.css" scoped>
</style>

<template>
  
  <nav>
    <div id="brand">
      <img id="logo" src="../assets/images/zinance_logo.jpeg">
    </div>
    <router-link to="/login" id="log-in">
        Giriş Yap &nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="32" fill="currentcolor"><path d="M489-120v-60h291v-600H489v-60h291q24 0 42 18t18 42v600q0 24-18 42t-42 18H489Zm-78-185-43-43 102-102H120v-60h348L366-612l43-43 176 176-174 174Z"/></svg>
    </router-link>
  </nav>

  <div id="main-container">
    <div id="introduction-text">
      <h1>
        wanna advice?<br>
        here you are the zinance!
      </h1>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp; Zinance kullanıcılarının gerçek piyasalarda yatırım yapıyormuş gibi piyasalarda yatırım araçları için alış-satış emirleri vermesine olanak sağlayan bir sitedir. Uzmanlar yaptıkları her işlem çifti için blog yazabilir ve bu sayede kullanıcılarımız doğrudan gerçek hayat beslenen kaynaklara erişerek doğru bilgiye ulaşmış olur.
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp; Siz de yatırım yapmaya meraklı ama bu konuda bilgisiz biriyseniz Zinance dünyasına katılın.
      </p>
      <a id="sing-up" href="pages/singUp.html">
        Zinance Hesabı Aç
      </a>
    </div>
    <div id="images-container">
      <div class="column">
        <img class="introduction-img" src="../assets/images/website_images/dashboard.png">
        <img class="introduction-img" src="../assets/images/website_images/blogs.png">
        <img class="introduction-img" src="../assets/images/website_images/markets.png">
      </div>
      <div class="column" style="display: flex; flex-direction: column; justify-content: center;">
        <img class="introduction-img" src="../assets/images/website_images/market_details.png">
        <img class="introduction-img" src="../assets/images/website_images/news.png"> 
      </div>
    </div>
  </div>

  <div id="applets">
    <div style="display:flex; flex-direction:row">
      <div id="blogs">
          <div id="applet-title-container">
              <span id="applet-title">Öne çıkan bloglar</span>
              <span id="applet-redirect">
                  Daha fazla blog gör
                  <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 -960 960 960" width="24" fill="currentcolor"><path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z"/></svg>
              </span>
          </div>
          <ul id="blog-list">
              <li v-for="blog in blog_list" class="blog">
                  <div>
                    <div class="blog-title">{{blog.title}}</div>
                    <div class="blog-author"><img :src="blog.author_img" style="height:15px;width:15px;border-radius:100%; margin-right:5px;">{{blog.author}}</div>
                 
                    <CanvasJSChart style="margin-top:-20px; height: 200px;" :options="blog.options"/>
                  
                    <div class="chart-bottom-container">
                       <div class="blog-symbol"><span>{{blog.symbol}}</span><span class="percentage-span">{{blog.in_time}} {{blog.change}}%</span></div>
                    </div>
                  </div>
              </li>
          </ul>
          <div class="sub-message">
              Bunun gibi eğitici içeriklere ücretsiz erişmek için
          </div>
      </div>
      <div id="coins">
          <div id="applet-title-container">
              <span id="applet-title">Popüler finansal enstürmanlar</span>
              <span id="applet-redirect">
                  Daha fazla piyasa gör
                  <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 -960 960 960" width="24" fill="currentcolor"><path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z"/></svg>
              </span>
          </div>
          <ul id="coin-list">
              <div class="title-bar">
                  <span class="title-item">Ad</span>
                  <span class="title-item">Fiyat</span>
                  <span class="title-item">24sa Değişim</span>
              </div>
              <li v-for="coin in coin_list" class="coin">
                  <span class="coin-span">
                  <img :src="source(coin)" class="coin-icon">
                      &nbsp;&nbsp;&nbsp;{{coin.symbol.slice(0,-3)}}
                  </span>
                  <span class="coin-span" style="font-weight:400; color:#D3D3D3;">₺{{coin.price}}</span>
                  <span class="coin-span" :class="get_coin_class(coin)">{{coin.percentage}}%</span>
              </li>
          </ul>
          <div class="sub-message">
              Kendi portföyünüzü ücretsiz olarak oluşturmak için
          </div>
      </div>
    </div>
    <div id="bottom">
      <button id="bottom-btn">Başlayın</button>
    </div>
  </div>
  
</template>


<script>
  export default {
    data() {
      return{
        coin_list: [
          {symbol: "BTCTRY", price: "559312", percentage: "+0.29"},
          {symbol: "BNBTRY", price: "6439", percentage: "+0.79"},
          {symbol: "BUSDTRY", price: "20.82", percentage: "-0.09"},
          {symbol: "ETHTRY", price: "37864", percentage: "+0.65"}
        ],
        blog_list: [
          {title: "Elon Musk'ın Tavırları Piyasaya Yön Verdi", "author": "Ayşe Biçe Çalışkan",
          author_img: "https://images.squarespace-cdn.com/content/v1/592738c58419c2fe84fbdb81/1571829929929-XRB9VF9242RNUKBBX55E/DwayneBrownStudio_OttawaLinkedInHeadshots_ClaireBrown.jpg?format=1000w",
          options: { "backgroundColor": "#1E2732", "zoomEnabled": false, "exportEnabled": false, "toolTip": { "enabled": false, "animationEnabled": false }, "axisY": { "labelFormatter": function () {return ""} , "gridThickness": 0, "tickLength": 0, "lineThickness": 0 }, "axisX": { "labelFormatter": function () {return ""}, "gridThickness": 0, "tickLength": 0, "lineThickness": 0 }, "data": [{ "type": "candlestick", "risingColor": "#03A66D", "fallingColor": "#CF304A", "color": "white", "dataPoints": [ {"x": new Date("2023-04-18T21:00:00.000Z"), "y": [0.9246, 0.9662, 0.9172, 0.9523]}, {"x": new Date("2023-04-19T21:00:00.000Z"), "y": [0.9521, 0.9601, 0.8735, 0.8916]}, {"x": new Date("2023-04-20T21:00:00.000Z"), "y": [0.8897, 0.8962, 0.8325, 0.8501]}, {"x": new Date("2023-04-21T21:00:00.000Z"), "y": [0.8496, 0.8597, 0.806, 0.8172]}, {"x": new Date("2023-04-22T21:00:00.000Z"), "y": [0.8194, 0.8484, 0.809, 0.8472]}, {"x": new Date("2023-04-23T21:00:00.000Z"), "y": [0.8462, 0.861, 0.8135, 0.8289]}, {"x": new Date("2023-04-24T21:00:00.000Z"), "y": [0.8285, 0.8407, 0.7924, 0.8193]}, {"x": new Date("2023-04-25T21:00:00.000Z"), "y": [0.8193, 0.8279, 0.7841, 0.8271]}, {"x": new Date("2023-04-26T21:00:00.000Z"), "y": [0.8276, 0.8552, 0.7777, 0.8273]}, {"x": new Date("2023-04-27T21:00:00.000Z"), "y": [0.8282, 0.8631, 0.8148, 0.8458]}, {"x": new Date("2023-04-28T21:00:00.000Z"), "y": [0.8458, 0.8459, 0.8112, 0.836]}, {"x": new Date("2023-04-29T21:00:00.000Z"), "y": [0.8357, 0.8516, 0.8313, 0.8471]}, {"x": new Date("2023-04-30T21:00:00.000Z"), "y": [0.847, 0.847, 0.8198, 0.825]}, {"x": new Date("2023-05-01T21:00:00.000Z"), "y": [0.8265, 0.829, 0.793, 0.8073]}, {"x": new Date("2023-05-02T21:00:00.000Z"), "y": [0.8036, 0.8212, 0.7976, 0.8193]}, {"x": new Date("2023-05-03T21:00:00.000Z"), "y": [0.8187, 0.839, 0.7966, 0.8357]}, {"x": new Date("2023-05-04T21:00:00.000Z"), "y": [0.8353, 0.8359, 0.8133, 0.82]}, {"x": new Date("2023-05-05T21:00:00.000Z"), "y": [0.819, 0.8338, 0.8085, 0.8313]}, {"x": new Date("2023-05-06T21:00:00.000Z"), "y": [0.8315, 0.8465, 0.7947, 0.8299]}, {"x": new Date("2023-05-07T21:00:00.000Z"), "y": [0.8293, 0.899, 0.8273, 0.8919]}, {"x": new Date("2023-05-08T21:00:00.000Z"), "y": [0.8915, 0.9378, 0.8185, 0.8265]}, {"x": new Date("2023-05-09T21:00:00.000Z"), "y": [0.825, 0.8461, 0.8032, 0.8261]}, {"x": new Date("2023-05-10T21:00:00.000Z"), "y": [0.8278, 0.965, 0.8198, 0.9362]}, {"x": new Date("2023-05-11T21:00:00.000Z"), "y": [0.9369, 1.035, 0.9323, 0.9985]}, {"x": new Date("2023-05-12T21:00:00.000Z"), "y": [0.9969, 1.3299, 0.9888, 1.2181]}, {"x": new Date("2023-05-13T21:00:00.000Z"), "y": [1.2216, 1.305, 1.1469, 1.178]}, {"x": new Date("2023-05-14T21:00:00.000Z"), "y": [1.178, 1.38, 1.1212, 1.1227]}, {"x": new Date("2023-05-15T21:00:00.000Z"), "y": [1.1218, 1.126, 1.0345, 1.0429]}, {"x": new Date("2023-05-16T21:00:00.000Z"), "y": [1.044, 1.07, 0.985, 1.014]}, {"x": new Date("2023-05-17T21:00:00.000Z"), "y": [1.0131, 1.0432, 0.9705, 1.0312]}, {"x": new Date("2023-05-18T21:00:00.000Z"), "y": [1.0328, 1.0328, 0.9791, 1.0168]}, {"x": new Date("2023-05-19T21:00:00.000Z"), "y": [1.0161, 1.125, 1.0118, 1.0366]}, {"x": new Date("2023-05-20T21:00:00.000Z"), "y": [1.0378, 1.1871, 1.0145, 1.1369]}, {"x": new Date("2023-05-21T21:00:00.000Z"), "y": [1.1361, 1.23, 1.1174, 1.1665]}, {"x": new Date("2023-05-22T21:00:00.000Z"), "y": [1.1659, 1.3536, 1.1512, 1.3126]} ] }] },
          symbol:"BTC", in_time: "5d", change:18, id:"chart1"},

          {title: "EPPDK'nin Cezası Hissenin Tüm Gidişatını Bozdu", "author": "Tuncay Turşucu",
          author_img: "https://media.licdn.com/dms/image/C4D03AQG9TL7BwqiXaQ/profile-displayphoto-shrink_800_800/0/1658743894418?e=2147483647&v=beta&t=nQz6hD9ncCJ-knGbr15i1gii6Pfe9qFglQ4Cd9enBD4",
          options: { "backgroundColor": "#1E2732", "zoomEnabled": false, "exportEnabled": false, "toolTip": { "enabled": false, "animationEnabled": false }, "axisY": { "labelFormatter": function () {return ""}, "gridThickness": 0, "tickLength": 0, "lineThickness": 0 }, "axisX": { "labelFormatter": function () {return ""}, "gridThickness": 0, "tickLength": 0, "lineThickness": 0 }, "data": [ { "type": "candlestick", "risingColor": "#03A66D", "fallingColor": "#CF304A", "color": "white", "dataPoints": [ {"x": new Date("2023-04-18T21:00:00.000Z"), "y": [249.8, 259, 246.7, 258.6]}, {"x": new Date("2023-04-19T21:00:00.000Z"), "y": [258.5, 268, 236, 240.7]}, {"x": new Date("2023-04-20T21:00:00.000Z"), "y": [240.7, 243.5, 231.2, 236.1]}, {"x": new Date("2023-04-21T21:00:00.000Z"), "y": [236.1, 239, 215, 220.3]}, {"x": new Date("2023-04-22T21:00:00.000Z"), "y": [220, 225.7, 216.9, 223.4]}, {"x": new Date("2023-04-23T21:00:00.000Z"), "y": [223.3, 223.5, 210.5, 220.4]}, {"x": new Date("2023-04-24T21:00:00.000Z"), "y": [220, 223.6, 209.1, 214.7]}, {"x": new Date("2023-04-25T21:00:00.000Z"), "y": [214.3, 217.2, 203.4, 214.9]}, {"x": new Date("2023-04-26T21:00:00.000Z"), "y": [214.9, 224, 196, 207.7]}, {"x": new Date("2023-04-27T21:00:00.000Z"), "y": [207.1, 214.2, 204.2, 209.7]}, {"x": new Date("2023-04-28T21:00:00.000Z"), "y": [209.6, 212.9, 203.8, 212.1]}, {"x": new Date("2023-04-29T21:00:00.000Z"), "y": [211.6, 225.5, 210.4, 223.1]}, {"x": new Date("2023-04-30T21:00:00.000Z"), "y": [223.1, 228, 214, 214.5]}, {"x": new Date("2023-05-01T21:00:00.000Z"), "y": [214.9, 215.5, 203.7, 206.2]}, {"x": new Date("2023-05-02T21:00:00.000Z"), "y": [205.9, 206.5, 201.5, 205]}, {"x": new Date("2023-05-03T21:00:00.000Z"), "y": [204.8, 208.6, 195.8, 206]}, {"x": new Date("2023-05-04T21:00:00.000Z"), "y": [206.1, 206.4, 197.5, 199.8]}, {"x": new Date("2023-05-05T21:00:00.000Z"), "y": [199.8, 205.7, 197.2, 204.2]}, {"x": new Date("2023-05-06T21:00:00.000Z"), "y": [204.2, 205.9, 188.4, 192.9]}, {"x": new Date("2023-05-07T21:00:00.000Z"), "y": [193.2, 197, 191, 192.2]}, {"x": new Date("2023-05-08T21:00:00.000Z"), "y": [191.8, 193.6, 168.1, 175.2]}, {"x": new Date("2023-05-09T21:00:00.000Z"), "y": [174.8, 176.5, 170.1, 175.6]}, {"x": new Date("2023-05-10T21:00:00.000Z"), "y": [175.6, 184.5, 170.5, 181.2]}, {"x": new Date("2023-05-11T21:00:00.000Z"), "y": [181, 181, 170.8, 174.8]}, {"x": new Date("2023-05-12T21:00:00.000Z"), "y": [174.3, 184.7, 167.9, 183]}, {"x": new Date("2023-05-13T21:00:00.000Z"), "y": [183.3, 186.2, 179.6, 179.7]}, {"x": new Date("2023-05-14T21:00:00.000Z"), "y": [179.5, 188.1, 177.9, 183.4]}, {"x": new Date("2023-05-15T21:00:00.000Z"), "y": [182.8, 192.7, 179.6, 180.5]}, {"x": new Date("2023-05-16T21:00:00.000Z"), "y": [179.9, 180.2, 174.6, 176.8]}, {"x": new Date("2023-05-17T21:00:00.000Z"), "y": [176.6, 182.4, 170.7, 179.3]}, {"x": new Date("2023-05-18T21:00:00.000Z"), "y": [178.7, 179.6, 173.7, 177.6]}, {"x": new Date("2023-05-19T21:00:00.000Z"), "y": [176.8, 177.3, 174, 175.1]}, {"x": new Date("2023-05-20T21:00:00.000Z"), "y": [175.2, 176.9, 173.6, 175.9]}, {"x": new Date("2023-05-21T21:00:00.000Z"), "y": [175.9, 176.9, 168.3, 170.4]}, {"x": new Date("2023-05-22T21:00:00.000Z"), "y": [170.9, 171.2, 166.5, 168.7]} ] } ] },
          symbol:"ODAŞ", in_time: "30d", change:-33, id:"chart2"},

          {title: "Etherium'un Güncellemesi Olumlu Bir Hava Yarattı", "author": "Murat Borucu",
          author_img: "https://cdn1.img.sputniknews.com.tr/img/07e6/0b/0a/1063278198_194:0:1007:813_1920x0_80_0_0_cfca3fc81acd22d3184d6b24540fd749.jpg",
          options: { "backgroundColor": "#1E2732", "zoomEnabled": false, "exportEnabled": false, "toolTip": { "enabled": false, "animationEnabled": false }, "axisY": { "labelFormatter": function () {return ""}, "gridThickness": 0, "tickLength": 0, "lineThickness": 0 }, "axisX": { "labelFormatter": function () {return ""}, "gridThickness": 0, "tickLength": 0, "lineThickness": 0 }, "data": [ { "type": "candlestick", "risingColor": "#03A66D", "fallingColor": "#CF304A", "color": "white", "dataPoints": [ {"x": new Date("2023-04-18T21:00:00.000Z"), "y": [1.3346, 1.36, 1.3317, 1.3586]}, {"x": new Date("2023-04-19T21:00:00.000Z"), "y": [1.3585, 1.4219, 1.3382, 1.3971]}, {"x": new Date("2023-04-20T21:00:00.000Z"), "y": [1.3969, 1.4162, 1.38, 1.3986]}, {"x": new Date("2023-04-21T21:00:00.000Z"), "y": [1.3987, 1.4151, 1.3911, 1.4095]}, {"x": new Date("2023-04-22T21:00:00.000Z"), "y": [1.4098, 1.4336, 1.4046, 1.4308]}, {"x": new Date("2023-04-23T21:00:00.000Z"), "y": [1.4304, 1.4479, 1.4185, 1.4394]}, {"x": new Date("2023-04-24T21:00:00.000Z"), "y": [1.4394, 1.4443, 1.3816, 1.3863]}, {"x": new Date("2023-04-25T21:00:00.000Z"), "y": [1.3861, 1.3881, 1.3543, 1.3656]}, {"x": new Date("2023-04-26T21:00:00.000Z"), "y": [1.3651, 1.3823, 1.3293, 1.3481]}, {"x": new Date("2023-04-27T21:00:00.000Z"), "y": [1.3477, 1.3611, 1.34, 1.3549]}, {"x": new Date("2023-04-28T21:00:00.000Z"), "y": [1.3546, 1.3887, 1.3401, 1.3881]}, {"x": new Date("2023-04-29T21:00:00.000Z"), "y": [1.3883, 1.4215, 1.3859, 1.4142]}, {"x": new Date("2023-04-30T21:00:00.000Z"), "y": [1.4142, 1.4162, 1.3974, 1.3977]}, {"x": new Date("2023-05-01T21:00:00.000Z"), "y": [1.3988, 1.4388, 1.3942, 1.4229]}, {"x": new Date("2023-05-02T21:00:00.000Z"), "y": [1.4229, 1.4449, 1.3912, 1.4282]}, {"x": new Date("2023-05-03T21:00:00.000Z"), "y": [1.4288, 1.4354, 1.41, 1.4238]}, {"x": new Date("2023-05-04T21:00:00.000Z"), "y": [1.424, 1.4374, 1.418, 1.4339]}, {"x": new Date("2023-05-05T21:00:00.000Z"), "y": [1.4339, 1.4798, 1.4294, 1.4727]}, {"x": new Date("2023-05-06T21:00:00.000Z"), "y": [1.4725, 1.4761, 1.4556, 1.4712]}, {"x": new Date("2023-05-07T21:00:00.000Z"), "y": [1.472, 1.4755, 1.4419, 1.4454]}, {"x": new Date("2023-05-08T21:00:00.000Z"), "y": [1.4454, 1.4496, 1.4077, 1.4429]}, {"x": new Date("2023-05-09T21:00:00.000Z"), "y": [1.4425, 1.4532, 1.4244, 1.4513]}, {"x": new Date("2023-05-10T21:00:00.000Z"), "y": [1.4513, 1.4714, 1.4405, 1.4602]}, {"x": new Date("2023-05-11T21:00:00.000Z"), "y": [1.4608, 1.4852, 1.4484, 1.4658]}, {"x": new Date("2023-05-12T21:00:00.000Z"), "y": [1.4669, 1.5387, 1.4573, 1.5237]}, {"x": new Date("2023-05-13T21:00:00.000Z"), "y": [1.5238, 1.5547, 1.5031, 1.5035]}, {"x": new Date("2023-05-14T21:00:00.000Z"), "y": [1.5034, 1.537, 1.4821, 1.5021]}, {"x": new Date("2023-05-15T21:00:00.000Z"), "y": [1.502, 1.515, 1.4652, 1.4736]}, {"x": new Date("2023-05-16T21:00:00.000Z"), "y": [1.4736, 1.482, 1.4319, 1.463]}, {"x": new Date("2023-05-17T21:00:00.000Z"), "y": [1.4628, 1.4689, 1.4405, 1.4619]}, {"x": new Date("2023-05-18T21:00:00.000Z"), "y": [1.4613, 1.471, 1.4411, 1.4576]}, {"x": new Date("2023-05-19T21:00:00.000Z"), "y": [1.4582, 1.4717, 1.4483, 1.4698]}, {"x": new Date("2023-05-20T21:00:00.000Z"), "y": [1.4698, 1.52, 1.4682, 1.5101]}, {"x": new Date("2023-05-21T21:00:00.000Z"), "y": [1.51, 1.6027, 1.4997, 1.565]}, {"x": new Date("2023-05-22T21:00:00.000Z"), "y": [1.5638, 1.6588, 1.5495, 1.6247]} ] } ] },
          symbol:"ETH", in_time: "5d", change:16.3, id:"chart3"},
        ]
      }
    },
    methods: {
      source(data) {
        return "./src/assets/images/crypto_icons/"+data.symbol.slice(0,-3).toLowerCase()+".png" 
      },
      is_increase(data) {
        if(data.percentage > 0) {
          return true
        }else{
          return false
        }
      },
      get_coin_class(coin) {
        return this.is_increase(coin) ? 'increase' : 'fall';
      }
    }
  }
</script>

