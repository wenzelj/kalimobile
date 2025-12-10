<template>
  <nav class="side-nav">
    <router-link to="/">Home</router-link>
    <router-link to="/kali-in-bali">Kali In Bali</router-link>
    <router-link to="/the-kali-academy">The Kali Academy</router-link>
  </nav>
</template>

<script>
export default {
  name: 'SideNav'
}
</script>

<style scoped>
.side-nav {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #f8f9fa;
  border-right: 1px solid #dee2e6;
  padding-top: 60px;
  transition: left 0.3s ease;
  z-index: 1000;
}

.side-nav.nav-open {
  left: 0;
}

.side-nav a {
  display: block;
  font-weight: bold;
  color: #2c3e50;
  padding: 10px 15px;
  text-decoration: none;
  transition: background-color 0.2s;
}

.side-nav a:hover {
  background-color: #e9ecef;
}

.side-nav a.router-link-exact-active {
  color: #42b983;
  background-color: #e9ecef;
}
</style>
