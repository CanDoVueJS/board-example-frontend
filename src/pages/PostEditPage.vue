<template>
  <div class="post-edit-page">
    <h3>게시물 수정</h3>
  </div>
</template>

<script>
export default {
  name: 'PostEditPage'
}
</script>

<style>
  .post-edit-page {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    padding: 45px 60px 60px;
    background-color: #fff;
    border: 1px solid #ededed;
  }
  .post-edit-page h3 {
    margin-bottom: 20px;
    text-align: left;
  }
</style>
