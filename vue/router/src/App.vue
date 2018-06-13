<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link>
      <!-- 动态路径 -->
      <router-link to="/menu/123">内容页</router-link>
      <!-- 通过props解耦传参 -->
      <router-link :to="{name:'menuIntroduce',params:{'todo':'lalala'}}">内容介绍</router-link>

      <!-- 组件创建完成后获取数据 -->
      <router-link to="/menu/main">内容主要部分</router-link>
      <!-- 组件创建完成前获取数据 -->
      <router-link to="/menu/end">内容底部</router-link>
      <!-- 传递参数 -->
      <router-link :to="{name:'aboutUs',params:{name:'dandan'}}">关于我们</router-link>
    </div>
    
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
