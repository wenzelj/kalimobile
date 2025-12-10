<template>
  <div id="app">
    <button class="menu-icon" @click="toggleNav">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <side-nav :class="{ 'nav-open': isNavOpen }" />
    <router-view/>
  </div>
</template>

<script>
import SideNav from './components/SideNav.vue'

export default {
  name: 'App',
  components: {
    SideNav
  },
  data() {
    return {
      isNavOpen: false
    }
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
    }
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
}

.menu-icon {
  position: fixed;
  top: 15px;
  left: 15px;
  width: 30px;
  height: 22px;
  cursor: pointer;
  z-index: 1001;
  background: none;
  border: none;
}

.menu-icon span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: #2c3e50;
  border-radius: 3px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.menu-icon span:nth-child(1) {
  top: 0px;
}

.menu-icon span:nth-child(2) {
  top: 9px;
}

.menu-icon span:nth-child(3) {
  top: 18px;
}
</style>
