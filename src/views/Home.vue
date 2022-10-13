<template>
  <div class="home p-4 sm:px-60">
    <div class="mb-6 w-full grid grid-cols-2">
      <div class="">
        <div class="sm:relative sm:left-0 sm:top-11 absolute left-4 top-4 inset-y-0 pl-3 flex my-2.5">
          <svg class="fill-current h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>
        </div>
        <input class="w-full h-12 border rounded p-2 outline-none focus:shadow-outline bg-slate-50 text-xl pl-12"
          type="search" name="search" id="search" placeholder="search">
      </div>
      <div>
        <img src="images/not-found-img.png" class="w-1/5 inline-block" />
      </div>
    </div>
    <p class="text-left text-lg">You can use an <a href="#">Amazon</a> or <a href="#">Ebay</a> link</p>
    <img src="images/banner.png" class="mr-0" />
    <div class="tab flex flex-wrap mt-2">
      <div class="w-full">
        <ul class="flex mb-0 list-none flex-wrap flex-row rounded">
          <li class="-mb-px last:mr-0 flex-auto text-center">
            <a class="text-sm font-bold uppercase px-5 py-3 shadow-lg rounded-lg m-1 block leading-normal"
              v-on:click="toggleTabs(1)"
              v-bind:class="{'text-slate-400 bg-slate-50': openTab !== 1, 'text-white bg-indigo-800': openTab === 1}">
              Trending
            </a>
          </li>
          <li class="-mb-px last:mr-0 flex-auto text-center">
            <a class="text-sm font-bold uppercase px-5 py-3 shadow-lg rounded-lg m-1 block leading-normal"
              v-on:click="toggleTabs(2)"
              v-bind:class="{'text-slate-400 bg-slate-50': openTab !== 2, 'text-white bg-indigo-800': openTab === 2}">
              Gadgets
            </a>
          </li>
          <li class="-mb-px last:mr-0 flex-auto text-center">
            <a class="text-sm font-bold uppercase px-5 py-3 shadow-lg rounded-lg m-1 block leading-normal"
              v-on:click="toggleTabs(3)"
              v-bind:class="{'text-slate-400 bg-slate-50': openTab !== 3, 'text-white bg-indigo-800': openTab === 3}">
              Home App
            </a>
          </li>
        </ul>
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div class="sm:px-4 py-5 flex-auto">
            <div class="tab-content tab-space">
              <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                <div>
                  <div class="w-full my-2 px-4">
                    <div class="inline-block w-1/2 font-bold text-xl text-violet-900 text-left">Smart Phones</div>
                    <div class="w-1/2 inline-block text-right text-violet-900 p-2">View All</div>
                  </div>
                  <img src="images/info.png" />
                  <div class="w-full my-2 px-4">
                    <div class="inline-block w-1/2 font-bold text-xl text-violet-900 text-left">TVs</div>
                    <div class="w-1/2 inline-block text-right text-violet-900 p-2">View All</div>
                  </div>
                  <img src="images/info.png" />
                </div>
              </div>
              <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              </div>
              <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'home-page',
  props: {
    msg: String
  },
  data() {
    return {
      openTab: 1,
    }
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber
    }
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  