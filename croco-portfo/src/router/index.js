import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import Home from "../views/Home.vue";
// import About from "../views/About.vue";
// import Gallery from "../views/Gallery.vue";
// import Contact from "../views/Contact.vue";
// import Characters from "../views/Characters.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/new_home",
    name: "new_home",
    component: () =>
      import(/* webpackChunkName: "new_home" */ "../views/Home.vue"),
  },
  {
    path: "/new_about",
    name: "new_about",
    component: () =>
      import(/* webpackChunkName: "new_about" */ "../views/About.vue"),
  },
  {
    path: "/gallery",
    name: "gallery",
    component: () =>
      import(/* webpackChunkName: "gallery" */ "../views/Gallery.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: "/characters",
    name: "characters",
    component: () =>
      import(/* webpackChunkName: "characters" */ "../views/Characters.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
