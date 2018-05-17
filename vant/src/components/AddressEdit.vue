<template>
  <div>
    <h2>{{title}}</h2>
    <van-address-edit
    :area-list="areaList"
    show-postal
    show-delete
    show-set-default
    show-search-result
    :search-result="searchResult"
    @save="onSave"
    @delete="onDelete"
    @change-detail="onChangeDetail"></van-address-edit>

  </div>
</template>
<script>
import { AddressEdit,CellGroup,Cell,Button,Dialog } from 'vant'
export default {
  name:'AddressEdit',
  components: {
    [AddressEdit.name]:AddressEdit,
    [Cell.name]:Cell,
    [Button.name]:Button,
    [CellGroup.name]:CellGroup
  },
  data(){
    return {
      title:'TreeSelect 分类选择',
      areaList:areaList,
      searchResult:[]
    };
  },
  methods:{
    onSave(){
      Dialog.alert({
        message:'save'
      });
    },
    onDelete(){
      Dialog.alert({
        message:'delete'
      });
    },
    onChangeDetail(val){
      if(val){
        this.searchResult=[{
          name:'万科中心',
          address:'杭州西湖'
        }]
      }else{
        this.searchResult=[];
      }
    }
  }
}
var areaList={
  province_list: {
    110000: '北京市',
    120000: '天津市'
  },
  city_list: {
    110100: '北京市',
    110200: '县',
    120100: '天津市',
    120200: '县'
  },
  county_list: {
    110101: '东城区',
    110102: '西城区',
    110105: '朝阳区',
    110106: '丰台区',
    120101: '和平区',
    120102: '河东区',
    120103: '河西区',
    120104: '南开区',
    120105: '河北区',
    // ....
  }
}
</script>
<style scope>
</style>


