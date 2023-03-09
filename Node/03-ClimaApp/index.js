import { inquireMenu, leerInput, listadoLugares, pausa } from "./helpers/inquire.js"
import { Busquedas } from "./models/busquedas.js";
import colors from 'colors';
import * as dotenv from 'dotenv';
dotenv.config();

const main = async () => {

  let opt = 0
  const busquedas = new Busquedas();

  do {

    opt = await inquireMenu();

    switch (opt) {
      case 1:
        // Mostrar mensaje
        const lugar = await leerInput('Ciudad: ');
        const resultados = await busquedas.buscarCiudad(lugar);
        const id = await listadoLugares(resultados);
        if (id !== '0') {
          const lugarSel = resultados.find(lugar => lugar.id === id);
          busquedas.agregarHistorial(lugarSel.nombre);
          const { nombre, lat, lng } = lugarSel;
          const { desc, temp_min, temp_max, temp } = await busquedas.buscarClima(lat, lng);
          console.log('Ciudad:', nombre);
          console.log('Lat:', lat);
          console.log('Lng:', lng);
          // Clima
          console.log('Description:', desc);
          console.log('Temperatura:', temp);
          console.log('Temperatura minima:', temp_min);
          console.log('Temperatura maxima:', temp_max);
          break;
        } else {
          break;
        }
      case 2:

        busquedas.historial.forEach((lugar, i) => {
          console.log(`${colors.green(i + 1)}. ${lugar}`);
        })

        break;
    }

    if (opt !== 0) await pausa();

  } while (opt !== 0);

}

main();


