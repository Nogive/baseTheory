<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-switch v-model="checked"></van-switch>
    <van-switch v-model="checked" disabled></van-switch>
    <van-switch v-model="checked" loading></van-switch>
    <p>高级用法</p>
    <van-switch :value="checked" size="36px" @input="onInput"></van-switch>
    
  </div>
</template>
<script>
import { Switch,Dialog } from 'vant'
export default {
  name:'Switchs',
  components: {
    [Switch.name]:Switch,
    [Dialog.name]:Dialog
  },
  data(){
    return {
      title:'Switch 开关',
      text:`v-model:开关选中状态;
      loading:是否为加载状态;
      disabled:是否为禁用状态;
      size:开关尺寸（px）`,
      checked:true
    };
  },
  methods:{
    onInput(checked){
      Dialog.confirm({
        title:'提醒',
        message:'是否切换开关?'
      }).then(()=>{
        this.checked=checked;
      })
    }
  }
}

</script>
<style scope>
</style>


