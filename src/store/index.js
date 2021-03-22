import Vue from "vue";
import Vuex from "vuex";
import tokens from "./tokens";
import doctors from "./doctors";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    tokens,
    doctors
  }
});
