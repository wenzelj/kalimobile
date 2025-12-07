<template>
  <div class="the-kali-academy">
    <h1>Redirecting to The Kali Academy...</h1>
  </div>
</template>

<script>
import { Browser } from '@capacitor/browser';

export default {
  name: 'TheKaliAcademyView',
  async mounted() {
    await Browser.open({ url: 'https://member.thekaliacademy.com/login' });
  }
}
</script>
