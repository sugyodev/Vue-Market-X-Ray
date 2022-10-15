<template>
  <div id="chart" ref="btnRef" v-on:mouseenter="toggleTooltip()" v-on:mouseleave="toggleTooltip()">
    <apexchart type="radar" height="350" :options="chartOptions" :series="series"></apexchart>
    <div ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow, 'block': tooltipShow}"
      class="bg-[#FFB543] tooltip border-0 mr-3 block z-50 font-normal leading-normal text-white text-sm text py-3 px-8 rounded">
      87 vs 98 <br />in Network <br />category <br />Score
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import { createPopper } from "@popperjs/core";
export default {
  name: "radar-chart",
  components: {
    apexchart: VueApexCharts,
  },
  methods: {
    toggleTooltip: function () {
      if (this.tooltipShow) {
        this.tooltipShow = false;
      } else {
        this.tooltipShow = true;
        createPopper(this.$refs.btnRef, this.$refs.tooltipRef, {
          placement: "left"
        });
      }
    }
  },
  data() {
    return {
      tooltipShow: false,
      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      }, {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
      }, {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10],
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'radar',
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },
        stroke: {
          width: 2
        },
        fill: {
          opacity: 0.1
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: ['Display', 'Network', 'Size', 'Battery', 'Design', 'Services']
        },
        legend: {
          show: false,
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

.tooltip::before {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  top: 50px;
  left: 125px;
  background-color: #FFB543;
  transform: rotate(45deg);
}
</style>
