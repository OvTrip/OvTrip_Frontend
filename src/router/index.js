import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/AppMain.vue";
import LoginView from "@/views/LoginView";
import PlanView from "@/views/AppPlan.vue";
import SignUpView from "@/views/SignUpView.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import LoginCallBack from "@/views/LoginCallBack.vue";
import AppMypage from "@/views/AppMypage.vue";
import NaverLoginCallBack from "@/views/NaverLoginCallBack";
import AppNotice from "@/views/AppNotice.vue";
import AppUserSearch from "@/views/AppUserSearch";

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
  },
  {
    path: '/oauth/kakao/callback',
    name: 'loginCallBack',
    component: LoginCallBack
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: AppMypage
  },
  {
    path: '/oauth/naver',
    name: 'naverLoginCallBack',
    component: NaverLoginCallBack
  },
  {
    path: "/notice",
    name: "notice",
    component: AppNotice,
    redirect: "/notice/list",
    children: [
      {
        path: "list",
        name: "noticelist",
        component: () => import("@/components/notice/NoticeContainer"),
      },
    ],
  },
  {
    path: "/search",
    name: "userSearch",
    component: AppUserSearch,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
