<template>
  <div id="app">
    <router-view/>
    <bottom-nav />
  </div>
</template>

<script>
import BottomNav from './components/BottomNav.vue'

export default {
  name: 'App',
  components: {
    BottomNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 60px; /* Add padding to prevent content from being hidden by the bottom nav */
}
</style>
