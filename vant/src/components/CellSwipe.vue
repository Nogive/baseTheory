<template>
  <div>
    <h2>{{title}}</h2>
    <van-cell-swipe :right-width="65" :left-width="65">
      <van-button type="danger" slot="left">选择</van-button>
      <van-cell-group>
        <van-cell title="单元格" value="内容"></van-cell>
      </van-cell-group>
      <van-button type="danger" slot="right">删除</van-button>
    </van-cell-swipe>

    <van-cell-swipe :right-width="65" :left-width="65" :on-close="onClose">
      <van-button type="danger" slot="left">选择</van-button>
      <van-cell-group>
        <van-cell title="单元格" value="内容"></van-cell>
      </van-cell-group>
      <van-button type="danger" slot="right">删除</van-button>
    </van-cell-swipe>

  </div>
</template>
<script>
import { CellSwipe,CellGroup,Cell,Button,Dialog } from 'vant'
export default {
  name:'CellSwipe',
  components: {
    [CellSwipe.name]:CellSwipe,
    [Cell.name]:Cell,
    [Button.name]:Button,
    [CellGroup.name]:CellGroup
  },
  data(){
    return {
      title:'CellSwipe 滑动单元格',
    };
  },
  methods:{
    onClose(clickPosition,instance){
      switch(clickPosition){
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message:'确定删除吗？'
          }).then(()=>{
            instance.close();
          })
          break;
      }
    }
  }
}

</script>
<style scope>
</style>


