/**
 * Create by yong
 */
import request from '../http.conf'

let AuthService = {
  login: login
}

function login (params) {
  return request({
    url: '/login',
    method: 'POST',
    params: params
  })
}

export {AuthService}
