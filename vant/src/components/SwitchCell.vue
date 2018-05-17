<template>
  <div>
    <h2>{{title}}</h2>
    <van-cell-group>
      <van-switch-cell v-model="checked" title="标题"></van-switch-cell>
    </van-cell-group>

    <van-cell-group>
      <van-switch-cell v-model="checked" disabled title="标题" />
    </van-cell-group>

    <van-cell-group>
      <van-switch-cell v-model="checked" loading title="标题" />
    </van-cell-group>

  </div>
</template>
<script>
import { SwitchCell,CellGroup,Cell,Button,Dialog } from 'vant'
export default {
  name:'SwitchCell',
  components: {
    [SwitchCell.name]:SwitchCell,
    [Cell.name]:Cell,
    [Button.name]:Button,
    [CellGroup.name]:CellGroup
  },
  data(){
    return {
      title:'SwitchCell 开关单元格',
      checked:true
    };
  },
  methods:{
    
  }
}

</script>
<style scope>
</style>


