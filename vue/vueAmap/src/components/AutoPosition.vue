<template>
    <div class="amap-page-container">
      <p>自动定位</p>
      <el-amap vid="amapDemo" :zoom="zoom" :plugin="plugins"></el-amap>
    </div>
  </template>

  <style>
    .amap-demo {
      height: 300px;
    }

    .search-box {
      position: absolute;
      top: 25px;
      left: 20px;
    }

    .amap-page-container {
      position: relative;
    }
  </style>

  <script>
    module.exports = {
      data(){
        return {
          zoom:15,
          plugins: [{
            pName: 'ToolBar',
            autoPosition:true,
            liteStyle:true,
            events: {
              init(instance) {
                console.log(instance);
              }
            }
          }]
        };
      }
    };
</script>