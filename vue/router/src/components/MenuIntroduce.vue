<template>
  <div class="hello">
    <p>{{ msg }} {{subMsg}}</p>
  </div>
</template>

<script>
export default {
  name: 'menuIntroduce',
  props:['subMsg'],
  data () {
    return {
      msg: 'query-1部分'
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
