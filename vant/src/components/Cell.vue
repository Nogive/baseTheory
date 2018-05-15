<template>
  <div>
    <h2>{{title}}</h2>
    <van-cell-group>
      <van-cell title="单元格" value="内容"></van-cell>
      <van-cell title="单元格" value="内容" label="详细内容"></van-cell>
      <van-cell title="单元格" icon="location"></van-cell>
      <van-cell title="单元格" icon="location" value="内容" label="详细"></van-cell>
      <van-cell title="单元格" is-link value="内容" label="简介"></van-cell>
      <van-cell value="内容" icon="shop" is-link>
        <template slot="title">
          <span class="van-cell-text">单元格</span>
          <van-tag type="danger">标签</van-tag>
        </template>
      </van-cell>
      <van-cell title="单元格"  required>
        <van-icon slot="right-icon" name="search" class="van-cell_right-icon"></van-icon>
      </van-cell>
    </van-cell-group>
  </div>
</template>
<script>
import { Cell,CellGroup,Icon,Tag } from 'vant'
export default {
  name:'Cell',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]:CellGroup,
    [Icon.name]:Icon,
    [Tag.name]:Tag
  },
  data(){
    return {
      title:'Cell 单元格'
    };
  }
}
</script>
<style>

</style>


