<template>
  <div>
    <h2>{{title}}</h2>
    <van-circle v-model="currentRate" :rate="50" :speed="100" :text="text"></van-circle>
    <van-button type="primary" size="small" @click="add">增加</van-button>
    <van-button type="danger" size="small" @click="reduce">减少</van-button>
  </div>
</template>
<script>
import { Circle,Button } from 'vant'
export default {
  name:'Process',
  components: {
    [Circle.name]: Circle,
    [Button.name]: Button
  },
  data(){
    return {
      title:'Circle 环形进度条',
      currentRate:0
    };
  },
  methods:{
    add(){
      if(this.currentRate<100){
        this.currentRate+=10;
      }
    },
    reduce(){
      if(this.currentRate>9){
        this.currentRate-=10;
      }
    }
  },
  computed:{
    text(){
      return this.currentRate.toFixed(0)+'%'
    }
  }
}
</script>
<style>

</style>


