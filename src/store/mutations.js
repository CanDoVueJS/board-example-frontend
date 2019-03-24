import {DESTROY_ACCESS_TOKEN, DESTROY_MY_INFO, SET_ACCESS_TOKEN, SET_MY_INFO} from './mutation-types'
import api from '@/api'

export default {
  [SET_ACCESS_TOKEN] (state, accessToken) {
    if (accessToken) { // 방어코드
      state.accessToken = accessToken
      // 설명 필요
      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`
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
  },
  [DESTROY_MY_INFO] (state) {
    state.me = null
  }
}
