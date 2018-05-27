import Vue from 'vue'
import vueRouter from 'vue-router'
import Parent from './transition.vue'
Vue.use(vueRouter);

const Home={
	template:`
		<div>
			<h2>Home</h2>
			<p>This is Home</p>
		</div>
	`,
	beforeRouteEnter:(to,from,next)=>{
		console.log("进去");
		next();
	},
	beforeRouteLeave:(to,from,next)=>{
		console.log('出去');
		next();
	}
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
			component:Parent,
			beforeEnter:(to,from,next)=>{
				console.log(to);
				console.log(from);
				next();//可以了
				//next({path:'/asd'});
			}
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
			<h1>This is Transition</h1>
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/Parent">Parent</router-link></li>
			</ul>
			<transition :name="aaa" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
	`
}).$mount('#app');
