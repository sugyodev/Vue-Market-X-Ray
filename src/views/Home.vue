<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
        Home page
    </div>
  </template>
  
  <script>
  export default {
    name: 'home-page',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  