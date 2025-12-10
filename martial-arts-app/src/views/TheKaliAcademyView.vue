<template>
  <div class="the-kali-academy">
    <h1>Redirecting to The Kali Academy...</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const redirectToWebView = () => {
  const url = 'https://member.thekaliacademy.com/login';
  router.push({ path: '/webview', query: { url } });
};

onMounted(redirectToWebView);
</script>
