<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-pagination @change="pageChange" v-model="currentPage" :total-items="24" :items-per-page="5"></van-pagination>
    <van-pagination v-model="currentPageInSimple" :page-count="12" mode="simple"></van-pagination>
    <van-pagination next-text="next" v-model="currentPageInEll" :total-items="125" :show-page-size="3" force-ellipses></van-pagination>
  </div>
</template>
<script>
import { Pagination } from 'vant'
export default {
  name:'Pagination',
  components: {
    [Pagination.name]:Pagination
  },
  data(){
    return {
      title:'Pagination 分页',
      text:`v-model:当前页码；
            mode="simple/multi" 简单模式/普通模式；
            items-per-page:每页记录数 10；
            previous-text:上一页；
            next-text:下一页；
            show-page-size:显示的页码个数 5；
            force-ellipses:显示省略号`,
      currentPage:1,
      currentPageInSimple:2,
      currentPageInEll:1
    };
  },
  methods:{
    pageChange(){
      console.log(this.currentPage);
    }
  }
}

</script>
<style scope>
</style>


