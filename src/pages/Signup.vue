<template>
  <div class="sign-up-page">
    <h3>회원가입</h3>
    <signup-form @submit="onSubmit"/>
    <p>이미 가입하셨나요? <router-link :to="{ name: 'Signin' }">로그인 하러가기</router-link></p>
  </div>
</template>
<script>
import api from '@/api'
import SignupForm from '@/components/SignupForm'
export default {
  name: 'Signup',
  methods: {
    onSubmit (payload) {
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
  .sign-up-page {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 456px;
    height: 396px;
    margin: -186px 0 0 -228px;
    padding: 45px 60px 60px;
    background-color: #fff;
    border: 1px solid #ededed;
  }
  .sign-up-page h3 {
    margin-bottom: 20px;
    text-align: left;
  }
  .sign-up-page form fieldset input {
    margin-bottom: 8px;
  }
  .sign-up-page form fieldset input[type="text"], .sign-up-page form fieldset input[type="password"] {
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    margin-bottom: 8px;
    padding: 5px 12px;
    color: #495057;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    font-size: 14px;
  }
  .sign-up-page form fieldset button[type="submit"] {
    width: 100%;
    margin: 16px 0 8px;
    padding: .5rem .75rem;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    border-radius: .25rem;
    background-color: #414141;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  .sign-up-page form fieldset button[type="submit"]:hover {
    background-color: #181818;
  }
  .sign-up-page > p {
    font-size: 14px;
    text-align: left;
  }
</style>
