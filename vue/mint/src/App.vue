<template>
  <div id="app">
    <Loading></Loading>
    <img src="./assets/logo.png">
    <mt-header title="多个按钮">
      <div slot="left">
        <mt-button icon="back">返回</mt-button>
        <mt-button>关闭</mt-button>
      </div>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <mt-tabbar :selected.sync="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src="./assets/logo.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="./assets/logo.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="./assets/logo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="./assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      selected:''
    }
  }
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
