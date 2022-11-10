<template>
  <div class="detail">
    <p class="text-2xl text-[#866FAC] font-bold text-left">
      My AI engine read 1,289 user’s reviews and this is the what they had to say:
    </p>

    <div class="flex justify-between">
      <div class=" pt-10 pl-4 text-left">
        <p class="text-xl text-[#866FAC] font-bold text-left mb-2">X score</p>
        <p class="text-sm">#3 in <span class="text-[#449dd1]">Computers</span></p>
        <p class="text-sm">#1 in <span class="text-[#449dd1]">Laptops</span></p>
      </div>
      <div ref="circlebtnRef" v-on:mouseenter="toggleTooltip()" v-on:mouseleave="toggleTooltip()">
        <div ref="circletooltipRef" v-bind:class="{'hidden': !tooltipShow, 'block': tooltipShow}"
          class="bg-[#449DD1] circle-tooltip border-0 mr-8 block z-50 font-normal leading-normal text-white text-sm text py-3 px-6 rounded">
          An amazing 85 Rank <br /> Score!!<br />Other users <br /> loved this one
        </div>
        <circle-progress :percent="85" class="row-span-2 mt-3 mr-8 circle-custom-detail" :fill-color="color" :size="180" :border-width="24"
          :border-bg-width="0" :show-percent="true" />
      </div>
    </div>
    <div class="flex justify-between">
      <div class="pt-20 text-xl text-[#866FAC] font-bold text-left mb-2">
        Category Comparison
      </div>
      <div class="-mt-12">
        <RadarChart class="mr-2" />
      </div>
    </div>

    <div class="flex justify-between -mt-16">
      <div class=" text-xl text-[#866FAC] font-bold text-left mb-2 w-1/2">
        Ask Anything
      </div>
      <div class="mb-6 md:w-full mr-2 w-52">
        <input
          class="w-full h-10 border rounded-lg p-4 outline-none focus:shadow-outline bg-[#F7F8FC] border text-base pr-8"
          type="search" name="search" id="search" placeholder="Any word of interest?">
        <div class="left-0 inset-y-0 pl-3 -mt-8 ml-44 flex my-2.5 relative float-right mr-3">
          <svg class="fill-current h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>
        </div>
      </div>
    </div>

    <div class="">
      <button class="text-xs rounded-lg bg-[#F7F8FC] p-1 px-2 ml-[2px] sm:px-6 sm:py-3 text-[#282828]">Network</button>
      <button class="text-xs rounded-lg bg-[#F7F8FC] p-1 px-2 ml-[2px] sm:px-6 sm:py-3 text-[#282828]">Design</button>
      <button class="text-xs rounded-lg bg-[#F7F8FC] p-1 px-2 ml-[2px] sm:px-6 sm:py-3 text-[#282828]">Size</button>
      <button class="text-xs rounded-lg bg-[#F7F8FC] p-1 px-2 ml-[2px] sm:px-6 sm:py-3 text-[#282828]">Bluetooth</button>
      <button class="text-xs rounded-lg bg-[#F7F8FC] p-1 px-2 ml-[2px] sm:px-6 sm:py-3 text-[#282828]">Memory</button>
      <button class="text-xs rounded-lg bg-[#F7F8FC] p-1 px-2 ml-[2px] sm:px-6 sm:py-3 text-[#282828]">Upgrade</button>
    </div>
    <button class="text-left w-full text-[#866FAC] text-xs ml-2">*Common users’s interest</button>

    <div class="grid grid-rows-4">
      <div class="flex justify-between w-full m-1 my-3">
        <div class="text-left w-1/3 text-[#866FAC] text-sm ml-2">
          Battery life
        </div>
        <div class="w-2/3">
          <span class="inline-block mr-2 text-[#00BF04] text-sm">99%</span>
          <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 inline-block w-2/3">
            <div class="bg-[#00BF04] text-xs font-medium text-blue-100 text-center p-0.5 pt-2 leading-none rounded-full"
              style="width: 90%"></div>
          </div>
        </div>
      </div>
      <div class="flex justify-between w-full m-1 my-3">
        <div class="text-left w-1/3 text-[#866FAC] text-sm ml-2">
          Design
        </div>
        <div class="w-2/3">
          <span class="inline-block mr-2 text-[#FFB543] text-sm">76%</span>
          <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 inline-block w-2/3">
            <div class="bg-[#FFB543] text-xs font-medium text-blue-100 text-center p-0.5 pt-2 leading-none rounded-full"
              style="width: 76%"></div>
          </div>
        </div>
      </div>
      <div class="flex justify-between w-full m-1 my-3">
        <div class="text-left w-1/3 text-[#866FAC] text-sm ml-2">
          Network
        </div>
        <div class="w-2/3">
          <span class="inline-block mr-2 text-[#FF7A00] text-sm">48%</span>
          <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 inline-block w-2/3">
            <div class="bg-[#FF7A00] text-xs font-medium text-blue-100 text-center p-0.5 pt-2 leading-none rounded-full"
              style="width: 48%"></div>
          </div>
        </div>
      </div>
      <div class="flex justify-between w-full m-1 my-3">
        <div class="text-left w-1/3 text-[#866FAC] text-sm ml-2">
          Call Quality
        </div>
        <div class="w-2/3">
          <span class="inline-block mr-2 text-[#FF2E00] text-sm">22%</span>
          <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 inline-block w-2/3">
            <div class="bg-[#FF2E00] text-xs font-medium text-blue-100 text-center p-0.5 pt-2 leading-none rounded-full"
              style="width: 22%"></div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <LineChart />
    </div>

    <div class="flex justify-between px-4 pt-4">
      <div>
        <p class="text-xs">Lowest Price</p>
        <p class="text-2xl font-bold">$1130</p>
      </div>
      <div class="w-3/5">
        <button class="bg-[#00BF04] text-white px-6 py-4 rounded-lg w-full h-full">Buy Now</button>
      </div>
    </div>
    <div class="flex justify-between px-4 pt-4">
      <div class="flex justify-between px-4 w-1/2 bg-[#F7F8FC] py-2 px-4 rounded-lg m-1">
        <img src="../../public/images/amazon-icon.png" class="h-5" />
        <span class="float-right text-indigo-500 font-bold">$1100</span>
      </div>
      <div class="flex justify-between px-4 w-1/2 bg-[#F7F8FC] py-2 px-4 rounded-lg m-1">
        <img src="../../public/images/ebay-icon.png" class="h-5" />
        <span class="float-right text-slate-500 font-bold">$1120</span>
      </div>
      <div></div>
    </div>

    <div class="flex justify-between pt-4">
      <div class="text-left">
        <p class="text-[#866FAC] font-bold text-xl">Reviews</p>
      </div>
      <div class="text-right">
        <p class="text-[#866FAC] cursor-pointer">View All</p>
      </div>
    </div>
    <div class="mt-2 w-full grid sm:grid-cols-4 grid-cols-2">
      <div class="grid grid-rows-2 m-1 bg-[#F7F8FC] rounded-lg p-4 px-1 gap-4">
        <div class="flex justify-between">
          <div class="w-1/3">
            <img src="../../public/images/avatar-2.png">
          </div>
          <div class="text-left w-2/3">
            <p>Smith Smith</p>
            <img src="../../public/images/amazon-icon.png">
          </div>
        </div>
        <div class="text-sm text-left">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit”
        </div>
      </div>
      <div class="grid grid-rows-2 m-1 bg-[#F7F8FC] rounded-lg p-4 px-1 gap-4">
        <div class="flex justify-between">
          <div class="w-1/3">
            <img src="../../public/images/avatar-2.png">
          </div>
          <div class="text-left w-2/3">
            <p>Smith Smith</p>
            <img src="../../public/images/amazon-icon.png">
          </div>
        </div>
        <div class="text-sm text-left">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit”
        </div>
      </div>
    </div>
    <div class="flex justify-between pt-4">
      <div class="text-left">
        <p class="text-[#866FAC] font-bold text-xl">Similar Products</p>
      </div>
      <div class="text-right">
        <p class="text-[#866FAC] cursor-pointer">View All</p>
      </div>
    </div>
    <div class="mt-2 w-full grid sm:grid-cols-4 grid-cols-2">
      <div class="grid grid-cols-3 m-1 bg-slate-100 rounded p-2">
        <div>
          <img src="../../public/images/recommend-icon.png" class="m-1 hover:opacity-40 cursor-pointer" />
        </div>
        <img src="../../public/images/favorite-device-icon.png" class="m-1" />
        <div><img src="../../public/images/heart-icon.png"
            class="m-1 hover:opacity-40 cursor-pointer float-right" />
        </div>
      </div>
      <div class="grid grid-cols-3 m-1 bg-slate-100 rounded p-2">
        <div>
          <img src="../../public/images/recommend-icon.png" class="m-1 hover:opacity-40 cursor-pointer" />
        </div>
        <img src="../../public/images/favorite-device-icon.png" class="m-1" />
        <div><img src="../../public/images/heart-icon.png"
            class="m-1 hover:opacity-40 cursor-pointer float-right" />
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import RadarChart from "../components/RadarChart.vue";
import LineChart from "../components/LineChart.vue";
import { createPopper } from "@popperjs/core";

export default {
  data() {
    return {
      color: "#00BF04",
      tooltipShow: false,
      heart1: false,
      recommend1: true,
      heart2: false,
      recommend2: true,
      heart_image1: "../../public/images/heart-icon-1.png",
      heart_image2: "../../public/images/heart-icon.png",
      recommend_image1: "../../public/images/recommend-icon.png",
      recommend_image2: "../../public/images/recommend-icon-1.png",
    }
  },
  name: "detail-com",
  props: { xray: {} },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
    toggleTooltip: function () {
      if (this.tooltipShow) {
        this.tooltipShow = false;
      } else {
        this.tooltipShow = true;
        createPopper(this.$refs.circlebtnRef, this.$refs.circletooltipRef, {
          placement: "left"
        });
      }
    }
  },
  components: { CircleProgress, RadarChart, LineChart }
};
</script>
<style>
.circle-custom-detail .current-counter{
  font-size: 36px !important;
  font-weight: 600;
}

.circle-tooltip {
  margin-right: 20px !important;
}

.circle-tooltip::before {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  top: 50px;
  left: 165px;
  background-color: #449DD1;
  transform: rotate(45deg);
}
</style>