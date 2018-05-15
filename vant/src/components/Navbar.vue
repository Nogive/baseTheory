<template>
  <div>
    <h2>{{title}}</h2>
    <p>left:arrow:是否显示左侧文案；fixed：是否固定在顶部；click-left/click-right:按钮事件</p>
    <van-nav-bar fixed title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight"></van-nav-bar>
    <van-nav-bar title="标题" left-text="返回" left-arrow>
      <van-icon name="search" slot="right"></van-icon>
    </van-nav-bar>
  </div>
</template>
<script>
import { NavBar,Toast,Icon } from 'vant'
export default {
  name:'Navbar',
  components: {
    [NavBar.name]:NavBar,
    [Toast.name]:Toast,
    [Icon.name]:Icon
  },
  data(){
    return {
      title:'Navbar 导航栏'
    };
  },
  methods:{
    onClickLeft(){
      Toast('返回');
    },
    onClickRight(){
      Toast('按钮');
    }
  }
}

</script>
<style scope>
</style>


