import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import ContactUs from "../views/ContactUs.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
   {
      path: "/",
      name: 'home',
      component: Home
   },
   {
      path: "/about",
      name: 'about',
      component: AboutUs
   },
   {
      path: "/contact",
      name: 'contact',
      component: ContactUs
   }
];

const router = createRouter({
   history: createWebHashHistory(),
   routes
})

export default router;