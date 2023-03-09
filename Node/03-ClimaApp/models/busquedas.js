import fs from 'fs';

import axios from "axios";

export class Busquedas {

  historial = [];
  dbPath = './db/database.json';

  constructor() {
    // TODO: Leer DB si existe
    if (this.leerDB()) {
      this.historial = this.leerDB();
    }
  }

  get paramsMapbox() {
    return {
      'access_token': process.env.MAPBOX_KEY,
      'limit': 5,
      'language': 'es'
    }
  }

  get paramsWeather() {
    return {
      'appid': process.env.OPENWEATHER_KEY,
      'lat': 0,
      'lon': 0,
      'units': 'metric',
      'lang': 'es'
    }
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

  async buscarClima(lat = 0, lon = 0) {

    try {

      const instance = axios.create({
        baseURL: 'https://api.openweathermap.org/data/2.5/weather?',
        params: { ...this.paramsWeather, lat, lon }
      })

      const resp = await instance.get();

      const { temp, temp_min, temp_max } = resp.data.main;
      const { description } = resp.data.weather[0];

      return {
        desc: description,
        temp_min,
        temp_max,
        temp
      }

    } catch (err) {

      console.log(err);

      return [];

    }

  }

  agregarHistorial(lugar = '') {

    if (this.historial.includes(lugar.toLowerCase())) {
      return;
    }

    this.historial.unshift(lugar);

    // Grabar en DB
    this.guardarDB();
  }

  guardarDB() {

    const payload = {
      historial: this.historial
    }

    fs.writeFileSync(this.dbPath, JSON.stringify(payload));

  }

  leerDB() {

    if (!fs.existsSync(this.dbPath)) {
      return null;
    } else {
      const info = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });
      const data = JSON.parse(info);
      this.historial = data.historial;
    }

  }

}









