<template>
  <div>
    <h2>{{title}}</h2>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <p>刷新次数：{{count}}</p>
    </van-pull-refresh>
  </div>
</template>
<script>
import { PullRefresh,Toast } from 'vant'
export default {
  name:'PullRefresh',
  components: {
    [PullRefresh.name]:PullRefresh,
    [Toast.name]:Toast
  },
  data(){
    return {
      title:'PullRefresh 下拉刷新',
      count:0,
      isLoading:false
    };
  },
  methods:{
    onRefresh(){
     setTimeout(()=>{
       this.$toast('刷新成功');
       this.isLoading=false;
       this.count++;
     },500);
    }
  }
}

</script>
<style scope>
</style>


