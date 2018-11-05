/**
 * Create by yong
 */
import request from '../http.conf'
console.log(request, 'requestrequest')
let ReportService = {
  list: list
}

function list (params) {
  return request({
    url: '/reports',
    method: 'GET',
    params: params
  })
}

export {ReportService}
