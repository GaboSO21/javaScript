import axios from "axios";

export class Busquedas {

  historial = [];

  constructor() {
    // TODO: Leer DB si existe
  }

  async buscarCiudad(lugar = '') {

    try {
      // Peticion http
      // console.log('ciudad', lugar);
      const resp = await axios.get('https://reqres.in/api/users?page=2');
      console.log(resp.data);
    } catch (err) {
      console.log(err);
      return [];
    }

    return []; // regresar lugares 

  }

}

