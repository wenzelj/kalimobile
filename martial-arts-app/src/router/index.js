import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KaliInBaliView from '../views/KaliInBaliView.vue'
import TheKaliAcademyView from '../views/TheKaliAcademyView.vue'
import KaliSikaranView from '../views/KaliSikaranView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: KaliSikaranView
  },
  {
    path: '/home',
    name: 'home-view',
    component: HomeView
  },
  {
    path: '/kali-sika-ran',
    name: 'kali-sika-ran',
    component: KaliSikaranView
  },
  {
    path: '/kali-in-bali',
    name: 'kali-in-bali',
    component: KaliInBaliView
  },
  {
    path: '/the-kali-academy',
    name: 'the-kali-academy',
    component: TheKaliAcademyView
  },
  {
    path: '/webview',
    name: 'webview',
    component: () => import('../views/WebView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
