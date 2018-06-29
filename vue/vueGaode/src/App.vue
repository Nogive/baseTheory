<template>
  <div id="app">
    <h1>高德 SDK</h1>
    <router-link to="/">动画</router-link>
    <router-link to="/filter">过滤器&指令</router-link>
    <router-link to="/position">定位</router-link>
    <router-link to="/drag">拖拽选点</router-link>
    <hr>
    <transition
      mode="out-in"
      name="custom-classes-transition"
      enter-active-class="animated zoomInRight"
      leave-active-class="animated zoomOutLeft">
      <router-view/>
    </transition>
  </div>
  <!-- in-out：新元素先进行过渡，完成之后当前元素过渡离开。

  out-in：当前元素先进行过渡，完成之后新元素过渡进入。 -->
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
