<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link> |

      <!-- 动态路径 -->
      <router-link to="/menu/parent-query">query</router-link>

      <!-- 通过props解耦传参 -->
      <router-link :to="{name:'menuIntroduce',params:{title:'query-1',subMsg:'query子数据1'}}">query-1</router-link>

      <!-- 组件创建完成后获取数据 -->
      <router-link to="/menu/query-2/main/query子数据2">query-2</router-link>
      <!-- 组件创建完成前获取数据 -->
      <router-link to="/menu/query-3/end">query-3</router-link>

      <!-- 传递参数 -->
      <router-link :to="{name:'aboutUs',params:{name:'name'}}">params</router-link>
      <hr>
      <router-link to="/menu/parent-query">view</router-link>
    </div>
    <router-view></router-view>
    <div class="view-box">
      <router-view class="view one" name="left"></router-view>
      <router-view class="view two" name="right"></router-view>
    </div>
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
.view{
  float: left;
  border:1px solid red;
}
.one{
  width: 30%;
}
.two{
  width: 70%;
}
</style>
