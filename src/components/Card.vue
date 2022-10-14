<template>
  <div class="max-w-2xl mx-auto bg-[#F7F8FC] p-4 grid-rows-2 gap-5 rounded-lg">
    <div class="grid grid-rows-3 grid-flow-col">
      <div class="row-span-4"><img src="images/favorite-device-icon.png" /></div>
      <div class="col-span-5"><span class="text-sm">{{product.name}}</span>
        <span class="float-right m-1"><img src="images/heart-icon.png" /></span>
        <span class="float-right m-1"><img src="images/recommend-icon.png" /></span>
      </div>
      <div class="col-span-5">
        <span class="text-sm text-[#7E7E7E] h-4">Minimal price</span>
        <span class="float-right text-sm text-[#7E7E7E]">Brand</span>
      </div>
      <div class="col-span-5 flex justify-between text-base"><span>{{product.price}}</span><span>Apple</span></div>
    </div>
    <div class="grid grid-rows-2 grid-flow-col gap-2">
      <circle-progress :percent="90" class="row-span-2 mt-3" :size="50" :border-width="5" :fill-color="product.color"
        :border-bg-width="0" :show-percent="true" />
      <div class="col-span-5 py-1 bg-white text-center"><img src="images/amazon-icon.png" class="max-w-xl inline-block">
      </div>
      <div class="col-span-5 py-1 bg-white text-center"><img src="images/ebay-icon.png" class="max-w-xl inline-block">
      </div>
    </div>
  </div>
  <div>
  </div>
</template>
<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
export default {
  data() {
    return {
      color: 'red'
    }
  },
  name: 'card-com',
  props: { product: {} },
  components: { CircleProgress }
}
</script>
<style>
/* .current-counter{
  margin-top: 15px;
} */
</style>