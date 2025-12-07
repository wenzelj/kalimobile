<template>
  <div class="kali-in-bali">
    <h1>Redirecting to Kali in Bali...</h1>
  </div>
</template>

<script>
import { Browser } from '@capacitor/browser';

export default {
  name: 'KaliInBaliView',
  async mounted() {
    await Browser.open({ url: 'https://www.kalisikaran.com/' });
  }
}
</script>
