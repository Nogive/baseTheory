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
      path: "/"
    },
    {
      path: "/menu/:title",
      component: menu,
      props: true,
      children: [
        {
          path: "/",
          name: "menuIntroduce",
          component: menuIntroduce,
          props: true
        },
        {
          path: "main/:param",
          name: "menuMain",
          component: menuMain,
          props: true
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
      component: aboutUs,
      meta: {
        requiresAuth: false
      }
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (true) {
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
