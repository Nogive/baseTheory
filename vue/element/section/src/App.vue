<template>
  <div id="app">
    <router-view/>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button icon="el-icon-search" type="primary" @click="get">按钮</el-button>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
    <date></date>
    <p>{{message}}</p>
  </div>
</template>

<script>
import Date from './components/Date.vue'
import axios from 'axios'
export default {
  name: 'App',
  data(){
    return {
      radio:'1',
      message:'lala'
    }
  },
  components:{
    Date
  },
  mounted(){
    this.get();
  },
  methods:{
    get(){
      axios.get('https://api.github.com/users/itstrive').then(function(res){
        this.message=res.data;
      }.bind(this)).catch(function(err){
        console.log(err);
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
