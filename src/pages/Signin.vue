<template>
<div class="sign-in-page">
  <h3>로그인</h3>
  <signin-form @submit="onSubmit"/>
  <p>회원이 아니신가요? <router-link :to="{ name: 'Signup' }">회원가입 하러가기</router-link></p>
</div>
</template>

<script>
import SigninForm from '@/components/SigninForm'
import { mapActions } from 'vuex'

export default {
  name: 'Signin',
  methods: {
    onSubmit (payload) {
      this.signin(payload).then(res => {
        alert('로그인 되었습니다.')
        this.$router.push({ name: 'BoardListPage' })
      }).catch(err => {
        alert(err.response.data.msg)
      })
    },
    ...mapActions([ 'signin' ])
  },
  components: {
    SigninForm
  }
}
</script>

<style>
  .sign-in-page {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 456px;
    height: 330px;
    margin: -165px 0 0 -228px;
    padding: 45px 60px 60px;
    background-color: #fff;
    border: 1px solid #ededed;
  }
  .sign-in-page h3 {
    margin-bottom: 20px;
    text-align: left;
  }
  .sign-in-page form fieldset input {
    margin-bottom: 8px;
  }
  .sign-in-page form fieldset input[type="text"], .sign-in-page form fieldset input[type="password"] {
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    margin-bottom: 8px;
    padding: 5px 12px;
    color: #495057;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    font-size: 14px;
  }
  .sign-in-page form fieldset input[type="password"] {
    margin-bottom: 16px;
  }
  .sign-in-page form fieldset button[type="submit"] {
    width: 100%;
    margin-bottom: 8px;
    padding: .75rem;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    border-radius: .25rem;
    background-color: #414141;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  .sign-in-page form fieldset button[type="submit"]:hover {
    background-color: #181818;
  }
  .sign-in-page > p {
    font-size: 16px;
    text-align: left;

  }
</style>
