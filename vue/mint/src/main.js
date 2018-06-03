// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//全局引用
import Mint from 'mint-ui'
Vue.use(Mint);

import 'mint-ui/lib/style.css'

//局部引用
/*
import { Tabbar, TabItem } from 'mint-ui';
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
*/


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
