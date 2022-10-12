import { createWebHistory, createRouter } from "vue-router";
import SignIn from "@/views/auth/SignIn.vue";
import SignUp from "@/views/auth/SignUp.vue";
import Home from "@/views/Home.vue";
import Product from "@/views/products";
import About from "@/views/About.vue";
import Favorite from "@/views/favorites/Favorite.vue";
import PageNotFound from "@/views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    component: SignIn,
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/product",
    component: Product,
  },
  {
    path: "/favorite",
    component: Favorite
  },
  {
    path: "/about",
    component: About
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;