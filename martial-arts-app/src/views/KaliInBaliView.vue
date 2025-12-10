<template>
  <div class="kali-in-bali">
    <h1>Redirecting to Kali in Bali...</h1>
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
