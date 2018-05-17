<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-panel title="标题" desc="描述信息" status="状态">
      <div>内容</div>
    </van-panel>
    <van-panel title="标题" desc="详细信息" status="状态">
      <div>内容</div>
      <div slot="footer">
        <van-button size="small"> 按钮</van-button>
        <van-button size="small" type="danger"> 按钮</van-button>
      </div>
    </van-panel>
  </div>
</template>
<script>
import { Panel,Button } from 'vant'
export default {
  name:'Panel',
  components: {
    [Panel.name]:Panel,
    [Button.name]:Button
  },
  data(){
    return {
      title:'Panel 面板',
      text:`面板只是一个容器，里面可以放自定义的东西`
    };
  }
}

</script>
<style scope>
</style>


