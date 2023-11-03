//import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationShowView from '../views/DestinationShowView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/destination/:id/:slug', name: 'destination.show', component: DestinationShowView },
]

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
