import Pessoas from "../../../services/pessoas";
import * as types from './mutation-types';

export const getPessoas = async ({ commit }) => {
  const request = await Pessoas.getPessoas();
  commit(types.SET_PESSOAS, request.data.pessoas);
}

export const setPessoas = async (_content, data) => {
  return Pessoas.setPessoas(data);
}

export const deletePessoas = async ({ commit }, data) => {
  await Pessoas.deletePessoas(data)/
  getPessoas({ commit });
}