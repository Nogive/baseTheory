<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
      <el-amap-marker 
        v-for="(marker, index) in markers" 
        :key="index+1"
        :position="marker.position" 
        :events="marker.events" 
        draggable="true" 
        :vid="index+1"></el-amap-marker>
      <el-amap-circle 
        v-for="(circle,index) in circles" 
        :key="index" 
        :center="circle.center" 
        :radius="circle.radius" 
        :fill-opacity="circle.fillOpacity" 
        :events="circle.events"
        strokeColor="#38f"
        fillColor="#38f"
        strokeWeight="1"></el-amap-circle>
    </el-amap>
    <div class="toolbar">
      <button @click="changeRange()">add range</button>
    </div>
  </div>
  </template>

  <style>
    .amap-page-container {
      width: 100%;
      height: 200px;
      position: relative;
    }
     .search-box {
      position: absolute;
      top: 25px;
      left: 20px;
    }
  </style>

  <script>
    module.exports = {
      data () {
        return {
          zoom: 15,
          center: [121.329402,31.228667],
          circles: [
            {
              center: [121.329402,31.228667],
              radius: 300,
              fillOpacity: 0.2,
              events: {
                click: () => {
                  alert('click');
                }
              }
            }
          ],
          markers:[
            {
              position:[121.329402,31.228667],
              events:{
                click: () => {
                  alert('click marker');
                },
                dragend: (e) => {
                  console.log('---event---: dragend')
                  this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
                }
              }
            }
          ]
        }
      },
      methods:{
        changeRange(){
          this.circles[0].radius+=10;
        }
      }
    };
</script>