<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html, body {
    height: 100%;
    background-color: #f9f9f9;
  }
  html, body, div, input, fieldset, form, h1, p, textarea, button {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  textarea {
    border: none;
    resize: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    height: 100%;
  }
</style>
