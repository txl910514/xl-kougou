import axios from 'axios'
import services from '@/config/service.js'
// import store from '@/stores/'

let http = {}

// axios.defaults.headers.common['token'] = store.state.common.token
axios.interceptors.response.use(function (res) {
  return res
}, function (res) {
  return Promise.reject(res)
})

let request = function (Vue, service) {
  let host = (services[service] || {host: ''}).host
  return {
    get (action, options) {
      return axios.get(host + action, options)
    },
    head (action, options) {
      return axios.head(host + action, options)
    },
    delete (action, options) {
      return axios.delete(host + action, options)
    },
    post (action, body, options) {
      return axios.post(host + action, body, options)
    },
    put (action, body, options) {
      return axios.put(host + action, body, options)
    },
    patch (action, body, options) {
      return axios.patch(host + action, body, options)
    }
  }
}

http.install = function (Vue, options) {
  Vue.http = function (host) {
    return request(Vue, host)
  }
}

export default http
