/**
 * Create by yong
 */
import request from '../http.conf'
console.log(request, 'requestrequest')
let ReportService = {
  list: list,
  application: application,
  changeLine: changeLine
}

function list (params) {
  return request({
    url: '/reports',
    method: 'GET',
    params: params
  })
}

function application (params) {
  return request({
    url: '/apps',
    method: 'GET',
    params: params
  })
}

function changeLine (id, path) {
  return request({
    url: '/apps/' + id + '/' + path,
    method: 'PUT'
  })
}

export function getAppInfo (appId) {
  return request({
    url: '/apps/' + appId,
    method: 'GET'
  })
}

export {ReportService}
