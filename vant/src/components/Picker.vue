<template>
  <div>
    <h2>{{title}}</h2>
    <van-picker :columns="columns" @change="onChange"></van-picker>
    <van-picker show-toolbar title="标题" :columns="columns" @change="onChange"></van-picker>
    <p>多列联动：</p>
    <van-picker :columns="cols" @change="changes"></van-picker>
    <van-picker :columns="columns" loading></van-picker>
  </div>
</template>
<script>
import { Picker } from 'vant'
const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州']
};
export default {
  name:'Picker',
  components: {
    [Picker.name]:Picker
  },
  data(){
    return {
      title:'Picker 选择器',
      columns:[
        {text:'杭州',disabled:true},
        {text:'宁波'},
        {text:'温州'},
        {text:'嘉兴'},
        {text:'湖州'}
      ],
      cols:[
        {
          values:Object.keys(citys),
          className:'columnl'
        },{
          values:citys['浙江'],
          className:'column2',
          defaultIndex:2
        }
      ]
    };
  },
  methods:{
    onChange(picker,value,index){
     console.log(`当前值：${value},当前索引：${index}`);
    },
    changes(picker,values){
      console.log(picker);
      console.log(values);
      picker.setColumnValues(1,citys[values[0]]);
    }
  }
}

</script>
<style scope>
</style>


