<template>
  <nav class="bottom-nav">
    <router-link to="/">Home</router-link>
    <router-link to="/kali-sika-ran">KaliSikaran</router-link>
    <router-link to="/kali-in-bali">Kali In Bali</router-link>
    <router-link to="/the-kali-academy">The Kali Academy</router-link>
  </nav>
</template>

<script>
export default {
  name: 'BottomNav'
}
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  border-top: 1px solid #dee2e6;
  padding: 10px 0;
  box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
  z-index: 1000;
}

.bottom-nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.2s;
}

.bottom-nav a:hover {
  background-color: #f8f9fa;
}

.bottom-nav a.router-link-exact-active {
  color: #42b983;
  background-color: #e9ecef;
}
</style>
