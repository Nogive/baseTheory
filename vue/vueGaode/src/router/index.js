import Vue from "vue";
import Router from "vue-router";
import position from "@/pages/Position.vue";
import drag from "@/pages/DragPage.vue";
import filter from "@/pages/Filter.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/"
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
  ]
});
