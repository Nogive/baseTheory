<template>
  <div class="hello">
    <p>{{ msg }} {{param}}</p>
  </div>
</template>

<script>
export default {
  name: 'menuMain',
  props:['param'],
  data () {
    return {
      msg: 'query-2部分'
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    //this.fetchData()
    console.log("created:组件创建完后获取数据");
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods:{
    fetchData(){
      console.log('获取数据');
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
