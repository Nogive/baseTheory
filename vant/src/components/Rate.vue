<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-rate v-model="value"></van-rate>
    <van-rate v-model="value" :size="25" :count="6" color="red" void-color="#ceefe8"></van-rate>
    <van-rate v-model="value" disabled></van-rate>

  </div>
</template>
<script>
import { Rate } from 'vant'
export default {
  name:'Progress',
  components: {
    [Rate.name]:Rate
  },
  data(){
    return {
      title:'Rate 评分',
      text:`v-model:当前分值；
      count:图标总数；
      size:图标大小（px）；
      color:选中时的颜色；
      void-color:未选中时的颜色；
      disabled-color:不可选时的颜色；
      disabled:是否禁用评分`,
      value:1
    };
  }
}

</script>
<style scope>
</style>


