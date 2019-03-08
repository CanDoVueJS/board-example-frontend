import API from '@/api'
import { SET_ACCESS_TOKEN } from './mutation-types'

export default {
  signin ({ commit }, payload) {
    API.post('/auth/signin', {
      email: payload.email,
      password: payload.password
    }).then(res => {
      const { accessToken } = res.data
      commit(SET_ACCESS_TOKEN, accessToken)
    })
  }
}
