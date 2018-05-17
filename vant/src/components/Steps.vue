<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-steps :active="active">
      <van-step>买家下单</van-step>
      <van-step>商家接单</van-step>
      <van-step>买家提货</van-step>
      <van-step>交易完成</van-step>
    </van-steps>
    <van-button @click="nextStep">下一步</van-button>
    <van-steps :active="active" icon="logistics" title="标题" description="描述信息">
      <van-step>买家下单</van-step>
      <van-step>商家接单</van-step>
      <van-step>买家提货</van-step>
      <van-step>交易完成</van-step>
    </van-steps>
    <van-steps direction="vertical" :active="active" active-color="#f60">
      <van-step>
        <h3>【城市】物流状态1</h3>
        <p>2018-05-16 14:42</p>
      </van-step>
      <van-step>
        <h3>【城市】物流状态2</h3>
        <p>2018-05-15 14:42</p>
      </van-step>
      <van-step>
        <h3>【城市】物流状态3</h3>
        <p>2018-05-14 14:42</p>
      </van-step>
      <van-step>
        <h3>【城市】快件已发货</h3>
        <p>2018-05-13 14:42</p>
      </van-step>
    </van-steps>
  </div>
</template>
<script>
import { Step,Steps,Button } from 'vant'
export default {
  name:'Steps',
  components: {
    [Step.name]:Step,
    [Button.name]:Button,
    [Steps.name]:Steps
  },
  data(){
    return {
      title:'Steps 步骤条',
      text:`active:当前步骤；
      title:描述栏标题；
      description:描述栏文字；
      icon:描述栏图标；
      icon-class:图标额外类名；
      direction:显示方向（horizontal/vertical）；
      active-color:激活状态颜色`,
      active:0
    };
  },
  methods:{
    nextStep(){
      this.active=this.active<3?this.active+1:0;;
    }
  }
}

</script>
<style scope>
</style>


