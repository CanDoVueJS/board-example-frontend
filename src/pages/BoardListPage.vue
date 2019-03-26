<template>
  <div class="board-list-page">
    <h1>포스트 게시글</h1>
    <board-list :posts="posts"/>
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
<style>
  .board-list-page {
    width: 940px;
    margin: 60px auto 0;
    padding: 40px 30px 60px;
    background-color: #fff;
    box-shadow: 0 4px 10px -4px rgba(0, 0, 0, 0.2);
  }
  .board-list-page h1 {
    margin-bottom: 12px;
    text-align: left;
    font-size: 24px;
  }
  .board-list-page > div {
    background-color: #fff;
  }
  .board-list-page > div table thead {
    font-size: 14px;
    font-weight: normal;
    color: #fff;
    background-color: #888;
  }
  .board-list-page > div table thead th {
    position: relative;
    padding: 10px;
  }
  .board-list-page > div table thead th:after {
    content: '|';
    position: absolute;
    right: 0;
    color: #c3b9b9;
  }
  .board-list-page > div table thead th:last-child:after {
    content: '';
  }
  .board-list-page > div table tbody td {
    padding: 20px;
    font-weight: normal;
    border-bottom: 1px solid #ededed;
  }
  .board-list-page > div table tbody td:nth-child(2) {
    text-align: left;
  }
</style>
