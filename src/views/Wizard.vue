<template>
  <div class="wizard-page p-2 sm:px-32 py-16">
    <div class="flex justify-between">
      <span class="w-1/2 inline-block w-3/4 text-2xl text-left text-violet-400 font-bold"> Looking for a new <br/>  laptop? <br/>I'll help you</span>
      <img src="images/not-found-img.png" class="h-28" />
    </div>
    <p class="text-2xl my-12 text-violet-400 font-bold">Which type of user?</p>
    <Slider v-model="value1" />
    <div class="grid grid-cols-4">
      <span>Beginner</span>
      <span>Amateur</span>
      <span>Advanced</span>
      <span>Professional</span>
    </div>
    <p class="text-2xl my-12 text-violet-400 font-bold">What is your budget?</p>
    <Slider v-model="value2" tooltips="false"/>
    <div class="grid grid-cols-3">
      <span>As low as possible</span>
      <span>Standard</span>
      <span>Whatever it takes</span>
    </div>
    <div class="text-left my-4">
      <input type="checkbox" /> <span class="text-lg">I'm flexible</span>
    </div>
    <button
      class="bg-green-500 hover:bg-green-700 text-white my-28 bg-sky-600 uppercase text-sm font-semibold px-4 py-3 rounded w-full text-base">
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
      value1: 20,
      value2: 30
    }
  }
}
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="@vueform/slider/themes/default.css" >

</style>
    
