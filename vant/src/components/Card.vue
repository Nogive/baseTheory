<template>
  <div>
    <h2>{{title}}</h2>
    <van-card
    title="标题"
    desc="描述"
    num="2"
    price="2.00"
    :thumb="imageURL"></van-card>

    <van-card
    title="标题"
    desc="描述"
    num="2"
    price="2.00"
    :thumb="imageURL">
      <div slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </div>
    </van-card>

  </div>
</template>
<script>
import { Card,Button,Dialog,Toast } from 'vant'
export default {
  name:'Card',
  components: {
    [Card.name]:Card,
    [Toast.name]:Toast,
    [Button.name]:Button,
  },
  data(){
    return {
      title:'Card 卡片',
      imageURL:"../../static/images/nature.jpg",
    };
  },
  methods:{
   
  }
}

</script>
<style scope>
</style>


