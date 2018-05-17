<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-search placeholder="请输入商品名称" v-model="value"></van-search>
    <form action="/">
      <van-search v-model="value" placeholder="请输入商品名称" show-action @search="onSearch" @cancel="onCancel"></van-search>
    </form>
    <van-search v-model="value" show-action @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    
  </div>
</template>
<script>
import { Search } from 'vant'
export default {
  name:'Search',
  components: {
    [Search.name]:Search
  },
  data(){
    return {
      title:'Search 搜索框',
      text:`background:搜索框背景颜色;
      show-action:是否在搜索框右侧显示取消按钮;`,
      value:''
    };
  },
  methods:{
    onSearch(){
      console.log(this.value);
    },
    onCancel(){
      console.log(this.value);
    }
  }
}

</script>
<style scope>
</style>


