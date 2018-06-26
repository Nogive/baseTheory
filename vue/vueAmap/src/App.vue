<template>
  <div id="app">
    <h1>Vue-amap</h1>
    <router-link to="/">主页</router-link>
    <router-link to="/hello">circle</router-link>
    <router-link to="/native">原生SDK</router-link>
    <router-link to="/search">搜索</router-link>
    <router-link to="/autoPosition">自动定位</router-link>
    <router-link to="/position">定位</router-link>
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
hr{
  margin: 30px 0;
}
</style>
