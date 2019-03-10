<template>
<div class="container">
  <div class="row">
    <div class="col align-self-center">
      <h1>회원가입</h1>
      <signup-form @onSubmitHandler="onSubmitHandler"/>
    </div>
  </div>
</div>
</template>
<script>
import api from '@/api'
import SignupForm from '@/components/SignupForm/SignupForm'
export default {
  name: 'Signup',
  methods: {
    onSubmitHandler (payload) {
      const { email, password, name } = payload
      api.post('/auth/signup', { name, email, password })
        .then(res => {
          alert('회원가입이 완료되었습니다.')
          this.$router.push({ name: 'Signin' })
        })
        .catch(err => {
          alert(err.response.data.msg)
        })
    }
  },
  components: {
    SignupForm
  }
}
</script>
<style>

</style>
