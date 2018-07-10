<template>
  <div>
    <p>这是父组件</p>
    <p>父组件数据1：{{msg}}</p>
    <p>父组件数据2：{{json}}</p>
    <p>子元素发送的数据：{{child}}</p>
    <p>接受子组件数据：{{receive}}</p>
    <hr>
    <child-a :msg="msg" :json="json" @childEvent="showChildData"></child-a>
  </div>
</template>
<script>
import childA from "@/components/ChildA"
import {tempVm} from "@/common/constant"
export default{
  name:'passParams',
  components:{
    childA
  },
  data(){
    return{
      msg:"This is parent data!",
      json:{name:'data 2!'},
      child:'暂无',
      receive:'暂无'
    }
  },
  created(){
    tempVm.$on('childA-data',function(data){
      this.receive=data;
    }.bind(this));
  },
  methods:{
    showChildData(data){
      this.child=data;
    }
  }
}
</script>
<style scoped>
  .box{
    width: 100px;
    height: 100px;
    background-color: palegreen;
    text-align: center;
    line-height: 100px;
  }
</style>

