import Vue from "vue";
import Router from "vue-router";
import position from "@/pages/Position.vue";
import drag from "@/pages/DragPage.vue";
import filter from "@/pages/Filter.vue";
import transition from "@/pages/Transition.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "transition",
      component: transition
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
