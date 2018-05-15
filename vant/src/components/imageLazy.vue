<template>
  <div>
    <h2>{{title}}</h2>
    <!-- <img v-for="img in imageList" :key="img" v-lazy="img" alt=""> -->
    <div class="back" v-for="img in backList" :key="img" v-lazy:background-image="img" />
    <!-- <lazy-component>
      <img v-for="img in imageList" :key="img" v-lazy="img" >
    </lazy-component> -->
  </div>
</template>
<script>
import { Lazyload } from 'vant'
export default {
  name:'imageLazy',
  components: {
    [Lazyload.name]:Lazyload
  },
  data(){
    return {
      title:'Lazyload 图片懒加载',
      imageList:[
        '../../static/images/iphone.jpg',
        '../../static/images/mac.jpg',
        '../../static/images/pad.jpg'
      ],
      backList:[
        '../../static/images/nature.jpg',
        '../../static/images/nature2.jpg',
        '../../static/images/mac2.jpg'
      ]
    };
  }
}

</script>
<style scope>
.back{
  height: 200px;
  border: 1px solid red;
}
</style>


