<template>
  <div>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input">
    </template>
    <button @click="Toggle">Toggle</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id" v-if="!todo.isComplete">
        {{ todo.name }}
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    name:'demo',
    data(){
      return{
        loginType:'username',
        todos:[
          {
            id:1,
            isComplete:false,
            name:'test'
          },
          {
            id:2,
            isComplete:false,
            name:'demo'
          }
        ] 
      }
    },
    methods:{
      Toggle(){
        if(this.loginType==='username'){
          this.loginType='email';
        }else{
          this.loginType='username';
        }
      }
    }
  }
</script>
<style scoped>

</style>

