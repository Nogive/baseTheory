<template>
  <div>
    <button @click="show=!show">show/hide text</button>
    <transition 
      mode="out-in"
      name="custom"
      enter-active-class="animated rollIn"
      leave-active-class="animated rollOut">
      <div class="box" v-if="show">Hello world</div>
    </transition>
  </div>
</template>
<script>
  import router from '@/router'
  import Router from "vue-router";
  export default{
    name:'demo',
    data(){
      let vm=this;
      return{
        show:true,
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

