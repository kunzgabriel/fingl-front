import TabelaContabil from "../../../services/tabelaContabil";
import * as types from './mutation-types';

export const getTabelaContabil = async ({ commit }) => {
  const request = await TabelaContabil.getTabelaContabil();
  commit(types.SET_TABELA_CONTABIL, request.data.tabelaContabil);
}

export const setTabelaContabil = async (_content, data) => {
  return TabelaContabil.setTabelaContabil(data);
}

export const deleteTabelaContabil = async ({ commit }, data) => {
  await TabelaContabil.deleteTabelaContabil(data)/
  getTabelaContabil({ commit });
}