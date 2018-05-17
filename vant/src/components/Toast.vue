<template>
  <div>
    <h2>{{title}}</h2>
    <van-button @click="onClick(1)">文字提示</van-button>
    <van-button @click="onClick(2)">加载提示</van-button>
    <van-button @click="onClick(3)">成功提示</van-button>
    <van-button @click="onClick(4)">失败提示</van-button>
    <van-button @click="onClicks">高级用法</van-button>
  </div>
</template>
<script>
import { Button,Toast } from 'vant'
export default {
  name:'Toast',
  components: {
    [Button.name]:Button,
    [Toast.name]:Toast
  },
  data(){
    return {
      title:'Toast 轻提示',
      count:0,
      isLoading:false
    };
  },
  methods:{
    onClick:function(n){
      switch(n){
        case 1:Toast('我是提示文案，建议不超过十五字~');
        break;
        case 2:Toast.loading({mask:true,message:'加载中'});
        break;
        case 3:Toast.success('success');
        break;
        case 4:Toast.fail('error');
        break;
      }
    },
    onClicks(){
      const toast=Toast.loading({
        duration:0,
        forbidClick:true,
        loadingType:'spinner',
        message:'倒计时5秒'
      });
      let second=5;
      const timer=setInterval(()=>{
        second--;
        if(second){
          toast.message=`倒计时${second}秒`;
        }else{
          clearInterval(timer);
          Toast.clear();
        }
      },1000)
    }
  }
}

</script>
<style scope>
</style>


