<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop">标签</van-tabbar-item>
      <van-tabbar-item icon="chat" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="records" info="5">标签</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" url="www.baidu.com">标签</van-tabbar-item>
    </van-tabbar>
    <p>自定义图标</p>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop">
        <span>自定义</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? icon.active : icon.normal" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="chat">标签</van-tabbar-item>
      <van-tabbar-item icon="records">标签</van-tabbar-item>
    </van-tabbar>

  </div>
</template>
<script>
import { Tabbar,TabbarItem,Toast,Icon } from 'vant'
export default {
  name:'Tabbar',
  components: {
    [Tabbar.name]:Tabbar,
    [TabbarItem.name]:TabbarItem,
    [Icon.name]:Icon,
    [Toast.name]:Toast
  },
  data(){
    return {
      title:'TabbarItem 标签栏',
      text:`v-model:当前激活的标签索引;
      icon:图标名称;
      dot:是否显示小红点;
      info:图标右上角提示信息;
      url:跳转链接;
      to:路由跳转对象,同vue-router;
      replace:跳转时是否替换当前history`,
      active:1,
      icon:{
        normal:'../../static/images/map.png',
        active:'../../static/images/mapc.png'
      }
    };
  },
  methods:{
    onChange(active){
     Toast(`选中:${active}`);
    }
  }
}

</script>
<style scope>
</style>


