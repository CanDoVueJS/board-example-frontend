<template>
  <div class="board-view-page">
    <h1>포스트 상세 게시글</h1>
    <board-view v-if="post" :post="post"/>
    <p v-else>게시글 불러오는 중...</p>
    <router-link :to="{ name: 'PostEditPage', params: { postId } }">수정</router-link>
    <router-link :to="{ name: 'BoardListPage' }">목록</router-link>
    <comment-list v-if="post" :comments="post.comments"/>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import BoardView from '@/components/BoardView'

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
    ...mapState([ 'post' ])
  },
  created () {
    this.fetchPost(this.postId)
      .catch(err => {
        alert(err.response.data.msg)
        this.$router.back()
      })
  },
  methods: {
    ...mapActions([ 'fetchPost' ])
  },
  components: {
    BoardView,
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
  .board-view-page a {
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
  .board-view-page > ul > li > strong {
    float: left;
    margin-right: 5px;
    margin-bottom: 5px;
  }
  .board-view-page > ul > li > span {
    float: left;
    font-size: 14px;
    vertical-align: bottom;
  }
  .board-view-page > ul > li > p {
    clear: both;
  }
  .comments {
    position: relative;
    margin-top: 20px;
    padding-right: 100px;
    overflow: hidden;
  }
  .comments textarea {
    width: 100%;
    height: 60px;
    border: 1px solid #666;
    padding: 10px;
  }
  .comments button {
    position: absolute;
    right: 0;
    top: 0;
    height: 60px;
    width: 96px;
    background-color: #414141;
    color: #fff;
    font-size: 16px;
  }
</style>
