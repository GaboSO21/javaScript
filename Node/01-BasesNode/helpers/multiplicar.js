const fs = require('fs');

const crearArchivo = (base) => {

  return new Promise((resolve, reject) => {

    let salida = '';

    try {

      for (let index = 1; index <= base; index++) {

        salida += (base + "*" + index + " = " + (base * index) + '\n');

      }

      fs.writeFileSync(`tabla-${base}.txt`, salida);

      return resolve(`tabla-${base}`);

    } catch (err) {

      throw err;

    }

  });


}

module.exports = {
  crearArchivo
}
