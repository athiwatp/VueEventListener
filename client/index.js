import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSocketio from 'vue-socket.io';
import { routes } from '@/routes/router'
import App from '@/components/App.vue'

Vue.use(VueRouter)
Vue.use(VueSocketio, 'http://localhost:3000')

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'active'
})

new Vue({
  el: '#root',
  router,
  render: h => h(App)
})