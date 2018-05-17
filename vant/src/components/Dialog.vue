<template>
  <div>
    <h2>{{title}}</h2>
    <van-button @click="onClick1">Alert</van-button>
    <van-button @click="onClick2">无标题Alert</van-button>
    <van-button @click="onClick3">confirm</van-button>
    <van-button @click="show=true">高级用法</van-button>
    
    <!-- <van-dialog v-model="show" show-cancel-button :before-close="beforeClose">
      <van-field v-model="username" label="用户名" placeholder="请输入用户名"></van-field>
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码"></van-field>
    </van-dialog> -->
  </div>
</template>
<script>
import { Dialog ,Button,Field } from 'vant'
export default {
  name:'Dialog',
  components: {
    [Dialog.name]:Dialog,
    [Button.name]:Button,
    [Field.name]:Field
  },
  data(){
    return {
      title:'Dialog 弹出框',
      show:false,
      username:'',
      password:'',
    };
  },
  methods:{
    onClick1(){
     Dialog.alert({
       title:'标题',
       message:'弹窗内容'
     }).then(()=>{

     })
    },
    onClick2(){
     Dialog.alert({
       message:'弹窗内容'
     }).then(()=>{
       
     })
    },
    onClick3(){
     Dialog.confirm({
       title:'标题',
       message:'弹窗内容'
     }).then(()=>{
       
     }).catch(()=>{

     })
    },
    beforeClose(action,down){
     if(action==='confirm'){
       setTimeout(down,1000);
     }else{
       done();
     }
    }
  }
}

</script>
<style scope>
</style>


