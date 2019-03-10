import { SET_ACCESS_TOKEN } from './mutation-types'
import API from '@/api'

export default {
  [SET_ACCESS_TOKEN] (state, accessToken) {
    if (accessToken) { // 방어코드
      state.accessToken = accessToken
      // 설명 필요
      API.defaults.headers.common.Authorization = `jwt ${accessToken}`
    }
  }
}
