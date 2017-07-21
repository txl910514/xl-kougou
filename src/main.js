// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/script/remRize'
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import http from '@/utils/http'
import router from './router'
import store from './stores'
Vue.use(MintUI)
Vue.use(http)
Vue.config.productionTip = false
// window.flex()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
