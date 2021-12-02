import Axios from 'axios';

export default class TabelaContabil {
  static getTabelaContabil = async () => {
    return await Axios.get('http://localhost:3000/tabelaContabil');
  }

  static setTabelaContabil = async (data) => {
    const tabelaContabil = [];
    tabelaContabil.push(data);
    return await Axios.post('http://localhost:3000/tabelaContabil', tabelaContabil);
  }

  static deleteTabelaContabil = async (data) => {
    return await Axios.delete(`http://localhost:3000/tabelaContabil/${data.id}`)
  }
}