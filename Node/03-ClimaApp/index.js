import { inquireMenu, leerInput, listadoLugares, pausa } from "./helpers/inquire.js"
import { Busquedas } from "./models/busquedas.js";
import * as dotenv from 'dotenv';
dotenv.config();

const main = async () => {

  let opt = 0

  do {

    const busquedas = new Busquedas();
    opt = await inquireMenu();

    switch (opt) {
      case 1:
        // Mostrar mensaje
        const lugar = await leerInput('Ciudad: ');
        const resultados = await busquedas.buscarCiudad(lugar);
        const id = await listadoLugares(resultados);
        const lugarSel = resultados.find(lugar => lugar.id === id);
        const { nombre, lat, lng } = lugarSel;
        console.log('Ciudad:', nombre);
        console.log('Lat:', lat);
        console.log('Lng:', lng);
        // Clima
        break;
      case 2:

        break;
    }

    if (opt !== 0) await pausa();

  } while (opt !== 0);

}

main();


