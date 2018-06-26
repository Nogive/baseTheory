import Vue from "vue";
import Router from "vue-router";
import home from "@/components/Home";
import HelloWorld from "@/components/HelloWorld";
//高德原生SDK
import native from "@/components/Native";
//搜索
import search from "@/components/Search";
//自动定位
import autoPosition from "@/components/AutoPosition";
//定位
import position from "@/components/Position";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/hello",
      name: "hello",
      component: HelloWorld
    },
    {
      path: "/native",
      name: "native",
      component: native
    },
    {
      path: "/search",
      name: "search",
      component: search
    },
    {
      path: "/autoPosition",
      name: "autoPosition",
      component: autoPosition
    },
    {
      path: "/position",
      name: "position",
      component: position
    }
  ]
});
