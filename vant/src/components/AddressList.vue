<template>
  <div>
    <h2>{{title}}</h2>
    <van-address-list
    v-model="choseAddressId"
    :list="list"
    @add="onAdd"
    @edit="onEdit"></van-address-list>

  </div>
</template>
<script>
import { AddressList,Button,Dialog,Toast } from 'vant'
export default {
  name:'AddressList',
  components: {
    [AddressList.name]:AddressList,
    [Toast.name]:Toast,
    [Button.name]:Button,
  },
  data(){
    return {
      title:'AddressList 地址列表',
      choseAddressId:'1',
      list:[
        {
          id:'1',
          name:'张三',
          tel:'11111111111',
          address:'上海上海'
        },
        {
          id:'2',
          name:'张三sa',
          tel:'11111111111',
          address:'上海上海'
        }
      ]
    };
  },
  methods:{
    onAdd(){
      Dialog.alert({
        message:'新增地址'
      });
    },
    onEdit(item,index){
      Dialog.alert({
        message:`编辑地址：${index}`
      });
    }
  }
}

</script>
<style scope>
</style>


