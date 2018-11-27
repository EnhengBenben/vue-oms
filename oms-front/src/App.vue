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

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  overflow-x: hidden;
}
  *{
    margin: 0;padding: 0;
  }
  html,body{
    height: 100%;
    background-color: #2f4050;
    min-height: 100%;
  }
  ul,li{
    list-style: none;
  }
  a{
    color: #1dd2af;
    cursor: pointer;
  }
  a:hover{
    text-decoration: underline;
  }
  @import "styles/style.scss";
</style>
