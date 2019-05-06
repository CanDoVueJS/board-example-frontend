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
  @import url(https://use.fontawesome.com/releases/v5.6.3/css/all.css);
  html, body {
    height: 100%;
    background-color: #f9f9f9;
  }
  html, body, div, input, fieldset, form, h1, p, table, thead, th, tbody, td, textarea, button, dl, dt, dd {
    margin: 0;
    padding: 0;
    border: 0;
    -webkit-box-sizing: border-box;
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
  a {
    font-size: 16px;
  }
  button {
    font-size: 16px;
    cursor: pointer;
  }
  input:disabled {
    background-color: lightgrey;
    cursor: not-allowed;
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
