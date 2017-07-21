import Vue from 'vue'
export default {
  getKgList (params) {
    let param = {
      params
    }
    return Vue.http('base')
      .get('/kg/list', param)
      .then((res) => {
        return res
      })
  },
  // 最近热门
  getHostList (params) {
    let param = {
      params
    }
    return Vue.http('base')
      .get('/kg/host_list', param)
      .then((res) => {
        return res
      })
  },
  getHostListP (param) {
    return Vue.http('base')
      .post('/kg/host_list', param)
      .then((res) => {
        return res
      })
  }
}
