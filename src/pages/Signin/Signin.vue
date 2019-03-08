<template>
<div class="container">
  <div class="row">
    <div class="col align-self-center">
      <h1>로그인</h1>
      <signin-form @submit="submit"></signin-form>
    </div>
  </div>
</div>
</template>

<script>
import SigninForm from '@/components/SigninForm/SigninForm'

export default {
  name: 'Signin',
  methods: {
    submit (payload) {
      console.log(payload)
    }
  },
  components: {
    SigninForm
  }
}
</script>

<style></style>
