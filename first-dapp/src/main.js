
import Vue from 'vue'
import App from './App'
import store from './store/'
import router from './router'
import './assets/css/reset.css'
import './assets/css/border.css'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
