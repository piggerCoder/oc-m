import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import api from './api'
import './assets/js/global.js'
import {installComponent} from './assets/js/component.js'

installComponent(Vue)
Vue.use(api)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')