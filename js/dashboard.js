const budget = document.getElementById('graph1');


new Chart(budget, {
    type: 'doughnut',
    data: {
        labels: ["TRX", "ALPINE", "EOS", "AVAX"],
        datasets: [{
            label: ' of Votes',
            data: [12, 19, 3, 5],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        style: "color:white"
                    }
                }
            }
        }
    }
});



const self_improvement = document.getElementById('graph2');

new Chart(self_improvement, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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