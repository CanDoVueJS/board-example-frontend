<template>
  <div class="board-create-page">
    <h1>게시물 작성하기</h1>
    <post-create-form @submit="onSubmit"/>
  </div>
</template>

<script>
import api from '@/api'
import PostCreateForm from '@/components/PostCreateForm'

export default {
  name: 'PostCreatePage',
  components: { PostCreateForm },
  methods: {
    onSubmit (payload) {
      const { title, contents } = payload
      api.post('/posts', { title, contents })
        .then(res => {
          alert('게시물이 성공적으로 작성되었습니다.')
          this.$router.push({
            name: 'BoardViewPage',
            params: { postId: res.data.id.toString() }
          })
        })
        .catch(err => {
          if (err.response.status === 401) { // UnAuthorized
            alert('로그인이 필요합니다.')
            this.$router.push({ name: 'Signin' })
          } else {
            alert(err.response.data.msg)
          }
        })
    }
  }
}
</script>

<style>
  .board-create-page {
    width: 940px;
    padding: 40px 30px 60px;
    margin: 60px auto 0;
    background-color: #fff;
    border: 1px solid #ededed;
  }
  .board-create-page:after {
    content: "";
    display: block;
    clear: both;
  }
  .board-create-page h1 {
    margin-bottom: 20px;
    text-align: left;
    font-size: 24px;
  }
  .board-create-page form fieldset input {
    margin-bottom: 8px;
  }
  .board-create-page label {
    display: inline-block;
    width: 100%;
    text-align: left;
    font-size: 14px;
  }
  .board-create-page form fieldset input[type="text"],
  .board-create-page form fieldset textarea {
    width: 100%;
    margin-bottom: 8px;
    padding: 5px 12px;
    color: #495057;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    font-size: 14px;
  }
  .board-create-page form fieldset input[type="text"] {
    height: calc(1.5em + .75rem + 2px);
  }
  .board-create-page form fieldset button[type="submit"], .board-create-page form fieldset a {
    float: right;
    height: 38px;
    box-sizing: border-box;
    margin: 16px 0 8px;
    padding: .5rem 1.75rem;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    border-radius: .25rem;
    background-color: #414141;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  .board-create-page form fieldset a {
    text-decoration: none;
    margin-right: 4px;
  }
  .board-create-page form fieldset button[type="submit"]:hover, .board-create-page form fieldset a:hover {
    background-color: #181818;
  }
</style>
