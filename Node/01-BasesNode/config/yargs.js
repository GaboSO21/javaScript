const argv = require("yargs")
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    description: 'Base de multiplicaciones'
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    demandOption: true,
    description: 'Listar o no tabla'
  })
  .option('a', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    description: 'Numero limite de multiplicaciones'
  })
  .check((argv) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser numerica'
    }

    return true;

  })
  .argv;

module.exports = argv;

