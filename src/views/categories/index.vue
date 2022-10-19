<template>
  <div id="app">
    <transition name="fade">
      <div v-if="isModalVisible">
        <div @click="onToggle" class="absolute bg-black opacity-70 inset-0 z-20 z-20 h-[1000px]"></div>
        <div
          class="w-full sm:w-1/3 px-8 fixed bottom-48 sm:bottom-28 sm:inline-block mx-auto my-auto rounded-xl h-80 z-20 shadow-lg">
          <div class="py-4 px-6 bg-white rounded w-48 rounded-lg mb-4 text-sm msg-box sm:ml-8">
            I think these are <br />the best for you
          </div>
          <img src="images/product-logo-icon.png" class="float-right h-48 cursor-pointer" />
        </div>
      </div>
    </transition>
  </div>
  <div class="jastify-center w-full px-3 text-left border-0 sm:p-8">
    <div class="flex justify-between">
      <img src="images/left-direct-icon.png" class="cursor-pointer w-2 absolute mt-10 ml-1" />
      <button class=" text-[#866FAC] text-xl sm:text-5xl font-bold w-3/4 text-left ml-8">Smart Phones</button>
      <img src="images/logo-icon.png" class="float-right sm:mr-24 cursor-pointer" @click="gowizard">
    </div>
    <div class="w-full sm:grid sm:grid-cols-2 ">
      <div class="sort"></div>
      <div class="sort float-right flex justify-between">
        <Listbox as="div" v-model="selected" class="inline-block w-40 sm:w-1/2 mb-4 mr-2 sm:mr-0">
          <div class="relative mt-1">
            <ListboxButton
              class="relative w-full cursor-default rounded-md border border-gray-300 bg-slate-100 py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span class="flex items-center">
                <span class="ml-3 block truncate">{{ selected.name }}</span>
              </span>
              <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </ListboxButton>

            <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
              leave-to-class="opacity-0">
              <ListboxOptions
                class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <ListboxOption as="template" v-for="person in people" :key="person.id" :value="person"
                  v-slot="{ active, selected }">
                  <li
                    :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                    <div class="flex items-center">
                      <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{ person.name
                      }}</span>
                    </div>

                    <span v-if="selected"
                      :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
        <div class="sm:mr-24 md:mr-48 cursor-pointer">
          <img src="images/sort-icon.png"
            class="inline-block sm:h-[38px] p-2 h-[42px] w-[42px] sm:w-[38px] bg-slate-100 rounded border-solid border-2 border-slate-300 mt-1" />
        </div>
      </div>
    </div>
    <div>
      <div v-for="p in products" v-bind:key="p.no" class="w-full sm:w-2/5 my-1 sm:mx-4 inline-block cursor-pointer"
        @click="goproduct">
        <Card :product="p" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const people = [
  {
    id: 1,
    name: 'Sort by',
  },
  {
    id: 2,
    name: 'Price',
  },
  {
    id: 3,
    name: 'X Rank',
  },
]

const selected = ref(people[0])
</script>
<script>
import Card from '../../components/Card.vue'
export default {
  name: 'category-page',
  components: {
    Card
  },
  computed: {
    isModalVisible() {
      return this.isOpen;
    }
  },
  methods: {
    onToggle() {
      this.isOpen = !this.isOpen;
      window.onscroll = function () { };
    },
    gowizard: function () {
      this.$router.push('/wizard');
    },
    goproduct: function () {
      this.$router.push('/product');
    },
    functiondisable() {
      window.onscroll = function () {
        window.scrollTo(this.LeftScroll, this.TopScroll);
      };
    }
  },
  mounted: function () {
    this.functiondisable();
  },
  data() {
    return {
      TopScroll: window.pageYOffset || document.documentElement.scrollTop,
      LeftScroll: window.pageXOffset || document.documentElement.scrollLeft,
      isOpen: true,
      products: [
        {
          no: 1, name: 'Iphone XS Max', recommend: false, color: '#00BF04', filled: false, price: '$800', percent: 77
        },
        {
          no: 2, name: 'Iphone XS Max', recommend: false, color: '#FF7A00', filled: false, price: '$800', percent: 87
        },
        {
          no: 3, name: 'Iphone XS Max', recommend: false, color: '#FF2E00', filled: false, price: '$800', percent: 32
        },
        {
          no: 4, name: 'Iphone XS Max', recommend: false, color: '#00BF04', filled: false, price: '$800', percent: 57
        },
        {
          no: 5, name: 'Iphone XS Max', recommend: false, color: '#FF7A00', filled: false, price: '$800', percent: 91
        },
        {
          no: 6, name: 'Iphone XS Max', recommend: false, color: '#FF2E00', filled: false, price: '$800', percent: 34
        },
        {
          no: 7, name: 'Iphone XS Max', recommend: false, color: '#00BF04', filled: false, price: '$800', percent: 12
        },
        {
          no: 8, name: 'Iphone XS Max', recommend: false, color: '#FF7A00', filled: false, price: '$800', percent: 96
        },
        {
          no: 9, name: 'Iphone XS Max', recommend: false, color: '#FF2E00', filled: false, price: '$800', percent: 88
        }
      ]
    }
  }
}
</script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
    