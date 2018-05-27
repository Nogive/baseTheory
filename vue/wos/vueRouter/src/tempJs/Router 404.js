import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter);

const Home={
	template:`
		<div>
			<h2>Home</h2>
			<p>This is Home</p>
		</div>
	`
}
const Parent={
	template:`
		<div>
			<h2>Home</h2>
			<p>This is Parent</p>
		</div>
	`
}
const Page404={
	template:`
		<div>
			<h2>404</h2>
			<p>找不到文件</p>
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
		{
			path:'*',
			component:Page404
		}//要放在routes的最后
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
				<li><router-link to="/asdf">Wherr not here</router-link></li>
			</ul>
			<transition :name="aaa" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
	`,
	watch:{
		"$route"(to,from){
			if(from.path=='/Parent'){
				this.aaa="fade";
			}else{
				this.aaa="fade1"
			}
		}
	}
}).$mount('#app');
