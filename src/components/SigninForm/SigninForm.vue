<template>
  <form class="sign-in-form"
    @submit.prevent="submit">
    <fieldset>
      <input class="form-control"
             v-model="email"
             type="text"
             placeholder="이메일을 입력해주세요."/>
      <input class="form-control"
             type="password"
             v-model="password"
             placeholder="비밀번호를 입력해주세요."/>
      <button type="submit" class="btn btn-primary btn-block btn-lg">
        로그인
      </button>
    </fieldset>
  </form>
</template>
<script>
export default {
  name: 'SigninForm',
  data () {
    return {
      email: '',
      password: '',
      passwordConfirm: ''
    }
  },
  methods: {
    submit () {
      const { email, password } = this
      this.$emit('submit', { email, password })
    }
  }
}
</script>
<style scoped>
  .sign-in-form {
    background-color: #fff;
    border-radius: 4px;
  }
  .sign-in-form fieldset input {
    margin-bottom: 8px;
  }
</style>
