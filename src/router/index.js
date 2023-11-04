//import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import sourceData from '@/data.json'
import DestinationShowView from '../views/DestinationShowView.vue'

let pageTitle = 'Meine Foto App';
//let routeNoDataFound = false;

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { pageSubtitle: 'Start'} },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: { pageSubtitle: '404' },
    component: ()=> import('@/views/NotFoundView.vue'),
    //props: route => ({ noDataFound: routeNoDataFound }),
  },
  { path: '/destination/:id/:slug',
    name: 'destination.show',
    meta: { transition: 'slide-left', pageSubtitle: 'Ziele' },
    component: ()=> import ('@/views/DestinationShowView.vue'),
    props: route => ({...route.params, id: parseInt(route.params.id)}),
    //props: route => ({ id: parseInt(route.params.id)}),
  },

  /*
  children: [
    { path: ':experienceSlug',
    name: 'experience.show',
    component: () => import('@/views/ExperienceShowView.vue'),
    props: route => ({...route.params, id: parseInt(route.params.id)})
  }
  ]
  */

  { path: '/destination/:id/:slug/:experienceSlug',
    name: 'experience.show',
    meta: { transition: 'slide-left' },
    component: () => import('@/views/ExperienceShowView.vue'),
    props: route => ({...route.params, id: parseInt(route.params.id)})
  }

];

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  //history: createWebHistory(),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  /*
  beforeEach(toRoute, fromRoute, next) {
    //console.log('there is smoke in router beforeEach');
    window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Home';
    next();
  },
  */
  routes,
});

//let isAuthenticated = false;

router.beforeEach(async (toRoute, from) => {
  if (toRoute.name === 'destination.show') {
    //console.log('check if id exists ');
    const exists = sourceData.destinations.find( destination => destination.id === parseInt(toRoute.params.id) );
    if (!exists) {
      console.log('cant find desinationId ' + toRoute.params.id);
      //routeNoDataFound = true;
      return {
      name: 'NotFound',
      // allows keeping the URL while rendering a different page
      params: { pathMatch: toRoute.path.split('/').slice(1)  },
      //props: { noDataFound: true }
      }
    };

  } else {
    //console.log('kein check erforderlich ');
  }
  window.document.title = toRoute.meta && toRoute.meta.pageSubtitle ? pageTitle + ' - ' + toRoute.meta.pageSubtitle : pageTitle;
});

export default router
