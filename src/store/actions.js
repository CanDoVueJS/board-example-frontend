import api from '@/api'
import {
  SET_ACCESS_TOKEN,
  SET_MY_INFO,
  DESTROY_ACCESS_TOKEN,
  DESTROY_MY_INFO, FETCH_POST_LIST, FETCH_POST
} from './mutation-types'

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
  },
  signout ({ commit }) {
    commit(DESTROY_MY_INFO)
    commit(DESTROY_ACCESS_TOKEN)
  },
  signinByToken ({ commit }, token) {
    commit(SET_ACCESS_TOKEN, token)
    return api.get('/users/me')
      .then(res => {
        commit(SET_MY_INFO, res.data)
        return Promise.resolve(res.data)
      }).catch(err => {
        return Promise.reject(err)
      })
  },
  fetchPostList ({ commit }) {
    return api.get('/posts')
      .then(res => {
        commit(FETCH_POST_LIST, res.data)
      }).catch(err => {
        return Promise.reject(err)
      })
  },
  fetchPost ({ commit }, index) {
    return api.get(`/posts/${index}`)
      .then(res => {
        commit(FETCH_POST, res.data)
      }).catch(err => {
        return Promise.reject(err)
      })
  }
}
