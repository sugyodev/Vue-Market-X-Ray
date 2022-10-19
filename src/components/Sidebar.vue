<template>
  <div id="app">
    <transition name="fade">
      <div v-if="openSidebar">
        <div @click="disableSidebar" class="absolute bg-black opacity-70 inset-0 z-20 sm:hidden"></div>
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
              <span class="pt-4 cursor-pointer h-8" @click="toggleSidebar"><img src="images/close-fill.png" /></span>
            </div>
            <hr />
          </div>
          <div class="py-2">
            <div class="my-3 py-3 flex justify-between cursor-pointer hover:bg-[#e8e8e8]"
              @click="()=>{openFavorite=false;openCategory=!openCategory;chooseLanguage=false}">
              <div class="text-[#282828] text-left pl-8 pr-8 ">
                Categories
              </div>
              <img src="images/expand_right.png" class="mr-4">
            </div>
            <div class="my-3 py-3 flex justify-between cursor-pointer hover:bg-[#e8e8e8]"
            @click="()=>{openCategory=false;openFavorite=!openFavorite;chooseLanguage=false}">
              <div class="text-[#282828] text-left pl-8 pr-8">
                Favorites
              </div>
              <img src="images/expand_right.png" class="mr-4">
            </div>
            <hr />
          </div>
          <div class="grid grid-rows py-4">
            <div class="text-[#282828] text-left pl-8 pr-8 cursor-pointer py-3 hover:bg-[#e8e8e8]" @click="goHome">
              Home
            </div>
            <div class="text-[#282828] text-left pl-8 pr-8 cursor-pointer py-3 hover:bg-[#e8e8e8]" @click="goProduct">
              Trending Searches
            </div>
            <div class="text-[#282828] text-left pl-8 pr-8 cursor-pointer py-3 hover:bg-[#e8e8e8]" @click="goCategories">
              Product Ranks
            </div>
            <div class="text-[#282828] text-left pl-8 pr-8 cursor-pointer py-3 hover:bg-[#e8e8e8]" @click="goAboutUs">
              About Us
            </div>
            <div class="text-[#282828] text-left pl-8 pr-8 cursor-pointer py-3 hover:bg-[#e8e8e8]"
              @click="()=>{openFavorite=false;openCategory=false;chooseLanguage=!chooseLanguage}">
              Choose language
            </div>
          </div>
          <div class="text-left pt-56 sm:pt-24">
            <button class="text-slate-400 pl-8 pr-8 w-1/5 hover:text-slate-800" @click="logout">LogOut</button>
          </div>
        </div>

        <div
          class="flex shrink-0 flex-col w-4/5 sm:w-80 sm:left-64 sm:ml-2 sm:mt-14 absolute z-20 top-0 left-0 border bg-white sm:bg-slate-50 pt-2 h-screen sm:h-[880px] bg-side transition-all duration-300"
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
          <div class="py-2 flex justify-between cursor-pointer hover:bg-[#e8e8e8]" @click="goCategories">
            <div class="text-[#282828] text-sm text-left pl-8 pr-8 pt-2">
              All Categories
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2 h-5">
          </div>
          <div class="py-2 flex justify-between cursor-pointer hover:bg-[#e8e8e8]" @click="goCategories">
            <div class="text-[#282828] text-sm text-left pl-8 pr-8 ">
              Laptops, tablets and
              computer equipment
            </div>
            <img src="images/expand_right.png" class="mr-4 h-5 mt-2">
          </div>
          <div class="py-2 flex justify-between cursor-pointer hover:bg-[#e8e8e8]" @click="goCategories">
            <div class="text-[#282828] text-sm text-left pl-8 pr-8 pt-1">
              Appliances for the kitchen
            </div>
            <img src="images/expand_right.png" class="mr-4 h-5 mt-2">
          </div>
          <div class="py-2 flex justify-between cursor-pointer hover:bg-[#e8e8e8]" @click="goCategories">
            <div class="text-[#282828] text-sm text-left pl-8 pr-8 pt-2">
              Appliances for the home
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2 h-5">
          </div>
          <div class="py-2 flex justify-between cursor-pointer hover:bg-[#e8e8e8]" @click="goCategories">
            <div class="text-[#282828] text-sm text-left pl-8 pr-8 ">
              Smart watches and gadgets
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2 h-5">
          </div>
          <div class="py-2 flex justify-between cursor-pointer hover:bg-[#e8e8e8]" @click="goCategories">
            <div class="text-[#282828] text-sm text-left pl-8 pr-8 pt-1">
              Televisions and multimedia
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2 h-5">
          </div>
          <div class="py-2 flex justify-between cursor-pointer hover:bg-[#e8e8e8]" @click="goCategories">
            <div class="text-[#282828] text-sm text-left pl-8 pr-8 ">
              Game consoles and gaming
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2 h-5">
          </div>
          <div class="py-2 flex justify-between cursor-pointer hover:bg-[#e8e8e8]" @click="goCategories">
            <div class="text-[#282828] text-sm text-left pl-8 pr-8 pt-2">
              Photo and video
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2 h-5">
          </div>
          <div class="py-2 flex justify-between cursor-pointer hover:bg-[#e8e8e8]" @click="goCategories">
            <div class="text-[#282828] text-sm text-left pl-8 pr-8 pt-2">
              Beauty and health
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2 h-5">
          </div>
          <div class="py-2 flex justify-between cursor-pointer hover:bg-[#e8e8e8]" @click="goCategories">
            <div class="text-[#282828] text-sm text-left pl-8 pr-8 pt-2">
              Dishes
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2 h-5">
          </div>
          <div class="py-2 flex justify-between cursor-pointer hover:bg-[#e8e8e8]" @click="goCategories">
            <div class="text-[#282828] text-sm text-left pl-8 pr-8 pt-2">
              Household chemicals
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2 h-5">
          </div>
          <div class="py-2 flex justify-between cursor-pointer hover:bg-[#e8e8e8]" @click="goCategories">
            <div class="text-[#282828] text-sm text-left pl-8 pr-8 pt-2">
              Tools and auto goods
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2 h-5">
          </div>
          <div class="py-2 flex justify-between cursor-pointer hover:bg-[#e8e8e8]" @click="goCategories">
            <div class="text-[#282828] text-sm text-left pl-8 pr-8">
              Services, subscriptions and software product search
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-2 h-5">
          </div>
          <div class="text-left sm:pt-10 pt-16">
            <button class="text-slate-400 pl-8 pr-8 w-1/5 hover:text-slate-800" @click="logout">LogOut</button>
          </div>
        </div>

        <div
          class="flex shrink-0 flex-col w-4/5 sm:w-80 sm:left-64 sm:ml-2 sm:mt-14 absolute z-20 top-0 left-0 border bg-white sm:bg-slate-50 pt-2 h-screen sm:h-[880px] bg-side transition-all duration-300"
          :class="openFavorite === true ? 'sm:w-64 w-full' : 'hidden'">
          <div class="text-left px-2 cursor-pointer w-1/2 py-4" @click="openFavorite=!openFavorite">
            <img src="images/arrow.png" class="inline-block w-auto mb-1" />
            <span class="text-[#3F37C9] ml-2">Favorites</span>
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
          <div class="py-2 flex justify-between cursor-pointer hover:bg-[#e8e8e8]" @click="goFavorite">
            <div class="text-[#282828] text-sm text-left pl-8 pr-8 pt-1">
              All Favorites
            </div>
            <img src="images/expand_right.png" class="mr-4 mt-1 h-5">
          </div>
          <div class="py-2 flex justify-between cursor-pointer hover:bg-[#e8e8e8]" @click="goFavorite">
            <div class="text-[#282828] text-sm text-left pl-8 pr-8 pt-1">
              Your Favorites
            </div>
            <img src="images/expand_right.png" class="mr-4 h-5 mt-1">
          </div>
        </div>

        <div
          class="flex shrink-0 flex-col w-4/5 sm:w-80 sm:left-64 sm:ml-2 sm:mt-14 absolute z-20 top-0 left-0 border bg-white sm:bg-slate-50 pt-2 h-screen bg-side transition-all duration-300"
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
            <div class="text-[#282828] text-left pl-8 pr-8 ">
              English
            </div>
            <input type="radio" :checked="activelanguage==0" @change="radioChange" value="0" />
          </div>
          <div class="my-5 flex justify-between cursor-pointer pr-12">
            <div class="text-[#282828] text-left pl-8 pr-8 ">
              French
            </div>
            <input type="radio" :checked="activelanguage==1" @change="radioChange" value="1" />
          </div>
          <div class="my-5 flex justify-between cursor-pointer pr-12">
            <div class="text-[#282828] text-left pl-8 pr-8 ">
              Portuguese
            </div>
            <input type="radio" :checked="activelanguage==2" @change="radioChange" value="2" />
          </div>
          <div class="my-5 flex justify-between cursor-pointer pr-12">
            <div class="text-[#282828] text-left pl-8 pr-8 ">
              Polish
            </div>
            <input type="radio" :checked="activelanguage==3" @change="radioChange" value="3" />
          </div>
          <div class="my-5 flex justify-between cursor-pointer pr-12">
            <div class="text-[#282828] text-left pl-8 pr-8 ">
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
    disableSidebar: function () { },
    toggleSidebar: function () { }
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
    goHome: function () {
      this.$router.push('/home');
      this.disableSidebar();
      this.openCategory=false;
      this.chooseLanguage=false;
      this.openFavorite=false;
    },
    goAboutUs: function () {
      this.$router.push('/about');
      this.disableSidebar();
      this.openCategory=false;
      this.chooseLanguage=false;
      this.openFavorite=false;
    },
    goProduct: function () {
      this.$router.push('/product');
      this.disableSidebar()
      this.openCategory=false;
      this.openFavorite=false;
      this.chooseLanguage=false;
    },
    goFavorite: function () {
      this.$router.push('/favorite');
      this.disableSidebar();
      this.openCategory=false;
      this.chooseLanguage=false;
      this.openFavorite=false;
    },
    goCategories:function(){
      this.$router.push('/category');
      this.disableSidebar()
      this.openCategory=false;
      this.chooseLanguage=false;
      this.openFavorite=false;
    },
    logout: function () {
      this.$router.push('/');
    }
  },
  mounted: function () {
    console.log()
  },
};
</script>
  