//import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import sourceData from '@/data.json'
import DestinationShowView from '../views/DestinationShowView.vue'


//window.user = 'seymi';

let pageTitle = 'Meine Foto App';

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { pageSubtitle: 'Start'} },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: { pageSubtitle: '404' },
    component: ()=> import('@/views/NotFoundView.vue'),
  },
  { path: '/destination/:id/:slug',
    name: 'destination.show',
    meta: { transition: 'slide-left', pageSubtitle: 'Ziele', authRequired: false },
    component: ()=> import ('@/views/DestinationShowView.vue'),
    props: route => ({...route.params, id: parseInt(route.params.id)}),
    //props: route => ({ id: parseInt(route.params.id)}),

    // if we like to have the experience.show view at the same page like destination.show
    /*
    children: [
      { path: ':experienceSlug',
      name: 'experience.show',
      meta: { transition: 'slide-left', pageSubtitle: 'Experience' },
      //meta: { transition: 'slide-left', pageSubtitle: 'Experience', authRequired: false },
      component: () => import('@/views/ExperienceShowView.vue'),
      props: route => ({...route.params, id: parseInt(route.params.id)})
    }
    ]
    */
  },

  { path: '/destination/:id/:slug/:experienceSlug',
    name: 'experience.show',
    meta: { transition: 'slide-left', pageSubtitle: 'Experience', authRequired: false },
    component: () => import('@/views/ExperienceShowView.vue'),
    props: route => ({...route.params, id: parseInt(route.params.id)})
  },

  {
    path: '/userlogin',
    name: 'userLogin',
    meta: { pageSubtitle: 'User Login' },
    component: ()=> import('@/views/UserLoginView.vue'),
  },

  // protected routes
  {
    path: '/protected',
    name: 'protected',
    meta: { pageSubtitle: 'protected', authRequired: true },
    component: ()=> import('@/views/ProtectedView.vue'),
  },

  {
    path: '/invoices',
    name: 'invoices',
    meta: { pageSubtitle: 'invoices', authRequired: true },
    component: ()=> import('@/views/InvoicesView.vue'),
  },


  {
    path: '/userprofile/:userId',
    name: 'userProfile',
    meta: { pageSubtitle: 'User Profile', authRequired: true },
    component: ()=> import('@/views/UserProfileView.vue'),
    props: route => ({ userId: parseInt(route.params.userId ) }),
  },


];

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  //history: createWebHistory(),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior ( toRoute, fromRoute, savedPosition) {
    //return savedPosition || { top: 0};
    return savedPosition || new Promise( (resolve)=>{
      setTimeout(()=> resolve( { top: 0, behavior: 'smooth' } ), 300 )
    })
  }
});

router.beforeEach(async (toRoute, from) => {
  if ( toRoute.meta.authRequired && !window.user ) {
    return {
      name: 'userLogin',
      query: { redirect: toRoute.fullPath }
    }
  };

  if (toRoute.name === 'destination.show') {
    const exists = sourceData.destinations.find( destination => destination.id === parseInt(toRoute.params.id) );
    if (!exists) {
      console.log('cant find desinationId ' + toRoute.params.id);
      return {
      name: 'NotFound',
      // allows keeping the URL while rendering a different page
      params: { pathMatch: toRoute.path.split('/').slice(1)  },
      }
    };

  } else {
    //console.log('kein check erforderlich ');
  }
  window.document.title = toRoute.meta && toRoute.meta.pageSubtitle ? pageTitle + ' - ' + toRoute.meta.pageSubtitle : pageTitle;
});

export default router
