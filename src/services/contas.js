import Axios from 'axios';

export default class Contas {
  static getContas = async () => {
    return await Axios.get('http://localhost:3000/contas');
  }

  static setContas = async (data) => {
    const contas = [];
    contas.push(data);
    return await Axios.post('http://localhost:3000/contas', contas);
  }

  static deleteContas = async (data) => {
    return await Axios.delete(`http://localhost:3000/contas/${data.id}`)
  }
}