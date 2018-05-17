<template>
  <div>
    <h2>{{title}}</h2>
    <van-submit-bar
    :price="3050"
    button-text="提交订单"
    @submit="onSubmit"></van-submit-bar>

    <van-submit-bar
    disabled
    :price="3050"
    button-text="提交订单"
    tip="您的收货地址不支持同城配送，我们已为您推荐快递"
    @submit="onSubmit"></van-submit-bar>

    <van-submit-bar
    loading
    :price="3050"
    button-text="提交订单"
    @submit="onSubmit"></van-submit-bar>

    <van-submit-bar
    :price="3050"
    button-text="提交订单"
    @submit="onSubmit">
      <van-checkbox
      v-model="checked">全选</van-checkbox>
      <span slot="tip">
        您的收货地址不支持同城送，<span>修改地址</span>
      </span>
    </van-submit-bar>

  </div>
</template>
<script>
import { Toast,SubmitBar,Checkbox } from 'vant'

export default {
  name:'GoodsAction',
  components: {
    [SubmitBar.name]:SubmitBar,
    [Checkbox.name]:Checkbox
  },
  data(){
    return {
      title:'SubmitBar 提交订单栏',
      checked:false
    };
  },
  methods:{
   onSubmit(){
     Toast('提交')
   }
  }
}

</script>
<style scope>
</style>


