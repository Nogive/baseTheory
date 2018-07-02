<template>
  <div>
    <p>{{msg}}</p>
    <button @click="search=true">搜索</button>
    <hr>
    <mmDrag :center="center" @drag="dragMap"></mmDrag>
  </div>
</template>
<script>
import mmDrag from "@/components/Drag.vue"
export default {
  name:'drag',
  components:{
    mmDrag
  },
  data(){
    return{
      msg:'拖拽地图选址',
      search:false,
      center:[121.473658,31.230378],
    }
  },
  methods:{
    dragMap(data){
      console.log(data);
    }
  }
}
</script>
<style scoped>
.m-map{
  width: 100%;
  height: 300px;
}
.m-map .map{ 
  width: 100%; 
  height: 100%; 
}
</style>


