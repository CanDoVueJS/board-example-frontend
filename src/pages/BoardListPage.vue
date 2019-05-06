<template>
  <div class="board-list-page">
    <h1>포스트 게시글</h1>
    <board-list :posts="posts"/>
    <router-link :to="{ name: 'PostCreatePage' }">글쓰기</router-link>
  </div>
</template>
<script>
import BoardList from '@/components/BoardList'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'BoardListPage',
  computed: {
    ...mapState([ 'posts' ])
  },
  mounted () {
    this.fetchPostList()
  },
  methods: {
    ...mapActions(['fetchPostList'])
  },
  components: { BoardList }
}
</script>
