<template>
  <div>
    <h2>{{title}}</h2>
    <van-datetime-picker v-model="currentDate" type="datetime" :min-date="minDate" :max-date="maxDate"></van-datetime-picker>
    <van-datetime-picker v-model="currentDate" type="date" :min-date="minDate"></van-datetime-picker>
    <van-datetime-picker v-model="currentDate" type="year-month" :min-date="minDate"></van-datetime-picker>
    <van-datetime-picker v-model="time" type="time" :min-hour="minHour" :max-hour="maxHour"></van-datetime-picker>

  </div>
</template>
<script>
import { DatetimePicker,Button } from 'vant'
export default {
  name:'DatetimePicker',
  components: {
    [DatetimePicker.name]:DatetimePicker,
    [Button.name]:Button
  },
  data(){
    return {
      title:'DatetimePicker 时间选择',
      minHour:10,
      maxHour:20,
      minDate:new Date(),
      maxDate:new Date(2019,10,1),
      currentDate:new Date(),
      time:'12:00'
    };
  },
  methods:{
    onClick(item){
     console.log(item.name);
    }
  }
}

</script>
<style scope>
</style>


