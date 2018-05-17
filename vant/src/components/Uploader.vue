<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-uploader :after-read="onRead">
      <van-icon name="photograph"></van-icon>
    </van-uploader>
    <van-uploader :after-read="onRead" accept="image.gif,image/jpeg" multiple>
      <van-icon name="photograph"></van-icon>
    </van-uploader>
    
  </div>
</template>
<script>
import { Uploader,Icon } from 'vant'
export default {
  name:'Uploader',
  components: {
    [Uploader.name]:Uploader,
    [Icon.name]:Icon
  },
  data(){
    return {
      title:'Uploader 图片上传',
      text:`result-type:文件读取结果类型（dataUrl/test）;
      acccept:接受的文件类型;
      disabled:是否禁止图片上传;
      before-read:读取钱的回调函数，返回false可终止文件读取;
      after-read:读取完成后的回调函数;
      max-size:文件大小限制，byte;`,
    };
  },
  methods:{
    onRead(file){
     console.log(file);
    }
  }
}

</script>
<style scope>
</style>


