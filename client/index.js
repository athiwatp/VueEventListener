import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSocketio from 'vue-socket.io';
import { routes } from '@/routes/router'
import App from '@/components/App.vue'
import keys from '@/config/keys'

Vue.use(VueRouter)
Vue.use(VueSocketio, 'https://vue-socket.herokuapp.com')

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