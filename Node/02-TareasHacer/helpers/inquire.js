import colors from 'colors';
import inquirer from 'inquirer';

const optPausa = [
  {
    type: 'input',
    name: 'pausa',
    message: `Presione ${'ENTER'.magenta} para continuar...`,
    waitUserInput: true
  }
]

const opts = [
  {
    type: 'list',
    name: 'opcion',
    message: 'Pon tu opcion',
    choices: [
      {
        name: '1.Crear tarea',
        value: 1
      },
      {
        name: '2.Listar tareas',
        value: 2
      },
      {
        name: '3.Listar tareas completadas',
        value: 3
      },
      {
        name: '4.Listar tareas pendientes',
        value: 4
      },
      {
        name: '5.Completar tarea(s)',
        value: 5
      },
      {
        name: '6.Borrar tarea',
        value: 6
      },
      {
        name: '0.Salir',
        value: 0
      }
    ]
  }
];

export const inquireMenu = async () => {

  await tituloMenu();
  const { opcion } = await inquirer.prompt(opts);

  return opcion;

}

export const pausa = async () => {

  const opcion = await inquirer.prompt(optPausa);

  return opcion;

}

export const leerInput = async (message) => {

  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Por favor ingrese un valor';
        }

        return true;
      }
    }
  ]

  const { desc } = await inquirer.prompt(question);

  return desc;

}

const tituloMenu = () => {

  return new Promise((resolve) => {

    console.clear();
    const salida = console.log('Seleccione una opcion'.red);
    const divisor = console.log('====================='.magenta);

    resolve(salida, divisor);

  });

}

export const listadoTareasBorrar = async (tareas = []) => {

  const choices = tareas.map((tarea, idx) => {

    return {
      value: tarea.id,
      name: `${colors.green(idx + 1)} ${tarea.desc}`
    }

  })

  choices.unshift({
    value: '0',
    name: `${colors.green('0.')} Cancelar`
  })

  const optsBorrar = [
    {
      type: 'list',
      name: 'id',
      message: 'Borrar',
      choices
    }
  ]

  const { id } = await inquirer.prompt(optsBorrar);
  return id;

}

export const confirmar = async (message) => {

  const question = [
    {
      type: 'confirm',
      name: 'Ok',
      message
    }
  ]

  const { ok } = await inquirer.prompt(question);
  return ok;

}



















