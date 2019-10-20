import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const $ = require('jquery')
window.$ = $
window.dataLayer=[]
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
