<template>
  <form @submit.prevent="submit">
    <fieldset>
      <label>제목</label>
      <input v-model="title"
             type="text"
             placeholder="게시물 제목을 입력해주세요." />
      <label>내용</label>
      <textarea v-model="contents"
                placeholder="게시물 내용을 입력해주세요.">
      </textarea>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: 'BoardCreateForm',
  data () {
    return {
      title: '',
      contents: ''
    }
  },
  methods: {
    submit () {
      const { title, contents } = this
      this.$emit('submit', { title, contents })
    }
  }
}
</script>

<style></style>
