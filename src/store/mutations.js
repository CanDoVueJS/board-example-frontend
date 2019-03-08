import { SET_ACCESS_TOKEN } from './mutation-types'

export default {
  [SET_ACCESS_TOKEN] (state, accessToken) {
    if (accessToken) { // 방어코드
      state.accessToken = accessToken
    }
  }
}
