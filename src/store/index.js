import Vue from "vue";
import Vuex from 'vuex';

import pessoas from "./modules/pessoas";
import titulos from "./modules/titulos"
import contas from "./modules/contas"
import tabelaContabil from "./modules/tabelaContabil"

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    pessoas,
    titulos,
    contas,
    tabelaContabil
  }
});

export default store;