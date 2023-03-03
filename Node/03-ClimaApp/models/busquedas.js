import axios from "axios";

export class Busquedas {

  historial = [];

  get paramsMapbox() {
    return {
      'access_token': process.env.MAPBOX_KEY,
      'limit': 5,
      'language': 'es'
    }
  }

  constructor() {
    // TODO: Leer DB si existe
  }

  async buscarCiudad(lugar = '') {

    try {
      // Peticion http
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramsMapbox

      });

      const resp = await instance.get();

      // const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Ottawa.json?proximity=ip&language=es&access_token=pk.eyJ1IjoiZ2Fib3NvMjEiLCJhIjoiY2xlc3VqanZ4MGJjcTQzb3Q2NG5yd3U3ciJ9.J4Ni-ghFRH8fdGTXcAD69g');

      return resp.data.features.map((lugar) => ({
        id: lugar.id,
        nombre: lugar.place_name_es,
        lng: lugar.center[0],
        lat: lugar.center[1]
      }))

    } catch (err) {

      console.log(err);

      return [];

    }

  }

}

