<template>
  <div class="m-map">
    <div id="mapContainer" class="map"></div>
  </div>
</template>

<script>
import remoteLoad from '@/utils/remoteLoad'
import {mapKey} from '@/common/constant'
export default {
  name: 'position',
  props:['center'],
  data () {
    return {
      AMapUI: null,
      AMap: null,
      map:null
    }
  },
  watch:{
    map:function(){
      if(this.map!=null){
        this.startLocate();
      }
    }
  },
  methods:{
    initMap(){
      let AMapUI = this.AMapUI = window.AMapUI;
      let AMap = this.AMap = window.AMap;
      let mapConfig = {
        zoom: 16,
        center:this.center
      }
      let map = new AMap.Map('mapContainer', mapConfig);
      this.map=map;
    },
    startLocate(){
      //定位
      let vm=this;
      let map=this.map;
      let geolocation;
      map.plugin('AMap.Geolocation', function() {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            extensions:'all'
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', function(data){
          vm.$emit('position', data)
        });//返回定位信息
        AMap.event.addListener(geolocation, 'error', function(data){
          vm.$emit('position', data)
        });//返回定位出错信息
      });
    }
  },
  async mounted () {
    // 已载入高德地图API，则直接初始化地图
    if (window.AMap && window.AMapUI) {
      this.initMap()
    // 未载入高德地图API，则先载入API再初始化
    } else {
      await remoteLoad(`http://webapi.amap.com/maps?v=1.3&key=${mapKey}`)
      await remoteLoad('http://webapi.amap.com/ui/1.0/main.js')
      this.initMap()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m-map{
  width: 100%;
  height: 300px;
}
.m-map .map{ 
  width: 100%; 
  height: 100%; 
}
</style>
