<template>
  <div>
    <h2>{{title}}</h2>
    <p>列间距:gutter；列偏移：offset</p>
    <van-cell-group class="item-list">
      <van-cell is-link icon="points" title="我的积分" />
      <van-cell is-link icon="gift" title="我收到的礼物" />
    </van-cell-group>
    <van-row gutter="20">
      <van-col span="8">span：8</van-col>
      <van-col span="8">span：8</van-col>
      <van-col span="8">span：8</van-col>
    </van-row>
    <van-row>
      <van-col span="10" offset="8">span:10,offser:8</van-col>
    </van-row>
  </div>
</template>
<script>
import { Cell, CellGroup, Icon, Row, Col } from 'vant'
export default {
  name:'Layout',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon,
    [Row.name]:Row,
    [Col.name]:Col
  },
  data(){
    return {
      title:'24栅栏布局'
    }
  }
}
</script>
<style>
.van-col{
  background-color: aquamarine;
}
.van-row{
  margin-top: 1em;
}
p{
  color: rgb(0, 110, 255);
  text-align: left;
  padding-left: 1rem;
}
</style>


