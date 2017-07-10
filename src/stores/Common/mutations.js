import * as types from '@/stores/types'

const mutations = {
  [types.KG_LIST] (state, response) {
    if (response.data.success) {
      console.log(response.data.data)
      state.kgList = response.data.data
    }
  }
}

export default mutations
