//import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationShowView from '../views/DestinationShowView.vue'


const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'my dynamic title', page: 'home'} },
  { path: '/destination/:id/:slug',
    name: 'destination.show',
    meta: { title: 'my dynamic title', page: 'Land'},
    component: ()=> import ('@/views/DestinationShowView.vue'),
    //props: route => ({...route.params, id: parseInt(route.params.id)})
    props: route => ({ id: parseInt(route.params.id)})
    /*
    ,
  children: [
    { path: ':experienceSlug',
    name: 'experience.show',
    component: () => import('@/views/ExperienceShowView.vue'),
    props: route => ({...route.params, id: parseInt(route.params.id)})
  }
  ]
  */

  },
  { path: '/destination/:id/:slug/:experienceSlug',
    name: 'experience.show',
    component: () => import('@/views/ExperienceShowView.vue'),
    props: route => ({...route.params, id: parseInt(route.params.id)})
  }

];

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  beforeEach(toRoute, fromRoute, next) {
    window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Home';
    next();
  },
  routes
})

export default router
