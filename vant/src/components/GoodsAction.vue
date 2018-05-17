<template>
  <div>
    <h2>{{title}}</h2>
    <van-goods-action>
      <van-goods-action-mini-btn 
      icon="chat"
      @click="onClickMiniBtn"></van-goods-action-mini-btn>
      <van-goods-action-mini-btn 
      icon="cart"
      @click="onClickMiniBtn"></van-goods-action-mini-btn>
      <van-goods-action-big-btn 
      text="加入购物车"
      @click="onClickBigBtn"></van-goods-action-big-btn>
      <van-goods-action-big-btn 
      text="立即购买"
      @click="onClickBigBtn"></van-goods-action-big-btn>
    </van-goods-action>

    <van-goods-action>
      <van-goods-action-mini-btn 
      icon="chat"
      text="客服"
      @click="onClickMiniBtn"></van-goods-action-mini-btn>
      <van-goods-action-mini-btn 
      icon="cart"
      text="购物车"
      @click="onClickMiniBtn"></van-goods-action-mini-btn>
      <van-goods-action-mini-btn 
      icon="shop"
      text="店铺"
      @click="onClickMiniBtn"></van-goods-action-mini-btn>
      <van-goods-action-big-btn 
      text="加入购物车"
      @click="onClickBigBtn"></van-goods-action-big-btn>
      <van-goods-action-big-btn 
      text="立即购买"
      @click="onClickBigBtn"></van-goods-action-big-btn>
    </van-goods-action>

  </div>
</template>
<script>
import { Toast,GoodsAction,GoodsActionBigBtn,GoodsActionMiniBtn } from 'vant'

export default {
  name:'GoodsAction',
  components: {
    [GoodsAction.name]:GoodsAction,
    [GoodsActionBigBtn.name]:GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]:GoodsActionMiniBtn
  },
  data(){
    return {
      title:'GoodsAction 商品页行动点'
    };
  },
  methods:{
   onClickMiniBtn(){
     Toast('点击图标')
   },
   onClickBigBtn(code){
     Toast('点击按钮')
   }
  }
}

</script>
<style scope>
</style>


