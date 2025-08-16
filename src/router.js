import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Trips from "./views/Trips.vue";
import Tips from "./views/Tips.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/trips", component: Trips },
  { path: "/tips", component: Tips },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
