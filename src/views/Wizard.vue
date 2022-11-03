<template>
  <div id="app">
    <transition name="fade">
      <div v-if="isModalVisible">
        <div @click="onToggle" class="absolute bg-black opacity-70 inset-0 z-20 h-[1080px]"></div>
        <div
          class="w-full sm:w-1/2 px-4 fixed bottom-52 sm:bottom-28 sm:inline-block mx-auto my-auto rounded-xl h-80 z-20 shadow-lg">
          <div class="py-4 px-3 bg-white rounded w-3/5 sm:w-56 text-sm rounded-lg sm:ml-48 mb-4 msg-box text-left">
            Hi, I'm Mark! Let me<br/>
            be your nerdy review guy!
          </div>
          <img src="images/wizard-over-img.png" class="float-right h-48 cursor-pointer" />
        </div>
      </div>
    </transition>
  </div>
  <div class="wizard-page py-6 sm:px-12 px-1 w-full">
    <div class="flex justify-between">
      <img src="images/left-direct-icon.png" class="cursor-pointer w-2 absolute mt-2 ml-1" @click="this.$router.go(-1)"  />
      <span class="inline-block w-3/4 text-2xl sm:text text-left ml-8 text-[#866FAC] font-bold"> Looking for a new
        laptop? I'll help you</span>
      <img src="images/not-found-img.png" class="h-20 sm:h-28 cursor-pointer" @click="goHome" />
    </div>
    <p class="text-[26px] my-12 text-[#866FAC] font-bold">Which type of user?</p>
    <Slider v-model="value1" class="px-4" @change="onchange1" />
    <div class="grid grid-cols-4 mt-5 px-4">
      <span class="text-sm cursor-pointer hover:text-[#3F37c9] text-left" @click="value1=5" :class="data1===1?'text-[#3F37C9]':'text-[#282828]'">Beginner</span>
      <span class="text-sm cursor-pointer hover:text-[#3F37c9]" @click="value1=25" :class="data1===2?'text-[#3F37C9]':'text-[#282828]'">Amateur</span>
      <span class="text-sm cursor-pointer hover:text-[#3F37c9]" @click="value1=55" :class="data1===3?'text-[#3F37C9]':'text-[#282828]'">Advanced</span>
      <span class="text-sm cursor-pointer hover:text-[#3F37c9] text-right" @click="value1=75" :class="data1===4?'text-[#3F37C9]':'text-[#282828]'">Professional</span>
    </div>
    <p class="text-2xl my-12 text-[#866FAC] font-bold">What is your budget?</p>
    <Slider v-model="value2" tooltips="false" class="px-4" @change="onchange2"/>
    <div class="grid grid-cols-3 mt-5 px-4">
      <span class="text-sm cursor-pointer hover:text-[#3F37c9] text-left" @click="value2=10" :class="data2===1?'text-[#3F37C9]':'text-[#282828]'">As low as possible</span>
      <span class="text-sm cursor-pointer hover:text-[#3F37c9]" @click="value2=40" :class="data2===2?'text-[#3F37C9]':'text-[#282828]'">Standard</span>
      <span class="text-sm cursor-pointer hover:text-[#3F37c9] text-right" @click="value2=70" :class="data2===3?'text-[#3F37C9]':'text-[#282828]'">Whatever it takes</span>
    </div>
    <div class="text-left my-6 mx-2">
      <input type="checkbox" class="w-4 h-4"/> <span class="text-sm ml-1">I'm flexible</span>
    </div>
    <button
      class="hover:bg-green-700 text-white my-28 bg-[#449DD1] text-sm px-4 py-3.5 rounded-lg w-3/4 text-base"
      @click="gocategory">
      Proceed
      <!-- <font-awesome-icon :icon="['fas', 'play']" /> -->
    </button>
    <div>
    </div>
  </div>
</template>
    
<script>
import Slider from '@vueform/slider'
export default {
  name: 'wizard-page',
  props: {
    msg: String
  },
  components: {
    Slider,
  },
  data() {
    return {
      data1: 1,
      data2: 1,
      isOpen: true,
      value1: 20,
      value2: 15,
      TopScroll: window.pageYOffset || document.documentElement.scrollTop,
      LeftScroll: window.pageXOffset || document.documentElement.scrollLeft,
    }
  },
  methods: {
    onchange1(value) {
      if (0 <= value && value <= 25) {
        this.data1 = 1;
      }
      if (25 < value && value <= 50) {
        this.data1 = 2;
      }
      if (60 < value && value <= 75) {
        this.data1 = 3;
      }
      if (75 < value && value<= 100) {
        this.data1 = 4;
      }
    },
    onchange2(value) {
      if (0 <= value && value <= 33) {
        this.data2 = 1;
      }
      if (25 < value && value <= 67) {
        this.data2 = 2;
      }
      if (60 < value && value <= 100) {
        this.data2 = 3;
      }
    },
    onToggle() {
      this.isOpen = !this.isOpen;
      window.onscroll = function () { };
    },
    functiondisable() {
      window.onscroll = function () {
        window.scrollTo(this.LeftScroll, this.TopScroll);
      };
    },
    gocategory() {
      this.$router.push('/category');
    },
    goHome() {
      this.$router.push('/home');
    }
  },
  computed: {
    isModalVisible() {
      return this.isOpen;
    },
  },
  mounted: function () {
    this.functiondisable();
  },
}
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="@vueform/slider/themes/default.css" >

</style>
<style>
.slider-connect {
  background-color: #3F37C9;
}

.slider-handle {
  height: 26px !important;
  width: 26px !important;
  background-color: #3F37C9;
  margin-top: -4px;
}

.slider-tooltip-top {
  display: none;
}

.msg-box::after {
  content: "";
  position: absolute;
  top: 71px;
  margin-left: -20px;
  border-width: 8px;
  border-style: solid;
  border-color: white transparent transparent transparent;
    /* left: 50%; */
}
</style>
    
