const budget = document.getElementById('graph1');
Chart.defaults.borderColor = "#5a5a5a"
Chart.defaults.color = 'white';

new Chart(budget, {
    type: 'doughnut',
    data: {
        labels: ["TRX", "ALPINE", "EOS", "AVAX"],
        datasets: [{
            label: ' Value in Budget',
            data: [12, 19, 3, 5],
            borderWidth: 0
        }]
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



const self_improvement = document.getElementById('graph2');

new Chart(self_improvement, {
    type: 'line',
    data: {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
            {
                label: "Value of Budget",
                fillColor : "rgba(255, 89, 114, 0.6)",
                strokeColor : "rgba(51, 51, 51, 1)",
                pointColor : "rgba(255, 89, 114, 1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(151,187,205,1)",
                maintainAspectRatio: false,
                data : [10000, 6800, 5500, 8000, 7700, 9200, 12300]
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