import Vue from 'vue'
import VueSocketio from 'vue-socket.io';

Vue.use(VueSocketio, 'http://localhost:3000/socket.io/socket.io.js')

import App from '@/components/App.vue'

new Vue({
  el: '#root',
  render: h => h(App)
})