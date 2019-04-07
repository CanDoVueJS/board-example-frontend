<template>
  <div class="comment-item">
    <strong>{{ comment.user.name }}</strong><span>{{ comment.createdAt }}</span>
    <button @click="onClickEdit">수정</button>
    <div v-if="isEditing">
      <textarea
        v-model="editMessage"
        rows="3">
      </textarea>
      <button>수정완료</button>
    </div>
    <p v-else>{{ comment.contents }}</p>
  </div>
</template>

<script>
export default {
  name: 'CommentItem',
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
  },
  data () {
    return {
      isEditing: true,
      editMessage: ''
    }
  },
  methods: {
    onClickEdit () {
      this.isEditing = !this.isEditing
    }
  },
  created () {
    this.editMessage = this.comment.contents
  }
}
</script>
