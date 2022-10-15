<template>
  <div id="chart">
    <apexchart type="scatter" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>
  
<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  name: "scatter-chart",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [{
        name: "SAMPLE A",
        data: [
          [700, 9], [550, 6]]
      }, {
        name: "SAMPLE B",
        data: [
          [500, 7], [550, 2]]
      }, {
        name: "SAMPLE C",
        data: [
          [300, 4.2]]
      }],
      markers: {
        size: '40px'
      },
      chartOptions: {
        chart: {
          height: 350,
          type: 'scatter',
          zoom: {
            enabled: true,
            type: 'xy'
          }
        },
        xaxis: {
          tickAmount: 5,
          min: 100,
          max: 900,
          labels: {
            formatter: function (val) {
              return parseFloat(val).toFixed(1)
            }
          }
        },
        yaxis: {
          tickAmount: 5,
          min: 0,
          max: 10
        }
      },
    }
  }
};
</script>
  