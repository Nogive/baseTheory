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
const firstFirst={
	template:'<div>firstFirst 内容{{$route.params.id}}</div>'
}
const firstSecond={
	template:'<div>firstSecond 内容{{$route.params.id}}</div>'
}

const child={
	template:`
		<div>
			<h1>子路由</h1>
			<router-view class="aaa"></router-view>
		</div>
	`
}

const router=new vueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{
			path:'/',
			name:'home',
			component:home
		},
		{
			path:'/first',
			component:child,
			children:[
				{
					path:'/',
					name:'home-first',
					component:first
				},
				{
					path:'first',
					name:'firstfirsttitle',
					component:firstFirst
				},
				{
					path:'second',
					name:'firstsecondtitle',
					component:firstSecond
				},
				{
					path:'third',
					redirect:'first'
				}
			]
		},
		{
			path:'/second',
			name:'second title',
			component:second,
			alias:'/gogo'
		},
		{
			path:'/aaa/:id',
			component:firstFirst
		},
		{
			path:'/bbb/:id',
			redirect:'/aaa/:id'
		},
		{
			path:'/ccc/:id',
			redirect:xxx=>{
				const {hash,params,query}=xxx;
				if(params.id=="001"){
					return '/';
				}
			}
		}
	]
})
let config={
	name:'firstfirsttitle',
	params:{
		id:1000000
	}
}
new Vue({
	router,
	template:`
		<div id="demo">
			<h1>导航</h1>
			<p>{{$route.name}}</p>
			<ol>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/first">First</router-link></li>
				<ul>
					<li><router-link :to="{name:'firstfirsttitle',params:{id:123}}">child1</router-link></li>
					<li><router-link :to="{name:'firstsecondtitle',params:{id:321}}">child2</router-link></li>
					<li><router-link to="third">third</router-link></li>
				</ul>
				<li><router-link to="/second">Second</router-link></li>
				<li><router-link to="/gogo">gogo</router-link></li>
				<li><router-link to="/aaa/333">aaa</router-link></li>
				<li><router-link to="/bbb/456">bbb</router-link></li>
				<li><router-link to="/ccc/001">ccc</router-link></li>
			</ol>
			<router-view></router-view>
			
		</div>
	`
}).$mount('#app');
