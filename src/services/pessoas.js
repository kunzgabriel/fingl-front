import Axios from 'axios';

export default class Pessoas {
  static getPessoas = async () => {
    return await Axios.get('http://localhost:3000/pessoas');
  }

  static setPessoas = async (data) => {
    console.log(data);
    const pessoas = [];
    pessoas.push(data);
    return await Axios.post('http://localhost:3000/pessoas', pessoas);
  }

  static deletePessoas = async (data) => {
    return await Axios.delete(`http://localhost:3000/pessoas/${data.id}`)
  }
}