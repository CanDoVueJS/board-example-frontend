<template>
  <div id="app">
    <router-view name="header" />
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "https://use.fontawesome.com/releases/v5.6.3/css/all.css";
  /*추후 스타일 작업이 완료되면 웹팩 빌드 후 다시 살려야함 - 2019.03.24 Evan*/
  /*반드시 맨 위로 올릴 것. css의 @import 구문은 맨 위에 위치해야만 작동한다.*/
  /*@import 'http://localhost:8000/assets/index.css'*/

  html, body {
    height: 100%;
    background-color: #f9f9f9;
  }
  html, body, div, input, fieldset, form, h1, p, table, thead, th, tbody, td, textarea, button {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  table {
    border-collapse: collapse;
  }
  textarea {
    border: none;
    resize: none;
  }
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 60px;
    height: 100%;
  }
</style>
