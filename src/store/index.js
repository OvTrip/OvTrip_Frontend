import Vue from "vue";
import Vuex from "vuex";
import planStore from "@/store/modules/planStore";

Vue.use(Vuex);
Vue.config.devtools = true;

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { planStore },
});
