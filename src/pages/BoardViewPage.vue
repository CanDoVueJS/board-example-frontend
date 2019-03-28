<template>
  <div class="board-view-page">
    <h1>포스트 상세 게시글</h1>
    <board-view :post="post"/>
    <router-link :to="{ name: 'BoardListPage' }">목록</router-link>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import BoardView from '@/components/BoardView'
import store from '@/store'

export default {
  name: 'BoardViewPage',
  computed: {
    ...mapState([ 'post' ])
  },
  beforeRouteEnter (to, from, next) {
    store.dispatch('fetchPost', to.params.index)
      .then(() => {
        next()
      })
  },
  methods: {
    ...mapActions([ 'fetchPost' ])
  },
  components: { BoardView }
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
  .board-view-page > div > div {
    padding: 20px;
    text-align: left;
    background-color: #888;
    color: #fff;
    font-size: 14px;
  }
  .board-view-page > div > div > h1 {
    font-size: 24px;
  }
  .board-view-page > div > div > span {
    display: block;
    margin-bottom: 2px;
  }
  .board-view-page > div > div > strong {
    font-weight: normal;
  }
  .board-view-page > div > p {
    margin-bottom: 20px;
    padding: 20px;
    text-align: left;
  }
  .board-view-page .router-link-active {
    display: inline-block;
    padding: .5rem 1.75rem;
    background-color: #414141;
    border-radius: .25rem;
    color: #fff;
    text-decoration: none;
  }
</style>
