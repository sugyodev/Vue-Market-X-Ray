<template>
  <div class="max-w-2xl mx-auto bg-[#F7F8FC] p-4 grid-rows-2 gap-5 rounded-lg">
    <div class="grid grid-rows-3 grid-flow-col">
      <div class="row-span-4"><img src="images/favorite-device-icon.png" /></div>
      <div class="col-span-5"><span class="text-sm">{{product.name}}</span>
        <span class="float-right m-1 cursor-pointer hover:opacity-40" @click="heart=!heart"><img :src="heart?heart_image1:heart_image2" /></span>
        <span class="float-right m-1 cursor-pointer hover:opacity-40" @click="recommend=!recommend"><img :src="recommend?recommend_image1:recommend_image2" /></span>
      </div>
      <div class="col-span-5">
        <span class="text-sm text-[#7E7E7E] h-4">Minimal price</span>
        <span class="float-right text-sm text-[#7E7E7E]">Brand</span>
      </div>
      <div class="col-span-5 flex justify-between text-base"><span>{{product.price}}</span><span>Apple</span></div>
    </div>
    <div class="grid grid-rows-2 grid-flow-col gap-2">
      <circle-progress :percent="product.percent" class="row-span-2 mt-3" :size="60" :border-width="5" :fill-color="(function(){
      if(product.percent>60){
        return color1;
      } 
      else if(product.percent>30){
        return color2;
      }
      else{
        return color3;
      }
      }())" :border-bg-width="0" :show-percent="true" />
      <a class="col-span-5 py-1 bg-white text-center cursor-pointer" href="https://www.amazon.com"><img
          src="images/amazon-icon.png" class="max-w-xl inline-block">
      </a>
      <a class="col-span-5 py-1 bg-white text-center cursor-pointer" href="https://www.ebay.com"><img
          src="images/ebay-icon.png" class="max-w-xl inline-block">
      </a>
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
      color1: '#00BF04',
      color2: '#FF7A00',
      color3: '#FF2E00',
      heart: this.product.heart,
      recommend: this.product.recommend,
      heart_image1:"images/heart-icon-1.png", 
      heart_image2: "images/heart-icon.png",
      recommend_image1: "images/recommend-icon-1.png",
      recommend_image2 : "images/recommend-icon.png",
    }
  },
  name: 'card-com',
  props: { product: {} },
  components: { CircleProgress },
}
</script>

<style>
.current-counter{ 
    font-size: 20px !important;
}
@media only screen and (max-width: 556px){
  .current-counter{ 
    font-size: 14px !important;
  }
}

</style>
