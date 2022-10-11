<template>
    <div class="jastify-center w-full sm:w-2/4 inline-block p-8 text-left pt-16 border-0">
        <button class="text-purple-800 text-5xl"><span></span>Who we are?</button>
        <h1 class="pt-16 text-2xl text-purple-800">Lorem IPsum</h1>
        <p class="text-slate-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.</p>
        <img src="images/about-img-1.png" class="inline-block py-24" />
        <p class="text-slate-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.</p>
        <p class="text-center pt-8 text-2xl text-black">FAQ</p>
        <div v-for="item in items" v-bind:key="item.title">
            <div>

            </div>
        </div>
    </div>
</template>
  
<script>
import Accordion from "../components/Accordion.vue";
export default {
    name: 'about-page',
    props: {
        msg: String
    }, data() {
        return {
            items: [{ title: 'Question1', content: 'Answer1' }, { title: 'Question2', content: 'Answer2' }]
        }
    }
    ,
    components: {
        Accordion,
    },

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  