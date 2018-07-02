<template>
  <div>
    <p>{{msg}}</p>
    <p>{{shotAddr}}</p>
    <p>{{address}}</p>
    <mmMap :center="center" @position="getPosition"></mmMap>
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
      address:''
    }
  },
  methods:{
    getPosition(data){
      console.log(data);
      this.positionAgain=false;
      this.shotAddr=data.aois[0].name;
      this.address=data.formattedAddress;
    }
  }
}
</script>

