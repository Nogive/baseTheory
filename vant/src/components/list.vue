<template>
  <div>
    <h2>{{title}}</h2>
    <van-list v-model="loading" :finished="finished" @load="onload">
      <van-cell v-for="item in list" :key="item" :title="item+''"></van-cell>
    </van-list>
  </div>
</template>
<script>
import { List,Cell } from 'vant'
export default {
  name:'List',
  components: {
    [List.name]:List,
    [Cell.name]:Cell
  },
  data(){
    return {
      title:'List 列表',
      list:[],
      loading:false,
      finished:false
    };
  },
  methods:{
    onload(){
      setTimeout(()=>{
        for(let i=0;i<10;i++){
          this.list.push(this.list.length+1);
        }
        this.loading=false;
        if(this.list.length>=40){
          this.finished=true;
        }
      },500)
    }
  }
}

</script>
<style scope>
</style>


