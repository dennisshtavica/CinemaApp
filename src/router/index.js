import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Movies from "../views/Movies.vue";

const routes = [
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/movies", name: "Movies", component: Movies },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router