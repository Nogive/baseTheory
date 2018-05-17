<template>
  <div>
    <h2>{{title}}</h2>
    <van-tree-select :items="items" :main-active-index="mainActiveIndex" :active-id="activeId" @navclick="onNavClick" @itemclick="onItemClick"></van-tree-select>

  </div>
</template>
<script>
import { TreeSelect,CellGroup,Cell,Button,Dialog } from 'vant'
export default {
  name:'TreeSelect',
  components: {
    [TreeSelect.name]:TreeSelect,
    [Cell.name]:Cell,
    [Button.name]:Button,
    [CellGroup.name]:CellGroup
  },
  data(){
    return {
      title:'TreeSelect 分类选择',
      items:items,
      mainActiveIndex:0,
      activeId:1001
    };
  },
  methods:{
    onNavClick(index){
      this.mainActiveIndex=index;
    },
    onItemClick(data){
      this.activeId=data.id;
    }
  }
}
var items=[
  {
    text:'所有城市',
    children:[
      {
        text:'温州',
        id:1002
      },
      {
        text:'杭州',
        id:1001
      },
      {
        text:'宁波',
        id:1003
      },
      {
        text:'义务',
        id:1004
      },
      {
        text:'无锡',
        id:1005
      },
      {
        text:'常州',
        id:1006
      }
    ]
  },
  {
    text:'浙江',
    children:[
      {
        text:'温州',
        id:1002
      },
      {
        text:'杭州',
        id:1001
      },
      {
        text:'宁波',
        id:1003
      },
      {
        text:'义务',
        id:1004
      }
    ]
  }
]
</script>
<style scope>
</style>


