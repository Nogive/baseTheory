import Vue from "vue";
import Router from "vue-router";
import position from "@/pages/Position.vue";

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
    }
  ]
});
