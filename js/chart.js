(function() {
   const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById(
      'sales_canvas'
   ));
   const ctx = canvas.getContext('2d');

   // Chart

   const myChart = new Chart(ctx, {
      type: 'line',
      data: {
         labels: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
         ],
         datasets: [
            {
               label: 'Sales Between',
               data: [40, 100, 10, 80, 50, 80, 30],
               backgroundColor: ['rgba(89,37,159,0.1)'],
               borderColor: ['rgba(89,37,159,0.8)'],
               borderWidth: 3
            }
         ]
      },
      options: {
         scales: {
            yAxes: [
               {
                  ticks: {
                     beginAtZero: true
                  }
               }
            ]
         }
      }
   });
})();
