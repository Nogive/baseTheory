<template>
  <div>
    <p>我是子元素：childA</p>
    <p>从父元素处获取数据1：{{newMsg}}</p>
    <p>从父元素处获取数据2：{{json}}</p>
    <p>childA自己的数据：{{self}}</p>
    <button @click="changeParentData1">更改父元素的数据1</button>
    <button @click="changeParentData2">更改父元素的数据2</button>
    <button @click="transferData">将自己的数据发送给父元素</button>
    <button @click="transfer">发送自己的数据</button>
  </div>
</template>
<script>
import {tempVm} from "@/common/constant"
export default {
  name:'childA',
  props:['msg','json'],
  data(){
    return {
      newMsg:'',
      self:"This is Child's data!"
    }
  },
  created(){
    this.newMsg=this.msg;
  },
  methods:{
    changeParentData1(){
      this.newMsg="数据1被改了"
    },
    changeParentData2(){
      this.json.name="data2 changed!"
    },
    transferData(){
      this.$emit('childEvent',this.self);
    },
    transfer(){
      tempVm.$emit('childA-data',this.self);
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
