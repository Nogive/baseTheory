import Vue from "vue";
import Router from "vue-router";
import position from "@/pages/Position.vue";
import drag from "@/pages/DragPage.vue";
import filter from "@/pages/Filter.vue";
import transition from "@/pages/Transition.vue";
import base from "@/pages/Base.vue";

Vue.use(Router);
const routes = [
  {
    path: "/",
    name: "base",
    component: base
  },
  {
    path: "/transition",
    name: "transition",
    component: transition,
    meta: {
      source: "transition"
    }
  },
  {
    path: "/position",
    name: "position",
    component: position
  },
  {
    path: "/drag",
    name: "drag",
    component: drag
  },
  {
    path: "/filter",
    name: "filter",
    component: filter
  }
];
const router = new Router({
  mode: "history",
  routes
});

//假如当前页面是b页面，是由a页面点击过来的，现在b页面点击返回键，不能返回到a页面
router.beforeEach((to, from, next) => {
  //console.log(to);
  //console.log(from);
  next();
});
export default router;
