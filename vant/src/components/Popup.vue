<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-button size="small" @click="goPopup(1)">弹出popup</van-button>
    <van-button size="small" @click="goPopup(2)">底部弹出</van-button>
    <van-button size="small" @click="goPopup(3)">顶部弹出</van-button>
    <van-button size="small" @click="goPopup(4)">右侧弹出</van-button>
    <van-popup v-model="show" :position="position">内容</van-popup>
    <van-popup v-model="show1" position="top">popup</van-popup>
  </div>
</template>
<script>
import { Popup,Button } from 'vant'
export default {
  name:'Popup',
  components: {
    [Popup.name]:Popup,
    [Button.name]:Button
  },
  data(){
    return {
      title:'Popup 弹出层',
      text:`v-model：是否显示；
      overlay:是否显示背景蒙版；
      lock-scroll:是否锁定背景滚动；
      position:弹出方向（top/bottom/left/right）；
      close-on-click-overlay:点击蒙层是否关闭`,
      show:false,
      position:'left',
      show1:false
    };
  },
  methods:{
    goPopup:function(){
      this.position="bottom";
      this.show=true;
    }
  }
}

</script>
<style scope>
</style>


