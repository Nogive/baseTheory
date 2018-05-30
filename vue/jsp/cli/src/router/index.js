import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Params from "@/components/Params";
import Hi from "@/components/Hi";
import Error from "@/components/Error";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/hi",
      component: Hi,
      alias: "/hh"
    },
    {
      path: "/params/:newsId(\\d+)/:newsTitle",
      name: "params",
      component: Params,
      beforeEnter: (to, from, next) => {
        console.log("enter params");
        console.log(to);
        console.log(from), next();
      }
    },
    {
      path: "/goHome",
      redirect: "/"
    },
    {
      path: "/goParams/:newsId(\\d+)/:newsTitle",
      redirect: "/params/:newsId(\\d+)/:newsTitle"
    },
    {
      path: "*",
      name: "404",
      component: Error
    }
  ]
});
