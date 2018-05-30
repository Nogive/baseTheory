<template>
  <div>
    <h2>{{msg}}</h2>
  </div>
</template>
<script>
export default {
  data(){
    return {
      msg:'Error:404'
    }
  },
  beforeRouteEnter:(to,from,next)=>{
    console.log('prepare enter');
    next();
  },
  beforeRouteLeave:(to,from,next)=>{
    console.log('prepare leave');
    next();
  }
}
</script>
<style>

</style>


