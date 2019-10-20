import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/faq",
    name: "faq",
    component: () => import(/* webpackChunkName: "faq" */ "../views/FAQ.vue")
  },
  {
    path: "/myplan",
    name: "myplan",
    component: () =>
      import(/* webpackChunkName: "myplan" */ "../views/MyPlan.vue")
  },
  {
    path: "/general-conditions",
    name: "general-conditions",
    component: () =>
      import(
        /* webpackChunkName: "general-conditions" */ "../views/GeneralConditions.vue"
      )
  },
  {
    path: "/data-protection-policy",
    name: "data-protection-policy",
    component: () =>
      import(
        /* webpackChunkName: "data-protection-policy" */ "../views/ProtectionPolicy.vue"
      )
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () =>
      import(
        /* webpackChunkName: "contacts" */ "../views/Contacts.vue"
      )
  },
  {
    path: "/quiz2/:gender",
    name: "quiz2",
    component: () =>
      import(
        /* webpackChunkName: "quiz2" */ "../views/Quiz2.vue"
      )
  },
  {
    path: "/summary",
    name: "summary",
    component: () =>
      import(
        /* webpackChunkName: "summary" */ "../views/Summary.vue"
      )
  }
];

const router = new VueRouter({
  routes
});

export default router;
