<template>
  <ul class="comments">
    <li v-for="comment in comments" :key="comment.id">
      <comment-view :comment="comment" @onDelete="onDelete"/>
    </li>
    <li v-if="comments.length <= 0">
      입력된 댓글이 없습니다.
    </li>
  </ul>
</template>
<script>
import CommentView from '@/components/CommentView'
import { mapActions } from 'vuex'

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
  },
  methods: {
    onDelete (commentId) {
      this.deleteComment(commentId)
        .then(res => {
          alert('댓글이 삭제되었습니다.')
        })
        .catch(err => {
          if (err.response.status === 401) {
            alert('로그인이 필요합니다.')
            this.$router.push({ name: 'Signin' })
          } else {
            alert(err.response.data.msg)
          }
        })
    },
    ...mapActions([ 'deleteComment' ])
  }
}
</script>
