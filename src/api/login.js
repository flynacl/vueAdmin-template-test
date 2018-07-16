import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(params) {
  return request({
    url: '/user/detail',
    method: 'get',
    params: params
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function captcha() {
  return request({
    url: '/user/captcha',
    method: 'get'
  })
}
