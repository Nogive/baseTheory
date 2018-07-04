<template>
  <div class="hello">
    <p>{{ msg }}--{{num}}</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '默认视图',
      num:0
    }
  },
  beforeRouteEnter:((to,from,next)=>{
    console.log(to);
    console.log(from);
    if(from.name=="menuIntroduce"){
      next(vm=>{
        vm.num=1;
      });
    }else{
      next();
    }
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
