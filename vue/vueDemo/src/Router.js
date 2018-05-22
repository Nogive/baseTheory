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
	template:'<div>firstFirst 内容</div>'
}
const firstSecond={
	template:'<div>firstSecond 内容</div>'
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
			component:home
		},
		{
			path:'/first',
			component:child,
			children:[
				{
					path:'/',
					component:first
				},
				{
					path:'first',
					component:firstFirst
				},
				{
					path:'second',
					component:firstSecond
				}
			]
		},
		{
			path:'/second',
			component:second
		}
	]
})
new Vue({
	router,
	template:`
		<div id="demo">
			<h1>导航</h1>
			<ol>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/first">First</router-link></li>
				<ul>
					<li><router-link to="/first/first">child1</router-link></li>
					<li><router-link to="/first/second">child2</router-link></li>
				</ul>
				<li><router-link to="/second">Second</router-link></li>
			</ol>
			<router-view class="aaa"></router-view>
		</div>
	`
}).$mount('#app');

