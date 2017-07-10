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
  // 收集登录信息
  retainLogin (param) {
    return Vue.http('base')
      .post('/login/insert', param)
      .then((res) => {
        return res
      })
  }
}
