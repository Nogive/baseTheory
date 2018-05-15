<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-button v-for="btn in btns" :key="btn.type" :type="btn.type" :size="btn.size">{{btn.text}}</van-button>
    <van-button disabled>禁用状态</van-button>
    <van-button loading>加载中</van-button>
    <van-button tag="a" href="www.baidu.com" target="_blank">自定义HTMl tag</van-button>
    <van-button type="primary" bottom-action>底部按钮</van-button>
  </div>
</template>
<script>
import { Button } from 'vant'
export default {
  name:'Button',
  components: {
    [Button.name]: Button
  },
  data(){
    return {
      title:'Button 按钮',
      text:'default、primary、danger三种类型；size:large/normal/small/mini；disabled:禁用状态；loading:加载状态；',
      btns:[
        {
          type:'default',
          size:'large',
          text:'default l',
          disabled:false,
          loading:false,
          tag:'button',
          block:false,
          bottomAction:false
        },
        {
          type:'danger',
          size:'small',
          text:'danger s',
          disabled:false,
          loading:false,
          tag:'button',
          block:false,
          bottomAction:false
        },
        {
          type:'primary',
          size:'mini',
          text:'mini',
          disabled:false,
          loading:false,
          tag:'a',
          block:false,
          bottomAction:false
        }
      ]
    };
  }
}
</script>
<style>
</style>


