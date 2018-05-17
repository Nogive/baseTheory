<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{text}}</p>
    <van-cell-group>
      <van-field v-model="value" placeholder="请输入用户名"></van-field>
    </van-cell-group>
    <p>用户名：{{value}}</p>

    <van-cell-group>
      <van-field v-model="username" label="用户名" icon="clear"  placeholder="请输入用户名" required @click-icon="username=''"> </van-field>
      <van-field v-model="password" type="password" label="密码" icon="clear" placeholder="请输入密码" required @click-icon="password=''"></van-field>
    </van-cell-group>

    <van-cell-group>
      <van-field v-model="username" label="用户名" placeholder="请输入用户名" error></van-field>
      <van-field v-model="phone" label="手机号" placeholder="请输入手机号" error-message="手机号格式错误"></van-field>
    </van-cell-group>

    <p>高度自适应</p>
    <van-cell-group>
      <van-field v-model="message" label="留言" type="textarea" placeholder="请输入留言" rows="1" autosize></van-field>
    </van-cell-group>

    <p>插入按钮 通过button slot</p>
    <van-cell-group>
      <van-field center v-model="sms" placeholder="请输入验证码" label="短信验证码" icon="clear" @click-icon="sms=''">
        <van-button slot="button" size="small" type="primary">获取验证码</van-button>
      </van-field>
    </van-cell-group>
  </div>
</template>
<script>
import { Field,Cell,CellGroup,Button } from 'vant'
export default {
  name:'Field',
  components: {
    [Field.name]:Field,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup,
    [Button.name]:Button
  },
  data(){
    return {
      title:'Field 输入框',
      text:`label:标签;
      value:当前输入值;
      type:类型（number/tel/textarea...）;
      disabled:是否禁用输入框;
      error:是否将输入内容标红;
      error-message:底部错误提示文案;
      autosize:自适应内容高度（只对textarea有效）;
      icon:输入框尾部图标`,
      value:"",
      username:'',
      password:'',
      phone:'',
      message:'',
      sms:''
    };
  }
}

</script>
<style scope>
</style>


