<template>
  <div class="test-box">
    <p>{{title}}</p>
    <p>{{ msg | capitalize }}</p>
    <p>{{ num | currency('$') }} {{ num | currency('￥',2) }}</p>
    <p>{{time | timestampFormat('yyyy-mm-dd')}} {{time | timestampFormat('hh:mm')}}</p>
    <!-- <input type="text" v-focus> -->
    <input type="text" v-mfocus="focus">
    <hr>
    <ul>
      <li v-for="item in arr" :key="item">{{item}}</li>
    </ul>
    <div class="my-box" v-drag="true"></div>
  </div>
</template>
<script>
//vue 2.x 不再支持自带的过滤器  使用过滤器需要自定义。
//且过滤器只能使用在v-bind和双花括号里，以管道符 "|"隔开，参数类似于函数的形式 如：{{msg | filter(param)}}
import Vue from 'vue';
//首字母大写
Vue.filter('capitalize',function(value){
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

//元、美元
Vue.filter('currency',function(value,unit,decimal){
  let reg=/^[0-9]+.?[0-9]*$/;
  if (!reg.test(value)) return ''
  value =decimal==undefined?value:value.toFixed(decimal)
  return `${unit}${value}`
})

//时间转换器(可根据业务需要自行补充条件)
Vue.filter('timestampFormat',function(value,format){
  let date=new Date(value);
  let y=date.getFullYear();
  let m=date.getMonth()+1;
  let d=date.getDate();
  let h=date.getHours();
  let min=date.getMinutes();
  let s=date.getSeconds();
  let result='';
  if(format==undefined){
    result=`${y}-${m<10?'0'+m:m}-${d<10?'0'+d:d} ${h<10?'0'+h:h}:${min<10?'0'+min:min}:${s<10?'0'+s:s}`;
  }
  if(format=='yyyy-mm-dd'){
    result=`${y}-${m<10?'0'+m:m}-${d<10?'0'+d:d}`;
  }
  if(format=='yyyy-mm'){
    result=`${y}-${m<10?'0'+m:m}`;
  }
  if(format=='mm-dd'){
    result=` ${mm<10?'0'+mm:mm}:${ddmin<10?'0'+dd:dd}`;
  }
  if(format=='hh:mm'){
    result=` ${h<10?'0'+h:h}:${min<10?'0'+min:min}`;
  }
  return result;
})

//自定义指令
//聚焦
Vue.directive('focus',{
  inserted: function (el) {
    el.focus()
  }
})
Vue.directive('mfocus',{
  inserted:function(el,binding){
    if(binding.value){
      el.focus()
    }
  }
})
//拖拽
Vue.directive('drag',function(el,binding){
  let $el=el;
  $el.onmousedown=function(ev){
    ev=window.event?window.event:ev;
    let disX=ev.clientX-$el.offsetLeft;
    let disY=ev.clientY-$el.offsetTop;
    document.onmousemove=function(ev){
      ev=window.event?window.event:ev;
      let L=ev.clientX-disX;
      let T=ev.clientY-disY;
      $el.style.left=L+'px';
      $el.style.top=T+'px';
    }
    document.onmouseup=function(){
      document.onmousemove=null;
      document.onmouseup=null;
    }
  }
})

export default {
  name:'flter',
  data(){
    return {
      title:'过滤器 & 指令',
      arr:[5,3,2,6,9,1,22,45,23,67,12,14],
      msg:'this is filter',
      num:99.9,
      time:1529979522000,
      focus:true
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods:{
    clickP(){
      alert(1);
    }
  }
}
</script>
<style scoped>
.my-box{
  width: 100px;
  height: 100px;
  background: skyblue;
  position: absolute;
}
</style>

