<template>
  <div class="board-view-page">
    <h1>포스트 상세 게시글</h1>
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
import { mapState, mapActions } from 'vuex'
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
    ...mapState([
      'post',
      'me'
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
      if (!this.me) {
        alert('로그인이 필요합니다!')
        this.$router.push({ name: 'Signin' })
      } else {
        this.createComment(comment)
          .then(() => {
            alert('댓글이 성공적으로 작성되었습니다.')
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
<style>
  .board-view-page {
    width: 940px;
    margin: 60px auto 0;
    padding: 40px 30px 60px;
    background-color: #fff;
    box-shadow: 0 4px 10px -4px rgba(0, 0, 0, 0.2);
    text-align: right;
  }
  .board-view-page h1 {
    margin-bottom: 12px;
    text-align: left;
    font-size: 24px;
  }
  .board-view-page > p {
    text-align: center;
    margin: 1rem 0;
  }
  .board-view-page .board-view > div {
    padding: 20px;
    text-align: left;
    background-color: #888;
    color: #fff;
    font-size: 14px;
  }
  .board-view-page .board-view > div > h1 {
    font-size: 24px;
  }
  .board-view-page .board-view > div > span {
    display: block;
    margin-bottom: 2px;
  }
  .board-view-page .board-view > div > strong {
    font-weight: normal;
  }
  .board-view-page .board-view > p {
    margin-bottom: 20px;
    padding: 20px;
    text-align: left;
  }
  .board-view-page a, .board-view-page button {
    display: inline-block;
    padding: .5rem 1.75rem;
    background-color: #414141;
    border-radius: .25rem;
    color: #fff;
    text-decoration: none;
  }
  .board-view-page > ul {
    text-align: left;
    margin-top: 20px;
    border-top: 1px solid #888;
  }
  .board-view-page > ul > li {
    overflow: hidden;
    padding: 20px;
    border-bottom: 1px dotted #999;
  }
  .board-view-page > .comments .comment-item > strong {
    float: left;
    margin-right: 5px;
    margin-bottom: 5px;
  }
  .board-view-page > .comments .comment-item > span {
    float: left;
    font-size: 14px;
    vertical-align: bottom;
  }
  .board-view-page > .comments .comment-item > p {
    clear: both;
  }
  .board-view-page > .comments .comment-item button:hover {
    opacity: 0.6;
  }
  .board-view-page > .comments .comment-item textarea {
     display: inline-block;
     border: 1px solid #666;
     width: 80%;
     padding: 10px;
    height: 60px;
  }
  .board-view-page > .comments .comment-item textarea + button {
    display: inline-block;
    border: 1px solid #666;
    padding: 10px;
    width: 19%;
    height: 60px;
    background-color: #414141;
    color: white;
  }
  .comment-form {
    position: relative;
    margin-top: 20px;
    padding-right: 100px;
    overflow: hidden;
  }
  .comment-form textarea {
    width: 100%;
    height: 60px;
    border: 1px solid #666;
    padding: 10px;
  }
  .comment-form button {
    position: absolute;
    right: 0;
    top: 0;
    height: 60px;
    width: 96px;
    background-color: #414141;
    color: #fff;
    font-size: 16px;
  }
  .comments button {
    background-color: transparent;
    color: black;
    font-size: 14px;
    padding: 0 0 0 10px;
    margin: 0 0 0 10px;
    border-left: 1px solid black;
    border-radius: 0;
    transition: opacity 0.3s ease-in-out;
    outline: 0;
  }
</style>
