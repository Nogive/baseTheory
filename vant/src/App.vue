<template>
  <div id="app">
    <div class="logo">
      <img src="./assets/logo.png">
    </div>
    <HelloWorld/>
    <Layout/>
    <Badge/>
    <Button/>
    <Cell/>
    <precess/>
    <Collapse/>
    <Icon/>
    <Images />
    <imageLazy />
    <List/>
    <Loading/>
    <Navbar/>
    <NoticeBar/>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld'
import Layout from './components/Layout'
import Badge from './components/Badge'
import Button from './components/Button'
import Cell from './components/Cell'
import precess from './components/Process'
import Collapse from './components/Collapse'
import Icon from './components/Icon'
import Images from './components/Images'
import imageLazy from './components/imageLazy'
import List from './components/List'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import NoticeBar from './components/NoticeBar'
export default {
  components: {
    HelloWorld,
    Layout,
    Badge,
    Button,
    Cell,
    precess,
    Collapse,
    Icon,
    Images,
    imageLazy,
    List,
    Loading,
    Navbar,
    NoticeBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.logo{
  text-align: center;
}
h1,h2{
  text-align: center;
  font-weight: normal;
}
p{
  color: rgb(0, 110, 255);
  text-align: left;
  padding-left: 1rem;
}  
</style>
