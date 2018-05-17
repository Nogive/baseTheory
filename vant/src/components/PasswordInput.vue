<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-password-input :value="value" info="密码为6位数字" @focus="showKeyboard=true"></van-password-input>
    <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard=false">

    </van-number-keyboard>

  </div>
</template>
<script>
import { NumberKeyboard,PasswordInput } from 'vant'
export default {
  name:'PasswordInput',
  components: {
    [NumberKeyboard.name]:NumberKeyboard,
    [PasswordInput.name]:PasswordInput
  },
  data(){
    return {
      title:'PasswordInput 密码输入框',
      text:`value:密码值;
      length:密码最大长度;
      info:输入框下方提示;
      error-info:输入框下方错误提示;`,
      value:'',
      showKeyboard:false
    };
  },
  methods:{
    onInput(key){
      this.value=(this.value+key).slice(0,6);
    },
    onDelete(){
      this.value=this.value.slice(0,this.value.length-1);
    }
  }
}

</script>
<style scope>
</style>


