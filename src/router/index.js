import Vue from "vue";
import firebase from 'firebase';
import VueRouter from "vue-router";

import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/login",
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
 ];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // window.console.log("from:", from);
  // window.console.log("to:", to);
  
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  // window.console.log("current user:", currentUser)

  if (requiresAuth && !currentUser) next('/login')
  else if (!requiresAuth && currentUser) next('/home')
  else next()
});

export default router;
