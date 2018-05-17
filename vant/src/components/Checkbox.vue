<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-checkbox v-model="checked" >复选框</van-checkbox>
    <van-checkbox v-model="checked"  disabled>复选框</van-checkbox>
    <van-checkbox v-model="checked"  label-disabled>复选框</van-checkbox>
    <van-checkbox-group v-model="result" :max="2">
      <van-checkbox v-for="(item,index) in list" :key="item" :name="item">
        复选框{{item+index}}
      </van-checkbox>
    </van-checkbox-group>
    <p>与Cell一起使用</p>
    <van-checkbox-group v-model="result">
      <van-cell-group>
        <van-cell v-for="item in list" :key="item" :title="`复选框${item}`">
          <van-checkbox :name="item"></van-checkbox>
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>

  </div>
</template>
<script>
import { Checkbox,CheckboxGroup,Cell,CellGroup } from 'vant'
export default {
  name:'Checks',
  components: {
    [Checkbox.name]:Checkbox,
    [CheckboxGroup.name]:CheckboxGroup,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup
  },
  data(){
    return {
      title:'Checkbox 复选框',
      text:`v-model:是否为选中状态;
      name:标识Checkbox名称;
      disabled:是否禁用单选框;
      label-disabled:是否禁用单选框内容点击;
      shape:形状（square/round）;
      max:最大可选数;`,
      checked:true,
      list:['a','b','c'],
      result:['a','b']
    };
  }
}

</script>
<style scope>
</style>


