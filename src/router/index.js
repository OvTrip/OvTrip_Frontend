import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/AppMain.vue'
import LoginView from '@/views/LoginView'
import PlanView from "@/views/AppPlan.vue";
import SignUpView from "@/views/SignUpView.vue"
import ForgotPassword from '@/views/ForgotPassword.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/plan",
    name: "plan",
    component: PlanView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/password',
    name: 'password',
    component: ForgotPassword
  }
]


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
