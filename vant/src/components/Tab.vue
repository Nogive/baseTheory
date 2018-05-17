<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-tabs v-model="active">
      <van-tab v-for="index in 4" :title="`选项${index}`" :key="index">
        这是内容{{index}}
      </van-tab>
    </van-tabs>
    <p>横向滚动</p>
    <van-tabs v-model="active">
      <van-tab v-for="index in 8" :title="`选项${index}`" :key="index">
        这是内容{{index}}
      </van-tab>
    </van-tabs>
    <p>禁用标签</p>
    <van-tabs @disabled="onClickDisabled">
      <van-tab v-for="index in 4" :key="index" :title="`选项${index}`" :disabled="index === 2">
        内容 {{ index }}
      </van-tab>
    </van-tabs>
    <p>样式风格</p>
    <van-tabs v-model="active" type="card" @click="onClick">
      <van-tab v-for="index in 8" :title="`选项${index}`" :key="index">
        这是内容{{index}}
      </van-tab>
    </van-tabs>
    <p>自定义标签</p>
    <van-tabs v-model="active">
      <van-tab v-for="index in 3" :key="index">
        <div slot="title">
          <van-icon name="more-o">选项{{index}}</van-icon>
        </div>
        内容{{index}}
      </van-tab>
    </van-tabs>
    <p>滑动切换</p>
    <van-tabs v-model="active" swipeable>
      <van-tab v-for="index in 4" :title="`选项${index}`" :key="index">
        这是内容{{index}}
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Tab,Tabs,Toast,Icon } from 'vant'
export default {
  name:'Tab',
  components: {
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [Icon.name]:Icon,
    [Toast.name]:Toast
  },
  data(){
    return {
      title:'Tab 标签页',
      text:`v-model:当前激活的标签索引;
      type:样式类型（line/card）;
      duracation:切换tab的动画时间;
      line-width:底部条宽度（px）;
      swipe-threshold:滚动阀值，设置tab超过多少个可以滚动;
      sticky:是否使用粘性定位布局;
      swipeable:是否可以滑动内容切换`,
      active:2
    };
  },
  methods:{
    onClick(index,title){
     Toast(`选中:${title}`);
    },
    onClickDisabled(index,title){
      Toast(`${title}已被禁用`);
    }
  }
}

</script>
<style scope>
</style>


