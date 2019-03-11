<template>
<div class="container">
  <div class="row">
    <div class="col align-self-center">
      <h1>로그인</h1>
      <signin-form @submit="onSubmit"></signin-form>
    </div>
  </div>
</div>
</template>

<script>
import SigninForm from '@/components/SigninForm/SigninForm'
import { mapActions } from 'vuex'

export default {
  name: 'Signin',
  methods: {
    onSubmit (payload) {
      this.signin(payload)
    },
    ...mapActions([ 'signin' ])
  },
  components: {
    SigninForm
  }
}
</script>

<style></style>
