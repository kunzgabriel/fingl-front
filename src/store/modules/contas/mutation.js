import * as types from './mutation-types';

export default {
  [types.SET_CONTAS] (state, payload) {
    state.contas = payload;
  }
};