import Vue from "vue";
import Vuex from "vuex";
import table from "./tables/table.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {},
  actions: {},
  modules: {
    t: table,
  },
});
