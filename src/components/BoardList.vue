<template>
  <div class="board-list">
    <table>
      <colgroup>
        <col style="width: 10%;"/>
        <col style="width: 60%"/>
        <col style="width: 20%"/>
        <col style="width: 10%"/>
      </colgroup>
      <thead>
        <tr>
          <th scope="col">번호</th>
          <th scope="col">제목</th>
          <th scope="col">작성자</th>
          <th scope="col">작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td scope="col">{{ post.id }}</td>
          <td scope="col"><router-link :to="{ name: 'BoardListPage' }">{{ post.title }}</router-link> [{{ post.comments.length }}]</td>
          <td scope="col">{{ post.user.name }}</td>
          <td scope="col">{{ post.createdAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'BoardList',
  computed: {
    ...mapState([ 'posts' ])
  }
}
</script>
<style>
.board-list {
  background-color: #fff;
}
.board-list thead {
  font-size: 14px;
  font-weight: normal;
  color: #fff;
  background-color: #888;
}
.board-list thead th {
  position: relative;
  padding: 10px;
}
.board-list thead th:after {
  content: '|';
  position: absolute;
  right: 0;
  color: #c3b9b9;
}
.board-list thead th:last-child:after {
  content: '';
}
.board-list tbody td {
  padding: 20px;
  font-weight: normal;
  border-bottom: 1px solid #ededed;
}
.board-list tbody td:nth-child(2) {
  text-align: left;
}
</style>
