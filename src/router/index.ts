import { createRouter, createWebHashHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";
import HomeView from "@/views/HomeView.vue";
import Navigation_bar from "@/views/Navigation_bar.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "about",
      component: AboutView,
    },
    {
      path: "/sign-in",
      name: "sign in",
      component: SignInView,
    },
    {
      path: "/sign-up",
      name: "sign up",
      component: SignUpView,
    },
    {
      path: "/Navigation_bar",
      name: "Navigation_bar",
      component: Navigation_bar,
    },
    //{
    //  path: "/about",
    //  name: "about",
    //  // route level code-splitting
    //  // this generates a separate chunk (About.[hash].js) for this route
    //  // which is lazy-loaded when the route is visited.
    //  component: () => import("../views/AboutView.vue"),
    //},
  ],
});

export default router;
