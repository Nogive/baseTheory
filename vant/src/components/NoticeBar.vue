<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-notice-bar :text="msg"></van-notice-bar>
    <van-notice-bar :scrollable="false">{{msg}}</van-notice-bar>
    <van-notice-bar mode="closeable">{{msg}}</van-notice-bar>
    <van-notice-bar mode="link">{{msg}}</van-notice-bar>
  </div>
</template>
<script>
import { NoticeBar } from 'vant'
export default {
  name:'NoticeBar',
  components: {
    [NoticeBar.name]:NoticeBar
  },
  data(){
    return {
      title:'NoticeBar 通告栏',
      text:`scrollable:true/false:是否开启滚动；
            mode="closeable" 右侧显示关闭按钮
            mode="link" 右侧显示链接按钮`,
      msg:"足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
    };
  }
}

</script>
<style scope>
</style>


