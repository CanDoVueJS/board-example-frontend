<template>
  <ul class="comments">
    <li v-for="comment in comments" :key="comment.id">
      <comment-view :comment="comment" />
    </li>
    <li v-if="comments.length <= 0">
      입력된 댓글이 없습니다.
    </li>
  </ul>
</template>
<script>
import CommentView from '@/components/CommentView'

export default {
  name: 'CommentList',
  components: {
    CommentView
  },
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
