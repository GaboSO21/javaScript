import('colors');
import { inquireMenu, pausa } from "./helpers/inquire.js";
// const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async () => {

  let opt = '';

  do {

    opt = await inquireMenu();
    await pausa();

  } while (opt !== 0);

}

main();

