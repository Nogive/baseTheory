<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-swipe :autoplay="3000">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-swipe :autoplay="3000" @change="onChange">
      <van-swipe-item v-for="(image,index) in images" :key="index">
        <img v-lazy="image">
      </van-swipe-item>
    </van-swipe>
    <van-swipe :autoplay="3000" vertical>
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

  </div>
</template>
<script>
import { Swipe,SwipeItem,Lazyload,Toast } from 'vant'
export default {
  name:'Swipe',
  components: {
    [Swipe.name]:Swipe,
    [Lazyload.name]:Lazyload,
    [Toast.name]:Toast,
    [SwipeItem.name]:SwipeItem
  },
  data(){
    return {
      title:'Swipe 轮播',
      text:`autoplay:自动轮播间隔ms;
      duration:动画时长ms;
      loop:是否开启循环播放;
      vertical:是否为纵向滚动;
      touchable:是否可以通过手势滚动;
      direction:显示方向（horizontal/vertical）;
      show-indicators:是否显示指示器;
      initial-swipe:初始位置，从0开始算`,
      images:[
        '../../static/images/iphone.jpg',
        '../../static/images/mac.jpg',
        '../../static/images/pad.jpg',
        '../../static/images/pro.jpg'
      ]
    };
  },
  methods:{
    onChange(index){
     //Toast(`当前Swipe索引:${index}`);
    }
  }
}

</script>
<style scope>
.van-swipe{
  height: 20rem;
}
.van-swipe-item{
  background: deepskyblue;
}
.van-swipe-item img{
  width: 100%;
}
</style>


