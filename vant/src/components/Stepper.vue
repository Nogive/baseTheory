<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-stepper v-model="value" @change="onChange"></van-stepper>
    <van-stepper v-model="value" disabled @overlimit="noClick"></van-stepper>
    <van-stepper v-model="value"  :min="5" :max="40" :step="5" @plus="goPlus" @minus="goMinus"></van-stepper>
    

  </div>
</template>
<script>
import { Stepper,Toast } from 'vant'
export default {
  name:'Stepper',
  components: {
    [Stepper.name]:Stepper,
    [Toast.name]:Toast
  },
  data(){
    return {
      title:'Stepper 步进器',
      text:`default-value:默认值；
      disabled:是否禁用滑块；
      max:最大值；
      min:最小值；
      step:步数；
      disable-input:是否禁用input框`,
      value:3
    };
  },
  methods:{
    onChange(value){
      this.$toast(`当前值：${value}`);
    },
    noClick(){
      this.$toast(`不可用`);
    },
    goPlus(value){
      this.$toast(`加操作，当前值：${value}`);
    },
    goMinus(value){
      this.$toast(`减操作，当前值：${value}`);
    }
  }
}

</script>
<style scope>
</style>


