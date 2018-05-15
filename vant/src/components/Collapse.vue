<template>
  <div>
    <h2>{{title}}</h2>
    <p>v-modal:当前展开面板的name;accordion:是否开启手风琴模式，若开启v-modal的值是字符串形式，否则是数组形式</p>
    <van-collapse v-model="activeNames" accordion>
      <van-collapse-item title="标题" name="1">
        这里是折叠起来的内容
      </van-collapse-item>
      <van-collapse-item title="标题" name="2">
        这里是折叠起来的内容
      </van-collapse-item>
      <van-collapse-item title="标题" name="3">
        这里是折叠起来的内容
      </van-collapse-item>
      <van-collapse-item name="4">
        <div slot="title">自定义标题<van-icon name="question"></van-icon></div>
        这是自定义的折叠内容
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
import { Collapse,CollapseItem,Icon} from 'vant'
export default {
  name:'Collapse',
  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Icon.name]:Icon,
  },
  data(){
    return {
      title:'Collapse 折叠面板',
      activeNames:'1'
    };
  }
}
</script>
<style>

</style>


