<template>
  <div id="app">
    <h1>高德 SDK</h1>
    <router-link to="/position">定位</router-link>
    <router-link to="/drag">拖拽选点</router-link>
    <router-link to="/filter">过滤器</router-link>
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
  box-sizing: border-box;
}
</style>
