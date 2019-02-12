import Vue from "vue";
import Router from "vue-router";
import Blog from "./views/Blog.vue";
import Article from "./components/Article";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "blog",
      component: Blog
    },
    {
      path: "/:link/:id",
      name: "article",
      component: Article
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
