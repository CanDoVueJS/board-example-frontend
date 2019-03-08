import axios from 'axios'
import { SET_ACCESS_TOKEN } from './mutation-types'

export default {
  signin ({ commit }, payload) {
    axios.post('http://localhost:8000/api/auth/signin', {
      email: payload.email,
      password: payload.password
    }).then(res => {
      const { accessToken } = res.data
      commit(SET_ACCESS_TOKEN, accessToken)
    })
  }
}
