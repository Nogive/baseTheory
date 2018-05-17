<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-tag>标签</van-tag>
    <van-tag type="danger">标签</van-tag>
    <van-tag type="success">标签</van-tag>
    <van-tag type="primary">标签</van-tag>

    <van-tag plain>标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="success">标签</van-tag>
    <van-tag plain type="primary">标签</van-tag>

    <van-tag mark>标签</van-tag>
    <van-tag mark type="danger">标签</van-tag>
    <van-tag mark type="success">标签</van-tag>
    <van-tag mark type="primary">标签</van-tag>

  </div>
</template>
<script>
import { Tag } from 'vant'
export default {
  name:'Tag',
  components: {
    [Tag.name]:Tag
  },
  data(){
    return {
      title:'Tag 标记',
      text:`plain:是否为空心样式;
      mark:是否为圆角样式;
      type:类型（primary/success/danger）`
    };
  }
}

</script>
<style scope>
</style>


