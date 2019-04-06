<template>
  <div class="comments">
    <textarea v-model="comment"
              rows="5"
              placeholder="댓글을 입력해주세요."/>
    <button type="button" @click="onSubmit">생성</button>
  </div>
</template>
<script>
export default {
  name: 'CommentForm',
  data () {
    return {
      comment: ''
    }
  },
  methods: {
    onSubmit () {
      const { comment } = this
      this.$emit('submit', comment)
      this.comment = ''
    }
  }
}
</script>
