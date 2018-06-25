<template>
  <div class="test-box">
    <p>{{msg}}</p>
    <button @click="filterArr">过滤数组</button>
    {{arr.toString()}}
    <div class="my-box"></div>
  </div>
</template>
<script>
export default {
  name:'test',
  data(){
    return {
      msg:'测试案例',
      arr:[1,3,5,8,11,2,9]
    }
  },
  methods:{
    filterArr(){
      this.arr.sort();
    }
  }
}
</script>
<style scoped>
.my-box{
  width: 100px;
  height: 100px;
  background: skyblue;
  box-shadow: 2px 2px 10px red,-2px 2px 10px blueviolet;
}
.el{
  pointer-events: none;
}
</style>

