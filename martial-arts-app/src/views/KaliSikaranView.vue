<template>
  <div class="kali-sika-ran">
    <h1>Redirecting to KaliSikaran...</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const redirectToWebView = () => {
  const url = 'https://www.kalisikaran.com/';
  router.push({ path: '/webview', query: { url } });
};

onMounted(redirectToWebView);
</script>
