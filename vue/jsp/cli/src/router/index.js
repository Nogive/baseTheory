import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Params from "@/components/Params";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/params/:newsId(\\d+)/:newsTitle",
      name: "params",
      component: Params
    },
    {
      path: "/goHome",
      redirect: "/"
    },
    {
      path: "/goParams/:newsId(\\d+)/:newsTitle",
      redirect: "/params/:newsId(\\d+)/:newsTitle"
    }
  ]
});
