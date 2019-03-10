import api from '@/api'
import { SET_ACCESS_TOKEN } from './mutation-types'

export default {
  signin ({ commit }, payload) {
    api.post('/auth/signin', {
      email: payload.email,
      password: payload.password
    }).then(res => {
      alert('로그인이 완료되었습니다.')
      const { accessToken } = res.data
      commit(SET_ACCESS_TOKEN, accessToken)
    }).catch(err => {
      alert(err.response.data.msg)
    })
  }
}
