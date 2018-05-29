<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/params/001/website is very good">news</router-link> |
      <router-link to="/goHome">返回Home</router-link> |
      <router-link to="/goParams/002/I like vue js">重定向到params</router-link>
    </div>
    <p>{{$route.name}}</p>

    <router-view></router-view>
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
</style>
