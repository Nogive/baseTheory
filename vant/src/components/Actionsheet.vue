<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <p>{{actionText}}</p>
    <van-button @click="show=true">弹出Actionsheet</van-button>
    <van-actionsheet v-model="show" :actions="actions" cancel-text="取消">
    </van-actionsheet>
    
  </div>
</template>
<script>
import { Actionsheet,Button } from 'vant'
export default {
  name:'Actionsheet',
  components: {
    [Actionsheet.name]:Actionsheet,
    [Button.name]:Button
  },
  data(){
    return {
      title:'Actionsheet 行动按钮组',
      text:`actions:行动按钮数组;
      title:标题;
      cancel-text:取消按钮文案;
      overlay:是否显示遮罩;
      close-on-click-overlay:点击遮罩是否关闭;
      get-container:指定挂载的HTML节点;`,
      actionText:`action的key:name:标题;
      subname:二级标题;
      className:为对应列添加特殊class;
      loading:是否是loading状态;
      callback:点击时的回调，参数为当前点击的action对象;`,
      show:false,
      actions:[
        {
          name:'选项',
          callback:this.onClick
        },
        {
          name:'选项',
          subname:'描述信息'
        },
        {
          name:'选项',
          loading:true
        }
      ]
    };
  },
  methods:{
    onClick(item){
     console.log(item.name);
    }
  }
}

</script>
<style scope>
</style>


