import axios from 'axios'
import { loding } from './loding'
import store from '../store'
import { ElMessage } from 'element-plus'

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 请求拦截
http.interceptors.request.use(
  (config) => {
    /**
     * 开启loding
     */
    loding.open()
    /**
     * 添加请求头
     */
    const authorization = store.getters.authorization
    if (authorization) {
      config.headers.Authorization = authorization
    }

    return config
  },
  (err) => {
    loding.close()
    return Promise.reject(err)
  }
)
// 响应拦截
http.interceptors.response.use(
  (res) => {
    loding.close()
    // console.log(res)
    if (res.data.code === 400) {
      ElMessage.error(res.data.msg)
    }
    return res
  },
  (err) => {
    loding.close()
    return Promise.reject(err)
  }
)

function _showMessage(msg, type) {
  ElMessage({
    showClose: true,
    message: msg,
    type: type
  })
}

/*
get,post,都可以使用data传参
*/
const request = (option) => {
  if (option.method.toLowerCase() === 'get') {
    option.params = option.data || {}
  }
  return http(option)
}
export default request
