<template>
  <div class="jastify-center w-full inline-block p-8 text-left pt-6 border-0">
    <div class="text-left px-2  py-4 flex justify-between">
      <div class="cursor-pointer">
        <img src="images/arrow.png" class="inline-block mb-2"/>
        <span class="text-[#866FAC] text-2xl ml-4 font-bold">Who we are?</span>
      </div>
      <div class="text-right cursor-pointer">
        <img src="images/about-img-2.png" class="float-right w-30">
      </div>
    </div>
    <h1 class="text-base text-[#866FAC] font-bold">Lorem IPsum</h1>
    <p class="text-slate-600 text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
      qui officia deserunt mollit anim id est laborum.</p>
    <img src="images/about-img-1.png" class="inline-block py-6" />
    <h1 class="text-base text-[#866FAC] font-bold">Lorem IPsum</h1>
    <p class="text-slate-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
      qui officia deserunt mollit anim id est laborum.</p>
    <p class="text-center pt-8 text-2xl text-black">FAQ</p>
    <div v-for="c of items" :key="c.title">
      <div class="title bg-slate-50 mt-3 p-3 text-[#3F37C9]" @click="c.active = !c.active">
        <span class="w-1/2 text-sm text-[#3F37C9]">{{ c.title }}</span>
        <svg v-if="c.active"
          class="text-[#3F37C9] w-3 transition-all duration-200 transform rotate-180 float-right inline-block pt-2"
          fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10" aria-hidden="true">
          <path d="M15 1.2l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <svg v-else
          class="text-[#3F37C9] w-3 transition-all duration-200 transform rotate-0 float-right inline-block pt-2"
          fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10" aria-hidden="true">
          <path d="M15 1.2l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div class="description p-2 bg-slate-50 text" v-if="c.active">
        {{ c.content }}
      </div>
    </div>
  </div>
</template>
  

<script>
export default {
  name: 'about-page',
  props: {
    msg: String
  },
  data() {
    return {
      items: [
        { title: 'Question1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', active: false },
        { title: 'Question2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', active: false },
        { title: 'Question3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', active: false },
        { title: 'Question4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', active: false },
        { title: 'Question5', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', active: false }]
    }
  },

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  