import * as types from '@/stores/types'

const mutations = {
  [types.KG_LIST] (state, response) {
    if (response.data.success) {
      state.kgList = response.data.data
    }
  },
  [types.HOS_LIST] (state, response) {
    if (response.data.success) {
      state.hosList = response.data.data
    }
  }
}

export default mutations
