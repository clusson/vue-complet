import Vue from "vue";
import Router from "vue-router";
import Blog from "./views/Blog.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/vue-complet",
      name: "vue-complet/blog",
      component: Blog
    },
    {
      path: "/about",
      name: "vue-complet/about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
