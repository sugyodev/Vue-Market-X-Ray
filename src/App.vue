<template>
  <!-- <div id="nav">
    <router-link to="/">Sign In</router-link> |
    <router-link to="/signup">Sign Up</router-link>
  </div> -->
  <Header v-if="layout!=='auth'" :openSidebar="openSidebar" @toggleSidebar="toggleSidebar" />
  <div class="flex">
    <Sidebar v-if="layout!=='auth'" :openSidebar="openSidebar" :disableSidebar="disableSidebar"
      :toggleSidebar="toggleSidebar" />
    <router-view  :openFooter="openFooter"/>
  </div>
  <Footer v-if="layout!=='auth'" />

</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'
export default {
  components: {
    Footer,
    Header,
    Sidebar
  },
  computed: {
    layout: function () {
      return this.$route.meta.layout;
    },
  },
  data: function () {
    return {
      openSidebar: false,
      TopScroll: window.pageYOffset || document.documentElement.scrollTop,
      LeftScroll: window.pageXOffset || document.documentElement.scrollLeft,
    };
  },
  methods: {
    toggleSidebar: function () {
      this.openSidebar = !this.openSidebar;
      if (this.openSidebar && window.innerWidth <= 500) {
        this.functiondisable();
      } else {
        window.onscroll = function () {}
      }
    },
    disableSidebar: function () {
      if (window.innerWidth <= 1000) {
        this.openSidebar = false;
        window.onscroll = function () {}
      }
    },
    handleResize: function () {
      if(window.innerWidth <= 1000) { this.openSidebar = false;}
      if(window.innerWidth > 1000) {this.openSidebar = true;window.onscroll = function () {}}
    },
    functiondisable() {
      window.onscroll = function () {
        window.scrollTo(this.LeftScroll, this.TopScroll);
      };
    }
  },
  mounted: function () {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>