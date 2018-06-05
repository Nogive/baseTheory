<template>
  <div id="app">
    <h1>vuex</h1>
    <p>当前值：{{count}},它是：{{getOdd}}</p>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <button @click="incrementOdd">偶数加</button>
    <button @click="async">异步加</button>
    <router-view/>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'App',
  computed:{
    ...mapGetters(['count','getOdd'])
  },
  methods:{
    ...mapActions(['increment','decrement','incrementOdd','async'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
