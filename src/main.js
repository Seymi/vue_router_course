//import './assets/main.css'

//import { createApp, createRenderer } from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import { createRouter, createWebHistory } from 'vue-router';
//import { createRouter, createWebHashHistory } from 'vue-router';

const app = createApp(App);
app.use(router)

app.mount('#app')
