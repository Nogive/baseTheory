<template>
  <div class="hello">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'menuMain',
  data () {
    return {
      msg: '栏目主要内容'
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    //this.fetchData()
    console.log("创建完成");
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods:{
    fetchData(){
      console.log(111111);
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
