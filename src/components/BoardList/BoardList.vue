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
        <tr>
          <td scope="col">1</td>
          <td scope="col">제목입니다. [1]</td>
          <td scope="col">홍길동</td>
          <td scope="col">2018010101</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'BoardList'
}
</script>
<style>
.board-list {
  width: 940px;
  margin: 0 auto;
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
}
.board-list tbody td:nth-child(2) {
  text-align: left;
}
</style>
