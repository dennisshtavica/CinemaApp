import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
// import Movies from "../views/Movies.vue";
import Index from "../views/users/Index.vue";
import SignUp from "../views/users/SignUp.vue";
import Login from "../views/users/Login.vue";
import Home from "../views/Home.vue"
import Profile from "../views/users/Profile.vue"

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  // { path: "/movies", name: "Movies", component: Movies },
  { path: "/users", name: "Users", component: Index },
  { path: "/signUp", name: "SignUp", component: SignUp },
  { path: "/login", name: "Login", component: Login },
  { path: "/users/:id", name: "Profile", component: Profile, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
