<template>
  <div class="hello">
    <p>{{ msg }} 参数:{{$route.params.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'aboutUs',
  data () {
    return {
      msg: '传递参数部分'
    }
  }
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
