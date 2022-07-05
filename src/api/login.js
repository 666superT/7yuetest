import request from '@/utils/request'
function getLoginCode() {
  return request({ url: '/captcha', method: 'get' })
}

function login(params) {
  return request({
    url: `/login?username=${params.username}&password=${params.password}&code=${params.code}&token=${params.token}`,
    method: 'post'
  })
}

function getMenuList() {
  return request({ url: '/sys/menu/nav', method: 'get' })
}

function getUserInfo() {
  return request({ url: '/sys/userInfo', method: 'get' })
}
export { getLoginCode, login, getMenuList, getUserInfo }
