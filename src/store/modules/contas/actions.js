import Contas from "../../../services/contas";
import * as types from './mutation-types';

export const getContas = async ({ commit }) => {
  const request = await Contas.getContas();
  commit(types.SET_CONTAS, request.data.contas);
}

export const setContas = async (_content, data) => {
  return Contas.setContas(data);
}

export const deleteContas = async ({ commit }, data) => {
  await Contas.deleteContas(data)/
  getContas({ commit });
}