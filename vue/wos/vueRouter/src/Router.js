import Vue from 'vue'
import vueRouter from 'vue-router'
import Parent from './transition.vue'
Vue.use(vueRouter);

const Home={
	template:`
		<div>
			<h2>Home</h2>
			<p>This is Home {{$route.query.a}}——{{$route.query.b}}</p>
		</div>
	`
}

const router=new vueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{
			path:'/',
			component:Home
		},
		{
			path:'/Parent',
			component:Parent
		},
	]
})

new Vue({
	router,
	data(){
		return{
			aaa:'fade'
		}
	},
	template:`
		<div>
			<button @click="goBack">后退</button>
			<button @click="goPre">前进</button>
			<button @click="goHome">首页</button>
			<button @click="query">query传值</button>
			<h1>This is Transition</h1>
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/Parent">Parent</router-link></li>
			</ul>
			<transition :name="aaa" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
	`,
	methods:{
		goBack(){
			router.go(-1);
		},
		goPre(){
			router.go(1);
		},
		goHome(){
			console.log(router);
			router.push('/');
		},
		query(){
			router.push({
				path:'/',
				query:{
					a:1,
					b:2
				}
			})
		}
	}
}).$mount('#app');
