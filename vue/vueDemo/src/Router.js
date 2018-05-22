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
			component:first
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
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/first">First</router-link></li>
				<li><router-link to="/second">Second</router-link></li>
			</ul>
			<router-view class="aaa"></router-view>
		</div>
	`
}).$mount('#app');

