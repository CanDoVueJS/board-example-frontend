<template>
  <div class="board-list-page">
    <h1>포스트 게시글</h1>
    <board-list/>
  </div>
</template>
<script>
import BoardList from '@/components/BoardList'
import { mapActions } from 'vuex'

export default {
  name: 'CommunityList',
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
</style>
