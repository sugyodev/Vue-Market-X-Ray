<template>
  <div class="w-full mx-auto px-8 rounded text-center top-0 grid grid-cols-3 pt-4">
    <div class="text-left cursor-pointer mt-1"  @click="$emit('toggleSidebar')"><img src="images/burgur.png" /></div>
    <div class="inline-block text-center">
      <img src="images/header-icon.png" class="w-auto inline-block"/>
    </div>
    <div class="inline-block text-right cursor-pointer">
      <img src="images/header-upload-icon.png" class="w-auto inline-block"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'header-com',
  props: {
    openSidebar: Boolean,
  },
}
</script>
<style>
</style>