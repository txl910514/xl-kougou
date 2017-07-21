import * as types from '@/stores/types'
import api from '@/api/member'
import Vue from 'vue'
import VueCookie from 'vue-cookie'
Vue.use(VueCookie)

const actions = {
  [types.KG_LIST] ({ commit, state }, member) {
    return new Promise((resolve, reject) => {
      api.getKgList()
        .then((res) => {
          commit(types.KG_LIST, res)
          resolve(res)
        })
        .catch((res, v) => {
          console.log('actions catch', res, v)
        })
        .then((res) => {

        })
    })
  },
  [types.HOS_LIST] ({ commit, state }, member) {
    return new Promise((resolve, reject) => {
      api.getHostList(member)
        .then((res) => {
          commit(types.HOS_LIST, res)
          resolve(res)
        })
        .catch((res, v) => {
          console.log('actions catch', res, v)
        })
        .then((res) => {

        })
    })
  }
}

export default actions
