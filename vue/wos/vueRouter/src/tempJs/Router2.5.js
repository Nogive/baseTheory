import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter);

const router=new vueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{
			path:'/',
		},
		{
			path:'/params/:aaa/:bbb',
		},
		{
			path:'/params-reges/:id(\\d+)',
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
				<li><router-link to="/params/111/222">/params/111/222</router-link></li>
				<li><router-link to="/params-reges/222">/params-reges/222</router-link></li>
			</ul>
			<p>Show</p>
			<pre><code>{{$route.params.aaa}}{{JSON.stringify($route,null,2)}}</code></pre>
		</div>
	`
}).$mount('#app');