import Vue from 'vue'
import Snotify from 'vue-snotify'
import moment from 'moment'
import App from './App.vue'
import router from './router'
import store from './store/'
import './plugins/element.js'
import 'vue-snotify/styles/material.css'

Vue.config.productionTip = false

Vue.use(Snotify, {
  toast: {
    timeout: 4000,
    bodyMaxLength: 200,
    titleMaxLength: 20
  }
})

Vue.filter('moment', (date) => {
  moment.locale('es')
  return moment(date).format('LL')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
