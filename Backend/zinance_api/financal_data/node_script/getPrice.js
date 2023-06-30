const TradingView = require('@mathieuc/tradingview');

/*
  This example creates a BTCEUR daily chart
*/

const client = new TradingView.Client(); // Creates a websocket client

const chart = new client.Session.Chart(); // Init a Chart session

const item = process.argv[2];

chart.setMarket(item.split(":")[1]);
chart.setSeries("1D")

chart.onUpdate( () => {
    if (!chart.periods[0]) return;
    var price = chart.periods[0].close*100;
    price = parseInt(price)/100
    const responseData = {
        symbol: item.split(":")[1],
        description: chart.infos.description,
        local_description: chart.infos.local_description,
        price: `${price} ${chart.infos.currency_id}`,
        percentage: Math.round(((chart.periods[0].close - chart.periods[1].close)*100/
            chart.periods[1].close)*100)/100,
        type: chart.infos.type,
        listed_exchange: chart.infos.listed_exchange,
        country : chart.infos.country
    }
    console.log(responseData)
    client.end()
})

