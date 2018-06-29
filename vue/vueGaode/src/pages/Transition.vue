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
  export default{
    name:'demo',
    data(){
        return{
            show:true
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

