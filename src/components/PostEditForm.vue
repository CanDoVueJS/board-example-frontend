<template>
  <form @submit.prevent="onSubmit">
    <fieldset>
      <label>제목</label>
      <input v-model="title"
             type="text"
             placeholder="게시물 제목을 입력해주세요." />
      <label>내용</label>
      <textarea v-model="contents"
                rows="5"
                placeholder="게시물 내용을 입력해주세요.">
      </textarea>
      <button type="submit">수정하기</button>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: 'PostEditForm',
  props: {
    initTitle: {
      type: String,
      required: true
    },
    initContents: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      title: '',
      contents: ''
    }
  },
  methods: {
    onSubmit () {
      const { title, contents } = this
      this.$emit('submit', { title, contents })
    }
  },
  created () {
    this.title = this.initTitle
    this.contents = this.initContents
  }
}
</script>

<style></style>
