<template>
  <div class="hello">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'menuEnd',
  data () {
    return {
      msg: '这里是结束部分'
    }
  },
  beforeRouteEnter (to, from, next) {
    // getPost(to.params.id, (err, post) => {
    //   next(vm => vm.setData(err, post))
    // })
    console.log('before');
  },
  // 路由改变前，组件就已经渲染完了
  // 逻辑稍稍不同
  beforeRouteUpdate (to, from, next) {
    // getPost(to.params.id, (err, post) => {
    //   this.setData(err, post)
    //   next()
    // })
    console.log('update');
  },
  methods:{
    setData(){
      console.log(111);
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
