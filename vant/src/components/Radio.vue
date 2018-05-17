<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-radio-group v-model="radio">
      <van-radio name="1">单选框1</van-radio>
      <van-radio name="2">单选框2</van-radio>
    </van-radio-group>
    <van-radio-group v-model="radio" disabled>
      <van-radio name="1">单选框1</van-radio>
      <van-radio name="2">单选框2</van-radio>
    </van-radio-group>
    <p>与Cell一起使用</p>
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell title="单选框1" clickable @click="radio='1'">
          <van-radio name="1"></van-radio>
        </van-cell>
        <van-cell title="单选框2" clickable @click="radio='2'">
          <van-radio name="2"></van-radio>
        </van-cell>
      </van-cell-group>
    </van-radio-group>

  </div>
</template>
<script>
import { RadioGroup,Radio,Cell,CellGroup } from 'vant'
export default {
  name:'Radio',
  components: {
    [Radio.name]:Radio,
    [RadioGroup.name]:RadioGroup,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup
  },
  data(){
    return {
      title:'Radio 单选框',
      text:`v-model:当前选中的name;
      name:标识Checkbox名称,唯一标识;`,
      radio:"1"
    };
  }
}

</script>
<style scope>
</style>


