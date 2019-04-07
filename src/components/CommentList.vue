<template>
  <ul>
    <li v-for="comment in comments" :key="comment.id">
      <strong>{{ comment.user.name }}</strong><span>{{ comment.createdAt }}</span>
      <p>{{ comment.contents }}</p>
    </li>
    <li v-if="comments.length <= 0">
      입력된 댓글이 없습니다.
    </li>
  </ul>
</template>
<script>
export default {
  name: 'CommentList',
  props: {
    comments: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
