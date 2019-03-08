import axios from 'axios'

export default {
  signin ({ commit }, payload) {
    axios.post('http://localhost:8000/signin', {
      email: payload.email,
      password: payload.password
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
