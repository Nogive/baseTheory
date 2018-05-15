<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-badge-group :active-key="activeKey">
      <van-badge v-for="(item,index) in items" :key="index" :title="item.title" :info="item.info" @click="item.click" />
    </van-badge-group>
  </div>
</template>
<script>
import { Badge, BadgeGroup } from 'vant'
export default {
  name:'Badge',
  components: {
    [Badge.name]: Badge,
    [BadgeGroup.name]: BadgeGroup
  },
  data(){
    return {
      title:'Badge 徽章',
      text:'active-key:选中badge的索引；title:内容；info：提示消息；url:跳转地址',
      activeKey:0,
      items:[
        {
          title:'one',
          info:'',
          click:this.onClick,
        },
        {
          title:'two',
          info:9,
          click:this.onClick,
        },
        {
          title:'three',
          info:99,
          click:this.onClick,
        },
        {
          title:'four',
          info:999,
          click:this.onClick,
        }
      ]
    };
  },
  methods:{
    onClick(key){
      this.activeKey=key;
    }
  }
}
</script>
<style>
.van-col{
  background-color: aquamarine;
}
p{
  color: rgb(0, 110, 255);
  text-align: left;
  padding-left: 1rem;
}
</style>


