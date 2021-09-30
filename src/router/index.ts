import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// import Home from "../views/Home.vue";
import Portal from "../views/Portal.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Portal",
    component: Portal,
  },
  // {
  //   path: "/container",
  //   name: "Container",
  //   component: () => import("../views/Container.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
