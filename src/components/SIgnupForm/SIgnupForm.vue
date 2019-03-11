<template>
  <form class="sign-up-form"
        @submit.prevent="submit">
    <fieldset>
      <input class="form-control"
             v-model="name"
             type="text"
             placeholder="이름을 입력해주세요."/>
      <input class="form-control"
             v-model="email"
             type="text"
             placeholder="이메일을 입력해주세요."/>
      <input class="form-control"
             type="password"
             v-model="password"
             placeholder="비밀번호를 입력해주세요."/>
      <input class="form-control"
             type="password"
             v-model="passwordConfirm"
             placeholder="비밀번호를 다시 입력해주세요."/>
      <button type="submit"
              class="btn btn-primary btn-block btn-lg">
        회원가입
      </button>
    </fieldset>
  </form>
</template>
<script>
export default {
  name: 'SignupForm',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  },
  methods: {
    submit () {
      const { name, email, password } = this
      this.$emit('onSubmitHandler', { name, email, password })
    }
  }
}
</script>
<style>
  .sign-up-form fieldset input {
    margin-bottom: 8px;
  }
</style>
