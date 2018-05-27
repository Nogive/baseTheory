import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter);

const home={
	template:`<div>Home</div>`
}
const users={
	template:`
		<div>
			<p>组件</p>
			<router-view></router-view>
		</div>
	`
}
const user={
	template:`
		<div>
			<p>{{$route.params.username}}</p>
		</div>
	`
}
const about={
	template:`
		<div>
			<p>about</p>
		</div>
	`
}

const router=new vueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{
			path:'/',
			name:"home",
			component:home
		},
		{
			path:'/users',
			component:users,
			children:[
				{
					path:':username',
					name:"user",
					component:user
				},
				{
					path:'/',
					name:"about",
					component:about
				},
			]
		}
	]
})

new Vue({
	router,
	template:`
		<div>
			<h1>Good evening</h1>
			<ul>
				<li><router-link to="/">/</router-link></li>
				<li><router-link to="/users">first</router-link></li>
					<ol>
						<li><router-link :to="{path:'/users/wos',query:{aaa:'bbb'}}">wos</router-link></li>
						<li><router-link to="home">second</router-link></li>
						<li><router-link to="about" append>link append</router-link></li>
						<li><router-link to="about" exact>link exact</router-link></li>
					</ol>
			</ul>
			<router-view></router-view>
		</div>
	`
}).$mount('#app');