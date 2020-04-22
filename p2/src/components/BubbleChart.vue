<script>
  //Importing Bubble class from the vue-chartjs wrapper
  import { Bubble } from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default {
    extends: Bubble,
    name: 'bubble-chart',
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['Data'],
          datasets: [
            {
              label: 'Devices Ordered',
              backgroundColor: 'violet',
              pointBackgroundColor: 'grey',
              borderWidth: 1,
              pointBorderColor: 'pink',
              //Data to be represented on y-axis
              data: [
                {
                  x: 500,
                  y: 2,
                  r: 9
                },
                {
                  x: 1000,
                  y: 20,
                  r:  10
                },
                {
                  x: 300,
                  y: 1,
                  r: 6
                },
                {
                  x: 9000,
                  y: 25,
                  r: 25
                },
                {
                  x: 470,
                  y: 3,
                  r: 8
                },
                {
                  x: 100,
                  y: 1,
                  r: 5
                },
                {
                  x: 3500,
                  y: 8,
                  r: 15
                },
                {
                  x: 6000,
                  y: 13,
                  r:  10
                },
                {
                  x: 400,
                  y: 6,
                  r: 8
                },
                {
                  x: 8000,
                  y: 15,
                  r: 20
                },
                {
                  x: 2000,
                  y: 3,
                  r: 15
                },
                {
                  x: 100,
                  y: 1,
                  r: 5
                }
              ]
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          scales: {
            yAxes: [{
              scaleLabel: {
              display: true,
              labelString: '# of Devices Sold'
              },
              ticks: {
                beginAtZero: false
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              scaleLabel: {
              display: true,
              labelString: '# Amound Sold'
              },
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>