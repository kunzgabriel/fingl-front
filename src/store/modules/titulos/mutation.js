import * as types from './mutation-types';

export default {
  [types.SET_TITULOS] (state, payload) {
    state.titulos = payload;
  }
};