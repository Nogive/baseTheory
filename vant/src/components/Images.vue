<template>
  <div>
    <h2>{{title}}</h2>
    <van-button type="default" @click="seeImage">预览图片</van-button>
    <van-button type="default" @click="seeImageInit">指定初始位置</van-button>
    <van-button type="default" @click="seeImageHand">自动关闭预览</van-button>
  </div>
</template>
<script>
import { ImagePreview,Button } from 'vant'
import '../../static/font/iconfont.ttf'
export default {
  name:'Images',
  components: {
    [ImagePreview.name]:ImagePreview,
    [Button.name]:Button
  },
  data(){
    return {
      title:'ImagePreview 图片预览'
    };
  },
  methods:{
    seeImage(){
      ImagePreview([
        '../../static/images/nature.jpg',
        '../../static/images/nature2.jpg'
      ]);
    },
    seeImageInit(){
      ImagePreview([
        '../../static/images/nature.jpg',
        '../../static/images/nature2.jpg'
      ],1);
    },
    seeImageHand(){
      const instance=ImagePreview([
        '../../static/images/nature.jpg',
        '../../static/images/nature2.jpg'
      ]);
      setTimeout(()=>{
        instance.close();
      },1000);
    }
  }
}

</script>
<style>
</style>


