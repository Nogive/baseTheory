import Vue from "vue";
import Router from "vue-router";

import home from "@/components/Home";
import menu from "@/components/Menu";
import aboutUs from "@/components/AboutUs";
import menuIntroduce from "@/components/MenuIntroduce";
import menuMain from "@/components/MenuMain";
import menuEnd from "@/components/MenuEnd";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/menu/:id",
      component: menu,
      props: true,
      children: [
        {
          path: "introduce",
          name: "menuIntroduce",
          component: menuIntroduce,
          props: true
        },
        {
          path: "main",
          name: "menuMain",
          component: menuMain
        },
        {
          path: "end",
          name: "menuEnd",
          component: menuEnd
        }
      ]
    },
    {
      path: "/aboutUs",
      //path: "/aboutUs/:name", //路径后面参数可见
      name: "aboutUs",
      component: aboutUs
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({
        path: "/home",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // 确保一定要调用 next()
  }
});
export default router;
