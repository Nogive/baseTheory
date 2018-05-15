"use strict";
new Vue({
	el:'#app',
	data:{
		message:'hello',
		msg:'try'
	},
	methods:{
		reverseMessage:function(){
			this.message=this.message.split('').reverse().join('');
		}
	},
	filters: {
	    capitalize: function (value) {
	      if (!value) return ''
	      value = value.toString()
	      return value.charAt(0).toUpperCase() + value.slice(1)
	    }
	  }
});
new Vue({
	el:'#app1',
	data:{
		seen:true,
		ok:false,
		type:"a"
	}
});
new Vue({
	el:'#app2',
	data:{
		sites:[
			{name:'one'},
			{name:'two'},
			{name:'three'}
		],
		object:{
			name:'cd',
			sex:'girl',
			age:'23'
		}
	}
})
let vm=new Vue({
	el:'#app3',
	data:{
		message:'start',
		name:'goinggo',
		url:'http://www.baidu.com'
	},
	computed:{
		reversedMessage:function(){
			return this.message.split('').reverse().join('');
		},
		site:{
			//getter
			get:function(){
				return this.name+' '+this.url;
			},
			//setter
			set:function(newValue){
				var names=newValue.split(' ');
				this.name=names[0];
				this.url=names[names.length-1];
			}
		}
	}
})
vm.site='百度  http://www.baidu.com';
let watchVm=new Vue({
	el:'#app4',
	data:{
		kilometers:0,
		meters:0,
		total:''
	},
	methods:{},
	computed:{},
	watch:{
		kilometers:function(val){
			this.kilometers=val;
			this.meters=val*1000;
		},
		meters:function(val){
			this.kilometers=val/1000;
			this.meters=val;
		}
	}
})
//$wathc 是一个实例方法
watchVm.$watch('kilometers',function(newValue,oldValue){
	//这个回调将在watchVm.kilometers改变后调用
	watchVm.total='修改前值为：'+oldValue+',修改后值为：'+newValue;
})
new Vue({
	el:'#app5',
	data:{
		isActive:true,
		hasError:true,
		error:null,
		activeClass:'active',
		errorClass:'text-danger',
		activeColor:"red",
		fontSize:30
	},
	computed:{
		classObject:function(){
			return{
				active:this.isActive&&!this.error,
				'text-danger':this.error&&this.error.type=='fatal',
			}
		}
	}
})
new Vue({
	el:'#app6',
	data:{
		counter:0,
		name:'调用greet方法'
	},
	methods:{
		greet:function(event){
			alert("Hello,"+this.name+'!');
			if(event){
				alert(event.target.tagName);
			}
		},
		say:function(message){
			alert(message);
		}
	}
})
new Vue({
	el:'#app7',
	data:{
		message:'input',
		message2:'textarea',
		checked:false,
		checkedNames:[],
		picked:'baidu',
		sites:['苹果','香蕉','橘子'],
		selected:'',
		lazy:0,
		number:1,
		trim:'lll'
	}
})


//、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、
Vue.component('demo',{
	template:'<p>自定义全局组件</p>'
});
var part={
	template:'<p>自定义局部组件</p>'
}
Vue.component('child',{
	//声明prop
	props:['message'],
	template:'<span>{{message}}</span>'
})
Vue.component('todo-item',{
	props:['todo'],
	template:'<li>{{todo.text}}</li>'
})
Vue.component('button-counter',{
	template:"<button v-on:click='incrementHandler'>{{counter}}</button>",
	data:function(){
		return {
			counter:0
		}
	},
	methods:{
		incrementHandler:function(){
			this.counter+=1;
			this.$emit('increment',2);
		}
	}
})
new Vue({
	el:'#app8',
	data:{
		parentMsg:'父组件内容',
		items:[
			{text:'baidu'},
			{text:'google'},
			{text:'sina'}
		],
		total:0
	},
	components:{
		'part':part
	},
	methods:{
		incrementTotal:function(v){
			this.total+=v;
		}
	}
})

//注册一个全局自定义指令 v-focus
Vue.directive('focus',{
	//当前元素绑定到DOM中
	inserted:function(el){
		el.focus();
	}
})
new Vue({
	el:'#app9',
	directives:{
		//注册局部指令
		hover:{
			inserted:function(el){
				el.focus();
			}
		}
	}
})

const Foo={template:'<div>foo</div>'}
const Bar={template:'<div>bar</div>'}
const routes=[
	{path:'/foo',component:Foo},
	{path:'/bar',component:Bar}
]
const router=new VueRouter({
	routes
})
const app=new Vue({
	router
}).$mount('#app10')
