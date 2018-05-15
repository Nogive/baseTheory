<template>
  <div>
    <h2>{{title}}</h2>
    <van-loading color="black"></van-loading>
    <van-loading type="spinner" color="black"></van-loading>
  </div>
</template>
<script>
import { Loading } from 'vant'
export default {
  name:'Loading',
  components: {
    [Loading.name]:Loading
  },
  data(){
    return {
      title:'Loading 加载'
    };
  }
}

</script>
<style scope>
</style>


