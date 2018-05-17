<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-slider v-model="value" @change="onChange"></van-slider>
    <van-slider v-model="value" :min="10" :max="80"></van-slider>
    <van-slider v-model="value" disabled></van-slider>
    <van-slider v-model="value" :step="10" bar-height="10px"></van-slider>

  </div>
</template>
<script>
import { Slider,Toast } from 'vant'
export default {
  name:'Slider',
  components: {
    [Slider.name]:Slider,
    [Toast.name]:Toast
  },
  data(){
    return {
      title:'Slider 滑块',
      text:`v-model:当前进度百分比；
      disabled:是否禁用滑块；
      max:最大值；
      min:最小值；
      step:步长；
      bar-height:进度条高度`,
      value:30
    };
  },
  methods:{
    onChange(value){
      this.$toast(`当前值：${value}`);
    }
  }
}

</script>
<style scope>
.van-slider{
  margin: 15px 0px;
}
</style>


