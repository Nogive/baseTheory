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
			name:'home title',
			component:home
		},
		{
			path:'/first',
			name:'first title',
			component:child,
			children:[
				{
					path:'/',
					name:'firsttitle',
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
				}
			]
		},
		{
			path:'/second',
			name:'second title',
			component:second
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
				</ul>
				<li><router-link to="/second">Second</router-link></li>
			</ol>
			<router-view></router-view>
			
		</div>
	`
}).$mount('#app');
