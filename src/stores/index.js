import Vue from 'vue'
import Vuex from 'vuex'

import CommonStore from './Common/'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    CommonStore
  }
})
