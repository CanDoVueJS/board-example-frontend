<template>
  <div class="comment-view">
    <strong>{{ comment.user.name }}</strong><span>{{ comment.createdAt }}</span>
    <button>수정</button>
    <p>{{ comment.contents }}</p>
  </div>
</template>

<script>
export default {
  name: 'CommentView',
  props: {
    comment: {
      type: Object,
      required: true,
      validator (comment) {
        const isValidCommentId = typeof comment.id === 'number'
        const isValidContents = comment.contents && comment.contents.length
        const isValidUser = !!comment.user
        return isValidCommentId && isValidContents && isValidUser
      }
    }
  }
}
</script>
