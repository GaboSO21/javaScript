const fs = require('fs');

const crearArchivo = () => {

  let salida = '';

  for (let index = 1; index <= 10; index++) {
    salida += (index * 2 + "\n");
  }

  fs.writeFileSync('tabla-2.txt', salida);

}

module.exports = {
  crearArchivo
}
