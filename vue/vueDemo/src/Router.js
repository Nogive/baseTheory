import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter);
const first={
	template:'<div>First 内容</div>'
}
const second={
	template:'<div>Second 内容</div>'
}
const home={
	template:'<div>Home 内容</div>'
}
const hehe={
	template:'<div>hehe 内容</div>'
}

const router=new vueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{
			path:'/',
			name:'home title',
			components:{
				default:home,
				left:first,
				right:second
			}
		},
		{
			path:'/first',
			name:'first title',
			components:{
				default:hehe,
				left:first,
				right:second
			}
		},
	]
})

new Vue({
	router,
	template:`
		<div id="demo">
			<h1>导航</h1>
			<p>{{$route.name}}</p>
			<ol>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/first">First</router-link></li>
			</ol>
			<router-view></router-view>
			<router-view name="left" style="float:left;width:50%;height:100px;background-color:red"></router-view>
			<router-view name="right" style="float:right;width:50%;height:100px;background-color:green"></router-view>
		</div>
	`
}).$mount('#app');
