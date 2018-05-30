<template>
  <div>
    <h2>Vuex demo</h2>
    <p>本场比赛得分:{{count}}</p>
    <p>
      <button @click="add(10)">加10分</button>
      <button @click="reduce">减分</button>
    </p>
    <p>
      <button @click="addAction(5)">加5分</button>
      <button @click="reduceAction">减分</button>
    </p>
  </div>
</template>
<script>
import store from '@/vuex/store';
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
  data(){
    return {
      counts:1
    }
  },
  store,
  // computed:{
  //   count(){
  //     return this.$store.state.count;
  //   }
  // }
  // computed:mapState({
  //   count:state=>state.count
  // })
  //computed:mapState(['count']),
  computed:{
    ...mapState(['count']),
    ...mapGetters(['count'])
  },
  //methods:mapMutations(['add','reduce'])
  methods:{
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction','reduceAction'])
  }
}
</script>
<style>

</style>


