import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KaliInBaliView from '../views/KaliInBaliView.vue'
import TheKaliAcademyView from '../views/TheKaliAcademyView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
