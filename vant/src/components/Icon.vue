<template>
  <div>
    <h2>{{title}}</h2>
    <van-icon name="point-gift" info="1"></van-icon>
    <van-icon name="users" info="99"></van-icon>
  </div>
</template>
<script>
import { Icon } from 'vant'
import '../../static/font/iconfont.ttf'
export default {
  name:'Icon',
  components: {
    [Icon.name]:Icon
  },
  data(){
    return {
      title:'Icon 图标'
    };
  }
}
</script>
<style>
@font-face {
  font-family: 'myfont';
  src: url('../../static/font/iconfont.ttf')format(truetype);
}
.van-icon{
  font-family: 'vant-icon','myfont'!important;
}
.van-icon-users:before{
  content:'\e603';
}
</style>


