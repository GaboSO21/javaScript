const { resolve } = require('path');
require('colors');

const mostrarMenu = () => {

  return new Promise(resolve => {

    console.clear();
    console.log('===================='.magenta);
    console.log('  Seleccione opcion');
    console.log('====================\n'.magenta);

    console.log('1.Crear tarea');
    console.log('2.Listar tarea');
    console.log('3.Listar tarea completadas');
    console.log('4.Listar tarea pendientes');
    console.log('5.Completar tarea');
    console.log('6.Borrar tarea');
    console.log('0.Salir');

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question('Seleccione una opcion: ', (opt) => {
      resolve(opt);
      readline.close();
    })

  });

}

const pausa = () => {

  return new Promise(resolve => {

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question(`Presione ${'ENTER'.magenta}`, (opt) => {
      resolve(opt);
      readline.close();
    })

  });

}

module.exports = {
  mostrarMenu,
  pausa
}


