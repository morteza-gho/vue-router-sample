import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import ContactUs from "../views/ContactUs.vue";
import Posts from "../views/Posts.vue";
import Post from "../views/Post.vue";
import PostComments from "../views/PostComments.vue";
import PostDetails from "../views/PostDetails.vue";
import PostRelated from "../views/PostRelated.vue";
import { createRouter, createWebHistory } from "vue-router";

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
   },
   {
      path: '/posts',
      name: 'posts',
      component: Posts
   },
   {
      path: '/posts/:id',
      name: 'post',
      component: Post,
      redirect: { name: 'postDetails' },
      children: [
         {
            path: 'details',
            name: 'postDetails',
            component: PostDetails
         },
         {
            path: 'comments',
            name: 'postComments',
            component: PostComments
         },
         {
            path: 'related',
            name: 'postRelated',
            component: PostRelated
         }
      ]
   }

];

const router = createRouter({
   history: createWebHistory(),
   routes,
   linkActiveClass: "active", // active class for non-exact links.
   linkExactActiveClass: "active" // active class for *exact* links.
})

export default router;