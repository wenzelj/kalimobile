<template>
  <div class="webview-container">
    <iframe :src="url" frameborder="0" width="100%" height="100%"></iframe>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const url = computed(() => route.query.url);
</script>

<style scoped>
.webview-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
iframe {
  border: none;
}
</style>
