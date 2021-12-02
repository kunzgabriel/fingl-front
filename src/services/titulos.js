import Axios from 'axios';

export default class Titulos {
  static getTitulos = async () => {
    return await Axios.get('http://localhost:3000/titulos');
  }

  static setTitulos = async (data) => {
    const titulos = [];
    titulos.push(data);
    return await Axios.post('http://localhost:3000/titulos', titulos);
  }

  static deleteTitulos = async (data) => {
    return await Axios.delete(`http://localhost:3000/titulos/${data.id}`)
  }
}