import Vue from "vue";
import Router from "vue-router";
import Root from "@/components/Root";
import Login from "@/components/Login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "root",
      component: Root
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
