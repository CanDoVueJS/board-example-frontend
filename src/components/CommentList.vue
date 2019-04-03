<template>
  <ul>
    <li v-for="comment in comments" :key="comment.id">
      <strong>{{ comment.user.name }}</strong><span>{{ comment.createdAt }}</span>
      <p>{{ comment.contents }}</p>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'CommentList',
  props: {
    comments: {
      type: Array
    }
  }
}
</script>
