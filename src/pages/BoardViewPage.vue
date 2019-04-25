<template>
  <div class="board-view-page">
    <board-view v-if="post" :post="post"/>
    <p v-else>게시글 불러오는 중...</p>
    <router-link :to="{ name: 'PostEditPage', params: { postId } }">수정</router-link>
    <button @click="onDelete">삭제</button>
    <router-link :to="{ name: 'BoardListPage' }">목록</router-link>
    <comment-list v-if="post" :comments="post.comments"/>
    <comment-form @submit="onCommentSubmit"/>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import BoardView from '@/components/BoardView'

import api from '@/api'

import CommentForm from '@/components/CommentForm'
import CommentList from '@/components/CommentList'

export default {
  name: 'BoardViewPage',
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'isAuthorized'
    ]),
    ...mapState([
      'post'
    ])
  },
  created () {
    this.fetchPost(this.postId)
      .catch(err => {
        alert(err.response.data.msg)
        this.$router.back()
      })
  },
  methods: {
    onCommentSubmit (comment) {
      if (!this.isAuthorized) {
        alert('로그인이 필요합니다!')
        this.$router.push({ name: 'Signin' })
      } else {
        this.createComment(comment)
          .then(() => {
            alert('댓글이 성공적으로 작성되었습니다.')
          })
          .catch(err => {
            alert(err.response.data.msg)
          })
      }
    },
    onDelete () {
      const {id} = this.post
      api.delete(`/posts/${id}`)
        .then(res => {
          alert('게시물이 성공적으로 삭제되었습니다.')
          this.$router.push({name: 'BoardListPage'})
        })
        .catch(err => {
          if (err.response.status === 401) { // UnAuthorized
            alert('로그인이 필요합니다.')
            this.$router.push({name: 'Signin'})
          } else {
            alert(err.response.data.msg)
          }
        })
    },
    ...mapActions([
      'fetchPost',
      'createComment'
    ])
  },
  components: {
    BoardView,
    CommentForm,
    CommentList
  }
}
</script>
