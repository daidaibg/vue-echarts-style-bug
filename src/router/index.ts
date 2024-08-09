import { createRouter, createWebHistory, createWebHashHistory, type RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "/home",
    meta: { title: "首页", isAuth: false, keepAlive: false },
    component: () => import("../views/home/home.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  // history: createWebHashHistory(),
  routes: routes,
});


router.beforeEach(async (to, from, next) => {
  next();
});

router.afterEach(() => {
  close();
});

export default router;
