import { inquireMenu, leerInput, pausa } from "./helpers/inquire.js"
import { Busquedas } from "./models/busquedas.js";


const main = async () => {

  let opt = 0

  do {

    const busquedas = new Busquedas();
    opt = await inquireMenu();

    switch (opt) {
      case 1:
        // Mostrar mensaje
        const lugar = await leerInput('Ciudad: ');
        await busquedas.buscarCiudad(lugar);
        // Buscar los lugares 
        // Seleccionar lugar
        // Clima
        // Mostrar resultados
        console.log('\nInformacion de la ciudad\n');
        console.log('TODO: INFO');
        break;
      case 2:

        break;
    }

    if (opt !== 0) await pausa();

  } while (opt !== 0);

}

main();


