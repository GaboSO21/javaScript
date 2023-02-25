require('colors');
const { inquireMeny } = require('./helpers/inquire');
const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async () => {

  let opt = '';

  do {

    console.clear();
    await inquireMeny;

  } while (opt !== '0');

}

main();

