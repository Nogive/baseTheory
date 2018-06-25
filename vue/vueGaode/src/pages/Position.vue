<template>
  <div>
    <p>{{msg}}</p>
    <p>{{shotAddr}}</p>
    <p>{{address}}</p>
    <mmMap :center="center" @position="getPosition" :positionAgain="positionAgain"></mmMap>
    <button @click="positionByHand">手动定位</button>
  </div>
</template>
<script>
import mmMap from '@/components/Position'
export default {
  name:'position',
  components:{
    mmMap
  },
  data(){
    return{
      msg:'自动获取位置',
      center:[121.473658,31.230378],
      shotAddr:'',
      address:'',
      positionAgain:false
    }
  },
  methods:{
    getPosition(data){
      console.log(data);
      this.positionAgain=false;
      this.shotAddr=data.aois[0].name;
      this.address=data.formattedAddress;
    },
    positionByHand(){
      this.positionAgain=true;
    }
  }
}
</script>

