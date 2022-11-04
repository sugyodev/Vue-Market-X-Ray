<template>
  <carousel :items-to-show="1" class="h-auto">
    <slide v-for="slide in 4" :key="slide" class="">
     <img src="images/banner.png" v-if="name=='home'" class="w-full sm:m-2" />
     <img src="images/product-pc-icon.png" v-if="name=='product'" class="w-full sm:m-2" />
    </slide>

    <template #addons>
      <!-- <navigation /> -->
      <pagination />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

export default {
  name: 'carousel-com',
  props:{
    name:String
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    // Navigation,
  },
  mounted:function(){
    console.log(this.name);
  }
}
</script>
<style>
.carousel__viewport ol li{
  width: 100% !important;
}
.carousel__pagination-button:hover::after, .carousel__pagination-button--active::after {
    background-color: #3f37c9 !important;
}

.carousel__pagination-button::after {
    width: 10px !important;
    border-radius: 5px !important;
    height: 10px !important;
    background-color: #d3d2d2;
}
</style>