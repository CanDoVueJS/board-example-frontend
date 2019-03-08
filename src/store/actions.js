import axios from 'axios'

export default {
  signin ({ commit }, payload) {
    axios.post('http://localhost:8000/api/auth/signin', {
      email: payload.email,
      password: payload.password
    }).then(res => {
      
    })
  }
}
