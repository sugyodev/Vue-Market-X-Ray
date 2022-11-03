<template>
    <Carousel>
      <template >
        <Slide v-for="image in images" :key="image.id">
          <img :src="image.url" />
        </Slide>
      </template>
  
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </template>
  
  <script>
  import { Carousel, Slide, Navigation } from "vue3-carousel";
  
  import "vue3-carousel/dist/carousel.css";
  
  export default{
    name: "Basic-Carousel",
    props: {
      images: Array,
    },
    components: {
      Carousel,
      Slide,
      Navigation
    }
  };
  </script>
  