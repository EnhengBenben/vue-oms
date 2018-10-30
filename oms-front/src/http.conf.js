/**
 * Create by yong
 */
import axios from 'axios'

console.log(process, 'process')
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_URL, // api的base_url
  timeout: 50000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(config => {
  // console.log(config.headers)
  config.headers = config.headers || {}
  if (window.localStorage.jwt) {
    config.headers.Authorization = window.localStorage.jwt
  }
  return config
}, error => {

  // Do something with request error
  // console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    // console.log(response)
    return response
  },
  error => {
    if (error.response.status == '401') {
      window.localStorage.removeItem('jwt')
      setTimeout(() => {
        window.location.href = window.origin
      }, 500)
    }
    return Promise.reject(error.response.data)
  })

export default service
