import Vue from "vue";
import Vuex from "vuex";
import userStore from "@/store/modules/userStore";
import modalStore from "@/store/modules/modalStore";
import planStore from "@/store/modules/planStore";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);
Vue.config.devtools = true;

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { userStore, modalStore, planStore },
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],
});
