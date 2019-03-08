import axios from 'axios'

export default {
  signin () {
    axios.get('http://localhost:8000/signin').then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
