/**
 * Create by yong
 */
export function timeCSTS (time) {
  let date = new Date(time)
  let month = date.getMonth() <= 9
    ? '0' + (date.getMonth() + 1)
    : date.getMonth() + 1
  let day = date.getDate() <= 9
    ? '0' + (date.getDate())
    : date.getDate()
  return `${date.getFullYear()}-${month}-${day}`
}

export function timeCST (time) {
// time 格式为 'Fri Dec 12 2014 08:00:00 GMT+0800' if (time) {
  var d = new Date(time)
  var t = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
  return t
}

export function timeCSTHST (time) {
// time 格式为 'Fri Dec 12 2014 08:00:00 GMT+0800' if (time) {
  var d = new Date(time)
  var t = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
  return t
}

// 获取   时分秒
export function timesCST (time) {
// time 格式为 'Fri Dec 12 2014 08:00:00 GMT+0800' if (time) {
  var d = new Date(time)
  var t = d.getFullYear() + '' + (d.getMonth() + 1) + '' + d.getDate() + '' + d.getHours() + '' + d.getMinutes() + '' + d.getSeconds()
  return t
}

export function getTime (day) {
// day 近 天的 期 法
  var date = {}
  var d = new Date()
  date.nowDay = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
  d.setDate(d.getDate() - day)
  date.startDay = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
  return date
}

/** *
 *  期格式化
 * @export
 * @param {any} val 时间值
 * @param {any} format 格式化规则 yyyy-MM-dd */
export function dateFormat (val, format) {
  if (!val) {
    return ''
  }
  let date = new Date(val)
  let o = {
    'M+': date.getMonth() + 1, //  份
    'd+': date.getDate(), //
    'h+': date.getHours(), //  时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3) // 季度 'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return format
}
