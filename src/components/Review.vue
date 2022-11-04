<template>
  <div class="review-com grid grid-rows-3xl bg-[#F7F8FC] rounded mb-2 mt-2 p-3">
    <div class="flex justify-between border-slate-200 p-2">
      <div class="">
        <div class="inline-block">
          <img src="../../public/images/avatar-1.png" />
        </div>
        <div class="inline-block ml-4">
          <h1 class="font-bold">{{review.username}}</h1>
          <p>{{review.date}}</p>
        </div>
      </div>
      <div>
        <img src="../../public/images/ebay-icon.png"/>
      </div>
    </div>
    <div class="m-3"><img src="images/rate.png" /></div>
    <div class="text-left">{{review.reviewcontent}}</div>
  </div>
</template>

<script>
export default {
  name: "review-com",
  props: { review: {} },
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>