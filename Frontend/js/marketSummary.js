import data from '../data/coinList.json' assert { type: 'json' };

data.forEach((item)=>{
    let list= document.getElementsByClassName("all-coins")[0]
    let div = document.createElement("div")
    if(item.percentage >= 0){
        div.innerHTML = `
        <div  class = "coin-list-item" onclick = "goDetailPage(this)">
            <span class="item-symbol">
                <img class="icon" src="../../images/crypto_icons/`+item.symbol.slice(0,-3).toLocaleLowerCase()+`.png">
                `+item.symbol.slice(0,-3)+`</span>
            <span class="item-price">₺`+ Number(item.price)+`</span>
            <div class="item-change increase"><div id="item-change-div">`+Math.round(item.percentage*100)/100+`%</div></div>
            <span class="item-volume">₺`+Math.round(item.volume*100)/100+`</span>
        </div>
        `
    }else{
        div.innerHTML = `
        <div  class = "coin-list-item" onclick = "goDetailPage(this)">
            <span class="item-symbol">
                <img class="icon" src="../../images/crypto_icons/`+item.symbol.slice(0,-3).toLocaleLowerCase()+`.png">
                `+item.symbol.slice(0,-3)+`</span>
            <span class="item-price">₺`+ Number(item.price)+`</span>
            <div class="item-change down"><div id="item-change-div">`+Math.round(item.percentage*100)/100+`%</div></div>
            <span class="item-volume">₺`+Math.round(item.volume*100)/100+`</span>
        </div>
        `
    }
    list.appendChild(div)
})

let most_increased = data;
most_increased.sort((a, b) => {
    if (a.percentage < b.percentage) {
      return -1;
    }
  });

most_increased = most_increased.reverse().splice(0,3)

most_increased.forEach((item) => {

    let list = document.getElementById("raise-list")
    let div = document.createElement("div")
    if(item.percentage >= 0){
        div.innerHTML = `
        <div style="display: flex; justify-content: space-between;  margin-bottom: 7px;">
            <span class="symbol">
                <img style="width: 24px; height: 24px;" class="icon" src="../../images/crypto_icons/`+item.symbol.slice(0,-3).toLocaleLowerCase()+`.png">
                `+item.symbol.slice(0,-3)+`</span>
            <span class="price">₺`+ Math.round(item.price*100)/100+`</span>
            <span class="change increase">`+Math.round(item.percentage*100)/100+`%</span>
        </div>
        `
    }else{
        div.innerHTML = `
        <div style="display: flex; justify-content: space-between; margin-bottom: 7px;">
            <span class="symbol">
                <img style="width: 24px; height: 24px;" class="icon" src="../../images/crypto_icons/`+item.symbol.slice(0,-3).toLocaleLowerCase()+`.png">
                `+item.symbol.slice(0,-3)+`</span>
            <span class="price">₺`+ Math.round(item.price*100)/100+`</span>
            <span class="change down">`+Math.round(item.percentage*100)/100+`%</span>
        </div>
        `
    }
    
    list.appendChild(div)
})

let most_volume = data;

most_volume.sort((a, b) => {
    if (a.volume < b.volume) {
      return -1;
    }
  });

most_volume =  most_volume.reverse().splice(2,3)

most_volume.forEach((item) => {

    let list = document.getElementById("volume-list")
    let div = document.createElement("div")
    let price = item.price.slice(0,8)
    if( !(price < 0.01)) {
        price = Math.round(item.price*100)/100
    }

    if(item.percentage >= 0){
        div.innerHTML = `
        <div style="display: flex; justify-content: space-between; margin-bottom:7px;">
            <span class="symbol">
                <img style="width: 24px; height: 24px;" class="icon" src="../../images/crypto_icons/`+item.symbol.slice(0,-3).toLocaleLowerCase()+`.png">
                `+item.symbol.slice(0,-3)+`</span>
            <span class="price">₺`+ price+`</span>
            <span class="change increase">`+Math.round(item.percentage*100)/100+`%</span>
        </div>
        `
    }else{
        div.innerHTML = `
        <div style="display: flex; justify-content: space-between; margin-bottom:7px;">
            <span class="symbol">
                <img style="width: 24px; height: 24px;" class="icon" src="../../images/crypto_icons/`+item.symbol.slice(0,-3).toLocaleLowerCase()+`.png">
                `+item.symbol.slice(0,-3)+`</span>
            <span class="price">₺`+ price +`</span>
            <span class="change down">`+Math.round(item.percentage*100)/100+`%</span>
        </div>
        `
    }
    list.appendChild(div)
})

