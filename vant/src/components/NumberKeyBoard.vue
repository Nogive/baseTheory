<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-button @touchstart.native.stop="show=true">弹出默认键盘</van-button>
    <van-number-keyboard :show="show" theme="custom" extra-key="." close-button-text="完成" @blur="show=false"></van-number-keyboard>

  </div>
</template>
<script>
import { NumberKeyboard,Button } from 'vant'
export default {
  name:'NumberKeyboard',
  components: {
    [NumberKeyboard.name]:NumberKeyboard,
    [Button.name]:Button
  },
  data(){
    return {
      title:'NumberKeyboard 数字键盘',
      text:`show:是否显示键盘;</br>
      theme:样式风格（default/custom）;
      title:键盘标题;
      transition:是否开启过场动画;
      z-index:键盘z-index;
      extra-key:左下角按键内容;
      close-button-text:关闭按钮文字，空则不显示;
      show-delete-key:是否展示删除按钮;
      hide-on-click-outsite:点击外部时是否收起键盘;`,
      show:true
    };
  }
}

</script>
<style scope>
</style>


