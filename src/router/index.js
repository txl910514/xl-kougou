import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import search from '../pages/search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
