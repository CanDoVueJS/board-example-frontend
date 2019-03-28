<template>
  <div>
    <div>
      <h1>{{ post.title }}</h1>
      <span>게시물 번호 {{ post.id }}</span>
      <strong>{{ post.user.name }} · {{ post.createdAt }}</strong>
    </div>
    <p>{{ post.contents }}</p>
  </div>
</template>
<script>
export default {
  name: 'BoardView',
  props: {
    post: {
      type: Object
    }
  }
}
</script>
