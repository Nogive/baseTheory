<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-progress :percentage="0"></van-progress>
    <van-progress :percentage="46"></van-progress>
    <van-progress :percentage="100"></van-progress>

    <van-progress :percentage="0" inactive></van-progress>
    <van-progress :percentage="46" inactive></van-progress>
    <van-progress :percentage="100" inactive></van-progress>

    <van-progress pivot-text="红色" color="red" :percentage="0"></van-progress>
    <van-progress pivot-text="绿色" color="green" :percentage="46"></van-progress>
    <van-progress pivot-text="橙色" color="orange" :percentage="100"></van-progress>

  </div>
</template>
<script>
import { Progress } from 'vant'
export default {
  name:'Progress',
  components: {
    [Progress.name]:Progress
  },
  data(){
    return {
      title:'Progress 进度条',
      text:`inactive:是否置灰；
      percentage:进度百分比；
      show-pivot:是否显示进度文字；
      pivot-text:进度文字；
      color:进度条颜色；
      text-color:进度条文字颜色`
    };
  }
}

</script>
<style scope>
.van-progress{
  margin: 15px 0px;
}
</style>


