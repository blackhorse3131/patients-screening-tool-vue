import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: Router
}).$mount('#app')
