// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "./common/rem";
import Vue from "vue";
import App from "./App";
//import VueLazyload from "vue-lazyload";
import { Lazyload } from "vant";
Vue.use(Lazyload, { lazyComponent: true });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});
