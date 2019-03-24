import api from '@/api'
import {SET_ACCESS_TOKEN, SET_MY_INFO} from './mutation-types'

export default {
  signin ({ commit }, payload) {
    return api.post('/auth/signin', {
      email: payload.email,
      password: payload.password
    }).then(res => {
      const { accessToken } = res.data
      commit(SET_ACCESS_TOKEN, accessToken)
      return api.get('/users/me')
    }).then(res => {
      commit(SET_MY_INFO, res.data)
      return Promise.resolve(res.data)
    }).catch(err => {
      return Promise.reject(err)
    })
  }
}
