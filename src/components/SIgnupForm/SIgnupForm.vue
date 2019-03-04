<template>
  <form class="sign-up-form"
        @submit.prevent="onSubmitHandler">
    <fieldset>
      <input class="form-control"
             v-model="id"
             type="text"
             placeholder="아이디를 입력해주세요."/>
      <input class="form-control"
             type="password"
             v-model="password"
             placeholder="비밀번호를 입력해주세요."/>
      <input class="form-control"
             type="password"
             v-model="passwordConfirm"
             placeholder="비밀번호를 다시 입력해주세요."/>
      <button type="submit" class="btn btn-primary btn-block btn-lg">
        회원가입 완료하기
      </button>
    </fieldset>
  </form>
</template>
<script>
export default {
  name: 'SignupForm',
  data () {
    return {
      id: '',
      password: '',
      passwordConfirm: ''
    }
  },
  methods: {
    onSubmitHandler () {
      const { id, password } = this
      this.$emit('onSubmitHandler', { id, password })
    }
  }
}
</script>
<style scoped>
  .sign-up-form {
    background-color: #fff;
    border-radius: 4px;
  }
  .sign-up-form fieldset input {
    margin-bottom: 8px;
  }
</style>
