<template>
  <div id="chart">
    <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>
  
<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  name: "line-chart",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [{
        name: 'Sales',
        data: [220, 350, 410, 90, 29, 519, 622, 219, 220, 350, 410, 90, 29, 519, 622, 219]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          foreColor: '#000011',
        },
        // forecastDataPoints: {
        //   count: 7
        // },
        stroke: {
          width: 5,
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
          tickAmount: 10,
          // labels: {
          //   formatter: function (value, timestamp, opts) {
          //     return opts.dateFormatter(new Date(timestamp), 'dd MMM')
          //   }
          // }
        },
        title: {
          text: 'Price Trend',
          align: 'left',
          style: {
            fontSize: "20px",
            color: '#866FAC'
          }
        },
        yaxis: {
          min: 0,
          max: 800,
          tickAmount: 4
        }
      }
    }
  }
};
</script>
  
<style>
.apexcharts-menu-icon {
  display: none;
}
</style>
  