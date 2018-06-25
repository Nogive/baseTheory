<template>
  <div class="map-box">
    <div class="search" v-if="placeSearch">
      <input type="text" placeholder="请输入关键字" v-model="searchKey">
      <button type="button" @click.stop="handleSearch">搜索</button>
      <div id="searchResult" v-show="searchKey" class="result"></div>
    </div>
    <div id="mapContainer" class="map"></div>
  </div>
</template>
<style scoped>
.map-box{ width: 100%; height: 300px; position: relative; }
.map-box .map{ width: 100%; height: 100%; }
.map-box .search{ position: absolute; top: 10px; left: 10px; width:calc(100% - 20px) ; z-index: 1; }
.map-box .search input{float: left; height: 32px; width: 80%; border: 1px solid #ccc; line-height: 20px; padding-left: 5px; outline: none; font-size: 0.8rem; }
.map-box .search button{height: 32px; line-height: 32px; background: #fff; border: 1px solid #ccc; width: 20%; text-align: center; font-size: 0.8rem; }
.map-box .result{ max-height: 240px; overflow: auto; margin-top: 10px; }
</style>
<script>
import remoteLoad from '@/utils/remoteLoad'
import {mapKey,mapCityName} from '@/common/constant'
export default {
  name:'drag',
  props:['center'],
  data(){
    return{
      searchKey:'',
      placeSearch:null,
      AMapUI:null,
      AMap:null,
      circleCenter:this.center,//circle center
      preCircle:null,//上一个 circle
      map:null,//地图实例
      dragPicker:null,//地图选址对象
    }
  },
  watch:{
    searchKey(){
      if(this.searchKey===''){
        this.placeSearch.clear();
      }
    }
  },
  methods:{
    handleSearch(){
      if(this.searchKey){
        this.placeSearch.search(this.searchKey)
      }
    },
    initMap(){
      let vm=this;
      let AMapUI=this.AMapUI=window.AMapUI;
      let AMap=this.AMap=window.AMap;
      let mapConfig = {
        zoom: 15,
        center:this.center
      }
      AMapUI.loadUI(['misc/PositionPicker'], function(PositionPicker) {
        let map = new AMap.Map('mapContainer', mapConfig);
        vm.map=map;
        vm.toLacate();
        var positionPicker = new PositionPicker({
            mode:'dragMap',//设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
            map:map,//依赖地图对象
        });
        // 拖拽完成发送自定义 drag 事件
        positionPicker.on('success', positionResult => {
          //更新范围圈
          map.remove(vm.preCircle);
          vm.circleCenter=[positionResult.position.lng,positionResult.position.lat];
          vm.setCircle();
          //拖拽后的结果返回
          vm.$emit('drag', positionResult)
        })
        positionPicker.start();
        vm.setCircle();
        vm.dragPicker=positionPicker;
        
        //搜索
        AMap.service('AMap.PlaceSearch', () => {
          let placeSearch = new AMap.PlaceSearch({
            pageSize: 5,
            pageIndex: 1,
            citylimit: true,
            city: '上海',
            map: vm.map,
            panel: 'searchResult'
          })
          vm.placeSearch=placeSearch;
          AMap.event.addListener(placeSearch, 'listElementClick', function(){
            vm.searchKey='';
          });
        })
      });
    },
    toLacate(){
      let map=this.map;
      let geolocation;
      map.plugin('AMap.Geolocation', function() {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            showMarker:false,//是否显示点位原点
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', function(data){
          console.log('定位成功');
        });//返回定位信息
        AMap.event.addListener(geolocation, 'error', function(data){
          console.log('定位失败');
        });//返回定位出错信息
      });
    },
    setCircle(){
      let circle=new AMap.Circle({
        map:this.map,
        center:this.circleCenter,
        radius:100,
        strokeColor:'#38f',
        strokeOpacity:'0.5',
        strokeWeight:1,
        fillColor:'#38f',
        fillOpacity:'0.2'
      });
      this.preCircle=circle;
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

