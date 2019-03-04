<template>
<div class="bv-example-row bv-example-row-flex-cols container">
  <div class="row">
    <div class="col align-self-center">
      <h1>회원가입</h1>
      <signup-form @onSubmitHandler="onSubmitHandler"/>
    </div>
  </div>
</div>
</template>
<script>
import SignupForm from '../../components/SIgnupForm/SIgnupForm'
export default {
  name: 'Signup',
  methods: {
    onSubmitHandler (payload) {
      console.log(payload)
    }
  },
  components: {
    SignupForm
  }
}
</script>
<style>

</style>
