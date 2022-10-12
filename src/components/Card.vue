<template>
  <div class="max-w-2xl mx-auto bg-slate-100 p-4 px-8 grid-rows-2 rounded">
    <!-- <div class="inline-grid grid-cols-2 gap-4 w-full">
      <div>
        
      </div>
      <div class="grid-rows-3">
        <div class="inline-grid grid-cols-3 w-full">
          <p>{{product.name}}</p>
          <p>a</p>
          <p>a</p>
        </div>
        <div class="inline-grid grid-cols-2 w-full">
          <p>a</p>
          <p>a</p>
        </div>
        <div class="inline-grid grid-cols-2 w-full">
          <p>a</p>
          <p>a</p>
        </div>
      </div>
    </div>
    <div class="inline-grid grid-cols-2 gap-4 w-full">
      <div>97%</div>
      <div>
        <div>a</div>
        <div>b</div>
      </div>
    </div> -->
    <div class="grid grid-rows-3 grid-flow-col gap-2">
      <div class="row-span-3"><img src="images/favorite-device-icon.png" /></div>
      <div class="col-span-5"><span class="text-sm">{{product.name}}</span> <span class="float-right">1</span><span class="float-right">2</span></div>
      <div class="col-span-5"><span class="text-sm text-slate-400">Minimal price</span> <span class="float-right text-slate-400">Brand</span></div>
      <div class="col-span-5"><span>{{product.price}}</span><span>Apple</span></div>
    </div>
    <div class="grid grid-rows-2 grid-flow-col gap-2">
      <div class="row-span-2 pt-4">97%</div>
      <div class="col-span-5 pt-2 bg-white"><img src="images/amazon-icon.png"></div>
      <div class="col-span-5 pt-2 bg-white"><img src="images/ebay-icon.png"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'card-com',
  props: { product: {} }
}
</script>