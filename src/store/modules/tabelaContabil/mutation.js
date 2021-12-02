import * as types from './mutation-types';

export default {
  [types.SET_TABELA_CONTABIL] (state, payload) {
    state.tabelaContabil = payload;
  }
};