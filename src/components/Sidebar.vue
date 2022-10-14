<template>
  <div id="app">
    <transition name="fade">
      <div v-if="openSidebar">
        <div @click="$emit('disableSidebar')" class="absolute bg-black opacity-70 inset-0 z-20 sm:hidden"></div>
        <div
          class="flex shrink-0 flex-col w-4/5 sm:w-80 sm:relative sm:mt-4 absolute z-20 top-0 left-0 border bg-white sm:bg-slate-50 pt-2 h-screen bg-side transition-all duration-300"
          :class="openSidebar === true ? 'sm:w-64 w-full' : 'hidden'">
          <div class="w-full">
            <div class="justify-between flex pl-8 pr-8 mb-4">
              <div class="text-left">
                <img src="images/avatar-3.png" class="mb-4" />
                <p class="text-[#282828] my-1">Paulo Lingard</p>
                <p class="text-[#282828] my-1">email@gmail.com</p>
              </div>
              <span class="pt-4 cursor-pointer h-8" @click="$emit('disableSidebar')"><img
                  src="images/close-fill.png" /></span>
            </div>
            <hr />
          </div>
          <div class="py-2">
            <div class="my-6 flex justify-between cursor-pointer"
              @click="()=>{openFavorite=false;openCategory=!openCategory;chooseLanguage=false}">
              <div class="text-black text-left pl-8 pr-8 ">
                Categories
              </div>
              <img src="images/expand_right.png" class="mr-4">
            </div>
            <div class="my-6 flex justify-between cursor-pointer"
              @click="()=>{openFavorite=!openFavorite;openCategory=false;chooseLanguage=false}">
              <div class="text-black text-left pl-8 pr-8 ">
                Favorites
              </div>
              <img src="images/expand_right.png" class="mr-4">
            </div>
            <hr />
          </div>
          <div class="grid grid-rows py-4">
            <div class="text-black text-left pl-8 pr-8 cursor-pointer my-3">
              Home
            </div>
            <div class="text-black text-left pl-8 pr-8 cursor-pointer my-3">
              Trending Searches
            </div>
            <div class="text-black text-left pl-8 pr-8 cursor-pointer my-3">
              Product Ranks
            </div>
            <div class="text-black text-left pl-8 pr-8 cursor-pointer my-3" @click="goAboutus">
              About us
            </div>
            <div class="text-black text-left pl-8 pr-8 cursor-pointer my-3"
              @click="()=>{openFavorite=false;openCategory=false;chooseLanguage=!chooseLanguage}">
              Choose language
            </div>
          </div>
          <div class="text-left pt-48 sm:pt-10">
            <button class="text-slate-400 pl-8 pr-8 w-1/5">LogOut</button>
          </div>
        </div>

        <div
          class="flex shrink-0 flex-col w-4/5 sm:w-80 sm:left-80 sm:ml-2 sm:mt-14 absolute z-20 top-0 left-0 border bg-white sm:bg-slate-50 pt-2 h-screen sm:h-[900px] bg-side transition-all duration-300"
          :class="openCategory === true ? 'sm:w-64 w-full' : 'hidden'">
          <div class="text-left px-2 cursor-pointer w-1/2 py-4" @click="openCategory=!openCategory">
            <img src="images/arrow.png" class="inline-block w-auto mb-1" />
            <span class="text-[#3F37C9] ml-2">Categories</span>
          </div>
          <hr />
          <div>
            <div class="px-4 py-3">
              <div class="absolute left-0 inset-y-0 flex">
                <img src="images/search-icon.png" class="fill-current ml-6 mt-24 h-5 w-5 text-gray-400">
              </div>
              <input class="w-full h-10 mt-1 border rounded p-2 outline-none focus:shadow-outline bg-slate-50 pl-10"
                type="search" name="search" id="search" placeholder="Search">
            </div>
          </div>
          <div class="my-2 flex justify-between cursor-pointer">
            <div class="text-black text-left pl-8 pr-8 ">
              Categories
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2">
          </div>
          <div class="my-2 flex justify-between cursor-pointer">
            <div class="text-black text-left pl-8 pr-8 ">
              Laptops, tablets and
              computer equipment
            </div>
            <img src="images/expand_right.png" class="mr-4 h-6 mt-2">
          </div>
          <div class="my-2 flex justify-between cursor-pointer">
            <div class="text-black text-left pl-8 pr-8 ">
              Appliances for the kitchen
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2">
          </div>
          <div class="my-2 flex justify-between cursor-pointer">
            <div class="text-black text-left pl-8 pr-8 ">
              Appliances for the home
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2">
          </div>
          <div class="my-2 flex justify-between cursor-pointer">
            <div class="text-black text-left pl-8 pr-8 ">
              Smart watches and gadgets
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2">
          </div>
          <div class="my-2 flex justify-between cursor-pointer">
            <div class="text-black text-left pl-8 pr-8 ">
              Televisions and multimedia
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2">
          </div>
          <div class="my-2 flex justify-between cursor-pointer">
            <div class="text-black text-left pl-8 pr-8 ">
              Game consoles and gaming
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2">
          </div>
          <div class="my-2 flex justify-between cursor-pointer">
            <div class="text-black text-left pl-8 pr-8 ">
              Photo and video
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2">
          </div>
          <div class="my-2 flex justify-between cursor-pointer">
            <div class="text-black text-left pl-8 pr-8 ">
              Beauty and health
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2">
          </div>
          <div class="my-2 flex justify-between cursor-pointer">
            <div class="text-black text-left pl-8 pr-8 ">
              Dishes
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2">
          </div>
          <div class="my-2 flex justify-between cursor-pointer">
            <div class="text-black text-left pl-8 pr-8 ">
              Household chemicals
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2">
          </div>
          <div class="my-2 flex justify-between cursor-pointer">
            <div class="text-black text-left pl-8 pr-8 ">
              Tools and auto goods
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2">
          </div>
          <div class="my-2 flex justify-between cursor-pointer">
            <div class="text-black text-left pl-8 pr-8 ">
              Services, subscriptions and software product search
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2 h-6">
          </div>
          <div class="text-left sm:pt-10">
            <button class="text-slate-400 pl-8 pr-8 w-1/5">LogOut</button>
          </div>
        </div>

        <div
          class="flex shrink-0 flex-col w-4/5 sm:w-80 sm:left-80 sm:ml-2 sm:mt-14 absolute z-20 top-0 left-0 border bg-white sm:bg-slate-50 pt-2 h-screen bg-side transition-all duration-300"
          :class="chooseLanguage === true ? 'sm:w-64 w-full' : 'hidden'">
          <div class="text-left px-2 cursor-pointer w-1/2 py-4" @click="chooseLanguage=!chooseLanguage">
            <img src="images/arrow.png" class="inline-block w-auto mb-1" />
            <span class="text-[#3F37C9] ml-2">Categories</span>
          </div>
          <hr />
          <div>
            <div class="px-4 py-3">
              <div class="absolute left-0 inset-y-0 flex">
                <img src="images/search-icon.png" class="fill-current ml-6 mt-24 h-5 w-5 text-gray-400">
              </div>
              <input class="w-full h-10 mt-1 border rounded p-2 outline-none focus:shadow-outline bg-slate-50 pl-10"
                type="search" name="search" id="search" placeholder="Search">
            </div>
          </div>
          <div class="my-5 flex justify-between cursor-pointer pr-12">
            <div class="text-black text-left pl-8 pr-8 ">
              English
            </div>
            <input type="radio" :checked="activelanguage==0" @change="radioChange" value="0" />
          </div>
          <div class="my-5 flex justify-between cursor-pointer pr-12">
            <div class="text-black text-left pl-8 pr-8 ">
              French
            </div>
            <input type="radio" :checked="activelanguage==1" @change="radioChange" value="1" />
          </div>
          <div class="my-5 flex justify-between cursor-pointer pr-12">
            <div class="text-black text-left pl-8 pr-8 ">
              Portuguese
            </div>
            <input type="radio" :checked="activelanguage==2" @change="radioChange" value="2" />
          </div>
          <div class="my-5 flex justify-between cursor-pointer pr-12">
            <div class="text-black text-left pl-8 pr-8 ">
              Polish
            </div>
            <input type="radio" :checked="activelanguage==3" @change="radioChange" value="3" />
          </div>
          <div class="my-5 flex justify-between cursor-pointer pr-12">
            <div class="text-black text-left pl-8 pr-8 ">
              German
            </div>
            <input type="radio" :checked="activelanguage==4" @change="radioChange" value="4" />
          </div>
          <div>
            <button class="bg-[#449dd1] rounded-lg w-3/5 px-6 py-4 mt-24 text-white">Apply</button>
          </div>
        </div>
      </div>
    </transition>
  </div>

</template>
  
<script>
export default {
  name: "sidebar-component",
  props: {
    openSidebar: Boolean,
  },
  data: function () {
    return {
      activelanguage: 0,
      isOpen: false,
      openCategory: false,
      openFavorite: false,
      chooseLanguage: false,
    };
  },
  methods: {
    radioChange: function (e) {
      this.activelanguage = e.target.value;
    },
    goAboutus: function () {
      this.$router.push('/about');
    }
  },
  mounted: function () {
    console.log()
  },
};
</script>
  