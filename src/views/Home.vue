<template>
  <div class="home px-4 sm:px-16 w-full pt-6">
    <div class="w-full justify-between flex">
      <div class="w-11/12 mr-2">
        <img src="images/search-icon.png"
          class="sm:relative sm:left-0 sm:top-11 absolute left-4 top-16 inset-y-0 pl-4 flex my-2.5 pt-1" />
        <input class="w-full h-12 rounded-lg py-3.5 outline-none border focus:shadow-outline bg-slate-50 text-base pl-12"
          type="search" name="search" id="search" placeholder="Search">
      </div>
      <div class="sm:pt-8 text-left -mt-2">
        <img src="images/logo-icon.png" class="w-20 inline-block float-right inline-block sm:mt-4 cursor-pointer"
          @click="gowizard" />
      </div>
    </div>
    <p class="text-left text-sm mb-6">You can use an <a href="#" class="text-[#449dd1]">Amazon</a> or <a href="#"
        class="text-[#449dd1]">Ebay</a> link</p>
    <Carousel :name="'home'"/>
    <div class="tab flex flex-wrap mt-2">
      <div class="w-full">
        <ul class="flex mb-0 list-none grid grid-cols-3 rounded">
          <li class="-mb-px last:mr-0 flex-auto text-center">
            <a class="text-base px-6 py-2.5 rounded-lg border m-1 block leading-normal cursor-pointer "
              v-on:click="toggleTabs(1)"
              v-bind:class="{ 'text-[#282828] bg-slate-50': openTab !== 1, 'text-white bg-[#3F37C9]': openTab === 1 }">
              Trending
            </a>
          </li>
          <li class="-mb-px last:mr-0 flex-auto text-center">
            <a class="text-base px-6 py-2.5 rounded-lg m-1 border block leading-normal cursor-pointer"
              v-on:click="toggleTabs(2)"
              v-bind:class="{ 'text-[#282828] bg-slate-50': openTab !== 2, 'text-white bg-[#3F37C9]': openTab === 2 }">
              Gadgets
            </a>
          </li>
          <li class="-mb-px last:mr-0 flex-auto text-center">
            <a class="text-base px-2 py-2.5 rounded-lg m-1 border block leading-normal cursor-pointer"
              v-on:click="toggleTabs(3)"
              v-bind:class="{ 'text-[#282828] bg-slate-50': openTab !== 3, 'text-white bg-[#3F37C9]': openTab === 3 }">
              Home App
            </a>
          </li>
        </ul>
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full rounded">
          <div class="sm:px-4 py-5 flex-auto">
            <div class="tab-content tab-space">
              <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
                <div>
                  <div class="w-full my-2 px-4">
                    <div class="inline-block w-1/2 font-bold text-xl text-[#866FAC] text-left cursor-pointer" @click="()=>goProduct('Smart Phone')">Smart Phones</div>
                    <div
                      class="w-1/2 inline-block text-right text-base text-[#866FAC] p-2 cursor-pointer hover:text-[#A48eB6]"
                      @click="goCategory">View All</div>
                  </div>
                  <ScatterChart />
                  <div class="w-full my-2 px-4">
                    <div class="inline-block w-1/2 font-bold text-xl text-[#866FAC] text-left">TVs</div>
                    <div class="w-1/2 inline-block text-right text-[#866FAC] p-2 cursor-pointer hover:text-[#A48eB6]"
                      @click="goCategory">View All</div>
                  </div>
                  <ScatterChart />
                </div>
              </div>
              <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
                <div>
                  <div class="w-full my-2 px-4">
                    <div class="inline-block w-1/2 font-bold text-xl text-[#866FAC] text-left cursor-pointer" @click="()=>goProduct('Category1')">Category 1</div>
                    <div
                      class="w-1/2 inline-block text-right text-base text-[#866FAC] p-2 cursor-pointer hover:text-[#A48eB6]"
                      @click="goCategory">View All</div>
                  </div>
                  <ScatterChart />
                  <div class="w-full my-2 px-4">
                    <div class="inline-block w-1/2 font-bold text-xl text-[#866FAC] text-left">TVs</div>
                    <div class="w-1/2 inline-block text-right text-[#866FAC] p-2 cursor-pointer hover:text-[#A48eB6]"
                      @click="goCategory">View All</div>
                  </div>
                  <ScatterChart />
                </div>
              </div>
              <div v-bind:class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }">
                <div>
                  <div class="w-full my-2 px-4">
                    <div class="inline-block w-1/2 font-bold text-xl text-[#866FAC] text-left cursor-pointer" @click="()=>goProduct('Category1')">Category 2</div>
                    <div
                      class="w-1/2 inline-block text-right text-base text-[#866FAC] p-2 cursor-pointer hover:text-[#A48eB6]"
                      @click="goCategory">View All</div>
                  </div>
                  <ScatterChart />
                  <div class="w-full my-2 px-4">
                    <div class="inline-block w-1/2 font-bold text-xl text-[#866FAC] text-left">TVs</div>
                    <div class="w-1/2 inline-block text-right text-[#866FAC] p-2 cursor-pointer hover:text-[#A48eB6]"
                      @click="goCategory">View All</div>
                  </div>
                  <ScatterChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import ScatterChart from '@/components/ScatterChart.vue';
import Carousel from '@/components/Carousel.vue';
// import axios from '../HttpRequest';

export default {
  name: "home-page",
  props: {
    msg: String
  },
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
    gowizard: function () {
      this.$router.push("/wizard");
    },
    goCategory: function () {
      this.$router.push("/category");
    },
    goProduct: function (catename) {
      this.$router.push({name: 'product', params: { name: catename }});
    }
  },
  mounted:function(){
    
  },  
  components: { ScatterChart, Carousel }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
  