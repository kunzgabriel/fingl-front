import * as types from './mutation-types';

export default {
  [types.SET_PESSOAS] (state, payload) {
    state.pessoas = payload;
  }
};