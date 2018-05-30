<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/params/001/website is very good">news</router-link> |
      <router-link to="/goHome">返回Home</router-link> |
      <router-link to="/goParams/002/I like vue js">重定向到params</router-link> |
      <router-link to="/hh">Hi</router-link> |
      <router-link to="/about">about</router-link>
    </div>
    <p>{{$route.name}}</p>
    <button @click="goback">后退</button>
    <button @click="gogo">前进</button>
    <button @click="goPro">pro</button>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goback(){
      this.$router.go(-1);
    },
    gogo(){
      this.$router.go(1);
    },
    goPro(){
      this.$router.push('/Error');
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
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
