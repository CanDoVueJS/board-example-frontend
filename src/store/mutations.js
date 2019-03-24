import {
  SET_ACCESS_TOKEN,
  SET_MY_INFO,
  DESTROY_ACCESS_TOKEN,
  DESTROY_MY_INFO
} from './mutation-types'
import api from '@/api'
import Cookies from 'js-cookie'

export default {
  [SET_ACCESS_TOKEN] (state, accessToken) {
    if (accessToken) { // 방어코드
      state.accessToken = accessToken
      // 설명 필요
      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`
      Cookies.set('accessToken', accessToken, { expires: 1 })
    }
  },
  [SET_MY_INFO] (state, me) {
    if (me) {
      state.me = me
    }
  },
  [DESTROY_ACCESS_TOKEN] (state) {
    state.accessToken = ''
    delete api.defaults.headers.common.Authorization
    Cookies.remove('accessToken')
  },
  [DESTROY_MY_INFO] (state) {
    state.me = null
  }
}
