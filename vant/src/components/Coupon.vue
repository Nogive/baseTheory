<template>
  <div>
    <h2>{{title}}</h2>
    <van-coupon-cell
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    @click="showList=true"></van-coupon-cell>
    
    <van-popup
    v-model="showList" position="bottom">
    <van-coupon-list
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    :disabled-coupons="disabledCoupons"
    @change="onChange"
    @exchange="onExchange"></van-coupon-list></van-popup>

  </div>
</template>
<script>
import { Toast,CouponCell,CouponList,Popup } from 'vant'
const coupon = {
  available: 1,
  discount: 0,
  denominations: 150,
  origin_condition: 0,
  reason: '',
  value: 150,
  name: '优惠券名称',
  start_at: 1489104000,
  end_at: 1514592000
};
export default {
  name:'Coupon',
  components: {
    [CouponCell.name]:CouponCell,
    [CouponList.name]:CouponList,
    [Popup.name]:Popup,
  },
  data(){
    return {
      title:'Coupon 优惠券选择器',
      chosenCoupon:-1,
      coupons:[coupon],
      disabledCoupons:[coupon],
      showList:false
    };
  },
  methods:{
   onChange(index){
     this.showList=false;
     this.chosenCoupon=index;
   },
   onExchange(code){
     this.coupons.push(coupon)
   }
  }
}

</script>
<style scope>
</style>


