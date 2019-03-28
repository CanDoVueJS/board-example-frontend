<template>
  <div class="board-view-page">
    <h1>포스트 읽기</h1>
    <dl>
      <dt>제목입니다.</dt>
      <dd>1 | 홍길동 | 2019-01-01 09:00</dd>
      <dd>내용입니다.</dd>
    </dl>
  </div>
</template>
<script>
export default {
  name: 'BoardViewPage'
}
</script>
<style>
  .board-view-page {
    width: 940px;
    margin: 60px auto 0;
    padding: 40px 30px 60px;
    background-color: #fff;
    box-shadow: 0 4px 10px -4px rgba(0, 0, 0, 0.2);
  }
  .board-view-page h1 {
    margin-bottom: 12px;
    text-align: left;
    font-size: 24px;
  }
  .board-view-page > dl {
    text-align: left;
    border-top: 2px solid #888;
    border-bottom: 1px solid #888;
  }
  .board-view-page > dl dt {
    padding: 20px;
    font-size: 18px;
  }
  .board-view-page > dl dd {
    padding: 20px;
    font-size: 14px;
  }
  .board-view-page > dl dd:nth-child(2) {
    border-bottom: 1px solid #888;
  }
</style>
