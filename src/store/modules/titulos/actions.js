import Titulos from "../../../services/titulos";
import * as types from './mutation-types';

export const getTitulos = async ({ commit }) => {
  const request = await Titulos.getTitulos();
  commit(types.SET_TITULOS, request.data.titulos);
}

export const setTitulos = async (_content, data) => {
  return Titulos.setTitulos(data);
}

export const deleteTitulos = async ({ commit }, data) => {
  await Titulos.deleteTitulos(data)/
  getTitulos({ commit });
}